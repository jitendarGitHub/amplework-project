import { DefaultButton, ScheduleBtn } from "../button/Buttons.js";
import "./WelcomeBlock.css";

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
          WebkitBackgroundSize: "cover",
          MozBackgroundSize: "cover",
        }}
      >
        {/* <Header image={Amplelogo} /> */}
        <div className="container welcome text-center justify-content-center ">
          <h5 className="welcome-title fw-bold">{props.title}</h5>
          <h1 className="welcome-description text-white fw-bold">
            {props.description}
          </h1>
          {props.btn && props.btn.length ? (
            <DefaultButton
              btn={props.btn}
              value="Schedule a Call"
              btnClass="schedule-btn text-dark px-5 py-3 fw-bold fs-5 mt-2"
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};
export default WelcomeBlock;
