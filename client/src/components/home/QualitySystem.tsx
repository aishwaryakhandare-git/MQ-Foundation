import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fade = (delay: number, from: "left" | "right" | "up" = "up") => {
  const offset = from === "left" ? { x: -36 } : from === "right" ? { x: 36 } : { y: 26 };
  return {
    initial: { opacity: 0, ...offset },
    whileInView: { opacity: 1, x: 0, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
  };
};

function Underline() {
  return (
    <svg
      className="absolute -bottom-2 left-0 w-full h-3"
      viewBox="0 0 140 12"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 8 C 30 2, 55 10, 82 6 C 105 3, 120 8, 136 5"
        stroke="#165DFF"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

type QualityStage = {
  num: string;
  title: string;
  accent: string;
  image: string;
  alt: string;
  description: string;
};

const QUALITY_STAGES: QualityStage[] = [
  {
    num: "01",
    title: "Coaches",
    accent: "Trained",
    image: "/images/solutions/curriculum.jpg",
    alt: "Professional coach training school children in a structured session",
    description:
      "Coaches receive structured training covering age-appropriate sports, safety, physical education and effective session delivery.",
  },
  {
    num: "02",
    title: "Coaches",
    accent: "Assigned",
    image: "/images/power-of-play.jpg",
    alt: "Coach working closely with a small group of school children on a sports field",
    description:
      "Dedicated coaches are assigned to schools by Marcos Quay to ensure consistency and quality.",
  },
  {
    num: "03",
    title: "Schools",
    accent: "Checked",
    image: "/images/solutions/reporting.jpg",
    alt: "Marcos Quay coordinator observing and evaluating a children's sports session",
    description:
      "Regular school visits and assessments check coaching quality, sessions, facilities, attendance and implementation standards.",
  },
  {
    num: "04",
    title: "Children",
    accent: "Grow",
    image: "/images/sport-brighter-tomorrow.jpg",
    alt: "Energetic school children training together with confidence",
    description:
      "Consistent coaching helps children develop sporting skills, fitness, confidence and progress toward competitive opportunities.",
  },
];

const QUALITY_METRICS = [
  { value: "650+", label: "Certified & Trained Coaches" },
  { value: "450+", label: "Regular School Assessments" },
  { value: "125,000+", label: "Children on Structured Pathways" },
];

export default function QualitySystem() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{ backgroundImage: "radial-gradient(#0A1E4F 1px, transparent 1px)", backgroundSize: "30px 30px" }}
      />

      <div className="container relative py-20 sm:py-24 lg:py-32">
        {/* ── Header ── */}
        <motion.div {...fade(0)} className="lg:flex lg:items-end lg:justify-between lg:gap-14">
          <div className="max-w-[760px] text-center lg:text-left mx-auto lg:mx-0">
            <p className="font-heading font-bold text-[12px] sm:text-[13px] uppercase tracking-[0.22em] text-[#E31B23] mb-5">
              Our Quality System
            </p>

            <h2 className="heading-2 text-[#0A1E4F] font-extrabold leading-[1.03] tracking-tight">
              Built for Better Coaching.
              <br className="hidden sm:block" />
              Built for{" "}
              <span className="relative inline-block text-[#E31B23]">
                Better Athletes.
                <Underline />
              </span>
            </h2>

            <p className="mt-6 mx-auto lg:mx-0 max-w-[680px] text-[15px] sm:text-[16px] lg:text-[17px] leading-[1.7] text-[#6B7280] font-medium">
              Marcos Quay trains coaches, assigns them to schools, regularly
              checks sessions and monitors every child&apos;s development — so
              quality is guaranteed at every step of the sporting journey.
            </p>
          </div>

          {/* Watermark — right of the header */}
          <div className="hidden lg:block shrink-0 pointer-events-none select-none text-right pb-1" aria-hidden="true">
            <p className="font-heading font-extrabold text-[3.4rem] leading-[0.95] tracking-tight text-[#0A1E4F]/[0.16]">
              Better coaches.
              <br />
              Better sessions.
              <br />
              <span className="text-[#E31B23]/[0.18]">Better athletes.</span>
            </p>
          </div>
        </motion.div>

        {/* ── 4-stage process ── */}
        <div className="relative mt-16 sm:mt-20 lg:mt-24">
          {/* Connecting line + arrows (desktop) */}
          <div className="hidden lg:block absolute left-[5%] right-[5%] top-[7.1rem] h-px bg-[#165DFF]/25" />
          {["25%", "50%", "75%"].map((left) => (
            <span
              key={left}
              className="hidden lg:flex absolute top-[6.1rem] -translate-x-1/2 w-8 h-8 rounded-full bg-white border border-[#165DFF]/30 text-[#165DFF] items-center justify-center z-10"
              style={{ left }}
            >
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          ))}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 lg:gap-y-0">
            {QUALITY_STAGES.map((stage, i) => (
              <motion.div key={stage.num} {...fade(0.08 * i)} className="relative">
                {/* Large blue number */}
                <p className="font-heading font-extrabold text-[3.4rem] leading-none text-[#165DFF]">
                  {stage.num}
                </p>

                {/* Heading */}
                <h3 className="mt-3 font-heading font-extrabold text-[1.9rem] sm:text-[2.1rem] text-[#0A1E4F] leading-[1.08] tracking-tight">
                  {stage.title}{" "}
                  <span className="relative inline-block text-[#E31B23]">
                    {stage.accent}
                    <Underline />
                  </span>
                </h3>

                {/* Landscape photo */}
                <div className="mt-6 overflow-hidden rounded-[18px] bg-[#EEF3FB] shadow-[0_22px_46px_-26px_rgba(10,30,79,0.35)]">
                  <div className="aspect-[4/3]">
                    <img
                      src={stage.image}
                      alt={stage.alt}
                      loading="lazy"
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                </div>

                {/* Subtle blue underline */}
                <div className="mt-5 h-[3px] w-14 rounded-full bg-[#165DFF]/70" />

                {/* Description */}
                <p className="mt-4 text-[14px] sm:text-[15px] leading-[1.7] text-[#4B5563] font-medium">
                  {stage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Impact metrics ── */}
        <motion.div {...fade(0.12)} className="mt-8 sm:mt-10">
          <div className="rounded-[28px] border border-[#165DFF]/15 bg-[#EAF3FF] px-6 py-10 sm:py-12">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6">
              {QUALITY_METRICS.map((metric, i) => (
                <div
                  key={metric.label}
                  className={`flex flex-col items-center text-center ${i > 0 ? "sm:border-l sm:border-[#165DFF]/15" : ""}`}
                >
                  <p className="font-heading font-extrabold text-[2.4rem] sm:text-[2.8rem] lg:text-[3.2rem] leading-none text-[#0A1E4F] tracking-tight">
                    {metric.value}
                  </p>
                  <span className="mt-3 h-[2px] w-10 rounded-full bg-[#E31B23]" />
                  <p className="mt-3 font-heading font-bold text-[13px] sm:text-[14px] text-[#0A1E4F] leading-snug">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}