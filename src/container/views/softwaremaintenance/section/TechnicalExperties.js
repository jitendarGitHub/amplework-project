import { Image } from "react-bootstrap";
import { TechnicalExpertimg } from "../../../../assets";
import { PrimaryText } from "../../../../components/text";

const TechnicalExperties = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="technical-experties-img-block">
              <Image src={TechnicalExpertimg} width={"100%"} />
            </div>
          </div>
          <div className="col-lg-6">
            <PrimaryText
              heading="TECHNOLOGY STACK"
              className="profound-heading"
            />
            <PrimaryText
              heading="Technical Experties our resources hold"
              className="fw-bold fs-5"
            />

            <div className="row">
              <div className="col-lg-2">Technical Experties</div>
              <div className="col-lg-10 d-flex flex-wrap">
                <div className=" border-2">HTML</div>
                <div className="">CSS</div>
                <div className="">Javascript</div>
                <div className="">Angular</div>
                <div className="">Vue.js</div>
                <div className="">React.js</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TechnicalExperties;
