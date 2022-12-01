import { useAtomValue } from "jotai";
import { profileAtom, userAtom } from "~/lib/atoms/root";

export function useUserData() {
  const user = useAtomValue(userAtom);
  const profile = useAtomValue(profileAtom);

  return {
    user,
    profile,
  };
}
