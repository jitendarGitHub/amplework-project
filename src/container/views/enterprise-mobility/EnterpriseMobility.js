import "./EnterpriseMobility.css";
import { EnterpriseMobilityBG } from "../../../assets";
import { WelcomeBlock } from "../../../components";
import { InovateFeature, ProfoundEnterprise } from "./section";

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
    </div>
  );
};
export default EnterpriseMobility;
