import "./EnterpriseMobility.css";
import { EnterpriseMobilityBG } from "../../../assets";
import { ClientAppreciation, WelcomeBlock } from "../../../components";
import {
  BrandApp,
  EngagementModal,
  InovateFeature,
  ProfoundEnterprise,
} from "./section";
import { TechnologyStacks } from "../enterprise-web-development/section";
import {
  AmpleQuestion,
  CompanyOverview,
  Developer,
  Digitalize,
  FormSection,
} from "../applicationmaintenance/section";

const EnterpriseMobility = () => {
  return (
    <div className="">
      <WelcomeBlock
        title="Advanced Enterprise Mobility Solutions"
        description="Empower Business Operations From Enterprise Mobility Development "
        image={EnterpriseMobilityBG}
      />
      <section>
        <ProfoundEnterprise />
      </section>
      <section className="bg-light">
        <InovateFeature />
      </section>
      <section>
        <BrandApp />
      </section>
      <section>
        <EngagementModal />
      </section>
      <section>
        <TechnologyStacks
          heading="Cutting-Edge Technologies for Custom Enterprise Mobile App Development"
          para="If your websites involve the activities of financial transactions then utilize the payment gateway to facilitate secure online payments. It enables customers to complete transactions using credit/debit cards,"
        />
      </section>
      <section>
        <Developer />
      </section>
      <section>
        <ClientAppreciation />
      </section>
      <section>
        <AmpleQuestion />
      </section>
      <section>
        <Digitalize />
      </section>
      <section style={{ backgroundColor: "rgb(243 246 255)" }} className="p-0">
        <div className="container">
          <div className="row justify-content-around">
            <FormSection />
            <CompanyOverview />
          </div>
        </div>
      </section>
    </div>
  );
};
export default EnterpriseMobility;
