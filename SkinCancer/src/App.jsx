import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./pages/Home/Home";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import AboutPage from "./pages/About/About";
import SkinCancerPage from "./pages/SkinCancer/SkinCancer";
import Header from "./components/Header/Header";
import DoctorsPage from "./pages/Doctors/Doctors";
import Footer from "./components/Footer/Footer";
import ENTPage from "./pages/ENT/ENT";
import DentistryPage from "./pages/Dentistry/Dentistry";
import NeuroantomyPage from "./pages/Neuroantomy/Neuroantomy";
import AstrologyPage from "./pages/Astrology/Astrology";
import ScrollToTop from "./components/Common/scrollatTop";
const App = () => {
  return (
    <>
      <Router>
        <ScrollToTop/>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skin-cancer" element={<SkinCancerPage />} />
          <Route path="/dentistry" element={<DentistryPage />} />
          <Route path="/ent-specialists" element={<ENTPage />} />
          <Route path="/neuroantomy" element={<NeuroantomyPage />} />
          <Route path="/astrology" element={<AstrologyPage />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer/> 
        <ToastContainer position="top-center" />
      </Router>
    </>
  );
};
export default App;
