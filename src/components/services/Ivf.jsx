
// Diagrams ke liye SVG illustrations (Aap chahein toh directly images bhi use kar sakte hain)
const DiagramStageA = () => (
  <svg viewBox="0 0 300 180" className="w-full max-w-[220px] mx-auto h-auto">
    <path
      d="M150,140 C150,90 120,40 60,50 C40,53 30,70 40,90 C50,110 80,110 90,80"
      fill="none"
      stroke="#e5989b"
      strokeWidth="2.5"
    />
    <path
      d="M150,140 C150,90 180,40 240,50 C260,53 270,70 260,90 C250,110 220,110 210,80"
      fill="none"
      stroke="#e5989b"
      strokeWidth="2.5"
    />
    <path
      d="M130,80 C130,50 170,50 170,80 C170,120 150,150 150,150 C150,150 130,120 130,80 Z"
      fill="#fde2e4"
      stroke="#e5989b"
      strokeWidth="2"
    />
    <circle cx="55" cy="80" r="18" fill="#ffe5d9" stroke="#e5989b" strokeWidth="2" />
    <circle cx="50" cy="76" r="4" fill="#e5989b" />
    <circle cx="60" cy="82" r="5" fill="#e5989b" />
    <line x1="55" y1="120" x2="55" y2="98" stroke="#3b4b59" strokeWidth="2" strokeDasharray="3 3" />
  </svg>
);

const DiagramStageB = () => (
  <svg viewBox="0 0 300 160" className="w-full max-w-[220px] mx-auto h-auto">
    {/* Micro-injection needle */}
    <line x1="40" y1="80" x2="110" y2="80" stroke="#718096" strokeWidth="3" />
    <polygon points="110,77 125,80 110,83" fill="#718096" />
    {/* Oocyte / Egg */}
    <circle cx="160" cy="80" r="38" fill="#fff0f3" stroke="#e5989b" strokeWidth="3" />
    <circle cx="160" cy="80" r="26" fill="#fcd5ce" stroke="#e5989b" strokeWidth="2" />
    <circle cx="155" cy="76" r="7" fill="#e5989b" opacity="0.6" />
    {/* Holding Pipette / Second cell */}
    <circle cx="245" cy="80" r="22" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 3" />
  </svg>
);

const DiagramStageC = () => (
  <svg viewBox="0 0 300 180" className="w-full max-w-[220px] mx-auto h-auto">
    <path
      d="M150,145 C150,90 120,50 70,60 C50,64 45,80 55,95 C68,112 90,105 95,85"
      fill="none"
      stroke="#e5989b"
      strokeWidth="2.5"
    />
    <path
      d="M150,145 C150,90 180,50 230,60 C250,64 255,80 245,95 C232,112 210,105 205,85"
      fill="none"
      stroke="#e5989b"
      strokeWidth="2.5"
    />
    <path
      d="M132,85 C132,60 168,60 168,85 C168,125 150,150 150,150 C150,150 132,125 132,85 Z"
      fill="#fde2e4"
      stroke="#e5989b"
      strokeWidth="2"
    />
    {/* Transfer Catheter */}
    <line x1="150" y1="170" x2="150" y2="105" stroke="#2c3e50" strokeWidth="3" />
    <circle cx="150" cy="100" r="3" fill="#2c3e50" />
    {/* Implanting Blastocyst */}
    <circle cx="230" cy="120" r="20" fill="#fff0f3" stroke="#e5989b" strokeWidth="2" />
    <circle cx="230" cy="120" r="10" fill="#fcd5ce" />
  </svg>
);

