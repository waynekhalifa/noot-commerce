import { HYDRATE } from "next-redux-wrapper";
import { createSlice } from "@reduxjs/toolkit";
import { Account } from "@/models";
import { AppState } from "./store";

// Type for our state
export interface StateProps {
  listing: Readonly<Record<string, any>>[];
  selected: Account | null;
}

// Initial state
const initialState: StateProps = {
  listing: [],
  selected: null,
};

// Actual Slice
export const slice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setListing(state, action) {
      state.listing = action.payload;
    },
    setSelected(state, action) {
      state.selected = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.account,
      };
    },
  },
});

export const { setListing, setSelected } = slice.actions;

export const selectListing = (state: AppState) => state.account.listing;
export const selectSelected = (state: AppState) => state.account.selected;

export default slice.reducer;
