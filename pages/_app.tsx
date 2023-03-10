import Head from "next/head";
import App, { AppContext, AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "@/helpers/createEmotionCache";
import { wrapper } from "@/store/store";
import { createTheme, GlobalStyles } from "@mui/material";
import { CookieValueTypes, getCookie, setCookie } from "cookies-next";
import absoluteUrl from "next-absolute-url";
import { fetch as usersFetch } from "@/services/user";

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
// import { Amplify, AuthModeStrategyType } from "aws-amplify";
// import config from "@/aws-exports";
import { Cookies, Responses, Routes } from "@/constants/enums";
import { fetch as accountsFetch } from "@/services/account";
import {
  IAccountListingVariables,
  IResponse,
  IUserListingVariables,
} from "@/models/app";
import { getSession } from "@/services/auth";
import { setSession } from "@/store/appSlice";
import { setSelected as accountsSelected } from "@/store/accountSlice";
// Amplify.Logger.LOG_LEVEL = "DEBUG";
// Amplify.configure({
//   ...config,
//   ssr: true,
//   DataStore: {
//     authModeStrategyType: AuthModeStrategyType.MULTI_AUTH,
//   },
// });

const MyApp = ({ Component, ...rest }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { locale } = useRouter();
  const clientSideEmotionCache = createEmotionCache(locale!);
  const lightTheme = createTheme(lightThemeOptions(locale!));
  const { emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={lightTheme}>
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
          {/* <Header /> */}
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
    const { origin } = absoluteUrl(appContext.ctx.req);

    if (!appContext.router.route.includes(Routes.ACCOUNTS)) {
      const cookieSession: CookieValueTypes = getCookie(Cookies.SESSION, {
        req: appContext.ctx.req,
        res: appContext.ctx.res,
      });

      if (cookieSession === undefined) {
        const params: IAccountListingVariables = {
          searchText: "",
          limit: 1000,
          startIndex: 0,
          domain: origin.includes("localhost") ? "localhost" : origin,
        };

        const result: IResponse[] = await Promise.all([
          getSession(appContext),
          accountsFetch(params),
        ]);

        const sessionResponse: IResponse = result[0];
        const accountsResponse: IResponse = result[1];

        if (accountsResponse.type === Responses.SUCCESS) {
          store.dispatch(accountsSelected(accountsResponse.data));
        }

        if (sessionResponse.type === Responses.SUCCESS) {
          const sessionParams: IUserListingVariables = {
            searchText: "",
            limit: 1000,
            startIndex: 0,
            email: sessionResponse.data!.email!,
          };

          const usersResponse: IResponse = await usersFetch(sessionParams);

          if (
            usersResponse.type === Responses.SUCCESS &&
            usersResponse.data.length > 0
          ) {
            console.log("usersResponse.data[0]", usersResponse.data[0]);
            store.dispatch(setSession(usersResponse.data[0]));
          }

          setCookie(Cookies.SESSION, JSON.stringify(usersResponse.data), {
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
        store.dispatch(setSession(JSON.parse(cookieSession as string)));
      }
    }

    return { ...ctx };
  }
);

export default MyApp;
