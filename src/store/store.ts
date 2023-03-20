import { createWrapper } from "next-redux-wrapper";
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { slice as appSlice } from "./appSlice";
import { slice as resourceSlice } from "./resourceSlice";
import { slice as modalSlice } from "./modalSlice";

const makeStore = () =>
  configureStore({
    reducer: {
      [appSlice.name]: appSlice.reducer,
      [resourceSlice.name]: resourceSlice.reducer,
      [modalSlice.name]: modalSlice.reducer,
    },
    devTools: true,
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
