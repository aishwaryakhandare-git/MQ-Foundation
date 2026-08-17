import { motion } from "framer-motion";
import { Compass, Gem, HeartHandshake } from "lucide-react";

/* ─── Elegant line-art illustrations ─── */

function MissionArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 96 96" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M48 12v72" />
      <path d="M24 24 48 12l24 12" />
      <path d="M48 84 26 66V34l22-10 22 10v32L48 84Z" opacity="0.5" />
      <circle cx="48" cy="46" r="10" />
      <path d="M48 42v8l6 4" />
      <path d="M20 40c-4 2-7 6-8 11M76 40c4 2 7 6 8 11" opacity="0.4" />
      <path d="M36 20c4-4 8-6 12-6s8 2 12 6" opacity="0.4" />
    </svg>
  );
}

function VisionArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 96 96" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="48" cy="48" r="34" />
      <circle cx="48" cy="48" r="16" />
      <path d="M48 14v10M48 72v10M14 48h10M72 48h10" opacity="0.5" />
      <path d="M24 24l7 7M72 24l-7 7M24 72l7-7M72 72l-7-7" opacity="0.5" />
      <circle cx="48" cy="48" r="4" fill="currentColor" stroke="none" />
      <path d="M48 28c4 6 8 8 12 8" opacity="0.4" />
      <path d="M48 68c-4-6-8-8-12-8" opacity="0.4" />
    </svg>
  );
}

function ValuesArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 96 96" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M48 14 20 26v22c0 18 12 30 28 36 16-6 28-18 28-36V26L48 14Z" />
      <path d="M48 14v70" opacity="0.3" />
      <path d="M36 40c2-3 6-5 12-5" opacity="0.6" />
      <path d="M60 40c-2-3-6-5-12-5" opacity="0.6" />
      <path d="M36 50c4-3 8-4 12-4s8 1 12 4" opacity="0.5" />
      <path d="M40 60c4-2 8-2 12 0" opacity="0.4" />
    </svg>
  );
}

/* ─── Pillar data ─── */

const PILLARS = [
  {
    icon: Compass,
    art: MissionArt,
    label: "01",
    title: "Mission",
    color: "#165DFF",
    from: "#7FA8FF",
    to: "#1E4FCE",
    glow: "rgba(22,93,255,0.3)",
    heading: "Sports for every child",
    body: "To bring structured, joyful sports education to every school in India — so no child misses the chance to move, play and grow.",
  },
  {
    icon: Gem,
    art: VisionArt,
    label: "02",
    title: "Vision",
    color: "#E89200",
    from: "#FFC94D",
    to: "#C98200",
    glow: "rgba(232,146,0,0.3)",
    heading: "A stronger, healthier India",
    body: "A nation where every child — regardless of background — grows up active, confident and proud through sport.",
  },
  {
    icon: HeartHandshake,
    art: ValuesArt,
    label: "03",
    title: "Values",
    color: "#27AE60",
    from: "#6FD69B",
    to: "#1E8A4C",
    glow: "rgba(39,174,96,0.3)",
    heading: "Excellence with heart",
    body: "We are led by integrity, inclusion and empathy — always putting children, teachers and communities first.",
  },
];

