import { createClient } from "@supabase/supabase-js";

import {
  SUPABASE_SERVICE_KEY,
  SUPABASE_URL,
  SUPABASE_ANON_KEY,
} from "~/lib/env";
import { isBrowser } from "~/lib/isBrowser";

function getSupabaseClient(supabaseKey: string, access_token?: string) {
  return createClient(SUPABASE_URL, supabaseKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
    global: access_token
      ? {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      : {},
  });
}

export function getSupabase(accessToken?: string) {
  return getSupabaseClient(SUPABASE_ANON_KEY, accessToken);
}

export function getSupabaseAdmin(accessToken?: string) {
  if (isBrowser)
    throw new Error(
      "getSupabaseAdmin is not available in browser and should NOT be used in insecure environments"
    );

  return getSupabaseClient(SUPABASE_SERVICE_KEY, accessToken);
}
