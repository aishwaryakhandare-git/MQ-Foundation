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
    <section className="relative min-h-[92vh] flex items-start overflow-hidden bg-white">
      <div className="container relative pt-12 pb-8 lg:pt-30 lg:pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-[48%_52%] gap-8 lg:gap-12 items-start">
          {/* ── Left column: text ── */}
          <div className="relative max-w-[580px] w-full lg:pl-10 lg:pt-2">
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

              <motion.p {...fade(0.2)} className="mt-5 sm:mt-7 max-w-[520px] text-base sm:text-[17px] lg:text-[18px] leading-[1.75] text-[#6B7280]">
                Transforming schools through structured sports education that
                improves health, participation, life skills and school culture.
              </motion.p>

              <motion.div {...fade(0.3)} className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
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

          {/* ── Right column: photo + floating card ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:-mt-30"
          >
            {/* Organic asymmetric oval image — SVG clip-path + orange outline */}
            <div className="relative z-10 w-full max-w-[800px] mx-auto lg:mx-0 lg:ml-[80px]">
              {/* Orange outline SVG */}
              <svg
                viewBox="0 0 460 500"
                fill="none"
                className="absolute inset-0 w-full h-full pointer-events-none"
                preserveAspectRatio="none"
              >
                <path
                  d="M230 18 C280 14,350 6,410 30 C444 42,456 66,456 96 C456 136,444 180,440 220 C436 260,448 296,444 336 C440 372,420 412,380 448 C340 476,284 498,224 500 C164 502,104 488,64 456 C28 428,12 390,8 344 C4 296,14 248,14 200 C14 156,8 120,14 88 C20 56,44 32,80 22 C120 12,180 22,230 18Z"
                  stroke="url(#orangeGrad)"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient id="orangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF6B35" />
                    <stop offset="50%" stopColor="#FF8C42" />
                    <stop offset="100%" stopColor="#F4B400" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Soft glow behind image */}
              <div className="absolute -inset-6 bg-gradient-to-br from-[#FF6B35]/10 via-transparent to-[#F4B400]/8 blur-3xl rounded-full pointer-events-none" />

              {/* Image clipped to organic blob shape */}
              <div className="relative overflow-visible group shadow-[0_40px_80px_-24px_rgba(255,107,53,0.25)] aspect-[460/400]">
                <svg width="0" height="0" className="absolute">
                  <defs>
                    <clipPath id="heroBlobClip" clipPathUnits="objectBoundingBox">
                      <path d="M0.5,0.036 C0.609,0.028 0.761,0.012 0.891,0.06 C0.965,0.084 0.991,0.132 0.991,0.192 C0.991,0.272 0.965,0.36 0.957,0.44 C0.948,0.52 0.974,0.592 0.965,0.672 C0.957,0.744 0.913,0.824 0.826,0.896 C0.739,0.952 0.617,0.996 0.487,1 C0.357,1.004 0.226,0.976 0.139,0.912 C0.061,0.856 0.026,0.78 0.017,0.688 C0.009,0.592 0.03,0.496 0.03,0.4 C0.03,0.312 0.017,0.24 0.03,0.176 C0.043,0.112 0.096,0.064 0.174,0.044 C0.261,0.024 0.391,0.044 0.5,0.036Z" />
                    </clipPath>
                  </defs>
                </svg>
                <img
                  src="/images/hero-sports.jpg"
                  alt="Indian school children playing sports"
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                  style={{ clipPath: "url(#heroBlobClip)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E4F]/15 via-transparent to-transparent" style={{ clipPath: "url(#heroBlobClip)" }} />
              </div>
            </div>

            {/* ── Floating glass card: Partner Schools ── */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -top-3 right-2 sm:right-8 z-20"
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
