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
  const navigate = useNavigate();
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);
  const handleLogin = () => navigate("/login");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setShowOffcanvas(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to check if link is active
  const isActive = (path) => location.pathname === path ? "active-link" : "";

  return (
    <header>
      {location.pathname.includes("/login") || location.pathname.includes("/register") ? null : (
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand>
              <Link to={"/"}>
                <img src={Logo} alt="medical" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} />
            <Navbar.Offcanvas id="offcanvasNavbar" placement="start" show={showOffcanvas} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                  <Link to={"/"}>
                    <img src={Logo} alt="medical" />
                  </Link>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <Nav.Link as="div">
                    <Link to="/" className={isActive("/")} onClick={handleClose}>
                      Home
                    </Link>
                  </Nav.Link>
                  <Nav.Link as="div">
                    <Link to="/skin-Cancer" className={isActive("/skin-Cancer")} onClick={handleClose}>
                      Skin Cancer
                    </Link>
                  </Nav.Link>
                  <Nav.Link as="div">
                    <Link to="/doctors" className={isActive("/doctors")} onClick={handleClose}>
                      Doctors
                    </Link>
                  </Nav.Link>

                  <NavDropdown title="Type Of Disease" id="offcanvasNavbarDropdown">
                    <NavDropdown.Item>
                      <Link to="/basal-cell-carcinoma" className={isActive("/basal-cell-carcinoma")} onClick={handleClose}>
                        Basal Cell Carcinoma
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/squamous-cell-carcinoma" className={isActive("/squamous-cell-carcinoma")} onClick={handleClose}>
                        Squamous Cell Carcinoma
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/melanoma" className={isActive("/melanoma")} onClick={handleClose}>
                        Melanoma
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/merkel-cell-carcinoma" className={isActive("/merkel-cell-carcinoma")} onClick={handleClose}>
                        Merkel Cell Carcinoma
                      </Link>
                    </NavDropdown.Item>
                  </NavDropdown>

                  <Nav.Link as="div">
                    <Link to="/about" className={isActive("/about")} onClick={handleClose}>
                      About
                    </Link>
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

