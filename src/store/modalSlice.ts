import { HYDRATE } from "next-redux-wrapper";
import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { IModal } from "@/models/app";
import { MODAL_TYPES } from "@/constants/enums";

// Type for our state
export interface StateProps {
  resourceModal: IModal;
  mediaModal: IModal;
}

// Initial state
const initialState: StateProps = {
  resourceModal: {
    open: false,
    id: MODAL_TYPES.RESOURCE,
    content: null,
  },
  mediaModal: {
    open: false,
    id: MODAL_TYPES.RESOURCE,
    content: null,
  },
};

// Actual Slice
export const slice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setResourceModal(state, action) {
      state.resourceModal = action.payload;
    },
    setMediaModal(state, action) {
      state.mediaModal = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.modal,
      };
    },
  },
});

export const { setResourceModal, setMediaModal } = slice.actions;

export const selectResourceModal = (state: AppState) =>
  state.modal.resourceModal;
export const selectMediaModal = (state: AppState) => state.modal.mediaModal;

export default slice.reducer;
