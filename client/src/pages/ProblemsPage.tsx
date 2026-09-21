import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown, ChevronLeft, ChevronRight } from "lucide-react";

const fade = (delay = 0) => ({
  initial: { y: 30 },
  whileInView: { y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

/* ══════════════════════════════════════════════════════════════
   DATA
   ══════════════════════════════════════════════════════════════ */

const PAIRS: {
  problem: { title: string; desc: string; photo: string; alt: string };
  solution: { title: string; desc: string; photo: string; alt: string };
}[] = [
  {
    problem: {
      title: "Limited Sports Infrastructure",
      desc: "Many schools lack well-maintained playing surfaces, appropriate equipment and safe spaces for regular sports practice.",
      photo: "/images/Ground img.png",
      alt: "An underused school sports ground with a basic, uneven playing surface",
    },
    solution: {
      title: "Modern Sports Infrastructure",
      desc: "We design and upgrade sports grounds and play spaces that are safe, functional and suited to each school's needs.",
      photo: "/images/solutions/transformation.jpg",
      alt: "A redesigned school sports ground prepared for structured play",
    },
  },
  {
    problem: {
      title: "Lack of Equipment",
      desc: "Schools often do not have access to quality sports equipment, limiting the range of activities children can try.",
      photo: "/images/sports-insights-infrastructure.jpg",
      alt: "A school with limited sports equipment and play resources",
    },
    solution: {
      title: "Access to Quality Resources",
      desc: "We provide age-appropriate equipment and resources to help schools run structured, multi-sport programmes.",
      photo: "/images/solutions/multisport.jpg",
      alt: "Children playing together using Marcos Quay multi-sport equipment",
    },
  },
  {
    problem: {
      title: "Limited Coaching Support",
      desc: "Many schools have limited access to trained coaches and rely on teachers with little or no sports training.",
      photo: "/images/problems/nep.jpg",
      alt: "A school teacher taking on PE duties without formal coaching training",
    },
    solution: {
      title: "Certified & Skilled Coaches",
      desc: "We bring certified professionals with multi-sport expertise into schools and provide training and capacity-building.",
      photo: "/images/solutions/curriculum.jpg",
      alt: "A Marcos Quay coach leading a structured session with students",
    },
  },
  {
    problem: {
      title: "Low Student Participation",
      desc: "Without structured programmes, many children do not get enough chances to participate, explore different sports or build confidence.",
      photo: "/images/problems/low-participation.jpg",
      alt: "Students drifting apart during a school break while PE fails to engage them",
    },
    solution: {
      title: "Engaging, Consistent Practice",
      desc: "We introduce structured, inclusive programmes that make regular participation part of everyday school life.",
      photo: "/images/solutions/fitness.jpg",
      alt: "A student training on the running track during a structured session",
    },
  },
  {
    problem: {
      title: "No Clear Measurement of Progress",
      desc: "Without tracking, schools have limited visibility into how students are progressing in skills, fitness and participation.",
      photo: "/images/problems/parents.jpg",
      alt: "A parent and student facing uncertainty about school sports outcomes",
    },
    solution: {
      title: "Performance & Student Growth",
      desc: "We use data-driven insights to track progress, helping schools understand student development and measure programme impact.",
      photo: "/images/solutions/reporting.jpg",
      alt: "A coach reviewing a student's sports progress alongside a parent",
    },
  },
];

const TRANSFORMATION = [
  {
    num: "01",
    title: "Before",
    caption: "Limited Opportunity",
    photo: "/images/Ground img.png",
    alt: "An Indian school sports ground that is basic and underused",
  },
  {
    num: "02",
    title: "Marcos Quay Transformation",
    caption: "Building Change Together",
    photo: "/images/solutions/transformation.jpg",
    alt: "Coaches, workers and children improving a school sports ground with new equipment",
  },
  {
    num: "03",
    title: "After",
    caption: "Active School Sports",
    photo: "/images/hero-sports-1.jpg",
    alt: "Indian school children playing organised football on a well-maintained ground with a coach",
  },
];

const IMPACT_STATS = [
  { value: "450+", label: "Schools Transformed" },
  { value: "125,000+", label: "Students Impacted" },
  { value: "96%", label: "School Satisfaction" },
  { value: "100%", label: "Safety Compliant" },
];

/* ══════════════════════════════════════════════════════════════
   1 · HERO / INTRODUCTION
   ══════════════════════════════════════════════════════════════ */

function Hero() {
  return (
    <section className="relative lg:max-w-[1300px] mx-auto overflow-hidden bg-[#FDFDFB] border-b border-[#E7EBF3]">
      {/* Very subtle background */}
      <div className="absolute inset-0 pointer-events-none ">
        <div className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-[#165DFF]/[0.025] blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#E31B23]/[0.02] blur-[110px]" />
      </div>

      <div className="container relative z-10 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-center">

          {/* =====================================================
              LEFT — MESSAGE
          ===================================================== */}
          <motion.div {...fade(0)} className="relative z-20">

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-9 bg-[#E31B23]" />

              <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.22em] text-[#E31B23]">
                Challenges &amp; Solutions
              </p>
            </div>

            {/* Main heading */}
            <h1
              className="
                font-heading
                font-extrabold
                tracking-[-0.035em]
                text-[#0A1E4F]
                text-[2.7rem]
                sm:text-[3.5rem]
                lg:text-[4.35rem]
                xl:text-[4.7rem]
                leading-[0.98]
              "
            >
              From Challenges
              <br />

              to{" "}
              <span className="relative inline-block text-[#E31B23]">
                Brighter
                <svg
                  className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-3"
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M4 8 C 40 2, 72 10, 110 7 C 150 4, 182 10, 196 5"
                    stroke="#E31B23"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              Futures
            </h1>

            {/* Description */}
            <p
              className="
                mt-7
                max-w-[590px]
                text-[#000000]
                text-[15px]
                sm:text-[16px]
                lg:text-[17px]
                leading-[1.75]
              "
            >
              Many schools have the potential to be centres of sporting
              excellence, but face real barriers. Marcos Quay Foundation works
              with schools to overcome these challenges and create lasting
              change through practical, on-ground support.
            </p>

            {/* Small supporting statement */}
            <div className="mt-8 flex items-center gap-4">
              <div className="h-px w-10 bg-[#0A1E4F]/20" />

              <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-[#000000]/70">
                Turning barriers into opportunity
              </p>
            </div>
          </motion.div>


          {/* =====================================================
              RIGHT — FADED SPORTS VISUAL
          ===================================================== */}
          <motion.div
            {...fade(0.12)}
            className="
              relative
              h-[330px]
              sm:h-[400px]
              lg:h-[470px]
              flex
              items-center
              justify-center
            "
          >

            {/* Soft circular background */}
            <div
              className="
                absolute
                right-[-80px]
                top-1/2
                -translate-y-1/2
                w-[430px]
                h-[430px]
                rounded-full
                bg-[#165DFF]/[0.025]
                blur-[2px]
              "
            />

            {/* Faded image */}
            <div
              className="
                absolute
                inset-0
                overflow-hidden
              "
            >
              <img
                src="/images/hero-sports-1.jpg"
                alt=""
                aria-hidden="true"
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                  object-center
                  grayscale
                  opacity-[0.35]
                "
                style={{
                  maskImage:
                    "radial-gradient(ellipse 78% 72% at 52% 50%, black 15%, rgba(0,0,0,.75) 42%, transparent 78%)",
                  WebkitMaskImage:
                    "radial-gradient(ellipse 78% 72% at 52% 50%, black 15%, rgba(0,0,0,.75) 42%, transparent 78%)",
                }}
              />

              {/* Navy tint over image */}
              <div
                className="
                  absolute
                  inset-0
                  bg-[#0A1E4F]/[0.035]
                "
                style={{
                  maskImage:
                    "radial-gradient(ellipse 78% 72% at 52% 50%, black 15%, rgba(0,0,0,.75) 42%, transparent 78%)",
                  WebkitMaskImage:
                    "radial-gradient(ellipse 78% 72% at 52% 50%, black 15%, rgba(0,0,0,.75) 42%, transparent 78%)",
                }}
              />
            </div>


            {/* =================================================
                TYPOGRAPHIC STATEMENT
            ================================================= */}
            <div className="relative z-10 text-center select-none">

              {/* Small red line */}
              <div className="flex justify-center mb-7">
                <span className="h-[2px] w-12 bg-[#E31B23]" />
              </div>

              <p
                className="
                  font-serif
                  text-[#0A1E4F]
                  text-[3rem]
                  sm:text-[3.7rem]
                  lg:text-[4.2rem]
                  xl:text-[4.7rem]
                  leading-[0.88]
                  tracking-[-0.035em]
                "
              >
                <span className="font-semibold">
                  SPORT
                </span>

                <br />

                <span className="font-normal text-[#0A1E4F]/65">
                  BUILDS
                </span>

                <br />

                <span className="relative inline-block font-semibold text-[#E31B23]">
                  BRIGHTER
                  
                    <path
                      d="M4 8 C 40 2, 72 10, 110 7 C 150 4, 182 10, 216 5"
                      stroke="#E31B23"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  
                </span>

                <br />

                <span className="font-normal text-[#0A1E4F]/65">
                  FUTURES
                </span>
              </p>

              {/* Bottom underline */}
              <div className="flex justify-center mt-7">
                <span className="relative block w-24 h-[2px] bg-[#165DFF] rotate-[-2deg]">
                  <span className="absolute left-1/2 -translate-x-1/2 -top-[3px] w-2 h-2 rounded-full bg-[#165DFF]" />
                </span>
              </div>
            </div>


            {/* Decorative tiny circle */}
            <div
              className="
                absolute
                right-4
                top-10
                w-16
                h-16
                rounded-full
                border
                border-[#165DFF]/10
              "
            />

            {/* Decorative tiny circle */}
            <div
              className="
                absolute
                left-8
                bottom-8
                w-10
                h-10
                rounded-full
                border
                border-[#E31B23]/10
              "
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   2 · CHALLENGE → SOLUTION GRID
   ══════════════════════════════════════════════════════════════ */

function ColumnHead({
  label,
  sub,
  tone,
}: {
  label: string;
  sub: string;
  tone: "red" | "blue";
}) {
  return (
    <div className="text-center lg:text-left">
      <p
        className={`flex items-center justify-center lg:justify-start gap-3 text-[13px] font-bold uppercase tracking-[0.18em] ${
          tone === "red" ? "text-[#E31B23]" : "text-[#165DFF]"
        }`}
      >
        <span className={`h-px w-8 ${tone === "red" ? "bg-[#E31B23]" : "bg-[#165DFF]"}`} />
        {label}
      </p>
      <p className="mt-1.5 text-[13px] text-[#9AA5B8] font-medium">{sub}</p>
    </div>
  );
  
}

function PairBlock({ index }: { index: number }) {
  const pair = PAIRS[index];
  const num = String(index + 1).padStart(2, "0");
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_64px_1fr] gap-5 lg:gap-2 items-stretch">
      {/* Challenge */}
      <motion.div {...fade(0)}>
        <div className="h-full overflow-hidden rounded-[16px] border-2 border-[#E31B23] bg-[#FCFAF9]">
          <div className="flex flex-col sm:flex-row h-full">
            <div className="sm:w-[40%] sm:flex-none relative">
              <img
                src={pair.problem.photo}
                alt={pair.problem.alt}
                loading="lazy"
                className="w-full h-40 sm:h-full object-cover"
              />
            </div>
            <div className="flex-1 p-6 sm:p-7">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#E31B23]">
                Challenge — {num}
              </p>
              <h3 className="font-heading font-bold tracking-[-0.01em] mt-3 text-[1.3rem] sm:text-[1.5rem] text-[#0A1E4F] leading-snug">
                {pair.problem.title}
              </h3>
              <div className="mt-3 h-px w-10 bg-[#E31B23]" />
              <p className="mt-4 text-[0.9rem] leading-relaxed text-[#6B7280]">
                {pair.problem.desc}
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Circular arrow */}
      <motion.div
        initial={{ scale: 0.4, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] as const }}
        className="flex items-center justify-center"
      >
        <span className="hidden lg:flex h-12 w-12 items-center justify-center rounded-full border border-[#E7EBF3] bg-white text-[#165DFF] shadow-[0_12px_28px_-12px_rgba(10,30,79,0.35)]">
          <ArrowRight className="h-5 w-5" />
        </span>
        <span className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full border border-[#E7EBF3] bg-white text-[#165DFF] shadow-[0_10px_24px_-10px_rgba(10,30,79,0.3)]">
          <ArrowDown className="h-4 w-4" />
        </span>
      </motion.div>

      {/* Solution */}
      <motion.div {...fade(0.08)}>
        <div className="h-full overflow-hidden rounded-[16px] border-2 border-[#165DFF] bg-[#F3F7FC]">
          <div className="flex flex-col sm:flex-row h-full">
            <div className="sm:w-[40%] sm:flex-none relative">
              <img
                src={pair.solution.photo}
                alt={pair.solution.alt}
                loading="lazy"
                className="w-full h-40 sm:h-full object-cover"
              />
            </div>
            <div className="flex-1 p-6 sm:p-7">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#165DFF]">
                Our Solution — {num}
              </p>
              <h3 className="font-heading font-bold tracking-[-0.01em] mt-3 text-[1.3rem] sm:text-[1.5rem] text-[#0A1E4F] leading-snug">
                {pair.solution.title}
              </h3>
              <div className="mt-3 h-px w-10 bg-[#165DFF]" />
              <p className="mt-4 text-[0.9rem] leading-relaxed text-[#6B7280]">
                {pair.solution.desc}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function ChallengeGrid() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container relative lg:max-w-[1300px]">
        {/* Column headers */}
        <motion.div {...fade(0)} className="mb-12 md:mb-16 max-w-3xl mx-auto text-center">
          <h2 className="font-heading font-extrabold tracking-[-0.02em] text-[2.2rem] sm:text-[2.8rem] lg:text-[3.4rem] text-[#0A1E4F] leading-tight">
            How We{" "}
            <span className="relative inline-block text-[#E31B23]">
              Respond
              <svg
                className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-3"
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M4 8 C 40 2, 72 10, 110 7 C 150 4, 182 10, 196 5"
                  stroke="#E31B23"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
          <p className="mt-6 max-w-[590px] mx-auto text-[15px] sm:text-[16px] lg:text-[17px] leading-[1.7] text-[#000000] font-medium">
            Real barriers, answered with practical solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_64px_1fr] gap-5 lg:gap-2 mb-8">
          <ColumnHead label="The Challenge" sub="Common issues faced by schools" tone="red" />
          <div className="hidden lg:block" />
          <ColumnHead label="Our Solution" sub="How Marcos Quay creates change" tone="blue" />
        </div>

        <div className="space-y-6 lg:space-y-8">
          {PAIRS.map((_, i) => (
            <PairBlock key={i} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   3 · BEFORE → TRANSFORMATION → AFTER
   ══════════════════════════════════════════════════════════════ */

function Transformation() {
  return (
    <section className="relative border-y border-[#E7EBF3] bg-[#FCFAF9] py-16 md:py-24">
      <div className="container relative lg:max-w-[1300px]">
        <motion.div {...fade(0)} className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="font-heading font-extrabold tracking-[-0.02em] text-[2.2rem] sm:text-[2.8rem] lg:text-[3.4rem] text-[#0A1E4F] leading-tight">
            The{" "}
            <span className="relative inline-block text-[#E31B23]">
              Transformation
              <svg
                className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-3"
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M4 8 C 40 2, 72 10, 110 7 C 150 4, 182 10, 196 5"
                  stroke="#E31B23"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
          <p className="mt-6 max-w-[590px] mx-auto text-[15px] sm:text-[16px] lg:text-[17px] leading-[1.7] text-[#000000] font-medium">
            Three moments in a school&apos;s journey — from an idle ground to
            a daily rhythm of coaching, play and progress.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 relative">
          {TRANSFORMATION.map((step, i) => (
            <motion.div key={step.num} {...fade(0.08 * i)} className="relative">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[12px] font-bold text-[#E31B23]">{step.num}</span>
                <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-[#0A1E4F]">
                  {step.title}
                </span>
              </div>

              <div className="relative overflow-hidden rounded-[16px] border border-[#E7EBF3]">
                <img
                  src={step.photo}
                  alt={step.alt}
                  loading="lazy"
                  className="w-full h-[240px] sm:h-[300px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-[#0A1E4F]/85 px-5 py-3.5">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white">
                    {step.caption}
                  </p>
                </div>
              </div>

              {i < TRANSFORMATION.length - 1 && (
                <span className="hidden md:flex absolute top-[148px] sm:top-[168px] -right-[25px] z-10 h-11 w-11 items-center justify-center rounded-full border border-[#E7EBF3] bg-white text-[#165DFF] shadow-[0_12px_28px_-10px_rgba(10,30,79,0.35)]">
                  <ArrowRight className="h-4.5 w-4.5" />
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   4 · BENEFITS THROUGH THE PARTNERSHIP
   ══════════════════════════════════════════════════════════════ */

const BENEFITS = [
  {
    num: "01",
    title: "School's Branding and Positioning",
    desc: "Clear message from management for the holistic development of every student.",
  },
  {
    num: "02",
    title: "Management Impact Report",
    desc: "How the school's PE programme has impacted the children's fitness.",
  },
  {
    num: "03",
    title: "Create a Sports Buzz in Schools",
    desc: "Through regular events for all the stakeholders (parents, teachers & students).",
  },
  {
    num: "04",
    title: "Potential Revenue Generation for Schools",
    desc: "Through our events and programmes and academy.",
  },
  {
    num: "05",
    title: "Exposure and Media Branding",
    desc: "Students get to compete with various schools within the Marcos Quay network.",
  },
  {
    num: "06",
    title: "Knowledge Sharing",
    desc: "Best practices and learnings from our partner schools (Example: Dad's League).",
  },
  {
    num: "07",
    title: "Programme Driven Culture",
    desc: "Shift from manpower dependency to system dependency.",
  },
  {
    num: "08",
    title: "No Proxy Period",
    desc: "Children will not miss out on the sessions – equally qualified replacement.",
  },
];

const BENEFIT_GAP = 20;
const BENEFIT_AUTOPLAY_MS = 4000;

function BenefitsCarousel() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(4);
  const [cardWidth, setCardWidth] = useState(0);
  const [paused, setPaused] = useState(false);
  const viewportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const measure = () => {
      const el = viewportRef.current;
      if (!el) return;
      const w = el.offsetWidth;
      let cols = 1;
      if (window.matchMedia("(min-width: 1024px)").matches) cols = 4;
      else if (window.matchMedia("(min-width: 640px)").matches) cols = 2;
      setVisible(cols);
      setCardWidth((w - BENEFIT_GAP * (cols - 1)) / cols);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const maxIndex = Math.max(0, BENEFITS.length - visible);

  useEffect(() => {
    if (paused || !cardWidth) return;
    const id = window.setInterval(
      () => setCurrent((p) => (p >= maxIndex ? 0 : p + 1)),
      BENEFIT_AUTOPLAY_MS,
    );
    return () => window.clearInterval(id);
  }, [paused, cardWidth, maxIndex]);

  const next = () => setCurrent((p) => (p >= maxIndex ? 0 : p + 1));
  const previous = () => setCurrent((p) => (p <= 0 ? maxIndex : p - 1));

  const advance = cardWidth + BENEFIT_GAP;
  const x = -(current * advance);
  const slides = BENEFITS;

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div ref={viewportRef} className="relative overflow-hidden pt-3 pb-2">
        <motion.div
          className="flex"
          style={{ gap: BENEFIT_GAP }}
          animate={{ x }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        >
          {slides.map((b, i) => (
            <div
              key={`${b.num}-${i}`}
              style={{ width: cardWidth ? `${cardWidth}px` : undefined }}
              className="group w-[280px] shrink-0 sm:w-[320px]"
            >
              <div className="relative h-full overflow-hidden rounded-[18px] border border-[#F2DAD6] bg-gradient-to-br from-white via-[#FFF9F8] to-[#FFF0ED] p-6 sm:p-7 shadow-[0_16px_38px_-24px_rgba(10,30,79,0.3)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#E31B23]/40 hover:shadow-[0_30px_56px_-24px_rgba(227,27,35,0.45)]">
                {/* Top accent */}
                <span className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#E31B23] via-[#165DFF] to-[#3F7CFF]" />
                {/* Corner glow */}
                <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#165DFF]/[0.1] blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-70" />
                {/* Number watermark */}
                <span className="pointer-events-none absolute right-4 bottom-1 select-none font-heading font-extrabold text-[4.5rem] leading-none text-[#165DFF]/[0.08]">
                  {b.num}
                </span>

                <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#E31B23] to-[#165DFF] font-heading font-extrabold text-[13px] text-white shadow-[0_10px_22px_-10px_rgba(22,93,255,0.75)]">
                  {b.num}
                </span>
                <h3 className="relative mt-4 font-heading font-bold tracking-[-0.01em] text-[1.1rem] sm:text-[1.2rem] text-[#0A1E4F] leading-snug">
                  {b.title}
                </h3>
                <div className="relative mt-2.5 h-px w-10 bg-gradient-to-r from-[#E31B23] to-[#165DFF]" />
                <p className="relative mt-3 text-[0.88rem] leading-relaxed text-[#6B7280]">
                  {b.desc}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Left arrow */}
      <button
        type="button"
        aria-label="Previous benefits"
        onClick={previous}
        className="absolute -left-2 sm:-left-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#E7EBF3] bg-white text-[#0A1E4F] shadow-[0_12px_28px_-10px_rgba(10,30,79,0.35)] transition hover:text-[#E31B23]"
      >
        <ChevronLeft className="h-5 w-5" strokeWidth={2} />
      </button>

      {/* Right arrow */}
      <button
        type="button"
        aria-label="Next benefits"
        onClick={next}
        className="absolute -right-2 sm:-right-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#E7EBF3] bg-white text-[#0A1E4F] shadow-[0_12px_28px_-10px_rgba(10,30,79,0.35)] transition hover:text-[#E31B23]"
      >
        <ChevronRight className="h-5 w-5" strokeWidth={2} />
      </button>
    </div>
  );
}

function Benefits() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      <div className="container">
        <motion.div {...fade(0)} className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#E31B23] mb-5">
            Why Partner With Marcos Quay
          </p>
          <h2 className="font-heading font-extrabold tracking-[-0.02em] text-[1.25rem] sm:text-[2rem] lg:text-[3rem] xl:text-[3.25rem] text-[#0A1E4F] leading-tight whitespace-nowrap">
            Benefits Through the{" "}
            <span className="relative inline-block text-[#E31B23]">
              Partnership
              <svg
                className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-3"
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M4 8 C 40 2, 72 10, 110 7 C 150 4, 182 10, 196 5"
                  stroke="#E31B23"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
          <p className="mt-6 max-w-[640px] mx-auto text-[15px] sm:text-[16px] lg:text-[17px] leading-[1.7] text-[#000000] font-medium">
            What schools gain when they partner with Marcos Quay — beyond
            coaching, beyond the field.
          </p>
        </motion.div>
      </div>

      {/* Stepped carousel — starts at card 01 */}
      <div className="container">
        <BenefitsCarousel />
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   5 · IMPACT
   ══════════════════════════════════════════════════════════════ */

function Impact() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container">
        {/* Heading + copy */}
        <motion.div {...fade(0)} className="max-w-3xl mx-auto text-center mb-14 md:mb-20">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#E31B23] mb-5">
            The Outcome
          </p>
          <h2 className="font-heading font-extrabold tracking-[-0.02em] text-[2.2rem] sm:text-[2.8rem] lg:text-[3.6rem] text-[#0A1E4F] leading-[1.08]">
            Stronger Schools.
            <br />
            Confident Students.
            <br />
            <span className="relative inline-block text-[#E31B23]">
              Thriving Communities.
              <svg
                className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-3"
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M4 8 C 40 2, 72 10, 110 7 C 150 4, 182 10, 196 5"
                  stroke="#E31B23"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
          <p className="text-[#000000] text-[0.95rem] sm:text-[1.05rem] leading-relaxed max-w-2xl mx-auto mt-6">
            By addressing real challenges with practical solutions, Marcos Quay
            Foundation helps schools build active, inclusive and high-quality
            sporting environments — where every child has the opportunity to
            play, learn and grow.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div {...fade(0.08)} className="max-w-5xl mx-auto flex flex-wrap items-stretch justify-center">
          {IMPACT_STATS.map((s, i) => (
            <div key={s.label} className="flex items-center">
              <div className="px-6 sm:px-10 text-center">
                <p className="font-heading font-extrabold tracking-[-0.02em] text-[2.4rem] sm:text-[3.2rem] text-[#0A1E4F] leading-none">
                  {s.value}
                </p>
                <p className="text-[12px] font-semibold text-[#6B7280] mt-2">
                  {s.label}
                </p>
              </div>
              {i < IMPACT_STATS.length - 1 && (
                <div className="hidden sm:block w-px h-16 bg-[#E0E5EF]" />
              )}
            </div>
          ))}
        </motion.div>

        {/* Photo + testimonial */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-16 md:mt-24 items-stretch">
          <motion.div {...fade(0)} className="relative overflow-hidden rounded-[18px] border border-[#E7EBF3]">
            <img
              src="/images/hero-sports.jpg"
              alt="Indian school children in Marcos Quay Foundation sports jerseys after training"
              loading="lazy"
              className="w-full h-[320px] sm:h-[420px] lg:h-full lg:min-h-[460px] object-cover"
            />
            <div className="absolute bottom-0 inset-x-0 bg-[#0A1E4F]/85 px-6 py-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white">
                Marcos Quay Foundation — After a Training Session
              </p>
            </div>
          </motion.div>

          <motion.div {...fade(0.1)} className="flex">
            <div className="relative w-full rounded-[18px] border border-[#165DFF]/10 bg-[#F3F7FC] p-8 sm:p-12 border-l-[3px] border-l-[#E31B23] flex flex-col justify-center">
              <span className="text-[2.8rem] leading-none text-[#165DFF]/30 select-none font-heading font-bold">
                “
              </span>
              <p className="mt-2 font-heading font-semibold text-[1.15rem] sm:text-[1.35rem] text-[#0A1E4F] leading-relaxed">
                Today our school is a place where every child gets a chance to
                play. The change has been incredible.
              </p>
              <div className="mt-8 h-px w-10 bg-[#E31B23]" />
              <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#9AA5B8]">
                School Principal
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   PAGE
   ══════════════════════════════════════════════════════════════ */

export default function ProblemsPage() {
  return (
    <main className="min-h-screen bg-white pt-20 pb-20">
      <Hero />
      <ChallengeGrid />
      <Transformation />
      <Benefits />
      <Impact />
    </main>
  );
}