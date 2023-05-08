import { BiDollar } from "@react-icons/all-files/bi/BiDollar";
import { BiMessageAltDetail } from "@react-icons/all-files/bi/BiMessageAltDetail";
import { HiOutlineMail } from "@react-icons/all-files/hi/HiOutlineMail";
import { HiOutlineUser } from "@react-icons/all-files/hi/HiOutlineUser";
import { IoMdAddCircle } from "@react-icons/all-files/io/IoMdAddCircle";
import { IoMdCall } from "@react-icons/all-files/io/IoMdCall";
import { RiApps2Line } from "@react-icons/all-files/ri/RiApps2Line";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { captcha } from "../../../../assets";
import "../application.css";
import { DefaultButton, FormInput } from "../../../../components";

const FormSection = () => {
  return (
    <div className="col-sm-12 col-lg-6   p-3 align-self-center">
      <h3 className="container fw-bold form-section-heading">
        Prepare yourself for a quick Response
      </h3>
      <Form className="container pt-5">
        <Row className="mb-3">
          <FormInput
            logo={<HiOutlineUser />}
            placeholder="Name* "
            type="text"
            size="6"
          />
          <FormInput
            size="6"
            logo={<HiOutlineMail />}
            placeholder="Email* "
            type="email"
          />
          <FormInput
            size="6"
            logo={<IoMdCall />}
            placeholder="Mobile Number* "
            type="text"
          />
          <FormInput
            size="6"
            logo={<RiApps2Line />}
            option="Intrested In *"
            value1="1"
            value2="2"
            value3="3"
            formselect
          />
          <FormInput
            size="6"
            logo={<BiMessageAltDetail />}
            type="number"
            placeholder="Skype Id/WhatsApp No.*"
          />
          <FormInput
            size="6"
            logo={<BiDollar />}
            option="Select Your Budget*"
            value1="10$"
            value2="20$"
            value3="30$"
            formselect
          />
          <Form.Group
            as={Col}
            md="12"
            className="mb-0 "
            controlId="exampleForm.ControlTextarea1"
          >
            <InputGroup className="mb-3 ">
              <InputGroup.Text
                id="basic-addon1"
                className="text-warning border-0"
              >
                {<BiMessageAltDetail />}
              </InputGroup.Text>
              &nbsp;&nbsp; MESSAGE *
            </InputGroup>
          </Form.Group>

          <Form.Group as={Col} md="12">
            <Form.Control as="textarea" rows={2} />
          </Form.Group>

          <div className="container mt-3">
            <div className="addFile d-md-flex mt-2 justify-content-between">
              <div className="text-primary align-self-center col-sm-3">
                <span> {<IoMdAddCircle />}</span>
                <span className="px-2 fw-bold">ADD FILE</span>
              </div>
              <div className="align-self-center py-2  col-md-9 text-md-end">
                <input type="checkbox" className="" />
                <span className="px-2">Yes, Send me a mutual NDA</span>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row mt-3">
              <div className="first d-flex bg-white col-md-7 justify-content-between align-self-center">
                <div className="align-self-center col-lg-8 ">
                  <input type="checkbox" className="" />
                  &nbsp;&nbsp;
                  <span className="fs-5">I`m not a robot</span>
                </div>
                <div className="col-lg-2">
                  <img src={captcha} width={"50px"} />
                </div>
              </div>
              <div className="col-md-5 align-self-center text-lg-end text-md-end ">
                <DefaultButton
                  btnClass=" border-0 p-2 mt-2"
                  value="Send Your Inquiry"
                  type="submit"
                  btnStyle={{ backgroundColor: "rgb(245 164 3)" }}
                />
              </div>
            </div>
          </div>
        </Row>
      </Form>
    </div>
  );
};
export default FormSection;
