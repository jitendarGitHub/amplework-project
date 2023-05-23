import { BiDollar } from "@react-icons/all-files/bi/BiDollar";
import { BiMessageAltDetail } from "@react-icons/all-files/bi/BiMessageAltDetail";
import { HiOutlineMail } from "@react-icons/all-files/hi/HiOutlineMail";
import { HiOutlineUser } from "@react-icons/all-files/hi/HiOutlineUser";
import { IoMdAddCircle } from "@react-icons/all-files/io/IoMdAddCircle";
import { IoMdCall } from "@react-icons/all-files/io/IoMdCall";
import { RiApps2Line } from "@react-icons/all-files/ri/RiApps2Line";
import { Col, Form, InputGroup, Row } from "react-bootstrap";
import { captcha } from "../../../../assets";
import "../application.css";
import CustomButtom from "../../../../components/button";
import { PrimaryText, SecondaryText } from "../../../../components/text";
import { CustomInput, FormInput } from "../../../../components/formInput/Index";

const FormSection = () => {
  return (
    <div className="col-sm-12 col-lg-6 p-3 align-self-center">
      <PrimaryText
        className="container fw-bold form-section-heading"
        heading="Prepare yourself for a quick Response"
      />
      <Form className="container pt-5">
        <Row className="mb-3">
          {mock.map((items) => {
            return (
              <FormInput
                size={items.size}
                logo={items.logo}
                option={items.option}
                value1={items.value1}
                value2={items.value2}
                value3={items.value3}
                placeholder={items.placeholder}
                formselect={items.formselect}
              />
            );
          })}{" "}
          <Form.Group
            as={Col}
            md="12"
            className="mb-0 "
            controlId="exampleForm.ControlTextarea1"
          >
            <InputGroup className="mb-3">
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
              <div className="text-primary align-self-center col-sm-3 d-flex align-self-center">
                <span className="align-self-center fs-4">
                  {" "}
                  {<IoMdAddCircle />}
                </span>
                <SecondaryText para="ADD FILE" className="px-2 fw-bold " />
              </div>
              <div className="align-self-center py-2 col-md-9 text-md-end">
                <CustomInput type="checkbox" />
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
                <CustomButtom
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

const mock = [
  { logo: <HiOutlineUser />, placeholder: "Name", type: "text", size: "6" },
  { logo: <HiOutlineMail />, placeholder: "Email", type: "email", size: "6" },
  { logo: <IoMdCall />, placeholder: "Mobile Number", type: "text", size: "6" },
  {
    logo: <RiApps2Line />,
    option: "Intrested In*",
    value1: "1",
    value: "2",
    value: "3",
    formselect: true,
  },
  {
    logo: <BiMessageAltDetail />,
    type: "number",
    placeholder: "Skype Id/Whatsapp No.",
    size: "6",
  },
  {
    logo: <BiDollar />,
    option: "Select Your Budge",
    value1: "10$",
    value2: "20$",
    value3: "30$",
    formselect: true,
  },
];
