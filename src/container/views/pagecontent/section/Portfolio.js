import { Carousel } from "react-bootstrap";
import { SweatCoinBg } from "../../../../assets";
import { FaGooglePlay } from "@react-icons/all-files/fa/FaGooglePlay";
import { SiAppstore } from "@react-icons/all-files/si/SiAppstore";
const PortFolio = () => {
  return (
    <section>
      <h3 className="text-center ">Portfolio of Our Accomplishments</h3>
      <Carousel>
        <Carousel.Item>
          <div
            className="portfollio text-center text-light"
            style={{ backgroundImage: `url(${SweatCoinBg})` }}
          >
            <div className="container">
              <div className="swercoin row text-start justify-content-center">
                <div className="col-sm-12 col-lg-6 align-self-center">
                  <h3 className="fw-bold">Sweatcoin</h3>
                  <p className="portfollioPara mt-3">
                    A new breed of step counter and activity tracker that
                    converts your steps into a currency you can spend on
                    gadgets, sports and fitness kit, services and experiences.
                    You can exchange them with friends and family.
                  </p>
                  <p className="fs-6 fw-bold mt-4">
                    Available On &nbsp;&nbsp; {<FaGooglePlay />}&nbsp;&nbsp;{" "}
                    {<SiAppstore />}
                  </p>
                  <div className="uses d-flex ">
                    <div className="rightborder firstborder text-start">
                      <p>50M+</p>
                      <span>Downloads</span>
                    </div>
                    <div className="rightborder firstborder">
                      <p>4.6/5</p>
                      <span>Rating</span>
                    </div>
                    <div className="firstborder ">
                      <p>$20M</p>
                      <span>Funding</span>
                    </div>
                  </div>
                  <div className="reward fs-6 mt-5">
                    <p>Rewards | Wallet | Tracker | eCommerce | Fintech</p>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-6  p-4 align-self-center">
                  <img
                    class="sweatCoin-img entered lazyloaded"
                    src="https://www.amplework.com/wp-content/uploads/2023/02/sweat_coin-screen.png"
                    width={"100%"}
                    alt="sweatCoin_screen"
                    data-lazy-src="https://www.amplework.com/wp-content/uploads/2023/02/sweat_coin-screen.png"
                    data-ll-status="loaded"
                  />
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="portfollio text-center text-light"
            style={{ backgroundImage: `url(${SweatCoinBg})` }}
          >
            <div className="container">
              <div className="swercoin row text-start justify-content-center">
                <div className="col-sm-12 col-lg-6 align-self-center">
                  <h3 className="fw-bold">Sweatcoin</h3>
                  <p className="portfollioPara mt-3">
                    A new breed of step counter and activity tracker that
                    converts your steps into a currency you can spend on
                    gadgets, sports and fitness kit, services and experiences.
                    You can exchange them with friends and family.
                  </p>
                  <p className="fs-6 fw-bold mt-4">
                    Available On &nbsp;&nbsp; {<FaGooglePlay />}&nbsp;&nbsp;{" "}
                    {<SiAppstore />}
                  </p>
                  <div className="uses d-flex ">
                    <div className="rightborder firstborder text-start">
                      <p>50M+</p>
                      <span>Downloads</span>
                    </div>
                    <div className="rightborder firstborder">
                      <p>4.6/5</p>
                      <span>Rating</span>
                    </div>
                    <div className="firstborder ">
                      <p>$20M</p>
                      <span>Funding</span>
                    </div>
                  </div>
                  <div className="reward fs-6 mt-5">
                    <p>Rewards | Wallet | Tracker | eCommerce | Fintech</p>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-6  p-4 align-self-center">
                  <img
                    class="sweatCoin-img entered lazyloaded"
                    src="https://www.amplework.com/wp-content/uploads/2023/02/sweat_coin-screen.png"
                    width={"100%"}
                    alt="sweatCoin_screen"
                    data-lazy-src="https://www.amplework.com/wp-content/uploads/2023/02/sweat_coin-screen.png"
                    data-ll-status="loaded"
                  />
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};
export default PortFolio;
