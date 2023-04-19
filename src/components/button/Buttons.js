import { Button } from "react-bootstrap";
import "./btn.css";

//for footer cart
export const ExploreMore1 = () => {
  return (
    <>
      <Button className="px-4 explore-1" style={{ borderRadius: "100px" }}>
        EXPLORE MORE
      </Button>
    </>
  );
};
export const ExploreMore2 = () => {
  return (
    <>
      <Button
        className="px-4 explore-2"
        style={{
          borderRadius: "100px",
        }}
      >
        EXPLORE MORE
      </Button>
    </>
  );
};
//for WelcomeBlock
export const ScheduleBtn = () => {
  return (
    <>
      <Button
        color="warning"
        className="schedule-btn text-dark px-5 py-3 fw-bold fs-5 mt-2"
      >
        Schedule a call
      </Button>
    </>
  );
};
