// import "../appshape/appshap.css";

import { Card, CardGroup, Container } from "react-bootstrap";
import { GiArcheryTarget } from "@react-icons/all-files/gi/GiArcheryTarget";
// import { GrTarget } from "@react-icons/all-files/gr/GrTarget";
import { FiTarget } from "@react-icons/all-files/fi/FiTarget";
import Shapcard from "../ShapCard";

const ApplicationShap = () => {
  return (
    <>
      <div className="bg-white app-shap text-center py-5 ">
        <h3 className="shap-heading">
          Let's get your app in shape - contact us now and let the
          <br /> maintenance magic begin
        </h3>
        <p className="shap-para mt-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
          <br /> standard dummy text ever since the 1500s,
        </p>
        <Container>
          <div className="row">
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <div className="col-sm-12 col-md-6 col-lg-3">
                <Shapcard
                  image={GiArcheryTarget()}
                  title="Fixed"
                  para="Our in-house support matrix and best-in-industry prices will
                resultant in cost reduction by 30% to 40%."
                  bgcolor="rgb(6 21 114)"
                  color="rgb(245 164 3)"
                />
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3">
                <Shapcard
                  image={FiTarget()}
                  title="issue"
                  para="Slow and glitch software updates with no-real benefits for users?"
                  footer="Amplework’s Solution"
                  bgcolor="rgb(6 21 114)"
                  color="rgb(245 164 3)"
                />
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3">
                <Shapcard
                  image={FiTarget()}
                  title="issue"
                  para="Slow and glitch software updates with no-real benefits for users?"
                  footer="Amplework’s Solution"
                  bgcolor="rgb(6 21 114)"
                  color="rgb(245 164 3)"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
export default ApplicationShap;
