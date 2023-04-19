import "./footer.css";

import { FiFacebook } from "@react-icons/all-files/fi/FiFacebook";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { GrLinkedinOption } from "@react-icons/all-files/gr/GrLinkedinOption";
import { FiTwitter } from "@react-icons/all-files/fi/FiTwitter";

import Dmca from "../../assets/dmca.png";

const SocialmediaFooter = () => {
  return (
    <>
      <div className="social-media-footer ">
        <div className="d-lg-flex d-md-flex d-sm-block justify-content-between container ">
          <div className=" col-sm-6 col-md-6 about-gallary align-self-center">
            <ul className=" d-flex flex-wrap text-center justify-content-between align-self-center">
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Service</a>
              </li>
              <li>
                <a href="">Career</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Privacy Poliocy</a>
              </li>
              <li>
                <a href="">Legal</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-3 col-lg-2 social-icon fs-4">
            <ul className="d-flex justify-content-around align-self-center mb-0 pb-2">
              <li>
                <FiFacebook />
              </li>
              <li>
                <GrLinkedinOption />
              </li>
              <li>
                <FiTwitter />
              </li>
              <li>
                <FaInstagram />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footerend">
        <div className="container">
          <div className="d-flex flex-md-row flex-column flex-wrap justify-content-lg-between justify-content-center align-items-center">
            <aside className="d-flex flex-md-row flex-column align-items-center">
              <p className="mb-0">
                Amplework © 2023 | All Right Reserved &nbsp; &nbsp;
              </p>
              <img src={Dmca} className="my-2" />
            </aside>
            <aside className="d-flex flex-md-row flex-column align-items-center">
              USA | UK | Canada | Australia | Norway | Germany | France | Sweden
              | Poland
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};
export default SocialmediaFooter;
