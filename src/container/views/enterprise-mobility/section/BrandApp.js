import { Image } from "react-bootstrap";
import {
  BrandApp1,
  BrandApp2,
  BrandApp3,
  BrandApp4,
  BrandApp5,
  BrandApp6,
  BrandApp7,
  BrandApp8,
  BrandApp9,
  BrandApp10,
  BrandApp11,
  BrandApp12,
  BrandApp14,
  BrandApp15,
} from "../../../../assets";
import { PrimaryText, SecondaryText } from "../../../../components/text";
import "../EnterpriseMobility.css";

const BrandApp = () => {
  return (
    <div className="container text-center">
      <PrimaryText
        className="brand-app-heading"
        heading="Brands we've collaborated with"
      />
      <SecondaryText
        className="brand-app-para ps-lg-5 pe-lg-5"
        para="Our track record of collaborating with various brands speaks to our exceptional process-driven methodology and unparalleled technical know-how. You can trust Mindbowser to deliver top-notch results."
      />
      <div className="d-flex flex-wrap justify-content-center">
        {BrandAppMock.map((items) => {
          return (
            <aside className="brands_borders col-lg-2 col-md-4 col-sm-6 col-xs-6 m-lg-3 align-self-center">
              <div className="d-flex justify-content-between">
                <Image
                  src={items.image}
                  className="img-fluid my-3"
                  width={"60%"}
                />
              </div>
            </aside>
          );
        })}
      </div>
    </div>
  );
};
export default BrandApp;
const BrandAppMock = [
  { image: BrandApp1 },
  { image: BrandApp2 },
  { image: BrandApp3 },
  { image: BrandApp4 },
  { image: BrandApp4 },
  { image: BrandApp5 },
  { image: BrandApp6 },
  { image: BrandApp7 },
  { image: BrandApp8 },
  { image: BrandApp9 },
  { image: BrandApp10 },
  { image: BrandApp11 },
  { image: BrandApp12 },
  { image: BrandApp14 },
  { image: BrandApp15 },
];
console.log("Image:---->,", BrandAppMock);
