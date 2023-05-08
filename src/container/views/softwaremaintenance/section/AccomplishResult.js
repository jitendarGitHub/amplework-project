import {
  Accomplishimg1,
  Accomplishimg2,
  Accomplishimg3,
  Accomplishimg4,
  Accomplishimg5,
  Accomplishimg6,
  Brandimg1,
} from "../../../../assets";
import { AccomplishCard, DefaultCard } from "../../../../components";

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

        <div className="row">
          <div className="col-lg-4 col-md-6 mt-4">
            {/* <AccomplishCard
              img={Accomplishimg1}
              title="Secure & Stable Running of Apps"
              about=" We ensure the secure and stable operations of applications
                  that are essential to prevent data breaches & maintain user
                  confidence."
            /> */}
            <DefaultCard
              cardclass="brand-card text-center justify-content-center border-0 p-2"
              imgdivclass="maintain-icon text-center align-self-center fs-1 acc-content"
              imgclass="fa-icon"
              cardimage={Accomplishimg1}
              contentclass="acc-change-content"
              headingclass="mt-3"
              headingshow
              heading="Secure & Stable Running of Apps"
              paraclass="text-white "
              para="We ensure the secure and stable operations of applications
                  that are essential to prevent data breaches & maintain user
                  confidence."
            />
          </div>
          <div className="col-lg-4 col-md-6 mt-4">
            <DefaultCard
              cardclass="brand-card text-center justify-content-center border-0 p-2"
              imgdivclass="maintain-icon text-center align-self-center fs-1 acc-content"
              imgclass="fa-icon"
              cardimage={Accomplishimg2}
              contentclass="acc-change-content"
              headingclass="mt-3"
              headingshow
              heading="Web Apps"
              paraclass="text-white"
              para=" Downtime issues enhance the user attrition rate - so we incorporate specific solutions to eliminate downtime issues."
            />
            {/* <AccomplishCard
              img={Accomplishimg2}
              title="Eliminate Issues of Application Downtime"
              about="Downtime issues enhance the user attrition rate - so we incorporate specific solutions to eliminate downtime issues."
            /> */}
          </div>
          <div className="col-lg-4 col-md-6 mt-4">
            <DefaultCard
              cardclass="brand-card text-center justify-content-center border-0 p-2"
              imgdivclass="maintain-icon text-center align-self-center fs-1 acc-content"
              imgclass="fa-icon"
              cardimage={Accomplishimg3}
              contentclass="acc-change-content"
              headingclass="mt-3"
              headingshow
              heading="High-Performance Applications"
              paraclass="text-white"
              para=" Software maintenance helps with feature customization by adding new features and customizing existing ones."
            />
            {/* <AccomplishCard
              img={Accomplishimg3}
              title="High-Performance Applications"
              about="We fix bugs & vulnerabilities by upgrading specific key components to tune applications into high-performance output generation. "
            /> */}
          </div>

          <div className="col-lg-4 col-md-6 mt-4 ">
            <DefaultCard
              cardclass="brand-card text-center justify-content-center border-0 p-2"
              imgdivclass="maintain-icon text-center align-self-center fs-1 acc-content"
              imgclass="fa-icon"
              cardimage={Accomplishimg4}
              contentclass="acc-change-content"
              headingclass="mt-3"
              headingshow
              heading="Feature Customization"
              paraclass="text-white"
              para=" Downtime issues enhance the user attrition rate - so we incorporate specific solutions to eliminate downtime issues."
            />
            {/* <AccomplishCard
              img={Accomplishimg4}
              title="Feature Customization"
              about="Software maintenance helps with feature customization by adding new features and customizing existing ones."
            /> */}
          </div>

          <div className="col-lg-4 col-md-6 mt-4">
            <DefaultCard
              cardclass="brand-card text-center justify-content-center border-0 p-2"
              imgdivclass="maintain-icon text-center align-self-center fs-1 acc-content"
              imgclass="fa-icon"
              cardimage={Accomplishimg5}
              contentclass="acc-change-content"
              headingclass="mt-3"
              headingshow
              heading="Improved User Experience"
              paraclass="text-white"
              para=" Consistent maintenance ensures to improves the user experience, reliability & higher performance through timely support."
            />
            {/* <AccomplishCard
              img={Accomplishimg5}
              title="Improved User Experience"
              about="Consistent maintenance ensures to improves the user experience, reliability & higher performance through timely support."
            /> */}
          </div>

          <div className="col-lg-4 col-md-6 mt-4">
            <DefaultCard
              cardclass="brand-card text-center justify-content-center border-0 p-2"
              imgdivclass="maintain-icon text-center align-self-center fs-1 acc-content"
              imgclass="fa-icon"
              cardimage={Accomplishimg6}
              contentclass="acc-change-content"
              headingclass="mt-3"
              headingshow
              heading="Better Compatibility"
              paraclass="text-white"
              para=" Improve compatibility by ensuring the application for working seamlessly across different platforms & devices."
            />
            {/* <AccomplishCard
              img={Accomplishimg5}
              title="Better Compatibility"
              about="Improve compatibility by ensuring the application for working seamlessly across different platforms & devices."
            /> */}
          </div>

          {/* <AccomplishCard />
          <AccomplishCard />
          <AccomplishCard /> */}
        </div>
      </div>
    </>
  );
};
export default AccoumplishResult;
