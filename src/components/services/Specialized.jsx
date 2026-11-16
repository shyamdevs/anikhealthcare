
const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
        <polyline points="17 21 17 13 7 13 7 21" />
        <polyline points="7 3 7 8 15 8" />
      </svg>
    ),
    title: "Well-Baby / Child Check-ups",
    desc: "Regular check-ups are important for monitoring a child's growth, development, and overall health. These visits often include physical examinations, screenings, and discussions about nutrition, sleep, and safety.",
    tag: "ROUTINE SCREENING",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-rose-500">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: "Pediatric Emergencies",
    desc: "Pediatricians are trained to handle medical emergencies involving children, such as severe injuries, accidents, seizures, allergic reactions, and acute illnesses. They may work in emergency departments or advise parents on how to handle emergencies at home.",
    tag: "ACUTE & URGENT CARE",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
    title: "Chronic Conditions",
    desc: "Pediatricians care for children with chronic conditions like diabetes, asthma, epilepsy, congenital heart defects, and developmental disorders. They provide ongoing management, coordinate with specialists, and help improve quality of life.",
    tag: "LONG-TERM MANAGEMENT",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Adolescent Health",
    desc: "Pediatricians also address the unique healthcare needs of teenagers, including puberty, mental health, sexual and reproductive health, substance abuse, and healthy lifestyle choices.",
    tag: "TEEN WELLNESS",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Preventive Medicine",
    desc: "Promoting healthy habits and preventing diseases is an essential part of pediatrics. Pediatricians educate families on topics such as nutrition, exercise, injury prevention, and the dangers of tobacco, alcohol, and drugs.",
    tag: "HEALTH EDUCATION",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
      </svg>
    ),
    title: "Child Psychology & Behavioral",
    desc: "Pediatricians often evaluate and address behavioral and psychological concerns in children, such as ADHD, autism spectrum disorders, anxiety, depression, and other mental health conditions.",
    tag: "NEUROBEHAVIORAL HEALTH",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Child Safety & SIDS",
    desc: "Pediatricians emphasize the importance of child safety, including car seat usage, safe sleep practices to prevent Sudden Infant Death Syndrome (SIDS), home safety, and protection against accidents and injuries.",
    tag: "INJURY PREVENTION",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Family-Centered Care",
    desc: "Pediatricians work closely with parents and caregivers to provide comprehensive care for children. They focus not only on treating illnesses but also on promoting the overall well-being and healthy development of young individuals.",
    tag: "PARENTAL PARTNERSHIP",
  },
];

const PediatricSpectrum = () => {
  return (
    <section className="w-full bg-white py-14 px-4 sm:px-8 lg:px-14 font-sans text-[#334155]">
      <div className="max-w-[1360px] mx-auto">
        
        {/* ================= HEADER ================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-[11px] font-bold tracking-wider text-[#64748b] uppercase block mb-1.5">
              Continuous Pediatric Services
            </span>
            <h2 className="text-2xl sm:text-[32px] font-serif font-bold text-[#1a2836] leading-tight">
              Specialized Pediatric Healthcare Spectrum
            </h2>
          </div>

          <p className="text-[13px] text-[#64748b] max-w-[380px] leading-relaxed m-0 text-left md:text-right">
            Structured diagnostic assessments, proactive preventive strategies, and personalized wellness plans.
          </p>
        </div>

        {/* ================= 8 CARDS GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#edf2f7] rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <div>
                {/* Icon Wrapper */}
                <div className="w-9 h-9 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] flex items-center justify-center text-[#2c3e50] mb-5">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-[15px] font-bold text-[#1a2836] mb-3 leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[12px] text-[#64748b] leading-relaxed m-0">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Tag */}
              <div className="pt-6 mt-6 border-t border-[#f8fafc]">
                <span className="text-[10px] font-bold tracking-wider text-[#94a3b8] uppercase">
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PediatricSpectrum;