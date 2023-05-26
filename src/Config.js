const LOGIN_API = process.env.REACT_APP_API_URL;
const SIGNUP_API = process.env.REACT_APP_SIGNUP_API_URL;
// const LOGIN_API = process.env.REACT_APP_SIGNUP_API_URL;

// authantication
const LOGIN = `${LOGIN_API}api/users/login`;
const SIGNUP = `${SIGNUP_API}api/users/signup`;

const Config = {
  LOGIN,
  SIGNUP,
};

export default Config;
