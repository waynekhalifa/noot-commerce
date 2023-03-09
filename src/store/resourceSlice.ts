import { createSlice } from "@reduxjs/toolkit";
import { Account, Feature } from "@/models";
import { AppState } from "./store";

// Type for our state
export interface StateProps {
  listing: Readonly<Record<string, any>>[];
  selected: Account | Feature | null;
}

// Initial state
const initialState: StateProps = {
  listing: [],
  selected: null,
};

// Actual Slice
export const slice = createSlice({
  name: "resource",
  initialState,
  reducers: {
    setListing(state, action) {
      state.listing = action.payload;
    },
    setSelected(state, action) {
      state.selected = action.payload;
    },
  },
});

export const { setListing, setSelected } = slice.actions;

export const selectListing = (state: AppState) => state.resource.listing;
export const selectSelected = (state: AppState) => state.resource.selected;

export default slice.reducer;
