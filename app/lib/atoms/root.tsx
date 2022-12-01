import type { SupabaseClient, User } from "@supabase/supabase-js";
import { atom } from "jotai";
import type { ProfileRecord } from "~/modules/profiles";

export const rootScope = Symbol("__root");

export const sbAtom = atom<SupabaseClient>(null as unknown as SupabaseClient);

export const accessTokenAtom = atom<string>("");
export const userAtom = atom<User>(null as unknown as User);
export const profileAtom = atom<ProfileRecord>(
  null as unknown as ProfileRecord
);
export const colorSchemeAtom = atom<string>("dark");
export const showAuthModalAtom = atom<boolean>(false);
