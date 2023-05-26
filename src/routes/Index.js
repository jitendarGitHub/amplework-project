import {
  ApplicationMaintenance,
  EnterpriseMobility,
  EnterpriseWebDevelopment,
  SoftwareMaintenance,
} from "../container/Index";

export const routes = [
  {
    path: "/",
    exact: true,
    name: "Application Maintenance",
    element: ApplicationMaintenance,
  },
  {
    // path: "/enterprise-web-development",
    path: "/who-we-are",
    exact: true,
    name: "Enterprise Web",
    element: EnterpriseWebDevelopment,
  },
  {
    // path: "/enterprise-mobility",
    path: "/what-we-do",
    exact: true,
    name: "Enterprise Mobility",
    element: EnterpriseMobility,
  },
  {
    // path: "/software-maintenance-support",
    path: "/our-culture",
    exact: true,
    name: "Software Maintenance",
    element: SoftwareMaintenance,
  },
];
