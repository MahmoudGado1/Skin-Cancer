import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import Logo from "../../assets/logo/logo.png";
import { toast } from "react-toastify";
import { CheckCircle2Icon } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    toast.success("Login successful!", {
      position: "top-center",
      style: {
        color: "#0d6efd",
      },
      icon: <CheckCircle2Icon />,
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progressStyle: {
        background: 'linear-gradient(to right, #87CEEB, #0d6efd)',
        height: '4px',
      },
    });
    navigate("/");
  };

  return (
    <div className="page-container">
      {/* Left Section */}
      <div className="left-section">
        <Link to={"/"}>
          <img src={Logo} alt="medical" />
        </Link>
        <div>
          <h1>Welcome Back!</h1>
          <p>Log in to access your account and explore more features.</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <Link className="a1" to={"/"}>
          <img src={Logo} alt="medical" />
        </Link>
        <div className="login-container">
          <h2>Sign In</h2>
          <p>Please Login To Continue</p>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="link-container">
              <p>Not Registered?</p>
              <Link to={"/register"}>Register Now</Link>
            </div>
            <div className="button-container">
              <Button type="submit" className="w-100">
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
