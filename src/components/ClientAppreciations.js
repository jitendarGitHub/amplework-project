import Carousel from "react-bootstrap/Carousel";
import Namboodiri from "../assets/NAMBOODIRI.png";
import { AiFillLinkedin } from "@react-icons/all-files/ai/AiFillLinkedin";
function ClientAppreciation(props) {
  return (
    <Carousel variant="primary">
      <Carousel.Item>
        <h3 className="fw-bold ">
          We Proudly Showcase - Our Client Appreciations
        </h3>
        <div className="container">
          <div className="row pb-5 pt-5">
            <div className="col-sm-12 col-lg-6 col-md-12 ">
              <div className=" ">
                <img
                  className="booting"
                  src={Namboodiri}
                  alt=""
                  width={"85%"}
                />
              </div>
            </div>
            <div className="col-sm-12 col-lg-6 col-md-12 mt-5">
              <h6 className="namboodiri-title">
                Amplework is a great team to work with, highly recommended.
              </h6>
              <p className="namboodiri-desc pt-4">
                Flawless Plank was an AI based fitness application and we are
                glad we get a chance to work on this project with Amplework.
                They have excellent skills in building mobile apps and willing
                to work around issues to solve them .. Highly Recommended!
              </p>
              <span className="fw-bold"> MANU NAMBOODIRI</span>
              <p className="namboodiri-position">Founder, Flawless Plank</p>
              <span className="fs-1 text-primary">
                <AiFillLinkedin />
              </span>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <h3 className="fw-bold ">
          We Proudly Showcase - Our Client Appreciations
        </h3>
        <div className="container">
          <div className="row pb-5 pt-5">
            <div className="col-sm-12 col-lg-6 col-md-12 ">
              <div className="">
                <img
                  className="booting"
                  src={Namboodiri}
                  alt=""
                  width={"85%"}
                />
              </div>
            </div>
            <div className="col-sm-12 col-lg-6 col-md-12 mt-5">
              <h6 className="namboodiri-title">
                Amplework is a great team to work with, highly recommended.
              </h6>
              <p className="namboodiri-desc pt-4">
                Flawless Plank was an AI based fitness application and we are
                glad we get a chance to work on this project with Amplework.
                They have excellent skills in building mobile apps and willing
                to work around issues to solve them .. Highly Recommended!
              </p>
              <span className="fw-bold"> MANU NAMBOODIRI</span>
              <p className="namboodiri-position">Founder, Flawless Plank</p>
              <span className="fs-1 text-primary">
                <AiFillLinkedin />
              </span>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <h3 className="fw-bold ">
          We Proudly Showcase - Our Client Appreciations
        </h3>
        <div className="container">
          <div className="row pb-5 pt-5">
            <div className="col-sm-12 col-lg-6 col-md-12 ">
              <div className="">
                <img
                  className="booting"
                  src={Namboodiri}
                  alt=""
                  width={"85%"}
                />
              </div>
            </div>
            <div className="col-sm-12 col-lg-6 col-md-12 mt-5">
              <h6 className="namboodiri-title">
                Amplework is a great team to work with, highly recommended.
              </h6>
              <p className="namboodiri-desc pt-4">
                Flawless Plank was an AI based fitness application and we are
                glad we get a chance to work on this project with Amplework.
                They have excellent skills in building mobile apps and willing
                to work around issues to solve them .. Highly Recommended!
              </p>
              <span className="fw-bold"> MANU NAMBOODIRI</span>
              <p className="namboodiri-position">Founder, Flawless Plank</p>
              <span className="fs-1 text-primary">
                <AiFillLinkedin />
              </span>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default ClientAppreciation;
