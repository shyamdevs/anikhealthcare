import { Link } from "react-router-dom";
import "../css/footer.css";

const serviceLinks = [
  { label: "IVF Treatment", to: "/ivf-center#ivf-treatment" },
  { label: "IUI (Intrauterine)", to: "/about#iui-treatment" },
  { label: "ICSI Procedures", to: "/ivf-center#icsi-procedures" },
  { label: "PCOS & Hormonal Care", to: "/gynaecology#pcos-care" },
  { label: "Specialist Consultation", to: "/teams" },
  { label: "Embryology & Cryo Care", to: "/ivf-center#embryology-care" },
];

const quickLinks = [
  { label: "About the Doctor", to: "/about#doctor-profile" },
  { label: "Clinical Services", to: "/services" },
  { label: "Why Choose Us", to: "/ivf-center#why-choose-us" },
  { label: "Photo & Video Gallery", to: "/gallery" },
  { label: "Book Appointment", to: "/contact#appointment-form" },
  { label: "Patient Enquiries", to: "/contact#appointment-form" },
];

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <section className="footer-heading">
        <span className="footer-badge">CENTER OF EXCELLENCE IN INFERTILITY &amp; IVF</span>
        <h1>ARPIT MEDIWORLD</h1>
        <p>
          Led by Dr. Gunjan Agarwal with over two decades of clinical excellence.
          Powered by high-standard embryology labs and compassion-first patient protocols.
        </p>
      </section>

      <div className="red-divider" />

      <section className="footer-main">
        <div className="footer-company">
          <div className="company-logo-wrapper">
            <div className="company-logo">iR</div>
            <div>
              <h2>ANIK HEALTHCARE</h2>
              <h3>SOLUTIONS PVT. LTD.</h3>
            </div>
          </div>

          <div className="association">❤️ &nbsp; In Association with Arpit Mediworld</div>
          <p className="company-description">
            A premier reproductive medicine and IVF centre led by
            <strong> Dr. Gunjan Agarwal</strong>, offering comprehensive,
            compassionate fertility treatments with over 20 years
            of focused clinical experience.
          </p>

          <h4>CONNECT WITH US</h4>
          <p className="social-contact-note">
            For updates and enquiries, contact our team at{" "}
            <a href="mailto:ivf@anikhealthcare.com">ivf@anikhealthcare.com</a>.
          </p>
        </div>

        <div className="footer-links">
          <h2>OUR SERVICES</h2>
          <ul>
            {serviceLinks.map((item) => (
              <li key={item.label}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-links">
          <h2>QUICK LINKS</h2>
          <ul>
            {quickLinks.map((item) => (
              <li key={item.label}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-contact">
          <h2>CONTACT DETAILS</h2>
          <div className="appointment-box">
            <div className="phone-icon">☎</div>
            <div>
              <span>HELPLINE &amp; APPOINTMENTS</span>
              <strong>
                +91 96607 60713 <b>|</b> +91 95212 07070
              </strong>
            </div>
          </div>

          <div className="contact-row">
            <span>✉</span>
            <a href="mailto:ivf@anikhealthcare.com">ivf@anikhealthcare.com</a>
          </div>
          <div className="contact-row">
            <span>🌐</span>
            <a href="https://www.anikhealthcare.com" target="_blank" rel="noopener noreferrer">
              anikhealthcare.com
            </a>
          </div>
          <div className="timing">
            <span>◷</span>
            <p>Mon – Sat: 9:30 AM – 7:00 PM</p>
            <small>Open Today</small>
          </div>
        </div>
      </section>

      <section className="clinical-section">
        <div className="clinical-info">
          <h2>
            <span className="pin-icon">●</span>
            OUR CLINICAL CENTRE
          </h2>
          <div className="address">
            <h3>Arpit Mediworld</h3>
            <p>
              382, Rani Sati Nagar, Ajmer Road,<br />
              Jaipur, Rajasthan – 302019
            </p>
          </div>
          <div className="clinical-contact">
            <div>
              <span>✉</span>
              <a href="mailto:ivf@anikhealthcare.com">ivf@anikhealthcare.com</a>
            </div>
            <div>
              <span>☎</span>
              <a href="tel:+919660760713">+91 96607 60713</a>
            </div>
          </div>
          <p className="landmark">
            <strong>Landmark:</strong> Located conveniently near Ajmer Road
            corridor with dedicated valet &amp; patient assistance.
          </p>
        </div>

        <div className="map">
          <a
            href="https://www.google.com/maps/search/?api=1&query=382%2C+Rani+Sati+Nagar%2C+Ajmer+Road%2C+Jaipur%2C+Rajasthan+302019"
            target="_blank"
            rel="noopener noreferrer"
            className="map-button"
          >
            ↗ &nbsp; Open in Maps
          </a>
          <div className="north">N ▲</div>
          <div className="map-road road-one" />
          <div className="map-road road-two" />
          <div className="map-road road-three" />
          <div className="map-location">
            <div className="location-pin">★</div>
            <div className="location-label">
              <strong>Arpit Mediworld</strong>
              <span>Jaipur Center</span>
            </div>
          </div>
          <span className="road-label">AJMER ROAD CORRIDOR</span>
        </div>
      </section>

      <section className="footer-bottom">
        <p>
          © 2026 <strong>Anik Healthcare Solutions Pvt. Ltd.</strong>
          <span> &amp; </span>
          <strong className="pink-text">Arpit Mediworld.</strong> All Rights Reserved.
        </p>
        <div className="bottom-links">
          <a href="mailto:ivf@anikhealthcare.com?subject=Privacy%20and%20terms%20enquiry">
            Privacy &amp; Terms Enquiries
          </a>
          <span>•</span>
          <Link to="/sitemap">Sitemap</Link>
          <button type="button" className="back-top" onClick={scrollToTop}>
            Back To Top ↑
          </button>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
