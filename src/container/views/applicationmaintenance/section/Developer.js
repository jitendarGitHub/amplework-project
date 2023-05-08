import { enterprise1 } from "../../../../assets";
import { Cards, DefaultCard } from "../../../../components";
import { Developermockup } from "../../../../mockup/Developermockup";

const Developer = () => {
  return (
    <section className="bg-light">
      <div className="developer container ">
        <div className="content text-center my-5">
          <h4 className="fw-bold">Trusted and Skilled Developers</h4>
          <p>
            Our developers are ready to join your team and build amazing mobile
            & web apps.
          </p>
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
