import React from "react";
import AppContent from "../components/AppContent";
import Maintenance from "../assets/banner.jpg";
import WelcomeBlock from "../components/welcomeBlock/WelcomeBlock";
import Footer from "../components/footer/Footer";

const DefaultLayout = () => {
  return (
    <div>
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <WelcomeBlock
          image={Maintenance}
          title="APPLICATION MAINTENANCE AND SUPPORT"
          description="Top class application maintenance and support services for error-free, high performing applications"
        />
        <div className="body flex-grow-1 px-3">
          {" "}
          <AppContent />{" "}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default DefaultLayout;
