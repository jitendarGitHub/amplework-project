import { Button, Card, CardGroup } from "react-bootstrap";
import { EngagementCheck, Recommended } from "../../../../assets";
import "../EnterpriseMobility.css";
import { Engagement1 } from "../../../../assets";
import CustomButtom from "../../../../components/button";
import { PrimaryText, SecondaryText } from "../../../../components/text";

const EngagementModal = () => {
  return (
    <div className="container">
      <PrimaryText
        className="text-center"
        heading=" Save Up-To 55% Operational Cost With Our Engagement Model"
      />
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
            <PrimaryText
              className="hire-mobility p-3"
              heading="Hire Enterprise Mobility Developer"
            />
            <SecondaryText
              className="hire-mobility-para"
              para="With the prowess & knowledge of our developers, you can ask them
              to customize tech-enabled solutions as per your business
              requirements."
            />

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
          <SecondaryText
            className="engagement-para"
            para="Our engagement models are designed to effectively tailor the
            requirements of clients. Through our three engagement model types
            (monthly, hourly & complete term contracts) you can curtail your
            time & resources."
          />
          <div className="row justify-content-around mt-4">
            <div className="col-lg-5 p-0">
              <Card className="border-0 pt-4">
                <div className="d-flex price">
                  <PrimaryText className="fw-bold fs-1" heading="$20" />
                  <span className="mt-3 ">Hourly</span>
                </div>
                <SecondaryText
                  className=" fs-6 fw-bold text-primary"
                  para="Hourly Plan"
                />
                <SecondaryText
                  para=" Clients can avail of services at any hour of the day as per
                  their requirements."
                />
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

                <SecondaryText para="8 hours per day with 5 days in a week approach." />
                <li className="p-1 mt-4 list-style text-light">
                  <img src={EngagementCheck} width={"18px"} />
                  &nbsp; [Billing cycling - Weekly]
                </li>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-4 ">
        <CustomButtom classname="engagement-btn" value="Get a free Quote" />
      </div>
    </div>
  );
};
export default EngagementModal;
