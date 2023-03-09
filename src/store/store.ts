import { createWrapper } from "next-redux-wrapper";
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { slice as appSlice } from "./appSlice";
import { slice as accountSlice } from "./accountSlice";
import { slice as featureSlice } from "./featureSlice";
import { slice as pageSlice } from "./pageSlice";
import { slice as resourceSlice } from "./resourceSlice";

const makeStore = () =>
  configureStore({
    reducer: {
      [appSlice.name]: appSlice.reducer,
      [accountSlice.name]: accountSlice.reducer,
      [featureSlice.name]: featureSlice.reducer,
      [pageSlice.name]: pageSlice.reducer,
      [resourceSlice.name]: resourceSlice.reducer,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);
