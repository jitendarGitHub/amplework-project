import { Dedicated } from "../../../../assets";

const Maintenance = () => {
  return (
    <section className="bg-light">
      <div className="container">
        <div className="row justify-content-between justify-content-lg-end columnreverse">
          <div className="col-sm-12 col-lg-5 pt-md-2  pl-md-5 align-self-center">
            <img src={Dedicated} width={"90%"} />
          </div>
          <div className="col-sm-12 col-lg-7">
            <h6 className="supporter-title text-primary fw-bold">
              AMPLEWORK SOFTWARE
            </h6>
            <h3 className="supporter-heading">
              Your dedicated Supporter for App Maintenance Service
            </h3>
            <p className="supporter-para mt-4">
              App maintenance is a critical aspect because it effectively keeps
              the application functioning in an optimized manner so that it can
              fulfill your audient requirement. At Amplework , we can support
              you in almost everthing from bug fixed to security potches. Our
              prowess developers ensure that the application should stay secure
              and up-to-date
            </p>
            <p className="supporter-para">
              App maintenance is a critical aspect because it effectively keeps
              the application functioning in an optimized manner so that it can
              fulfill your audient requirement. At Amplework , we can support
              you in almost everthing from bug fixed to security potches.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Maintenance;
