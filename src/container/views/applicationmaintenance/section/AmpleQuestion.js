import { Accordion, Container } from "react-bootstrap";
import { QUestionBG } from "../../../../assets";
import { Accordions } from "../../../../components";
const AmpleQuestion = () => {
  return (
    <section className="question ">
      <Container className="text-center mt-5 pt-3">
        <h4 className="fw-bold bg-transparent">Frequently Asked Questions</h4>
        <Accordion>
          <div className="row">
            <div className="col-lg-6 p-2 text-start">
              <Accordions
                eventkeys="0"
                question="How skilled are your dedicated developers?"
                answer=" At Amplework, we feature a team of highly skilled and experienced dedicatsed developers having several years of expertise in the field of mobile app development solutions."
              />
            </div>
            <div className="col-lg-6 p-2 text-start">
              <Accordions
                eventkeys="1"
                question="How skilled are your dedicated developers?"
                answer=" At Amplework, we feature a team of highly skilled and experienced dedicatsed developers having several years of expertise in the field of mobile app development solutions."
              />
            </div>
            <div className="col-lg-6 p-2 text-start">
              <Accordions
                eventkeys="2"
                question="How skilled are your dedicated developers?"
                answer=" At Amplework, we feature a team of highly skilled and experienced dedicatsed developers having several years of expertise in the field of mobile app development solutions."
              />
            </div>
            <div className="col-lg-6 p-2 text-start">
              <Accordions
                eventkeys="3"
                question="How skilled are your dedicated developers?"
                answer=" At Amplework, we feature a team of highly skilled and experienced dedicatsed developers having several years of expertise in the field of mobile app development solutions."
              />
            </div>
            <div className="col-lg-6 p-2 text-start">
              <Accordions
                eventkeys="4"
                question="How skilled are your dedicated developers?"
                answer=" At Amplework, we feature a team of highly skilled and experienced dedicatsed developers having several years of expertise in the field of mobile app development solutions."
              />
            </div>
            <div className="col-lg-6 p-2 text-start">
              <Accordions
                eventkeys="5"
                question="How skilled are your dedicated developers?"
                answer=" At Amplework, we feature a team of highly skilled and experienced dedicatsed developers having several years of expertise in the field of mobile app development solutions."
              />
            </div>
            <div className="col-lg-6 p-2 text-start">
              <Accordions
                eventkeys="6"
                question="How skilled are your dedicated developers?"
                answer=" At Amplework, we feature a team of highly skilled and experienced dedicatsed developers having several years of expertise in the field of mobile app development solutions."
              />
            </div>
            <div className="col-lg-6 p-2 text-start">
              <Accordions
                eventkeys="7"
                question="How skilled are your dedicated developers?"
                answer=" At Amplework, we feature a team of highly skilled and experienced dedicatsed developers having several years of expertise in the field of mobile app development solutions."
              />
            </div>
          </div>
        </Accordion>
        {/* <Accordions
          eventkey="1"
          question="How skilled are your dedicated developers?"
          answer=" At Amplework, we feature a team of highly skilled and experienced dedicatsed developers having several years of expertise in the field of mobile app development solutions."
        />
        <div className="question text-center bg-warning">
          <Accordion>
            <div className="row">
              <div className="col-lg-6 p-2 text-start">
                <Accordion.Item eventKey="0" className="question-box">
                  <Accordion.Header className="fs-1">
                    <h4>How skilled are your dedicated developers?</h4>
                  </Accordion.Header>
                  <Accordion.Body>
                    At Amplework, we feature a team of highly skilled and
                    experienced dedicatsed developers having several years of
                    expertise in the field of mobile app development solutions.
                  </Accordion.Body>
                </Accordion.Item>
              </div>
              <div className="col-lg-6 p-2 text-start">
                <Accordion.Item eventKey="1" className="question-box">
                  <Accordion.Header>
                    <h4>How skilled are your dedicated developers?</h4>
                  </Accordion.Header>
                  <Accordion.Body>
                    At Amplework, we feature a team of highly skilled and
                    experienced dedicated developers having several years of
                    expertise in the field of mobile app development solutions.
                  </Accordion.Body>
                </Accordion.Item>
              </div>
              <div className="col-lg-6 p-2 text-start">
                <Accordion.Item eventKey="2" className="question-box">
                  <Accordion.Header>
                    <h4>How skilled are your dedicated developers?</h4>
                  </Accordion.Header>
                  <Accordion.Body>
                    At Amplework, we feature a team of highly skilled and
                    experienced dedicated developers having several years of
                    expertise in the field of mobile app development solutions.
                  </Accordion.Body>
                </Accordion.Item>
              </div>
              <div className="col-lg-6 p-2 text-start">
                <Accordion.Item eventKey="3" className="question-box">
                  <Accordion.Header>
                    <h4>How skilled are your dedicated developers?</h4>
                  </Accordion.Header>
                  <Accordion.Body>
                    At Amplework, we feature a team of highly skilled and
                    experienced dedicated developers having several years of
                    expertise in the field of mobile app development solutions.
                  </Accordion.Body>
                </Accordion.Item>
              </div>
              <div className="col-lg-6 p-2 text-start">
                <Accordion.Item eventKey="4" className="question-box">
                  <Accordion.Header>
                    <h4>How skilled are your dedicated developers?</h4>
                  </Accordion.Header>
                  <Accordion.Body>
                    At Amplework, we feature a team of highly skilled and
                    experienced dedicated developers having several years of
                    expertise in the field of mobile app development solutions.
                  </Accordion.Body>
                </Accordion.Item>
              </div>
              <div className="col-lg-6 p-2 text-start">
                <Accordion.Item eventKey="5" className="question-box">
                  <Accordion.Header>
                    <h4>How skilled are your dedicated developers?</h4>
                  </Accordion.Header>
                  <Accordion.Body>
                    At Amplework, we feature a team of highly skilled and
                    experienced dedicated developers having several years of
                    expertise in the field of mobile app development solutions.
                  </Accordion.Body>
                </Accordion.Item>
              </div>
              <div className="col-lg-6 p-2 text-start">
                <Accordion.Item eventKey="6" className="question-box">
                  <Accordion.Header>
                    <h4>How skilled are your dedicated developers?</h4>
                  </Accordion.Header>
                  <Accordion.Body>
                    At Amplework, we feature a team of highly skilled and
                    experienced dedicated developers having several years of
                    expertise in the field of mobile app development solutions.
                  </Accordion.Body>
                </Accordion.Item>
              </div>
              <div className="col-lg-6 p-2 text-start">
                <Accordion.Item eventKey="7" className="question-box">
                  <Accordion.Header>
                    <h4>How skilled are your dedicated developers?</h4>
                  </Accordion.Header>
                  <Accordion.Body>
                    At Amplework, we feature a team of highly skilled and
                    experienced dedicated developers having several years of
                    expertise in the field of mobile app development solutions.
                  </Accordion.Body>
                </Accordion.Item>
              </div>
            </div>
          </Accordion>
        </div> */}
      </Container>
    </section>
  );
};
export default AmpleQuestion;
