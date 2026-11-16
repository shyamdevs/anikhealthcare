import { useState, useEffect } from "react";

const EnquiryModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });

  // Website load hone ke 5 second baad popup open karein
  // (Agar aapko 5 minute chahiye toh 5000 ki jagah 300000 ms karein)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enquiry Form Submitted:", formData);
    setIsOpen(false); // Submit ke baad popup band ho jayega
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs transition-opacity duration-300">
      
      {/* Background click to close */}
      <div 
        className="fixed inset-0" 
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Modal Dialog Card */}
      <div className="relative z-10 w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white border border-[#e2e8f0] rounded-[22px] p-6 sm:p-8 shadow-2xl">
        
        {/* Close Button (Cross Icon) */}
        <button
          onClick={() => setIsOpen(false)}
          aria-label="Close"
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#f1f5f9] hover:bg-[#e2e8f0] text-[#475569] hover:text-[#111827] flex items-center justify-center text-lg font-bold transition cursor-pointer"
        >
          ✕
        </button>

        {/* Header */}
        <div className="mb-5 pr-8">
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
        <form onSubmit={handleSubmit} className="space-y-4">
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

        {/* Bottom Verification */}
        <div className="pt-4 mt-5 border-t border-[#f1f5f9] flex items-center justify-center gap-2 text-[11px] text-[#64748b]">
          <span className="text-emerald-600 font-bold">✓</span>
          <span>100% Confidential • ICMR Registered ART Bank &amp; Fertility Clinic</span>
        </div>
      </div>
    </div>
  );
};

export default EnquiryModal;