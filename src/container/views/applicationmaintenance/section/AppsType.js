import "../application.css";
import DefaultCard from "../../../../components/card";
import { Apptypemockup } from "../../../../mockup/Apptypemockup";
import { PrimaryText, SecondaryText } from "../../../../components/text";

const AppsType = () => {
  return (
    <section className="container pb-5 text-center">
      <SecondaryText
        className="app-type-section"
        para="Keep Your Applications Always Shine"
      />
      <PrimaryText heading="Types of Apps We Maintain At Amplework Software" />
      <SecondaryText para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' standard dummy text ever since the 1500s," />

      <div className="maintain p-1 mt-5">
        {Apptypemockup.map((items) => {
          return (
            <DefaultCard
              headingshow={items.headingshow}
              cardclass="maintain-box"
              imgdivclass="maintain-icon text-center align-self-center fs-1 "
              imgclass="fa-icon"
              cardimage={items.cardimage}
              contentclass="contents"
              headingclass=" fw-bold"
              heading={items.heading}
              paraclass="text-white"
              para={items.para}
            />
          );
        })}
      </div>
    </section>
  );
};
export default AppsType;
