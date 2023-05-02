import {
  LeftdottedCircle,
  Phaseimg1,
  Phaseimg2,
  Phaseimg3,
  Phaseimg4,
  RightdottedCircle,
} from "../../../../assets";
import { PhasesCard } from "../../../../components";
import "../EnterpriseMobility.css";

const PhasesOfEnterpriseMobility = () => {
  return (
    <>
      <div className="container mt-2">
        <h3 className="phase-head text-center">
          4 Category Phases of Enterprise Mobility Management Software
        </h3>
        <p className="phase-p text-center">
          Enterprise mobility solutions stand on 4 primary key phrases. At
          Amplework, we share our expertise in all these categories.
        </p>
        <PhasesCard
          img={Phaseimg1}
          head="1"
          about="Device & Information Management"
          para="This category focuses on managing and securing mobile devices and
              the data that resides in the storage devices. It includes features
              such as device."
          bgimage={LeftdottedCircle}
        />
        <PhasesCard
          img={Phaseimg2}
          head="2"
          about="App & Identity Management"
          para="In-app & identify management we involve extensive features which are follows - app distribution, app wrapping, authentication factors."
          direction="row-reverse"
          bgimage={RightdottedCircle}
          backgroundposition="right"
        />
        <PhasesCard
          img={Phaseimg3}
          head="3"
          about="Content Management"
          para="This category of operations involves managing & securing the content that is highly accessed and shared on mobile devices. It includes extensive features."
          bgimage={LeftdottedCircle}
        />
        <PhasesCard
          img={Phaseimg4}
          head="4"
          about="Expense & Budget Management"
          para="It focuses on managing and optimizing the expenses associated with enterprise mobility - such as: device procurement and service contracts."
          bgimage={RightdottedCircle}
          backgroundposition="right"
          direction="row-reverse"
        />
      </div>
    </>
  );
};
export default PhasesOfEnterpriseMobility;
