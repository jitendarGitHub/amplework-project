import { Button } from "react-bootstrap";
import "./btn.css";
export const DefaultButton = (props) => {
  const { btnClass, btnStyle, icon, value, type } = props;
  return (
    <Button type={type} className={`${btnClass}`} style={btnStyle}>
      {value}
      {icon}
    </Button>
  );
};

//for footer cart
// export const ExploreMore1 = () => {
//   return (
//     <>
//       <Button className="px-4 explore-1" style={{ borderRadius: "100px" }}>
//         EXPLORE MORE
//       </Button>
//     </>
//   );
// };
// export const ExploreMore2 = () => {
//   return (
//     <>
//       <Button
//         className="px-4 explore-2"
//         style={{
//           borderRadius: "100px",
//         }}
//       >
//         EXPLORE MORE
//       </Button>
//     </>
//   );
// };
//for WelcomeBlock
// export const ScheduleBtn = (props) => {
//   return (
//     <>
//       <Button
//         color="warning"
//         className="schedule-btn text-dark px-5 py-3 fw-bold fs-5 mt-2"
//       >
//         {props.btn}
//       </Button>
//     </>
//   );
// };
