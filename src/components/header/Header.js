import { Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark">
        <div className="container-fluid">
          <Navbar.Brand>
            <img src={props.image} alt="" width={"250px"} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="responsive-navbar-nav "
          >
            {/* <Nav className="me-auto bg-warning"></Nav> */}
            <Nav className="ms-auto">
              <Nav.Link
                className="header-item fw-100  text-white"
                onClick={() => navigate("/enterprise-web-development")}
              >
                Who we are
              </Nav.Link>
              <Nav.Link
                className="header-item fw-100  text-white"
                onClick={() => navigate("/enterprise-mobility")}
              >
                What we do
              </Nav.Link>
              <Nav.Link
                className="header-item fw-100  text-white"
                onClick={() => navigate("/software-maintenance-support")}
              >
                Our culture
              </Nav.Link>
              <Nav.Link
                className="header-item fw-100  text-white"
                onClick={() => navigate("/enterprise-web-development")}
              >
                Work with us
              </Nav.Link>
              <Nav.Link
                className="header-item fw-100  text-white"
                onClick={() => navigate("/enterprise-mobility")}
              >
                Case studies
              </Nav.Link>
              <Nav.Link
                className="header-item fw-100  text-white"
                onClick={() => navigate("/software-maintenance-support")}
              >
                Blog
              </Nav.Link>
              <Nav.Link
                className="header-item fw-100  text-white"
                onClick={() => navigate("/enterprise-web-development")}
              >
                Contact Us
              </Nav.Link>
              <Button className="inquire-btn bg-transparent text-warning border-warning">
                INQUIRE NOW
              </Button>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
