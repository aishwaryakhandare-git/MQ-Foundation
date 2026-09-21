import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "Marcos Quay coaches (Irfan, Prabhu, Saif and Simran) are working in good coordination for conducting PE sessions from 23rd June 2020. I am frequently coordinating with all the coaches through online meetings and calls for arranging various workout plans for every week as per the grades. I must acknowledge all the coaches associated with 18/S for their efforts, dedication, punctuality, hard work and coordination for conducting the classes smoothly as per the requirements of the school. Students are showing interest in performing the skills taught to them and even enjoying taking part in challenging activities planned for them. Overall the planning, preparation and delivery of the PE sessions by each coach is commendable. We hope to receive the support and cooperation from MQ team in the future too.",
    name: "Mr. Gaurav Desai",
    role: "Sports Coordinator | The Nahar International School- Powai, Mumbai",
  },
  {
    quote:
      "This is to put on record, the successful hndling of the event 'Sunny Sunday Sports' Session for parents of STKIIS on 20th Feb'22 by the team of Marccos Quay. A crowd of about 200 people was very well managed by the team, maintaining planned activities, engaging each and every participant and ensuring punctuality and maintaining an atmosphere of true sports spirit. It was a significant Sunday for parents to have come out after the 2 year pandemic crisis. As a whole the team is doing is good job, Waiting for thr school teams to bring laurels to school. Kudos!! ",
    name: "Ms. Anjali Mahajan",
    role: "Principal, St Kabir International School-Chapad, Vadodara",
  },
  {
    quote:
      "Partnering with Marcos Quay has elevated our school's profile and operations. Their innovative sports programs have attracted new students, improved engagement, and allowed us to focus on academics. We've also seen better academic performance and a healthier student body. With their excellent management and training, our sports program consistently excels. I highly recommend their services to any school seeking to enhance sports while prioritizing education.",
    name: "Dr. Ganesh Kumar Pandidhar",
    role: "Eduction Society, Nashik",
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
        setAdvance(width + GAP);
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
      className="relative mt-6 lg:-ml-[145px] lg:w-[calc(100%+145px)]"
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
                flex
              "
            >
              <article
                className="
                  relative
                  h-full
                  min-h-[340px]
                  rounded-[12px]
                  border
                  border-[#165DFF]
                  bg-white
                  px-5
                  sm:px-6
                  py-4
                  sm:py-5
                  flex
                  flex-col
                "
              >
                {/* Quote mark */}
                <Quote
                  className="
                    w-7
                    h-7
                    text-[#165DFF]
                    mb-3
                  "
                  strokeWidth={1.5}
                />

                {/* Testimonial */}
                <p
                  className="
                    text-[12.5px]
                    sm:text-[13px]
                    leading-[1.45]
                    text-[#3F3F3F]
                    font-medium
                  "
                >
                  {testimonial.quote}
                </p>

                {/* Bottom author */}
                <div className="mt-auto pt-3">
                  <p
                    className="
                      text-[15px]
                      sm:text-[16px]
                      font-bold
                      text-[#005BAC]
                    "
                  >
                    {testimonial.name}
                  </p>

                  <p
                    className="
                      mt-0.5
                      text-[12px]
                      sm:text-[12.5px]
                      leading-snug
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
        pt-10
        sm:pt-12
        lg:pt-10
        pb-14
        sm:pb-16
        lg:pb-16
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
              h-[380px]
              sm:h-[460px]
              lg:h-[560px]
            "
          >
            <img
              src="/images/WhySportsMatter/Image_1.jpeg"
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