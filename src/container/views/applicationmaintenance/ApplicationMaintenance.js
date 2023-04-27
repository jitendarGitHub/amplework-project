import "./application.css";
import { Banner } from "../../../assets";
import {
  ClientAppreciation,
  FullStackDeveloper,
  WelcomeBlock,
} from "../../../components";
import {
  Activity,
  Application,
  AppShap,
  AppsType,
  BussinessOpration,
  CompanyOverview,
  DedicatedTechnology,
  Developer,
  Digitalize,
  Diverse,
  ExperienceParalleled,
  Facinating,
  FormSection,
  MaintenancBox,
  Maintenance,
  PortFolio,
  AmpleQuestion,
} from "./section";

const ApplicationMaintenance = () => {
  return (
    <>
      <div className="page-content">
        <WelcomeBlock
          image={Banner}
          title="APPLICATION MAINTENANCE AND SUPPORT"
          description="Top class application maintenance and support services for error-free, high performing applications"
          btn="Schedule btn"
        />
        <Maintenance />
        <ExperienceParalleled />
        <MaintenancBox />
        <Application />
        <Activity />
        <AppsType />
        <AppShap />
        <Facinating />
        <Diverse />
        <BussinessOpration />
        <DedicatedTechnology />
        {/* <AmpleQuestion /> */}
        <FullStackDeveloper />
        <Developer />
        <section className="bg-light text-center">
          <div className="container ">
            <ClientAppreciation />
          </div>
        </section>
        <PortFolio />
        <Digitalize />
        <section
          style={{ backgroundColor: "rgb(243 246 255)" }}
          className="p-0"
        >
          <div className="container">
            <div className="row justify-content-around">
              <FormSection />
              <CompanyOverview />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default ApplicationMaintenance;