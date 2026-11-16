import "../../css/team.css";

import {
  FaCircleCheck,
  FaStar,
} from "react-icons/fa6";

const doctors = [
  {
    name: "Dr. Gunjan Agarwal",
    specialty: "FELLOWSHIP IN REPRODUCTIVE MEDICINE",
    experience: "20+ Years Experience",
    image: "/images/doctor1.jpg",
    availability: "Available Today",
    role: "Senior IVF & Infertility Specialist",
  },
  {
    name: "Dr. Ashwini Sharma",
    specialty: "SENIOR GYNECOLOGIST & LAPAROSCOPIC SURGEON",
    experience: "12+ Years Experience",
    image: "/images/doctor2.jpg",
    availability: "Available Today",
    role: "High-Risk Pregnancy & Endo",
  },
  {
    name: "Dr. Ashish Sharma",
    specialty: "CONSULTANT EMBRYOLOGIST & ANDROLOGIST",
    experience: "10+ Years Experience",
    image: "/images/doctor3.jpg",
    availability: "Available for Consult",
    role: "Clinical Embryology Lead",
  },
  {
    name: "Dr. Aditya Shrimal",
    specialty: "REPRODUCTIVE MEDICINE SPECIALIST",
    experience: "10+ Years Experience",
    image: "/images/doctor4.jpg",
    availability: "Available Today",
    role: "Expert Fertility Consultant",
  },
];

function Team() {
  return (
    <section className="doctors-section">

      {/* ================= HEADING ================= */}

      <div className="doctors-heading">

        <div className="heading-badge">
          <FaCircleCheck />
          <span>
            Dedicated Fertility Care Team • Anik IVF
          </span>
        </div>

        <h2>
          Meet Our <span>Team</span>
        </h2>

        <p>
          Our comprehensive clinical and embryology team of reproductive
          medicine specialists provides compassionate, world-class healthcare
          using cutting-edge ART technology and decades of expertise.
        </p>

      </div>


      {/* ================= DOCTORS ================= */}

      <div className="doctors-container">

        {doctors.map((doctor, index) => (

          <div className="doctor-card" key={index}>

            {/* Top Red Line */}
            <div className="card-top-line"></div>


            {/* Availability */}
            <div className="availability">
              <span></span>
              {doctor.availability}
            </div>


            {/* Doctor Image */}
            <div className="doctor-image-wrapper">

              <div className="doctor-image-inner">

                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="doctor-image"
                />

              </div>

            </div>


            {/* Doctor Name */}
            <h3>
              {doctor.name}
            </h3>


            {/* Specialty */}
            <p className="specialty-text">
              {doctor.specialty}
            </p>


            {/* Experience */}
            <div className="experience">

              <FaStar />

              <span>
                {doctor.experience}
              </span>

            </div>


            {/* Role */}
            <div className="specialty-box">
              {doctor.role}
            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Team;