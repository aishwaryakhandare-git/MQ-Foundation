import { Fragment } from "react";
import { motion } from "framer-motion";

const LOGOS = [
  "/images/School Logos/DPS School.png",
  "/images/School Logos/Nanavati School Logo.png",
  "/images/School Logos/NSM School Logo.png",
  "/images/School Logos/RN Shah PNG.png",
  "/images/School Logos/KES School.png",
  "/images/School Logos/Nahar PNG.png",
  "/images/School Logos/Om Public School Logo.png",
  "/images/School Logos/Elite Eductaional Institute Logo.png",
  "/images/School Logos/AVM 2.png",
  "/images/School Logos/Cosmo Primary Logo.png",
  "/images/School Logos/Nalanda School.png",
  "/images/School Logos/Guru Nanak Global Academy.png",
];

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function TrustedBy() {
  return (
    <section className="relative bg-white pt-16 sm:pt-20 lg:pt-24 pb-0">
      {/* ── Header ── */}
      <div className="container">
        <motion.div {...fade(0)} className="text-center max-w-2xl mx-auto">
          <h2 className="heading-2 font-extrabold text-[30px] sm:text-[38px] lg:text-[42px] text-[#0A1E4F] leading-tight tracking-tight">
            Trusted by{" "}
            <span className="relative inline-block text-[#E31B23]">
              Leading Schools
              <svg
                className="absolute -bottom-2 left-0 w-full h-3"
                viewBox="0 0 260 12"
                preserveAspectRatio="none"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M4 8 C 40 2, 72 10, 110 7 C 150 4, 182 10, 256 5"
                  stroke="#165DFF"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
          <p className="mt-5 text-[15px] sm:text-base lg:text-[17px] text-[#64748B] font-medium">
            Recognised by a growing network of forward-thinking schools across India.
          </p>
        </motion.div>
      </div>

      {/* ── Auto-scrolling logo marquee — full page width ── */}
      <motion.div {...fade(0.1)} className="relative mt-10 sm:mt-12 w-full">
        <div className="relative bg-[#F4F7FB] border-y border-[#E7EBF3] py-7 sm:py-9 overflow-hidden">
          {/* Edge fade masks */}
          <div
            className="absolute left-0 top-0 bottom-0 w-10 sm:w-16 bg-gradient-to-r from-[#F4F7FB] to-transparent z-10 pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-10 sm:w-16 bg-gradient-to-l from-[#F4F7FB] to-transparent z-10 pointer-events-none"
            aria-hidden="true"
          />

          {/* w-max strip so the -50% loop is seamless */}
          <div className="flex items-center w-max animate-scroll-left">
            {[...Array(2)].map((_, setIdx) => (
              <Fragment key={setIdx}>
                {LOGOS.map((src, i) => (
                  <div
                    key={`${setIdx}-${src}`}
                    className={`flex items-center justify-center w-36 sm:w-44 lg:w-52 h-14 sm:h-16 shrink-0 opacity-75 hover:opacity-100 transition-opacity duration-500 ${
                      i > 0 ? "border-l border-[#E7EBF3]" : ""
                    }`}
                  >
                    <img
                      src={src}
                      alt="Partner school logo"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}