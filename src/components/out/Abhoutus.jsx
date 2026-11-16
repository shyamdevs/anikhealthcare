import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import hr from "../../assets/gunjan 1.jpeg";

const CountUp = ({ end }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const duration = 3500;
    const incrementTime = 20;
    const increment = end / (duration / incrementTime);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        start = end;
        clearInterval(timer);
      }

      setCount(Math.floor(start));
    }, incrementTime);

    return () => clearInterval(timer);
  }, [end]);

  return <>{count.toLocaleString()}+</>;
};


const stats = [
  {
    number: 1200,
    title: "IVF Procedures Performed",
    icon: "♧",
    red: false,
  },
  {
    number: 4000,
    title: "Complicated Deliveries Handled",
    icon: "♡",
    red: true,
  },
  {
    number: 5000,
    title: "IUI Treatments Performed",
    icon: "↓",
    red: false,
  },
  {
    number: 6000,
    title: "Laparoscopic Surgeries",
    icon: "✥",
    red: true,
  },
];


export default function Abhoutus() {
  return (
    <section className="w-full bg-white text-[#1E293B] font-sans">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="w-full text-center px-5 pb-20">

        <h1 className="m-0 text-[48px] max-[1100px]:text-[42px] max-[900px]:text-[36px] max-[600px]:text-[29px] max-[380px]:text-[25px] font-extrabold tracking-[-1.5px] text-[#1E293B]">
          ABOUT CLINIC
        </h1>

        <span className="block w-[78px] h-[6px] max-[600px]:w-[60px] max-[600px]:h-[4px] mx-auto mt-[14px] mb-[18px] max-[600px]:mt-[10px] max-[600px]:mb-[14px] rounded-[10px] bg-[#2D4156]"></span>

        <p className="m-0 text-[18px] max-[900px]:text-[16px] max-[600px]:text-[14px] max-[380px]:text-[13px] leading-[1.5] text-[#64748B] font-medium">
          Dedicated Women’s Health, Advanced Reproductive Medicine & IVF
          Excellence in Jaipur
        </p>

      </div>


      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div
        className="
          w-full max-w-[1450px] mx-auto
          px-6
          pb-[70px]
          grid
          grid-cols-[1.55fr_1fr]
          gap-[65px]
          items-center

          max-[1100px]:grid-cols-[1.2fr_0.8fr]
          max-[1100px]:gap-[35px]

          max-[900px]:grid-cols-1
          max-[900px]:gap-[40px]

          max-[600px]:px-[15px]
          max-[600px]:pb-[40px]
          max-[600px]:gap-[30px]
        "
      >

        {/* =====================================================
            LEFT CONTENT
        ===================================================== */}

        <div className="w-full">

          {/* Paragraph 1 */}

          <p
            className="
              m-0 mb-6
              text-[17px]
              max-[1100px]:text-[15px]
              max-[600px]:text-[14px]
              max-[380px]:text-[13px]
              leading-[1.6]
              text-[#475569]
            "
          >
            <strong className="text-[#1E293B] font-bold">
              Anik IVF
            </strong>{" "}
            is Jaipur’s specialized{" "}
            <strong className="text-[#2D4156] font-bold">
              WOMEN HEALTH CARE &amp; FERTILITY CLINIC
            </strong>
            , dedicated to offering comprehensive diagnostic and
            therapeutic solutions for infertility, reproductive endocrinology,
            and advanced gynecological wellness.
          </p>


          {/* Paragraph 2 */}

          <p
            className="
              m-0 mb-6
              text-[17px]
              max-[1100px]:text-[15px]
              max-[600px]:text-[14px]
              max-[380px]:text-[13px]
              leading-[1.6]
              text-[#475569]
            "
          >
            Under the visionary guidance of{" "}
            <strong className="text-[#1E293B] font-bold">
              Dr. Gunjan Agarwal
            </strong>{" "}
            (Senior Infertility &amp; IVF Specialist with a prestigious
            Fellowship in Reproductive Medicine and 20+ years of dedicated clinical
            experience), every patient receives personalized clinical care, high success rate
            protocols, and compassionate counseling tailored to their fertility journey.
          </p>


          {/* Paragraph 3 */}

          <p
            className="
              m-0 mb-6
              text-[17px]
              max-[1100px]:text-[15px]
              max-[600px]:text-[14px]
              max-[380px]:text-[13px]
              leading-[1.6]
              text-[#475569]
            "
          >
            Our specialized clinic provides complete advanced reproductive
            care under one roof:{" "}
            <strong className="text-[#1E293B] font-bold">
              IVF, IUI, ICSI
            </strong>
            ,{" "}
            <strong className="text-[#1E293B] font-bold">
              Donor Oocyte &amp; Sperm programs
            </strong>
            ,{" "}
            <strong className="text-[#1E293B] font-bold">
              Blastocyst Culture
            </strong>
            , Male Infertility solutions (TESA/PESA/Micro-TESE), and
            advanced minimally invasive hysteroscopic &amp;
            laparoscopic management.
          </p>


          {/* =====================================================
              KEY ASPECTS
          ===================================================== */}

          <h2
            className="
              mt-[27px]
              mb-[15px]
              text-[18px]
              max-[600px]:text-[17px]
              text-[#1E293B]
              font-bold
            "
          >
            Key aspects of our clinic:
          </h2>


          <ul className="list-none p-0 m-0">

            {/* Point 1 */}

            <li
              className="
                flex
                items-start
                gap-3
                mb-[13px]
                text-[16px]
                max-[1100px]:text-[14px]
                max-[600px]:text-[13px]
                max-[380px]:text-[12.5px]
                leading-[1.55]
                text-[#475569]
              "
            >

              <span
                className="
                  shrink-0
                  w-[21px]
                  h-[21px]
                  mt-[3px]
                  flex
                  items-center
                  justify-center
                  rounded-full
                  bg-[#E2E8F0]
                  text-[#2D4156]
                  text-[13px]
                  font-bold
                "
              >
                ✓
              </span>

              <div>
                <strong className="text-[#1E293B] font-bold">
                  20+ Years Clinical Mastery:
                </strong>{" "}
                Led by Dr. Gunjan Agarwal with 20+ years of dedicated
                practice in reproductive medicine.
              </div>

            </li>


            {/* Point 2 */}

            <li
              className="
                flex
                items-start
                gap-3
                mb-[13px]
                text-[16px]
                max-[1100px]:text-[14px]
                max-[600px]:text-[13px]
                max-[380px]:text-[12.5px]
                leading-[1.55]
                text-[#475569]
              "
            >

              <span
                className="
                  shrink-0
                  w-[21px]
                  h-[21px]
                  mt-[3px]
                  flex
                  items-center
                  justify-center
                  rounded-full
                  bg-[#E2E8F0]
                  text-[#2D4156]
                  text-[13px]
                  font-bold
                "
              >
                ✓
              </span>

              <div>
                <strong className="text-[#1E293B] font-bold">
                  ART &amp; ICMR Certified Cleanroom Embryology Lab:
                </strong>{" "}
                Cleanroom environment equipped with precision incubation,
                laminar flow, and micro-manipulation systems.
              </div>

            </li>


            {/* Point 3 */}

            <li
              className="
                flex
                items-start
                gap-3
                mb-[13px]
                text-[16px]
                max-[1100px]:text-[14px]
                max-[600px]:text-[13px]
                max-[380px]:text-[12.5px]
                leading-[1.55]
                text-[#475569]
              "
            >

              <span
                className="
                  shrink-0
                  w-[21px]
                  h-[21px]
                  mt-[3px]
                  flex
                  items-center
                  justify-center
                  rounded-full
                  bg-[#E2E8F0]
                  text-[#2D4156]
                  text-[13px]
                  font-bold
                "
              >
                ✓
              </span>

              <div>
                <strong className="text-[#1E293B] font-bold">
                  Individualized Treatments &amp; Transparent Pricing:
                </strong>{" "}
                No templated treatments; crystal-clear pricing structures
                and holistic, compassionate counseling.
              </div>

            </li>


            {/* Point 4 */}

            <li
              className="
                flex
                items-start
                gap-3
                mb-[13px]
                text-[16px]
                max-[1100px]:text-[14px]
                max-[600px]:text-[13px]
                max-[380px]:text-[12.5px]
                leading-[1.55]
                text-[#475569]
              "
            >

              <span
                className="
                  shrink-0
                  w-[21px]
                  h-[21px]
                  mt-[3px]
                  flex
                  items-center
                  justify-center
                  rounded-full
                  bg-[#E2E8F0]
                  text-[#2D4156]
                  text-[13px]
                  font-bold
                "
              >
                ✓
              </span>

              <div>
                <strong className="text-[#1E293B] font-bold">
                  Location &amp; Helpline:
                </strong>{" "}
                382, Rani Sati Nagar, Ajmer Road, Jaipur{" "}
                <span className="text-[#2D4156] font-semibold">
                  • +91 9660760713 / 9521207070
                </span>
              </div>

            </li>

          </ul>


          {/* =====================================================
              BUTTONS
          ===================================================== */}

          <div
            className="
              flex
              items-center
              gap-4
              mt-8

              max-[600px]:flex-col
              max-[600px]:items-stretch
              max-[600px]:gap-[10px]
              max-[600px]:mt-[25px]
            "
          >

            <Link
              to="/about"
              className="no-underline 
                h-[55px]
                px-[27px]
                rounded-lg
                border
                border-[#2D4156]
                bg-[#2D4156]
                text-white
                text-[14px]
                font-bold
                cursor-pointer
                shadow-[0_6px_15px_rgba(45,65,86,0.18)]
                transition-all
                duration-200
                hover:bg-[#1E2D3D]
                hover:-translate-y-0.5

                max-[600px]:w-full
              "
            >
              READ MORE ABOUT CLINIC →
            </Link>


            <Link
              to="/contact"
              className="no-underline 
                h-[55px]
                min-w-[235px]
                px-[27px]
                rounded-lg
                border-2
                border-[#2D4156]
                bg-white
                text-[#2D4156]
                text-[14px]
                font-bold
                cursor-pointer
                transition-all
                duration-200
                hover:bg-[#F1F5F9]

                max-[600px]:w-full
              "
            >
              BOOK CONSULTATION
            </Link>

          </div>

        </div>


        {/* =====================================================
            DOCTOR CARD
        ===================================================== */}

        <div
          className="
            w-full
            max-w-[465px]
            ml-auto
            p-[25px]
            bg-white
            border
            border-[#E2E8F0]
            rounded-[22px]
            shadow-[0_12px_35px_rgba(0,0,0,0.03)]

            max-[1100px]:max-w-[420px]
            max-[1100px]:p-5

            max-[900px]:max-w-[500px]
            max-[900px]:mx-auto

            max-[600px]:p-[15px]
            max-[600px]:rounded-[18px]
          "
        >

          {/* Doctor Inner */}

          <div
            className="
              w-full
              p-[25px_20px_30px]
              text-center
              rounded-2xl
              bg-[#F8FAFC]
              border
              border-[#E2E8F0]

              max-[1100px]:p-[20px_15px_25px]

              max-[600px]:p-[20px_12px_25px]
            "
          >

            {/* Doctor Image */}

            <div
              className="
                w-[205px]
                h-[205px]
                mx-auto
                mb-[18px]
                flex
                items-center
                justify-center
                overflow-hidden
                rounded-full
                bg-white
                border-[5px]
                border-[#F1F5F9]
                shadow-[0_0_0_2px_#E2E8F0]

                max-[1100px]:w-[170px]
                max-[1100px]:h-[170px]

                max-[600px]:w-[155px]
                max-[600px]:h-[155px]

                max-[380px]:w-[130px]
                max-[380px]:h-[130px]
              "
            >

              <img
                src={hr}
                alt="Dr. Gunjan Agarwal"
                className="w-full h-full object-cover"
              />

            </div>


            {/* Doctor Name */}

            <h2
              className="
                m-0
                mb-[5px]
                text-[23px]
                text-[#1E293B]
                font-bold

                max-[600px]:text-[20px]
              "
            >
              Dr. Gunjan Agarwal
            </h2>


            {/* Doctor Role */}

            <h3
              className="
                m-0
                mb-[5px]
                text-[15px]
                text-[#475569]
                font-medium

                max-[600px]:text-[14px]
              "
            >
              Senior Infertility &amp; IVF Specialist
            </h3>


            <p
              className="
                m-0
                text-[13px]
                text-[#94A3B8]

                max-[600px]:text-[12px]
              "
            >
              Fellowship in Reproductive Medicine (20+ Yrs Exp)
            </p>

          </div>


          {/* Compliance */}

          <div
            className="
              min-h-[46px]
              mt-[15px]
              px-[15px]
              py-[9px]
              flex
              items-center
              justify-center
              gap-[9px]
              rounded-[10px]
              bg-[#F8FAFC]
              border
              border-[#E2E8F0]
              text-[#334155]
              text-[13px]

              max-[600px]:min-h-[42px]
              max-[600px]:text-[11px]
              max-[600px]:p-2
            "
          >

            <span
              className="
                w-5
                h-5
                shrink-0
                flex
                items-center
                justify-center
                rounded-full
                bg-[#2D4156]
                text-white
                text-[11px]
              "
            >
              ✓
            </span>

            <strong>
              ART &amp; ICMR Compliant Fertility Center
            </strong>

          </div>

        </div>

      </div>


      {/* =====================================================
          STATISTICS
      ===================================================== */}

      <div
        className="
          w-full
          px-[14px]
          pb-[35px]

          max-[600px]:px-[15px]
        "
      >

        <div
          className="
            w-full
            max-w-[1400px]
            mx-auto
            grid
            grid-cols-4
            gap-5

            max-[1100px]:gap-[14px]

            max-[900px]:grid-cols-2

            max-[600px]:grid-cols-1
            max-[600px]:gap-[10px]
          "
        >

          {stats.map((item, index) => (

            <div
              key={index}
              id={item.title === "IUI Treatments Performed" ? "iui-treatment" : undefined}
              className={`
                h-[105px]
                min-h-[105px]
                px-[18px]
                py-[15px]
                flex
                items-center
                gap-[15px]
                rounded-[14px]
                border
                shadow-[0_5px_18px_rgba(0,0,0,0.02)]

                max-[1100px]:h-[95px]
                max-[1100px]:min-h-[95px]
                max-[1100px]:px-[14px]
                max-[1100px]:py-3
                max-[1100px]:gap-[11px]

                max-[600px]:h-[82px]
                max-[600px]:min-h-[82px]
                max-[600px]:px-[14px]
                max-[600px]:py-3
                max-[600px]:gap-3

                max-[380px]:h-[78px]
                max-[380px]:min-h-[78px]

                ${
                  item.red
                    ? "bg-[#2D4156] border-[#2D4156] shadow-[0_7px_20px_rgba(45,65,86,0.18)]"
                    : "bg-white border-[#E2E8F0]"
                }
              `}
            >

              {/* Stat Icon */}

              <div
                className={`
                  w-12
                  min-w-12
                  h-12
                  flex
                  items-center
                  justify-center
                  rounded-[10px]
                  border
                  text-[25px]

                  max-[1100px]:w-[43px]
                  max-[1100px]:min-w-[43px]
                  max-[1100px]:h-[43px]
                  max-[1100px]:text-[22px]

                  max-[600px]:w-[43px]
                  max-[600px]:min-w-[43px]
                  max-[600px]:h-[43px]

                  max-[380px]:w-10
                  max-[380px]:min-w-10
                  max-[380px]:h-10
                  max-[380px]:text-[21px]

                  ${
                    item.red
                      ? "bg-white/10 border-white/20 text-white"
                      : "bg-[#F1F5F9] border-[#E2E8F0] text-[#2D4156]"
                  }
                `}
              >
                {item.icon}
              </div>


              {/* Stat Content */}

              <div>

                <div
                  className={`
                    mb-1
                    text-[28px]
                    leading-none
                    font-extrabold

                    max-[1100px]:text-[25px]

                    max-[600px]:text-[25px]

                    max-[380px]:text-[23px]

                    ${
                      item.red
                        ? "text-white"
                        : "text-[#1E293B]"
                    }
                  `}
                >
                  <CountUp end={item.number} />
                </div>


                <div
                  className={`
                    text-[13px]
                    leading-[1.3]
                    font-medium

                    max-[1100px]:text-[12px]

                    max-[600px]:text-[12px]

                    ${
                      item.red
                        ? "text-white/85"
                        : "text-[#64748B]"
                    }
                  `}
                >
                  {item.title}
                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}