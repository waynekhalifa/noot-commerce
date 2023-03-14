import { AppContext } from "next/app";

import { errorResponse, successResponse } from "@/helpers/responser";
import { IRequest, IResponse } from "@/models/app";
import { AuthMessages, Methods } from "@/constants/enums";
import sendRequest from "@/helpers/api";
import { USER_SIGNUP } from "@/constants/endpoints";

/**
 * getSession: Get the current session
 *
 * @returns response
 */
export async function getSession(appContext: AppContext): Promise<IResponse> {
  try {
    return errorResponse(new Error("Not implemented"));
  } catch (err: Error | any) {
    return errorResponse(err);
  }
}

/**
 * register: Register a new user
 *
 * @param data
 * @returns response
 */
export async function register(data: any): Promise<IResponse> {
  const request: IRequest = { url: USER_SIGNUP, method: Methods.POST, data };

  try {
    const response: Response = await sendRequest(request);

    return successResponse(response, AuthMessages.REGISTER_SUCCESS);
  } catch (err: Error | any) {
    return errorResponse(err);
  }
}

/**
 * login: Login a user
 *
 * @param data
 * @returns response
 */
export async function login(data: any): Promise<IResponse> {
  try {
    return successResponse({}, AuthMessages.LOGIN_SUCCESS);
  } catch (err: Error | any) {
    return errorResponse(err);
  }
}

/**
 * logout: Logout a user
 *
 * @returns response
 */
export async function logout(): Promise<IResponse> {
  try {
    return successResponse(null, AuthMessages.LOGOUT_SUCCESS);
  } catch (err: Error | any) {
    return errorResponse(err);
  }
}

/**
 * forgetPassword: Forget password
 *
 * @param data
 * @returns response
 */
export async function forgetPassword(data: any): Promise<IResponse> {
  try {
    return successResponse(null, AuthMessages.FORGET_PASSWORD_SUCCESS);
  } catch (err: Error | any) {
    return errorResponse(err);
  }
}

/**
 * resetPassword: Reset password
 *
 * @param data
 * @returns response
 */
export async function resetPassword(data: any): Promise<IResponse> {
  try {
    return successResponse(null, AuthMessages.RESET_PASSWORD_SUCCESS);
  } catch (err: Error | any) {
    return errorResponse(err);
  }
}
