import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Star,
  Trophy,
} from "lucide-react";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-white">
      {/* Full-screen background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-sports.jpg"
          alt="Indian school children playing sports"
          className="w-full h-full object-cover object-center opacity-90"
        />
      </div>

      <div className="container relative z-10 pt-24 pb-20 lg:pt-32 lg:pb-24">
        <div className="flex flex-col items-center text-center">
          {/* ── Left column: text ── */}
          <div className="relative max-w-[580px] w-full lg:pt-2">
            <div className="relative z-10 py-4 sm:py-6 lg:py-8">
              <motion.div {...fade(0)}>
                <span className="inline-flex items-center gap-2 rounded-full bg-[#FFF9E9] border border-[#F4B400]/20 pl-3 pr-4 py-2">
                  <Star className="w-4 h-4 text-[#F4B400]" fill="#F4B400" strokeWidth={1} />
                  <span className="font-heading font-bold text-[12px] sm:text-[13px] text-[#0A1E4F]">
                    Grassroots Sports Education for a Stronger India
                  </span>
                </span>
              </motion.div>

              <motion.h1 {...fade(0.1)} className="heading-1 text-[#0A1E4F] mt-5 sm:mt-6">
                Ab Sirf Dekhega Nahi,
                <br />
                <span className="relative inline-block whitespace-nowrap">
                  <span className="bg-gradient-to-r from-[#F4B400] via-[#FF8C42] to-[#FF6B35] bg-clip-text text-transparent">
                    Khelega India.
                  </span>
                  <svg
                    className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-3"
                    viewBox="0 0 260 12"
                    preserveAspectRatio="none"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 8 C 40 2, 72 10, 110 7 C 150 4, 182 10, 256 5"
                      stroke="#F4B400"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </motion.h1>

              <motion.p {...fade(0.2)} className="mt-5 sm:mt-7 mx-auto max-w-[520px] text-base sm:text-[17px] lg:text-[18px] leading-[1.75] text-white font-bold">
                Transforming schools through structured sports education that
                improves health, participation, life skills and school culture.
              </motion.p>

              <motion.div {...fade(0.3)} className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-[18px] bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] text-white font-heading font-bold text-[14px] sm:text-[15px] px-6 sm:px-8 py-3.5 sm:py-4 shadow-[0_18px_40px_-14px_rgba(255,107,53,0.6)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_52px_-14px_rgba(255,107,53,0.7)]"
                >
                  Book a Free School Assessment
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/schools"
                  className="sm:ml-auto inline-flex items-center justify-center gap-2.5 rounded-[18px] border-[1.5px] border-[#0A1E4F]/20 bg-white text-[#0A1E4F] font-heading font-bold text-[14px] sm:text-[15px] px-6 sm:px-8 py-3.5 sm:py-4 transition-all duration-300 hover:-translate-y-1 hover:bg-[#F4F6FB] hover:border-[#0A1E4F]/30"
                >
                  <Download className="w-5 h-5" />
                  Download School Brochure
                </Link>
              </motion.div>
            </div>
          </div>

          {/* ── Floating glass card: Partner Schools ── */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-6 right-6 sm:right-12 z-20"
          >
            <div className="flex items-center gap-2.5 sm:gap-3 rounded-2xl sm:rounded-3xl bg-white/80 backdrop-blur-md border border-white/60 px-3 py-2.5 sm:px-4 sm:py-3 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift animate-float">
              <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#FFF9E9] to-[#FFEFC2] flex items-center justify-center shrink-0">
                <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-[#E89200]" strokeWidth={2.2} />
              </span>
              <span className="leading-tight">
                <span className="block text-[14px] sm:text-[15px] font-extrabold text-[#0A1E4F] leading-none">450+</span>
                <span className="block text-[10px] sm:text-[11px] text-[#6B7280] font-semibold mt-0.5">Partner Schools</span>
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Dynamic curved bottom transition ── */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="block w-full h-12 sm:h-20 lg:h-24">
          <path
            d="M0 120 L0 50 C 180 10, 360 70, 540 35 C 720 0, 900 55, 1080 25 C 1200 10, 1360 30, 1440 5 L 1440 120 Z"
            fill="#0D3BB8"
          />
        </svg>
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="block w-full h-10 sm:h-16 lg:h-20 -mt-5 sm:-mt-8 lg:-mt-10">
          <path
            d="M0 100 L0 45 C 200 8, 420 62, 620 30 C 820 -2, 1020 50, 1200 22 C 1320 10, 1400 28, 1440 15 L 1440 100 Z"
            fill="#165DFF"
          />
        </svg>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="block w-full h-7 sm:h-10 lg:h-12 -mt-4 sm:-mt-6 lg:-mt-8">
          <path
            d="M0 80 L0 50 C 300 25, 500 65, 720 40 C 940 15, 1100 55, 1300 35 C 1380 28, 1420 40, 1440 35 L 1440 80 Z"
            fill="#FF6B35"
          />
        </svg>
        <svg viewBox="0 0 1440 50" preserveAspectRatio="none" className="block w-full h-3 sm:h-5 lg:h-6 -mt-2.5 sm:-mt-3.5 lg:-mt-4">
          <path
            d="M0 50 L0 30 C 360 12, 600 42, 840 28 C 1080 14, 1300 36, 1440 22 L 1440 50 Z"
            fill="#F4B400"
          />
        </svg>
      </div>
    </section>
  );
}
