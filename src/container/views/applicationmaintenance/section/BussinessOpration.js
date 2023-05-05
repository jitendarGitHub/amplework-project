import { BussinessTimeCard } from "../../../../components";
import DefaultCard from "../../../../components/card/Index";

const BussinessOpration = () => {
  return (
    <section className=" bussiness">
      <div className="  text-center container">
        <h3 className="bussiness-heading">
          Our Numbers Speaks For Our Business Operations
        </h3>
        <p className="bussiness-para">
          We don’t compromise on the quality aspects thus it makes us the
          leading application development maintenance and
          <br /> support service provider. We resolve even the most severe
          incidents in less than 8 hours.
        </p>

        <div className="d-lg-flex  justify-content-between">
          <DefaultCard
            cardclass=" bussiness-card bg-white p-3 pt-0 m-1"
            headingclass="fw-bold bussiness-headings"
            headingstyle={{ visibility: "hidden" }}
            heading="10-15 Mins"
            paraclass="text-dark"
            para="Minimum incident Response Time"
          />
          <DefaultCard
            cardclass=" bussiness-card bg-white p-3 pt-0 m-1"
            headingclass="fw-bold  bussiness-headings"
            headingstyle={{ visibility: "hidden" }}
            heading="2-3 Hours"
            paraclass="text-dark"
            para="Minimum incident solution Time"
          />
          <DefaultCard
            cardclass=" bussiness-card bg-white p-3 pt-0 m-1"
            headingclass="fw-bold  bussiness-headings"
            headingstyle={{ visibility: "hidden" }}
            heading="10-15 Mins"
            paraclass="text-dark"
            para="Minimum incident Response Time"
          />
          <DefaultCard
            cardclass=" bussiness-card bg-white p-3 pt-0 m-1"
            headingclass="fw-bold  bussiness-headings"
            headingstyle={{ visibility: "hidden" }}
            heading="10-15 Mins"
            paraclass="text-dark"
            para="Minimum incident Response Time"
          />
        </div>
      </div>
    </section>
  );
};
export default BussinessOpration;
