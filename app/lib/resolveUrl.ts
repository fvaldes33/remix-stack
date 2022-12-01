import type { PromptResult } from "~/modules/prompts";
import { BASE_TRANSFORM_ENDPOINT } from "./const";
import { SPACES_BASE, SPACES_CDN } from "./env";

export function resolveUrl(path: string) {
  if (path.startsWith("http")) return path;
  return new URL(path, SPACES_BASE).href;
}

export function resolveCdn(path: string) {
  if (path.startsWith("http")) return path;
  return new URL(path, SPACES_CDN).href;
}

export function resolveThumbnail(result: PromptResult) {
  if (result.thumbfile) {
    return resolveCdn(result.thumbfile);
  }
  return getThumbnailUrl(result.id);
}

export function getThumbnailUrl(id: number) {
  return [BASE_TRANSFORM_ENDPOINT, id].join("/");
}
