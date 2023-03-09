import { Responses } from "@/constants/enums";
import { IResponse } from "@/models/app";

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
