import { useState } from "react";
import { Card, Image } from "react-bootstrap";
import { Cursor, Target, target2 } from "../assets";

const Shapcard = (props) => {
  const [over, out] = useState(false);
  return (
    <>
      <div
        className="card text-center p-4 mt-3  border-4 border-dashed "
        onMouseOver={() => out(true)}
        onMouseOut={() => out(false)}
        onClick={() => out(true)}
      >
        <Card className="card-content">
          <Card.Body>
            <Image src={over ? target2 : Target} width={"10%"} />
            <Card.Title className="fixed-issue">
              {over ? "Fixed" : "issue"}
            </Card.Title>
            {over ? (
              <p className="change-paragraph">{props.changepara}</p>
            ) : (
              <>
                <Card.Text>{props.para}</Card.Text>
                <Card.Text className=" ample-footers text-primary">
                  {props.footer} <img src={Cursor} alt="" />
                </Card.Text>
              </>
            )}
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
export default Shapcard;
