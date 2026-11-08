// Cross-device sync settings (see supabase/schema.sql and README "Syncing Progress Across Devices").
// Both values come from the Supabase dashboard: Project Settings -> API (or "API Keys").
// The anon / publishable key is designed to be public; the database only exposes the two
// sync functions to it. Leave these blank to hide the sync card entirely.
window.NREMT_SYNC_CONFIG = {
  supabaseUrl: "https://xmkmpxlslfxthcjvenob.supabase.co",
  supabaseAnonKey: "sb_publishable_w8pCzpJCH5gMeUzSZCzZNA_LVMydrVi"
};
