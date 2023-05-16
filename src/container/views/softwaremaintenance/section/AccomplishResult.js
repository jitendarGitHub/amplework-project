import { DefaultCard } from "../../../../components";
import { PrimaryText, SecondaryText } from "../../../../components/text";
import { AccomplishMock } from "../../../../mockup/AccomplishMock";

const AccoumplishResult = () => {
  return (
    <>
      <div className="container text-center">
        <PrimaryText heading="Accomplish Results With Top Software Maintenance Company" />
        <SecondaryText
          para="Build stable applications with custom software maintenance services
          that results into 100% business efficiency while enhancing the
          functionalities."
        />

        <div className="row">
          {AccomplishMock.map((items) => {
            return (
              <div className="col-lg-4 col-md-6 mt-4">
                <DefaultCard
                  cardclass="brand-card  text-center justify-content-center border-0 p-2"
                  imgdivclass="maintain-icon text-center align-self-center fs-1 acc-content"
                  imgclass="fa-icon"
                  cardimage={items.cardimage}
                  contentclass="acc-change-content"
                  headingclass="mt-3 brand-heading"
                  headingshow
                  heading={items.heading}
                  paraclass="text-white "
                  para={items.para}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default AccoumplishResult;
