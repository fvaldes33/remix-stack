import type { PostgrestError } from "@supabase/supabase-js";
import { useMutation } from "@tanstack/react-query";
import type { MutationOptions } from "@tanstack/react-query";
import { useAtom, useAtomValue } from "jotai";

import { accessTokenAtom, profileAtom } from "~/lib/atoms/root";
import { getSupabase } from "~/lib/supabase";
import type { QueryBase } from "~/lib/types";
import type { ProfileRecord } from "./schema";

interface CreateProfileParams extends Partial<ProfileRecord> {
  email: string;
  user_id: string;
}

export async function createProfile({
  values,
  accessToken,
}: QueryBase<CreateProfileParams>) {
  const client = getSupabase(accessToken);
  const { email, user_id, ...rest } = values;
  const { data, error } = await client
    .from("profiles")
    .upsert({
      email,
      id: user_id, // primary key for upsert to work
      ...rest,
    })
    .select("*")
    .single();

  if (error) {
    throw error;
  }

  return data as ProfileRecord;
}

export function useCreateProfile(
  options: MutationOptions<
    ProfileRecord,
    PostgrestError,
    CreateProfileParams
  > = {}
) {
  const accessToken = useAtomValue(accessTokenAtom);
  const [, setProfile] = useAtom(profileAtom);

  return useMutation(
    (values: CreateProfileParams) => createProfile({ values, accessToken }),
    {
      ...options,
      onSuccess: (data, ...args) => {
        setProfile(data);
        if (options.onSuccess) {
          options.onSuccess(data, ...args);
        }
      },
    }
  );
}
