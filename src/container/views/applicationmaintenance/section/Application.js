import { Button, CardGroup } from "react-bootstrap";
import { ApplicationCard, DefaultButton } from "../../../../components";
import DefaultCard from "../../../../components/card/Index";
import {
  Applicationimg1,
  Applicationimg2,
  Applicationimg3,
} from "../../../../assets";
import { Applicationmockup } from "../../../../mockup/ApplicationMockup";

const Application = () => {
  return (
    <section className="">
      <div className="container ">
        <div className="application text-center align-item-center  ">
          <h3 className="">
            Our Advanced Application Support Service - Elevate Your
            Application's
            <br />
            Performance
          </h3>
          <h6 className="mb-5">
            Complex applications which are configured with the latest APIs
            require the advanced solutions to keep the working mechanism of the
            <br /> applications in a perfect shape. At Amplework,
          </h6>

          <div className="row">
            {Applicationmockup.map((items) => {
              return (
                <div className="col-lg-4 p-0">
                  <DefaultCard
                    cardclass="text-start p-3 pt-4  application-cart"
                    imgdivclass="pb-3"
                    headingclass="card-title"
                    paraclass="card-description"
                    cardimage={items.cardimage}
                    heading={items.heading}
                    para={items.para}
                    cardstyle={items.cardstyle}
                    imgstyle={items.imgstyle}
                  />
                </div>
              );
            })}
          </div>

          <DefaultButton value="GET A FREE QUOTE" btnClass="free-quote mt-4" />
        </div>
      </div>
    </section>
  );
};
export default Application;
