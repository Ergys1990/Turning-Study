/*
  Sign-in settings — the ONLY file you need to edit.
  Paste the two values from Supabase: Project Settings → API.
*/
window.AUTH_CONFIG = {

  // Project URL, e.g. 'https://abcdefghijklmnop.supabase.co'
  SUPABASE_URL: 'https://YOUR-PROJECT-REF.supabase.co',

  // The PUBLIC "anon" key (safe to publish). NEVER paste the "service_role" key here.
  SUPABASE_ANON_KEY: 'YOUR-ANON-PUBLIC-KEY',

  // Optional. Only these email domains can register, e.g. ['yourcompany.com'].
  // Leave [] to allow any. (This is a convenience check — enforce it for real
  // with the optional trigger in supabase-setup.sql.)
  ALLOWED_EMAIL_DOMAINS: [],

  // Minimum password length (also set the same number in Supabase → Authentication → Providers → Email).
  MIN_PASSWORD_LENGTH: 10,

  // Sign people out after this many idle minutes. 0 = never.
  IDLE_MINUTES: 0,

  // Seconds before "Send it again" can be used.
  RESEND_COOLDOWN_SECONDS: 60,

  // true  = the tool is kept in a private Supabase bucket and only sent to signed-in users (recommended).
  // false = the tool file (studio.html) sits next to index.html on GitHub. Simpler, but anyone who
  //         knows its address can open it without signing in.
  PROTECT_APP: true,

  APP_BUCKET: 'app',
  APP_FILE: 'studio.html'
};
