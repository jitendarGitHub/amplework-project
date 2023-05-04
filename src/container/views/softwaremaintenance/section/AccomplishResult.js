import {
  Accomplishimg1,
  Accomplishimg2,
  Accomplishimg3,
  Accomplishimg4,
  Accomplishimg5,
  Accomplishimg6,
  Brandimg1,
} from "../../../../assets";
import { AccomplishCard } from "../../../../components";

const AccoumplishResult = () => {
  return (
    <>
      <div className="container text-center">
        <h3>Accomplish Results With Top Software Maintenance Company</h3>
        <p>
          Build stable applications with custom software maintenance services
          that results into 100% business efficiency while enhancing the
          functionalities.
        </p>
        {/* <div className="row"></div> */}
        <dib className="row">
          <div className="col-lg-4 col-md-6">
            <AccomplishCard
              img={Accomplishimg1}
              title="Secure & Stable Running of Apps"
              about=" We ensure the secure and stable operations of applications
                  that are essential to prevent data breaches & maintain user
                  confidence."
            />
          </div>
          <div className="col-lg-4 col-md-6">
            <AccomplishCard
              img={Accomplishimg2}
              title="Eliminate Issues of Application Downtime"
              about="Downtime issues enhance the user attrition rate - so we incorporate specific solutions to eliminate downtime issues."
            />
          </div>
          <div className="col-lg-4 col-md-6">
            <AccomplishCard
              img={Accomplishimg3}
              title="High-Performance Applications"
              about="We fix bugs & vulnerabilities by upgrading specific key components to tune applications into high-performance output generation. "
            />
          </div>

          <div className="col-lg-4 col-md-6">
            <AccomplishCard
              img={Accomplishimg4}
              title="Feature Customization"
              about="Software maintenance helps with feature customization by adding new features and customizing existing ones."
            />
          </div>

          <div className="col-lg-4 col-md-6">
            <AccomplishCard
              img={Accomplishimg5}
              title="Improved User Experience"
              about="Consistent maintenance ensures to improves the user experience, reliability & higher performance through timely support."
            />
          </div>

          <div className="col-lg-4 col-md-6">
            <AccomplishCard
              img={Accomplishimg6}
              title="Better Compatibility"
              about="Improve compatibility by ensuring the application for working seamlessly across different platforms & devices."
            />
          </div>

          {/* <AccomplishCard />
          <AccomplishCard />
          <AccomplishCard /> */}
        </dib>
      </div>
    </>
  );
};
export default AccoumplishResult;
