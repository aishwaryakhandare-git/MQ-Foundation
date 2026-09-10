import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Trophy,
} from "lucide-react";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function Hero() {
  return (
    <section id="home-hero" className="relative min-h-[92vh] flex items-center overflow-hidden bg-white pt-16 lg:pt-54">
      {/* Full-screen background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-sports.jpg"
          alt="Indian school children playing sports"
          className="w-full h-full object-cover object-center opacity-90"
        />
      </div>

      <div className="container relative z-10 pt-36 pb-16 lg:pt-52 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-center">
          {/* ── Left column: headline + paragraph ── */}
          <div className="text-left lg:pl-0 xl:pl-4">
            {/* ── Headline ── */}
            <motion.h1 {...fade(0)} className="heading-1 font-extrabold text-white text-[2.2rem] sm:text-[2.9rem] md:text-[3.4rem] lg:text-[3.8rem] xl:text-[4.3rem] leading-[1.05]">
              Ab Sirf Dekhega Nahi,
              <br />
              <span className="relative inline-block mt-4 text-[#E31B23] whitespace-nowrap leading-none">
                Khelega India.
                <svg
                  className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-3"
                  viewBox="0 0 260 12"
                  preserveAspectRatio="none"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M4 8 C 40 2, 72 10, 110 7 C 150 4, 182 10, 256 5"
                    stroke="#E31B23"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.h1>

            {/* ── Supporting paragraph ── */}
            <motion.p {...fade(0.2)} className="mt-6 max-w-[540px] text-white text-[14px] sm:text-[15px] lg:text-[17px] leading-[1.75] font-medium">
              Transforming schools through structured sports education that
              improves health, participation, life skills and school culture.
            </motion.p>
          </div>

          {/* ── Right column: CTA buttons ── */}
          <motion.div {...fade(0.35)} className="flex flex-col gap-3 sm:gap-4 w-full max-w-[300px] justify-self-end lg:pr-4 xl:pr-8 self-center">
            <a
              href="#impact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0066B3] text-white font-heading font-bold text-[13px] sm:text-[14px] px-6 sm:px-7 py-3 sm:py-3.5 shadow-[0_14px_30px_-12px_rgba(0,102,179,0.55)] transition-all duration-300 hover:bg-[#E31B23] hover:shadow-[0_18px_40px_-12px_rgba(227,27,35,0.45)] hover:-translate-y-1"
            >
              See Our Impact
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <Link
              href="/schools"
              className="inline-flex items-center justify-center gap-2 rounded-full border-[1.5px] border-white/60 bg-white/10 backdrop-blur-md text-white font-heading font-bold text-[13px] sm:text-[14px] px-6 sm:px-7 py-3 sm:py-3.5 transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
            >
              <Download className="w-4 h-4" />
              Download School Brochure
            </Link>
          </motion.div>
        </div>

        
      </div>

      {/* ── Dynamic curved bottom transition ── */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="block w-full h-7 sm:h-10 lg:h-12 -mt-4 sm:-mt-6 lg:-mt-8">
          <path
            d="M0 80 L0 50 C 300 25, 500 65, 720 40 C 940 15, 1100 55, 1300 35 C 1380 28, 1420 40, 1440 35 L 1440 80 Z"
            fill="#165DFF"
          />
        </svg>
        <svg viewBox="0 0 1440 50" preserveAspectRatio="none" className="block w-full h-3 sm:h-5 lg:h-6 -mt-2.5 sm:-mt-3.5 lg:-mt-4">
          <path
            d="M0 50 L0 30 C 360 12, 600 42, 840 28 C 1080 14, 1300 36, 1440 22 L 1440 50 Z"
            fill="#E31B23"
          />
        </svg>
      </div>
    </section>
  );
}
