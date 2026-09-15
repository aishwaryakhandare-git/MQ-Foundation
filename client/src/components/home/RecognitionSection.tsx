import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Award = { image: string; caption: string; position?: string; textColor?: string; width?: string };

const AWARDS: Award[] = [
  {
    image: "/images/awards/Award1.png",
    caption:
      "I AM Game Awards 2026: Persistent Commitment To Indian Sports",
    textColor: "#000000",
  },
  {
    image: "/images/awards/Award5.png",
    caption: "EGN India: Best Integration of Life-skills in Physical Education & Sports",
    textColor: "#000000",
  },
  {
    image: "/images/awards/Award3.png",
    caption: "EGangaram Prakashan : The Beacon of Excellence Award 2023",
    position: "center 22%",
    textColor: "#000000",
  },
  {
    image: "/images/awards/dalmia-bharat.jpg",
    caption: "Dalmia Bharat CSR Impact Award Winner",
  },
];

const fade = (delay: number) => ({
  initial: {
    opacity: 0,
    y: 28,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
    margin: "-40px",
  },
  transition: {
    duration: 0.7,
    delay,
    ease: [0.22, 1, 0.36, 1] as const,
  },
});

const GAP = 24;

export default function RecognitionSection() {
  const viewportRef = useRef<HTMLDivElement>(null);

  const [current, setCurrent] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);

  /*
   * ---------------------------------------------------------
   * Calculate card width
   * ---------------------------------------------------------
   *
   * Desktop:
   * 3 cards visible.
   *
   * Mobile:
   * 1 card visible.
   */
  useEffect(() => {
    const calculateWidth = () => {
      const viewport = viewportRef.current;

      if (!viewport) return;

      const width = viewport.offsetWidth;

      if (window.innerWidth >= 1024) {
        // 3 cards + 2 gaps
        setCardWidth((width - GAP * 2) / 3);
      } else if (window.innerWidth >= 768) {
        // 2 cards + 1 gap
        setCardWidth((width - GAP) / 2);
      } else {
        // 1 card
        setCardWidth(width);
      }
    };

    calculateWidth();

    window.addEventListener("resize", calculateWidth);

    return () => {
      window.removeEventListener("resize", calculateWidth);
    };
  }, []);

  const next = () => {
    setCurrent((prev) =>
      prev >= AWARDS.length - 1 ? 0 : prev + 1,
    );
  };

  const previous = () => {
    setCurrent((prev) =>
      prev <= 0 ? AWARDS.length - 1 : prev - 1,
    );
  };

  /*
   * The carousel moves by card width + gap.
   */
  const translateX = current * (cardWidth + GAP);

  return (
    <section
      className="
        relative
        bg-white
        pt-8
        sm:pt-10
        lg:pt-12
        pb-20
        sm:pb-24
        lg:pb-28
        overflow-x-hidden
      "
    >
      <div className="container overflow-hidden lg:max-w-[1300px]">

        {/* =================================================
            HEADER
        ================================================= */}
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-10
            lg:gap-16
            items-start
          "
        >
          {/* LEFT */}
          <motion.div {...fade(0)}>
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
              Recognition
            </p>

            <h2
              className="
                mt-7
                text-[42px]
                sm:text-[48px]
                lg:text-[50px]
                xl:text-[52px]
                leading-[1.05]
                font-bold
                tracking-[-0.025em]
                text-[#E31B23]
              "
            >
              <span className="relative inline-block">
                Awards and Accolades

                {/* Hand drawn underline */}
                <svg
                  className="
                    absolute
                    -bottom-4
                    left-[-2px]
                    w-[calc(100%+8px)]
                    h-[15px]
                  "
                  viewBox="0 0 540 15"
                  preserveAspectRatio="none"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="
                      M4 10
                      C70 4, 135 12, 210 8
                      C290 4, 375 11, 450 7
                      C490 5, 515 7, 535 9
                    "
                    stroke="#005BAC"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            {...fade(0.1)}
            className="lg:pt-8"
          >
            <p
              className="
                max-w-[570px]
                lg:ml-auto
                lg:text-right
                text-[15px]
                sm:text-[16px]
                lg:text-[17px]
                leading-[1.55]
                text-[#171717]
                font-normal
              "
            >
              Our work has been recognized by leading institutions and
              industry bodies for creating meaningful impact through
              sport. These acknowledgements reflect the collective efforts
              of our partners, communities and teams across India.
            </p>
          </motion.div>
        </div>

        {/* =================================================
            AWARDS CAROUSEL
        ================================================= */}
        <motion.div
          {...fade(0.15)}
          className="
            relative
            mt-20
            sm:mt-24
            lg:mt-24
          "
        >
          {/* Carousel viewport */}
          <div
            ref={viewportRef}
            className="
              relative
              w-full
              overflow-hidden
              px-0
            "
          >
            <motion.div
              className="
                flex
                gap-6
                will-change-transform
              "
              animate={{
                x: -translateX,
              }}
              transition={{
                duration: 0.65,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              {AWARDS.map((award, index) => (
                <article
                  key={`${award.caption}-${index}`}
                  className="
                    shrink-0
                    w-full
                    md:w-[calc(50%-12px)]
                    lg:w-[calc(33.333333%-16px)]
                  "
                  style={{
                    width:
                      cardWidth > 0
                        ? `${cardWidth}px`
                        : undefined,
                  }}
                >
                  {/* Image card */}
                  <div
                    className="
                      h-[335px]
                      sm:h-[350px]
                      lg:h-[338px]
                      overflow-hidden
                      rounded-[11px]
                      border
                      border-[#222]
                      bg-white
                    "
                  >
                    <img
                      src={award.image}
                      alt={award.caption}
                      style={{
                        ...(award.position ? { objectPosition: award.position } : {}),
                        ...(award.width ? { width: award.width, marginInline: "auto" } : {}),
                      }}
                      className="
                        w-full
                        h-full
                        object-cover
                      "
                    />
                  </div>

                  {/* Caption */}
                  <p
                    className="
                      mt-3
                      px-2
                      text-center
                      text-[15px]
                      sm:text-[16px]
                      leading-[1.4]
                      italic
                      font-medium
                    "
                    style={award.textColor ? { color: award.textColor } : undefined}
                  >
                    {award.caption}
                  </p>
                </article>
              ))}
            </motion.div>
          </div>

          {/* =================================================
              LEFT ARROW
          ================================================= */}
          <button
            type="button"
            onClick={previous}
            aria-label="Previous award"
            className="
              absolute
              left-1
              lg:left-2
              top-[168px]
              z-20
              flex
              h-10
              w-10
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-white/90
              text-white
              transition-all
              duration-200
              hover:bg-[#005BAC]
            "
          >
            <ChevronLeft
              className="h-7 w-7 text-[#FFFFFF]"
              strokeWidth={2}
            />
          </button>

          {/* =================================================
              RIGHT ARROW
          ================================================= */}
          <button
            type="button"
            onClick={next}
            aria-label="Next award"
            className="
              absolute
              right-1
              lg:right-2
              top-[168px]
              z-20
              flex
              h-10
              w-10
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-white/90
              text-white
              transition-all
              duration-200
              hover:bg-[#005BAC]
            "
          >
            <ChevronRight
              className="h-7 w-7 text-[#FFFFFF]"
              strokeWidth={2}
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
}