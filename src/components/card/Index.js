import { Card, CardGroup, Image } from "react-bootstrap";

const DefaultCard = (props) => {
  const {
    cardimage,
    cardclass,
    imgdivclass,
    imgclass,
    imgstyle,
    contentclass,
    headingclass,
    headingstyle,
    heading,
    paraclass,
    para,
    cardstyle,
    parashow,
    headingshow,
  } = props;
  return (
    <>
      <div className={cardclass} style={cardstyle}>
        <div className={imgdivclass}>
          <Image
            src={cardimage}
            className={`${imgclass} img-fluid`}
            style={imgstyle}
          />
          {headingshow ? (
            <h5 className={headingclass} style={headingstyle}>
              {heading}
            </h5>
          ) : (
            ""
          )}
          {parashow ? <p>{para}</p> : ""}
        </div>
        <div className={contentclass}>
          <h5 className={headingclass}>{heading}</h5>
          <p className={paraclass}>{para}</p>
        </div>
      </div>
    </>
  );
};

export default DefaultCard;
