import { Card, CardGroup, Container } from "react-bootstrap";
import "../experience/experience.css";
import { SiJsonwebtokens } from "@react-icons/all-files/si/SiJsonwebtokens";
import { useState } from "react";

const ExperienceOption = (props) => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <>
      <Card>
        <Card.Body>
          <div
            style={{}}
            content={isHovering ? "text I want to change" : "change text"}
            className={isHovering ? "bg-success fs-1" : "bg-salmon"}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <p>{props.icon}</p>
            <p className="fs-5 experienceoption-title">
              Proactive Monitoring & Maintenance
            </p>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

const Experience = () => {
  return (
    <>
      <div
        className="text-center py-5 text-light experience"
        style={{ backgroundColor: "rgb(22 45 66)" }}
      >
        <h3 className="mt-5 experience-heading">
          Experience Unparalleled Excellence with Our Comprehensive
          <br /> Application Support and Maintenance
        </h3>
        <p className="experience-para mt-4">
          Our advanced mobile application maintenance and support provide a
          comprehensive approach to managing
          <br /> and maintaining your applications.
        </p>
      </div>

      <div class="container maintenance">
        <div class="box">
          <div class="icon text-center align-self-center fs-1 ">
            <i class="fa fa-search" aria-hidden="true"></i>
            {/* {<SiJsonwebtokens />} */}
          </div>
          <div class="content">
            {" "}
            <h3>Search</h3>
            <p>
              Le Lorem Ipsum est simplement du faux texte employé dans la
              composition et la mise en page avant impression. Le Lorem Ipsum
              est le faux texte standard de l'imprimerie depuis les années 1500
            </p>
          </div>
        </div>
        <div class="box">
          <div class="icon">
            <i class="fa fa-user" aria-hidden="true"></i>
          </div>
          <div class="content">
            <h3>User</h3>
            <p>
              Le Lorem Ipsum est simplement du faux texte employé dans la
              composition et la mise en page avant impression. Le Lorem Ipsum
              est le faux texte standard de l'imprimerie depuis les années 1500
            </p>
          </div>
        </div>
        {/*   <div class="box">
          <div class="icon">
            <i class="fa fa-map-marker" aria-hidden="true"></i>
          </div>
          <div class="content">
            <h3>Location</h3>
            <p>
              Le Lorem Ipsum est simplement du faux texte employé dans la
              composition et la mise en page avant impression. Le Lorem Ipsum
              est le faux texte standard de l'imprimerie depuis les années 1500
            </p>
          </div>
        </div>
        <div class="box">
          <div class="icon">
            <i class="fa fa-map-marker" aria-hidden="true"></i>
          </div>
          <div class="content">
            <h3>Location</h3>
            <p>
              Le Lorem Ipsum est simplement du faux texte employé dans la
              composition et la mise en page avant impression. Le Lorem Ipsum
              est le faux texte standard de l'imprimerie depuis les années 1500
            </p>
          </div>
        </div> */}
      </div>
    </>
  );
};
export default Experience;
