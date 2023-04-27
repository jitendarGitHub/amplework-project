import {
  ApplicationMaintenance,
  EnterpriseMobility,
  EnterpriseWebDevelopment,
} from "../container/Index";

export const routes = [
  {
    path: "/",
    exact: true,
    name: "Application Maintenance",
    element: ApplicationMaintenance,
  },
  {
    path: "/enterprise-web-development",
    exact: true,
    name: "Enterprise Web",
    element: EnterpriseWebDevelopment,
  },
  {
    path: "/enterprise-mobility",
    exact: true,
    name: "Enterprise Mobility",
    element: EnterpriseMobility,
  },
];
