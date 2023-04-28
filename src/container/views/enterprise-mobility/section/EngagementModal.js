import { Card } from "react-bootstrap";
import { EngagementCheck } from "../../../../assets";
import "../EnterpriseMobility.css";

const EngagementModal = () => {
  return (
    <div className="container">
      <h2 className="text-center">
        Save Up-To 55% Operational Cost With Our Engagement Model
      </h2>
      <div className="row">
        <div className="col-lg-4">
          <Card>
            <h3>Hire Enterprise Mobility Developer</h3>
            <p>
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
          <div className="row">
            <p>
              Our engagement models are designed to effectively tailor the
              requirements of clients. Through our three engagement model types
              (monthly, hourly & complete term contracts) you can curtail your
              time & resources.
            </p>
            <div className="d-flex">
              <Card>
                <div className="col-lg-6">
                  <div className="d-flex">
                    <h1>$20</h1>
                    <span>Hourly</span>
                  </div>
                  <h4>Hourly Plan</h4>
                  <p>
                    Clients can avail of services at any hour of the day as per
                    their requirements.
                  </p>
                  <li className="p-1 list-style">
                    <img src={EngagementCheck} width={"18px"} />
                    &nbsp; [Billing cycling - Weekly]
                  </li>
                </div>
              </Card>
              <Card>
                <div className="col-lg-6">
                  <div className="d-flex">
                    <h1> $2500</h1>
                    <span>Monthly</span>
                  </div>
                  <h4>Monthly Plan</h4>
                  <p>8 hours per day with 5 days in a week approach.</p>
                  <li className="p-1 list-style">
                    <img src={EngagementCheck} width={"18px"} />
                    &nbsp; [Billing cycling-Weekly]
                  </li>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EngagementModal;
