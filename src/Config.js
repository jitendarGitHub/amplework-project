const MAPLE_BASE_URL = process.env.REACT_APP_MAPLE_API_URL;

//authantication
const SIGNUP = `${MAPLE_BASE_URL}api/users/signup`;
const LOGIN = `${MAPLE_BASE_URL}api/users/login`;
const SEND_OTP = `${MAPLE_BASE_URL}api/users/send-otp`;
const VERIFY_OTP = `${MAPLE_BASE_URL}api/verify-otp`;
const FORGET_PASSWORD = `${MAPLE_BASE_URL}api/users/forget-password`;
const VERIFY_EMAIL_OTP = `${MAPLE_BASE_URL}/api/verify-otp`;
const CHANGE_PASSWORD = `${MAPLE_BASE_URL}api/users/change-password`;

const Config = {
  SIGNUP,
  LOGIN,
  SEND_OTP,
  VERIFY_OTP,
  FORGET_PASSWORD,
  VERIFY_EMAIL_OTP,
  CHANGE_PASSWORD,
};
console.log("maple------->", SIGNUP);

export default Config;
