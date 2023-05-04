import {
  Capabilityimg1,
  Capabilityimg2,
  Capabilityimg3,
  Capabilityimg4,
} from "../../../../assets";
import { CapabilityCard } from "../../../../components";
const CoreCapability = () => {
  return (
    <div className="container capability-bg">
      <div className="row p-lg-5">
        <div className="col-lg-6 align-self-center">
          <h3 className="diverse-heading">Our Core Capabilities</h3>
          <p className=" pt-0 mt-0">
            Our core capabilities are rooted in delivering innovative and custom
            solutions that meet the unique needs of each of our clients.
          </p>
        </div>
        <div className="col-lg-6  text-center ">
          <div className="row pb-3">
            <div className="col-lg-6 col-md-6">
              <CapabilityCard
                img={Capabilityimg1}
                title="Enterprise Development Solutions"
                about="Our custom enterprise development solutions are designed to streamline workflows & increase efficiency."
              />
              <CapabilityCard
                img={Capabilityimg2}
                title="Developers For Hire"
                about="Our mobile application development services are focused on creating high-quality & user-friendly apps."
              />
            </div>
            <div className="col-lg-6 col-md-6 mt-lg-4 mt-sm-4">
              <CapabilityCard
                img={Capabilityimg3}
                title="Developers For Hire"
                about="Our on-site developers can tackle even the most complex projects. So, hire our developers with confident."
              />
              <CapabilityCard
                img={Capabilityimg4}
                title="Mobile Maintenance Services"
                about="We provide ongoing support and maintenance to keep your apps running smoothly and resolving issues that may arise."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CoreCapability;
