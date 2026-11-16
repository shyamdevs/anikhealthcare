import obstetricsDoctorImg from "../../assets/g5.jpeg"; 

const Obstetrics = () => {
  const specialties = [
    {
      id: 1,
      title: "High Risk Pregnancy & Critical Monitoring",
    },
    {
      id: 2,
      title: "Antenatal Classes & Maternal Nutrition",
    },
    {
      id: 3,
      title: "Preconceptional Counselling & Advice",
    },
    {
      id: 4,
      title: "Twins / Multiple Gestations Care",
    },
    {
      id: 5,
      title: "Normal & Natural Delivery Protocols",
    },
    {
      id: 6,
      title: "Advanced Caesarean & Level-III NICU",
    },
    {
      id: 7,
      title: "Painless Delivery (Epidural Analgesia)",
    },
    {
      id: 8,
      title: "Chromosomal & Genetic Anomaly Screening",
    },
  ];

  return (
    <section className="w-full bg-[#f8fafc] py-16 px-4 sm:px-8 lg:px-14 font-sans text-[#334155]">
      <div className="max-w-[1240px] mx-auto">
        
        {/* ================= HEADER ================= */}
        <div className="text-center max-w-[850px] mx-auto mb-12">
          
          {/* Top Pill Tag */}
          <div className="inline-flex items-center gap-2 bg-[#f1f5f9] border border-[#e2e8f0] px-4 py-1.5 rounded-full mb-5">
            <span className="text-xs text-[#2c3e50]">⚕</span>
            <span className="text-[11px] font-bold text-[#475569] tracking-wider uppercase">
              Maternal Care &amp; Pregnancy Excellence
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl font-serif font-black text-[#1a2836] tracking-tight uppercase leading-tight mb-3">
            Obstetrics
          </h1>

          {/* Subtitle */}
          <p className="text-[14px] sm:text-[15px] text-[#64748b] leading-relaxed">
            Comprehensive pregnancy care led by{" "}
            <strong className="text-[#1a2836] font-bold">Dr. Gunjan Agarwal</strong>{" "}
            (20+ Years Clinical Excellence) at Anik IVF &amp; Fertility Center.
          </p>
        </div>

        {/* ================= MAIN CARD CONTAINER ================= */}
        <div className="bg-white border border-[#e2e8f0] rounded-[26px] p-6 sm:p-8 lg:p-10 shadow-[0_4px_25px_rgba(0,0,0,0.03)] grid grid-cols-1 lg:grid-cols-[450px_1fr] gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Doctor/Patient Checkup Image Card */}
          <div className="relative w-full rounded-2xl overflow-hidden bg-slate-50 border border-[#edf2f7] flex flex-col justify-end min-h-[460px] sm:min-h-[520px]">
            
            {/* Background Consultation Image */}
            <img
              src={obstetricsDoctorImg}
              alt="Obstetrics Care & Monitoring"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />

            {/* Bottom Overlay Badge */}
            <div className="relative z-10 m-4 sm:m-5 bg-white/95 backdrop-blur-sm border border-[#e2e8f0] rounded-xl p-4 shadow-sm flex items-start gap-3">
              <div className="w-7 h-7 rounded-full bg-[#f1f5f9] flex items-center justify-center text-[#2c3e50] text-sm shrink-0">
                ♡
              </div>
              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#1a2836]">
                  Dedicated Maternal Care
                </h4>
                <p className="text-[11px] text-[#64748b] leading-tight mt-0.5">
                  Continuum of safety, empathy &amp; neonatal expertise from conception to birth.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Descriptions & Specialties List */}
          <div className="flex flex-col">
            
            {/* Section 1: What is Obstetrics? */}
            <div className="mb-7">
              <div className="flex items-center gap-2 mb-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2c3e50]"></span>
                <h3 className="text-xl sm:text-[22px] font-bold text-[#1a2836]">
                  What is Obstetrics?
                </h3>
              </div>
              <p className="text-[13.5px] leading-relaxed text-[#55697d]">
                Obstetrics is the medical field concentrated entirely on pregnancy, childbirth, and the postpartum recovery phase. Led by{" "}
                <strong className="text-[#1a2836] font-semibold">Dr. Gunjan Agarwal</strong>, our specialized department seamlessly unites obstetrics with gynaecology (OB/GYN) to deliver compassionate, modern, and evidence-based clinical protocols through every trimester.
              </p>
            </div>

            {/* Section 2: What We Do? */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2c3e50]"></span>
                <h3 className="text-xl sm:text-[22px] font-bold text-[#1a2836]">
                  What We Do?
                </h3>
              </div>
              <p className="text-[13.5px] leading-relaxed text-[#55697d]">
                The Department of Obstetrics at{" "}
                <strong className="text-[#1a2836]">Anik IVF &amp; Arpit Mediworld</strong> provides the full spectrum of maternal-fetal medical services. We combine advanced fetal diagnosis with patient-first empathetic care—ensuring safe pain-managed deliveries, complex high-risk vigilance, and dedicated mother-infant well-being.
              </p>
            </div>

            {/* Specialties Bar Header */}
            <div className="flex items-center justify-between pb-3 border-b border-[#f1f5f9] mb-4">
              <span className="text-[11px] font-bold tracking-wider text-[#64748b] uppercase">
                Specialized Obstetric Services
              </span>
              <span className="text-[11px] font-semibold text-[#94a3b8]">
                8 Core Specialties
              </span>
            </div>

            {/* 8 Specialties 2-Column Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 mb-8">
              {specialties.map((item) => (
                <div key={item.id} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#f1f5f9] border border-[#e2e8f0] text-[#2c3e50] text-xs font-bold flex items-center justify-center shrink-0">
                    {item.id}
                  </span>
                  <p className="text-xs font-medium text-[#334155] leading-snug m-0">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Guarantee Badge */}
            <div className="pt-4 border-t border-[#f1f5f9] flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-[#10b981] text-white flex items-center justify-center text-[10px] shrink-0">
                ✓
              </span>
              <p className="text-xs text-[#64748b] font-medium m-0">
                Round-the-clock emergency obstetric surgery &amp; continuous fetal cardiotocography (CTG).
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Obstetrics;