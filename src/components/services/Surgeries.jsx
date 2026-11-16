
const SurgicalPathway = () => {
  const pathwayCards = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#2c3e50]">
          <path d="M16 2v4" />
          <path d="M8 2v4" />
          <path d="M3 10h18" />
          <path d="M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
        </svg>
      ),
      phase: "PHASE 01",
      title: "Pre-Surgery Preparation",
      points: [
        { label: "Fasting", text: "Strict empty stomach 6 hours prior to OT." },
        { label: "Attire", text: "Loose, breathable cotton clothing & comfortable flat shoes." },
        { label: "Checklist", text: "Remove jewellery, nail polish, contact lenses & metallic hairpins." },
        { label: "Clearance", text: "Complete pre-anaesthetic (PAC) & blood evaluations." },
      ],
      quote: "“Arrive 2 hours prior with all prior imaging & pathology records.”",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#2c3e50]">
          <circle cx="12" cy="12" r="10" />
          <path d="m4.93 4.93 4.24 4.24" />
          <path d="m14.83 9.17 4.24-4.24" />
          <path d="m14.83 14.83 4.24 4.24" />
          <path d="m9.17 14.83-4.24 4.24" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      ),
      phase: "PHASE 02",
      title: "Inside the Operation Theatre",
      points: [
        { label: "Anaesthesia", text: "Performed completely painlessly under General Anaesthesia." },
        { label: "Port Access", text: "3 to 4 micro incisions (5 to 15 mm) on the abdominal wall." },
        { label: "HD Optics", text: "High-definition magnified optics with harmonic precision shears." },
        { label: "Closure", text: "Self-absorbable cosmetic sutures and waterproof skin plaster." },
      ],
      quote: "“Surgeries typically conclude in 45 to 90 minutes.”",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#2c3e50]">
          <line x1="2" y1="2" x2="22" y2="22" />
          <path d="M12 2v20" />
          <path d="M2 12h20" />
        </svg>
      ),
      phase: "PHASE 03",
      title: "Recovery & Home Care",
      points: [
        { label: "Mobilisation", text: "Walking encouraged within 4 to 6 hours after waking up." },
        { label: "Discharge", text: "Usually within 12 to 36 hours post-observation." },
        { label: "Work Return", text: "Resume light desk duties in 3 to 7 days." },
        { label: "Activity", text: "Avoid heavy weights (>5 kg) and strenuous aerobics for 6 weeks." },
      ],
      quote: "“Fibre-rich diet and ample hydration prevents post-op bloat.”",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#2c3e50]">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      phase: "CLINICAL SAFETY",
      title: "Complications & Protocol",
      description:
        "Transparent and ethical medicine mandates acknowledging that advanced gynaecological laparoscopy must be performed exclusively in specialized tertiary setups.",
      safetyPoints: [
        { text: "Conversion to open laparotomy risk minimized to <0.5% under Dr. Agarwal’s team." },
        { text: "100% sterile positive-pressure HEPA modular OT environment." },
      ],
      footerNote: "24/7 In-House Anaesthesia & ICU Backup",
    },
  ];

  return (
    <section className="w-full bg-[#fcfdfe] py-16 px-4 sm:px-8 lg:px-14 font-sans text-[#334155]">
      <div className="max-w-[1360px] mx-auto">
        
        {/* ================= HEADER ================= */}
        <div className="text-center max-w-[850px] mx-auto mb-14">
          <span className="text-[11px] font-bold tracking-[2px] text-[#64748b] uppercase block mb-2">
            Care Pathway
          </span>
          <h2 className="text-2xl sm:text-[32px] font-serif font-bold text-[#1a2836] leading-snug mb-3">
            Comprehensive Surgical Journey
          </h2>
          <p className="text-[13.5px] sm:text-[14px] text-[#64748b] leading-relaxed">
            Step-by-step guidance designed to ensure zero ambiguity, emotional safety, and rapid healing.
          </p>
        </div>

        {/* ================= 4 CARDS GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
          {pathwayCards.map((card, index) => (
            <div
              key={index}
              className="bg-white border border-[#edf2f7] rounded-2xl p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <div>
                {/* Icon */}
                <div className="mb-6">{card.icon}</div>

                {/* Phase Badge & Title */}
                <span className="text-[10px] font-bold tracking-widest text-[#64748b] uppercase block mb-1">
                  {card.phase}
                </span>
                <h3 className="text-[15px] font-bold text-[#1a2836] mb-5 leading-snug">
                  {card.title}
                </h3>

                {/* Clinical Safety Card Text */}
                {card.description && (
                  <p className="text-[12.5px] text-[#64748b] leading-relaxed mb-5">
                    {card.description}
                  </p>
                )}

                {/* Standard Phase Points */}
                {card.points && (
                  <div className="space-y-3.5 mb-6">
                    {card.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5">
                        <span className="text-[#2c3e50] text-xs mt-0.5 shrink-0">✓</span>
                        <p className="text-[12px] leading-relaxed text-[#55697d] m-0">
                          <strong className="text-[#1a2836] font-bold">{pt.label}:</strong> {pt.text}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Safety Points for Last Card */}
                {card.safetyPoints && (
                  <div className="space-y-3.5 mb-6">
                    {card.safetyPoints.map((sPt, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2.5">
                        <span className="text-[#2c3e50] text-xs mt-0.5 shrink-0">✓</span>
                        <p className="text-[12px] leading-relaxed text-[#55697d] m-0">
                          {sPt.text}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom Quote / Footer Info */}
              <div className="pt-4 border-t border-[#f1f5f9] mt-4">
                {card.quote && (
                  <p className="text-[11px] italic text-[#64748b] leading-normal m-0">
                    {card.quote}
                  </p>
                )}
                {card.footerNote && (
                  <div className="text-[11.5px] font-semibold text-[#1a2836] flex items-center gap-1.5">
                    <span className="text-xs text-[#2c3e50]">✱</span>
                    <span>{card.footerNote}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SurgicalPathway;
