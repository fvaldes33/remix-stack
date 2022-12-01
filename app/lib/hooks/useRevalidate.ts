import { useFetcher } from "@remix-run/react";
import { useCallback, useMemo } from "react";

export function useRevalidate(path: string) {
  let fetcher = useFetcher();

  let revalidate = useCallback(
    () => {
      fetcher.submit(null, { action: path, method: "post" });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [path]
  );

  return useMemo(() => ({ revalidate }), [revalidate]);
}
