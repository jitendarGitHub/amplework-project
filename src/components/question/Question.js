import AccordionItem from "react-bootstrap/esm/AccordionItem";
import "../question/question.css";
import Accordion from "react-bootstrap/Accordion";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import { Container } from "react-bootstrap";
import bgImage from "../../assets/questionBG.png";

const Question = () => {
  return (
    <>
      <div
        className="question text-center py-5 pb-5 "
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h3 className="fw-bold">Frequently Asked Questions</h3>
        <Container className=" pb-4 py-5">
          <div className="d-lg-flex d-md-flex  gap-2  ">
            <div className=" col-sm-6 mt-3">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    How skilled are your dedicated developers?
                  </Accordion.Header>
                  <Accordion.Body>
                    At Amplework, we feature a team of highly skilled and
                    experienced dedicated developers having several years of
                    expertise in the field of mobile app development solutions.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="col-sm-6 mt-3">
              <Accordion>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    How skilled are your dedicated developers?
                  </Accordion.Header>
                  <Accordion.Body>
                    At Amplework, we feature a team of highly skilled and
                    experienced dedicated developers having several years of
                    expertise in the field of mobile app development solutions.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
          <div className="d-lg-flex d-md-flex  gap-2  ">
            <div className=" col-sm-6 mt-3">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    How skilled are your dedicated developers?
                  </Accordion.Header>
                  <Accordion.Body>
                    At Amplework, we feature a team of highly skilled and
                    experienced dedicated developers having several years of
                    expertise in the field of mobile app development solutions.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="col-sm-6 mt-3">
              <Accordion>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    How skilled are your dedicated developers?
                  </Accordion.Header>
                  <Accordion.Body>
                    At Amplework, we feature a team of highly skilled and
                    experienced dedicated developers having several years of
                    expertise in the field of mobile app development solutions.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
          <div className="d-lg-flex d-md-flex  gap-2">
            <div className=" col-sm-6 mt-3 ">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    How skilled are your dedicated developers?
                  </Accordion.Header>
                  <Accordion.Body>
                    At Amplework, we feature a team of highly skilled and
                    experienced dedicated developers having several years of
                    expertise in the field of mobile app development solutions.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="col-sm-6 mt-3">
              <Accordion>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    How skilled are your dedicated developers?
                  </Accordion.Header>
                  <Accordion.Body>
                    At Amplework, we feature a team of highly skilled and
                    experienced dedicated developers having several years of
                    expertise in the field of mobile app development solutions.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
          <div className="d-lg-flex d-md-flex  gap-2">
            <div className=" col-sm-6 mt-3 ">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    How skilled are your dedicated developers?
                  </Accordion.Header>
                  <Accordion.Body>
                    At Amplework, we feature a team of highly skilled and
                    experienced dedicated developers having several years of
                    expertise in the field of mobile app development solutions.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="col-sm-6 mt-3">
              <Accordion>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    How skilled are your dedicated developers?
                  </Accordion.Header>
                  <Accordion.Body>
                    At Amplework, we feature a team of highly skilled and
                    experienced dedicated developers having several years of
                    expertise in the field of mobile app development solutions.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
export default Question;
