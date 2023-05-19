import { Card } from "react-bootstrap";

const DiverseCard = (props) => {
  const {
    diversecardBG,
    heading,
    about,
    list1,
    list2,
    list3,
    list4,
    list5,
    cardclass,
  } = props;
  return (
    <Card
      className={`${cardclass} border-3 text-light text-start `}
      style={{
        backgroundImage: `url(${diversecardBG})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Card.Body>
        <span style={{ fontSize: "14px" }}>{heading}</span>
        <br />
        <span className="fw-bold" style={{ fontSize: "12px" }}>
          {about}
        </span>
        <br />
        <ul className="p-1 mx-2 lh-lg">
          <li>{list1}</li>
          <li>{list2}</li>
          <li>{list3}</li>
          <li>{list4}</li>
          <li>{list5}</li>
        </ul>
      </Card.Body>
    </Card>
  );
};
export default DiverseCard;
