import React from "react";
import { PageContent, PageContent2 } from "../container/Index";

export const routes = [
  { path: "/", exact: true, name: "Home", element: PageContent },
  { path: "/home", exact: true, name: "home", element: PageContent2 },
];
