import {
  Capabilityimg1,
  Capabilityimg2,
  Capabilityimg3,
  Capabilityimg4,
} from "../../../../assets";
import { DefaultCard } from "../../../../components";
import { PrimaryText, SecondaryText } from "../../../../components/text";
const CoreCapability = () => {
  return (
    <div className="container capability-bg">
      <div className="row p-lg-5">
        <div className="col-lg-6 align-self-center">
          <PrimaryText
            className="diverse-heading"
            heading="Our Core Capabilities"
          />
          <SecondaryText
            className="pt-0 mt-0"
            para=" Our core capabilities are rooted in delivering innovative and custom
            solutions that meet the unique needs of each of our clients."
          />
        </div>
        <div className="col-lg-6  text-center ">
          <div className="row pb-3">
            <div className="col-lg-6 col-md-6">
              <DefaultCard
                cardclass=" mt-2 p-3 text-start brand-card  border-0"
                imgdivclass=" align-self-center fs-1 card-contents capability-img-block"
                cardimage={Capabilityimg1}
                contentclass="change-contents p-3"
                heading="Enterprise Development Solutions"
                paraclass="text-white"
                parashow
                para="Our custom enterprise development solutions are designed to streamline workflows & increase efficiency"
              />
              <DefaultCard
                cardclass="maintain-box mt-2 p-3 text-start brand-card border-0"
                imgdivclass="maintain-icon  align-self-center fs-1 card-contents capability-img-block"
                cardimage={Capabilityimg2}
                contentclass="change-contents p-3"
                heading="Developers For Hire"
                paraclass="text-white"
                parashow
                para="Our custom enterprise development solutions are designed to streamline workflows & increase efficiency"
              />
            </div>
            <div className="col-lg-6 col-md-6 mt-lg-4 mt-sm-4">
              <DefaultCard
                cardclass="maintain-box mt-2 p-3 text-start brand-card border-0 "
                imgdivclass="maintain-icon  align-self-center fs-1 card-contents capability-img-block"
                cardimage={Capabilityimg3}
                contentclass="change-contents p-3"
                heading="Developer For Hire"
                paraclass="text-white"
                parashow
                para="Our on-site developers can tackle even the most complex projects. So, hire our developers with confident."
              />
              <DefaultCard
                cardclass="maintain-box mt-2 p-3 pt-4 text-start brand-card border-0"
                imgdivclass="maintain-icon  align-self-center fs-1 card-contents capability-img-block"
                cardimage={Capabilityimg4}
                contentclass="change-contents p-3"
                heading="Mobile Maintenance"
                paraclass="text-white"
                parashow
                para="We provide ongoing support and maintenance to keep your apps running smoothly and resolving issues that may arise."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CoreCapability;
