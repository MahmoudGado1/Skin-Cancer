import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../../assets/logo/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Header.css";
function Header() {
  const location = useLocation();

  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const navigate = useNavigate();
  const handleClose = () => {
    setShowOffcanvas(false);
  };
  const handleShow = () => {
    setShowOffcanvas(true);
  };

  const handleLogin = () => {
    navigate("/login");
  };
  // Automatically close Offcanvas on large screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setShowOffcanvas(false); // Close Offcanvas when screen size is large or greater
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup on unmount
    };
  }, []);

  return (
    <header>
      {location.pathname.includes("/login") ||
      location.pathname.includes("/register") ? null : (
        <Navbar expand="lg" className="bg-body-tertiary ">
          <Container fluid>
            <Navbar.Brand>
              <Link to={"/"}>
                <img src={Logo} alt="medical" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="offcanvasNavbar"
              onClick={handleShow}
            />
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="start"
              show={showOffcanvas}
              onHide={handleClose}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">
                  <Link to={"/"}>
                    <img src={Logo} alt="medical" />
                  </Link>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <Nav.Link>
                    <Link to={"/"}>Home</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to={"/skin-Cancer"}>SkinCancer</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to={"/doctors"}>Doctors</Link>
                  </Nav.Link>
                  <Link>
                  </Link>
                  <NavDropdown title="Department" id="offcanvasNavbarDropdown">
                    <NavDropdown.Item>
                      <Link to={"/dentistry"}>Dentistry</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to={"/ent-specialists"}>ENT Specialists</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to={"/neuroantomy"}>Neuroantomy</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to={"/astrology"}>Astrology</Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link>
                    <Link to={"/about"}>About</Link>
                  </Nav.Link>
                </Nav>
                <Form className="d-flex me-4">
                  <Button onClick={handleLogin} variant="outline-primary">
                    Login
                  </Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      )}
    </header>
  );
}

export default Header;
