import { PrimaryText, SecondaryText } from "../../../../components/text";
import "../application.css";
const ExperienceParalleled = () => {
  return (
    <section className="experience-paralled-section">
      <div className="container">
        <div className=" text-center text-light experience ">
          <div className=" ">
            <PrimaryText
              heading="Experience Unparalleled Excellence with Our Comprehensive Application Support and Maintenance"
              className="experience-heading pe-lg-5 ps-lg-5"
            />
            <SecondaryText
              para="Our advanced mobile application maintenance and support provide acomprehensive approach to managing and maintaining your applications."
              className="experience-para mt-4 "
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default ExperienceParalleled;
