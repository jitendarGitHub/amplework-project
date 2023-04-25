import { useState } from "react";
import { Card } from "react-bootstrap";

import Target from "../assets/Target.png";
import target2 from "../assets/target2.png";

const Shapcard = (props) => {
  const [over, setOver] = useState(false);
  return (
    <>
      <div
        className="card text-center p-4 mt-3  border-4 border-dashed "
        onMouseOver={() => setOver(true)}
        onMouseOut={() => setOver(true)}
      >
        <Card className="card-content">
          <Card.Body>
            <img src={over ? target2 : Target} width={"10%"} />
            <Card.Title
              className="card-title"
              style={{ color: `${props.color}` }}
            >
              {over.title ? "Resolved" : "issue"}
            </Card.Title>
            <Card.Text>{props.para}</Card.Text>
            <Card.Text className=" ample-footers text-primary">
              {props.footer}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
export default Shapcard;
