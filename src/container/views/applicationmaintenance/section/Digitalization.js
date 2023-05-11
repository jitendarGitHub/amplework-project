import { digitalApp, digitalApp2, digitalApp3 } from "../../../../assets";
import { CustomButton, DefaultCard } from "../../../../components";
import { PrimaryText } from "../../../../components/text";

const Digitalize = () => {
  return (
    <section className=" bg-white">
      <div className="container">
        <PrimaryText
          className="text-center"
          heading=" Digitalize Your Product Idea - Learn More About MVP"
        />

        <div className=" py-5 row justify-content-between">
          <div className="col-sm-12 col-md-6 col-lg-4">
            <DefaultCard
              cardclass=""
              imgdivclass=""
              imgclass=""
              cardimage={digitalApp}
              headingstyle={{ visibility: "hidden" }}
              heading="Chatbots in Healthcare–Advantages ,Disadvantages Applications & their Future"
              paraclass="developer-position"
              headingclass="fs-6"
            />
          </div>
          <div className=" col-sm-12 col-md-6 col-lg-4">
            <DefaultCard
              cardclass=""
              imgdivclass=""
              imgclass=""
              cardimage={digitalApp2}
              headingstyle={{ visibility: "hidden" }}
              heading="Foldable Smartphone App Development – 5 Dos"
              paraclass="developer-position"
              headingclass="fs-6"
            />
          </div>
          <div className=" col-sm-12 col-md-6 col-lg-4">
            <DefaultCard
              cardclass=""
              imgdivclass=""
              imgclass=""
              cardimage={digitalApp3}
              headingstyle={{ visibility: "hidden" }}
              heading="Mobile DevOps – Advantages & Challenges"
              paraclass="developer-position"
              headingclass="fs-6"
            />
          </div>
        </div>
        <div className="text-center">
          <CustomButton
            btnClass="rounded-pill text-center"
            value="Read all post"
          />
        </div>
      </div>
    </section>
  );
};
export default Digitalize;
