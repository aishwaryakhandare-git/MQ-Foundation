import { motion } from "framer-motion";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function Hero() {
  return (
    <section id="home-hero" className="relative min-h-[92vh] flex items-center overflow-hidden bg-white pt-16 lg:pt-54">
      {/* Full-screen background video */}
      <div className="absolute inset-0 z-0">
        <video
          src="/images/Inter-MQ-for-PL-Website-100MB-HQ.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      <div className="container relative z-10 pt-36 pb-16 lg:pt-52 lg:pb-16">
        <div className="grid grid-cols-1 gap-10 lg:gap-16 items-center">
          {/* ── Headline + paragraph ── */}
          <div className="text-left -translate-y-20 lg:-translate-y-38">
            {/* ── Headline ── */}
            <motion.h1
              {...fade(0)}
              className="
                heading-1
                font-extrabold
                text-[#274F9A]
                text-[2.7rem]
                sm:text-[3.4rem]
                md:text-[4.1rem]
                lg:text-[4.8rem]
                xl:text-[5.4rem]
                leading-[1.02]
              "
            >
              <span className="text-[#FF9933]">Ab Sirf </span>
              <span className="text-white">Dekhega Nahi,</span>
              <br />

              <span
                className="
                  relative
                  inline-block
                  mt-4
                  text-[#138808]
                  whitespace-nowrap
                  leading-none
                "
              >
                Khelega India.

                <svg
                  className="
                    absolute
                    -bottom-2
                    sm:-bottom-3
                    left-0
                    w-full
                    h-3
                  "
                  viewBox="0 0 260 12"
                  preserveAspectRatio="none"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M4 8 C 40 2, 72 10, 110 7 C 150 4, 182 10, 256 5"
                    stroke="#138808"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.h1>

            {/* ── Supporting paragraph ── */}
            <motion.p {...fade(0.2)} className="mt-7 max-w-[620px] text-white text-[16px] sm:text-[17px] lg:text-[19px] leading-[1.75] font-medium">
              Join our Mission in transforming India from a <br/>
              SPORTS WATCHING to a SPORTS PLAYING NATION.
            </motion.p>
          </div>
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
