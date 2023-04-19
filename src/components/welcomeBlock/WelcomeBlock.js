import Header from "../header/Header.js";
import Amplelogo from "../../assets/amplworkLogo.png";
import { ScheduleBtn } from "../button/Buttons.js";
import "./WelcomeBlock.css";
// import Banner from "../../assets/banner.jpg";

const WelcomeBlock = (props) => {
  return (
    <>
      <div
        className="main"
        style={{
          backgroundImage: `url(${props.image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Header image={Amplelogo} />
        <div className="container welcome text-center justify-content-center ">
          <h5 className="welcome-title  fw-bold">{props.title}</h5>
          <h1 className="welcome-description text-white fw-bold">
            {props.description}
          </h1>
          <ScheduleBtn />
        </div>
      </div>
    </>
  );
};
export default WelcomeBlock;
