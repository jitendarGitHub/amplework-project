import "../EnterpriseMobility.css";

import { DefaultCard } from "../../../../components";
import { PrimaryText, SecondaryText } from "../../../../components/text";
import { brandColaboratemock } from "../../../../mockup/BrandColaborate";

const BrandCollaborate = () => {
  return (
    <div className="container text-center">
      <PrimaryText
        heading="Brands we've collaborated with"
        className="hoverable"
      />
      <SecondaryText para=" Our track record of collaborating with various brands speaks to our exceptional process-driven methodology and unparalleled technical know-how. You can trust Mindbowser to deliver top-notch results." />

      <div className="container justify-content-between ">
        <div className=" justify-content-center mt-4">
          <div className="row">
            {brandColaboratemock.map((items) => (
              <div className="col-lg-3 col-md-6 ">
                <DefaultCard
                  headingshow
                  cardclass="brand-card card  border-0 mt-2"
                  heading={items.heading}
                  headingclass=" headingc"
                  cardimage={items.cardimage}
                  imgclass="img-block "
                  imgdivclass="card-contents"
                  imgstyle={{ width: "70px", height: "70px" }}
                  contentclass="change-contents"
                  para={items.para}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default BrandCollaborate;
