import { Image } from "react-bootstrap";
import {
  InovateRealTime,
  InovateSecure,
  InovateSkill,
  InovateStandard,
  Inovateglobal,
} from "../../../../assets";
import { PrimaryText, SecondaryText } from "../../../../components/text";

import "../EnterpriseMobility.css";

const InovateFeature = () => {
  return (
    <div className="container text-center">
      <PrimaryText heading="Experience Innovate Features of Enterprise Mobility Solutions" />
      <SecondaryText para="Experience Innovate Features of Enterprise Mobility Solutions" />

      <div class="row justify-content-center text-white">
        <div class="col-lg-4 text-start m-lg-2 p-3 pt-4 inovate-first">
          <img src={InovateSkill} alt="" width={"150px"} />
          <PrimaryText
            className="fw-bold p-2 pt-4 fs-6"
            heading="5x Efficiency Improvement"
          />
          <SecondaryText
            className="inovate-para p-1 pe-5"
            para="Our solutions can help improve efficiency by up to 5x times that
            resulting in reduced costs and increased productivity."
          />
        </div>
        <div className="col-lg-7">
          <div className="row ">
            <div class=" col-md-5  text-start p-3 m-md-2 inovate-second mt-2">
              <Image src={Inovateglobal} width={"30px"} />
              <SecondaryText
                className="fw-bold pt-2 fs-6"
                para="Global Scale"
              />
              <SecondaryText
                className="inovate-para"
                para="Our enterprise mobility solutions can be deployed and scaled
                globally to meet the needs of your business."
              />
            </div>
            <div class="col-md-5 text-start p-3 m-md-2 inovate-third mt-2">
              <Image src={InovateStandard} alt="" width={"30px"} />
              <SecondaryText
                className="fw-bold pt-2 fs-6"
                para="Standard Controls"
              />
              <SecondaryText
                className="inovate-para"
                para="  We utilize standard controls to ensure consistency and usability
                across all enterprise mobile applications."
              />
            </div>
            <div className="col-md-5 text-start p-3 m-md-2 inovate-four mt-2">
              <Image src={InovateSecure} alt="" width={"30px"} />
              <SecondaryText
                className="fw-bold pt-2 fs-6"
                para="Zero Timedown"
              />
              <SecondaryText
                className="inovate-para"
                para="We ensure zero downtime during the deployment and maintenance of
                our enterprise mobility solutions."
              />
            </div>
            <div className="col-md-5 text-start p-3 m-md-2 inovate-five mt-2 mb-2">
              <Image src={InovateRealTime} alt="" width={"30px"} />
              <SecondaryText
                className="fw-bold pt-2 fs-6"
                para="Real Time Analytics"
              />
              <SecondaryText
                className="inovate-para"
                para="Our solutions provide real-time analytics to help businesses
                make data-driven decisions and stay ahead of the competition."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InovateFeature;
