import { useNavigate } from "react-router-dom";
import axios from "axios";
import Config from "./Config";
import { toast } from "react-toastify";

let instance = axios.create({
  baseURL: Config.SERVER_HOST,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 1000000,
});
instance.interceptors.request.use(function (Config) {
  const token = localStorage.getItem("token");
  Config.headers.Authorization = token ? `Bearer ${token}` : " ";

  return Config;
});

export const API = {
  login: (payload) => {
    return instance
      .post(Config.LOGIN, payload)
      .then((res) => {
        console.log("response----------", res);
        return res;
      })
      .catch((err) => {
        toast.error("Check your Credential.....");
        console.log("API Failed ::", err);
      });
  },
  signup: (payload) => {
    return instance
      .post(Config.SIGNUP, payload)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log("api ERROR :", err);
      });
  },
  sendOtp: (payload) => {
    return instance
      .post(Config.SEND_OTP, payload)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.log("send OTP err---", error);
      });
  },
  verifyOtp: (payload) => {
    return instance
      .post(Config.VERIFY_OTP, payload)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        return err;
      });
  },
  forgetPassword: (payload) => {
    return instance
      .post(Config.FORGET_PASSWORD, payload)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        return err;
      });
  },
  verifyEmailOtp: (payload) => {
    return instance
      .post(Config.VERIFY_EMAIL_OTP, payload)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        return err;
      });
  },
  changePassword: (payload) => {
    return instance
      .post(Config.CHANGE_PASSWORD, payload)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error;
      });
  },
};
