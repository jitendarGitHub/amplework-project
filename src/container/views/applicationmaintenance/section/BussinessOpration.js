import DefaultCard from "../../../../components/card";
import { PrimaryText, SecondaryText } from "../../../../components/text";

const BussinessOpration = () => {
  return (
    <section className="bussiness">
      <div className="text-center container">
        <PrimaryText
          heading="Our Numbers Speaks For Our Business Operations"
          className="bussiness-heading"
        />
        <SecondaryText
          para="We don’t compromise on the quality aspects thus it makes us the leading application development maintenance and support service provider. We resolve even the most severe incidents in less than 8 hours."
          className="bussiness-para"
        />

        <div className="d-lg-flex  justify-content-between">
          {BussinessOPerationMock.map((items) => {
            return (
              <DefaultCard
                cardclass=" bussiness-card bg-white p-3 pt-0 m-1"
                headingclass="fw-bold bussiness-headings"
                headingstyle={{ visibility: "hidden" }}
                heading={items.heading}
                paraclass="text-dark"
                para={items.para}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default BussinessOpration;
const BussinessOPerationMock = [
  {
    heading: "10-15 Mins",
    para: "Minimum incident Response Time",
  },
  {
    heading: "2-3 Hours",
    para: "Minimum incident solution Time",
  },
  {
    heading: "10-15 Mins",
    para: "Minimum incident Response Time",
  },
  {
    heading: "10-15 Mins",
    para: "Minimum incident Response Time",
  },
];
