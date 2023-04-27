import { BussinessTimeCard } from "../../../../components";

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
        <div className="d-lg-flex justify-content-between">
          <BussinessTimeCard
            time="10-15 Mins"
            para="Minimum incident Response Time"
          />{" "}
          <BussinessTimeCard
            time="2-3 Hours"
            para="Minimum Incident Solution Time"
          />{" "}
          <BussinessTimeCard
            time="10-15 Mins"
            para="Minimum incident Response Time"
          />{" "}
          <BussinessTimeCard
            time="10-15 Mins"
            para="Minimum incident Response Time"
          />
        </div>
      </div>
    </section>
  );
};
export default BussinessOpration;
