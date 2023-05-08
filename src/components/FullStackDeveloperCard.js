import { Card, Container } from "react-bootstrap";
import { DefaultButton } from "./button/Buttons";
import DefaultCard from "./card/Index";
import { facinating6 } from "../assets";

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

              <DefaultButton
                btnClass="rounded-pill align-self-center bg-primary  fw-bold"
                btnStyle={{ height: "50px" }}
                icon=<i class="bi bi-arrow-up-right" />
                value="Get 2 Week Free Trial &nbsp;&nbsp;"
              />
            </div>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};
export default FullStackDeveloper;
