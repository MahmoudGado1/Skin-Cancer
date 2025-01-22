import "./Doctors.css";
import doctor1 from "../../assets/gallery/team1.png";
import doctor2 from "../../assets/gallery/team2.png";
import doctor3 from "../../assets/gallery/team3.png";
import { FaFacebookF, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Doctors = () => {
  return (
    <div className="doctors container">
      <div className="header-line">
        <span className="line"></span>
        <span className="text">Our Doctors</span>
      </div>
      <h1>Meet Our Doctors</h1>
      <div className="cards">
        <div className="card doctor-card">
          <img src={doctor1} alt="" />
          <div className="card-body">
            <h5 className="card-title">Dr. John Doe</h5>
            <p className="card-text">Speciality</p>
            <div className="social-media">
              <Link to="https://www.facebook.com/">
                <FaFacebookF />
              </Link>
              <Link to="https://www.instagram.com/">
                <FaInstagramSquare />
              </Link>
              <Link to="https://twitter.com/">
                <FaTwitter />
              </Link>
              <Link to="https://web.whatsapp.com/">
                <FaSquareWhatsapp />
              </Link>
            </div>
          </div>
        </div>
        <div className="card doctor-card">
          <img src={doctor2} alt="" />
          <div className="card-body">
            <h5 className="card-title">Dr. John Doe</h5>
            <p className="card-text">Speciality</p>
            <div className="social-media">
              <Link to="https://www.facebook.com/">
                <FaFacebookF />
              </Link>
              <Link to="https://www.instagram.com/">
                <FaInstagramSquare />
              </Link>
              <Link to="https://twitter.com/">
                <FaTwitter />
              </Link>
              <Link to="https://web.whatsapp.com/">
                <FaSquareWhatsapp />
              </Link>
            </div>
          </div>
        </div>
        <div className="card doctor-card">
          <img src={doctor3} alt="" />
          <div className="card-body">
            <h5 className="card-title">Dr. John Doe</h5>
            <p className="card-text">Speciality</p>
            <div className="social-media">
              <Link to="https://www.facebook.com/">
                <FaFacebookF />
              </Link>
              <Link to="https://www.instagram.com/">
                <FaInstagramSquare />
              </Link>
              <Link to="https://twitter.com/">
                <FaTwitter />
              </Link>
              <Link to="https://web.whatsapp.com/">
                <FaSquareWhatsapp />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Doctors;
