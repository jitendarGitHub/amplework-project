import { Bussiness, HourlyPlan } from "../../../../assets";
import "../application.css";
const DedicatedTechnology = () => {
  return (
    <section className="dedicated-technology">
      <div className=" container text-center">
        <h3 className="bussiness-heading">
          Are you searching for a dedicated technology partner, not
          <br /> just a service provider?
        </h3>
        <div className="row columnreverse">
          <div className="col-sm-12 col-lg-6 text-start align-self-center">
            <p>
              Our clients generated more than $50 million in revenues by
              creating seamless mobile applications that run without any bugs or
              glitches. Thus, we continue to upgrade our services to support
              clients in generating higher revenue for operations.
            </p>
            <p>
              <img src={HourlyPlan} alt="" width={"10px"} />
              &nbsp;&nbsp; Personalized business services.
            </p>
            <p>
              <img src={HourlyPlan} alt="" width={"10px"} />
              &nbsp;&nbsp; Advanced practices for DevOps.
            </p>
            <p>
              <img src={HourlyPlan} alt="" width={"10px"} />
              &nbsp;&nbsp; Proficiency in AI/ML/Blockchain Solutions.
            </p>
            <p>
              <img src={HourlyPlan} alt="" width={"10px"} />
              &nbsp;&nbsp; Exclusive support for digital transformation.
            </p>
            <p>
              <img src={HourlyPlan} alt="" width={"10px"} />
              &nbsp;&nbsp; Large scale & complex app building.
            </p>
          </div>
          <div className="col-sm-12 col-lg-6">
            <img src={Bussiness} width={"90%"} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default DedicatedTechnology;