const fade = (delay: number) => ({
  initial: { y: 34 },
  animate: { y: 0 },
  transition: { duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function PhilosophySection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#FDFDFB] to-white pt-14 sm:pt-16 lg:pt-1 pb-20 sm:pb-28 lg:pb-36">
      {/* ── Warm layered background ── */}
      <div className="absolute -top-28 -left-24 w-[440px] h-[440px] bg-[#F4B400]/[0.08] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-[460px] h-[460px] bg-[#165DFF]/[0.06] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-28 -left-16 w-[400px] h-[400px] bg-[#27AE60]/[0.06] rounded-full blur-3xl pointer-events-none" />

      {/* Dotted patterns */}
      <div
        className="absolute top-32 right-[14%] w-28 h-28 opacity-[0.14] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#E89200 2px, transparent 2px)",
          backgroundSize: "15px 15px",
        }}
      />

      <div className="container relative">
        {/* ── Header ── */}
        <motion.div {...fade(0)} className="max-w-2xl mx-auto text-center">
          <p className="eyebrow justify-center text-[#E89200] mb-4">Our Philosophy</p>
          <h2 className="heading-2 text-[#0A1E4F]">
            The Foundations We&apos;re Built On
          </h2>
          <p className="body-lg mt-5">
            Three pillars support everything we do — the reason we exist, the
            future we&apos;re working towards, and how we show up every day.
          </p>
        </motion.div>

        {/* ── Connected pillars ── */}
        <div className="relative mt-16 sm:mt-20">
          {/* Flowing connection line */}
          <svg
            className="absolute top-[180px] left-0 w-full hidden lg:block pointer-events-none"
            viewBox="0 0 1200 80"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M80 40 C 300 4, 420 76, 600 40 C 780 4, 900 76, 1120 40"
              stroke="url(#pillarGrad)"
              strokeWidth="2"
              strokeDasharray="1 14"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="pillarGrad" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
                <stop stopColor="#165DFF" />
                <stop offset="0.5" stopColor="#E89200" />
                <stop offset="1" stopColor="#27AE60" />
              </linearGradient>
            </defs>
          </svg>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 lg:gap-10 items-start">
            {PILLARS.map((p, i) => {
              const Art = p.art;
              return (
                <motion.div key={p.title} {...fade(i * 0.12)} className="relative">
                  {/* Monument / foundation stone shape */}
                  <div className="group relative mx-auto max-w-[360px]">
                    {/* Glow behind */}
                    <div
                      className="absolute -inset-6 rounded-[40px] blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none"
                      style={{ background: p.glow }}
                    />

                    {/* Pillar body */}
                    <div
                      className="relative rounded-t-[44px] rounded-b-[24px] border border-[#EDF2FF] pt-9 pb-10 px-7 text-center overflow-hidden bg-gradient-to-b from-white via-[#FDFEFF] to-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-2 shadow-[0_30px_70px_-40px_rgba(10,30,79,0.4)] group-hover:shadow-[0_44px_90px_-44px_var(--accent-glow)]"
                      style={{ "--accent-glow": p.glow } as React.CSSProperties}
                    >
                      {/* Art watermark */}
                      <Art className="absolute -top-6 -right-5 w-28 h-28 text-[#14213D] opacity-[0.04] transition-transform duration-700 group-hover:rotate-6 pointer-events-none" />

                      {/* Emblem */}
                      <div
                        className="relative w-[74px] h-[74px] mx-auto rounded-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110"
                        style={{
                          background: `radial-gradient(circle at 30% 25%, ${p.from} 0%, ${p.color} 60%, ${p.to} 100%)`,
                          boxShadow: `0 16px 34px -12px ${p.glow}, inset 0 2px 3px rgba(255,255,255,0.4)`,
                        }}
                      >
                        <p.icon className="w-8 h-8 text-white" strokeWidth={2} />
                      </div>

                      {/* Label */}
                      <span
                        className="mt-6 inline-flex items-center rounded-full px-3 py-1 text-[11px] font-extrabold tracking-[0.12em]"
                        style={{ backgroundColor: `${p.color}14`, color: p.color }}
                      >
                        {p.label} — {p.title.toUpperCase()}
                      </span>

                      {/* Heading */}
                      <h3 className="mt-4 font-heading font-extrabold text-[24px] text-[#0A1E4F] leading-tight">
                        {p.heading}
                      </h3>

                      {/* Body */}
                      <p className="mt-3.5 text-[14.5px] leading-relaxed font-medium text-[#6B7280]">
                        {p.body}
                      </p>

                      {/* Base accent */}
                      <span
                        className="mt-6 block h-1 w-14 mx-auto rounded-full transition-all duration-500 group-hover:w-20"
                        style={{ background: `linear-gradient(90deg, ${p.color}, ${p.color}66)` }}
                      />
                    </div>

                    {/* Foundation base */}
                    <div
                      className="relative mx-auto -mt-2 w-[78%] h-4 rounded-b-[20px] opacity-90"
                      style={{
                        background: `linear-gradient(180deg, ${p.to}55, ${p.to}22)`,
                      }}
                    />
                    <div
                      className="relative mx-auto -mt-1.5 w-[56%] h-3 rounded-b-[18px] opacity-80"
                      style={{
                        background: `linear-gradient(180deg, ${p.to}44, ${p.to}18)`,
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── Closing mantra ── */}
        <motion.div {...fade(0.35)} className="mt-20 text-center">
          <p className="font-heading font-extrabold text-[clamp(1.4rem,3.2vw,2.2rem)] text-[#0A1E4F] leading-snug max-w-3xl mx-auto">
            We believe sport isn&apos;t a subject —
            <br className="hidden sm:block" />
            <span className="text-gradient-blue">it&apos;s a way to build a better India.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
