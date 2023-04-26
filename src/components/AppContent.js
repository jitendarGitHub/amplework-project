import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { routes } from "../routes/Index";

const AppContent = () => {
  return (
    <Suspense>
      <Routes>
        {routes.map((route, idx) => {
          return (
            route.element && (
              <Route
                key={idx}
                path={route.path}
                exact={route.exact}
                name={route.name}
                element={<route.element />}
              />
            )
          );
        })}
        {/* <Route path="/" element={<Navigate to="/404" replace />} /> */}
      </Routes>
    </Suspense>
  );
};

export default AppContent;
