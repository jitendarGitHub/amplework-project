import { SoftwareMaintenanceBG } from "../../../assets";
import { WelcomeBlock } from "../../../components";
import { LeaveSoftwareMaintenance } from "./section";
import UnIntrupted from "./section/UnIntrupted";

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
    </div>
  );
};
export default SoftwareMaintenance;
