import { Card } from "react-bootstrap";
import { Dreammanagement } from "../assets";
import "../../src/container/views/softwaremaintenance/softwaremaintenance.css";

const DreamModalCard = (props) => {
  return (
    <>
      <Card
        className="p-3 pt-4 border-1"
        style={{
          borderBottom: `${props.borderbottom}`,
          boxShadow: `${props.boxshadow}`,
        }}
      >
        <img src={props.img} width={"50px"} />
        <h6 className="mt-3 dreamcard-heading">{props.title}</h6>
        <Card.Text>
          <p className="dreamcard-para">{props.para}</p>
          <ul className="dreamcard-list px-3 pb-5">
            <li>{props.list1}</li>
            <li>{props.list2}</li>
            <li>{props.list3}</li>
            <li>{props.list4}</li>
          </ul>
        </Card.Text>
      </Card>
    </>
  );
};
export default DreamModalCard;
