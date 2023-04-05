import { AppContext } from "next/app";
import axios from "axios";

import { errorResponse, successResponse } from "@/helpers/responser";
import { IResponse } from "@/models/app";
import { AuthMessages } from "@/constants/enums";
import { LoginProps, SignupProps } from "@/types/auth";

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
export async function register(data: SignupProps): Promise<IResponse> {
  try {
    const res = await axios.post(
      "https://ecommerce.noot.ae/user/auth/signup/",
      data
    );
    return successResponse(res, AuthMessages.REGISTER_SUCCESS);
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
export async function login(data: LoginProps): Promise<IResponse> {
  try {
    let res = await axios.post(
      "https://ecommerce.noot.ae/user/auth/login/",
      data
    );
    return successResponse(res, AuthMessages.LOGIN_SUCCESS);
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
