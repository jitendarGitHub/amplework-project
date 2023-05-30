import React, { useEffect } from "react";

import { amplworkLogo } from "../assets";
import { AppContent, Footer, Header } from "../components";

const DefaultLayout = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("getitem--------", token);
  }, []);
  return (
    <div className=" ">
      <Header image={amplworkLogo} />
      <div className="">
        <AppContent />
      </div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
