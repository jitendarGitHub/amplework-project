import { TechnicalExpertimg } from "../../../../assets";

const TechnicalExperties = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="technical-experties-img-block">
              <img src={TechnicalExpertimg} width={"100%"} />
            </div>
          </div>
          <div className="col-lg-6">
            <h5 className="profound-heading">TECHNOLOGY STACK</h5>
            <h4 className="fw-bold">Technical Experties our resources hold</h4>
            <div className="row">
              <div className="col-lg-2">jfjghfg</div>
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
