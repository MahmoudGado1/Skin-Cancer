import { Card } from "react-bootstrap";
import "./Department.css";
import { Link } from "react-router-dom";
import { TbDental } from "react-icons/tb";
import { Bone, EarIcon } from "lucide-react";
import { BsLungsFill } from "react-icons/bs";
import { FaHandsWash } from "react-icons/fa";
const Department = () => {

  return (
    <div className="department container">
      <div className="department-content">
        <div className="header-line line-depart">
          <span className="line" />
          <span className="text">Our Departments</span>
        </div>
        <h1>Our Medical Services</h1>
        <div className="cards">
        <Link to={"/skin-cancer"}>
            <Card style={{ width: "11rem" }}>
              <FaHandsWash 
              className="icon"/>{" "}
              <Card.Body>
                <Card.Title>Skin Cancer</Card.Title>
              </Card.Body>
            </Card>
          </Link>
          <Link to={"/dentistry"}>
            <Card style={{ width: "11rem" }}>
              <TbDental className="icon"/>{" "}
              <Card.Body>
                <Card.Title>Dentistry</Card.Title>
              </Card.Body>
            </Card>
          </Link>
          <Link to={"/ent-specialists"}>
            <Card style={{ width: "11rem" }}>
              <EarIcon className="icon"/>{" "}
              <Card.Body>
                <Card.Title>ENT Specialists</Card.Title>
              </Card.Body>
            </Card>
          </Link>
          <Link to={"/neuroantomy"}>
            <Card style={{ width: "11rem" }}>
              <BsLungsFill className="icon"/>{" "}
              <Card.Body>
                <Card.Title>Neuroantomy</Card.Title>
              </Card.Body>
            </Card>
          </Link>
          <Link to={"/astrology"}>
            <Card style={{ width: "11rem" }}>
              <Bone className="icon"/>{" "}
              <Card.Body>
                <Card.Title>Astrology</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Department;
