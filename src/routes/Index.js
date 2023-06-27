import {
  ApplicationMaintenance,
  EnterpriseMobility,
  EnterpriseWebDevelopment,
  ForgetPassword,
  Login,
  Page404,
  Page500,
  ResetPassword,
  SignUp,
  SoftwareMaintenance,
  VerifyEmailOtp,
  VerifyOtp,
} from "../container/Index";

export const routes = [
  {
    path: "/who-we-are",
    exact: true,
    name: "Application Maintenance",
    element: ApplicationMaintenance,
  },
  {
    path: "/what-we-do",
    exact: true,
    name: "Enterprise Web",
    element: EnterpriseWebDevelopment,
  },
  {
    path: "/our-culture",
    exact: true,
    name: "Enterprise Mobility",
    element: EnterpriseMobility,
  },
  {
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
