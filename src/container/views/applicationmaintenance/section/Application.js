import { CustomButton, DefaultCard } from "../../../../components";
import { PrimaryText, SecondaryText } from "../../../../components/text";

import { Applicationmockup } from "../../../../mockup/ApplicationMockup";

const Application = (item) => {
  return (
    <section className="">
      <div className="container">
        <div className="application text-center align-item-center">
          <PrimaryText
            heading="Our Advanced Application Support Service - Elevate Your
            Application's Application`s."
          />

          <SecondaryText
            para="Complex applications which are configured with the latest APIs require the advanced solutions to keep the working mechanism of the applications in a perfect shape. At Amplework,"
            className=".h6"
          />
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
          <CustomButton value="GET A FREE QUOTE" btnClass="free-quote mt-4" />
        </div>
      </div>
    </section>
  );
};
export default Application;
