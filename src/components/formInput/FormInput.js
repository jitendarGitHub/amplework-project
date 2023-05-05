import { useState } from "react";
import { Col, Form, InputGroup } from "react-bootstrap";

const FormInput = (props) => {
  const {
    logo,
    type,
    placeholder,
    formselect,
    option,
    value1,
    value2,
    value3,
    label,
    as,
    rows,
    size,
  } = props;
  return (
    <Form.Group as={Col} md={size} className="">
      <InputGroup className="mb-3">
        <InputGroup.Text
          id="basic-addon1"
          className="text-warning  inputBorder"
        >
          {logo} &nbsp;&nbsp;&nbsp;<span>{label}</span>
        </InputGroup.Text>

        {formselect ? (
          <>
            <Form.Select
              aria-label="Floating label select example"
              className="inputBorder"
            >
              <option>{option}</option>
              <option value="1">{value1}</option>
              <option value="2">{value2}</option>
              <option value="3">{value3}</option>
            </Form.Select>
          </>
        ) : (
          <>
            <>
              <Form.Control
                rows={rows}
                as={as}
                type={type}
                placeholder={placeholder}
                className="inputBorder"
              />
            </>
          </>
        )}
      </InputGroup>
    </Form.Group>
  );
};
export default FormInput;
