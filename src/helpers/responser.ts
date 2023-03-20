import { MODAL_TYPES, Responses } from "@/constants/enums";
import { IModal, IResponse, ISnackBar } from "@/models/app";
import { AlertColor } from "@mui/material";

export const successResponse = (data: any, message?: string): IResponse => {
  const response: IResponse = {
    type: Responses.SUCCESS,
    data,
    message,
  };

  return response;
};

export const errorResponse = (err: Error | any): IResponse => {
  const response: IResponse = {
    type: Responses.ERROR,
    message: err.message ? err.message : JSON.stringify(err),
  };

  return response;
};

export const createSnackbar = (
  severity: AlertColor | undefined,
  content: string
): ISnackBar => {
  const snackbar: ISnackBar = {
    open: true,
    severity,
    content,
    persist: false,
  };

  return snackbar;
};

export const openResourceModal = (content: React.ReactNode): IModal => {
  const modal: IModal = {
    open: true,
    id: MODAL_TYPES.RESOURCE,
    content,
  };

  return modal;
};

export const openMediaModal = (content: React.ReactNode): IModal => {
  const modal: IModal = {
    open: true,
    id: MODAL_TYPES.MEDIA,
    content,
  };

  return modal;
};

export const closeResourceModal = (): IModal => {
  const modal: IModal = {
    open: false,
    id: MODAL_TYPES.RESOURCE,
    content: null,
  };

  return modal;
};

export const closeMediaModal = (): IModal => {
  const modal: IModal = {
    open: false,
    id: MODAL_TYPES.MEDIA,
    content: null,
  };

  return modal;
};
