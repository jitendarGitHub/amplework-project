import { Card } from "react-bootstrap";
import "../enterpriseweb.css";
import { PrimaryText, SecondaryText } from "../../../../components/text";
import { DefaultCard } from "../../../../components";

const EnterpriseWebService = () => {
  return (
    <div className="container text-center">
      <PrimaryText
        className="supporter-title text-primary fw-bold"
        heading="OVERVIEW"
      />

      <PrimaryText
        heading="Enterprise Web Development Service - Your Digital Success Partner"
        className="service-heading"
      />
      <SecondaryText
        className="service-para"
        para="With a team of experts related to web developers, designers and digital
        strategists - we offer customized solutions to businesses for empower
        their digital operations. We incorporate profound business strategies
        for commencing high-performance & scalable enterprise web solutions.
        Although, we can help you in creating competitive advantages to enhance
        your ROI. As per the reports, clients who incorporate frequent
        enterprise web services experience 3X or 4X growth in their customer
        engagement rate. As, customers also prepare to engage with those web
        applications which provide responses in minimal seconds."
      />
      <div className="row justify-content-center p-4">
        <div className="card-1 col-lg-3 col-md-6 p-2">
          <DefaultCard heading="WEB DEVELOPMENT" cardclass="service-card" />
        </div>
        <div className="card-1 col-lg-4 col-md-6 p-2">
          <DefaultCard
            heading="SOFTWARE DEVELOPMENT"
            cardclass="service-card"
          />
        </div>
        <div className="card-1 col-lg-3 col-md-6 p-2">
          <DefaultCard heading="PORTAL DEVELOPMENT" cardclass="service-card" />
        </div>
        <div className="card-1 col-lg-2 col-md-6 p-2">
          <DefaultCard heading="UI/UX DESIGN" cardclass="service-card" />
        </div>
        <div className="card-1 col-lg-4 col-md-5 p-2">
          <DefaultCard
            heading="HYBRID WEB APP DEVELOPMENT"
            cardclass="service-card"
          />
        </div>
        <div className="card-1 col-lg-4 col-md-6 p-2">
          <DefaultCard
            heading="E-COMMERCE DEVELOPMENT"
            cardclass="service-card"
          />
        </div>
        <div className="card-1 col-lg-4 col-md-6 p-2">
          <DefaultCard
            heading="PAYMENT GATEWAY INTEGRATION"
            cardclass="service-card"
          />
        </div>
        <div className="card-1 col-lg-4 col-md-6 p-2">
          <DefaultCard
            heading="CONTENT MANAGEMENT SOLUTION"
            cardclass="service-card"
          />
        </div>
      </div>
    </div>
  );
};
export default EnterpriseWebService;
