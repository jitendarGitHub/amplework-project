import {
  ApplicationMaintenance,
  EnterpriseMobility,
  EnterpriseWebDevelopment,
  Page404,
  Page500,
  SoftwareMaintenance,
} from "../container/Index";
import VerifyOtp from "../container/views/pages/VerifyOtp";
import Login from "../container/views/pages/login";
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
    path: "/verification",
    exact: true,
    name: "verification",
    element: VerifyOtp,
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
