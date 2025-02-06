import { Button } from "react-bootstrap";
import "./About.css";
import About1 from "../../assets/gallery/health-care.png";
import { ArrowRight, Layers } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="about container">
      <div className="leftAbout">
        <div className="header-line">
          <span className="line" />
          <span className="text">About Our Company</span>
        </div>
        <div className="aboutBody">
          <h1>We are developing a healthcare system.</h1>
          <p>
            We think that everyone should have easy access to excellent
            healthcare. Our aim is to make the procedure as simple as possible
            for our patients and to offer treatment no matter where they are —
            in person or at their convenience.
          </p>
          <Button onClick={() => navigate("/doctors")}>
            Find Doctor{" "}
            <span>
              {" "}
              <ArrowRight />{" "}
            </span>
          </Button>
          {location.pathname.includes("/about") ? null : (
            <Button onClick={() => navigate("/about")} variant="secondary">
              Go To About{" "}
              <span>
                <Layers />
              </span>{" "}
            </Button>
          )}
        </div>
      </div>
      <div className="rightAbout">
        <img src={About1} alt="About1" className="img1" />
      </div>
    </div>
  );
};

export default About;
