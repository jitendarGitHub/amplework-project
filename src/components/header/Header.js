import { Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = (props) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark">
      <div className="container-fluid">
        <Navbar.Brand>
          <img src={props.image} alt="" width={"200px"} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="responsive-navbar-nav "
        >
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="#deets">Who we are</Nav.Link>
            <Nav.Link href="#deets">What we do</Nav.Link>
            <Nav.Link href="#deets">Our culture</Nav.Link>
            <Nav.Link href="#deets">Work with us</Nav.Link>
            <Nav.Link href="#deets">Case studies</Nav.Link>
            <Nav.Link href="#deets">Blog</Nav.Link>
            <Nav.Link href="#deets">Contact Us</Nav.Link>
            <Button className="bg-transparent text-warning border-warning rounded-pill">
              INQUIRE NOW
            </Button>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
