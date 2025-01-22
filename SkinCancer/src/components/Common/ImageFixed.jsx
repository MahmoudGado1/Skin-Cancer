import { Carousel } from "react-bootstrap";
import ImageFix from "../../assets/gallery/section_bg01.png";
import patiant from "../../assets/blog/author.png";
import patiant2 from "../../assets/gallery/Homepage_testi.png";
import patiant3 from "../../assets/comment/comment_2.png";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Star } from "lucide-react";
import "./ImageFixed.css";

const ImageFixed = () => {
  return (
    <div className="image-fixed">
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <div className="carousel-img">
            <img
              className="d-block w-100 back"
              src={ImageFix}
              alt="First slide"
            />
            {/* Overlay Content */}
            <div className="carousel-overlay">
              <div className="carousel-content">
                <div className="patiant">
                  <img src={patiant} alt="Patient" />
                  <h3>Mario</h3>
                </div>
                <div className="review">
                  <h1>Fantastic Response!</h1>
                  <div className="star">
                    <FaStar size={20} />
                    <FaStar size={20} />
                    <FaStar size={20} />
                    <FaStarHalfAlt size={20} />
                    <Star size={20} />
                  </div>
                  <p>
                    This medical and health care facility distinguishes itself
                    from the competition by providing technologically advanced
                    medical and health care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-img">
            <img
              className="d-block w-100 back"
              src={ImageFix}
              alt="First slide"
            />
            {/* Overlay Content */}
            <div className="carousel-overlay">
              <div className="carousel-content">
                <div className="patiant">
                  <img src={patiant2} alt="Patient" />
                  <h3>John</h3>
                </div>
                <div className="review">
                  <h1>Fantastic Response!</h1>
                  <div className="star">
                    <FaStar size={20} />
                    <FaStar size={20} />
                    <FaStar size={20} />
                    <FaStarHalfAlt size={20} />
                    <Star size={20} />
                  </div>
                  <p>
                    This medical and health care facility distinguishes itself
                    from the competition by providing technologically advanced
                    medical and health care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-img">
            <img
              className="d-block w-100 back"
              src={ImageFix}
              alt="First slide"
            />
            {/* Overlay Content */}
            <div className="carousel-overlay">
              <div className="carousel-content">
                <div className="patiant">
                  <img src={patiant3} alt="Patient" />
                  <h3>Ali</h3>
                </div>
                <div className="review">
                  <h1>Fantastic Response!</h1>
                  <div className="star">
                    <FaStar size={20} />
                    <FaStar size={20} />
                    <FaStar size={20} />
                    <FaStarHalfAlt size={20} />
                    <Star size={20} />
                  </div>
                  <p>
                    This medical and health care facility distinguishes itself
                    from the competition by providing technologically advanced
                    medical and health care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ImageFixed;
