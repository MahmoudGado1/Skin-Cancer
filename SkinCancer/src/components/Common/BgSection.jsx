/* eslint-disable react/prop-types */
import ImageSection from "../../assets/gallery/section_bg01.png";
import "./BgSection.css";
import BreadcrumbExample from "./Breadcrumb";
const BgSection = ({ message,position }) => {
  return (
    <div className="about-image">
      <BreadcrumbExample position={position}/>
      <h1>{message}</h1>
      <div className="bg-section">
        <div></div>
        <img src={ImageSection} alt="section" />
      </div>
    </div>
  );
};

export default BgSection;
