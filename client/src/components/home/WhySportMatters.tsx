import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

const fade = (delay: number, from: "left" | "right" = "left") => ({
  initial: { opacity: 0, x: from === "left" ? -32 : 32, y: 20 },
  whileInView: { opacity: 1, x: 0, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function WhySportMatters() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#0A1E4F 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="container relative pt-16 pb-20 sm:pt-20 sm:pb-28 lg:pt-28 lg:pb-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── Left: Large arch image composition ── */}
          <motion.div
            {...fade(0)}
            className="relative max-w-[650px] mx-auto lg:mx-0 w-full h-[600px] sm:h-[650px]"
          >
            {/* Large main arched image */}
            <div
              className="
                absolute
                left-0
                top-[4%]
                w-[72%]
                h-[92%]
                overflow-hidden
                rounded-t-[220px]
                rounded-b-[32px]
                shadow-[0_30px_70px_-24px_rgba(10,30,79,0.28)]
              "
            >
              <img
                src="/images/hero-sports.jpg"
                alt="Children playing sports together"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Top-right image */}
            <div
              className="
                absolute
                top-[2%]
                right-0
                w-[30%]
                h-[38%]
                overflow-hidden
                rounded-[26px]
                border-4
                border-white
                shadow-[0_18px_40px_-14px_rgba(10,30,79,0.3)]
                z-20
              "
            >
              <img
                src="/images/solutions/curriculum.jpg"
                alt="Coach leading a sports class"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Bottom-right image */}
            <div
              className="
                absolute
                bottom-[2%]
                right-0
                w-[30%]
                h-[38%]
                overflow-hidden
                rounded-[26px]
                border-4
                border-white
                shadow-[0_18px_40px_-14px_rgba(10,30,79,0.3)]
                z-20
              "
            >
              <img
                src="/images/solutions/fitness.jpg"
                alt="Students in fitness training"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Yellow accent */}
            <div
              className="
                absolute
                top-0
                right-[24%]
                w-16
                h-16
                rounded-full
                bg-[#F4B400]
                z-10
              "
            />

            {/* Impact badge */}
            <div
              className="
                absolute
                top-1/2
                -translate-y-1/2
                right-[22%]
                z-30
                bg-white
                rounded-[18px]
                px-5
                py-4
                shadow-[0_15px_40px_-15px_rgba(10,30,79,0.3)]
                border
                border-[#E7EBF3]
              "
            >
              <span className="block font-heading font-extrabold text-[28px] leading-none text-[#FF6B35]">
                20+
              </span>

              <span className="block text-[11px] font-semibold text-[#6B7280] mt-1 whitespace-nowrap">
                Years of Impact
              </span>
            </div>
          </motion.div>

          {/* ── Right: text content ── */}
          <motion.div {...fade(0.1, "right")} className="text-left">
            <motion.p {...fade(0.05, "right")} className="font-heading font-bold text-sm sm:text-base tracking-wide text-[#FF6B35] mb-4 uppercase">
              Why Sport Matters
            </motion.p>

            <motion.h2 {...fade(0.1, "right")} className="heading-2 text-[#0A1E4F] font-extrabold leading-[1.08] tracking-tight">
              From watching the game to playing it
              <br />
              Development Through{" "}
              <span className="relative inline-block text-[#E31B23] leading-none text-[1.45em] italic" style={{ fontFamily: "'DM Serif Display', serif" }}>
                Sport
                <svg
                  className="absolute -bottom-2 sm:-bottom-2.5 left-0 w-full h-3"
                  viewBox="0 0 120 12"
                  preserveAspectRatio="none"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M4 8 C 24 2, 48 10, 72 7 C 90 4.5, 100 7, 116 5"
                    stroke="#165DFF"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.h2>

            <motion.p {...fade(0.15, "right")} className="mt-5 text-[13px] sm:text-base lg:text-[16px] leading-[1.55] text-[#111827] font-semibold">
              For too many children, sport begins and ends with simply watching. At Marcos Quay Foundation, we believe every child deserves the opportunity to step onto the field, learn the game and discover how far they can go.

              Our journey starts at the grassroots—creating safe, structured spaces where children can move, play and build a foundation in sport. But the journey doesn't stop there. As children grow and their interests and abilities emerge, we help take them from basic grassroots play to more structured and sport-specific training environments.
            </motion.p>

            <motion.p {...fade(0.2, "right")} className="mt-4 text-[13px] sm:text-base lg:text-[16px] leading-[1.55] text-[#111827] font-semibold">
              What begins as a first experience on the ground can become a pathway. A child who once played simply for fun can develop discipline, confidence and competitive skills—and begin to see themselves not just as a participant, but as an athlete.

              Through our work with schools and communities, we have seen students find their sport, develop their abilities and rise through the levels of participation. The goal is not to make every child a professional athlete. It is to make sure every child gets the opportunity to play, improve and discover their potential.
            </motion.p>

            <motion.div {...fade(0.3, "right")} className="mt-8">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 rounded-full bg-[#165DFF] text-white font-heading font-bold text-[14px] sm:text-[15px] px-7 sm:px-8 py-3.5 sm:py-4 shadow-[0_14px_30px_-12px_rgba(22,93,255,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-12px_rgba(22,93,255,0.6)]"
              >
                Read More - About Us
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}