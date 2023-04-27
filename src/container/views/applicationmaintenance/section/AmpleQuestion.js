import { Accordion, Container } from "react-bootstrap";
import { QUestionBG } from "../../../../assets";
const AmpleQuestion = () => {
  return (
    <section className="">
      <div
        className="question text-center p-5"
        style={{
          backgroundImage: `url(${QUestionBG})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h4 className="fw-bold">Frequently Asked Questions</h4>
        <Container className="pb-4 py-0">
          <Accordion>
            <div className="row bg-warning">
              <div className="col-lg-6 text-start">
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
        </Container>
      </div>
    </section>
  );
};
export default AmpleQuestion;
