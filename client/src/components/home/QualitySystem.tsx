import { motion } from "framer-motion";
import { ArrowRight, Search, Users, Building2, Target, Sparkles, Globe } from "lucide-react";

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
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  description: string;
};

const QUALITY_STAGES: QualityStage[] = [
  {
    num: "01",
    title: "Discovery & Planning",
    icon: Search,
    description:
      "Tailored Sports Strategy with a Structured UK-Based Curriculum aligned to your School's Goals.",
  },
  {
    num: "02",
    title: "Coach Deployment",
    icon: Users,
    description:
      "Trained, Certified & Background Verified Coaches.",
  },
  {
    num: "03",
    title: "Infrastructure Support",
    icon: Building2,
    description:
      "Guidance on Facility Setup & Equipment Provisioning.",
  },
  {
    num: "04",
    title: "Execution",
    icon: Target,
    description:
      "Smooth and Engaging Implementation across all Grades and Sports.",
  },
  {
    num: "05",
    title: "Tech & AI Integration",
    icon: Sparkles,
    description:
      "Delivering Quality Sports Programs at scale through Real-time Monitoring, Reporting, and Insights.",
  },
  {
    num: "06",
    title: "Marcos Quay Ecosystem",
    icon: Globe,
    description:
      "Leverage the strength of the Marcos Quay Network through Competitions, Exposure Tours, and Collaborative Sporting Experiences.",
  },
];

export default function QualitySystem() {
  return (
    <section className="relative h-screen max-h-[880px] overflow-hidden bg-white">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{ backgroundImage: "radial-gradient(#0A1E4F 1px, transparent 1px)", backgroundSize: "30px 30px" }}
      />

      <div className="container relative z-10 h-full flex flex-col justify-center py-10 md:py-12">
        {/* ── Header ── */}
        <motion.div {...fade(0)} className="mb-8 lg:mb-10">
          <div className="max-w-[820px] text-center mx-auto">
            <p className="font-heading font-bold text-[11px] sm:text-[12px] uppercase tracking-[0.22em] text-[#165DFF] mb-3">
              Our Quality System
            </p>

            <h2 className="heading-2 text-[#0A1E4F] font-extrabold leading-[1.03] tracking-tight text-[1.5rem] sm:text-[2rem] lg:text-[2.2rem]">
              We Own The Process
              <br className="hidden sm:block" />
              You See The{" "}
              <span className="relative inline-block text-[#E31B23]">
                Progress
                <Underline />
              </span>
            </h2>

            <p className="mt-4 mx-auto max-w-[680px] text-[14px] sm:text-[15px] lg:text-[15px] leading-[1.6] text-[#6B7280] font-medium">
              From planning to execution, Marcos Quay runs the entire sporting
              journey end-to-end — so your school sees measurable, verifiable
              progress at every single step.
            </p>
          </div>
        </motion.div>

        {/* ── 6-stage process — one row on desktop ── */}
        <div className="relative">
          {/* Connecting line + arrows (desktop) */}
          <div className="hidden lg:block absolute left-[8%] right-[8%] top-[1.5rem] h-px bg-[#165DFF]/25" />
          {["16.67%", "33.33%", "50%", "66.67%", "83.33%"].map((left) => (
            <span
              key={left}
              className="hidden lg:flex absolute top-[1.5rem] -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white border border-[#165DFF]/30 text-[#165DFF] items-center justify-center z-10"
              style={{ left }}
            >
              <ArrowRight className="w-3 h-3" />
            </span>
          ))}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-x-6 gap-y-10 lg:gap-y-0">
            {QUALITY_STAGES.map((stage, i) => (
              <motion.div
                key={stage.num}
                {...fade(0.08 * i)}
                className="relative flex flex-col items-center text-center"
              >
                {/* Icon */}
                <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white border border-[#165DFF]/25 shadow-[0_10px_24px_-14px_rgba(10,30,79,0.5)]">
                  <stage.icon className="h-5 w-5 text-[#165DFF]" strokeWidth={2} />
                </span>

                {/* Number */}
                <span className="mt-3 font-heading font-extrabold text-[0.78rem] tracking-[0.2em] text-[#165DFF]">
                  {stage.num}
                </span>

                {/* Title */}
                <h3 className="mt-2 font-heading font-extrabold text-[0.95rem] sm:text-[1.05rem] text-[#0A1E4F] leading-[1.15] tracking-tight">
                  {stage.title}
                </h3>

                {/* Subtle blue underline */}
                <div className="mt-3 h-[2px] w-10 rounded-full bg-[#165DFF]/60" />

                {/* Description */}
                <p className="mt-3 text-[12px] sm:text-[12.5px] leading-[1.55] text-black font-medium">
                  {stage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}