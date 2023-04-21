import { Card, CardGroup, Container } from "react-bootstrap";
// import "./FooterCard.css";
const FooterCard = (props) => {
  const {
    PartTime,
    Hourglass,
    Calendar,
    EnterpriseBg,
    Button,
    DurationContent1,
    DurationContent2,
    DurationContent3,
    Bgcolor,
    CardBorder,
  } = props;

  return (
    <Card
      style={{
        backgroundColor: `${Bgcolor}`,
        borderColor: `${CardBorder}`,
        color: "white",
        padding: "20px 10px 0px 10px",
        backgroundImage: `url(${EnterpriseBg})`,
        backgroundPosition: " bottom 0px right 0px",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Card.Body>
        <Card.Title
          className="mx-2"
          style={{
            fontWeight: "bolder",
            fontFamily: "Poppins,sans-serif",
            fontSize: "1.75rem",
          }}
        >
          {props.title}
        </Card.Title>
        <Card.Text
          className="mx-2 mt-4 p"
          style={{
            fontFamily: "Poppins,sans-serif",
            color: "#fff",
            fontSize: "15px",
            letterSpacing: "0.6px",
            wordSpacing: "1.5px",
          }}
        >
          {props.description}{" "}
        </Card.Text>
        <Card.Text>
          <div className="d-flex container mt-5 justify-content-around ">
            <div className="col-sm-3 ">
              <div className="first-duration align-self-center">
                <img src={PartTime} className="img-fluid" />
              </div>
              <p className="part-time mt-3">{DurationContent1}</p>
            </div>
            <div className="col-sm-3 mx-3">
              <div className=" first-duration align-self-center ">
                <img src={Hourglass} alt="" className="img-fluid" />
              </div>
              <p className="full-time mt-3 ">{DurationContent2}</p>
            </div>
            <div className="col-sm-3 ">
              <div className="first-duration align-self-center ">
                <img src={Calendar} alt="" className="img-fluid" />
              </div>
              <p className="hourly mt-3">{DurationContent3}</p>
            </div>
          </div>
        </Card.Text>
        <div className="">{Button}</div>
      </Card.Body>
    </Card>
  );
};
export default FooterCard;
