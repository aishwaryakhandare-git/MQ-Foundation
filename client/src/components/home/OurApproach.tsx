import { motion } from "framer-motion";

const fade = (delay: number, from: "left" | "right" | "up" = "up") => {
  const offset =
    from === "left" ? { x: -28 } : from === "right" ? { x: 28 } : { y: 24 };
  return {
    initial: { opacity: 0, ...offset },
    whileInView: { opacity: 1, x: 0, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] as const },
  };
};

export default function OurApproach() {
  return (
    <section
      className="relative overflow-hidden bg-[#0A1E4F]"
      style={{ clipPath: "polygon(0 3.25%, 100% 0, 100% 100%, 0 96.75%)" }}
    >
      <div className="container relative pt-3 pb-4 sm:pt-4 sm:pb-6 lg:pt-5 lg:pb-7">
        <div className="relative mx-auto max-w-[840px] text-center">
          {/* Eyebrow */}
          <motion.p
            {...fade(0)}
            className="flex items-center justify-center gap-4 font-heading text-[12px] sm:text-[13px] font-extrabold uppercase tracking-[0.22em] text-[#E31B23]"
          >
            <span className="h-px w-10 bg-[#E31B23]" />
            Our Approach
            <span className="h-px w-10 bg-[#E31B23]" />
          </motion.p>

          {/* Headline */}
          <motion.h2
            {...fade(0.1)}
            className="mt-7 font-heading font-extrabold leading-[1.08] tracking-[-0.02em] text-white text-[2rem] sm:text-[2.7rem] lg:text-[3.4rem]"
          >
            Health is a{" "}
            <span
              className="relative inline-block text-[#E31B23] leading-none text-[1.18em] italic"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              Habit
              <svg
                className="absolute -bottom-2 sm:-bottom-2.5 left-0 w-full h-3"
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M4 8 C 40 2, 72 10, 110 7 C 150 4, 182 10, 196 5"
                  stroke="#165DFF"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.h2>

          {/* Supporting sentence */}
          <motion.p
            {...fade(0.2)}
            className="mx-auto mt-7 max-w-[600px] text-[15px] sm:text-[16px] leading-[1.75] text-white/85"
          >
            To be fit and healthy, we have to inculcate heath is a habit. 
            Marcos Quay believs that craeting active and healthy children will lead to active and healthy adults. 
          </motion.p>
        </div>

        {/* Handwritten-style message — right side */}
        <motion.p
          {...fade(0.3)}
          className="absolute right-0 bottom-0 hidden text-right font-serif italic text-white/90 lg:block"
          style={{ fontFamily: "'DM Serif Display', serif" }}
        >
          <span className="mb-3 block h-[2px] w-16 rounded-full bg-[#F4B400] ml-auto" />
          <span className="text-[1.55rem] leading-[1.4]">
            Same Fields.
            <br />
            Bigger Dreams.
            <br />
            Stronger India.
          </span>
        </motion.p>
      </div>
    </section>
  );
}