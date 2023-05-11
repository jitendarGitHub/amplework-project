import { enterprise1 } from "../../../../assets";
import { Cards, DefaultCard } from "../../../../components";
import { PrimaryText, SecondaryText } from "../../../../components/text";
import { Developermockup } from "../../../../mockup/Developermockup";

const Developer = () => {
  return (
    <section className="bg-light">
      <div className="developer container ">
        <div className="content text-center my-5">
          <PrimaryText
            heading="Trusted and Skilled Developers"
            className="fs-4 fw-bold"
          />
          <SecondaryText para="Our developers are ready to join your team and build amazing mobile & web apps." />
          <div className="row">
            <div className="d-flex flex-wrap justify-content-between">
              {Developermockup.map((items) => {
                return (
                  <DefaultCard
                    cardclass="mt-4"
                    imgclass="testerimg"
                    cardimage={items.cardimage}
                    headingclass="text-start"
                    heading={items.heading}
                    paraclass="developer-position"
                    para={items.para}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Developer;
