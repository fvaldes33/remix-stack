export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SUPABASE_URL: string;
      SUPABASE_SERVICE_KEY: string;
      PUBLIC_SUPABASE_ANON_KEY: string;
      SESSION_SECRET: string;
      SPACES_KEY: string;
      SPACES_SECRET: string;
      SPACES_BASE: string;
      PRIVATE_SLACK_WEBHOOK: string;
      SLACK_TOKEN: string;
    }
  }

  interface Window {
    env: {
      SUPABASE_URL: string;
      PUBLIC_SUPABASE_ANON_KEY: string;
      GA_TRACKING_ID: string;
      GTM_TRACKING_ID: string;
      SPACES_KEY: string;
      SPACES_SECRET: string;
      SPACES_BASE: string;
    };
    $crisp: any;
    gtag: (
      option: string,
      gaTrackingId: string,
      options: Record<string, unknown>
    ) => void;
  }
}
