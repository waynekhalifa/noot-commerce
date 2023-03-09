import { HYDRATE } from "next-redux-wrapper";
import { createSlice } from "@reduxjs/toolkit";
import { Page } from "@/models";
import { AppState } from "./store";

// Type for our state
export interface StateProps {
  listing: Readonly<Record<string, any>>[];
  selected: Page | null;
}

// Initial state
const initialState: StateProps = {
  listing: [],
  selected: null,
};

// Actual Slice
export const slice = createSlice({
  name: "page",
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
        ...action.payload.page,
      };
    },
  },
});

export const { setListing, setSelected } = slice.actions;

export const selectListing = (state: AppState) => state.page.listing;
export const selectSelected = (state: AppState) => state.page.selected;

export default slice.reducer;
