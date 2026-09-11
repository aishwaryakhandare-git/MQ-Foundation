import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "The sports excellence program has helped students perform better while building coordination, commitment, confidence, and leadership skills beyond just winning matches.",
    name: "Inderpreet Devgun",
    role: "Associate Director, KPMG India",
  },
  {
    quote:
      "Together, we are empowering young minds not only to participate in sports but to thrive. Every child has the chance to excel in sports.",
    name: "Akira Watanabe",
    role: "Director, Casio India",
  },
  {
    quote:
      "The program has created a stronger culture of participation, discipline, teamwork, and confidence among students across the school community.",
    name: "School Leadership",
    role: "Education Partner",
  },
];

const GAP = 16;
const AUTOPLAY_MS = 4500;

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 25 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: {
    duration: 0.7,
    delay,
    ease: [0.22, 1, 0.36, 1] as const,
  },
});

/* =========================================================
   TESTIMONIAL CAROUSEL
========================================================= */

function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [advance, setAdvance] = useState(0);
  const [paused, setPaused] = useState(false);

  const currentRef = useRef(0);
  const viewportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    currentRef.current = current;
  }, [current]);

  /* Calculate how far one slide should move */
  useEffect(() => {
    const measure = () => {
      const el = viewportRef.current;

      if (!el) return;

      const width = el.offsetWidth;

      const isDesktop = window.matchMedia("(min-width: 768px)").matches;

      if (isDesktop) {
        setAdvance((width - GAP) / 2 + GAP);
      } else {
        setAdvance(width);
      }
    };

    measure();

    window.addEventListener("resize", measure);

    return () => {
      window.removeEventListener("resize", measure);
    };
  }, []);

  /* Autoplay */
  useEffect(() => {
    if (paused || !advance) return;

    const interval = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }, AUTOPLAY_MS);

    return () => window.clearInterval(interval);
  }, [paused, advance]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const previous = () => {
    setCurrent((prev) =>
      prev === 0 ? TESTIMONIALS.length - 1 : prev - 1,
    );
  };

  /*
   * Duplicate testimonials so the carousel can continuously
   * move from right to left.
   */
  const slides = [
    ...TESTIMONIALS,
    ...TESTIMONIALS,
  ];

  const x = -(current * advance);

  return (
    <div
      className="relative mt-10 lg:-ml-[145px] lg:w-[calc(100%+145px)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Carousel viewport */}
      <div
        ref={viewportRef}
        className="relative overflow-hidden"
      >
        <motion.div
          className="flex gap-4"
          animate={{ x }}
          transition={{
            duration: 0.75,
            ease: [0.4, 0, 0.2, 1],
          }}
        >
          {slides.map((testimonial, index) => (
            <div
              key={`${testimonial.name}-${index}`}
              className="
                w-full
                md:w-[calc(50%-8px)]
                shrink-0
              "
            >
              <article
                className="
                  relative
                  h-[385px]
                  sm:h-[400px]
                  lg:h-[380px]
                  rounded-[12px]
                  border
                  border-[#165DFF]
                  bg-white
                  px-6
                  sm:px-7
                  lg:px-6
                  py-7
                  sm:py-8
                  flex
                  flex-col
                "
              >
                {/* Quote mark */}
                <Quote
                  className="
                    w-10
                    h-10
                    text-[#165DFF]
                    mb-5
                  "
                  strokeWidth={1.5}
                />

                {/* Testimonial */}
                <p
                  className="
                    text-[15px]
                    sm:text-[16px]
                    lg:text-[15px]
                    leading-[1.55]
                    text-[#3F3F3F]
                    font-medium
                    max-w-[390px]
                  "
                >
                  {testimonial.quote}
                </p>

                {/* Bottom author */}
                <div className="mt-auto">
                  <p
                    className="
                      text-[18px]
                      sm:text-[19px]
                      font-bold
                      text-[#005BAC]
                    "
                  >
                    {testimonial.name}
                  </p>

                  <p
                    className="
                      mt-1
                      text-[14px]
                      sm:text-[15px]
                      text-[#444]
                    "
                  >
                    {testimonial.role}
                  </p>
                </div>
              </article>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Left arrow */}
      <button
        type="button"
        aria-label="Previous testimonial"
        onClick={previous}
        className="
          absolute
          left-[-7px]
          top-1/2
          z-20
          -translate-y-1/2
          flex
          h-9
          w-9
          items-center
          justify-center
          bg-white
          text-[#111]
          transition
          hover:text-[#165DFF]
        "
      >
        <ChevronLeft
          className="h-7 w-7"
          strokeWidth={1.5}
        />
      </button>

      {/* Right arrow */}
      <button
        type="button"
        aria-label="Next testimonial"
        onClick={next}
        className="
          absolute
          right-[-7px]
          top-1/2
          z-20
          -translate-y-1/2
          flex
          h-9
          w-9
          items-center
          justify-center
          bg-white
          text-[#111]
          transition
          hover:text-[#165DFF]
        "
      >
        <ChevronRight
          className="h-7 w-7"
          strokeWidth={1.5}
        />
      </button>
    </div>
  );
}

/* =========================================================
   TESTIMONIAL SECTION
========================================================= */

export default function TestimonialsSection() {
  return (
    <section
      className="
        relative
        bg-white
        pt-12
        sm:pt-16
        lg:pt-14
        pb-20
        sm:pb-24
        lg:pb-28
        overflow-hidden
      "
    >
      <div className="container lg:max-w-[1300px]">
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[38%_62%]
            items-start
          "
        >
          {/* =================================================
              LEFT IMAGE
          ================================================= */}
          <motion.div
            {...fade(0)}
            className="
              relative
              z-0
              order-2
              lg:order-1
              overflow-hidden
              rounded-[10px]
              h-[420px]
              sm:h-[520px]
              lg:h-[680px]
            "
          >
            <img
              src="/images/solutions/multisport.jpg"
              alt="Students playing together on the field"
              className="
                w-full
                h-full
                object-cover
              "
            />
          </motion.div>

          {/* =================================================
              RIGHT CONTENT
          ================================================= */}
          <motion.div
            {...fade(0.1)}
            className="
              relative
              z-10
              order-1
              lg:order-2
              lg:pl-7
              xl:pl-10
              pt-1
            "
          >
            {/* Eyebrow */}
            <p
              className="
                text-[16px]
                sm:text-[17px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-[#005BAC]
              "
            >
              Testimonials
            </p>

            {/* Heading */}
            <h2
              className="
                mt-7
                text-[40px]
                sm:text-[48px]
                lg:text-[47px]
                xl:text-[50px]
                leading-[1.08]
                font-bold
                tracking-[-0.025em]
                text-[#111111]
              "
            >
              Voices From The{" "}
              <span
                className="
                  relative
                  inline-block
                  text-[#E31B23]
                "
              >
                Ecosystem

                {/* Hand-drawn underline */}
                <svg
                  className="
                    absolute
                    left-0
                    -bottom-3
                    w-full
                    h-[13px]
                  "
                  viewBox="0 0 190 12"
                  preserveAspectRatio="none"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 8 C 30 2, 58 10, 94 6 C 132 2, 156 9, 187 5"
                    stroke="#005BAC"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            {/* Description */}
            <p
              className="
                mt-8
                max-w-[780px]
                text-[16px]
                sm:text-[17px]
                leading-[1.65]
                text-[#222]
                font-normal
              "
            >
              The true measure of our impact lies in the voices of those
              we serve and work alongside. These perspectives from across
              the ecosystem highlight how sport is transforming lives and
              strengthening communities.
            </p>

            {/* =================================================
                CARDS
                Negative margin creates the overlap seen
                in the reference image.
            ================================================= */}
            <TestimonialCarousel />
          </motion.div>
        </div>
      </div>
    </section>
  );
}