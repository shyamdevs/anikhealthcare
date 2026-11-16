import { Link } from "react-router-dom";
import Navbar from "../../Layout/Navbar";
import Footer from "../../Layout/Footer";

const pages = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Our Team", path: "/teams" },
  { label: "Services Overview", path: "/services" },
  { label: "Gynaecology", path: "/gynaecology" },
  { label: "IVF Center", path: "/ivf-center" },
  { label: "Laparoscopic Surgeries", path: "/laparoscopic-surgeries" },
  { label: "Obstetrics", path: "/obstetrics" },
  { label: "Pediatrics", path: "/pediatrics" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact & Appointments", path: "/contact" },
];

function Sitemap() {
  return (
    <>
      <Navbar />
      <main className="min-h-[60vh] bg-[#f8fafc] px-4 py-16 text-[#334155] sm:px-8 lg:px-14">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-serif text-3xl font-bold text-[#1a2836] sm:text-4xl">Sitemap</h1>
          <p className="mt-3 text-sm leading-6 text-[#64748b]">
            Use these links to navigate the pages available on this website.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {pages.map((page) => (
              <li key={page.path}>
                <Link
                  to={page.path}
                  className="flex items-center justify-between rounded-xl border border-[#e2e8f0] bg-white px-5 py-4 text-sm font-semibold text-[#334155] transition hover:border-[#94a3b8] hover:text-[#1a2836]"
                >
                  {page.label}
                  <span aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Sitemap;
