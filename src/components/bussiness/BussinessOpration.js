import { Card, Container } from "react-bootstrap";
import "../bussiness/bussiness.css";
import Bussiness from "../../assets/bussiness.png";

const Business = (props) => {
  return (
    <>
      <Card className="mt-2 bussiness-card">
        <Card.Body>
          <div className="">
            <h4 className="fw-bold  bussiness-headings">{props.time}</h4>
            <p>{props.para}</p>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

const BussinessOpration = () => {
  return (
    <>
      <div className="bussiness text-center py-5">
        <h3 className="bussiness-heading">
          Our Numbers Speaks For Our Business Operations
        </h3>
        <p className="bussiness-para">
          We don’t compromise on the quality aspects thus it makes us the
          leading application development maintenance and
          <br /> support service provider. We resolve even the most severe
          incidents in less than 8 hours.
        </p>
        <Container>
          <div className="d-lg-flex justify-content-between">
            <Business time="10-15 Mins" para="Minimum incident Response Time" />{" "}
            <Business time="2-3 Hours" para="Minimum Incident Solution Time" />{" "}
            <Business time="10-15 Mins" para="Minimum incident Response Time" />{" "}
            <Business time="10-15 Mins" para="Minimum incident Response Time" />
          </div>
        </Container>
        <div className="mt-5 py-5 container">
          <h3 className="bussiness-heading">
            Are you searching for a dedicated technology partner, not
            <br /> just a service provider?
          </h3>
          <div className="d-lg-flex">
            <div className="col-sm-6 text-start align-self-center">
              <p>
                Our clients generated more than $50 million in revenues by
                creating seamless mobile applications that run without any bugs
                or glitches. Thus, we continue to upgrade our services to
                support clients in generating higher revenue for operations.
              </p>
              <p>
                <i
                  className="fa fa-check-circle-o mx-3"
                  style={{ color: "blue", opacity: "0.4" }}
                />
                Personalized business services.
              </p>
              <p>
                <i
                  className="fa fa-check-circle-o mx-3"
                  style={{ color: "blue", opacity: "0.4" }}
                />
                Advanced practices for DevOps.
              </p>
              <p>
                <i
                  className="fa fa-check-circle-o mx-3"
                  style={{ color: "blue", opacity: "0.4" }}
                />
                Proficiency in AI/ML/Blockchain Solutions.
              </p>
              <p>
                <i
                  className="fa fa-check-circle-o mx-3"
                  style={{ color: "blue", opacity: "0.4" }}
                />
                Exclusive support for digital transformation.
              </p>
              <p>
                <i
                  className="fa fa-check-circle-o mx-3"
                  style={{ color: "blue", opacity: "0.4" }}
                />
                Large scale & complex app building.
              </p>
            </div>
            <div className="col-sm-6">
              <img src={Bussiness} width={"90%"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BussinessOpration;
