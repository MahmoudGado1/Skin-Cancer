export const doctors=[
  {
    firstName: "mahmoud",
    lastName:"gado",
    email:"mahmoud@gmail.com",
    phone:"029394893424",
    age:"33",
    gender:"Male"
  },
  {
    firstName: "mahmoud",
    lastName:"gado",
    email:"mahmoud@gmail.com",
    phone:"029394893424",
    age:"33",
    gender:"Male"
  },
  {
    firstName: "mahmoud",
    lastName:"gado",
    email:"mahmoud@gmail.com",
    phone:"029394893424",
    age:"33",
    gender:"Male"
  },
  {
    firstName: "mahmoud",
    lastName:"gado",
    email:"mahmoud@gmail.com",
    phone:"029394893424",
    age:"33",
    gender:"Male"
  },
]
const Doctors = () => {


  return (
    <section className="page doctors">
      <h1>DOCTORS</h1>
      <div className="banner">
        {doctors.map((element, index) => (
          <div key={index} className="card1">
            <img src={"/doc6.jpg"} alt="doctor avatar" />
            <h4>{`${element.firstName} ${element.lastName}`}</h4>
            <div className="details">
              <p>
                Email: <span>{element.email}</span>
              </p>
              <p>
                Phone: <span>{element.phone}</span>
              </p>
              <p>
                Age: <span>{element.age}</span>
              </p>
              <p>
                Gender: <span>{element.gender}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Doctors;
