import { Button, Card, CardGroup, Container } from "react-bootstrap";
import "../trusteddeveloper/developer.css";
import bgImage from "../../assets/developerBG.png";
import Namboodiri from "../../assets/NAMBOODIRI.png";

const DeveloperImg = (props) => {
  <Card>
    <Card.Body>
      <h1 className="text-dark">{props.title}</h1>
    </Card.Body>
  </Card>;
};

const Developer = () => {
  return (
    <>
      <div className="developer container ">
        <Card
          className=" text-white"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <Card.Body>
            <div className="d-flex flex-wrap justify-content-between">
              <div className="first col-sm-8">
                <p className="fs-4 fw-bold">Dedicated Full-stack developer?</p>
                <Card.Text>
                  Let's Discuss Your Project how we will transform your idea
                  into an amazing digital product?
                </Card.Text>
              </div>
              <Button
                className="rounded-pill mt-2 bg-primary border-0 text-light fw-bold"
                style={{ height: "50px" }}
              >
                {" "}
                Get 2 Week Free Trial &nbsp;&nbsp;
                <i class="bi bi-arrow-up-right"></i>
              </Button>
            </div>
          </Card.Body>
        </Card>

        <div className="content text-center my-5">
          <h4>Trusted and Skilled Developers</h4>
          <p>
            Our developers are ready to join your team and build amazing mobile
            & web apps.
          </p>
          <Container>
            <CardGroup>
              <Card style={{ border: "none" }}>
                <Card.Body className="text-start">
                  <Card.Img
                    className="img"
                    src="https://www.amplework.com/wp-content/uploads/2019/12/sahib-khan.jpg"
                  />
                  <span>Sahib Khan</span>
                  <br />
                  <span>Full Stack Develoer</span>
                </Card.Body>
              </Card>
              <Card style={{ border: "none" }}>
                <Card.Body className="text-start">
                  <Card.Img
                    className="img"
                    src="https://www.amplework.com/wp-content/uploads/2019/12/6.png"
                  />
                  <span>Prakash saini</span>
                  <br />
                  <span>CTO</span>
                </Card.Body>
              </Card>
              <Card style={{ border: "none" }}>
                <Card.Body className="text-start">
                  <Card.Img
                    className="img"
                    src="https://www.amplework.com/wp-content/uploads/2019/12/8.png"
                  />
                  <span>Santosh Singh</span>
                  <br />
                  <span>SEO</span>
                </Card.Body>
              </Card>
              <Card style={{ border: "none" }}>
                <Card.Body className="text-start">
                  <Card.Img
                    className="img"
                    src="https://www.amplework.com/wp-content/uploads/2019/12/rajkumar-1-1200x1180.jpg"
                  />

                  <span>Rajkumar </span>
                  <br />
                  <span>Software Developer</span>
                </Card.Body>
              </Card>
            </CardGroup>
          </Container>
        </div>
      </div>

      <section>
        <h3>We Proudly Showcase - Our Client Appreciations</h3>
        <div className="container d-lg-flex">
          <div className="col-sm-6">
            <img src={Namboodiri} alt="" width={"90%"} />
          </div>
          <div className="col-sm-6">
            <h6>Amplework is a great team to work with, highly recommended.</h6>
            <p>
              Flawless Plank was an AI based fitness application and we are glad
              we get a chance to work on this project with Amplework. They have
              excellent skills in building mobile apps and willing to work
              around issues to solve them .. Highly Recommended!
            </p>
            <p> MANU NAMBOODIRI</p>
            <span>Founder, Flawless Plank</span>
          </div>
        </div>
      </section>
    </>
  );
};
export default Developer;
