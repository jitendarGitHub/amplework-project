import "./EnterpriseMobility.css";
import {
  EnterpriseMobilityBG,
  EngagementBG,
  ReasonAmplebg1,
  ReasonAmplebg2,
  ReasonAmplebg3,
} from "../../../assets";
import { ClientAppreciation, WelcomeBlock } from "../../../components";
import {
  BrandApp,
  BrandCollaborate,
  EngagementModal,
  EnhanceROIservice,
  InovateFeature,
  PhasesOfEnterpriseMobility,
  ProfoundEnterprise,
  ReasonAmpleSM,
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
        <EnhanceROIservice />
      </section>
      <section
        style={{
          backgroundImage: `url(${ReasonAmplebg1}), url(${ReasonAmplebg2}) ,url(${ReasonAmplebg3})`,
          backgroundRepeat: "no-repeat,no-repeat,no-repeat",
          backgroundPosition: "top left, center, bottom right",
          backgroundColor: "rgb(29 115 248)",
        }}
      >
        <ReasonAmpleSM />
      </section>
      <section>
        <PhasesOfEnterpriseMobility />
      </section>

      <section>
        <BrandApp />
      </section>
      <section className="bg-light">
        <BrandCollaborate />
      </section>
      <section
        className="engagement-section"
        style={{
          backgroundImage: `url(${EngagementBG})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
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
