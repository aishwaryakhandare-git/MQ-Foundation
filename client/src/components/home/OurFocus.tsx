import { motion } from "framer-motion";

const fade = (
  delay: number,
  from: "left" | "right" | "up" = "up"
) => ({
  initial: {
    opacity: 0,
    x: from === "left" ? -40 : from === "right" ? 40 : 0,
    y: from === "up" ? 30 : 0,
  },
  whileInView: {
    opacity: 1,
    x: 0,
    y: 0,
  },
  viewport: {
    once: true,
    margin: "-80px",
  },
  transition: {
    duration: 0.8,
    delay,
    ease: [0.22, 1, 0.36, 1] as const,
  },
});

type FocusArea = {
  num: string;
  title: string;
  accent: string;
  description: string;
  support: string;
  image: string;
  alt: string;
};

const FOCUS_AREAS: FocusArea[] = [
  {
    num: "01",
    title: "Grassroots",
    accent: "Play",
    description:
      "Creating safe, joyful spaces where every child gets their first real opportunity to play — building the foundation of health, confidence and belonging from the very start.",
    support: "Where every child's sporting journey begins",
    image: "/images/hero-sports-1.jpg",
    alt: "Children playing sports at grassroots level",
  },
  {
    num: "02",
    title: "Sports",
    accent: "Development",
    description:
      "Structured coaching and NEP-aligned curricula that turn play into progress — developing fitness, skill, discipline and teamwork in every child who steps onto the field.",
    support: "Turning play into measurable progress",
    image: "/images/solutions/curriculum.jpg",
    alt: "Coach guiding sports development training",
  },
  {
    num: "03",
    title: "Sport-Specific",
    accent: "Pathways",
    description:
      "Focused pathways that help children discover and pursue their sporting potential — identifying talent early and giving young athletes a clear route to grow, compete and excel.",
    support: "Discovering and nurturing young potential",
    image: "/images/solutions/multisport.jpg",
    alt: "Young athlete practicing a specific sport",
  },
  {
    num: "04",
    title: "Community",
    accent: "Impact",
    description:
      "Sport as a force for change beyond the field — bringing schools and communities together, including girls and marginalized groups, and creating healthier, more inclusive environments.",
    support: "Sport that transforms schools and communities",
    image: "/images/solutions/transformation.jpg",
    alt: "Community celebrating together through sport",
  },
];

