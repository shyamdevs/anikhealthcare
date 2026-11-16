import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import aik from "../assets/anik.jpg";

const menuItems = [
  { name: "HOME", path: "/" },
  { name: "TEAM", path: "/teams" },
  {
    name: "SERVICES",
    path: "/services",
    subItems: [
      { name: "All Services", path: "/services" },
      { name: "Gynaecology", path: "/gynaecology" },
      { name: "Obstetrics", path: "/obstetrics" },
      { name: "Laparoscopic Surgeries", path: "/laparoscopic-surgeries" },
      { name: "IVF Center", path: "/ivf-center" },
      { name: "Pediatrics", path: "/pediatrics" },
    ],
  },
  { name: "GALLERY", path: "/gallery" },
  { name: "ABOUT US", path: "/about" },
  { name: "CONTACT", path: "/contact" },
];

const navLinkClass = ({ isActive }) =>
  `flex h-12 items-center justify-center px-5 text-sm font-bold tracking-wide transition ${
    isActive
      ? "bg-[#374C5A] text-white"
      : "text-[#334155] hover:bg-gray-100 hover:text-[#1e293b]"
  }`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeMobileMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <header id="top" className="sticky top-0 z-50 w-full bg-white font-sans">
      <div className="bg-[#3A4754] text-white">
        <div className="mx-auto flex items-center justify-between px-4 py-2 sm:px-6 lg:px-10">
          <a
            href="tel:+919660760713"
            className="flex gap-2 text-xs font-bold text-white transition hover:text-gray-200 sm:text-sm"
          >
            <span className="text-white/80">☎</span>
            +91-9660760713 / 9521207070
          </a>

          <div className="hidden items-center gap-2 text-sm font-bold text-white sm:flex">
            <span className="text-white/80">✉</span>
            <a href="mailto:ivf@anikhealthcare.com" className="hover:underline">
              ivf@anikhealthcare.com
            </a>
            <span className="text-white/40">|</span>
            <a
              href="https://www.anikhealthcare.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              www.anikhealthcare.com
            </a>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-100 bg-white">
        <div className="mx-auto flex items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
          <Link to="/" onClick={closeMobileMenu} className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-gray-200 sm:h-[70px] sm:w-[98px]">
              <img
                className="h-full w-full rounded-full object-cover"
                src={aik}
                alt="Anik Healthcare logo"
              />
            </div>
            <div className="border-l border-gray-200 pl-3">
              <h1 className="font-serif text-lg font-bold leading-tight text-[#1e293b] sm:text-2xl lg:text-[28px]">
                Dr. Gunjan Agarwal
              </h1>
              <h2 className="font-serif text-sm font-bold text-[#334155] sm:text-lg lg:text-[21px]">
                &amp; IVF Center
              </h2>
            </div>
          </Link>

          {/* Desktop navigation */}
          <nav aria-label="Main navigation" className="hidden lg:block">
            <ul className="flex items-center">
              {menuItems.map((item) => (
                <li key={item.name} className="group relative">
                  {item.subItems ? (
                    <>
                      <div className="flex items-center">
                        <NavLink to={item.path} className={navLinkClass}>
                          {item.name}
                        </NavLink>
                        <span
                          aria-hidden="true"
                          className="-ml-4 mr-3 text-xs text-[#334155] group-hover:text-white"
                        >
                          ▾
                        </span>
                      </div>
                      <div className="invisible absolute left-0 top-full z-50 w-64 border-t border-[#465d6e] bg-[#374C5A] opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                        <ul className="flex flex-col">
                          {item.subItems.map((sub) => (
                            <li key={sub.path} className="border-b border-[#445b6c] last:border-b-0">
                              <NavLink
                                to={sub.path}
                                className={({ isActive }) =>
                                  `block px-5 py-3.5 text-[14px] font-semibold transition hover:bg-[#2c3d4a] ${
                                    isActive ? "bg-[#2c3d4a] text-white" : "text-white/95"
                                  }`
                                }
                              >
                                {sub.name}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <NavLink to={item.path} end={item.path === "/"} className={navLinkClass}>
                      {item.name}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="flex h-11 w-11 items-center justify-center rounded-md bg-[#3A4754] text-2xl font-bold text-white lg:hidden"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile navigation */}
        {menuOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="border-t border-gray-200 bg-white shadow-lg lg:hidden"
          >
            {menuItems.map((item) => (
              <div key={item.name} className="border-b border-gray-100">
                <div className="flex items-center">
                  <NavLink
                    to={item.path}
                    end={item.path === "/"}
                    onClick={closeMobileMenu}
                    className={({ isActive }) =>
                      `flex min-h-12 flex-1 items-center px-5 text-sm font-bold transition hover:bg-gray-50 ${
                        isActive ? "text-[#1e293b]" : "text-[#334C5F]"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>

                  {item.subItems && (
                    <button
                      type="button"
                      onClick={() => setServicesOpen((open) => !open)}
                      aria-label={servicesOpen ? "Collapse services submenu" : "Expand services submenu"}
                      aria-expanded={servicesOpen}
                      className="flex h-12 w-14 items-center justify-center text-lg text-[#334C5F] hover:bg-gray-50"
                    >
                      {servicesOpen ? "−" : "+"}
                    </button>
                  )}
                </div>

                {item.subItems && servicesOpen && (
                  <div className="bg-[#374C5A]">
                    {item.subItems.map((sub) => (
                      <NavLink
                        key={sub.path}
                        to={sub.path}
                        onClick={closeMobileMenu}
                        className={({ isActive }) =>
                          `block border-b border-[#445b6c] px-7 py-3 text-[13px] font-semibold transition last:border-b-0 hover:bg-[#2c3d4a] ${
                            isActive ? "bg-[#2c3d4a] text-white" : "text-white/90"
                          }`
                        }
                      >
                        {sub.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
