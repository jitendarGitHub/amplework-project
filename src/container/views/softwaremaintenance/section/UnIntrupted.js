import { Image } from "react-bootstrap";

import "../softwaremaintenance.css";
import { PrimaryText, SecondaryText } from "../../../../components/text";
import { UnIntruptedMock } from "../../../../mockup/UnintruptedMock";

const UnIntrupted = () => {
  return (
    <section className="">
      <div className="container">
        <PrimaryText
          heading="Software Maintenance and Support Company For Uninterrupted Business
          Operations"
        />
        <SecondaryText
          para=" Software maintenance and support services are essential for businesses
          that rely on technology to keep their operations running smooth.
          Without proper maintenance."
        />
        <div className="row intrupted text-center">
          {UnIntruptedMock.map((items) => {
            return (
              <div className="col-lg-4 col-md-6 p-3">
                <Image src={items.image} />
                <PrimaryText heading={items.heading} className="fs-6 fw-100" />
                <SecondaryText para={items.para} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default UnIntrupted;
