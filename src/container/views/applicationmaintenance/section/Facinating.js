import {
  facinating1,
  facinating2,
  facinating3,
  facinating4,
  facinating5,
} from "../../../../assets";
import { FacinatingCard } from "../../../../components";
import "../application.css";

const Facinating = () => {
  return (
    <section className="facinating-section">
      <div className="container text-center  ">
        <h3>
          Fascinating Benefits of Application Maintenance and Support Services
        </h3>
        <p className="facinatinf-para">
          Time to empower your mind with the fascinating benefits of application
          maintenance and support services. So, get
          <br /> ready to empower your mobile application growth with these
          foremost benefits.
        </p>

        <div className="row ">
          <div className=" col-sm-12 col-lg-6">
            <FacinatingCard
              img={facinating1}
              title="Longer Life span"
              para="Rectifying errors quickly helps in enhancing the lifespan of mobile applications in a well-defined manner."
            />
          </div>
          <div className="col-sm-12 col-lg-6">
            {" "}
            <FacinatingCard
              img={facinating2}
              title="Bugs Removal"
              para="Bug removal is an essential part of software maintenance, as it applications are functioning in a well-defined manner."
            />
          </div>

          <div className="col-sm-12 col-lg-6">
            <FacinatingCard
              img={facinating3}
              title="Upwards App Performance"
              para="When your application gets frequent maintenance at a consistent interval then it eventually follows upwards growth."
            />
          </div>
          <div className="col-sm-12 col-lg-6">
            <FacinatingCard
              img={facinating4}
              title="Security Management"
              para="Data security measures keep evolving to eliminate counterfeit measures - so make your apps profound with security management."
            />
          </div>
          <div className="col-sm-12 col-lg-6">
            <FacinatingCard
              img={facinating5}
              title="Data Management"
              para="User’s data is the most precious asset for your business and consistent maintenance  management functions."
            />
          </div>
          <div className="col-sm-12 col-lg-6">
            {" "}
            <FacinatingCard
              img={facinating1}
              title="Reduced Tech Debts"
              para="By addressing issues and making updates in a timely manner, you can avoid accumulating technical issues."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facinating;
