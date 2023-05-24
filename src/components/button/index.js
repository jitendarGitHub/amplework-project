import { Button } from "react-bootstrap";
import "./btn.css";
const CustomButton = (props) => {
  const { btnClass, btnStyle, icon, value, type, action } = props;
  return (
    <Button
      type={type}
      className={`${btnClass}`}
      style={btnStyle}
      onClick={action}
    >
      {value}
      {icon}
    </Button>
  );
};
export default CustomButton;
