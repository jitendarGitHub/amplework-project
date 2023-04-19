import "../diverseLevel/diverse.css";
import bgimg from "../../assets/Group 13516.png";
import { Card } from "react-bootstrap";

const DiverseLevel = () => {
  return (
    <>
      <div className="diverse d-flex flex-wrap container justify-content-around pb-5">
        <div className="col-sm-6 diverse-first">
          <h3 className="diverse-heading col-sm-9">
            Diverse Levels Of Support Offered By Our Prowess Experts
          </h3>
          <p className="diverse-para col-sm-8">
            We offer support for application maintenance at a diverse level of
            operations to help our clients in accomplishing their specific
            goals. If you are confused that which level of support service will
            be beneficial for you then you can connect with us to get valuable
            insights about operations.
          </p>
        </div>
        <div className="col-sm-6   d-flex  gap-3">
          <div className="first">
            <Card className="mt-3 card-img border-3 text-light text-start ">
              <Card.Body>
                <span style={{ fontSize: "14px" }}>Level 1</span>
                <br />
                <span style={{ fontSize: "14px" }}>
                  Covers Basic App Services
                </span>
                <br />
                <li>Consists of technical information. </li>
                <li>Basic system maintenance.</li>
                <li>Basic bug fixes.</li>
                <li>Troubleshooting</li>
                <li>Basic security maintenance.</li>
              </Card.Body>
            </Card>
            <Card className="mt-3 card-img2  border-3 text-light text-start">
              <Card.Body>
                <span style={{ fontSize: "14px" }}>Level 1</span>
                <br />
                <span style={{ fontSize: "14px" }}>
                  Covers Basic App Services
                </span>
                <br />
                <li>Consists of technical information. </li>
                <li>Basic system maintenance.</li>
                <li>Basic bug fixes.</li>
                <li>Troubleshooting</li>
                <li>Basic security maintenance.</li>
              </Card.Body>
            </Card>
          </div>
          <div className="second mt-4">
            <Card className="mt-3 card-img1 border-3 text-light text-start">
              <Card.Body>
                <span style={{ fontSize: "14px" }}>Level 1</span>
                <br />
                <span style={{ fontSize: "14px" }}>
                  Covers Basic App Services
                </span>
                <br />
                <li>Consists of technical information. </li>
                <li>Basic system maintenance.</li>
                <li>Basic bug fixes.</li>
                <li>Troubleshooting</li>
                <li>Basic security maintenance.</li>
              </Card.Body>
            </Card>
            <Card className="mt-3 card-img3 border-3 text-light text-start">
              <Card.Body>
                <span style={{ fontSize: "14px" }}>Level 1</span>
                <br />
                <span style={{ fontSize: "14px" }}>
                  Covers Basic App Services
                </span>
                <br />
                <li>Consists of technical information. </li>
                <li>Basic system maintenance.</li>
                <li>Basic bug fixes.</li>
                <li>Troubleshooting</li>
                <li>Basic security maintenance.</li>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};
export default DiverseLevel;
