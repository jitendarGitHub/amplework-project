import { SelectingAmple } from "../../../../assets";
import { DefaultCard } from "../../../../components";
import { PrimaryText, SecondaryText } from "../../../../components/text";
import "../enterpriseweb.css";
const ReasonAmple = () => {
  return (
    <section className="reasonAmple-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <PrimaryText
              className="reason-heading"
              heading="Reasons To Select Amplework"
            />
            <SecondaryText
              className="reason-para pb-2"
              para="At Amplework Software, we believe that every business deserves a
              robust, scalable and secure web application that can streamline
              their operations as well as enhance customer engagement rate. We
              incorporated the experienced team of web developers, UI/UX
              designers, QA engineers and project managers who can handle
              complex web development projects from start to finish. We leverage
              the latest technologies, frameworks and tools to build custom web
              applications that meet the unique needs of our clients. Whether
              you need a B2B portal, an e-commerce platform, a social network,
              or a CRM system, we can help you achieve your business goals with
              our enterprise web development services."
            />
          </div>
          <div className="col-lg-6 project-section ">
            <div className="row">
              {ReasonAmpleMock.map((items) => {
                return (
                  <DefaultCard
                    cardclass={items.cardclass}
                    heading={items.heading}
                    headingclass="h2"
                    para={items.para}
                    paraclass={items.paraclass}
                    cardimage={items.cardimage}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ReasonAmple;

const ReasonAmpleMock = [
  {
    cardclass: "col-lg-6 px-lg-4 pt-2col-lg-6 px-lg-4 pt-2",
    heading: "350+",
    para: "Projects accomplished",
  },
  {
    cardclass: "col-lg-6 px-lg-4 pt-2",
    heading: "50+",
    para: "Certified designers & developers",
  },
  {
    cardclass: "col-lg-12 ps-0 pe-0",
    cardimage: SelectingAmple,
  },
  {
    cardclass: "col-lg-6 px-lg-4 ",
    heading: "50M+",
    para: "Revenue generated for clients",
  },
  {
    cardclass: "col-lg-6 px-lg-4",
    heading: "5+ Years",
    para: "Average experience of our developers",
  },
];
