import Head from "next/head";
import App, { AppContext, AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "@/helpers/createEmotionCache";
import { wrapper } from "@/store/store";
import { createTheme, GlobalStyles } from "@mui/material";
import { CookieValueTypes, getCookie, setCookie } from "cookies-next";

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
import { Provider, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Cookies, Responses, Routes } from "@/constants/enums";
import { IResponse, Mode } from "@/models/app";
import { getSession } from "@/services/auth";
import { selectMode, setSession } from "@/store/appSlice";
import darkThemeOptions from "@/theme/darkThemeOptions";

const MyApp = ({ Component, ...rest }: AppProps) => {
  const mode: Mode = useSelector(selectMode);
  const { store, props } = wrapper.useWrappedStore(rest);
  const { locale } = useRouter();
  const clientSideEmotionCache = createEmotionCache(locale!);
  const lightTheme = createTheme(lightThemeOptions(locale!));
  const darkTheme = createTheme(darkThemeOptions(locale!));
  const { emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={mode === "light" ? lightTheme : darkTheme}>
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
          <Component {...pageProps} />
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
      const cookieSession: CookieValueTypes = getCookie(Cookies.SESSION, {
        req: appContext.ctx.req,
        res: appContext.ctx.res,
      });

      if (cookieSession === undefined) {
        const sessionResponse: IResponse = await getSession(appContext);

        if (sessionResponse.type === Responses.SUCCESS) {
          setCookie(Cookies.SESSION, "true", {
            req: appContext.ctx.req,
            res: appContext.ctx.res,
            maxAge: 60 * 60 * 24,
          });
        } else {
          setCookie(Cookies.SESSION, "false", {
            req: appContext.ctx.req,
            res: appContext.ctx.res,
            maxAge: 60 * 60 * 24,
          });
        }
      } else {
        const session: any = JSON.parse(cookieSession as string);
        store.dispatch(setSession(session[0]));
      }
    }

    return { ...ctx };
  }
);

export default MyApp;
