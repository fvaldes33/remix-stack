import type { AuthSession } from "@supabase/supabase-js";
import { mapAuthSession } from "~/lib/session.server";
import { getSupabaseAdmin } from "~/lib/supabase";

export async function getAuthAccountByAccessToken(
  accessToken: AuthSession["access_token"]
) {
  const { data, error } = await getSupabaseAdmin().auth.getUser(accessToken);

  if (!data || error) return null;

  return data.user;
}

export async function signInWithEmail(email: string, password: string) {
  const { data, error } = await getSupabaseAdmin().auth.signInWithPassword({
    email,
    password,
  });

  if (!data || error) return null;

  return mapAuthSession(data.session);
}
