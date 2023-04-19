import { Card } from "react-bootstrap";

const BussinessTimeCard = (props) => {
  return (
    <>
      <Card className="mt-2 bussiness-card">
        <Card.Body>
          <div className="">
            <h4 className="fw-bold  bussiness-headings">{props.time}</h4>
            <p>{props.para}</p>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};
export default BussinessTimeCard;
