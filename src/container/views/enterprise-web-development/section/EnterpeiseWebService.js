import { Card } from "react-bootstrap";
import "../enterpriseweb.css";

const EnterpriseWebService = () => {
  return (
    <div className="container text-center">
      <h6 className="supporter-title text-primary fw-bold">OVERVIEW</h6>
      <h2 className="service-heading">
        Enterprise Web Development Service - Your Digital Success Partner
      </h2>
      <p className="service-para">
        With a team of experts related to web developers, designers and digital
        strategists - we offer customized solutions to businesses for empower
        their digital operations. We incorporate profound business strategies
        for commencing high-performance & scalable enterprise web solutions.
        Although, we can help you in creating competitive advantages to enhance
        your ROI. As per the reports, clients who incorporate frequent
        enterprise web services experience 3X or 4X growth in their customer
        engagement rate. As, customers also prepare to engage with those web
        applications which provide responses in minimal seconds.{" "}
      </p>
      <div className="row justify-content-center p-4">
        <div className="card-1 col-lg-3 col-md-6 p-2">
          <Card className="service-card">WEB DEVELOPMENT</Card>
        </div>
        <div className="card-1 col-lg-4 col-md-6 p-2">
          <Card className="service-card">SOFTWARE DEVELOPMENT</Card>
        </div>
        <div className="card-1 col-lg-3 col-md-6 p-2">
          <Card className="service-card">PORTAL DEVELOPMENT</Card>
        </div>
        <div className="card-1 col-lg-2 col-md-6 p-2">
          <Card className="service-card">UI/UX DESIGN</Card>
        </div>
        <div className="card-1 col-lg-4 col-md-5 p-2">
          <Card className="service-card">HYBRID WEB APP DEVELOPMENT</Card>
        </div>
        <div className="card-1 col-lg-4 col-md-6 p-2">
          <Card className="service-card">E-COMMERCE DEVELOOPMENT</Card>
        </div>
        <div className="card-1 col-lg-4 col-md-6 p-2">
          <Card className="service-card">PAYMENT GATEWAY INTEGRATION</Card>
        </div>
        <div className="card-1 col-lg-4 col-md-6 p-2">
          <Card className="service-card">CONTENT MANAGEMENT SOLUTION</Card>
        </div>
      </div>
    </div>
  );
};
export default EnterpriseWebService;
