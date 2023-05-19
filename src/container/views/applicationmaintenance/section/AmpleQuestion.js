import { Accordion, Container } from "react-bootstrap";
import { Amplequestionmockup } from "../../../../mockup/Amplequestionmockup";
import { CustomAccordion } from "../../../../components";
import { PrimaryText } from "../../../../components/text";
const AmpleQuestion = () => {
  return (
    <section className="question ">
      <Container className="text-center mt-5 pt-3">
        <PrimaryText
          heading="Frequently Asked Questions"
          className="fw-bold bg-transparent"
        />
        <Accordion>
          <div className="row">
            {Amplequestionmockup.map((items) => {
              return (
                <div className="col-lg-6 p-2 text-start">
                  <CustomAccordion
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
