import type { PostgrestError } from "@supabase/supabase-js";
import { useMutation } from "@tanstack/react-query";
import type { MutationOptions } from "@tanstack/react-query";
import { useAtom, useAtomValue } from "jotai";

import { accessTokenAtom, profileAtom } from "~/lib/atoms/root";
import { getSupabase } from "~/lib/supabase";
import type { QueryBase } from "~/lib/types";
import type { ProfileRecord } from "./schema";

export async function updateProfile({
  values,
  accessToken,
}: QueryBase<ProfileRecord>) {
  const client = getSupabase(accessToken);
  const { data, error } = await client
    .from("profiles")
    .update(values)
    .match({ id: values.id })
    .select("*")
    .single();

  if (error) throw error;

  return data as ProfileRecord;
}

export function useUpdateProfile(
  options: MutationOptions<
    ProfileRecord,
    PostgrestError,
    Partial<ProfileRecord>
  > = {}
) {
  const accessToken = useAtomValue(accessTokenAtom);
  const [profile, setProfile] = useAtom(profileAtom);

  return useMutation(
    (values) =>
      updateProfile({ values: { ...profile, ...values }, accessToken }),
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
