import { Button } from "react-bootstrap";
import { digitalApp, digitalApp2, digitalApp3 } from "../../../../assets";

const Digitalize = () => {
  return (
    <section className=" bg-white">
      <div className="container">
        <h3 className="text-center ">
          Digitalize Your Product Idea - Learn More About MVP
        </h3>
        <div className=" py-5 row justify-content-between">
          <div className="col-sm-12 col-md-6 col-lg-4">
            <img src={digitalApp} width={"100%"} />
            <h5>
              Top 10 AI Content Detector Tools &amp; Extension Free in...{" "}
            </h5>
          </div>

          <div className=" col-sm-12 col-md-6 col-lg-4">
            <img src={digitalApp2} alt="" width={"100%"} />
            <h5>How to Develop an E-Learning Mobile Application? </h5>
          </div>
          <div className=" col-sm-12 col-md-6 col-lg-4">
            <img src={digitalApp3} alt="" width={"100%"} />
            <h5>
              MVP Software Development: A Quickstart Guide to Success i...{" "}
            </h5>
          </div>
        </div>
        <div className="text-center">
          <Button className="rounded-pill text-center">Read all post</Button>
        </div>
      </div>
    </section>
  );
};
export default Digitalize;
