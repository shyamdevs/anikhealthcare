import { useEffect } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Teams from "../pages/team/Teams";
import Gynaecology from "../pages/gynaecology/Gynecology";
import Ivfcenter from "../pages/ifvcenter/Ivfcenter";
import LS from "../pages/ls/Ls";
import Obs from "../pages/obs/Obs";
import Pediat from "../pages/Pediat/Pediat";
import ContactAppointment from "../components/contact/Contact";
import Services from "../pages/Services/Services";
import Gallery from "../pages/Gallery/Gallery";
import NotFound from "../pages/NotFound/NotFound";
import Sitemap from "../pages/Sitemap/Sitemap";

function RouteScrollManager() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = decodeURIComponent(location.hash.slice(1));
      window.requestAnimationFrame(() => {
        document.getElementById(targetId)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname, location.hash]);

  return null;
}

export default function AppRoute() {
  return (
    <BrowserRouter>
      <RouteScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gynaecology" element={<Gynaecology />} />
        <Route path="/ivf-center" element={<Ivfcenter />} />
        <Route path="/laparoscopic-surgeries" element={<LS />} />
        <Route path="/obstetrics" element={<Obs />} />
        <Route path="/pediatrics" element={<Pediat />} />
        <Route path="/contact" element={<ContactAppointment />} />
        <Route path="/sitemap" element={<Sitemap />} />

        {/* Redirect the old URLs so existing bookmarks continue to work. */}
        <Route path="/ivfcenter" element={<Navigate to="/ivf-center" replace />} />
        <Route path="/pediat" element={<Navigate to="/pediatrics" replace />} />
        <Route path="/LS" caseSensitive element={<Navigate to="/laparoscopic-surgeries" replace />} />
        <Route path="/ls" caseSensitive element={<Navigate to="/laparoscopic-surgeries" replace />} />
        <Route path="/Obs" caseSensitive element={<Navigate to="/obstetrics" replace />} />
        <Route path="/obs" caseSensitive element={<Navigate to="/obstetrics" replace />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
