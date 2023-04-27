import { SelectingAmple } from "../../../../assets";
import "../enterpriseweb.css";
const ReasonAmple = () => {
  return (
    <section className="reasonAmple-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h3 className="reason-heading">Reasons To Select Amplework</h3>
            <p className="reason-para pb-2">
              At Amplework Software, we believe that every business deserves a
              robust, scalable and secure web application that can streamline
              their operations as well as enhance customer engagement rate. We
              incorporated the experienced team of web developers, UI/UX
              designers, QA engineers and project managers who can handle
              complex web development projects from start to finish. We leverage
              the latest technologies, frameworks and tools to build custom web
              applications that meet the unique needs of our clients. Whether
              you need a B2B portal, an e-commerce platform, a social network,
              or a CRM system, we can help you achieve your business goals with
              our enterprise web development services.
            </p>
          </div>
          <div className="col-lg-6 project-section">
            <div className="row">
              <div className="col-lg-6 px-lg-4 pt-2">
                <h2 className="h2">350+</h2>
                <p className="p">Projects accomplished</p>
              </div>
              <div className="col-lg-6 px-lg-4 pt-2">
                <h2 className="h2">50+</h2>
                <p className="p">Certified designers & developers</p>
              </div>
              <div className="col-lg-12">
                <img src={SelectingAmple} width={"100%"} />
              </div>
              <div className="col-lg-6 px-lg-4 pt-2">
                <h2 className="h2">50M+</h2>
                <p className="p">Revenue generated for clients</p>
              </div>
              <div className="col-lg-6 px-lg-4 pt-2">
                <h2 className="h2">5+ Years</h2>
                <p className="p">Average experience of our developers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ReasonAmple;
