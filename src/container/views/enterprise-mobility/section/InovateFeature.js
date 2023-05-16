import { Image } from "react-bootstrap";
import {
  InovateRealTime,
  InovateSecure,
  InovateSkill,
  InovateStandard,
  Inovateglobal,
} from "../../../../assets";
import { PrimaryText, SecondaryText } from "../../../../components/text";

import "../EnterpriseMobility.css";

const InovateFeature = (props) => {
  const { cardclass, image, className, heading, secondaryClass, para } = props;
  return (
    <div className="container text-center">
      <PrimaryText heading="Experience Innovate Features of Enterprise Mobility Solutions" />
      <SecondaryText para="Experience Innovate Features of Enterprise Mobility Solutions" />

      <div className="row justify-content-center text-white">
        {InnovateMock.map((items) => {
          return (
            <div className={items.cardclass}>
              <Image src={items.image} alt="" width={"150px"} />
              <PrimaryText
                className={items.className}
                heading={items.heading}
              />
              <SecondaryText
                className={items.secondaryClass}
                para={items.para}
              />
            </div>
          );
        })}
        <div className="col-lg-7">
          <div className="row justify-content-md-around justify-content-lg-start">
            <div className=" col-md-5  text-start p-3 m-md-2 inovate-second mt-2">
              <Image src={Inovateglobal} width={"30px"} />
              <SecondaryText
                className="fw-bold pt-2 fs-6"
                para="Global Scale"
              />
              <SecondaryText
                className="inovate-para"
                para="Our enterprise mobility solutions can be deployed and scaled
                globally to meet the needs of your business."
              />
            </div>
            <div className="col-md-5 text-start p-3 m-md-2 inovate-third mt-2">
              <Image src={InovateStandard} alt="" width={"30px"} />
              <SecondaryText
                className="fw-bold pt-2 fs-6"
                para="Standard Controls"
              />
              <SecondaryText
                className="inovate-para"
                para="  We utilize standard controls to ensure consistency and usability
                across all enterprise mobile applications."
              />
            </div>
            <div className="col-md-5 text-start p-3 m-md-2 inovate-four mt-2">
              <Image src={InovateSecure} alt="" width={"30px"} />
              <SecondaryText
                className="fw-bold pt-2 fs-6"
                para="Zero Timedown"
              />
              <SecondaryText
                className="inovate-para"
                para="We ensure zero downtime during the deployment and maintenance of
                our enterprise mobility solutions."
              />
            </div>
            <div className="col-md-5 text-start p-3 m-md-2 inovate-five mt-2 mb-2">
              <Image src={InovateRealTime} alt="" width={"30px"} />
              <SecondaryText
                className="fw-bold pt-2 fs-6"
                para="Real Time Analytics"
              />
              <SecondaryText
                className="inovate-para"
                para="5x Efficiency Improvement"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InovateFeature;

const InnovateMock = [
  {
    cardclass: "col-lg-4 text-start m-lg-2 p-3 pt-4 inovate-first",
    image: InovateSkill,
    className: "fw-bold pt-2 fs-6",
    heading: "5x Efficiency Improvement",
    secondaryClass: "inovate-para p-1 pe-5",
    para: "Our enterprise mobility solutions can be deployed and scaled globally to meet the needs of your business",
  },
];
