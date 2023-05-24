const SERVER_HOST = "https://dummyjson.com";
const LOGIN_HOST = process.env.LOGIN_HOST;

// authantication
const LOGIN = `${SERVER_HOST}/users`;
const HOST = `${LOGIN_HOST}api/users/login`;

export const Config = {
  LOGIN,
  HOST,
};
