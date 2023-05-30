const MAPLE_BASE_URL = process.env.REACT_APP_MAPLE_API_URL;

//authantication
const SIGNUP = `${MAPLE_BASE_URL}api/users/signup`;
const LOGIN = `${MAPLE_BASE_URL}api/users/login`;
const SEND_OTP = `${MAPLE_BASE_URL}api/users/send-otp`;
const VERIFY_OTP = `${MAPLE_BASE_URL}api/verify-otp`;

const Config = {
  SIGNUP,
  LOGIN,
  SEND_OTP,
  VERIFY_OTP,
};

export default Config;
