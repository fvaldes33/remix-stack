import { isBrowser } from "./isBrowser";

type EnvOptions = {
  isSecret?: boolean;
  isRequired?: boolean;
};
function getEnv(
  name: string,
  { isRequired, isSecret }: EnvOptions = { isSecret: true, isRequired: true }
): string {
  if (isBrowser && isSecret) return "";

  const source = (isBrowser ? window.env : process.env) ?? {};

  const value = source[name as keyof typeof source] as string;

  if (!value && isRequired) {
    throw new Error(`${name} is not set`);
  }

  return value;
}

/**
 * Server env
 */
export const SUPABASE_SERVICE_KEY = getEnv("SUPABASE_SERVICE_KEY");
export const SESSION_SECRET = getEnv("SESSION_SECRET");
// Stripe
export const PRIVATE_STRIPE_KEY = getEnv("PRIVATE_STRIPE_KEY");
export const PRIVATE_STRIPE_WEBHOOK_SECRET = getEnv(
  "PRIVATE_STRIPE_WEBHOOK_SECRET"
);

/**
 * Shared envs
 */
export const NODE_ENV = getEnv("NODE_ENV", {
  isSecret: false,
  isRequired: false,
});
export const SUPABASE_URL = getEnv("SUPABASE_URL", { isSecret: false });
export const SUPABASE_ANON_KEY = getEnv("SUPABASE_ANON_KEY", {
  isSecret: false,
});
export const PUBLIC_STRIPE_KEY = getEnv("PUBLIC_STRIPE_KEY", {
  isSecret: false,
});
export const PRIVATE_PRINTFUL_SECRET = getEnv("PRIVATE_PRINTFUL_SECRET", {
  isSecret: true,
});

export const SPACES_KEY = getEnv("SPACES_KEY", {
  isSecret: true,
});
export const SPACES_SECRET = getEnv("SPACES_SECRET", {
  isSecret: true,
});
export const SPACES_BASE = getEnv("SPACES_BASE", {
  isSecret: false,
});
export const SPACES_CDN = getEnv("SPACES_CDN", {
  isSecret: false,
});

// Google
export const GA_TRACKING_ID = getEnv("GA_TRACKING_ID", {
  isSecret: false,
  isRequired: false,
});
export const GTM_TRACKING_ID = getEnv("GTM_TRACKING_ID", {
  isSecret: false,
  isRequired: false,
});

export const PRIVATE_SLACK_WEBHOOK = getEnv("PRIVATE_SLACK_WEBHOOK");
export const SLACK_TOKEN = getEnv("SLACK_TOKEN");

export function getBrowserEnv() {
  return {
    SUPABASE_URL,
    SUPABASE_ANON_KEY,
    PUBLIC_STRIPE_KEY,
    SPACES_BASE,
    SPACES_CDN,
  };
}
