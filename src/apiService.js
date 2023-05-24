import axios from "axios";
import { Config } from "./Config";

let instance = axios.create({
  baseURL: Config.SERVER_HOST,
  headers: {
    "Content-Type": "application/json",
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
      .get(`${Config.LOGIN}`, payload)
      .then((res) => {
        return res && res.data;
      })
      .catch((err) => {
        return err;
      });
  },
};
