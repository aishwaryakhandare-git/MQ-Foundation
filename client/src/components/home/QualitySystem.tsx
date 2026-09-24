import { type ComponentType } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Search,
  GraduationCap,
  BarChart3,
  Trophy,
  RefreshCcw,
  Globe,
  ArrowRight,
} from "lucide-react";

type QualityStage = {
  num: string;
  title: string;
  icon: ComponentType<{
    className?: string;
    strokeWidth?: number;
  }>;
  description: string;
  image: string;
};

const QUALITY_STAGES: QualityStage[] = [
  {
    num: "01",
    title: "Discover & Plan",
    icon: Search,
    description:
      "Understand the existing sporting landscape and build a strategy aligned to the school's goals.",
    image: "/images/Home/Community_Impact.jpeg",
  },
  {
    num: "02",
    title: "Coach Development",
    icon: GraduationCap,
    description:
      "Continuously develop certified coaches to deliver consistent, high-quality and age-appropriate sessions.",
    image: "/images/Home/GrassrootPlay.jpeg",
  },
  {
    num: "03",
    title: "Assess & Track",
    icon: BarChart3,
    description:
      "Capture measurable data on participation, skill development, and fitness through structured assessments.",
    image: "/images/Card 05.png",
  },
  {
    num: "04",
    title: "Play & Compete",
    icon: Trophy,
    description:
      "Apply development through PE, grassroots sport, and structured competitive opportunities.",
    image: "/images/WhySportsMatter/Image3.jpeg",
  },
  {
    num: "05",
    title: "Review & Improve",
    icon: RefreshCcw,
    description:
      "Analyse performance insights to refine programmes, set new targets, and continuously raise standards.",
    image: "/images/Home/Sports_Development.jpeg",
  },
  {
    num: "06",
    title: "Grow & Expand",
    icon: Globe,
    description:
      "Scale sporting culture through competitions, exposure opportunities, and wider ecosystem experiences.",
    image: "/images/Student-AfterImg.png",
  },
];

/* ---------------------------------------------------------
   Header underline
--------------------------------------------------------- */

function Underline() {
  return (
    <svg
      className="absolute -bottom-3 left-0 h-3 w-full"
      viewBox="0 0 160 12"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 8 C 28 2, 54 10, 82 6 C 110 2, 135 8, 157 5"
        stroke="#165DFF"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ---------------------------------------------------------
   Component
--------------------------------------------------------- */

export default function QualitySystem() {
  return (
    <section className="relative overflow-hidden bg-white pt-8 pb-20 lg:pt-10 lg:pb-24">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Background image */}
        <img
          src="/images/measure-bg.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-left opacity-100"
        />

        {/* Very subtle dots */}
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "radial-gradient(#0A1E4F 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-10">

        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-12 max-w-[900px] text-center lg:mb-14"
        >
          <h2 className="heading-2 font-heading font-extrabold leading-[1.05] tracking-tight text-[#0A1E4F] text-[1.6rem] sm:text-[2rem] lg:text-[2.4rem]">
            How{" "}
            <span className="relative inline-block text-[#E31B23]">
              Marcos Quay
              <Underline />
            </span>{" "}
            Measures Sport
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16">

          {/* =====================================================
              LEFT — CONTENT AREA
          ===================================================== */}

          <div className="relative">

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <h2 className="heading-2 font-heading font-extrabold leading-[1.02] tracking-tight text-[#0A1E4F] text-[1.8rem] sm:text-[2.4rem] lg:text-[2.9rem]">
                Measure. Develop.
                <br />
                <span className="relative inline-block text-[#E31B23]">
                  Proven.
                  <Underline />
                </span>
              </h2>

<p className="mt-7 max-w-[520px] text-[15px] leading-[1.7] text-[#4B5563] font-medium lg:text-[16px]">
                Sport should not be measured only by participation or performance. Marcos Quay looks at the wider sporting journey — how programmes are planned, coaches develop, and students progress.

Through structured assessment, observation, data, and continuous review, Marcos Quay turns sporting activity into measurable development, helping schools understand progress and build stronger sporting environments.
              </p>

              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-[#0A1E4F] px-7 py-3.5 text-[14px] font-bold text-white shadow-[0_18px_40px_-18px_rgba(10,30,79,0.6)] transition-all duration-300 hover:bg-[#165DFF] hover:shadow-[0_20px_44px_-18px_rgba(22,93,255,0.6)]"
              >
                Explore Our Approach
                <ArrowRight className="h-4 w-4" strokeWidth={2.4} />
              </Link>
            </motion.div>
          </div>

          {/* =====================================================
              RIGHT — 6 CARDS (3 × 2)
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 sm:mt-6 lg:mt-5"
          >

            {QUALITY_STAGES.map((stage, index) => (
              <motion.article
                key={stage.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group flex flex-col overflow-hidden rounded-[22px] border border-[#165DFF]/20 bg-white shadow-[0_22px_50px_-28px_rgba(10,30,79,0.3)]"
              >

                {/* Image */}
                <div className="relative h-[150px] shrink-0 overflow-hidden">
                  <img
                    src={stage.image}
                    alt={stage.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#071B45]/60 via-transparent to-transparent" />

                  {/* Concave curved divider */}
                  <div className="pointer-events-none absolute -bottom-px left-0 right-0 z-[2] h-[26px]">
                    <svg
                      className="block h-full w-full"
                      viewBox="0 0 600 26"
                      preserveAspectRatio="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M0 0 C 150 34 450 34 600 0 L600 26 L0 26 Z"
                        fill="#ffffff"
                      />
                    </svg>
                  </div>

                  {/* Number */}
                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-[#E31B23] px-3 py-1.5 text-[11px] font-extrabold tracking-[0.16em] text-white shadow-lg">
                    <stage.icon className="h-3.5 w-3.5" strokeWidth={2.4} />
                    {stage.num}
                  </div>
                </div>

                {/* Content */}
                <div className="relative flex flex-1 flex-col bg-white px-4 py-4">
                  <h3 className="font-heading text-[14px] font-extrabold leading-[1.12] tracking-tight text-[#0A1E4F]">
                    {stage.title}
                  </h3>

                  <div className="mt-2 h-[2px] w-8 rounded-full bg-[#165DFF]" />

                  <p className="mt-2 text-[11px] font-medium leading-[1.55] text-[#4B5563]">
                    {stage.description}
                  </p>
                </div>

              </motion.article>
            ))}

          </motion.div>
        </div>

        {/* =====================================================
            BOTTOM BRAND STATEMENT
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 flex flex-col items-center justify-center text-center"
        >
          
        </motion.div>

      </div>
    </section>
  );
}