import { Accordion } from "react-bootstrap";

const QuestionAccordion = (props) => {
  return (
    <>
      <Accordion
        style={{
          boxShadow: "0px 2px 20px 2px rgb(220, 221, 223)",
        }}
        defaultActiveKey="0"
      >
        <Accordion.Item eventKey="1">
          <Accordion.Header>{props.question}</Accordion.Header>
          <Accordion.Body>{props.answer}</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};
export default QuestionAccordion;