const IvfTreatment = () => {
  const choosePoints = [
    {
      title: "Experienced Fertility Specialists",
      desc: "Led by Dr. Gunjan Agarwal with over two decades of dedicated expertise in complex fertility treatments and high-precision embryology.",
    },
    {
      title: "State-of-the-Art Embryology Laboratory",
      desc: "Equipped with Class-10,000 cleanrooms, advanced ICSI micromanipulators, and benchtop tri-gas incubators for optimal embryo growth.",
    },
    {
      title: "Personalized Treatment Plans",
      desc: "Every couple's medical background is unique. We tailor individual medication dosages, timing, and protocols rather than applying a one-size-fits-all model.",
    },
    {
      title: "Consistently High Success Rates",
      desc: "By adhering strictly to international clinical standards (ESHRE and ISAR guidelines), we maximize cumulative positive outcomes.",
    },
    {
      title: "Comprehensive End-to-End Care",
      desc: "From baseline fertility screening and diagnostic sonography to joyful early pregnancy monitoring, our team walks alongside you at each milestone.",
    },
  ];

  return (
    <section id="ivf-treatment" className="w-full scroll-mt-28 bg-white py-12 px-4 sm:px-8 lg:px-14 font-sans text-[#334155]">
      <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-[440px_1fr] gap-12 lg:gap-16 items-start">
        
        {/* ================= LEFT COLUMN: CLINICAL PROTOCOL ILLUSTRATIONS ================= */}
        <div className="w-full flex flex-col">
          {/* Header Row */}
          <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-6">
            <span className="text-[11px] font-bold tracking-wider text-[#64748b] uppercase">
              Clinical Protocol Illustrations
            </span>
            <span className="text-[11px] font-medium text-[#94a3b8]">
              Stages A • B • C
            </span>
          </div>

          <div className="space-y-6">
            {/* Stage A Card */}
            <div className="bg-white border border-[#edf2f7] rounded-2xl p-5 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
              <div className="flex items-center justify-between mb-4">
                <span className="w-6 h-6 rounded-full bg-[#2c3e50] text-white text-xs font-bold flex items-center justify-center">
                  A
                </span>
                <h4 className="text-xs font-semibold text-[#475569]">
                  Follicular Aspiration &amp; Ovum Pick-Up
                </h4>
              </div>
              <div className="py-2 flex items-center justify-center">
                <DiagramStageA />
              </div>
              <p className="text-center text-[11px] text-[#64748b] mt-3">
                Follicles stimulated to maturity and harvested via precise ultrasound aspiration.
              </p>
            </div>

            {/* Stage B Card */}
            <div id="icsi-procedures" className="scroll-mt-28 bg-white border border-[#edf2f7] rounded-2xl p-5 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
              <div className="flex items-center justify-between mb-4">
                <span className="w-6 h-6 rounded-full bg-[#2c3e50] text-white text-xs font-bold flex items-center justify-center">
                  B
                </span>
                <h4 className="text-xs font-semibold text-[#475569]">
                  ICSI Micro-Injection &amp; Lab Culture
                </h4>
              </div>
              <div className="py-2 flex items-center justify-center">
                <DiagramStageB />
              </div>
              <p className="text-center text-[11px] text-[#64748b] mt-3">
                High-precision ICSI sperm micro-injection performed in our Class-10,000 embryology cleanroom.
              </p>
            </div>

            {/* Stage C Card */}
            <div className="bg-white border border-[#edf2f7] rounded-2xl p-5 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
              <div className="flex items-center justify-between mb-4">
                <span className="w-6 h-6 rounded-full bg-[#2c3e50] text-white text-xs font-bold flex items-center justify-center">
                  C
                </span>
                <h4 className="text-xs font-semibold text-[#475569]">
                  Ultra-Smooth Embryo Implantation Transfer
                </h4>
              </div>
              <div className="py-2 flex items-center justify-center">
                <DiagramStageC />
              </div>
              <p className="text-center text-[11px] text-[#64748b] mt-3">
                Catheter-guided placement of top-grade blastocyst gently into receptive uterine lining.
              </p>
            </div>
          </div>

          <p className="text-[10px] text-[#94a3b8] uppercase tracking-wider mt-6">
            © Anik IVF &amp; Fertility Center, Medical Education &amp; Patient Care Protocols.
          </p>
        </div>

        {/* ================= RIGHT COLUMN: CLINICAL DETAIL & DESCRIPTION ================= */}
        <div className="w-full flex flex-col">
          
          {/* Top Pill Tag */}
          <div className="inline-flex items-center gap-2 self-start bg-[#f1f5f9] border border-[#e2e8f0] px-4 py-1.5 rounded-full mb-5">
            <span className="w-2 h-2 rounded-full bg-[#2c3e50]"></span>
            <span className="text-[11px] font-bold text-[#475569] tracking-wider">
              Advanced Assisted Reproductive Technology (ART)
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#1a2836] leading-[1.2] mb-3">
            IVF Treatment at Anik IVF &amp; Fertility Center
          </h1>

          {/* Subheading / Guiding specialist */}
          <p className="text-[14px] text-[#64748b] italic mb-6">
            Your journey to parenthood starts here under the guidance of{" "}
            <strong className="text-[#1a2836] font-semibold not-italic">
              Dr. Gunjan Agarwal
            </strong>{" "}
            (20+ Years of Excellence in Reproductive Medicine).
          </p>

          <p className="text-[14.5px] leading-relaxed text-[#475569] mb-8">
            At <strong className="text-[#1a2836]">Anik IVF Center (Arpit Mediworld)</strong>, we understand that the path to becoming
            parents can be challenging and deeply emotional for many couples. Our world-class IVF (In Vitro Fertilization)
            services are designed to provide renewed hope, empathetic clinical care, and the highest pregnancy success
            rates through advanced reproductive science and individual focus.
          </p>

          {/* Section: What is IVF? */}
          <div className="mb-8">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-1 h-5 bg-[#2c3e50] rounded-sm"></span>
              <h2 className="text-xl sm:text-[22px] font-serif font-bold text-[#1a2836]">
                What is IVF?
              </h2>
            </div>
            <p className="text-[14px] leading-relaxed text-[#475569]">
              In Vitro Fertilization (IVF) is a specialized medical procedure where mature eggs are retrieved from the ovaries
              and fertilized with selected sperm in our advanced embryology laboratory. The resulting high-viability embryo is
              nurtured and carefully transferred into the uterus to achieve a healthy pregnancy. IVF has helped millions of
              couples worldwide fulfill their dream of becoming parents, and we take pride in offering this advanced treatment
              in a reassuring, ethical, and supportive environment.
            </p>
          </div>

          {/* Section: Why Choose Anik IVF Center */}
          <div id="why-choose-us" className="mb-10 scroll-mt-28">
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-1 h-5 bg-[#2c3e50] rounded-sm"></span>
              <h2 className="text-xl sm:text-[22px] font-serif font-bold text-[#1a2836]">
                Why Choose Anik IVF Center for IVF?
              </h2>
            </div>

            <div className="space-y-4">
              {choosePoints.map((item, index) => (
                <div
                  key={index}
                  id={item.title === "State-of-the-Art Embryology Laboratory" ? "embryology-care" : undefined}
                  className="flex scroll-mt-28 items-start gap-3"
                >
                  <span className="text-[#2c3e50] text-sm mt-0.5 shrink-0 font-bold">
                    ✓
                  </span>
                  <p className="text-[13.5px] leading-relaxed text-[#475569]">
                    <strong className="text-[#1a2836] font-bold">
                      {item.title}
                    </strong>{" "}
                    — {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Banner Card: Book Consultation */}
          <div className="w-full bg-[#2c3e50] text-white rounded-2xl p-6 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-[0_8px_25px_rgba(44,62,80,0.18)]">
            <div>
              <h3 className="text-lg font-serif font-bold tracking-tight">
                Book Your Confidential IVF Consultation Today
              </h3>
              <p className="text-xs text-[#cbd5e1] mt-1">
                Take the first confident step towards holding your healthy baby.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href="tel:+919660760713"
                className="inline-flex items-center gap-2 bg-white text-[#2c3e50] text-xs font-bold px-4 py-2.5 rounded-lg shadow-sm hover:bg-gray-100 transition"
              >
                <span>📞</span> +91 9660760713
              </a>
              <a
                href="tel:+919521207070"
                className="inline-flex items-center bg-[#1e2d3d] text-white text-xs font-bold px-4 py-2.5 rounded-lg hover:bg-[#16222f] transition"
              >
                +91 9521207070
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default IvfTreatment;