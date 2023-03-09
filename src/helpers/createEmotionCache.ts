import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { Languages } from "@/constants/enums";

const isBrowser = typeof document !== "undefined";

// On the client side, Create a meta tag at the top of the <head> and set it as insertionPoint.
// This assures that MUI styles are loaded first.
// It allows developers to easily override MUI styles with other styling solutions, like CSS modules.
function createEmotionCache(locale: string) {
  let insertionPoint;

  if (isBrowser) {
    const emotionInsertionPoint = document.querySelector<HTMLMetaElement>(
      'meta[name="emotion-insertion-point"]'
    );
    insertionPoint = emotionInsertionPoint ?? undefined;
  }

  return locale === Languages.ARABIC
    ? createCache({
        key: "mui-style",
        stylisPlugins: [prefixer, rtlPlugin],
        insertionPoint,
      })
    : createCache({ key: "mui-style", insertionPoint });
}

export default createEmotionCache;
