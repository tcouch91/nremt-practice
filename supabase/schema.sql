-- Cross-device progress sync for the NREMT practice app.
-- Run this once in the Supabase dashboard: SQL Editor -> New query -> paste -> Run.
--
-- Each device that turns on sync shares a random "sync code" (e.g. NATE-7F3K-Q9WX-M2PA).
-- The app stores one JSON document of progress per code. The table itself is locked down:
-- the browser can only call the two functions below, so nobody can list or browse other codes.

create table if not exists public.progress (
  code       text primary key check (char_length(code) between 12 and 64),
  data       jsonb not null,
  version    integer not null default 1,
  updated_at timestamptz not null default now()
);

alter table public.progress enable row level security;
-- No RLS policies on purpose: direct table access is denied for the public (anon) role.
revoke all on public.progress from anon, authenticated;

-- Returns {data, version, updated_at} for a code, or null if the code has never been used.
-- If the caller already has the latest version, returns just {version, unchanged: true} so phones
-- don't re-download their whole history every time the app is opened.
drop function if exists public.get_progress(text);
create or replace function public.get_progress(p_code text, p_known_version integer default 0)
returns jsonb
language sql
security definer
set search_path = public
as $$
  select case
    when version = p_known_version then jsonb_build_object('version', version, 'unchanged', true)
    else jsonb_build_object('data', data, 'version', version, 'updated_at', updated_at)
  end
  from public.progress
  where code = p_code;
$$;

-- Saves progress if nobody else saved since p_base_version (0 = create a new code).
-- Returns the new version, or -1 when the caller is out of date and must re-download and merge.
create or replace function public.put_progress(p_code text, p_data jsonb, p_base_version integer)
returns integer
language plpgsql
security definer
set search_path = public
as $$
declare
  new_version integer;
begin
  if p_code is null or char_length(p_code) < 12 or char_length(p_code) > 64 then
    raise exception 'invalid sync code';
  end if;
  if pg_column_size(p_data) > 2000000 then
    raise exception 'progress payload too large';
  end if;

  if p_base_version = 0 then
    insert into public.progress (code, data)
    values (p_code, p_data)
    on conflict (code) do nothing
    returning version into new_version;
  else
    update public.progress
    set data = p_data, version = version + 1, updated_at = now()
    where code = p_code and version = p_base_version
    returning version into new_version;
  end if;

  return coalesce(new_version, -1);
end;
$$;

revoke all on function public.get_progress(text, integer) from public;
revoke all on function public.put_progress(text, jsonb, integer) from public;
grant execute on function public.get_progress(text, integer) to anon, authenticated;
grant execute on function public.put_progress(text, jsonb, integer) to anon, authenticated;
