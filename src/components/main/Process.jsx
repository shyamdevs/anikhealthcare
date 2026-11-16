import { Link } from "react-router-dom";
import { useState } from "react";
import "../../css/proccess.css";

import {
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa6";

const journeySteps = [
  {
    number: "01",
    shortTitle: "Inquiry",
    smallTitle: "FIRST STEP",
    title: "Contact Us & Initial Inquiry",
    subtitle: "WhatsApp / Call / Online Portal",
    description:
      "Reach our patient concierge desk to share your medical history in 100% strict confidentiality. We schedule your prompt preliminary screening appointment at your preferred date and hour.",
    badge: "Instant Response within 2 Hours",
    tags: ["Zero Wait Time", "Confidential Helpline"],
    action: "Chat on WhatsApp",
    actionTo: "https://wa.me/919660760713",
    externalAction: true,
  },

  {
    number: "02",
    shortTitle: "Consultation",
    smallTitle: "COMPREHENSIVE EVALUATION",
    title: "Consultation & Assessment",
    subtitle: "Online Tele-health or In-Person at Clinic",
    description:
      "A thorough 45-minute fertility audit includes medical history, prior tests, AMH levels, semen analysis and complete root-cause protocol roadmap.",
    badge: "45-Minute Fertility Audit",
    tags: ["AMH & Semen Analysis", "Root-Cause Evaluation"],
    action: "Book Consultation",
    actionTo: "/contact",
  },

  {
    number: "03",
    shortTitle: "Stimulation",
    smallTitle: "PERSONALIZED PROTOCOL",
    title: "Ovarian Stimulation",
    subtitle: "Individualized Medication Protocol",
    description:
      "A personalized stimulation protocol is planned according to your ovarian reserve, age, medical history and treatment requirements.",
    badge: "Personalized Protocol",
    tags: ["Daily Monitoring", "Hormonal Support"],
    action: "View Protocol",
    actionTo: "/ivf-center",
  },

  {
    number: "04",
    shortTitle: "Monitoring",
    smallTitle: "PRECISION MONITORING",
    title: "Follicular Monitoring",
    subtitle: "Ultrasound & Hormonal Assessment",
    description:
      "Regular ultrasound scans and hormonal testing help our fertility team carefully monitor follicular development and determine the ideal trigger timing.",
    badge: "Regular Monitoring",
    tags: ["Ultrasound", "Hormone Testing"],
    action: "View Monitoring",
    actionTo: "/ivf-center",
  },

  {
    number: "05",
    shortTitle: "Retrieval",
    smallTitle: "EGG RETRIEVAL",
    title: "Egg Retrieval Procedure",
    subtitle: "Safe & Comfortable Daycare Procedure",
    description:
      "Mature eggs are retrieved using a carefully guided procedure under appropriate sedation with continuous clinical monitoring.",
    badge: "Same-Day Procedure",
    tags: ["Safe Procedure", "Expert Team"],
    action: "Learn More",
    actionTo: "/ivf-center",
  },

  {
    number: "06",
    shortTitle: "Embryo Lab",
    smallTitle: "ADVANCED EMBRYOLOGY",
    title: "Fertilization & Embryo Lab",
    subtitle: "Advanced IVF / ICSI Laboratory",
    description:
      "Retrieved eggs are fertilized using IVF or ICSI techniques and carefully monitored inside our advanced embryology laboratory.",
    badge: "Advanced Embryology Lab",
    tags: ["IVF / ICSI", "Embryo Culture"],
    action: "Explore Lab",
    actionTo: "/ivf-center#embryology-care",
  },

  {
    number: "07",
    shortTitle: "Transfer",
    smallTitle: "EMBRYO TRANSFER",
    title: "Embryo Transfer",
    subtitle: "Precise Ultrasound-Guided Transfer",
    description:
      "A selected healthy embryo is transferred into the uterus using a gentle and precise ultrasound-guided technique.",
    badge: "Painless Procedure",
    tags: ["Ultrasound Guided", "Expert Care"],
    action: "Learn More",
    actionTo: "/ivf-center",
  },

  {
    number: "08",
    shortTitle: "Confirmation",
    smallTitle: "FINAL STEP",
    title: "Pregnancy Confirmation",
    subtitle: "Beta-hCG Blood Test",
    description:
      "After the recommended waiting period, a quantitative Beta-hCG blood test confirms pregnancy followed by early pregnancy support and guidance.",
    badge: "12–14 Days After Transfer",
    tags: ["Beta-hCG Test", "Pregnancy Support"],
    action: "Get Support",
    actionTo: "/contact",
  },
];

function Process() {
  const [activeStep, setActiveStep] = useState(0);

  const nextStep = () => {
    setActiveStep((prev) =>
      prev === journeySteps.length - 1 ? 0 : prev + 1
    );
  };

  const previousStep = () => {
    setActiveStep((prev) =>
      prev === 0 ? journeySteps.length - 1 : prev - 1
    );
  };

  const active = journeySteps[activeStep];

  const secondCardIndex =
    activeStep === journeySteps.length - 1 ? 0 : activeStep + 1;

  const nextCard = journeySteps[secondCardIndex];

  return (
   <section className="journey-section">

      {/* ================= HEADER ================= */}

      <div className="journey-header">

        <div className="journey-badge">
          <span className="journey-dot"></span>
          <span>PATIENT JOURNEY ROADMAP</span>
          <span>•</span>
          <span>ANIK IVF</span>
        </div>

        <h1>
          Your Step-by-Step{" "}
          <span>Pathway to</span>
          <br />
          <span>Parenthood</span>
        </h1>

        <p>
          Every cycle is clinically tailored by{" "}
          <strong>Dr. Gunjan Agarwal</strong>{" "}
          (Fellowship in Reproductive Medicine, 20+ Years Exp.) with
          transparent protocols, zero hidden stages, and compassionate
          precision.
        </p>

      </div>


      {/* ================= QUICK STATS ================= */}

      <div className="journey-stats">

        <div className="journey-stat">
          <strong>8 Steps</strong>
          <span>Defined Protocol</span>
        </div>

        <div className="journey-divider"></div>

        <div className="journey-stat">
          <strong>18–21 Days</strong>
          <span>Avg. Clinical Cycle</span>
        </div>

        <div className="journey-divider"></div>

        <div className="journey-stat">
          <strong>1-on-1</strong>
          <span>Direct Senior Care</span>
        </div>

      </div>


      {/* ================= STEP NAVIGATION ================= */}

      <div className="journey-navigation">

        <div className="journey-line"></div>

        {journeySteps.map((step, index) => (

          <button
            key={step.number}
            type="button"
            className={`journey-step ${
              activeStep === index ? "active" : ""
            }`}
            onClick={() => setActiveStep(index)}
          >

            <span className="journey-number">
              {step.number}
            </span>

            <span className="journey-short-title">
              {step.shortTitle}
            </span>

          </button>

        ))}

      </div>


      {/* ================= CURRENT STEP ================= */}

      <div className="current-step-row">

        <div className="current-step-badge">
          <span></span>
          Step {active.number} of 08 · {active.title}
        </div>

        <div className="slider-buttons">

          <button
            type="button"
            onClick={previousStep}
            aria-label="Previous step"
          >
            <FaArrowLeft />
          </button>

          <button
            type="button"
            onClick={nextStep}
            aria-label="Next step"
          >
            <FaArrowRight />
          </button>

        </div>

      </div>


      {/* ================= SLIDER ================= */}

      <div className="journey-slider">

        <div className="journey-cards">

          {/* Active Card */}

          <div className="journey-card active-card">

            <div className="card-content">

              <div className="card-heading">

                <div className="card-number">
                  {active.number}
                </div>

                <div>
                  <span className="card-small-title">
                    {active.smallTitle}
                  </span>

                  <h2>
                    {active.number}. {active.title}
                  </h2>
                </div>

              </div>


              <div className="response-badge">
                <span>◷</span>
                {active.badge}
              </div>

            </div>


            <div className="card-body">

              <h3>
                {active.subtitle}
              </h3>

              <p>
                {active.description}
              </p>

            </div>


            <div className="card-footer">

              <div className="card-tags">

                {active.tags.map((tag, index) => (
                  <span key={index}>
                    {tag}
                  </span>
                ))}

              </div>

              {active.externalAction ? (
                <a
                  href={active.actionTo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-action"
                >
                  {active.action}
                  <FaArrowRight />
                </a>
              ) : (
                <Link to={active.actionTo} className="card-action">
                  {active.action}
                  <FaArrowRight />
                </Link>
              )}

            </div>

          </div>


          {/* Next Card Preview */}

          <div className="journey-card next-card">

            <div className="card-content">

              <div className="card-heading">

                <div className="card-number">
                  {nextCard.number}
                </div>

                <div>
                  <span className="card-small-title">
                    {nextCard.smallTitle}
                  </span>

                  <h2>
                    {nextCard.number}. {nextCard.title}
                  </h2>
                </div>

              </div>

            </div>

            <div className="card-body">

              <h3>
                {nextCard.subtitle}
              </h3>

              <p>
                {nextCard.description}
              </p>

            </div>

            <div className="card-footer">

              <div className="card-tags">

                {nextCard.tags.map((tag, index) => (
                  <span key={index}>
                    {tag}
                  </span>
                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Process;