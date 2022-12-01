import { createCookieSessionStorage, redirect } from "@remix-run/node";
import type { AuthSession as SupabaseAuthSession } from "@supabase/supabase-js";
import { SESSION_KEY, SESSION_ERROR_KEY, SESSION_MAX_AGE } from "./const";
import crypto from "crypto";

export interface AuthSession {
  accessToken: string;
  refreshToken: string;
  userId: string;
  email: string;
  expiresIn: number;
  expiresAt: number;
  providerToken?: string | null;
}

export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__session",
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secrets: [process.env.SESSION_SECRET],
    secure: process.env.NODE_ENV === "production",
  },
});

const { commitSession } = sessionStorage;

export { commitSession };

export async function getSession(request: Request) {
  const cookie = request.headers.get("Cookie");
  return sessionStorage.getSession(cookie);
}

export function generateHash() {
  return crypto.randomBytes(16).toString("hex");
}

export async function createAuthSession({
  request,
  authSession,
  redirectTo,
}: {
  request: Request;
  authSession: AuthSession;
  redirectTo: string;
}) {
  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await commitAuthSession(request, {
        authSession,
        flashErrorMessage: null,
      }),
    },
  });
}

export async function getAuthSession(
  request: Request
): Promise<AuthSession | null> {
  const session = await getSession(request);
  return session.get(SESSION_KEY);
}

export async function commitAuthSession(
  request: Request,
  {
    authSession,
    flashErrorMessage,
  }: {
    authSession?: AuthSession | null;
    flashErrorMessage?: string | null;
  } = {}
) {
  const session = await getSession(request);

  // allow user session to be null.
  // useful if you want to clear session and display a message explaining why
  if (authSession !== undefined) {
    session.set(SESSION_KEY, authSession);
  }

  session.flash(SESSION_ERROR_KEY, flashErrorMessage);

  return sessionStorage.commitSession(session, { maxAge: SESSION_MAX_AGE });
}

export async function destroyAuthSession(request: Request) {
  const session = await getSession(request);

  return redirect("/", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session),
    },
  });
}

export function mapAuthSession(
  supabaseAuthSession: SupabaseAuthSession | null
): AuthSession | null {
  if (!supabaseAuthSession) return null;

  return {
    accessToken: supabaseAuthSession.access_token,
    refreshToken: supabaseAuthSession.refresh_token ?? "",
    userId: supabaseAuthSession.user?.id ?? "",
    email: supabaseAuthSession.user?.email ?? "",
    expiresIn: supabaseAuthSession.expires_in ?? -1,
    expiresAt: supabaseAuthSession.expires_at ?? -1,
    providerToken: supabaseAuthSession.provider_token,
  };
}
