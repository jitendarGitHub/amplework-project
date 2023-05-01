import { Card, CardGroup } from "react-bootstrap";
import "../softwaremaintenance.css";
import {
  RoleApplicationSupport,
  RoleDevOPS,
  RoleOUTLINE,
  RoleSoftwareDeveloper,
} from "../../../../assets";

const RoleInSoftwareMaintenance = () => {
  const RoleCard = (props) => {
    return (
      <>
        <Card
          className="border-0 text-start "
          style={{
            backgroundColor: `${props.bgcolor}`,
            color: `${props.color}`,
          }}
        >
          <div className="d-flex justify-content-around">
            <div className="">
              <h5 className=" p-0">{props.title}</h5>
              <ul className="list-color p-2">
                <li>{props.list1} </li>
                <li>{props.list2}</li>
                <li>{props.list3}</li>
                <li> {props.list4}</li>
              </ul>
            </div>
            <div className="align-self-center">
              <img src={props.img} width={""} className="img-fluid" />
            </div>
          </div>
        </Card>
      </>
    );
  };
  return (
    <>
      <div className="container text-center">
        <h2>Roles in Our Software Maintenance Teams</h2>
        <p className="p-3">
          We keep add-on new roles and eliminate obstacle roles for the software
          maintenance. Below mentioned roles are the backbone of our software
          maintenance programs.
        </p>
        <CardGroup>
          <RoleCard
            title="Application Support Engineers"
            list1="They monitor technicalities."
            list2="They ensure technical support."
            list3="Troubleshooting of software functio"
            list4="Providing consultancy to clients."
            img={RoleApplicationSupport}
            bgcolor="rgb(248 248 248)"
          />
          <RoleCard
            title="Software Developers"
            list1="  Fixing issues on code and database levels. "
            list2="New software components or features. "
            list3="Software customizations and integrations. "
            list4="Performing unit different unit testing functions."
            img={RoleSoftwareDeveloper}
            bgcolor="rgb(3 45 226)"
            color="white"
          />
        </CardGroup>
        <CardGroup>
          <RoleCard
            title="DevOps Engineers"
            list1="   Managing physical & virtual services. "
            list2="Configuring & optimizing cloud services. "
            list3="Solving infrastructure issues. "
            list4="Automating the update and evaluation part."
            img={RoleDevOPS}
            bgcolor="rgb(3 45 226)"
            color="white"
          />
          <RoleCard
            title="Program Test Engineers"
            list1="   They conduct manual & automated tests."
            list2="Responsible for testing & validating software. "
            list3="Integrate new changes in the software process. "
            list4="Responsible for software security operations."
            img={RoleOUTLINE}
            bgcolor="rgb(248 248 248)"
          />
        </CardGroup>
      </div>
    </>
  );
};

export default RoleInSoftwareMaintenance;
