import { Card } from "react-bootstrap";

const BrandCard = (props) => {
  return (
    <>
      <div className="container justify-content-between ">
        <div className=" justify-content-center mt-4">
          <Card className="brand-card  border-0">
            <Card.Body className="">
              <div className=" card-contents">
                <div className="img-block">
                  <img src={props.img} className="img-fluid" width={"70px"} />
                </div>
                <Card.Title className="py-2 text-dark">
                  {props.title}
                </Card.Title>
              </div>
              <div className="change-contents">
                <Card.Title className="text-white">{props.title}</Card.Title>
                <span className="">{props.about}</span>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};
export default BrandCard;
