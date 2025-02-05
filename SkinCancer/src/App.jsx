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
import ScrollToTop from "./components/Common/scrollatTop";
import NotFound from "./components/NotFound";
import MelanomaPage from "./pages/Melanoma/Melanoma";
import BasalCarcinomaPage from "./pages/BasalCarcinoma/BasalCarcinoma";
import MerkelCarcinomaPage from "./pages/MerkelCarcinoma/MerkelCarcinoma";
import SquamousCarcinomaPage from "./pages/SquamousCarcinoma/SquamousCarcinoma";
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
          <Route path="/basal-cell-carcinoma" element={<BasalCarcinomaPage />} />
          <Route path="/squamous-cell-carcinoma" element={<SquamousCarcinomaPage/>} />
          <Route path="/merkel-cell-carcinoma" element={<MerkelCarcinomaPage />} />
          <Route path="/melanoma" element={<MelanomaPage />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer/> 
        <ToastContainer position="top-center" />
      </Router>
    </>
  );
};
export default App;
