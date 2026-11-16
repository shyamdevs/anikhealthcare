import { Link } from "react-router-dom";
import "../../css/wel.css";
import clinicVideo from "../../assets/g8.mp4";

import {
  FaClock,
  FaShieldHeart,
  FaFlask,
  FaHeart,
  FaLocationDot,
  FaPhone,
  FaArrowRight,
} from "react-icons/fa6";

const features = [
  {
    icon: <FaClock />,
    title: "20+ Years Mastery",
    subtitle: "Senior Reproductive Specialist",
  },
  {
    icon: <FaShieldHeart />,
    title: "ART & ICMR Compliant",
    subtitle: "Certified Modern Cleanroom",
  },
  {
    icon: <FaFlask />,
    title: "Fellowship Trained",
    subtitle: "Reproductive Medicine Expert",
  },
  {
    icon: <FaHeart />,
    title: "Tailored Protocols",
    subtitle: "Zero Universal Templating",
  },
];

function Wel() {
  return (
    <section className="welcome-section">

      {/* Heading */}
      <div className="welcome-heading">
        <h1>
          Welcome to <span>Anik IVF</span> Center
        </h1>

        <p>
          Jaipur’s premier destination for high-success reproductive medicine
          &amp; compassionate maternal care
        </p>
      </div>

      {/* Main Content */}
      <div className="welcome-container">

        {/* Left Content */}
        <div className="welcome-left">

          <div className="welcome-text">
            <p>
              Welcome to <strong>Anik IVF</strong>, Jaipur’s trusted advanced
              fertility center. Founded and led by{" "}
              <span>Dr. Gunjan Agarwal</span>, a renowned fellowship-trained IVF
              specialist with over{" "}
              <strong>20+ years of dedicated clinical experience</strong> in
              reproductive medicine, our center empowers aspiring parents with
              individualized medical excellence and genuine hope.
            </p>

            <p>
              Situated at Rani Sati Nagar, Ajmer Road, Jaipur, our center
              bridges world-class clinical protocols, transparent pricing, and
              gentle, stress-free care. Every reproductive journey is uniquely
              evaluated to ensure maximized success rates through cutting-edge
              embryology standards and compassionate guidance.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="feature-grid">
            {features.map((feature, index) => (
              <div className="feature-card" key={index}>

                <div className="feature-icon">
                  {feature.icon}
                </div>

                <div className="feature-content">
                  <h3>{feature.title}</h3>
                  <p>{feature.subtitle}</p>
                </div>

              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="welcome-buttons">

            <Link to="/contact" className="consult-btn">
              Consult Dr. Gunjan Agarwal
              <FaArrowRight />
            </Link>

            <Link to="/services" className="treatment-btn">
              Explore Treatments
            </Link>

          </div>
        </div>

        {/* Right Video Card */}
        <div className="video-card">

          {/* Browser Header */}
          <div className="video-browser">

            <div className="browser-dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>

            <span className="browser-title">
              Official Facility Tour
            </span>

            <span className="verified">
              ✓ Verified Clinic Lab
            </span>

          </div>

          {/* YouTube Video */}
          <div className="youtube-content">

           <video
  className="youtube-video w-full h-full object-cover rounded-xl"
  controls
  playsInline
  poster="../assets/video-thumbnail.jpg" // Optional poster thumbnail
>
  <source src={clinicVideo} type="video/mp4" />
  Your browser does not support the video tag.
</video>

          </div>

          {/* Video Footer */}
          <div className="video-footer">

            <div>
              <FaLocationDot />
              <span>
                382, Rani Sati Nagar, Ajmer Road, Jaipur, Rajasthan
              </span>
            </div>

            <div>
              <FaPhone />
              <span>
                +91 9660760713 &nbsp; / &nbsp; 9521207070
              </span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Wel;