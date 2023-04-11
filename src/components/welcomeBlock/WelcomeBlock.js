import Header from "../header/Header.js";
import Amplelogo from "../../assets/AmpleLogo.png";
import ScheduleBtn from "../button/SchduleBtn.js";
import "../welcomeBlock/WelcomeBlock.css";
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
          <h6 className="text-warning">{props.title}</h6>
          <h3 className="text-white fw-bold">{props.description}</h3>
          <ScheduleBtn />
        </div>
      </div>
    </>
  );
};
export default WelcomeBlock;
