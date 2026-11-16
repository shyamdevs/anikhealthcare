import { Link } from "react-router-dom";
import "../../css/healthcare.css";

import hospitalImg from "../../assets/modern_multi_storey_flagship_multispeciality_hospital_and_fertility_centre.png";
import doctorImg from "../../assets/female_senior_doctor_specialist_in_clinical_consultation_room_reviewing.png";
import opdImg from "../../assets/advanced_modular_operating_theatre_and_intensive_critical_care_unit_ot_icu.png";
import labImg from "../../assets/diverse_multidisciplinary_board_of_medical_specialists_and_fertility_doctors.png";
import teamImg from "../../assets/professional_medical_team_portrait_of_senior_doctors_fertility_specialists_and.png";


const milestones = [
  {
    date: "7 AUGUST 2024",
    title: "Anik Healthcare Hospital Founded",
    text: "Anik Healthcare Solutions was established with a clear vision of delivering ethical, compassionate, and specialized healthcare aligned with modern reproductive medicine.",
    type: "text",
  },

  {
    date: "7 AUGUST 2024 • INCEPTION",
    title: "Flagship Healthcare & Fertility Facility",
    image: hospitalImg,
    type: "image",
  },

  {
    date: "7 AUGUST 2024 • CLINICAL CARE",
    title: "Senior Specialists & Fertility Consultants",
    image: doctorImg,
    type: "image",
  },

  {
    date: "7 AUGUST 2024",
    title: "OPD & Patient Services Started",
    text: "Comprehensive outpatient consultation and multidisciplinary healthcare services officially commenced, supported by experienced clinical specialists focused on personalized care.",
    type: "text",
  },

  {
    date: "OCTOBER 2024",
    title: "Advanced OT & ICU Operational",
    text: "State-of-the-art operation theatres and critical care facilities became fully operational with advanced infrastructure and patient safety systems.",
    type: "text",
  },

  {
    date: "OCTOBER 2024 • CLINICAL CARE",
    title: "Modular OT & Multi-bed Critical Care Unit",
    image: opdImg,
    type: "image",
  },

  {
    date: "EXPANSION & ADVANCED LAB",
    title: "Automated Analysis & High-Resolution Imaging",
    image: labImg,
    type: "image",
  },

  {
    date: "EXPANSION PHASE",
    title: "Advanced Diagnostics & IVF Lab",
    text: "Comprehensive diagnostic facilities, automated biochemistry systems, high-frequency sonography and Class 10,000 IVF lab infrastructure strengthened faster diagnosis and personalized treatment plans.",
    type: "text",
  },

  {
    date: "PRESENT STAGE",
    title: "Centre for Reproductive Care & Neurosciences",
    text: "Anik Healthcare gained broad medical recognition for specialized laparoscopic & hysteroscopic treatment, high-risk obstetric monitoring and multi-specialty neuro-consultation supported by modern medical facilities.",
    type: "text",
  },

  {
    date: "PRESENT • SPECIALIZED CENTRE",
    title: "Digital Consultation & Multidisciplinary Board",
    image: doctorImg,
    type: "image",
  },

  {
    date: "EXPANSION",
    title: "Today • Leading Team",
    image: teamImg,
    type: "image",
  },

  {
    date: "TODAY • CONTINUOUS UPGRADING",
    title: "Trusted Multispecialty & Fertility Centre",
    text: "Continuing our heartfelt commitment to compassionate care, scientific innovation, and surgical excellence while serving thousands of happy couples and families with world-class healthcare solutions.",
    type: "text",
  },
];


function Healthcare() {
  return (
    <section className="milestones-section">

      {/* ================= HEADER ================= */}

      <div className="milestones-header">

        <div className="milestone-badge">
          <span>●</span>
          Our Journey • Anik Healthcare Solutions
        </div>

        <h1>
          Growing With Every
          <br />
          <span>Healthcare Milestone</span>
        </h1>

        <p>
          Every milestone reflects our steadfast commitment to clinical
          innovation,
          <br className="desktop-break" />
          compassionate patient care, and reproductive & multidisciplinary
          healthcare excellence.
        </p>

        <div className="journey-points">

          <span>
            ● Ethical & Transparent Care
          </span>

          <span>
            ✦ Advanced IVF & Surgeries
          </span>

          <span>
            ♙ 100% Patient-Centric Focus
          </span>

        </div>

      </div>


      {/* ================= TIMELINE ================= */}

      <div className="timeline">

        <div className="timeline-line"></div>

        {milestones.map((item, index) => (

          <div
            className={`timeline-item ${
              index % 2 === 0
                ? "left-item"
                : "right-item"
            }`}
            key={index}
          >

            {/* Timeline Dot */}

            <div className="timeline-dot"></div>


            {/* Card */}

            <div className="timeline-card">

              {/* IMAGE CARD */}

              {item.type === "image" ? (

                <>

                  <div className="image-date">
                    {item.date}
                  </div>

                  <img
                    src={item.image}
                    alt={item.title}
                    className="milestone-image"
                  />

                  <div className="image-caption">

                    <span>
                      Patient First
                    </span>

                    <span>
                      Innovation
                    </span>

                    <span>
                      Excellence
                    </span>

                  </div>

                </>

              ) : (

                /* TEXT CARD */

                <>

                  <div className="text-date">
                    {item.date}
                  </div>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.text}
                  </p>

                  <div className="card-tags">

                    <span>
                      Patient First
                    </span>

                    <span>
                      Innovation
                    </span>

                    <span>
                      Excellence
                    </span>

                  </div>

                </>

              )}

            </div>

          </div>

        ))}

      </div>


      {/* ================= CTA ================= */}

      <div className="journey-cta">

        <div className="cta-content">

          <small>
            CLINICAL EXCELLENCE SINCE EVERYDAY
          </small>

          <h2>
            Partnering In Your Healthcare & Wellness Journey
          </h2>

          <p>
            Experience benchmark standards in reproductive medicine,
            gynecology,
            <br />
            and surgical care with Anik Healthcare Solutions Pvt. Ltd.
          </p>

          <div className="cta-buttons">

            <Link to="/contact">
              📅 Schedule an Appointment
            </Link>

            <a
              href="https://www.google.com/maps/search/?api=1&query=382%2C+Rani+Sati+Nagar%2C+Ajmer+Road%2C+Jaipur%2C+Rajasthan+302019"
              target="_blank"
              rel="noopener noreferrer"
            >
              📍 Locate Clinic
            </a>

          </div>

        </div>


        <div className="cta-watermark">
          AK
        </div>

      </div>

    </section>
  );
}


export default Healthcare;