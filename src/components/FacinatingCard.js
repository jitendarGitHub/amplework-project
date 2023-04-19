import { Card } from "react-bootstrap";

const FacinatingCard = (props) => {
  return (
    <>
      <Card className="mt-4 text-start facinating">
        <Card.Body>
          <div className="d-flex">
            <div className="">
              <h5 className="titles fw-100">{props.title}</h5>
              <Card.Text>
                <p className="para">{props.para}</p>
              </Card.Text>
            </div>
            <div className="img-background align-self-center text-center p-2">
              <img src={props.img} />
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};
export default FacinatingCard;
