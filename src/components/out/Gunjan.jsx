import doctorImg from "../../assets/gunjan 1.jpeg";

function Gunjan () {
  return (
    <>
      <section className="w-full bg-white py-14 px-4 sm:px-8 lg:px-16 font-sans">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-[430px_1fr] gap-10 lg:gap-14 items-center">
          
          {/* Left Side - Doctor Image Card */}
          <div className="relative w-full max-w-[430px] mx-auto">
            {/* Outer Border Box */}
            <div className="relative rounded-[28px] border-2 border-[#7c8ba1]/40 p-3 bg-white shadow-sm">
              <div className="relative rounded-[22px] overflow-hidden aspect-[4/4.8] bg-slate-100">
                <img
                  src={doctorImg}
                  alt="Dr. Gunjan Agarwal"
                  className="w-full h-full object-cover"
                />

                {/* Gradient Overlay for Text Visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/90 via-[#111827]/30 to-transparent"></div>

                {/* Doctor Details at Bottom of Image */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl sm:text-[26px] font-bold tracking-tight">
                    Dr. Gunjan Agarwal
                  </h3>
                  <p className="text-xs sm:text-[13px] text-gray-200 mt-1 font-medium">
                    Senior Infertility &amp; IVF Specialist | Director, Anik IVF
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Information Content */}
          <div className="w-full flex flex-col justify-center">
            
            {/* Top Pill Tag */}
            <div className="inline-flex items-center gap-2 self-start bg-[#f1f5f9] border border-[#e2e8f0] px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-[#3b4b59]"></span>
              <span className="text-[11px] font-bold text-[#475569] tracking-wider uppercase">
                Lead Fertility Specialist &amp; Founder
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#1a2836] leading-[1.2] tracking-tight mb-6">
              Meet Dr. Gunjan Agarwal –<br />
               IVF Doctor in Jaipur
            </h2>

            {/* Paragraphs */}
            <div className="space-y-5 text-[#55697d] text-[15px] sm:text-base leading-relaxed">
              <p>
                Dr. Gunjan Agarwal is recognized as one of the{" "}
                <strong className="text-[#1a2836] font-bold">
                   IVF and infertility specialists in Jaipur
                </strong>{" "}
                and a pioneering name in reproductive medicine. With more than{" "}
                <strong className="text-[#1a2836] font-bold">
                  20+ years of clinical experience
                </strong>{" "}
                in advanced reproductive medicine, she has dedicated her career to
                helping couples realize their dream of parenthood.
              </p>

              <p>
                Holding a prestigious{" "}
                <strong className="text-[#1a2836] font-bold">
                  Fellowship in Reproductive Medicine
                </strong>
                , Dr. Gunjan has brought happiness to{" "}
                <strong className="text-[#1a2836] font-bold">
                  thousands of families
                </strong>{" "}
                across Rajasthan and India through compassionate, evidence-based
                fertility protocols, personalized IVF care, and advanced
                embryology standards.
              </p>
            </div>

            {/* Bottom Highlight Boxes */}
            <div className="mt-8 bg-white border border-[#edf2f7] rounded-2xl p-4 sm:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              {/* Box 1 */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#f1f5f9] flex items-center justify-center text-[#2c3e50] text-lg shrink-0">
                  ♙
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1a2836] leading-tight">
                    20+ Years
                  </h4>
                  <p className="text-xs text-[#64748b] mt-0.5">
                    Clinical Experience
                  </p>
                </div>
              </div>

              {/* Box 2 */}
              <div className="flex items-center gap-3 sm:border-l sm:border-[#edf2f7] sm:pl-4">
                <div className="w-10 h-10 rounded-xl bg-[#f1f5f9] flex items-center justify-center text-[#2c3e50] text-lg shrink-0">
                  ⬡
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1a2836] leading-tight">
                    Fellowship
                  </h4>
                  <p className="text-xs text-[#64748b] mt-0.5">
                    Reproductive Medicine
                  </p>
                </div>
              </div>

              {/* Box 3 */}
              <div className="flex items-center gap-3 sm:border-l sm:border-[#edf2f7] sm:pl-4">
                <div className="w-10 h-10 rounded-xl bg-[#f1f5f9] flex items-center justify-center text-[#2c3e50] text-base shrink-0">
                  ♡
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1a2836] leading-tight">
                    5,000+
                  </h4>
                  <p className="text-xs text-[#64748b] mt-0.5">
                    Happy Families
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}

export default Gunjan;