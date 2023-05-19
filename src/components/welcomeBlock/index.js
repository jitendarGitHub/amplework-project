import CustomButtom from "../button/index.js";
import "./WelcomeBlock.css";

const CustomWelcomeBlock = (props) => {
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
        <div className="container welcome text-center justify-content-center ">
          <h5 className="welcome-title fw-bold">{props.title}</h5>
          <h1 className="welcome-description text-white fw-bold">
            {props.description}
          </h1>
          {props.btn && props.btn.length ? (
            <CustomButtom
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
export default CustomWelcomeBlock;
