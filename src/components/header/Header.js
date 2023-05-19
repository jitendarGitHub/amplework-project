import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import { CustomButton } from "../index";
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
            <Nav className="ms-auto">
              <Nav.Link
                className="header-item fw-100  text-white"
                onClick={() => navigate("/who-we-are")}
              >
                Who we are
              </Nav.Link>
              <Nav.Link
                className="header-item fw-100  text-white"
                onClick={() => navigate("/what-we-do")}
              >
                What we do
              </Nav.Link>
              <Nav.Link
                className="header-item fw-100  text-white"
                onClick={() => navigate("/our-culture")}
              >
                Our culture
              </Nav.Link>
              <Nav.Link
                className="header-item fw-100  text-white"
                onClick={() => navigate("/who-we-are")}
              >
                Work with us
              </Nav.Link>
              <Nav.Link
                className="header-item fw-100  text-white"
                onClick={() => navigate("/what-we-do")}
              >
                Case studies
              </Nav.Link>
              <Nav.Link
                className="header-item fw-100  text-white"
                onClick={() => navigate("/our-culture")}
              >
                Blog
              </Nav.Link>
              <Nav.Link
                className="header-item fw-100  text-white"
                onClick={() => navigate("/who-we-are")}
              >
                Contact Us
              </Nav.Link>

              <CustomButton
                btnClass="inquire-btn bg-transparent  border-warning"
                value="INQUIRE NOW"
              />
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
