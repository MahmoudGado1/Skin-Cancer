import "./Footer.css";
import Logo from "../../assets/logo/logo2_footer.png";
import { Button } from "react-bootstrap";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { TbWorld } from "react-icons/tb";
const Footer = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname.includes("/login") ||
      location.pathname.includes("/register") ? null : (
        <footer>
          <div className="footer-first">
            <div className="footer-img">
              <img src={Logo} alt="Footer-Logo" />
            </div>
            <div className="footer-text">
  <Link to={"/"}>Home</Link>
  <p>Navigate to our homepage and explore the features.</p>
  
  <Link to={"/skin-cancer"}>Skin Cancer</Link>
  <p>Learn about skin cancer and how to detect it early.</p>
  
  <Link to={"/doctors"}>Doctors</Link>
  <p>Find experienced doctors to guide your treatment.</p>
  
  <Link to={"/about"}>About Us</Link>
  <p>Discover our mission and the team behind this project.</p>
</div>


            <div className="footer-contact">
              <h2>
                +564 <span>7885 3222</span>
              </h2>
              <p>youremail@gmail.com</p>
              <div>
                <input type="text" placeholder="Email Address" />
                <Button>Send</Button>
              </div>
            </div>
          </div>
          <hr className="container" />
          <div className="footer-second container">
            <h5>Copyright ©2024 All rights reserved.</h5>
            <div>
              <Link>
                <Facebook />
              </Link>
              <Link>
                <Twitter />
              </Link>
              <Link>
                <Instagram />
              </Link>
              <Link>
                <TbWorld />
              </Link>
            </div>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
