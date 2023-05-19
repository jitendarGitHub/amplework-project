import { SoftwareMaintenanceBG } from "../../../assets";
import {
  ClientAppreciation,
  CustomWelcomeBlock,
  FullStackDeveloper,
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
      <CustomWelcomeBlock
        title="SOFTWARE MAINTENANCE AND SUPPORT SERVICE "
        description="Partner with Us for Hassle free-software Maintenance and Support "
        image={SoftwareMaintenanceBG}
      />
      <LeaveSoftwareMaintenance />
      <UnIntrupted />
      <section className="bg-light">
        <AccoumplishResult />
      </section>
      <section className="dream-section">
        <Dream />
      </section>
      <section>
        <FullStackDeveloper />
      </section>
      <section>
        <RoleInSoftwareMaintenance />
      </section>
      <section className="bg-warning">
        <IntegrateProfesional />
      </section>
      <AmpleQuestion />
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
