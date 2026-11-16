import gynaeImage from "../../assets/g5.jpeg"; 

const GynaecologySection = () => {
  const diagnosticServices = [
    {
      title: "Routine & Preventive Care",
      desc: "Annual pelvic exams, breast health & Pap smear cervical screening.",
    },
    {
      title: "Fetal & Antenatal Care",
      desc: "High-resolution ultrasound, CVS & Amniocentesis diagnostics.",
    },
    {
      title: "Infection & Vaginal Health",
      desc: "Rapid laboratory evaluation, discharge, candidiasis & STD care.",
    },
    {
      title: "Fibroids & Laparoscopy",
      desc: "Minimally invasive management for fibroids, cysts & endometriosis.",
    },
  ];

  return (
    <section className="w-full bg-[#fcfdfd] py-16 px-4 sm:px-8 lg:px-14 font-sans text-[#334155]">
      <div className="max-w-[1280px] mx-auto">
        
        {/* ================= HEADER ================= */}
        <div className="text-center max-w-[900px] mx-auto mb-14">
          
          {/* Top Pill Tag */}
          <div className="inline-flex items-center gap-2 bg-[#f1f5f9] border border-[#e2e8f0] px-4 py-1.5 rounded-full mb-5">
            <span className="w-2 h-2 rounded-full bg-[#2c3e50]"></span>
            <span className="text-[11px] font-bold text-[#475569] tracking-wider uppercase">
              Women's Health &amp; Reproductive Clinical Care
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl font-serif font-black text-[#1a2836] tracking-tight uppercase leading-[1.15] mb-4">
            Gynaecology &amp; Women’s<br />Health
          </h1>

          {/* Lead Doctor Subtitle */}
          <p className="text-[14px] sm:text-[15px] text-[#64748b]">
            Led by <strong className="text-[#1a2836] font-bold">Dr. Gunjan Agarwal</strong>{" "}
            | Senior Gynaecologist &amp; IVF Specialist • 20+ Years Clinical Excellence
          </p>
        </div>

        {/* ================= MAIN TWO-COLUMN CONTENT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-[450px_1fr] gap-10 lg:gap-14 items-start">
          
          {/* LEFT COLUMN: Clinical Card & Consultation Pill */}
          <div className="flex flex-col gap-4">
            
            {/* White Document/Article Style Card */}
            <div className="bg-white border border-[#e2e8f0] rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col">
              
              {/* Header Label inside Card */}
              <div className="text-center mb-5">
                <span className="text-xs font-bold tracking-widest text-[#1a2836] uppercase">
                  Gynaecology
                </span>
              </div>

              {/* Card Image and Faux Text Split */}
              <div className="grid grid-cols-[1.1fr_0.9fr] gap-4 mb-6 items-start">
                <div className="rounded-lg overflow-hidden border border-[#e2e8f0]">
                  <img
                    src={gynaeImage}
                    alt="Gynaecology Consultation"
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div className="text-[7.5px] leading-[1.4] text-[#64748b] space-y-1.5 select-none">
                  <p>
                    A Gynaecology doctor is an expert in the female reproductive system. They treat the health &amp; diseases field. It is essential to choose the right doctor because their work can involve medical problems such as pregnancy, reproduction, and menopause.
                  </p>
                  <p>
                    Every female needs to see a gynaecology expert for good health. As reproduction starts during puberty, a regular gynaecological evaluation is a must. One gets detailed explanation about normal body functions or answers to any female health questions upon their visit to the gynaecology.
                  </p>
                  <ul className="list-disc pl-2 space-y-0.5">
                    <li>Ultrasound guidance</li>
                    <li>Routine smear analysis</li>
                  </ul>
                </div>
              </div>

              {/* Bottom Doctor Designation inside Left Card */}
              <div className="pt-4 border-t border-[#f1f5f9] flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#f1f5f9] border border-[#e2e8f0] flex items-center justify-center text-[#2c3e50] text-sm shrink-0">
                  🛡️
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#1a2836] leading-tight">
                    Dr. Gunjan Agarwal
                  </h4>
                  <p className="text-[10px] text-[#64748b] mt-0.5">
                    Senior Gynaecologist &amp; Infertility Expert
                  </p>
                </div>
              </div>

            </div>

            {/* Bottom Comprehensive Info Pill */}
            <div className="bg-white border border-[#e2e8f0] rounded-xl px-4 py-3 flex items-center gap-3 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
              <span className="w-5 h-5 rounded-full border border-[#94a3b8] text-[#64748b] flex items-center justify-center text-xs shrink-0">
                ℹ
              </span>
              <p className="text-xs font-semibold text-[#334155] m-0">
                Comprehensive Routine &amp; Advanced Gynaecological Consultations
              </p>
            </div>

          </div>

          {/* RIGHT COLUMN: Descriptive & Service Cards */}
          <div className="flex flex-col">
            
            {/* Section Header */}
            <h2 className="text-2xl sm:text-[28px] font-serif font-bold text-[#1a2836] mb-4">
              Compassionate &amp; Comprehensive Care for Every Stage of Womanhood
            </h2>

            {/* Paragraph Description */}
            <p className="text-[14px] leading-relaxed text-[#55697d] mb-8">
              A Gynaecology specialist safeguards holistic female reproductive wellness across puberty, regular cycles, pregnancy, and menopause. Under the guidance of{" "}
              <strong className="text-[#1a2836] font-bold">Dr. Gunjan Agarwal</strong>, our clinic offers empathetic, confidential, and evidence-based clinical excellence.
            </p>

            {/* Subheading Badge */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2c3e50]"></span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#475569]">
                Specialized Examinations &amp; Diagnostic Services
              </span>
            </div>

            {/* Diagnostic Services 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {diagnosticServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white border border-[#e2e8f0] rounded-xl p-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex items-start gap-3"
                >
                  <span className="text-[#2c3e50] text-xs font-bold mt-0.5">✓</span>
                  <div>
                    <h3 className="text-xs font-bold text-[#1a2836] mb-1">
                      {service.title}
                    </h3>
                    <p className="text-[11px] text-[#64748b] leading-normal m-0">
                      {service.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Full Width 5th Card: Hormonal Balance & Menopause */}
            <div id="pcos-care" className="scroll-mt-28 bg-white border border-[#e2e8f0] rounded-xl p-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex items-start gap-3">
              <span className="text-[#2c3e50] text-xs font-bold mt-0.5">✓</span>
              <div>
                <h3 className="text-xs font-bold text-[#1a2836] mb-1">
                  Hormonal Balance &amp; Menopause
                </h3>
                <p className="text-[11px] text-[#64748b] leading-normal m-0">
                  Endocrine protocols &amp; HRT therapy for PCOS, irregular cycles &amp; peri-menopause transition.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default GynaecologySection;