import { Image } from "react-bootstrap";
import {
  BrandApp1,
  BrandApp10,
  BrandApp11,
  BrandApp12,
  BrandApp13,
  BrandApp14,
  BrandApp15,
  BrandApp2,
  BrandApp3,
  BrandApp4,
  BrandApp5,
  BrandApp6,
  BrandApp7,
  BrandApp8,
  BrandApp9,
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
        <aside className="brands_borders col-lg-2 col-md-4 col-sm-6 col-xs-6 m-lg-3">
          <div className="d-flex justify-content-between align-items-center">
            <Image src={BrandApp1} className="img-fluid my-3  " width={"60%"} />
          </div>
        </aside>
        <aside className="brands_borders col-lg-2 col-md-4 col-sm-6 col-xs-6 m-lg-3">
          <div className="d-flex justify-content-between align-items-center">
            <Image src={BrandApp2} className="img-fluid my-3" width={"60%"} />
          </div>
        </aside>
        <aside className="brands_borders col-lg-2 col-md-4 col-sm-6 col-xs-6 m-lg-3">
          <div className="d-flex justify-content-between align-items-center">
            <Image src={BrandApp3} className="img-fluid my-3  " width={"60%"} />
          </div>
        </aside>
        <aside className="brands_borders col-lg-2 col-md-4 col-sm-6 col-xs-6 m-lg-3">
          <div className="d-flex justify-content-between align-items-center">
            <Image src={BrandApp4} className="img-fluid my-3" width={"60%"} />
          </div>
        </aside>
        <aside className="brands_borders col-lg-2 col-md-4 col-sm-6 col-xs-6 m-lg-3">
          <div className="d-flex justify-content-between  align-items-center">
            <Image src={BrandApp5} className="img-fluid my-3  " width={"60%"} />
          </div>
        </aside>
        <aside className="brands_borders col-lg-2 col-md-4 col-sm-6 col-xs-6 m-lg-3">
          <div className="d-flex justify-content-between align-items-center">
            <Image src={BrandApp6} className="img-fluid my-3" width={"60%"} />
          </div>
        </aside>
        <aside className="brands_borders col-lg-2 col-md-4 col-sm-6 col-xs-6 m-lg-3">
          <div className="d-flex justify-content-between  align-items-center">
            <Image src={BrandApp7} className="img-fluid my-3  " width={"60%"} />
          </div>
        </aside>
        <aside className="brands_borders col-lg-2 col-md-4 col-sm-6 col-xs-6 m-lg-3">
          <div className="d-flex justify-content-between  align-items-center">
            <Image src={BrandApp8} className="img-fluid my-3" width={"60%"} />
          </div>
        </aside>
        <aside className="brands_borders col-lg-2 col-md-4 col-sm-6 col-xs-6 m-lg-3">
          <div className="d-flex justify-content-between  align-items-center">
            <Image src={BrandApp9} className="img-fluid my-3  " width={"60%"} />
          </div>
        </aside>
        <aside className="brands_borders col-lg-2 col-md-4 col-sm-6 col-xs-6 m-lg-3">
          <div className="d-flex justify-content-between  align-items-center">
            <Image src={BrandApp10} className="img-fluid my-3" width={"60%"} />
          </div>
        </aside>
        <aside className="brands_borders col-lg-2 col-md-4 col-sm-6 col-xs-6 m-lg-3">
          <div className="d-flex justify-content-between align-items-center">
            <Image src={BrandApp11} className="img-fluid my-3" width={"60%"} />
          </div>
        </aside>
        <aside className="brands_borders col-lg-2 col-md-4 col-sm-6 col-xs-6 m-lg-3">
          <div className="d-flex justify-content-between align-items-center">
            <Image src={BrandApp12} className="img-fluid my-3" width={"60%"} />
          </div>
        </aside>
        <aside className="brands_borders col-lg-2 col-md-4 col-sm-6 col-xs-6 m-lg-3">
          <div className="d-flex justify-content-between align-items-center">
            <Image
              src={BrandApp13}
              className="img-fluid my-3  "
              width={"60%"}
            />
          </div>
        </aside>
        <aside className="brands_borders col-lg-2 col-md-4 col-sm-6 col-xs-6 m-lg-3">
          <div className="d-flex justify-content-between align-items-center">
            <Image src={BrandApp14} className="img-fluid my-3" width={"60%"} />
          </div>
        </aside>
        <aside className="brands_borders col-lg-2 col-md-4 col-sm-6 col-xs-6 m-lg-3">
          <div className="d-flex justify-content-between align-items-center">
            <Image src={BrandApp15} className="img-fluid my-3" width={"60%"} />
          </div>
        </aside>
      </div>
    </div>
  );
};
export default BrandApp;
