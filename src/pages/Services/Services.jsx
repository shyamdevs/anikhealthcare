import { Link } from "react-router-dom";
import Navbar from "../../Layout/Navbar";
import Footer from "../../Layout/Footer";

const services = [
  {
    title: "IVF Center",
    description:
      "Explore IVF treatment, assisted reproductive technology, embryo transfer and embryology information.",
    path: "/ivf-center",
    label: "Fertility care",
  },
  {
    title: "Gynaecology",
    description:
      "Learn about women's health, preventive care, diagnostic services and hormonal health support.",
    path: "/gynaecology",
    label: "Women's health",
  },
  {
    title: "Obstetrics",
    description:
      "View information about maternity care, pregnancy monitoring and obstetric services.",
    path: "/obstetrics",
    label: "Maternity care",
  },
  {
    title: "Laparoscopic Surgeries",
    description:
      "Read about minimally invasive surgical services and the treatment pathway.",
    path: "/laparoscopic-surgeries",
    label: "Surgical care",
  },
  {
    title: "Pediatrics",
    description:
      "Explore the centre's pediatric care information and available services.",
    path: "/pediatrics",
    label: "Child health",
  },
];

function Services() {
  return (
    <>
      <Navbar />
      <main className="bg-[#f8fafc] px-4 py-16 text-[#334155] sm:px-8 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <header className="mx-auto mb-12 max-w-3xl text-center">
            <span className="mb-4 inline-flex rounded-full border border-[#e2e8f0] bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#475569]">
              Anik Healthcare • Clinical Services
            </span>
            <h1 className="font-serif text-3xl font-bold tracking-tight text-[#1a2836] sm:text-5xl">
              Our Services
            </h1>
            <p className="mt-5 text-sm leading-7 text-[#64748b] sm:text-base">
              Browse the service information available on our website. For advice about
              an individual medical concern or treatment plan, please contact the clinic.
            </p>
          </header>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.path}
                className="flex h-full flex-col rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.04)]"
              >
                <span className="mb-4 self-start rounded-full bg-[#f1f5f9] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#475569]">
                  {service.label}
                </span>
                <h2 className="font-serif text-xl font-bold text-[#1a2836]">
                  {service.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-6 text-[#64748b]">
                  {service.description}
                </p>
                <Link
                  to={service.path}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#2c3e50] hover:underline"
                >
                  Explore service <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-[#2c3e50] p-6 text-white sm:flex sm:items-center sm:justify-between sm:gap-6 sm:p-8">
            <div>
              <h2 className="font-serif text-xl font-bold sm:text-2xl">
                Need help choosing the right department?
              </h2>
              <p className="mt-2 text-sm text-white/75">
                Contact the clinic to ask about appointments and available services.
              </p>
            </div>
            <Link
              to="/contact"
              className="mt-5 inline-flex rounded-lg bg-white px-5 py-3 text-sm font-bold text-[#2c3e50] transition hover:bg-slate-100 sm:mt-0"
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

export default Services;
