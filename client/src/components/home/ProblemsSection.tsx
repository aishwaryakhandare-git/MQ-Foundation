import { motion } from "framer-motion";
import { ArrowRight, ArrowDown, ArrowUpRight } from "lucide-react";

/* ────────────────────────────────────────────────────────────────
   Data
   ──────────────────────────────────────────────────────────────── */

const PAIRS: {
  problem: { title: string; desc: string; photo: string; alt: string; color: string };
  solution: { title: string; desc: string; photo: string; alt: string; color: string };
}[] = [
  {
    problem: {
      title: "Low Student Participation",
      desc: "Most children get little meaningful PE time — and even fewer genuinely enjoy it.",
      photo: "/images/problems/low-participation.jpg",
      alt: "Students drifting apart during a school break while PE fails to engage them",
      color: "#F43F5E",
    },
    solution: {
      title: "Inclusive Multi-Sport Programmes",
      desc: "Every child gets a structured, joy-first introduction to a range of sports.",
      photo: "/images/solutions/multisport.jpg",
      alt: "Children playing together during a Marcos Quay multi-sport programme session",
      color: "#165DFF",
    },
  },
  {
    problem: {
      title: "Obesity & Inactivity",
      desc: "Sedentary habits and screen time keep pushing activity levels down.",
      photo: "/images/problems/inactivity.jpg",
      alt: "A child spending time in front of a screen instead of being active",
      color: "#FF8A3D",
    },
    solution: {
      title: "Health & Fitness Framework",
      desc: "A measurable daily routine that builds strength, stamina and healthy habits.",
      photo: "/images/solutions/fitness.jpg",
      alt: "A student training on the running track during a fitness session",
      color: "#27AE60",
    },
  },
  {
    problem: {
      title: "NEP Implementation",
      desc: "Schools struggle to turn NEP 2020's sports mandate into classroom reality.",
      photo: "/images/problems/nep.jpg",
      alt: "A school teacher weighed down by NEP 2020 curriculum paperwork",
      color: "#F97316",
    },
    solution: {
      title: "NEP-Aligned Sports Curriculum",
      desc: "A ready-to-run curriculum mapped to NEP 2020, taught by certified coaches.",
      photo: "/images/solutions/curriculum.jpg",
      alt: "A Marcos Quay coach leading an NEP-aligned PE class with a session checklist",
      color: "#165DFF",
    },
  },
  {
    problem: {
      title: "Parent Expectations",
      desc: "Parents want outcomes — not just games and free periods.",
      photo: "/images/problems/parents.jpg",
      alt: "A parent and student facing uncertainty about school sports outcomes",
      color: "#E89200",
    },
    solution: {
      title: "Transparent Reporting & Measurable Outcomes",
      desc: "Parents see fitness, skill and attitude growth — in plain, honest numbers.",
      photo: "/images/solutions/reporting.jpg",
      alt: "A parent reviewing a child's sports progress report alongside a coach",
      color: "#27AE60",
    },
  },
];

/* ────────────────────────────────────────────────────────────────
   Decorative pieces
   ──────────────────────────────────────────────────────────────── */

function YellowBlob({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 260 260" className={`absolute w-56 h-56 lg:w-72 lg:h-72 opacity-[0.06] pointer-events-none ${className ?? ""}`} fill="#F4B400" aria-hidden>
      <path d="M130 8c68 0 122 54 122 122s-54 122-122 122S8 198 8 130 62 8 130 8z" opacity="0.9" />
      <path d="M130 40c50 0 90 40 90 90s-40 90-90 90-90-40-90-90 40-90 90-90z" fill="#fff" />
    </svg>
  );
}

function Dots({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      <g fill="#0A1E4F">
        {Array.from({ length: 30 }).map((_, i) => (
          <circle key={i} cx={10 + (i % 6) * 20} cy={10 + Math.floor(i / 6) * 20} r="2.4" />
        ))}
      </g>
    </svg>
  );
}

function FootballLineArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" aria-hidden>
      <circle cx="60" cy="60" r="42" stroke="#165DFF" strokeWidth="2.5" />
      <path d="M60 24l10 30-10 30-10-30z" stroke="#165DFF" strokeWidth="2" strokeLinejoin="round" />
      <path d="M26 48l34 8M94 48l-34 8M60 24l-13 26M60 24l13 26M60 96L47 70M60 96l13-26" stroke="#165DFF" strokeWidth="1.6" opacity="0.85" />
    </svg>
  );
}

function BasketballLineArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" aria-hidden>
      <circle cx="60" cy="60" r="42" stroke="#FF8A3D" strokeWidth="2.5" />
      <path d="M60 18v84M18 60h84" stroke="#FF8A3D" strokeWidth="1.6" />
      <path d="M28 32c20 16 20 40 0 56M92 32c-20 16-20 40 0 56" stroke="#FF8A3D" strokeWidth="1.6" />
    </svg>
  );
}

function TrackCurves({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" className={className} fill="none" aria-hidden>
      <path d="M8 90a120 120 0 0 1 184 0" stroke="#165DFF" strokeWidth="3" strokeLinecap="round" />
      <path d="M24 104a100 100 0 0 1 152 0" stroke="#27AE60" strokeWidth="3" strokeLinecap="round" />
      <path d="M40 114a80 80 0 0 1 120 0" stroke="#F4B400" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function Cloud({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 70" className={className} fill="#DCE8FB" aria-hidden>
      <ellipse cx="30" cy="48" rx="24" ry="14" />
      <ellipse cx="60" cy="40" rx="28" ry="16" />
      <ellipse cx="92" cy="48" rx="22" ry="12" />
    </svg>
  );
}

/* ────────────────────────────────────────────────────────────────
   Cards + Connector
   ──────────────────────────────────────────────────────────────── */

const slideIn = (from: "left" | "right", delay: number) => ({
  initial: { x: from === "left" ? -32 : 32 },
  animate: { x: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

function PhotoPanel({
  photo,
  alt,
  tint,
  fallback,
}: {
  photo: string;
  alt: string;
  tint: "warm" | "green";
  fallback: string;
}) {
  return (
    <div className="relative shrink-0 self-stretch w-[104px] sm:w-[132px] lg:w-[148px] min-h-[112px] rounded-[18px] overflow-hidden bg-[#E8F0FB]">
      <img
        src={photo}
        alt={alt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        onError={(e) => {
          const el = e.currentTarget;
          if (el.src !== fallback) el.src = fallback;
        }}
      />
      <div
        className={`absolute inset-0 bg-gradient-to-tr ${
          tint === "warm"
            ? "from-[#5B2A33]/25 via-transparent to-transparent"
            : "from-[#0F3D2C]/20 via-transparent to-transparent"
        }`}
      />
    </div>
  );
}

function ProblemCard({
  index,
  title,
  desc,
  photo,
  alt,
  color,
}: {
  index: number;
  title: string;
  desc: string;
  photo: string;
  alt: string;
  color: string;
}) {
  return (
    <motion.div {...slideIn("left", 0.1 + index * 0.12)} className="h-full">
      <div className="group relative h-full rounded-[24px] bg-white border border-[#FDE7E9] p-4 sm:p-5 flex items-stretch gap-4 sm:gap-5 shadow-[0_14px_34px_-18px_rgba(244,63,94,0.25),0_2px_8px_-2px_rgba(20,33,61,0.06)] transition-shadow duration-300 hover:shadow-[0_22px_48px_-20px_rgba(244,63,94,0.35)]">
        <span className="absolute left-0 top-6 bottom-6 w-1 rounded-full" style={{ background: `linear-gradient(180deg, ${color}, ${color}55)` }} />
        <PhotoPanel photo={photo} alt={alt} tint="warm" fallback="/images/hero-sports.jpg" />
        <div className="min-w-0 flex-1 flex flex-col justify-center">
          <span
            className="inline-flex self-start items-center justify-center rounded-full px-2 py-0.5 text-[10px] font-extrabold tracking-[0.08em]"
            style={{ backgroundColor: `${color}14`, color }}
          >
            PROBLEM {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-2 font-heading font-bold text-[15px] leading-snug text-[#14213D]">{title}</h3>
          <p className="mt-1.5 text-[12.5px] leading-relaxed font-medium text-[#6B7280]">{desc}</p>
        </div>
      </div>
    </motion.div>
  );
}

function SolutionCard({
  index,
  title,
  desc,
  photo,
  alt,
  color,
}: {
  index: number;
  title: string;
  desc: string;
  photo: string;
  alt: string;
  color: string;
}) {
  return (
    <motion.div {...slideIn("right", 0.1 + index * 0.12)} className="h-full">
      <div className="group relative h-full rounded-[24px] bg-white border border-[#DFF3E7] p-4 sm:p-5 flex items-stretch gap-4 sm:gap-5 shadow-[0_14px_34px_-18px_rgba(39,174,96,0.25),0_2px_8px_-2px_rgba(20,33,61,0.06)] transition-shadow duration-300 hover:shadow-[0_22px_48px_-20px_rgba(39,174,96,0.35)]">
        <span className="absolute left-0 top-6 bottom-6 w-1 rounded-full" style={{ background: `linear-gradient(180deg, ${color}, ${color}55)` }} />
        <PhotoPanel photo={photo} alt={alt} tint="green" fallback="/images/hero-sports.jpg" />
        <div className="min-w-0 flex-1 flex flex-col justify-center">
          <span
            className="inline-flex self-start items-center justify-center rounded-full px-2 py-0.5 text-[10px] font-extrabold tracking-[0.08em]"
            style={{ backgroundColor: `${color}14`, color }}
          >
            STEP {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-2 font-heading font-bold text-[15px] leading-snug text-[#14213D]">{title}</h3>
          <p className="mt-1.5 text-[12.5px] leading-relaxed font-medium text-[#6B7280]">{desc}</p>
        </div>
      </div>
    </motion.div>
  );
}

function Connector({ index }: { index: number }) {
  return (
    <motion.div
      initial={{ scale: 0.4 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.35 + index * 0.12, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] as const }}
      className="relative z-10 flex justify-center"
    >
      <div className="group relative flex items-center justify-center">
        <span className="absolute inset-0 rounded-full bg-[#27AE60]/20 scale-0 group-hover:scale-[1.5] transition-transform duration-500 ease-out" />
        <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#FF8A3D] to-[#27AE60] text-white shadow-[0_8px_22px_-6px_rgba(39,174,96,0.55)] transition-shadow duration-300 group-hover:shadow-[0_0_0_6px_rgba(39,174,96,0.14),0_12px_28px_-6px_rgba(39,174,96,0.7)]">
          <ArrowRight className="h-5 w-5 rotate-90 lg:rotate-0" strokeWidth={2.6} />
        </div>
      </div>
    </motion.div>
  );
}

/* ────────────────────────────────────────────────────────────────
   Section
   ──────────────────────────────────────────────────────────────── */

const headerFade = { initial: { y: 24 }, animate: { y: 0 }, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } };

export default function ProblemsSection() {
  return (
    <section className="relative bg-white pt-14 sm:pt-16 lg:pt-20 pb-20 sm:pb-24 lg:pb-28 overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#165DFF]/[0.05] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-24 w-96 h-96 bg-[#F4B400]/[0.06] rounded-full blur-3xl pointer-events-none" />
      <Cloud className="absolute top-24 left-[6%] w-24 opacity-[0.05] pointer-events-none" />
      <Cloud className="absolute top-40 right-[8%] w-28 opacity-[0.05] pointer-events-none" />

      <div className="container relative">
        {/* ── Header ── */}
        <motion.div {...headerFade} className="max-w-2xl mx-auto text-center">
          <p className="eyebrow justify-center text-[#FF6B35] mb-4">The Challenge</p>
          <h2 className="heading-2 text-[#0A1E4F]">Problems We Solve</h2>
          <p className="body-lg mt-5">
            We don&apos;t sell coaching sessions — we solve the real challenges preventing
            schools from building a thriving sports culture.
          </p>
        </motion.div>

        {/* ── Split container ── */}
        <motion.div
          {...headerFade}
          transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] as const }}
          className="relative mt-12 lg:mt-16 overflow-hidden rounded-[40px] bg-gradient-to-b from-white via-[#F3F8FF] to-[#EAF3FF] px-4 sm:px-8 lg:px-12 py-10 sm:py-12 lg:py-14 shadow-[0_30px_80px_-30px_rgba(10,30,79,0.35),0_10px_30px_-12px_rgba(10,30,79,0.12)]"
        >
          {/* Decorations inside */}
          <YellowBlob className="absolute -top-10 -right-8" />
          <YellowBlob className="absolute -bottom-16 -left-10 opacity-[0.04]" />
          <FootballLineArt className="absolute -left-8 top-1/3 w-40 opacity-[0.05] pointer-events-none" />
          <BasketballLineArt className="absolute -right-10 top-16 w-44 opacity-[0.05] pointer-events-none" />
          <TrackCurves className="absolute -left-6 bottom-10 w-48 opacity-[0.06] pointer-events-none" />
          <Dots className="absolute right-[6%] top-[8%] w-24 opacity-[0.05] pointer-events-none" />
          <Dots className="absolute left-[4%] bottom-[10%] w-24 opacity-[0.04] pointer-events-none" />

          {/* Green wave bottom */}
          <svg className="absolute bottom-0 left-0 w-full h-16 opacity-[0.06] pointer-events-none" viewBox="0 0 1200 64" preserveAspectRatio="none" fill="#27AE60" aria-hidden>
            <path d="M0 40c200-28 400-28 600 0s400 28 600 0v24H0z" />
          </svg>

          <div className="relative space-y-6 lg:space-y-8">
            {/* Column titles */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_64px_1fr] gap-3 lg:gap-2 mb-1">
              <div className="flex lg:justify-center">
                <span className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-[13px] font-extrabold tracking-[0.12em] text-[#F43F5E] bg-gradient-to-r from-[#FFEFEB] to-[#FFF0F3] border border-[#FDE3E0]">
                  <span aria-hidden>🚩</span> THE PROBLEM
                </span>
              </div>
              <div className="hidden lg:block" />
              <div className="flex lg:justify-center">
                <span className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-[13px] font-extrabold tracking-[0.12em] text-[#27AE60] bg-gradient-to-r from-[#EAF9F0] to-[#EDF7FF] border border-[#D9F1E2]">
                  <span aria-hidden>✅</span> OUR SOLUTION
                </span>
              </div>
            </div>

            {PAIRS.map((pair, i) => (
              <div key={pair.problem.title} className="grid grid-cols-1 lg:grid-cols-[1fr_64px_1fr] gap-3 lg:gap-2 items-center">
                {/* Problem side */}
                <div className="rounded-[28px] bg-gradient-to-b from-[#FFF4EF] to-[#FFF0F4] p-3 sm:p-4">
                  <ProblemCard index={i} {...pair.problem} />
                </div>
                {/* Desktop connector */}
                <div className="hidden lg:flex justify-center">
                  <Connector index={i} />
                </div>
                {/* Mobile connector */}
                <div className="flex justify-center lg:hidden">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#FF8A3D] to-[#27AE60] text-white shadow-[0_6px_16px_-4px_rgba(39,174,96,0.5)]">
                    <ArrowDown className="h-4 w-4" strokeWidth={2.6} />
                  </div>
                </div>
                {/* Solution side */}
                <div className="rounded-[28px] bg-gradient-to-b from-[#F0FAF3] to-[#EDF7FF] p-3 sm:p-4">
                  <SolutionCard index={i} {...pair.solution} />
                </div>
              </div>
            ))}
          </div>

          {/* ── Bottom banner ── */}
          <motion.div
            initial={{ y: 32 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }}
            className="relative mt-10 lg:mt-14 overflow-hidden rounded-[32px] bg-white border border-[#EAF0FB] px-6 py-8 sm:px-10 sm:py-9 lg:px-14 lg:py-10 shadow-[0_24px_60px_-28px_rgba(20,33,61,0.25)]"
          >
            <Dots className="absolute right-8 top-8 w-20 opacity-[0.05] pointer-events-none" />
            <TrackCurves className="absolute -left-4 bottom-0 w-36 opacity-[0.05] pointer-events-none" />

            {/* Curved arrow */}
            <svg viewBox="0 0 180 60" className="absolute right-[44%] -top-9 hidden lg:block w-40 opacity-[0.35] pointer-events-none" fill="none" aria-hidden>
              <path d="M10 6C60 6 120 6 168 20c14 4 16 18 4 22" stroke="#165DFF" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="1 9" />
              <path d="M158 38l16 6-8-16z" fill="#165DFF" />
            </svg>

            <div className="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-gradient-to-br from-[#165DFF] to-[#0D3BB8] shadow-[0_12px_26px_-10px_rgba(22,93,255,0.6)]">
                  <ArrowUpRight className="h-7 w-7 text-white" strokeWidth={2.2} />
                </div>
                <h3 className="heading-3 text-[#0A1E4F] mt-5">Every challenge is an opportunity to transform a school.</h3>
                <p className="body-lg mt-3 max-w-xl mx-auto lg:mx-0">
                  Here&apos;s how Marcos Quay Foundation turns today&apos;s challenges into
                  long-term sporting excellence.
                </p>
                <a
                  href="#journey"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#27AE60] px-6 py-3 text-sm font-bold text-white shadow-[0_10px_24px_-10px_rgba(39,174,96,0.6)] transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Explore Our Solution
                  <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                </a>
              </div>
              <div className="shrink-0 w-full max-w-[400px]">
                <div className="relative rounded-3xl overflow-hidden aspect-[4/3] border border-[#E3EEFB] shadow-[0_18px_44px_-22px_rgba(10,30,79,0.35)]">
                  <img
                    src="/images/solutions/transformation.jpg"
                    alt="Students thriving through a Marcos Quay Foundation sports programme"
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#0A1E4F]/25 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
