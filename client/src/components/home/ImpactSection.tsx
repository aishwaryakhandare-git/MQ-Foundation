import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Counter from "./Counter";
import IndiaImpactMap from "./IndiaImpactMap";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const STATS = [
  { value: 450, suffix: "+", label: "Schools Empowered", accent: "#0066B3" },
  { value: 125000, suffix: "+", label: "Students Impacted", accent: "#E31B23" },
  { value: 120, suffix: "+", label: "Cities Reached", accent: "#0066B3" },
  { value: 650, suffix: "+", label: "Certified Coaches", accent: "#E31B23" },
  { value: 15, suffix: "+", label: "Sports Covered", accent: "#0066B3" },
  { value: 8, suffix: "+", label: "Years Experience", accent: "#E31B23" },
];

export default function ImpactSection() {
  return (
    <section id="impact" className="relative overflow-x-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-14 lg:gap-16 items-center">
          {/* ── LEFT — India map (≈40% width, ~85% height) ── */}
          <motion.div {...fade(0)} className="relative order-2 lg:order-1">
            <IndiaImpactMap />
          </motion.div>

          {/* ── RIGHT — header, description, statistics, closing statement ── */}
          <div className="order-1 lg:order-2 min-w-0">
            {/* Eyebrow */}
            <motion.p {...fade(0)} className="font-heading font-extrabold text-[20px] sm:text-[22px] lg:text-[24px] sm:tracking-[0.18em] tracking-[0.16em] uppercase text-[#0066B3] mb-5">
              Our Impact
            </motion.p>

            {/* Main heading */}
            <motion.h2 {...fade(0.05)} className="heading-2 text-[#0A1E4F] font-extrabold text-[40px] sm:text-[52px] lg:text-[60px] xl:text-[66px] leading-[1.02] tracking-tight">
              <span className="relative inline-block text-[#E31B23]">
                Across India
                <svg
                  className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-3 sm:h-4"
                  viewBox="0 0 260 14"
                  preserveAspectRatio="none"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M4 9 C 40 3, 74 12, 112 8 C 152 4, 186 12, 256 6"
                    stroke="#165DFF"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p {...fade(0.1)} className="mt-7 max-w-xl text-[18px] sm:text-[20px] lg:text-[22px] leading-[1.6] font-medium text-[#64748B]">
              Real numbers from the ground — a movement that keeps growing,
              one school at a time.
            </motion.p>

            {/* ── Statistics — 3 × 2 grid ── */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5 min-w-0">
              {STATS.map((s, i) => (
                <motion.div key={s.label} {...fade(0.12 + i * 0.05)} className="h-full">
                  <div className="group h-full bg-white rounded-[20px] border border-[#165DFF]/25 px-5 py-6 sm:px-6 sm:py-7 shadow-[0_12px_30px_-18px_rgba(15,40,80,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_44px_-20px_rgba(15,40,80,0.25)]">
                    <p className="font-heading font-extrabold text-[22px] sm:text-[24px] lg:text-[26px] leading-none tracking-tight text-[#0A1E4F]">
                      <Counter to={s.value} suffix={s.suffix} />
                    </p>
                    <p className="mt-2.5 text-[12.5px] sm:text-[13px] font-bold text-[#0A1E4F]/75">
                      {s.label}
                    </p>
                    <span
                      className="mt-3.5 block h-[3px] w-9 rounded-full transition-all duration-500 group-hover:w-14"
                      style={{ background: s.accent }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* ── Bottom: closing statement + CTA ── */}
            <div className="mt-12 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <motion.div {...fade(0.2)}>
                <p className="font-heading font-extrabold italic text-[26px] sm:text-[30px] lg:text-[34px] leading-[1.15] text-[#0A1E4F]">
                  More Schools. More Children.
                  <br />
                  A More <span className="text-[#E31B23]">Active</span> India.
                </p>
                <svg
                  className="mt-3 w-[220px] h-[8px]"
                  viewBox="0 0 220 8"
                  preserveAspectRatio="none"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M4 5 C 40 1, 80 7, 120 4 C 160 1.5, 190 5, 216 3"
                    stroke="#165DFF"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </motion.div>

              <motion.div {...fade(0.25)}>
                <a
                  href="#impact"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#0066B3] text-white font-heading font-bold text-[16px] px-10 h-[58px] shadow-[0_18px_34px_-16px_rgba(0,102,179,0.55)] transition-all duration-300 hover:bg-[#E31B23] hover:shadow-[0_22px_40px_-16px_rgba(227,27,35,0.5)] hover:-translate-y-1"
                >
                  Explore Our Impact
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}