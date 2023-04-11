import React from "react";
const dashboard = React.lazy(() => import("../container/pages/Page500"));
const Navbars = React.lazy(() => import("../components/Navbar"));

export const routes = [
  { path: "/", exact: true, name: "Stage", element: dashboard },
  { path: "/steps", name: "Steps" },
  { path: "/user", name: "User" },
  { path: "/user/user-edit", name: "UserEdit" },
  { path: "/dashboard", name: "Dashboard", element: Navbars },
];
