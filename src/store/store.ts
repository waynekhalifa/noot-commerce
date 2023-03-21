import { createWrapper } from "next-redux-wrapper";
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { slice as appSlice } from "./appSlice";
import { slice as resourceSlice } from "./resourceSlice";
import { slice as modalSlice } from "./modalSlice";
import { Environments } from "@/constants/enums";

const makeStore = () =>
  configureStore({
    reducer: {
      [appSlice.name]: appSlice.reducer,
      [resourceSlice.name]: resourceSlice.reducer,
      [modalSlice.name]: modalSlice.reducer,
    },
    devTools: process.env.NODE_ENV === Environments.PROD ? true : false,
    middleware: (getDefaultMiddleware: any) =>
      // getDefaultMiddleware has any type
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
