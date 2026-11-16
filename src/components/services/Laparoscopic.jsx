// import otImg from "../assets/laparoscopic-ot.jpg"; // Yahan apni operation theatre image ka path provide karein

const LaparoscopicSurgeries = () => {
  const procedures = [
    {
      id: "01",
      title: "Total Laparoscopic Hysterectomy (TLH)",
      subtitle: "Uterus removal via keyhole technique",
    },
    {
      id: "02",
      title: "Laparoscopic Myomectomy",
      subtitle: "Uterus-preserving fibroid excision",
    },
    {
      id: "03",
      title: "Ovarian Cystectomy",
      subtitle: "Preserving ovarian reserve & tissue",
    },
    {
      id: "04",
      title: "Endometriosis Excision",
      subtitle: "Ablation of deep infiltrating implants",
    },
    {
      id: "05",
      title: "Laparoscopic Oophorectomy",
      subtitle: "Selective or bilateral ovary excision",
    },
    {
      id: "06",
      title: "Laparoscopic Salpingectomy",
      subtitle: "Hydrosalpinx & tubal pathology relief",
    },
    {
      id: "07",
      title: "Ectopic Pregnancy Surgery",
      subtitle: "Emergency fertility-sparing resolution",
    },
    {
      id: "08",
      title: "Adenomyomectomy",
      subtitle: "Focal adenomyoma precision reduction",
    },
    {
      id: "09",
      title: "Endometrial Conditions Surgery",
      subtitle: "Treating polyps, septums & hyperplasia",
    },
    {
      id: "10",
      title: "Diagnostic Laparo-Hysteroscopy",
      subtitle: "Comprehensive infertility workup & correction",
    },
  ];

  return (
    <section className="w-full bg-[#f8fafc] py-16 px-4 sm:px-8 lg:px-14 font-sans text-[#334155]">
      <div className="max-w-[1300px] mx-auto">
        
        {/* ================= HEADER ================= */}
        <div className="text-center max-w-[900px] mx-auto mb-14">
          {/* Top Pill Tag */}
          <div className="inline-flex items-center gap-2 bg-[#f1f5f9] border border-[#e2e8f0] px-4 py-1.5 rounded-full mb-5">
            <span className="text-xs text-[#2c3e50]">🛡️</span>
            <span className="text-[11px] font-bold text-[#475569] tracking-wider uppercase">
              Advanced Minimally Invasive Surgery
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-2xl sm:text-4xl font-serif font-black text-[#1a2836] tracking-wide uppercase leading-tight mb-3">
            Laparoscopic Surgeries
          </h1>

          {/* Subtitle */}
          <p className="text-[13.5px] sm:text-[14px] text-[#64748b] leading-relaxed">
            Precision keyhole gynaecological surgeries led by{" "}
            <strong className="text-[#1a2836] font-bold">Dr. Gunjan Agarwal</strong>{" "}
            (20+ Years Clinical Excellence) at Anik IVF &amp; Arpit Mediworld.
          </p>
        </div>

        {/* ================= TWO-COLUMN LAYOUT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-[450px_1fr] gap-10 lg:gap-14 items-start">
          
          {/* ================= LEFT COLUMN: OT IMAGE CARD ================= */}
          <div className="flex flex-col gap-4">
            <div className="relative w-full rounded-2xl overflow-hidden bg-slate-900 border border-[#e2e8f0] shadow-sm min-h-[480px] flex flex-col justify-between">
              
              {/* Top Bar inside image */}
              <div className="relative z-10 p-4 flex items-center justify-end">
                <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-bold tracking-wider px-3 py-1 rounded-full uppercase border border-white/20">
                  ISO Certified Modular OT
                </span>
              </div>

              {/* Background OT Image */}
              {/* <img
                src={otImg}
                alt="Laparoscopic Surgery Team in OT"
                className="absolute inset-0 w-full h-full object-cover object-center"
              /> */}

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/95 via-transparent to-transparent"></div>

              {/* Bottom Stat Boxes Overlay */}
              <div className="relative z-10 grid grid-cols-3 gap-2 p-4 text-center text-white">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10">
                  <span className="block text-xs text-slate-300">🏥</span>
                  <strong className="block text-[11px] font-bold mt-1 uppercase tracking-tight">Keyhole Access</strong>
                  <span className="block text-[10px] text-slate-300 mt-0.5">Tiny 5-10 mm</span>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10">
                  <span className="block text-xs text-slate-300">⏱️</span>
                  <strong className="block text-[11px] font-bold mt-1 uppercase tracking-tight">Faster Healing</strong>
                  <span className="block text-[10px] text-slate-300 mt-0.5">24-48 Hr Discharge</span>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10">
                  <span className="block text-xs text-slate-300">✨</span>
                  <strong className="block text-[11px] font-bold mt-1 uppercase tracking-tight">Aesthetic</strong>
                  <span className="block text-[10px] text-slate-300 mt-0.5">Minimal Scarring</span>
                </div>
              </div>
            </div>

            {/* Bottom Info Pill */}
            <div className="bg-white border border-[#e2e8f0] rounded-xl px-4 py-3 flex items-center gap-3 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
              <span className="w-6 h-6 rounded-full bg-[#f1f5f9] text-[#2c3e50] flex items-center justify-center text-xs shrink-0 font-bold border border-[#e2e8f0]">
                ℹ
              </span>
              <div>
                <h4 className="text-xs font-bold text-[#1a2836] leading-tight">Supervised by Senior Gynaecologist</h4>
                <p className="text-[11px] text-[#64748b] mt-0.5 m-0 leading-normal">
                  Over 12,000+ completed complex endoscopic &amp; pelvic floor interventions.
                </p>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: PROCEDURES LIST ================= */}
          <div className="flex flex-col">
            
            {/* Sub-heading & Description */}
            <div className="mb-6">
              <span className="text-[11px] font-bold tracking-wider text-[#64748b] uppercase block mb-1">
                Specialized Spectrum
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-[#1a2836] mb-2">
                Common Laparoscopic Procedures in Gynaecology
              </h2>
              <p className="text-[13.5px] leading-relaxed text-[#55697d]">
                Advanced laparoscopic interventions performed in state-of-the-art modular operating suites with high-definition endoscopic optics and precision micro-instrumentation:
              </p>
            </div>

            {/* Procedures 2-Column Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 pb-6 border-b border-[#e2e8f0]">
              {procedures.map((proc) => (
                <div key={proc.id} className="flex items-start gap-3.5">
                  <span className="text-sm font-extrabold text-[#1a2836] tracking-tight shrink-0 mt-0.5">
                    {proc.id}
                  </span>
                  <div>
                    <h3 className="text-[13px] font-bold text-[#1a2836] leading-snug">
                      {proc.title}
                    </h3>
                    <p className="text-[11.5px] text-[#64748b] mt-0.5 leading-snug">
                      {proc.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Procedure 11 Full-width Item */}
            <div className="flex items-start gap-3.5 pt-6">
              <span className="text-sm font-extrabold text-[#1a2836] tracking-tight shrink-0 mt-0.5">
                11
              </span>
              <div>
                <h3 className="text-[13px] font-bold text-[#1a2836] leading-snug">
                  Laparoscopic Vaginoplasty &amp; Pelvic Floor Reconstruction
                </h3>
                <p className="text-[11.5px] text-[#64748b] mt-0.5 leading-snug">
                  Advanced structural repair for uterine prolapse, vaginal vault suspension, and congenital abnormalities.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default LaparoscopicSurgeries;