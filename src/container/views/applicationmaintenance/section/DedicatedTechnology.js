import { Image } from "react-bootstrap";
import { Bussiness, HourlyPlan } from "../../../../assets";
import { PrimaryText, SecondaryText } from "../../../../components/text";
import "../application.css";
const DedicatedTechnology = () => {
  return (
    <section className="dedicated-technology">
      <div className=" container text-center">
        <PrimaryText
          heading="Are you searching for a dedicated technology partner, not just a service provider?"
          className="bussiness-heading fs-3"
        />
        <div className="row columnreverse">
          <div className="col-sm-12 col-lg-6 text-start align-self-center">
            <SecondaryText para="Our clients generated more than $50 million in revenues by creating seamless mobile applications that run without any bugs or glitches. Thus, we continue to upgrade our services to support clients in generating higher revenue for operations." />
            {mockup.map((items) => {
              return (
                <p>
                  <Image src={HourlyPlan} alt="" width={"10px"} />
                  &nbsp;&nbsp; {items.content}
                </p>
              );
            })}
          </div>
          <div className="col-sm-12 col-lg-6">
            <Image src={Bussiness} width={"90%"} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default DedicatedTechnology;

const mockup = [
  { image: HourlyPlan, content: "Personalized business services." },
  { content: "Advanced practices for DevOps." },
  { content: "Proficiency in AI/ML/Blockchain Solutions." },
  { content: " Exclusive support for digital transformation." },
  { content: " Large scale & complex app building." },
];
