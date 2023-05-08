import { DefaultCard } from "../../../../components";
import { Maintenancemockup } from "../../../../mockup/Mintenancemockup";

const MaintenancBox = () => {
  return (
    <section className="bg-light p-2 pb-5">
      <div className="container maintenance-Section">
        <div className=" maintenance">
          {Maintenancemockup.map((items) => {
            return (
              <DefaultCard
                cardclass="box"
                imgclass="fa"
                imgdivclass="icon text-center align-self-center fs-1"
                contentclass="content"
                headingclass="text-dark fw-bold"
                para={items.para}
                paraclass="text-dark"
                heading={items.heading}
                cardimage={items.cardimage}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default MaintenancBox;
