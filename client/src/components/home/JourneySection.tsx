import { motion } from "framer-motion";
import {
  ArrowRight,
  ClipboardCheck,
  Compass,
  LineChart,
  RefreshCw,
  Search,
  Timer,
} from "lucide-react";

/* ─── Custom sports-themed line art illustrations (hand-drawn SVG) ─── */

function DiscoveryArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 96 96" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="48" cy="48" r="42" />
      <circle cx="34" cy="58" r="11" />
      <circle cx="62" cy="58" r="11" />
      <path d="M26 30c6-8 16-10 22-6" />
      <path d="M70 30c-6-8-16-10-22-6" />
      <path d="M34 46v-6c0-5 3-9 8-9h4" opacity="0.5" />
      <path d="M62 46v-6c0-5-3-9-8-9h-4" opacity="0.5" />
      <path d="M28 68c4 8 12 12 20 12s16-4 20-12" />
      <path d="M20 84l8-8M76 84l-8-8" />
    </svg>
  );
}

function AssessmentArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 96 96" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="26" y="14" width="44" height="68" rx="8" />
      <path d="M34 34h28M34 46h28M34 58h16" />
      <circle cx="62" cy="68" r="9" />
      <path d="M62 63v5l4 3" />
      <path d="M48 14v-6M38 8h20" />
      <circle cx="48" cy="86" r="3" fill="currentColor" stroke="none" />
    </svg>
  );
}

function DesignArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 96 96" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M48 8 84 22v24c0 22-14 36-36 44C26 82 12 68 12 46V22L48 8Z" />
      <path d="M48 8v80" opacity="0.35" />
      <path d="M48 34c8 4 13 12 13 22" opacity="0.5" />
      <path d="M33 44c-1 4-2 8-2 13" opacity="0.5" />
      <circle cx="48" cy="36" r="4" />
      <circle cx="61" cy="58" r="4" />
      <path d="M22 62c-3 3-4 7-4 12" opacity="0.35" />
    </svg>
  );
}

function ImplementationArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 96 96" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="48" cy="52" r="30" />
      <path d="M48 22v20l14 8" />
      <path d="M18 34c-4 2-7 5-9 9" opacity="0.4" />
      <path d="M78 34c4 2 7 5 9 9" opacity="0.4" />
      <path d="M48 82c8 2 16 0 22-6" opacity="0.5" />
      <path d="M28 14c8-4 16-4 24 0" opacity="0.3" />
      <path d="M8 78l6-6M88 78l-6-6" />
    </svg>
  );
}

function MeasurementArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 96 96" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 82h72" />
      <rect x="22" y="50" width="10" height="32" rx="3" />
      <rect x="40" y="34" width="10" height="48" rx="3" />
      <rect x="58" y="42" width="10" height="40" rx="3" />
      <rect x="76" y="20" width="10" height="62" rx="3" />
      <path d="M27 44l9-9 10 10 9-9 10 10 9-9 4 4" opacity="0.45" />
    </svg>
  );
}

function GrowthArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 96 96" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 14v64h72" opacity="0.5" />
      <path d="M12 70c18-6 34-2 48 8" opacity="0.35" />
      <path d="M24 62 40 42l12 8 20-26" />
      <circle cx="72" cy="24" r="5" />
      <path d="M76 22l8-8" opacity="0.6" />
    </svg>
  );
}

/* ─── Milestone data ─── */

const MILESTONES = [
  {
    icon: Search,
    art: DiscoveryArt,
    step: "01",
    title: "Discovery",
    desc: "We sit down with your leadership to understand your school's vision, students and challenges.",
    color: "#165DFF",
    from: "#7FA8FF",
    to: "#1E4FCE",
    glow: "rgba(22,93,255,0.35)",
    tag: "First conversation",
  },
  {
    icon: ClipboardCheck,
    art: AssessmentArt,
    step: "02",
    title: "School Assessment",
    desc: "A full audit of your facilities, PE time, coaches and current participation levels.",
    color: "#27AE60",
    from: "#6FD69B",
    to: "#1E8A4C",
    glow: "rgba(39,174,96,0.3)",
    tag: "Deep audit",
  },
  {
    icon: Compass,
    art: DesignArt,
    step: "03",
    title: "Programme Design",
    desc: "We craft a curriculum and schedule built around your goals, budget and children.",
    color: "#E89200",
    from: "#FFC94D",
    to: "#C98200",
    glow: "rgba(232,146,0,0.3)",
    tag: "Custom blueprint",
  },
  {
    icon: Timer,
    art: ImplementationArt,
    step: "04",
    title: "Implementation",
    desc: "Certified coaches arrive on campus. Sessions begin with NEP-aligned structure.",
    color: "#8B5CF6",
    from: "#B79CFF",
    to: "#6D3FD8",
    glow: "rgba(139,92,246,0.3)",
    tag: "Coaches on ground",
  },
  {
    icon: LineChart,
    art: MeasurementArt,
    step: "05",
    title: "Measurement",
    desc: "We track fitness, skill and participation — and share transparent reports with parents.",
    color: "#FF6B35",
    from: "#FF9C74",
    to: "#E24A1E",
    glow: "rgba(255,107,53,0.3)",
    tag: "Real metrics",
  },
  {
    icon: RefreshCw,
    art: GrowthArt,
    step: "06",
    title: "Continuous Improvement",
    desc: "Every term we refine the programme so outcomes keep compounding year after year.",
    color: "#0D9488",
    from: "#4FD1C5",
    to: "#0A7268",
    glow: "rgba(13,148,136,0.3)",
    tag: "Always evolving",
  },
];

