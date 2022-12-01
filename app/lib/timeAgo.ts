import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export function timeAgo(dt: string) {
  return dayjs(dt).fromNow();
}
