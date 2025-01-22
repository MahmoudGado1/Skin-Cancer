import About from "../../components/About/About";
import BgSection from "../../components/Common/BgSection";

const AboutPage = () => {
  return (
    <div>
      <BgSection message={"About Us"} position={"About Us"}/>
      <About />
    </div>
  );
};

export default AboutPage;
