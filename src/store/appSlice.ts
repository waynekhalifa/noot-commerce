import { ISessionUser } from "@/models/app";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "./store";
// Type for our state

export interface StateProps {
  dateRange: any;
  user: ISessionUser | null;
  accessToken: string;
  refreshToken: string;
}

// Initial state
const initialState: StateProps = {
  dateRange: null,
  user: null,
  accessToken: "",
  refreshToken: "",
};

// Actual Slice
export const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setDateRange: (state: StateProps, action: PayloadAction<any>) => {
      state.dateRange = action.payload;
    },
    setAccessToken: (state: StateProps, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    setRefreshToken: (state: StateProps, action: PayloadAction<string>) => {
      state.refreshToken = action.payload;
    },
    setUser: (
      state: StateProps,
      action: PayloadAction<ISessionUser | null>
    ) => {
      state.user = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state: StateProps, action: PayloadAction<any>) => {
      // any type
      return {
        ...state,
        ...action.payload.app,
      };
    },
  },
});

export const { setDateRange, setAccessToken, setRefreshToken, setUser } =
  slice.actions;

export const selectDateRange = (state: AppState) => state.app.dateRange;
export const selectUser = (state: AppState) => state.app.user;

export default slice.reducer;
