import { Image } from "react-bootstrap";
import { AiFillLinkedin } from "@react-icons/all-files/ai/AiFillLinkedin";
import { PrimaryText, SecondaryText } from "../text";
import { FaGooglePlay } from "@react-icons/all-files/fa/FaGooglePlay";
import { SiAppstore } from "@react-icons/all-files/si/SiAppstore";

const CustomCarousel = (props) => {
  const { image, head, about, name, position } = props;
  return (
    <div className="">
      <div className="container pb-3">
        <div className="row pb-5 pt-5">
          <div className="col-sm-12 col-lg-6 col-md-12 ">
            <div className=" ">
              <Image className="booting" src={image} alt="" width={"85%"} />
            </div>
          </div>
          <div className="col-sm-12 col-lg-6 col-md-12 mt-5 text-start">
            <PrimaryText heading={head} className="namboodiri-title" />
            <SecondaryText para={about} className="namboodiri-desc pt-3" />
            <SecondaryText para={name} className="fw-bold" />
            <SecondaryText para={position} className="namboodiri-position" />
            <span className="fs-1 text-primary ">
              <AiFillLinkedin />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const PortfolioCarousel = (props) => {
  const {
    para,
    store,
    download,
    rating,
    funding,
    reward,
    image,
    bgimage,
    headerimage,
  } = props;
  return (
    <div
      className="portfollio text-center text-light"
      style={{ backgroundImage: `url(${bgimage})` }}
    >
      <div className="container">
        <div className="swercoin row text-start justify-content-center">
          <div className="col-sm-12 col-lg-6 align-self-center">
            <Image src={headerimage} width={"40%"} />
            <SecondaryText className="portfollioPara mt-3" para={para} />
            <p className="fs-6 fw-bold mt-4">
              Available On &nbsp;&nbsp; {<FaGooglePlay />}&nbsp;&nbsp;{" "}
              {<SiAppstore />}
            </p>
            <SecondaryText className="fs-6 fw-bold mt-4" para={store} />
            <div className="uses d-flex ">
              <div className="rightborder firstborder text-start">
                <SecondaryText para={download} />
                <span>Downloads</span>
              </div>
              <div className="rightborder firstborder">
                <SecondaryText para={rating} />
                <span>Rating</span>
              </div>
              <div className="firstborder ">
                <SecondaryText para={funding} />
                <span>Funding</span>
              </div>
            </div>
            <div className="reward fs-6 mt-5">
              <SecondaryText para={reward} />
            </div>
          </div>
          <div className="col-sm-12 col-lg-6  p-4 align-self-center">
            <img class="sweatCoin-img entered lazyloaded" src={image} />
          </div>
        </div>
      </div>
    </div>
  );
};

export { CustomCarousel, PortfolioCarousel };
