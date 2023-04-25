import React from "react";

import { amplworkLogo } from "../assets";
import { AppContent, Footer, Header } from "../components";

const DefaultLayout = () => {
  return (
    <div>
      <div className=" ">
        <Header image={amplworkLogo} />
        <div className="">
          <AppContent />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default DefaultLayout;
