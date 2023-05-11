import { PrimaryText, SecondaryText } from "../../../../components/text";
import "../EnterpriseMobility.css";

const ReasonAmpleSM = () => {
  return (
    <>
      <div className="reason-ample container p-5 text-white">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-5 align-self-center">
            <PrimaryText
              heading="Reason to Choose Amplework"
              className="fs-4"
            />
            <SecondaryText
              para="We provide expert advice and development services to clients
              through our well-versed knowledge about technologies & industries."
            />
          </div>
          <div className="col-lg-5 d-flex justify-content-around">
            <div className="row">
              <div className="col-lg-4 col-md-4  align-self-center">
                <PrimaryText heading="350+" className="fs-1" />
                <SecondaryText
                  className="record"
                  para="Projects accomplished"
                />
              </div>
              <div className="col-lg-4 col-md-4">
                <div className=" pb-3 p-2 fff">
                  <PrimaryText className="fs-1" heading="500+" />
                  <SecondaryText className="record" para="Happy Client" />
                </div>
                <div className=" pt-3 p-2 ffff">
                  <PrimaryText className="fs-1" heading="150+" />
                  <SecondaryText className="record" para="Certification" />
                </div>
              </div>
              <div className="p-2 col-lg-4 col-md-4 align-self-center">
                <PrimaryText className="fs-1" heading="8+" />
                <SecondaryText className="record" para="Year`s` Experience" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ReasonAmpleSM;
