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
        return res;
      })
      .catch((err) => {
        toast.error("Check your Credential.....");
        console.log("API Failed ::", err);
      });
  },
  signup: (payload) => {
    return instance
      .post("http://34.244.255.218/api/users/signup", payload)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log("api ERROR :", err);
      });
  },
};
