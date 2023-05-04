import { Button, CardGroup } from "react-bootstrap";
import { ApplicationCard } from "../../../../components";
import DefaultCard from "../../../../components/card/Index";
import {
  Applicationimg1,
  Applicationimg2,
  Applicationimg3,
} from "../../../../assets";

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
            <div className="col-lg-4 p-0">
              <DefaultCard
                cardclass="text-start p-3 pt-4  application-cart"
                imgdivclass="pb-3"
                imgstyle={{ width: "40px" }}
                cardimage={Applicationimg1}
                headingclass="card-title"
                heading="Application Re-engineering"
                headingstyle={{ visibility: "hidden" }}
                paraclass="card-description"
                para="Our developers evaluate existing applications through a series of in-house testing processes in order to evaluate the functionalities of the applications that need to be re-engineered."
                cardstyle={{
                  backgroundColor: "rgb(47 126 255)",
                }}
              />
            </div>
            <div className="col-lg-4 p-0">
              <DefaultCard
                cardclass="text-start p-3 pt-4 application-cart"
                imgdivclass="pb-3"
                imgstyle={{ width: "44px" }}
                cardimage={Applicationimg2}
                headingclass="card-title"
                heading="Application Re-engineering"
                headingstyle={{ visibility: "hidden" }}
                paraclass="card-description"
                para="Our developers evaluate existing applications through a series of in-house testing processes in order to evaluate the functionalities of the applications that need to be re-engineered."
                cardstyle={{
                  backgroundColor: "rgb(17 95 224)",
                }}
              />
            </div>
            <div className="col-lg-4 p-0">
              <DefaultCard
                cardclass="text-start p-3 pt-4 application-cart"
                imgdivclass="pb-3"
                imgstyle={{ width: "39px" }}
                cardimage={Applicationimg3}
                headingclass="card-title"
                headingstyle={{ visibility: "hidden" }}
                heading="Application Re-engineering"
                paraclass="card-description"
                para="Our developers evaluate existing applications through a series of in-house testing processes in order to evaluate the functionalities of the applications that need to be re-engineered."
                cardstyle={{
                  backgroundColor: "rgb(4 80 206)",
                }}
              />
            </div>
          </div>

          <Button className="free-quote mt-4">GET A FREE QUOTE</Button>
        </div>
      </div>
    </section>
  );
};
export default Application;
