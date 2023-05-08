import "../application.css";
import DefaultCard from "../../../../components/card/Index";
import { Apptypemockup } from "../../../../mockup/Apptypemockup";

const AppsType = () => {
  return (
    <section className="container pb-5 text-center">
      <h5 className="app-type-section">Keep Your Applications Always Shine</h5>
      <h3>Types of Apps We Maintain At Amplework Software</h3>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's
        <br /> standard dummy text ever since the 1500s,
      </p>
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
