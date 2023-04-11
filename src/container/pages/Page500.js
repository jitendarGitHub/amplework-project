import React from "react";
import { Col, Row } from "react-bootstrap";

const Page500 = () => {
  return (
    <div className="bg-light text-center justify-content-center min-vh-100 d-flex flex-row align-items-center">
      <Row className=" justify-content-center">
        <Col md={12}>
          <span className="clearfix">
            <h1 className="float-start display-3 me-4">500</h1>
            <h4 className="pt-3">Houston, we have a problem!</h4>
            <p className="text-medium-emphasis float-start">
              The page you are looking for is temporarily unavailable.
            </p>
          </span>
          <input type="search" />
          <button color="info">Search</button>
        </Col>
      </Row>
    </div>
  );
};

export default Page500;
