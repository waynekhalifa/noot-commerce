import Head from "next/head";
import App, { AppContext, AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "@/helpers/createEmotionCache";
import { wrapper } from "@/store/store";
import { createTheme, GlobalStyles } from "@mui/material";

// English Font Family
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
// Arabic Font Family
import "@fontsource/tajawal/300.css";
import "@fontsource/tajawal/400.css";
import "@fontsource/tajawal/500.css";
import "@fontsource/tajawal/700.css";

import lightThemeOptions from "@/theme/lightThemeOptions";
import { Provider } from "react-redux";
import { useRouter } from "next/router";
import { Mode } from "@/models/app";
import darkThemeOptions from "@/theme/darkThemeOptions";
import { useEffect, useState } from "react";
import { CookieValueTypes, getCookie } from "cookies-next";
import { Cookies, Routes } from "@/constants/enums";
import { setSession } from "@/store/appSlice";

function getActiveTheme(themeMode: Mode, locale: any) {
  return themeMode === "light"
    ? createTheme(lightThemeOptions(locale))
    : createTheme(darkThemeOptions(locale!));
}

const MyApp = ({ Component, ...rest }: AppProps) => {
  const { locale } = useRouter();
  const [activeTheme, setActiveTheme] = useState(
    getActiveTheme("light", locale!)
  );
  const [selectedTheme, setSelectedTheme] = useState<Mode>("light");

  const toggleTheme: React.MouseEventHandler<HTMLAnchorElement> = () => {
    const desiredTheme = selectedTheme === "light" ? "dark" : "light";

    setSelectedTheme(desiredTheme);
  };

  useEffect(() => {
    setActiveTheme(getActiveTheme(selectedTheme, locale!));
  }, [selectedTheme]);

  const { store, props } = wrapper.useWrappedStore(rest);

  const clientSideEmotionCache = createEmotionCache(locale!);
  const { emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={activeTheme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <GlobalStyles
            styles={{
              ".MuiAccordionSummary-root .MuiAccordionSummary-content": {
                margin: "12px 8px !important",
              },
              ".MuiAccordionSummary-root .MuiAccordionSummary-content.Mui-expanded":
                {
                  margin: "12px 8px !important",
                },
              ".MuiAccordionSummary-root.Mui-expanded": {
                minHeight: "0 !important",
              },
              ".MuiAccordionSummary-root.Mui-expanded .MuiTypography-root": {
                marginLeft: "0 !important",
              },
            }}
          />
          <Component {...pageProps} toggleTheme={toggleTheme} />
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  );
};

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.

MyApp.getInitialProps = wrapper.getInitialAppProps(
  (store) => async (appContext: AppContext) => {
    const ctx = await App.getInitialProps(appContext);

    if (!appContext.router.route.includes(Routes.ACCOUNTS)) {
      const cookieSession: CookieValueTypes = getCookie(Cookies.ACCESS_TOKEN, {
        req: appContext.ctx.req,
        res: appContext.ctx.res,
      });

      if (cookieSession) {
        const session: any = JSON.parse(cookieSession as string);
        store.dispatch(setSession(session[0]));
      }
    }

    return { ...ctx };
  }
);

export default MyApp;
