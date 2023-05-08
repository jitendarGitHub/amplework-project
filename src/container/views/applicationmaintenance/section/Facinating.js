import { DefaultCard } from "../../../../components";
import { Facinatingmockup } from "../../../../mockup/Facinatingmockup";
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
          {Facinatingmockup.map((items) => {
            return (
              <div className=" col-sm-12 col-lg-6">
                <DefaultCard
                  cardclass="d-flex text-start facinating p-4 mt-4"
                  cardstyle={{ flexDirection: "row-reverse" }}
                  imgdivclass="img-background align-self-center  text-center"
                  cardimage={items.cardimage}
                  imgstyle={items.imgstyle}
                  headingclass="titles"
                  heading={items.heading}
                  para={items.para}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Facinating;
