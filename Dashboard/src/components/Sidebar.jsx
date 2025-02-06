import { useState } from "react";
import { FaUserDoctor } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoPersonAddSharp } from "react-icons/io5";
import { MdAddModerator } from "react-icons/md";
import { RiLoginCircleFill } from "react-icons/ri";
import { TiHome } from "react-icons/ti";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [show, setShow] = useState(false);
  const navigateTo = useNavigate();
  const location = useLocation();

  const handleLogin = async () => {
    navigateTo("/login");
    setShow(!show);
  };

  const gotoHomePage = () => {
    navigateTo("/");
    setShow(!show);
  };
  const gotoDoctorsPage = () => {
    navigateTo("/doctors");
    setShow(!show);
  };
  const gotoAddNewDoctor = () => {
    navigateTo("/doctor/addnew");
    setShow(!show);
  };
  const gotoAddNewAdmin = () => {
    navigateTo("/admin/addnew");
    setShow(!show);
  };

  // Hide sidebar on login page
  if (location.pathname === "/login") {
    return null;
  }

  return (
    <>
      <nav className={show ? "show sidebar" : "sidebar"}>
        <div className="links">
          <TiHome
            className={location.pathname === "/" ? "icon active" : "icon"}
            onClick={gotoHomePage}
          />
          <FaUserDoctor
            className={location.pathname === "/doctors" ? "icon active" : "icon"}
            onClick={gotoDoctorsPage}
          />
          <MdAddModerator
            className={location.pathname === "/admin/addnew" ? "icon active" : "icon"}
            onClick={gotoAddNewAdmin}
          />
          <IoPersonAddSharp
            className={location.pathname === "/doctor/addnew" ? "icon active" : "icon"}
            onClick={gotoAddNewDoctor}
          />
          <RiLoginCircleFill
            className={location.pathname === "/login" ? "icon active" : "icon"}
            onClick={handleLogin}
          />
        </div>
      </nav>
      <div className="wrapper">
        <GiHamburgerMenu className="hamburger" onClick={() => setShow(!show)} />
      </div>
    </>
  );
};

export default Sidebar;
