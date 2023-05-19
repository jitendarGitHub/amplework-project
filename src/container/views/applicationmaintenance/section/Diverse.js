import { DiverseCardBg } from "../../../../assets";
import { DiverseCard } from "../../../../components";
import { PrimaryText, SecondaryText } from "../../../../components/text";

const Diverse = () => {
  return (
    <section className="">
      <div className="container">
        <div className="diverse row">
          <div className="col-sm-12 col-lg-6 diverse-first ">
            <PrimaryText
              heading=" Diverse Levels Of Support Offered By Our Prowess Experts"
              className="diverse-heading col-sm-9"
            />
            <SecondaryText
              para=" We offer support for application maintenance at a diverse level of operations to help our clients in accomplishing their specific goals. If you are confused that which level of support service will be beneficial for you then you can connect with us to get valuable insights about operations."
              className="diverse-para"
            />
          </div>
          <div className="col-lg-6 d-lg-flex justify-content-around">
            <div className="row ">
              {DiverseMock.map((items) => {
                return (
                  <div className={`col-lg-5 col-md-6 mt-2`}>
                    <DiverseCard
                      diversecardBG={items.diversecardBG}
                      heading={items.heading}
                      about={items.about}
                      list1={items.list1}
                      list2={items.list2}
                      list3={items.list3}
                      list4={items.list4}
                      list5={items.list5}
                      cardclass={items.cardclass}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Diverse;
const DiverseMock = [
  {
    diversecardBG: DiverseCardBg,
    heading: "Level1",
    about: "Advanced Support Service",
    list1: "Performing Tuning",
    list2: "Advanced Testing",
    list3: "Advanced Documentation",
    list4: "Release Management",
    list5: "Advanced Bug Fixed",
    cardclass: "card-img2",
  },
  {
    diversecardBG: DiverseCardBg,
    heading: "Level2",
    about: "Specialized Support Analysis",
    list1: "Root Cause Analysis",
    list2: "Database Administration",
    list3: "Architecture Design",
    list4: "Secure Opration",
    list5: "Personalized Solution",
    cardclass: "card-img3 mt-lg-3",
  },
  {
    diversecardBG: DiverseCardBg,
    heading: "Level3",
    about: "Covers Basic App Service",
    list1: "Consists of technical informmation",
    list2: "Basic System maintenance",
    list3: "Basic Bug Fixed ",
    list4: "Troubleshooting",
    list5: "Basic security maintenance",
    cardclass: "card-img",
  },
  {
    diversecardBG: DiverseCardBg,
    heading: "Level4",
    about: "Comprehensive Maintenance",
    list1: "Basic Documentation information",
    list2: "Problem Management",
    list3: "Advance BuG Fixed!",
    list4: "Comprehensive Management",
    list5: "Basic security maintenance",
    cardclass: "card-img1 mt-lg-3",
  },
];
