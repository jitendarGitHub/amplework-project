import { Card } from "react-bootstrap";
import { DiverseCardBg, facinating4 } from "../../../../assets";
import DefaultCard from "../../../../components/card/Index";

const Diverse = () => {
  return (
    <section className="">
      <div className="container">
        <div className="diverse row">
          <div className="col-sm-12 col-lg-6 diverse-first ">
            <h3 className="diverse-heading col-sm-9">
              Diverse Levels Of Support Offered By Our Prowess Experts
            </h3>
            <p className="diverse-para ">
              We offer support for application maintenance at a diverse level of
              operations to help our clients in accomplishing their specific
              goals. If you are confused that which level of support service
              will be beneficial for you then you can connect with us to get
              valuable insights about operations.
            </p>
          </div>
          <div className="col-sm-12 col-lg-6 d-lg-flex gap-3">
            <div className="">
              <Card
                className="mt-3 card-img border-3 text-light text-start "
                style={{
                  backgroundImage: `url(${DiverseCardBg})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <Card.Body>
                  <span style={{ fontSize: "14px" }}>Level 1</span>
                  <br />
                  <span className="fw-bold" style={{ fontSize: "12px" }}>
                    Covers Basic App Services
                  </span>
                  <br />
                  <ul className="p-1 mx-2 lh-lg">
                    <li>Consists of technical information. </li>
                    <li>Basic system maintenance.</li>
                    <li>Basic bug fixes.</li>
                    <li>Troubleshooting</li>
                    <li>Basic security maintenance.</li>
                  </ul>
                </Card.Body>
              </Card>
              <Card
                className="mt-3 card-img2  border-3 text-light text-start"
                style={{
                  backgroundImage: `url(${DiverseCardBg})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <Card.Body>
                  <span style={{ fontSize: "14px" }}>Level 2</span>
                  <br />
                  <span className="fw-bold" style={{ fontSize: "12px" }}>
                    Comprehensive Maintenance
                  </span>
                  <br />
                  <ul className="p-1 mx-2 lh-lg">
                    <li> Configuration Management. </li>
                    <li>Basic Documentation. </li>
                    <li>Basic Testing. </li>
                    <li>Problem Management. </li>
                    <li>Advance Bug Fixes.</li>
                  </ul>
                </Card.Body>
              </Card>
            </div>
            <div className="mt-4">
              <Card
                className="mt-3 card-img1 border-3 text-light text-start"
                style={{
                  backgroundImage: `url(${DiverseCardBg})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <Card.Body>
                  <span style={{ fontSize: "14px" }}>Level 3</span>
                  <br />
                  <span className="fw-bold" style={{ fontSize: "12px" }}>
                    Advanced Support Services
                  </span>
                  <br />
                  <ul className="p-1 mx-2 lh-lg">
                    <li>Performance Tuning.</li>
                    <li>Advanced Testing.</li>
                    <li> Advanced Documentation.</li>
                    <li>Release Management.</li>
                    <li> Advanced Bug Fixes.</li>
                  </ul>
                </Card.Body>
              </Card>
              <Card
                className="mt-3 card-img3 border-3 text-light text-start"
                style={{
                  backgroundImage: `url(${DiverseCardBg})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <Card.Body>
                  <span style={{ fontSize: "14px" }}>Level 4</span>
                  <br />
                  <span className="fw-bold" style={{ fontSize: "12px" }}>
                    Specialized Support Services
                  </span>
                  <br />
                  <ul className="p-1 mx-2 lh-lg">
                    <li> Root Cause Analysis. </li>
                    <li>Database Administration. </li>
                    <li>Architecture Design. </li>
                    <li>Secure Operations. </li>
                    <li>Personalized Solutions.</li>
                  </ul>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Diverse;