const fade = (delay: number) => ({
  initial: { y: 32 },
  animate: { y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function JourneySection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F8FBFF] to-white pt-8 sm:pt-10 lg:pt-3 pb-20 sm:pb-28 lg:pb-36">
      {/* ── Ambient background decorations ── */}
      <div className="absolute -top-24 -left-28 w-[460px] h-[460px] bg-[#165DFF]/[0.06] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-[420px] h-[420px] bg-[#F4B400]/[0.08] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-20 w-[420px] h-[420px] bg-[#27AE60]/[0.06] rounded-full blur-3xl pointer-events-none" />

      {/* Dotted patterns */}
      <div
        className="absolute top-24 right-[12%] w-32 h-32 opacity-[0.16] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#165DFF 2px, transparent 2px)",
          backgroundSize: "16px 16px",
        }}
      />
      <div
        className="absolute bottom-32 left-[8%] w-28 h-28 opacity-[0.14] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#27AE60 2px, transparent 2px)",
          backgroundSize: "15px 15px",
        }}
      />

      <div className="container relative">
        {/* ── Header ── */}
        <motion.div {...fade(0)} className="max-w-2xl mx-auto text-center">
          <p className="eyebrow justify-center text-[#165DFF] mb-4">Our Solution</p>
          <h2 className="heading-2 text-[#0A1E4F]">
            A School&apos;s Journey to
            <br className="hidden sm:block" /> Lasting Impact
          </h2>
          <p className="body-lg mt-5">
            Not a one-time programme — a partnership that walks alongside your
            school, from the first conversation to measurable change.
          </p>
        </motion.div>

        {/* ── The Journey Path ── */}
        <div className="relative mt-16 sm:mt-20 lg:mt-24">
          {/* Central flowing track (desktop) */}
          <svg
            className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[1600px] h-full hidden lg:block pointer-events-none"
            viewBox="0 0 1200 1920"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M600 0 C 600 60, 600 110, 600 160
                 C 300 250, 300 390, 600 480
                 C 900 570, 900 710, 600 800
                 C 300 890, 300 1030, 600 1120
                 C 900 1210, 900 1350, 600 1440
                 C 300 1530, 300 1670, 600 1760
                 C 600 1810, 600 1870, 600 1920"
              stroke="url(#journeyGrad)"
              strokeWidth="3"
              strokeLinecap="round"
              className="animate-draw-line"
            />
            <defs>
              <linearGradient id="journeyGrad" x1="0" y1="0" x2="0" y2="1920" gradientUnits="userSpaceOnUse">
                <stop stopColor="#165DFF" />
                <stop offset="0.45" stopColor="#27AE60" />
                <stop offset="1" stopColor="#E89200" />
              </linearGradient>
            </defs>
            {/* Lane dashes */}
            <path
              d="M600 0 C 600 60, 600 110, 600 160
                 C 300 250, 300 390, 600 480
                 C 900 570, 900 710, 600 800
                 C 300 890, 300 1030, 600 1120
                 C 900 1210, 900 1350, 600 1440
                 C 300 1530, 300 1670, 600 1760
                 C 600 1810, 600 1870, 600 1920"
              stroke="#165DFF"
              strokeWidth="1"
              strokeDasharray="4 18"
              strokeOpacity="0.35"
              transform="translate(-26 0)"
            />
            <path
              d="M600 0 C 600 60, 600 110, 600 160
                 C 300 250, 300 390, 600 480
                 C 900 570, 900 710, 600 800
                 C 300 890, 300 1030, 600 1120
                 C 900 1210, 900 1350, 600 1440
                 C 300 1530, 300 1670, 600 1760
                 C 600 1810, 600 1870, 600 1920"
              stroke="#27AE60"
              strokeWidth="1"
              strokeDasharray="4 18"
              strokeOpacity="0.35"
              transform="translate(26 0)"
            />
          </svg>

          {/* Mobile vertical track */}
          <div className="absolute top-0 bottom-0 left-[22px] w-[2px] bg-gradient-to-b from-[#165DFF] via-[#27AE60] to-[#E89200] lg:hidden pointer-events-none" />

          {/* Milestones */}
          <div className="relative space-y-16 lg:space-y-0">
            {MILESTONES.map((m, i) => {
              const isLeft = i % 2 === 0;
              const Art = m.art;
              return (
                <div
                  key={m.step}
                  className={`relative lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center ${
                    i === MILESTONES.length - 1 ? "" : "lg:h-[320px]"
                  }`}
                >
                  {/* Mobile node */}
                  <div className="absolute left-[22px] top-2 -translate-x-1/2 lg:hidden z-10">
                    <span
                      className="block w-4 h-4 rounded-full border-[3px] border-white shadow-md"
                      style={{ background: m.color }}
                    />
                  </div>

                  {/* Desktop node */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center z-10 pointer-events-none">
                    <span className="relative flex items-center justify-center w-9 h-9 rounded-full border-[3px] border-white shadow-[0_6px_18px_-6px_rgba(10,30,79,0.5)]" style={{ background: m.color }}>
                      <span className="block w-2.5 h-2.5 rounded-full bg-white" />
                    </span>
                    {/* Connector arcs toward the card */}
                    {isLeft ? (
                      <svg className="absolute right-full top-1/2 -translate-y-1/2 w-16 h-10" viewBox="0 0 64 40" fill="none" aria-hidden="true">
                        <path d="M64 20 C 44 6, 24 14, 4 16" stroke={m.color} strokeWidth="2" strokeOpacity="0.5" strokeDasharray="4 6" />
                      </svg>
                    ) : (
                      <svg className="absolute left-full top-1/2 -translate-y-1/2 w-16 h-10" viewBox="0 0 64 40" fill="none" aria-hidden="true">
                        <path d="M0 20 C 20 6, 40 14, 60 16" stroke={m.color} strokeWidth="2" strokeOpacity="0.5" strokeDasharray="4 6" />
                      </svg>
                    )}
                  </div>

                  {/* Card side */}
                  <motion.div
                    {...fade(i * 0.1)}
                    className={`relative pl-14 lg:pl-0 ${isLeft ? "lg:pr-4" : "lg:order-2 lg:pl-4"}`}
                  >
                    <div className="relative max-w-[520px]">
                      {/* Organic blob behind card */}
                      <div
                        className="absolute -top-8 -right-8 w-40 h-40 rounded-full blur-2xl opacity-30 pointer-events-none"
                        style={{ background: m.glow }}
                      />

                      <div className="group relative rounded-[26px] bg-white border border-[#EDF2FF] p-7 sm:p-8 shadow-[0_20px_50px_-24px_rgba(10,30,79,0.25)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-[0_34px_70px_-28px_var(--accent-glow)] overflow-hidden">
                        {/* Watermark art */}
                        <Art className="absolute -bottom-8 -right-6 w-32 h-32 text-[#14213D] opacity-[0.04] transition-transform duration-700 group-hover:scale-105 group-hover:rotate-3 pointer-events-none" />

                        {/* Top row */}
                        <div className="relative flex items-start justify-between gap-4">
                          {/* Step number + tag */}
                          <div>
                            <span
                              className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-extrabold tracking-[0.1em]"
                              style={{ backgroundColor: `${m.color}1A`, color: m.color }}
                            >
                              STEP {m.step}
                            </span>
                            <span className="block mt-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#9AA5B8]">
                              {m.tag}
                            </span>
                          </div>

                          {/* Icon */}
                          <div
                            className="w-[54px] h-[54px] rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                            style={{
                              background: `radial-gradient(circle at 30% 25%, ${m.from} 0%, ${m.color} 62%, ${m.to} 100%)`,
                              boxShadow: `0 12px 26px -10px ${m.glow}, inset 0 2px 3px rgba(255,255,255,0.35)`,
                            }}
                          >
                            <m.icon className="w-6 h-6 text-white" strokeWidth={2.1} />
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="relative mt-5 font-heading font-extrabold text-[22px] sm:text-2xl text-[#0A1E4F]">
                          {m.title}
                        </h3>

                        {/* Description */}
                        <p className="relative mt-2.5 text-[14.5px] leading-relaxed font-medium text-[#6B7280] max-w-[440px]">
                          {m.desc}
                        </p>

                        {/* Accent line */}
                        <span
                          className="relative mt-5 block h-1 w-12 rounded-full transition-all duration-500 group-hover:w-20"
                          style={{ background: `linear-gradient(90deg, ${m.color}, ${m.color}66)` }}
                        />
                      </div>
                    </div>
                  </motion.div>

                  {/* Spacer side */}
                  <div className={isLeft ? "hidden lg:block" : "hidden lg:order-1 lg:block"} />
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Closing note ── */}
        <motion.div {...fade(0.4)} className="mt-16 sm:mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 rounded-full bg-white border border-[#E6EFFB] pl-3 pr-5 sm:pr-6 py-3 shadow-[0_14px_36px_-20px_rgba(10,30,79,0.3)]">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#EEF5FF] text-[#165DFF] font-heading font-bold text-[12px] uppercase tracking-wider px-4 py-2">
              <ArrowRight className="w-4 h-4" />
              The Result
            </span>
            <span className="text-[13.5px] sm:text-sm font-bold text-[#1A2333]">
              A healthier, more confident generation of children.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
