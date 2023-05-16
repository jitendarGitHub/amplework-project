import "../enterpriseweb.css";
import { CustomButton } from "../../../../components";
import { PrimaryText, SecondaryText } from "../../../../components/text";
import { Image } from "react-bootstrap";

const WebDevelopment = (props) => {
  return (
    <section style={{ backgroundColor: `${props.bgcolor}` }}>
      <div className="container text-center">
        <PrimaryText heading={props.title} />
        <SecondaryText className="p-4 developement-desc" para={props.desc} />

        <div
          className="row justify-content-center text-start"
          style={{ flexDirection: `${props.columnreverse}` }}
        >
          <div className="col-lg-5 p-3 pt-0">
            <Image src={props.image} width={"100%"} />
          </div>
          <div className="col-lg-5 ">
            <PrimaryText
              heading={props.about}
              className=" list-about text-center text-md-start"
            />
            <p className="list-style">
              <Image src={props.listimg} alt="" width={"15px"} />
              &nbsp;&nbsp;{props.list1}
            </p>
            <p className="list-style">
              <Image src={props.listimg} alt="" width={"15px"} />
              &nbsp;&nbsp; {props.list2}
            </p>
            <p className="list-style">
              <Image src={props.listimg} alt="" width={"15px"} />
              &nbsp;&nbsp; {props.list3}
            </p>
            <p className="list-style">
              <Image src={props.listimg} alt="" width={"15px"} />
              &nbsp;&nbsp; {props.list4}
            </p>
            <p className="list-style">
              <Image src={props.listimg} alt="" width={"15px"} />
              &nbsp;&nbsp; {props.list5}
            </p>
            <div className="enterprise-btn text-center text-md-start">
              <CustomButton
                btnClass="btn bg-primary text-white mt-3"
                value="LET`S TALK"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WebDevelopment;
