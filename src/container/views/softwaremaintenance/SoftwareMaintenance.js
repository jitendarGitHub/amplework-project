import { SoftwareMaintenanceBG } from "../../../assets";
import {
  ClientAppreciation,
  FullStackDeveloper,
  WelcomeBlock,
} from "../../../components";
import {
  AmpleQuestion,
  CompanyOverview,
  Developer,
  Digitalize,
  FormSection,
  PortFolio,
} from "../applicationmaintenance/section";
import {
  AccoumplishResult,
  Dream,
  IntegrateProfesional,
  LeaveSoftwareMaintenance,
  RoleInSoftwareMaintenance,
  UnIntrupted,
} from "./section/index.js";

const SoftwareMaintenance = () => {
  return (
    <div className="software-maintenance">
      <WelcomeBlock
        title="SOFTWARE MAINTENANCE AND SUPPORT SERVICE "
        description="Partner with Us for Hassle free-software Maintenance and Support "
        image={SoftwareMaintenanceBG}
      />
      <LeaveSoftwareMaintenance />
      <UnIntrupted />
      <section>
        <AccoumplishResult />
      </section>
      <section>
        <RoleInSoftwareMaintenance />
      </section>
      <section className="dream-section">
        <Dream />
      </section>
      <section>
        <IntegrateProfesional />
      </section>
      <AmpleQuestion />
      <FullStackDeveloper />
      <Developer />
      <ClientAppreciation />
      <PortFolio />
      <Digitalize />
      <div className="container">
        <div className="row justify-content-around">
          <FormSection />
          <CompanyOverview />
        </div>
      </div>
    </div>
  );
};
export default SoftwareMaintenance;
