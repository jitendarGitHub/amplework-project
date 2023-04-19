import { Card, CardGroup, Container } from "react-bootstrap";
import "../maintenanceservice/maintenance.css";
import { FaUserCog } from "@react-icons/all-files/fa/FaUserCircle";
const Maintenance = () => {
  return (
    <>
      <Container>
        <CardGroup>
          <Card className="align-self-center justify-content-center">
            <div className="hexagon ">
              {/* <h1> {<FaUserCog />}</h1> */}
              <span>Production & User Managemwnt</span>
            </div>
          </Card>
        </CardGroup>
      </Container>
    </>
  );
};
export default Maintenance;
