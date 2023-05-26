import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import DefaultLayout from "./layout/DefaultLayout";
import { Page404, Page500 } from "./container/Index";
import { ReduxExercise } from "./reduxExercise";
import Login from "./container/views/pages/login";
import SignUp from "./container/views/pages/signUp";

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
          <Route
            exact
            path="/api/users/login"
            name="Login Page"
            element={<Login />}
          />
          <Route exact path="/sign-up" name="SignUp" element={<SignUp />} />
          <Route exact path="/500" name="Page 500" element={<Page500 />} />
          <Route exact path="/404" name="Page 404" element={<Page404 />} />
          <Route path="*" name="Home" element={<DefaultLayout />} />
          <Route path="/random" name="random" element={<ReduxExercise />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
