import {  useState } from "react";
import Logo from "../assets/logo/logo.png"
import { PiCaretCircleUpDuotone } from "react-icons/pi";
import { toast } from "react-toastify";

const AddNewAdmin = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");

  const handleAddNewAdmin=async(e)=>{
    e.preventDefault();
    toast.success("Add Admin successful!", {
          position: "top-center",
          style: {
            color: "#0d6efd",
          },
          icon: <PiCaretCircleUpDuotone />,
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
  }

  return (
    <section className="page">
      <section className="container form-component add-admin-form">
      <img src={Logo} alt="logo" className="logo"/>
        <h1 className="form-title">ADD NEW ADMIN</h1>
        <form onSubmit={handleAddNewAdmin}>
          <div>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="number"
              placeholder="Mobile Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div>
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div style={{ justifyContent: "center", alignItems: "center" }}>
            <button type="submit">ADD NEW ADMIN</button>
          </div>
        </form>
      </section>
    </section>
  );
};

export default AddNewAdmin;
