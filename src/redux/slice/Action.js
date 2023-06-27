import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../apiService";
import {
  API_ELEMENT,
  CHANGE_PASSWORD_API,
  FORGET_PASS_API,
  INPUT_ELEMENT_VALUE,
  LOGIN_API,
  REMOVE_ELEMENT,
  RESETPASSWORD_API,
  SEND_API,
  SIGNUP_API,
  VERIFY_EMAIL_OTP_API,
  VERIFY_OTP_API,
} from "./type";

export const fetchUserLoginData = createAsyncThunk(LOGIN_API, async (data) => {
  console.log("async data---", data);
  const response = await API.login(data);
  console.log("responce---->=", response);
  return response.data;
});
export const fetchUserSignUpData = createAsyncThunk(
  SIGNUP_API,
  async (data) => {
    const response = await API.signup(data);
    return response;
  }
);
export const fetchUserForgetPasswordData = createAsyncThunk(
  FORGET_PASS_API,
  async (data) => {
    const response = await API.forgetPassword(data);
    return response;
  }
);
export const fetchUserSendOtpData = createAsyncThunk(SEND_API, async (data) => {
  const response = await API.sendOtp(data);
  return response;
});
export const fetchUserVerifyOtpData = createAsyncThunk(
  VERIFY_OTP_API,
  async (data) => {
    const response = await API.verifyOtp(data);
    return response;
  }
);
export const fetchUserSendEmailOtpData = createAsyncThunk(
  VERIFY_EMAIL_OTP_API,
  async (data) => {
    const response = await API.verifyEmailOtp(data);
    return response;
  }
);
export const fetchUserVerifyOtp = createAsyncThunk(
  VERIFY_OTP_API,
  async (data) => {
    const responce = await API.verifyOtp(data);
    return responce;
  }
);

export const fetchUserResetPasswordData = createAsyncThunk(
  RESETPASSWORD_API,
  async (data) => {
    const response = await API.reset(data);
    return response;
  }
);
export const fetchUserChangePasswordData = createAsyncThunk(
  CHANGE_PASSWORD_API,
  async (data) => {
    const response = await API.changePassword(data);
    return response;
  }
);

export const remove = createAsyncThunk(REMOVE_ELEMENT, async (data) => {
  console.log("data", data);
  return data;
});

export const inputValue = createAsyncThunk(
  INPUT_ELEMENT_VALUE,
  async (data) => {
    return data;
  }
);
