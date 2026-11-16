// import pediatricImg from "../assets/pediatrics.jpg"; // Yahan apni image ka path lagayein

const Pediatrics = () => {
  const clinicalAreas = [
    {
      id: 1,
      title: "Child Development",
      description:
        "Pediatricians monitor and assess the physical, cognitive, and emotional development of children. This includes milestones, growth charts, and age-appropriate behaviors.",
    },
    {
      id: 2,
      title: "Common Childhood Illnesses",
      description:
        "Pediatricians diagnose and treat a wide range of common childhood illnesses such as colds, flu, ear infections, strep throat, asthma, allergies, and gastrointestinal disorders.",
    },
    {
      id: 3,
      title: "Vaccinations & Immunizations",
      description:
        "Immunizations play a crucial role in preventing infectious diseases in children. Pediatricians provide guidance on the recommended vaccine schedule and address any concerns parents may have.",
    },
  ];

  return (
    <section className="w-full bg-[#f8fafc] py-16 px-4 sm:px-8 lg:px-14 font-sans text-[#334155]">
      <div className="max-w-[1240px] mx-auto">
        
        {/* ================= HEADER ================= */}
        <div className="text-center max-w-[850px] mx-auto mb-12">
          
          {/* Top Pill Tag */}
          <div className="inline-flex items-center gap-2 bg-[#f1f5f9] border border-[#e2e8f0] px-4 py-1.5 rounded-full mb-5">
            <span className="text-xs text-[#2c3e50]">✪</span>
            <span className="text-[11px] font-bold text-[#475569] tracking-wider uppercase">
              Pediatrics &amp; Child Wellness Clinical Care
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl font-serif font-black text-[#1a2836] tracking-tight uppercase leading-tight mb-3">
            Pediatrics
          </h1>

          {/* Accent Line */}
          <div className="w-12 h-1 bg-[#2c3e50] mx-auto rounded-full mb-4"></div>

          {/* Subtitle */}
          <p className="text-[14px] sm:text-[15px] text-[#64748b] leading-relaxed">
            Comprehensive infant, child &amp; adolescent medical care led by{" "}
            <strong className="text-[#1a2836] font-bold">Dr. Gunjan Agarwal &amp; Senior Pediatric Consultants</strong>{" "}
            (20+ Years Clinical Excellence) at Anik IVF &amp; Fertility Center.
          </p>
        </div>

        {/* ================= MAIN TWO-COLUMN CONTENT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-[450px_1fr] gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Image Card with Bottom Info Overlay */}
          <div className="relative w-full rounded-2xl overflow-hidden bg-white border border-[#e2e8f0] shadow-sm flex flex-col justify-end min-h-[480px] sm:min-h-[540px]">
            
            {/* Background Doctor & Baby Image */}
            {/* <img
              src={pediatricImg}
              alt="Pediatrician Examining Baby with Stethoscope"
              className="absolute inset-0 w-full h-full object-cover object-center"
            /> */}

            {/* Bottom Overlay Badge */}
            <div className="relative z-10 m-4 sm:m-5 bg-white/95 backdrop-blur-sm border border-[#e2e8f0] rounded-xl p-4 shadow-sm flex items-start gap-3">
              <div className="w-6 h-6 rounded-md bg-[#f1f5f9] border border-[#e2e8f0] flex items-center justify-center text-[#2c3e50] text-xs shrink-0 mt-0.5">
                🛡️
              </div>
              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#1a2836]">
                  Infant &amp; Child Specialized Care
                </h4>
                <p className="text-[11px] text-[#64748b] leading-snug mt-0.5 m-0">
                  Safe, compassionate, holistic development tracking from neonatal stages through young adulthood.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Descriptions & Focus Cards */}
          <div className="bg-white border border-[#e2e8f0] rounded-[24px] p-6 sm:p-8 lg:p-10 shadow-[0_4px_25px_rgba(0,0,0,0.02)] flex flex-col justify-between">
            <div>
              
              {/* Section Tag */}
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2c3e50]"></span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#475569]">
                  Clinical Focus Overview
                </span>
              </div>

              {/* Description Paragraph */}
              <p className="text-[13.5px] leading-relaxed text-[#55697d] mb-6">
                Pediatrics is a branch of medicine that focuses on the medical care of infants, children, and adolescents. It involves the diagnosis, treatment, and prevention of diseases and injuries in young individuals. Key areas of content related to pediatrics include:
              </p>

              {/* 3 Clinical Focus Cards */}
              <div className="space-y-3.5 mb-8">
                {clinicalAreas.map((area) => (
                  <div
                    key={area.id}
                    className="bg-white border border-[#edf2f7] rounded-xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex items-start gap-3.5"
                  >
                    <span className="w-6 h-6 rounded-full bg-[#2c3e50] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {area.id}
                    </span>
                    <div>
                      <h3 className="text-[13px] font-bold text-[#1a2836] mb-1">
                        {area.title}
                      </h3>
                      <p className="text-[12px] text-[#64748b] leading-relaxed m-0">
                        {area.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Footer Info Row */}
            <div className="pt-4 border-t border-[#f1f5f9] flex items-center justify-between text-xs text-[#64748b]">
              <div className="flex items-center gap-2">
                <span className="text-[#2c3e50] font-bold text-sm">✓</span>
                <span>Evidence-Based Guidelines</span>
              </div>
              <span className="font-medium text-[#475569]">
                Age Group: Newborn to 18 Years
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Pediatrics;