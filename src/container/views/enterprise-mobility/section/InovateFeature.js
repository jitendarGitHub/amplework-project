import {
  InovateRealTime,
  InovateSecure,
  InovateSkill,
  InovateStandard,
  Inovateglobal,
} from "../../../../assets";

import "../EnterpriseMobility.css";

const InovateFeature = () => {
  return (
    <div className="container text-center">
      <h3>Experience Innovate Features of Enterprise Mobility Solutions</h3>
      <p>Experience Innovate Features of Enterprise Mobility Solutions</p>

      <div class="row justify-content-center text-white">
        <div class="col-lg-4 text-start m-lg-2 p-3 pt-4 inovate-first">
          <img src={InovateSkill} alt="" width={"150px"} />
          <h6 className="fw-bold p-2 pt-4">5x Efficiency Improvement</h6>
          <p className="inovate-para p-1 pe-5">
            Our solutions can help improve efficiency by up to 5x times that
            resulting in reduced costs and increased productivity.
          </p>
        </div>
        <div className="col-lg-7">
          <div className="row ">
            <div class=" col-md-5  text-start p-3 m-md-2 inovate-second mt-2">
              <img src={Inovateglobal} width={"30px"} />
              <h6 className="fw-bold pt-2">Global Scale</h6>
              <p className="inovate-para">
                Our enterprise mobility solutions can be deployed and scaled
                globally to meet the needs of your business.
              </p>
            </div>
            <div class="col-md-5 text-start p-3 m-md-2 inovate-third mt-2">
              <img src={InovateStandard} alt="" width={"30px"} />
              <h6 className="fw-bold pt-2">Standard Controls</h6>
              <p className="inovate-para">
                We utilize standard controls to ensure consistency and usability
                across all enterprise mobile applications.
              </p>
            </div>
            <div className="col-md-5 text-start p-3 m-md-2 inovate-four mt-2">
              <img src={InovateSecure} alt="" width={"30px"} />
              <h6 className="fw-bold pt-2">Zero Timedown</h6>
              <p className="inovate-para">
                We ensure zero downtime during the deployment and maintenance of
                our enterprise mobility solutions.
              </p>
            </div>
            <div className="col-md-5 text-start p-3 m-md-2 inovate-five mt-2 mb-2">
              <img src={InovateRealTime} alt="" width={"30px"} />
              <h6 className="fw-bold pt-2">Real Time Analytics</h6>
              <p className="inovate-para">
                Our solutions provide real-time analytics to help businesses
                make data-driven decisions and stay ahead of the competition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InovateFeature;
