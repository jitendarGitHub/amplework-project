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
          {DigitalizeMock.map((items) => {
            return (
              <div className="col-sm-12 col-md-6 col-lg-4">
                <DefaultCard
                  cardclass=""
                  imgdivclass=""
                  imgclass=""
                  cardimage={items.cardimage}
                  headingstyle={{ visibility: "hidden" }}
                  heading="Chatbots in Healthcare–Advantages ,Disadvantages Applications & their Future"
                  paraclass="developer-position"
                  headingclass="fs-6"
                />
              </div>
            );
          })}
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
const DigitalizeMock = [
  {
    cardimage: digitalApp,
    heading:
      "Chatbots in Healthcare–Advantages ,Disadvantages Applications & their Future",
  },
  {
    cardimage: digitalApp2,
    heading: "Foldable Smartphone App Development – 5 Dos",
  },
  {
    cardimage: digitalApp3,
    heading: "Mobile DevOps – Advantages & Challenges",
  },
];

export default Digitalize;
