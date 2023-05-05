import { Button, Card, Container } from "react-bootstrap";
import { DeveloperBG } from "../assets";

const FullStackDeveloper = () => {
  return (
    <section className="bg-light  ">
      <Container>
        <Card className="text-white border-0 p-0 align-self-center full-stack-dev">
          <Card.Body>
            <div className="d-flex flex-wrap justify-content-between p-4 align-self-center">
              <div className=" col-sm-8">
                <h2 className="dedicated-developer">
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
                Get 2 Week Free Trial &nbsp;&nbsp;
                <i class="bi bi-arrow-up-right"></i>
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};
export default FullStackDeveloper;
