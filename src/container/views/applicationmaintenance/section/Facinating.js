import {
  enterprise1,
  facinating1,
  facinating2,
  facinating3,
  facinating4,
  facinating5,
} from "../../../../assets";
import { FacinatingCard } from "../../../../components";
import DefaultCard from "../../../../components/card/Index";
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
            <DefaultCard
              cardclass="d-flex text-start facinating p-4 mt-4"
              cardstyle={{ flexDirection: "row-reverse" }}
              imgdivclass="img-background align-self-center  text-center"
              cardimage={facinating1}
              headingclass="titles"
              headingstyle={{ visibility: "hidden" }}
              heading="Web App Maintenance"
              para=" Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum"
            />
          </div>
          <div className=" col-sm-12 col-lg-6">
            <DefaultCard
              cardclass="d-flex text-start facinating p-4 mt-4"
              cardstyle={{ flexDirection: "row-reverse" }}
              imgdivclass="img-background align-self-center  text-center"
              cardimage={facinating2}
              headingclass="titles"
              headingstyle={{ visibility: "hidden" }}
              heading="Bug Removal"
              para="Bug removal is an essential part of software maintenance, as it helps to ensure that applications are functioning in a well-defined manner."
            />
          </div>
          <div className=" col-sm-12 col-lg-6">
            <DefaultCard
              cardclass="d-flex text-start facinating p-4 mt-4"
              cardstyle={{ flexDirection: "row-reverse" }}
              imgdivclass="img-background align-self-center  text-center"
              cardimage={facinating3}
              headingclass="titles"
              headingstyle={{ visibility: "hidden" }}
              heading="Upwards Apps Preferance"
              para="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum"
            />
          </div>
          <div className=" col-sm-12 col-lg-6">
            <DefaultCard
              cardclass="d-flex text-start facinating p-4 mt-4"
              cardstyle={{ flexDirection: "row-reverse" }}
              imgdivclass="img-background align-self-center  text-center"
              cardimage={facinating4}
              headingclass="titles"
              headingstyle={{ visibility: "hidden" }}
              heading="Security Management"
              para="Data security measures keep evolving to eliminate counterfeit measures - so make your apps profound with security management."
            />
          </div>
          <div className=" col-sm-12 col-lg-6">
            <DefaultCard
              cardclass="d-flex text-start facinating p-4 mt-4"
              cardstyle={{ flexDirection: "row-reverse" }}
              imgdivclass="img-background align-self-center  text-center"
              cardimage={facinating5}
              headingclass="titles"
              headingstyle={{ visibility: "hidden" }}
              heading="Data Management"
              para="User’s data is the most precious asset for your business and consistent maintenance empowers data management functions."
            />
          </div>
          <div className=" col-sm-12 col-lg-6">
            <DefaultCard
              cardclass="d-flex text-start facinating p-4 mt-4"
              cardstyle={{ flexDirection: "row-reverse" }}
              imgdivclass="img-background align-self-center  text-center"
              cardimage={facinating5}
              headingclass="titles"
              headingstyle={{ visibility: "hidden" }}
              heading="Reduced Tech Debts"
              para="By addressing issues and making updates in a timely manner, you can avoid accumulating technical issues."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facinating;
