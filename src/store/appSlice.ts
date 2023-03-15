import { Mode } from "@/models/app";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "./store";
// Type for our state

export interface IUser {
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  id: number;
}

export interface StateProps {
  session: any;
  dateRange: any;
  mode: Mode;
  user: IUser | null;
}

// Initial state
const initialState: StateProps = {
  session: null,
  dateRange: null,
  mode: "light",
  user: null,
};

// Actual Slice
export const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setSession: (state: StateProps, action: PayloadAction<any>) => {
      state.session = action.payload;
    },
    setDateRange: (state: StateProps, action: PayloadAction<any>) => {
      state.dateRange = action.payload;
    },
    setMode: (state: StateProps, action: PayloadAction<Mode>) => {
      state.dateRange = action.payload;
    },
    setUser: (state: StateProps, action: PayloadAction<IUser>) => {
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

export const { setSession, setDateRange, setMode, setUser } = slice.actions;

export const selectMode = (state: AppState) => state.app.mode;
export const selectSession = (state: AppState) => state.app.session;
export const selectDateRange = (state: AppState) => state.app.dateRange;
export const selectUser = (state: AppState) => state.app.user;

export default slice.reducer;
