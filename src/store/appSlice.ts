import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "./store";

// Type for our state
export interface StateProps {
  session: any;
  dateRange: any;
}

// Initial state
const initialState: StateProps = {
  session: null,
  dateRange: null,
};

// Actual Slice
export const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setSession(state, action) {
      state.session = action.payload;
    },
    setDateRange(state, action) {
      state.dateRange = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.app,
      };
    },
  },
});

export const { setSession, setDateRange } = slice.actions;

export const selectSession = (state: AppState) => state.app.session;
export const selectDateRange = (state: AppState) => state.app.dateRange;

export default slice.reducer;
