import {
  BugMagix,
  BugSpeed,
  Bugchat,
  Bugdata,
  Bugmodification,
  ExtraForUseImg,
} from "../../../../assets";
import "../softwaremaintenance.css";

const UnIntrupted = () => {
  return (
    <section className="bg-light">
      <div className="container">
        <h2>
          Software Maintenance and Support Company For Uninterrupted Business
          Operations
        </h2>
        <p>
          Software maintenance and support services are essential for businesses
          that rely on technology to keep their operations running smooth.
          Without proper maintenance.
        </p>
        <div className="row intrupted text-center">
          <div className="col-lg-4 p-3">
            <img src={ExtraForUseImg} alt="" />
            <h4>Bugs & Glitch Removal</h4>
            <p>
              Hire Golang weeb developers team to build robust concurrent
              applications, simplifying multithreading with ease.
            </p>
          </div>
          <div className="col-lg-4 p-3 ">
            <img src={Bugdata} alt="" />
            <h4>Data Migration & Audits</h4>
            <p>
              Hire Golang weeb developers team to build robust concurrent
              applications, simplifying multithreading with ease.
            </p>
          </div>
          <div className="col-lg-4 p-3">
            <img src={Bugchat} alt="" />
            <h4>WordPress Support & Maintenance Audits</h4>
            <p>
              Hire Golang weeb developers team to build robust concurrent
              applications, simplifying multithreading with ease.
            </p>
          </div>
          <div className="col-lg-4 p-3">
            <img src={Bugmodification} alt="" />
            <h4>Modification & Reconfiguration</h4>
            <p>
              Hire Golang weeb developers team to build robust concurrent
              applications, simplifying multithreading with ease.
            </p>
          </div>
          <div className="col-lg-4 p-3">
            <img src={BugMagix} alt="" />
            <h4>Enhancement & Insertions</h4>
            <p>
              Hire Golang weeb developers team to build robust concurrent
              applications, simplifying multithreading with ease.
            </p>
          </div>
          <div className="col-lg-4 p-3">
            <img src={BugSpeed} alt="" />
            <h4>Performance Monitoring</h4>
            <p>
              Hire Golang weeb developers team to build robust concurrent
              applications, simplifying multithreading with ease.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default UnIntrupted;
