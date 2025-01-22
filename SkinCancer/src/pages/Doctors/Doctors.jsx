import BgSection from "../../components/Common/BgSection";
import Doctors from "../../components/Doctors/Doctors";

const DoctorsPage = () => {
  return (
    <div>
      <BgSection message={"Doctors"} position={"Doctors"}/>
      <Doctors />
    </div>
  );
};

export default DoctorsPage;
