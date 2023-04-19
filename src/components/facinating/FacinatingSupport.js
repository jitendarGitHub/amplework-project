import { Card, Container } from "react-bootstrap";
import "../facinating/facinating.css";

import facinating1 from "../../assets/facinating1.png";
import facinating2 from "../../assets/facinating2.png";
import facinating3 from "../../assets/facinating3.png";
import facinating4 from "../../assets/facinating4.png";
import facinating5 from "../../assets/facinating5.png";
import facinating6 from "../../assets/facinating6.png";

const FacinatingCard = (props) => {
  return (
    <>
      <Card className="mt-4 text-start facinating">
        <Card.Body>
          <div className="d-flex">
            <div className="">
              <h5 className="titles fw-100">{props.title}</h5>
              <Card.Text>
                <p className="para">{props.para}</p>
              </Card.Text>
            </div>
            <div className="img-background align-self-center text-center p-2">
              <img src={props.img} />
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

const Facinating = () => {
  return (
    <>
      <div className="text-center py-5 bg-light ">
        <h3>
          Fascinating Benefits of Application Maintenance and Support Services
        </h3>
        <p className="facinatinf-para">
          Time to empower your mind with the fascinating benefits of application
          maintenance and support services. So, get
          <br /> ready to empower your mobile application growth with these
          foremost benefits.
        </p>

        <Container>
          <div className="d-lg-flex d-md-flex gap-4 mt-5">
            <div className=" col-sm-6 ">
              <FacinatingCard
                img={facinating1}
                title="Longer Life span"
                para="Rectifying errors quickly helps in enhancing the lifespan of mobile applications in a well-defined manner."
              />
            </div>
            <div className="col-sm-6">
              {" "}
              <FacinatingCard
                img={facinating2}
                title="Bugs Removal"
                para="Bug removal is an essential part of software maintenance, as it helps to ensure that applications are functioning in a well-defined manner."
              />
            </div>
          </div>
          <div className="d-lg-flex d-md-flex d-sm-block gap-4">
            <div className="col-sm-6">
              <FacinatingCard
                img={facinating3}
                title="Upwards App Performance"
                para="When your application gets frequent maintenance at a consistent interval then it eventually follows upwards growth."
              />
            </div>
            <div className="col-sm-6">
              <FacinatingCard
                img={facinating4}
                title="Security Management"
                para="Data security measures keep evolving to eliminate counterfeit measures - so make your apps profound with security management."
              />
            </div>
          </div>
          <div className="d-lg-flex d-md-flex  gap-4">
            <div className="col-sm-6">
              <FacinatingCard
                img={facinating5}
                title="Data Management"
                para="User’s data is the most precious asset for your business and consistent maintenance empowers data management functions."
              />
            </div>
            <div className="col-sm-6">
              {" "}
              <FacinatingCard
                img={facinating6}
                title="Reduced Tech Debts"
                para="By addressing issues and making updates in a timely manner, you can avoid accumulating technical issues."
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Facinating;
