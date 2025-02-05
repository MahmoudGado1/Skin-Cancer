export const doctors = [
  {
    firstName: "Mohamed",
    lastName: "Ali",
    email: "moali@gmail.com",
    phone: "029394893424",
    age: "40",
    gender: "Male",
    img: "/images/doc8.jpg", // ✅ Correct path
  },
  {
    firstName: "Sara",
    lastName: "Ahmed",
    email: "sara.ahmed@gmail.com",
    phone: "029394893425",
    age: "35",
    gender: "Female",
    img: "/images/doc5.jpg", // ✅ Correct path
  },
  { 
    firstName: "Omar",
    lastName: "Khaled",
    email: "omar.khaled@gmail.com",
    phone: "029394893426",
    age: "45",
    gender: "Male",
    img: "/images/doc6.jpg", // ✅ Correct path
  },
  {
    firstName: "Aisha",
    lastName: "Hassan",
    email: "aisha.hassan@gmail.com",
    phone: "029394893427",
    age: "38",
    gender: "Female",
    img: "/images/doc2.jpg", // ✅ Correct path
  },
];


const Doctors = () => {
  return (
    <section className="page doctors">
      <h1>DOCTORS</h1> 
      <div className="banner">
        {doctors.map((element, index) => (
          <div key={index} className="card1">
            <img src={element.img} alt="doctor avatar" />
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
