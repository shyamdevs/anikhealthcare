import { useState } from "react";
import Navbar from "../../Layout/Navbar";
import Footer from "../../Layout/Footer";

const ContactAppointment = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment Request Submitted:", formData);
  };

  return (
    <>
    <Navbar/>
    <section className="w-full bg-[#f8fafc] font-sans text-[#334155]">
      {/* ================= TOP HERO HEADER ================= */}
      <div className="w-full bg-[#223849] py-16 px-4 sm:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 px-3.5 py-1 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wider text-slate-200 uppercase mb-5 backdrop-blur-sm">
            <span></span>
            <span className="text-slate-400">/</span>
            <span>ANIK FERTILITY CARE</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-[44px] font-serif font-bold text-white tracking-tight leading-tight mb-4">
            Contact Anik IVF  
          </h1>

          {/* Subtitle */}
          <p className="text-[13.5px] sm:text-[15px] text-slate-300 max-w-2xl leading-relaxed">
            Led by <strong className="text-white font-semibold">Dr. Gunjan Agarwal</strong> (20+ Years Clinical Excellence) • Personalized Reproductive Health, Advanced Embryology &amp; Comprehensive Maternity Care
          </p>
        </div>
      </div>

      {/* ================= MAIN CONTENT WRAPPER ================= */}
      <div className="max-w-[1280px] mx-auto py-12 px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-12 items-start">

          {/* ================= LEFT COLUMN: CLINIC INFO & MAP ================= */}
          <div className="flex flex-col space-y-6">
            
            {/* Header info */}
            <div>
              <span className="text-[11px] font-bold tracking-wider text-[#64748b] uppercase block mb-1">
                Consultation &amp; Hospital Desk
              </span>
              <h2 className="text-2xl sm:text-[28px] font-serif font-bold text-[#111827] leading-snug mb-2">
                Schedule Your Appointment
              </h2>
              <p className="text-[13.5px] text-[#55697d] leading-relaxed">
                We welcome you to visit our state-of-the-art fertility hospital and advanced laparoscopic surgical unit located along the Ajmer Road corridor in Jaipur.
              </p>
            </div>

            {/* Address Box */}
            <div className="bg-white border border-[#e2e8f0] rounded-xl p-5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex items-start gap-4">
              <div className="w-9 h-9 rounded-lg bg-[#f1f5f9] border border-[#e2e8f0] flex items-center justify-center text-[#223849] shrink-0 text-base">
                📍
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-wider text-[#64748b] uppercase block mb-1">
                  Clinic &amp; Hospital Address
                </span>
                <p className="text-[13.5px] font-bold text-[#111827] leading-snug m-0">
                  382, Rani Sati Nagar, Near Nirman Nagar, Ajmer Road, Jaipur, Rajasthan – 302019
                </p>
                <p className="text-[11.5px] text-[#64748b] mt-1 m-0">
                  Landmark: Opposite Metro Pillar 42 corridor, easy parking accessible
                </p>
              </div>
            </div>

            {/* Phone & Helpline Box */}
            <div className="bg-white border border-[#e2e8f0] rounded-xl p-5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex items-start gap-4">
              <div className="w-9 h-9 rounded-lg bg-[#f1f5f9] border border-[#e2e8f0] flex items-center justify-center text-[#223849] shrink-0 text-base">
                📞
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-wider text-[#64748b] uppercase block mb-1">
                  Dedicated Phone &amp; Helpline
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  <a href="tel:+919660760713" className="text-base font-bold text-[#111827] hover:text-[#223849]">
                    +91 96607 60713
                  </a>
                  <span className="text-slate-300">/</span>
                  <a href="tel:+919521207070" className="text-base font-bold text-[#111827] hover:text-[#223849]">
                    +91 95212 07070
                  </a>
                </div>
                <p className="text-[11.5px] text-[#64748b] mt-1 m-0">
                  Direct 24/7 IVF Emergency &amp; OPD Reception Desk
                </p>
              </div>
            </div>

            {/* Email & Timing Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Email */}
              <div className="bg-white border border-[#e2e8f0] rounded-xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#f1f5f9] border border-[#e2e8f0] flex items-center justify-center text-[#223849] shrink-0 text-sm">
                  ✉
                </div>
                <div>
                  <span className="text-[10px] font-bold tracking-wider text-[#64748b] uppercase block mb-1">
                    Official Email
                  </span>
                  <a href="mailto:ivf@anikhealthcare.com" className="block text-xs font-semibold text-[#111827] hover:underline">
                    ivf@anikhealthcare.com
                  </a>
                  <a href="mailto:info@anikhealthcare.com" className="block text-xs text-[#64748b] hover:underline mt-0.5">
                    info@anikhealthcare.com
                  </a>
                </div>
              </div>

              {/* Consultation Timings */}
              <div className="bg-white border border-[#e2e8f0] rounded-xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#f1f5f9] border border-[#e2e8f0] flex items-center justify-center text-[#223849] shrink-0 text-sm">
                  🕒
                </div>
                <div>
                  <span className="text-[10px] font-bold tracking-wider text-[#64748b] uppercase block mb-1">
                    Consultation Timings
                  </span>
                  <p className="text-xs font-bold text-[#111827] m-0">
                    Mon – Sat: 9:30 AM – 7:00 PM
                  </p>
                  <p className="text-[11px] text-[#64748b] mt-0.5 m-0">
                    Sunday: By Prior Appointment
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Map Visual */}
            <div className="relative border border-[#e2e8f0] rounded-2xl overflow-hidden bg-[#f1f5f9] min-h-[250px] shadow-sm flex flex-col justify-between p-4">
              {/* Header Bar */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-gray-200 text-[11px] font-semibold text-[#334155]">
                  <span className="w-2 h-2 rounded-full bg-[#223849]"></span>
                  Hospital Geolocation Pin
                </div>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=382%2C+Rani+Sati+Nagar%2C+Ajmer+Road%2C+Jaipur%2C+Rajasthan+302019"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-gray-50 border border-gray-200 text-[#334155] text-[11px] font-medium px-3 py-1.5 rounded-lg flex items-center gap-1 shadow-xs transition"
                >
                  Open in Google Maps ↗
                </a>
              </div>

              {/* Styled Road Grid Vectors */}
              <div className="absolute inset-0 pointer-events-none opacity-40">
                <div className="absolute w-[120%] h-3 bg-white top-[45%] -left-4 -rotate-12 border-y border-slate-200"></div>
                <div className="absolute w-3 h-[120%] bg-white left-[45%] -top-4 -rotate-6 border-x border-slate-200"></div>
                <div className="absolute w-2 h-[120%] bg-white left-[75%] -top-4 rotate-12 border-x border-slate-200"></div>
              </div>

              {/* Center Map Location Card & Pin */}
              <div className="relative z-10 self-center my-auto flex flex-col items-center">
                <div className="bg-white border border-gray-200 px-3 py-1.5 rounded-xl shadow-md flex items-center gap-2 mb-1.5">
                  <span className="w-5 h-5 rounded bg-[#223849] text-white flex items-center justify-center text-[10px] font-bold">
                    A
                  </span>
                  <div>
                    <h5 className="text-[11px] font-bold text-[#111827] leading-none">
                      Anik IVF &amp; Fertility Center
                    </h5>
                    <span className="text-[9.5px] text-[#64748b]">
                      Arpit Mediworld • Dr. Gunjan Agarwal
                    </span>
                  </div>
                </div>
                <span className="w-4 h-4 rounded-full bg-[#223849] border-2 border-white shadow flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                </span>
              </div>

              {/* Footer Coordinates and Labels */}
              <div className="relative z-10 flex items-center justify-between text-[10px] text-[#94a3b8] font-medium pt-2">
                <span>Interactive Coordinates • Jaipur 302019</span>
                <span>Map data © 2026 Anik Healthcare</span>
              </div>
            </div>

          </div>

          {/* ================= RIGHT COLUMN: ENQUIRY / BOOKING FORM ================= */}
          <div className="bg-white border border-[#e2e8f0] rounded-[22px] p-6 sm:p-8 shadow-[0_4px_25px_rgba(0,0,0,0.03)]">
            
            {/* Header */}
            <div className="mb-6">
              <span className="text-[11px] font-bold tracking-wider text-[#64748b] uppercase block mb-1">
                Confidential Doctor Consultations
              </span>
              <h3 className="text-2xl font-serif font-bold text-[#111827]">
                Enquire Now
              </h3>
              <p className="text-[12.5px] text-[#64748b] mt-1 leading-relaxed">
                Fill out the form below and our senior fertility counselor will connect with you within 30 minutes.
              </p>
            </div>

            {/* Form */}
            <form id="appointment-form" onSubmit={handleSubmit} className="scroll-mt-28 space-y-4">
              
              {/* Patient Name */}
              <div>
                <label className="block text-[11px] font-bold tracking-wider uppercase text-[#475569] mb-1.5">
                  Patient Name <span className="text-rose-500">*</span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    required
                    className="w-full bg-white border border-[#cbd5e1] rounded-lg px-3.5 py-2.5 text-xs text-[#1e293b] placeholder-slate-400 focus:outline-none focus:border-[#223849] focus:ring-1 focus:ring-[#223849] transition"
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    required
                    className="w-full bg-white border border-[#cbd5e1] rounded-lg px-3.5 py-2.5 text-xs text-[#1e293b] placeholder-slate-400 focus:outline-none focus:border-[#223849] focus:ring-1 focus:ring-[#223849] transition"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-[11px] font-bold tracking-wider uppercase text-[#475569] mb-1.5">
                  Phone Number <span className="text-rose-500">*</span>
                </label>
                <div className="flex">
                  <span className="inline-flex items-center gap-1.5 px-3 rounded-l-lg border border-r-0 border-[#cbd5e1] bg-[#f8fafc] text-xs text-slate-600 font-semibold select-none">
                    🇮🇳 +91 ▾
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="98765 43210"
                    required
                    className="w-full bg-white border border-[#cbd5e1] rounded-r-lg px-3.5 py-2.5 text-xs text-[#1e293b] placeholder-slate-400 focus:outline-none focus:border-[#223849] focus:ring-1 focus:ring-[#223849] transition"
                  />
                </div>
                <span className="text-[10.5px] text-[#94a3b8] mt-1 block">
                  We will send appointment SMS confirmation and slot details
                </span>
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-[11px] font-bold tracking-wider uppercase text-[#475569] mb-1.5">
                  {/* Email Address <span className="text-rose-500">*</span> */}
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-2.5 text-slate-400 text-xs">
                    ✉
                  </span>
                  {/* <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="patient@example.com"
                    required
                    className="w-full bg-white border border-[#cbd5e1] rounded-lg pl-9 pr-3.5 py-2.5 text-xs text-[#1e293b] placeholder-slate-400 focus:outline-none focus:border-[#223849] focus:ring-1 focus:ring-[#223849] transition"
                  /> */}
                </div>
              </div>

              {/* Required Service / Speciality */}
              <div>
                <label className="block text-[11px] font-bold tracking-wider uppercase text-[#475569] mb-1.5">
                  Required Service / Speciality <span className="text-rose-500">*</span>
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-[#cbd5e1] rounded-lg px-3.5 py-2.5 text-xs text-[#334155] focus:outline-none focus:border-[#223849] focus:ring-1 focus:ring-[#223849] transition appearance-none cursor-pointer"
                >
                  <option value="">Select Consultation Category</option>
                  <option value="ivf">IVF &amp; Assisted Reproduction</option>
                  <option value="gynaecology">Gynaecology &amp; Women's Health</option>
                  <option value="obstetrics">Obstetrics &amp; Pregnancy Care</option>
                  <option value="laparoscopy">Laparoscopic Surgery</option>
                  <option value="pediatrics">Pediatrics &amp; Child Health</option>
                  <option value="infertility">Infertility Workup</option>
                </select>
              </div>

              {/* Preferred Appointment Date */}
              <div>
                <label className="block text-[11px] font-bold tracking-wider uppercase text-[#475569] mb-1.5">
                  Preferred Appointment Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full bg-white border border-[#cbd5e1] rounded-lg px-3.5 py-2.5 text-xs text-[#334155] focus:outline-none focus:border-[#223849] focus:ring-1 focus:ring-[#223849] transition cursor-pointer"
                />
              </div>

              {/* Brief Medical History */}
              <div>
                <label className="block text-[11px] font-bold tracking-wider uppercase text-[#475569] mb-1.5">
                  Brief Medical History or Message <span className="text-slate-400 font-normal lowercase">(optional)</span>
                </label>
                <textarea
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share any specific concern or previous report summaries..."
                  className="w-full bg-white border border-[#cbd5e1] rounded-lg p-3 text-xs text-[#1e293b] placeholder-slate-400 focus:outline-none focus:border-[#223849] focus:ring-1 focus:ring-[#223849] transition resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#223849] hover:bg-[#1a2d3b] text-white font-bold text-xs sm:text-sm py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-sm cursor-pointer mt-2"
              >
                <span>Request Appointment</span>
                <span>→</span>
              </button>
            </form>

            {/* Bottom Form Verification */}
            <div className="pt-4 mt-5 border-t border-[#f1f5f9] flex items-center justify-center gap-2 text-[11px] text-[#64748b]">
              <span className="text-emerald-600 font-bold">✓</span>
              <span>100% Confidential • ICMR Registered ART Bank &amp; Fertility Clinic</span>
            </div>

          </div>

        </div>
      </div>
    </section>
    <Footer/>
    
    </>
  );
};

export default ContactAppointment;