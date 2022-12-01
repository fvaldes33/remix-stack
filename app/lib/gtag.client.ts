/**
 * @example
 * https://developers.google.com/analytics/devguides/collection/gtagjs/pages
 */
export const pageview = (url: string, trackingId: string) => {
  if (!window.gtag) {
    console.warn(
      "window.gtag is not defined. This could mean your google analytics script has not loaded on the page yet."
    );
    return;
  }
  window.gtag("config", trackingId, {
    page_path: url,
  });
};

/**
 * @example
 * https://developers.google.com/analytics/devguides/collection/gtagjs/events
 */
export const event = ({
  action,
  category,
  label,
  value,
}: Record<string, string>) => {
  if (!window.gtag) {
    console.warn(
      "window.gtag is not defined. This could mean your google analytics script has not loaded on the page yet."
    );
    return;
  }
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

export const GTAG_EVENTS = {
  CREATE_PROMPT: { action: "create_prompt", category: "Prompt" },
  OPEN_HISTORY: { action: "open_history", category: "UI" },
  PUBLIC_SHARE_COPY: { action: "public_share_copy", category: "Share" },
  CHANGE_PRODUCT: { action: "change_product", category: "Shop" },
  REMOVE_BG: { action: "remove_bg", category: "Shop" },
  SURPRISE_ME: { action: "surprise_me", category: "Prompt" },

  /** carta maps */
  SHARE_COPY: { action: "share_copy", category: "Share" },
  SAVE_IMAGE: { action: "save_image", category: "Share" },
  SAVE_QR_CODE: { action: "save_qr_code", category: "Share" },
  DRAW_MODE: { action: "draw_mode", category: "Map" },
  SEARCH_OPEN: { action: "search_open", category: "Search" },
  SEARCH_COMPLETE: { action: "search_complete", category: "Search" },
  OPEN_PREVIEW: { action: "open_preview", category: "Preview" },
};
