import { Link } from "react-router-dom";
import Navbar from "../../Layout/Navbar";
import Footer from "../../Layout/Footer";
import doctorPortrait from "../../assets/gunjan 1.jpeg";
import doctorAtDesk from "../../assets/g2.jpeg";
import doctorAtDeskPortrait from "../../assets/g3.jpeg";
import clinicImage from "../../assets/modern_multi_storey_flagship_multispeciality_hospital_and_fertility_centre.png";
import teamImage from "../../assets/professional_medical_team_portrait_of_senior_doctors_fertility_specialists_and.png";
import labImage from "../../assets/state_of_the_art_cleanroom_ivf_laboratory_and_diagnostic_centre_embryologists.png";
import facilityImage from "../../assets/advanced_modular_operating_theatre_and_intensive_critical_care_unit_ot_icu.png";
import clinicVideo from "../../assets/g8.mp4";

const galleryImages = [
  { src: clinicImage, alt: "Anik Healthcare centre exterior", title: "Our Centre" },
  { src: doctorPortrait, alt: "Dr. Gunjan Agarwal portrait", title: "Meet the Specialist" },
  { src: teamImage, alt: "Medical specialists and healthcare team", title: "Our Clinical Team" },
  { src: labImage, alt: "IVF laboratory and diagnostic facility", title: "Laboratory Facilities" },
  { src: doctorAtDesk, alt: "Doctor at the clinic desk", title: "At the Clinic" },
  { src: facilityImage, alt: "Operating theatre and critical care facility", title: "Clinical Facilities" },
  { src: doctorAtDeskPortrait, alt: "Doctor at the clinic", title: "Consultation Space" },
];

function Gallery() {
  return (
    <>
      <Navbar />
      <main className="bg-[#f8fafc] px-4 py-14 text-[#334155] sm:px-8 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <header className="mx-auto mb-10 max-w-3xl text-center">
            <span className="mb-4 inline-flex rounded-full border border-[#e2e8f0] bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#475569]">
              Anik Healthcare • Gallery
            </span>
            <h1 className="font-serif text-3xl font-bold tracking-tight text-[#1a2836] sm:text-5xl">
              Centre &amp; Care Gallery
            </h1>
            <p className="mt-4 text-sm leading-7 text-[#64748b] sm:text-base">
              A look at the centre, clinical spaces and team images included on this website.
            </p>
          </header>

          <section aria-label="Photo gallery" className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((item) => (
              <figure
                key={item.title}
                className="overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white shadow-[0_4px_20px_rgba(15,23,42,0.04)]"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="h-64 w-full object-cover transition duration-500 hover:scale-[1.03]"
                />
                <figcaption className="px-5 py-4 text-sm font-bold text-[#1a2836]">
                  {item.title}
                </figcaption>
              </figure>
            ))}
          </section>

          <section className="mt-12" aria-labelledby="gallery-video-heading">
            <div className="mb-5">
              <h2 id="gallery-video-heading" className="font-serif text-2xl font-bold text-[#1a2836]">
                Video Gallery
              </h2>
              <p className="mt-2 text-sm text-[#64748b]">
                Watch the video currently included in the project assets.
              </p>
            </div>
            <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-[#e2e8f0] bg-black shadow-[0_8px_30px_rgba(15,23,42,0.08)]">
              <video controls preload="metadata" className="aspect-video w-full">
                <source src={clinicVideo} type="video/mp4" />
                Your browser does not support embedded video.
              </video>
            </div>
          </section>

          <div className="mt-12 text-center">
            <p className="text-sm text-[#64748b]">Have an appointment or service enquiry?</p>
            <Link
              to="/contact"
              className="mt-3 inline-flex rounded-lg bg-[#2c3e50] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#1e2d3d]"
            >
              Contact the clinic
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Gallery;
