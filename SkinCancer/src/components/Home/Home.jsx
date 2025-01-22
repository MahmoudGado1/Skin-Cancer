import { Button } from "react-bootstrap";
import "./Home.css";
import hero from "../../assets/hero/h1_hero.png";
import { useNavigate } from "react-router-dom";
import About from "../About/About";
import Department from "../Departments/Department";
import ImageFixed from "../Common/ImageFixed";
import Doctors from "../Doctors/Doctors";
import AccordionExample from "../Common/Accordion";
const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <main>
        <div className="container ">
          <div className="contant">
            <div className="header-line">
              <span className="line" />
              <span className="text">Advancing Medical Expertise</span>
            </div>
            <h1 className="cd-headline">
            Empowering{" "}
              <strong className="text-primary">Healthcare Professionals</strong>
            </h1>
            <p>
            Explore evidence-based resources, advanced diagnostic tools, <br/> and
              treatment guidelines tailored for healthcare providers managing
              skin cancer cases.
            </p>
            <Button
              onClick={() => navigate("/skin-cancer")}
              className="btn-appoint"
            >
              Check Your Skin
            </Button>
          </div>
        </div>
        <img src={hero} alt="hero" />
      </main>
      <About />
      <Department/>
      <ImageFixed/>
      <Doctors/>
      <AccordionExample/>
    </>
  );
};

export default Home;