function Underline() {
  return (
    <svg
      className="absolute -bottom-2 left-0 w-full h-3"
      viewBox="0 0 140 12"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 8 C 30 2, 55 10, 82 6 C 105 3, 120 8, 136 5"
        stroke="#165DFF"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FocusImage({
  src,
  alt,
  index,
  imageLeft,
}: {
  src: string;
  alt: string;
  index: number;
  imageLeft: boolean;
}) {
  return (
    <motion.div
      {...fade(0.05, imageLeft ? "left" : "right")}
      className="relative w-full"
    >
      {/* Decorative circle */}
      <div
        className={`absolute ${
          imageLeft ? "-left-7" : "-right-7"
        } -top-7 w-28 h-28 rounded-full border border-[#165DFF]/15`}
      />

      {/* Image */}
      <div className="relative group">
        <div
          className="
            relative
            overflow-hidden
            rounded-[26px]
            bg-white
            shadow-[0_25px_55px_-28px_rgba(10,30,79,0.35)]
          "
        >
          <div className="aspect-[1.08/0.92]">
            <img
              src={src}
              alt={alt}
              className="
                w-full
                h-full
                object-cover
                object-center
                transition-transform
                duration-700
                group-hover:scale-[1.03]
              "
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E4F]/15 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Number */}
        <div
          className={`
            absolute
            ${imageLeft ? "-right-4" : "-left-4"}
            top-6
            w-[62px]
            h-[62px]
            rounded-full
            bg-white
            border
            border-[#E7EBF3]
            shadow-[0_12px_30px_-12px_rgba(10,30,79,0.3)]
            flex
            items-center
            justify-center
          `}
        >
          <span className="font-heading font-extrabold text-[22px] text-[#E31B23]">
            {String(index).padStart(2, "0")}
          </span>
        </div>

        {/* Focus label */}
        <div
          className={`
            absolute
            ${imageLeft ? "left-4" : "right-4"}
            -bottom-3
            bg-white
            rounded-full
            px-4
            py-2
            border
            border-[#E7EBF3]
            shadow-[0_10px_25px_-10px_rgba(10,30,79,0.25)]
          `}
        >
          <span className="font-heading font-bold text-[10px] uppercase tracking-[0.18em] text-[#165DFF]">
            Focus {String(index).padStart(2, "0")}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function OurFocus() {
  return (
    <section className="relative overflow-hidden bg-[#FDFDFB]">
      {/* ───────────────── Background ───────────────── */}

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(#0A1E4F 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div
        className="
          absolute
          -top-32
          -right-32
          w-[420px]
          h-[420px]
          rounded-full
          bg-[#E31B23]/[0.035]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          bottom-20
          -left-40
          w-[420px]
          h-[420px]
          rounded-full
          bg-[#165DFF]/[0.035]
          pointer-events-none
        "
      />

      {/* ───────────────── Section ───────────────── */}

      <div className="container relative py-20 sm:py-24 lg:py-32 lg:max-w-[1480px]">

        {/* Header */}

        <motion.div
          {...fade(0)}
          className="max-w-[850px] mx-auto mb-16 sm:mb-20 lg:mb-24 text-center"
        >
          <p className="font-heading font-bold text-[12px] sm:text-[13px] uppercase tracking-[0.22em] text-[#E31B23] mb-5">
            Our Focus Areas
          </p>

          <h2
            className="
              heading-2
              text-[#0A1E4F]
              font-extrabold
              leading-[1.03]
              tracking-tight
            "
          >
            From the first opportunity
            <br className="hidden sm:block" />
            to play, to{" "}
            <span className="relative inline-block text-[#E31B23]">
              sporting potential
              <Underline />
            </span>
          </h2>

          <p className="mt-6 mx-auto max-w-[650px] text-[15px] sm:text-[16px] lg:text-[17px] leading-[1.7] text-[#6B7280] font-medium">
            We build a child's sporting journey step by step — from
            discovering the joy of movement to developing skills,
            confidence and pathways for sporting excellence.
          </p>
        </motion.div>

        {/* ───────────────── Focus Areas ───────────────── */}

        <div className="relative">

          {/* Progress line */}

          <div
            className="
              hidden
              lg:block
              absolute
              left-1/2
              top-0
              bottom-0
              w-px
              bg-[#165DFF]/30
              -translate-x-1/2
            "
          />

          <div className="space-y-14 sm:space-y-16 lg:space-y-20">

            {FOCUS_AREAS.map((area, i) => {
              const imageLeft = i % 2 === 0;

              return (
                <div
                  key={area.num}
                  className="
                    relative
                    grid
                    grid-cols-1
                    lg:grid-cols-2
                    gap-14
                    lg:gap-20
                    items-center
                  "
                >

                  {/* ───────── Image ───────── */}

                  <div
                    className={`${
                      imageLeft ? "" : "lg:order-2"
                    }`}
                  >
                    <FocusImage
                      src={area.image}
                      alt={area.alt}
                      index={i + 1}
                      imageLeft={imageLeft}
                    />
                  </div>

                  {/* ───────── Content ───────── */}

                  <div
                    className={`
                      relative
                      ${imageLeft ? "lg:order-2 lg:pl-16" : "lg:pr-16"}
                    `}
                  >
                    <motion.div
                      {...fade(
                        0.12,
                        imageLeft ? "right" : "left"
                      )}
                    >

                      {/* Small label */}

                      <div className="flex items-center gap-3 mb-5">
                        <span className="h-px w-8 bg-[#165DFF]" />

                        <span className="font-heading font-bold text-[11px] uppercase tracking-[0.22em] text-[#165DFF]">
                          Focus Area
                        </span>
                      </div>

                      {/* Large number */}

                      <div className="mb-3">
                        <span
                          className="
                            font-heading
                            font-extrabold
                            text-[4.5rem]
                            sm:text-[5.5rem]
                            lg:text-[6rem]
                            leading-none
                            text-[#E31B23]/10
                          "
                        >
                          {area.num}
                        </span>
                      </div>

                      {/* Heading */}

                      <h3
                        className="
                          -mt-8
                          font-heading
                          font-extrabold
                          text-[2rem]
                          sm:text-[2.4rem]
                          lg:text-[2.7rem]
                          text-[#0A1E4F]
                          leading-[1.08]
                          tracking-tight
                        "
                      >
                        {area.title}{" "}
                        <span className="relative inline-block text-[#E31B23]">
                          {area.accent}
                          <Underline />
                        </span>
                      </h3>

                      {/* Description */}

                      <p
                        className="
                          mt-6
                          max-w-[530px]
                          text-[15px]
                          sm:text-[16px]
                          lg:text-[17px]
                          leading-[1.7]
                          text-[#4B5563]
                          font-medium
                        "
                      >
                        {area.description}
                      </p>

                      {/* Bottom information */}

                      <div
                        className="
                          mt-8
                          pt-6
                          border-t
                          border-[#0A1E4F]/10
                          max-w-[530px]
                          flex
                          items-center
                          justify-between
                          gap-6
                        "
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-2 h-2 rounded-full bg-[#E31B23]" />

                          <span className="font-heading font-semibold text-[12px] sm:text-[13px] text-[#6B7280]">
                            {area.support}
                          </span>
                        </div>

                        <span
                          className="
                            hidden
                            sm:block
                            font-heading
                            font-bold
                            text-[11px]
                            tracking-[0.18em]
                            text-[#165DFF]
                            whitespace-nowrap
                          "
                        >
                          {area.num} / 04
                        </span>
                      </div>

                    </motion.div>
                  </div>

                  {/* Center timeline node */}

                  <div
                    className="
                      hidden
                      lg:flex
                      absolute
                      left-1/2
                      top-1/2
                      -translate-x-1/2
                      -translate-y-1/2
                      w-4
                      h-4
                      rounded-full
                      bg-white
                      border-[3px]
                      border-[#165DFF]
                      z-10
                    "
                  />

                </div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}