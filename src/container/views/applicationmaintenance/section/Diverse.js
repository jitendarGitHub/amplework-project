import { DiverseCardBg } from "../../../../assets";
import { DiverseCard } from "../../../../components";

const Diverse = () => {
  return (
    <section className="">
      <div className="container">
        <div className="diverse row">
          <div className="col-sm-12 col-lg-6 diverse-first ">
            <h3 className="diverse-heading col-sm-9">
              Diverse Levels Of Support Offered By Our Prowess Experts
            </h3>
            <p className="diverse-para ">
              We offer support for application maintenance at a diverse level of
              operations to help our clients in accomplishing their specific
              goals. If you are confused that which level of support service
              will be beneficial for you then you can connect with us to get
              valuable insights about operations.
            </p>
          </div>
          <div className="col-sm-12 col-lg-6  d-lg-flex justify-content-center gap-3">
            <div className="">
              <DiverseCard
                diversecardBG={DiverseCardBg}
                heading="Level1"
                about="Covers Basic App Service"
                list1="Consists of technical informmation"
                list2="Basic System maintenance"
                list3="Basic Bug Fixed "
                list4="Troubleshooting"
                list5="Basic security maintenance"
                cardclass="card-img"
              />
              <DiverseCard
                diversecardBG={DiverseCardBg}
                heading="Level2"
                about="Comprehensive Maintenance"
                list1="Basic Documentation"
                list2="Problem Management"
                list3="Advance BuG Fixed!"
                list4="Comprehensive Management"
                list5="Basic security maintenance"
                cardclass="card-img1"
              />
            </div>
            <div className="mt-4 ">
              <DiverseCard
                diversecardBG={DiverseCardBg}
                heading="Level3"
                about="Advanced Support Service"
                list1="Performing Tuning"
                list2="Advanced Testing"
                list3="Advanced Documentation"
                list4="Release Management"
                list5="Advanced Bug Fixed"
                cardclass="card-img2"
              />
              <DiverseCard
                diversecardBG={DiverseCardBg}
                heading="Level4"
                about="Specialized Support Analysis"
                list1="Root Cause Analysis"
                list2="Database Administration"
                list3="Architecture Design"
                list4="Secure Opration"
                list5="Personalized Solution"
                cardclass="card-img3"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Diverse;
