import { useEffect, useState } from "react";
import "../../css/center.css";
import {
  FaCircleCheck,
  FaGraduationCap,
  FaFlask,
  FaHeart,
} from "react-icons/fa6";

const stats = [
  {
    icon: <FaCircleCheck />,
    number: 78,
    suffix: "%",
    label: "Clinical IVF Success Rate",
    description:
      "Consistently higher than national benchmarks across ICMR verified cycles",
  },
  {
    icon: <FaGraduationCap />,
    number: 20,
    suffix: "+",
    label: "Years of IVF Mastery",
    description:
      "Fellowship trained in reproductive medicine with 10,000+ consults",
  },
  {
    icon: <FaFlask />,
    number: 5000,
    suffix: "+",
    label: "Successful IVF & IUI Cycles",
    description:
      "Advanced blastocyst culture, ICSI & laser assisted hatching",
  },
  {
    icon: <FaHeart />,
    number: 2592,
    suffix: "+",
    label: "Parenthood Dreams Delivered",
    description:
      "Healthy newborn babies bringing joy to families across Rajasthan & India",
  },
];

function Cinter() {
  const [counts, setCounts] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const duration = 5000;
    const intervalTime = 30;

    const timers = stats.map((stat, index) => {
      const increment = stat.number / (duration / intervalTime);

      return setInterval(() => {
        setCounts((prev) => {
          const newCounts = [...prev];

          if (newCounts[index] < stat.number) {
            newCounts[index] = Math.min(
              Math.ceil(newCounts[index] + increment),
              stat.number
            );
          }

          return newCounts;
        });
      }, intervalTime);
    });

    return () => {
      timers.forEach((timer) => clearInterval(timer));
    };
  }, []);

  return (
    <section className="stats-wrapper">

      {/* Heading */}
      <div className="stats-header">

        <div className="stats-badge">
          <span className="badge-dot"></span>
          DR. GUNJAN AGARWAL | ANIK IVF &amp; FERTILITY
        </div>

        <h1>
          Advance Fertility <span>&amp; IVF Centre</span>
        </h1>

        <p>
          Over 20+ Years of Proven Medical Excellence in IVF, ICSI &amp;
          Reproductive Care
        </p>

      </div>

      {/* Cards */}
      <div className="stats-section">

        <div className="stats-container">

          {stats.map((stat, index) => (
            <div className="stat-card" key={index}>

              <div className="card-top-line"></div>

              <div className="stat-icon">
                {stat.icon}
              </div>

              <div className="stat-number">
                {counts[index].toLocaleString()}
                <span>{stat.suffix}</span>
              </div>

              <div className="stat-label">
                {stat.label}
              </div>

              <div className="stat-description">
                {stat.description}
              </div>

            </div>
          ))}

        </div>

      </div>

      {/* Bottom Features */}
      <div className="stats-features">

        <div className="feature-item">
          <FaCircleCheck />
          <span>ICMR &amp; ART Act (2021) Registered Centre</span>
        </div>

        <div className="feature-item">
          <FaCircleCheck />
          <span>Level 3 Cleanroom Embryology IVF Lab</span>
        </div>

        <div className="feature-item">
          <FaCircleCheck />
          <span>100% Ethical &amp; Transparent Fertility Treatment</span>
        </div>

        <div className="feature-item">
          <FaCircleCheck />
          <span>24/7 Dedicated Fertility Counselling</span>
        </div>

      </div>

    </section>
  );
}

export default Cinter;