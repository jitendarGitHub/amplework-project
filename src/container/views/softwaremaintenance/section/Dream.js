import {
  DreamOffshare,
  Dreammanagement,
  Dreamoutshare,
} from "../../../../assets";
import { DreamModalCard } from "../../../../components";

const Dream = () => {
  return (
    <>
      <div className="container">
        <h3 className="text-center">Dream it, We'll Build it</h3>
        <p className="text-center ps-lg-5 pe-lg-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries,
        </p>
        <div className="row">
          <div className="col-lg-4">
            <DreamModalCard
              img={Dreammanagement}
              title="Team Extension Model"
              para="Increase the current capability of your team members by integrating our services into your existing operations. Scale."
              list1="Scale Up Operations. "
              list2="Flexibility."
              list3="Extended Capabilities."
              list4="Diverse Expertise."
              borderbottom="3px solid blue"
              boxshadow="0px 0px 2px 0px"
              style="none"
            />
          </div>
          <div className="col-lg-4">
            <DreamModalCard
              img={DreamOffshare}
              title="Offshore Dedicated Team"
              para="Hire our developers remotely for the software maintenance process. In this model, we allow our clients to either opt for hourly."
              list1=" Hourly Payment Option."
              list2="Monthly Payment Schedules."
              list3="Services For Multiple Times."
              list4="Seamless Integrations."
              borderbottom="3px solid blue"
              boxshadow="0px 0px 2px 0px"
            />
          </div>
          <div className="col-lg-4">
            <DreamModalCard
              img={Dreamoutshare}
              title="Fully Outsourced Maintenance and Support"
              para="You can completely outsource your project to us for profound maintenance and development support services."
              list1=" Budget Solutions."
              list2="Transparency."
              list3="Fair Calculations. "
              list4="Eliminate Overheads Costs."
              borderbottom="3px solid blue"
              boxshadow="0px 0px 2px 0px"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Dream;
