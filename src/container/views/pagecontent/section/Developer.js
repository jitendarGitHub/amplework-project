import { Button, Card } from "react-bootstrap";
import { DeveloperBG } from "../../../../assets";
import { Cards } from "../../../../components";

const Developer = () => {
  return (
    <section className="">
      <div className="developer container ">
        <Card
          className=" text-white border-0 p-0 align-self-center"
          style={{
            backgroundImage: `url(${DeveloperBG})`,
            backgroundRepeat: "no-repeat",
            borderRadius: "10px",
          }}
        >
          <Card.Body>
            <div className="d-flex flex-wrap justify-content-between p-4 align-self-center">
              <div className="first col-sm-8">
                <h2 className="dedicated-developer">
                  {" "}
                  Dedicated Full-stack developer?
                </h2>
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
          <h4 className="fw-bold">Trusted and Skilled Developers</h4>
          <p>
            Our developers are ready to join your team and build amazing mobile
            & web apps.
          </p>

          <div className="row">
            <div className="d-flex flex-wrap justify-content-between">
              <Cards
                src="https://www.amplework.com/wp-content/uploads/2019/12/sahib-khan.jpg"
                name="Sahib Khan"
                position="Full Stack Developer"
              />
              <Cards
                src="https://www.amplework.com/wp-content/uploads/2019/12/6.png"
                name="Prakash Saini"
                position="CTO"
              />
              <Cards
                src="https://www.amplework.com/wp-content/uploads/2019/12/8.png"
                name="Santosh Saini"
                position="CEO"
              />
              <Cards
                src="https://www.amplework.com/wp-content/uploads/2019/12/rajkumar-1-1200x1180.jpg"
                name="Rajkumar Jangid"
                position="Software Develooper"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Developer;
