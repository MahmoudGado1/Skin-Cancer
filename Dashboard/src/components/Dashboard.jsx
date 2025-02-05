/* eslint-disable no-unused-vars */
import { useState } from "react";

import Skin from "/src/assets/OIP.jpeg"
import { doctors } from "./Doctors";

const Dashboard = () => {
  const [appointments, setAppointments] = useState([
    {
      name: "mahmoud",
      age:30,
      phone:"029394893424",
      address:"Cairo Egypt",
      doctor:"ali",
      status:"Malignant",
      img:Skin
    },
    {
      name: "ali",
      age:30,
      phone:"029394893424",
      address:"Cairo Egypt",
      doctor:"ahmed",
      status:"Benign",
      img:Skin
    },
    {
      name: "mohamed",
      age:30,
      phone:"029394893424",
      address:"Cairo Egypt",
      doctor:"ali",
      status:"Malignant",
      img:Skin
    },
    {
      name: "eslam",
      age:30,
      phone:"029394893424",
      address:"Cairo Egypt",
      doctor:"ali",
      status:"Malignant",
      img:Skin
    },
  ]);


  return (
    <>
      <section className="dashboard page">
        <div className="banner">
          <div className="firstBox">
            <img src="/doc.png" alt="docImg" />
            <div className="content">
              <div>
                <p>Hello,</p>
                <h5>Mahmoud</h5>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Facilis, nam molestias. Eaque molestiae ipsam commodi neque.
                
              </p>
            </div>
          </div>
          <div className="secondBox">
            <p>Total Skin Detection</p>
            <h3>{appointments.length}</h3>
          </div>
          <div className="thirdBox">
            <p>Registered Doctors</p>
            <h3>{doctors.length}</h3>
          </div>
        </div>
        <div className="banner">
          <h5>Patient Data</h5>
          <div className="table-container">
           
              <table>
                <thead>
                  <tr>
                    <th>Patient</th>
                    <th>Phone</th>
                    <th>Doctor</th>
                    <th>Age</th>
                    <th>Status</th>
                    <th>Address</th>
                    <th>Skin</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map((appointment,index) => (
                    <tr key={index}>
                      <td>{`${appointment.name}`}</td>
                      <td>{appointment.phone}</td>
                      <td>{`${appointment.doctor} `}</td>
                      <td>{appointment.age}</td>
                      <td>
                        {appointment.status}
                      </td>
                      <td>
                        {appointment.address}
                      </td>
                      <td className="img-skin">
                        <img src={appointment.img} alt="skin" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
