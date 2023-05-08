import { Button } from "react-bootstrap";
import "../enterpriseweb.css";
import { DefaultButton } from "../../../../components";

const WebDevelopment = (props) => {
  return (
    <section style={{ backgroundColor: `${props.bgcolor}` }}>
      <div className="container text-center">
        <h2>{props.title}</h2>
        <p className="p-4 development-desc">{props.desc}</p>
        <div
          className="row justify-content-center text-start"
          style={{ flexDirection: `${props.columnreverse}` }}
        >
          <div className="col-lg-5 p-3 pt-0">
            <img src={props.image} width={"100%"} />
          </div>
          <div className="col-lg-5 ">
            <h3 className=" list-about text-center text-md-start">
              {props.about}
            </h3>
            <p className="list-style">
              <img src={props.listimg} alt="" width={"15px"} />
              &nbsp;&nbsp;{props.list1}
            </p>
            <p className="list-style">
              <img src={props.listimg} alt="" width={"15px"} />
              &nbsp;&nbsp; {props.list2}
            </p>
            <p className="list-style">
              <img src={props.listimg} alt="" width={"15px"} />
              &nbsp;&nbsp; {props.list3}
            </p>
            <p className="list-style">
              <img src={props.listimg} alt="" width={"15px"} />
              &nbsp;&nbsp; {props.list4}
            </p>
            <p className="list-style">
              <img src={props.listimg} alt="" width={"15px"} />
              &nbsp;&nbsp; {props.list5}
            </p>
            <div className="enterprise-btn text-center text-md-start">
              <DefaultButton
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
