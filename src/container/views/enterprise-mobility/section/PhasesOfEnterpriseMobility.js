import { PhasesCard } from "../../../../components";
import { PrimaryText, SecondaryText } from "../../../../components/text";
import { PhaseCardMock } from "../../../../mockup/PhaseCardMock";
import "../EnterpriseMobility.css";

const PhasesOfEnterpriseMobility = () => {
  return (
    <>
      <div className="container mt-2">
        <PrimaryText
          className="phase-head text-center fs-3"
          heading="4 Category Phases of Enterprise Mobility Management Software"
        />
        <SecondaryText
          className="phase-p text-center"
          para="Enterprise mobility solutions stand on 4 primary key phrases. At
          Amplework, we share our expertise in all these categories."
        />
        {PhaseCardMock.map((items) => {
          return (
            <PhasesCard
              img={items.img}
              head={items.head}
              about={items.about}
              para={items.para}
              bgimage={items.bgimage}
              direction={items.direction}
              backgroundposition={items.backgroundposition}
            />
          );
        })}
      </div>
    </>
  );
};
export default PhasesOfEnterpriseMobility;
