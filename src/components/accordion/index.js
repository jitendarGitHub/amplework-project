import { Accordion } from "react-bootstrap";

const CustomAccordion = (props) => {
  const { eventkeys, question, answer } = props;
  return (
    <Accordion.Item eventKey={eventkeys} className="question-box">
      <Accordion.Header className="fs-1">
        <h4>{question}</h4>
      </Accordion.Header>
      <Accordion.Body>{answer}</Accordion.Body>
    </Accordion.Item>
  );
};
export default CustomAccordion;
