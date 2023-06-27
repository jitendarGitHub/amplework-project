import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import DefaultLayout from "./layout/DefaultLayout";
import { Page404, Page500 } from "./container/Index";
import Login from "./container/views/pages/login";
import SignUp from "./container/views/pages/signUp";
import VerifyOtp from "./container/views/pages/VerifyOtp";
import { pageRoute } from "./routes/Index";
import Redux from "./reduxExercise";
import ReduxData from "./reduxData";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={loading}>
        <Routes>
          {pageRoute.map((route, idx) => {
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
          <Route path="/random" name="Random" element={<Redux />} />
          <Route path="/redux-data" name="Redux" element={<ReduxData />} />
          <Route path="*" name="Home" element={<DefaultLayout />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
