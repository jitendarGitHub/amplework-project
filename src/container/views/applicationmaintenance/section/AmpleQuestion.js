import { Accordion, Container } from "react-bootstrap";
import { Accordions } from "../../../../components";
import { Amplequestionmockup } from "../../../../mockup/Amplequestionmockup";
const AmpleQuestion = () => {
  return (
    <section className="question ">
      <Container className="text-center mt-5 pt-3">
        <h4 className="fw-bold bg-transparent">Frequently Asked Questions</h4>
        <Accordion>
          <div className="row">
            {Amplequestionmockup.map((items) => {
              return (
                <div className="col-lg-6 p-2 text-start">
                  <Accordions
                    eventkeys={items.eventkeys}
                    question={items.question}
                    answer={items.answer}
                  />
                </div>
              );
            })}
          </div>
        </Accordion>
      </Container>
    </section>
  );
};
export default AmpleQuestion;
