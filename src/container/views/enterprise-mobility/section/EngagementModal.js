import { Button, Card, CardGroup } from "react-bootstrap";
import { EngagementCheck, Recommended } from "../../../../assets";
import "../EnterpriseMobility.css";
import { Engagement1 } from "../../../../assets";

const EngagementModal = () => {
  return (
    <div className="container">
      <h2 className="text-center ">
        Save Up-To 55% Operational Cost With Our Engagement Model
      </h2>
      <div className="row mt-4">
        <div
          className="col-lg-4 "
          style={{
            backgroundImage: `url(${Engagement1})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <Card className="bg-transparent border-0  ">
            <h3 className="hire-mobility p-3">
              Hire Enterprise Mobility Developer
            </h3>
            <p className="hire-mobility-para">
              With the prowess & knowledge of our developers, you can ask them
              to customize tech-enabled solutions as per your business
              requirements.
            </p>
            <li className="p-1 list-style">
              <img src={EngagementCheck} width={"18px"} />
              &nbsp; Long Term Collaboration
            </li>
            <li className="p-1 list-style">
              <img src={EngagementCheck} width={"18px"} />
              &nbsp; Highly Scalable Team
            </li>
            <li className="p-1 list-style">
              <img src={EngagementCheck} width={"18px"} />
              &nbsp; Complete Control of the Team
            </li>
          </Card>
        </div>
        <div className="col-lg-8">
          <p className="engagement-para">
            Our engagement models are designed to effectively tailor the
            requirements of clients. Through our three engagement model types
            (monthly, hourly & complete term contracts) you can curtail your
            time & resources.
          </p>
          <div className="row justify-content-around mt-4">
            <div className="col-lg-5 p-0">
              <Card className="border-0">
                <div className="d-flex price">
                  <h1 className=" fw-bold">$20</h1>
                  <span className="mt-3 ">Hourly</span>
                </div>
                <h4 className="p-3 fs-6 fw-bold text-primary">Hourly Plan</h4>
                <p>
                  Clients can avail of services at any hour of the day as per
                  their requirements.
                </p>
                <li className="p-1 list-style">
                  <img src={EngagementCheck} width={"18px"} />
                  &nbsp; [Billing cycling - Weekly]
                </li>
              </Card>
            </div>
            <div className="col-lg-6 p-1 monthly-card mt-2 ">
              <img
                src={Recommended}
                style={{
                  marginTop: "-33px",
                  marginLeft: "15px",
                  position: "absolute",
                }}
              />
              <Card className="bg-transparent text-light border-0 pt-sm-4">
                <div className="d-flex price2">
                  <h1 className="  fw-bold">$2500</h1>
                  <span className="mt-3 ">Monthly</span>
                </div>
                <h4 className="p-2 fs-6 fw-bold ">Monthly Plan</h4>
                <p>
                  8 hours per day with 5 days in a week
                  <br /> approach.
                </p>
                <li className="p-1 list-style text-light">
                  <img src={EngagementCheck} width={"18px"} />
                  &nbsp; [Billing cycling - Weekly]
                </li>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-4 ">
        <Button className="engagement-btn">Get a free Quote</Button>
      </div>
    </div>
  );
};
export default EngagementModal;
