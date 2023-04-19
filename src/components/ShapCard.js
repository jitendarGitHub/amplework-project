import { Card } from "react-bootstrap";

const Shapcard = (props) => {
  return (
    <>
      <div className="card text-center p-4 mt-3  border-4 border-dashed ">
        <Card className="card-content">
          <Card.Body>
            <h1 className="icon fs-1">{props.image}</h1>
            <Card.Title
              className="card-title"
              style={{ color: `${props.color}` }}
            >
              {props.title}
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
