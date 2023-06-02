import {
  ApplicationMaintenance,
  EnterpriseMobility,
  EnterpriseWebDevelopment,
  Page404,
  Page500,
  SoftwareMaintenance,
} from "../container/Index";
import VerifyEmailOtp from "../container/views/pages/VerifyEmailOTP";
import VerifyOtp from "../container/views/pages/VerifyOtp";
import ForgetPassword from "../container/views/pages/forgetPassword";
import Login from "../container/views/pages/login";
import ResetPassword from "../container/views/pages/resetPassword";
import SignUp from "../container/views/pages/signUp";

export const routes = [
  {
    path: "/who-we-are",
    exact: true,
    name: "Application Maintenance",
    element: ApplicationMaintenance,
  },
  {
    // path: "/enterprise-web-development",
    path: "/what-we-do",
    exact: true,
    name: "Enterprise Web",
    element: EnterpriseWebDevelopment,
  },
  {
    // path: "/enterprise-mobility",
    path: "/our-culture",
    exact: true,
    name: "Enterprise Mobility",
    element: EnterpriseMobility,
  },
  {
    // path: "/software-maintenance-support",
    path: "/work-with-us",
    exact: true,
    name: "Software Maintenance",
    element: SoftwareMaintenance,
  },
];

export const pageRoute = [
  {
    path: "/",
    exact: true,
    name: "login screen",
    element: Login,
  },
  {
    path: "/sign-up",
    exact: true,
    name: "signUp screen",
    element: SignUp,
  },
  {
    path: "/phone-verification",
    exact: true,
    name: "verification",
    element: VerifyOtp,
  },
  {
    path: "email-verification",
    exact: true,
    name: "EmailVerification",
    element: VerifyEmailOtp,
  },
  {
    path: "/forget-password",
    exact: true,
    name: "forget password",
    element: ForgetPassword,
  },
  {
    path: "/reset-password",
    exact: true,
    name: "forget Password",
    element: ResetPassword,
  },
  {
    path: "/500",
    exact: true,
    name: "500",
    element: Page500,
  },
  {
    path: "/404",
    exact: true,
    name: "404",
    element: Page404,
  },
];
