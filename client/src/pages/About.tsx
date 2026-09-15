import { motion } from "framer-motion";
import { Link } from "wouter";
import TrustedNetwork from "@/components/home/TrustedNetwork";
import {
  ArrowRight,
  Heart,
  Shield,
  TrendingUp,
  Users,
  Target,
  Building2,
  Dumbbell,
  LineChart,
  Trophy,
} from "lucide-react";

const fade = (delay = 0) => ({
  initial: { y: 30 },
  whileInView: { y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

/* ══════════════════════════════════════════════════════════════
   HERO
   ══════════════════════════════════════════════════════════════ */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F3F8FF] via-white to-white pt-8 lg:pt-12 pb-0">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#165DFF]/[0.06] rounded-full blur-[100px]" />
        <div className="absolute -bottom-20 -right-32 w-[400px] h-[400px] bg-[#3F7CFF]/[0.05] rounded-full blur-[90px]" />
        <div className="absolute top-20 right-[5%] w-32 h-32 opacity-[0.08]" style={{ backgroundImage: "radial-gradient(#165DFF 1px, transparent 1px)", backgroundSize: "12px 12px" }} />
        <svg className="absolute top-1/3 left-[3%] w-44 h-44 text-[#165DFF]/[0.05] -rotate-12" viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="0.8">
          <circle cx="60" cy="60" r="52" />
          <path d="M60 8 L60 24 M60 96 L60 112 M8 60 L24 60 M96 60 L112 60" />
          <path d="M60 8 C 76 24, 76 44, 60 60 C 44 76, 44 96, 60 112" />
          <path d="M8 60 C 24 44, 44 44, 60 60 C 76 76, 96 76, 112 60" />
        </svg>
      </div>

      <div className="container relative z-10">
        <motion.div {...fade(0)} className="max-w-4xl mx-auto text-center mb-10 lg:mb-14">
          <div className="flex justify-center mb-5">
            <div className="w-10 h-[2.5px] rounded-full bg-[#E31B23]" />
          </div>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#E31B23] mb-4">
            About Marcos Quay
          </p>
          <h1 className="font-heading font-extrabold tracking-[-0.03em] text-[2.4rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem] leading-[1.02] text-[#0A1E4F] mb-6">
            Building a{" "}
            <span
              className="relative inline-block text-[#E31B23] leading-none text-[1.45em] italic"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              Healthier
              <svg
                className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-3"
                viewBox="0 0 140 12"
                preserveAspectRatio="none"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M4 8 C 28 2, 55 10, 82 6 C 105 3, 120 8, 136 5"
                  stroke="#165DFF"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            , Stronger India Through Sport
          </h1>
          <p className="text-[0.95rem] sm:text-[1.05rem] text-[#000000] leading-relaxed max-w-2xl mx-auto">
            We partner with schools to build stronger sports programmes through
            infrastructure, skilled coaching and consistent practice.
          </p>
        </motion.div>

        {/* Hero image — large editorial photo */}
        <motion.div
          initial={{ y: 40 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-6xl mx-auto"
        >
          <div className="relative rounded-t-[24px] sm:rounded-t-[32px] overflow-hidden">
            <img
              src="/images/hero-sports.jpg"
              alt="Students playing football on a professional school ground"
              className="w-full h-[300px] sm:h-[400px] lg:h-[480px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E4F]/20 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   WHAT IS MARCOS QUAY — Who we are intro
   ══════════════════════════════════════════════════════════════ */

const JOURNEY = [
  { tag: "FROM PLAY", desc: "Healthier children" },
  { tag: "TO CONFIDENCE", desc: "Stronger individuals" },
  { tag: "TO OPPORTUNITY", desc: "A brighter India" },
];

const OUTCOMES = [
  { tag: "SCHOOLS", desc: "Stronger Programmes" },
  { tag: "COACHES", desc: "Greater Opportunities" },
  { tag: "CHILDREN", desc: "Better Futures" },
  { tag: "COMMUNITIES", desc: "A Healthier, Stronger India" },
];

function WhatIsMarcosQuay() {
  return (
    <section id="who" className="relative bg-[#FDFDFB] py-16 md:py-24">
      <div className="container relative z-10">
        {/* Header */}
        <motion.div {...fade(0)} className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-5 mb-6">
            <span className="h-px w-12 bg-[#E31B23]" />
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#E31B23]">
              About Marcos Quay
            </p>
            <span className="h-px w-12 bg-[#E31B23]" />
          </div>
          <h2 className="font-heading font-extrabold tracking-[-0.02em] text-[2rem] sm:text-[2.8rem] lg:text-[3.4rem] text-[#0A1E4F] leading-[1.15] mb-7">
            Sport should be a{" "}
            <span className="relative inline-block text-[#E31B23]">
              starting point
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
            </span>,{" "}
            <span className="relative inline-block text-[#E31B23]">
              not a privilege
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
            </span>.
          </h2>
          <p className="text-[#000000] text-[0.95rem] sm:text-[1.05rem] leading-relaxed max-w-2xl mx-auto">
            Marcos Quay Foundation works with schools to make structured,
            quality sports education accessible to more children across India.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto mt-14 md:mt-20">
        {/* Card 01 — What we do */}
        <motion.div
          {...fade(0.08)}
          className="rounded-[18px] border-2 border-[#165DFF]/30 bg-[#F4F8FF] p-8 sm:p-12"
        >
          <p className="text-[13px] font-bold tracking-[0.18em] text-[#E31B23]">
            01
          </p>
          <div className="mt-4 h-px w-10 bg-[#E31B23]" />
          <h3 className="mt-6 font-heading font-bold text-[15px] tracking-[0.14em] text-[#0A1E4F]">
            WHAT WE DO
          </h3>
          <p className="mt-4 text-[0.95rem] leading-relaxed text-[#000000]">
            We help schools build stronger sports programmes through structured
            curriculum, skilled coaching and consistent opportunities to play.
          </p>
        </motion.div>

        {/* Card 02 — Why we exist */}
        <motion.div
          {...fade(0.14)}
          className="rounded-[18px] border-2 border-[#E31B23]/30 bg-[#FFF7F6] p-8 sm:p-12"
        >
          <p className="text-[13px] font-bold tracking-[0.18em] text-[#E31B23]">
            02
          </p>
          <div className="mt-4 h-px w-10 bg-[#E31B23]" />
          <h3 className="mt-6 font-heading font-bold text-[15px] tracking-[0.14em] text-[#0A1E4F]">
            WHY WE EXIST
          </h3>
          <p className="mt-4 text-[0.95rem] leading-relaxed text-[#000000]">
            For many children, access to sport is limited by a lack of
            infrastructure, trained coaches and regular programmes. We work
            with schools to remove these barriers and create environments
            where children can play, learn and grow.
          </p>
        </motion.div>
        </div>
      </div>

      {/* Timeline — blue rule with red nodes */}
      <div className="container relative z-10 mt-16 md:mt-24">
        <div className="max-w-4xl mx-auto">
          <div className="relative hidden md:block">
            <div className="h-px w-full bg-[#165DFF]/40" />
            {JOURNEY.map((item, i) => (
              <span
                key={item.tag}
                className="absolute -top-[5px] h-[11px] w-[11px] rounded-full border-2 border-[#FDFDFB] bg-[#E31B23]"
                style={{
                  left: `${((i + 0.5) / JOURNEY.length) * 100}%`,
                  transform: "translateX(-50%)",
                }}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            {JOURNEY.map((item) => (
              <div
                key={item.tag}
                className="flex flex-col items-center text-center"
              >
                <span className="md:hidden mb-4 h-[11px] w-[11px] rounded-full bg-[#E31B23]" />
                <p className="font-heading font-bold text-[13px] uppercase tracking-[0.2em] text-[#0A1E4F]">
                  {item.tag}
                </p>
                <p className="mt-2 text-[0.95rem] text-[#6B7280]">
                  <span className="text-[#E31B23]">— </span>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Closing statement */}
          <motion.p
            {...fade(0.15)}
            className="mx-auto mt-16 md:mt-24 max-w-3xl text-center text-[1.05rem] sm:text-[1.2rem] font-heading font-semibold text-[#0A1E4F] leading-relaxed"
          >
            We believe sport is more than physical activity. It can help
            children develop health, confidence, discipline, teamwork and a
            stronger sense of belonging.
          </motion.p>

          {/* Subtle divider */}
          <div className="mt-12 h-px w-full bg-[#E7EBF3]" />

          {/* Outcomes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 mt-14">
            {OUTCOMES.map((o, i) => (
              <motion.div key={o.tag} {...fade(0.05 * i)} className="text-center">
                <p className="font-heading font-bold text-[13px] uppercase tracking-[0.2em] text-[#165DFF]">
                  {o.tag}
                </p>
                <p className="mt-3 text-[1.05rem] font-heading font-semibold text-[#0A1E4F] leading-snug">
                  {o.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   OUR IMPACT — Transforming school sports
   ══════════════════════════════════════════════════════════════ */

const TRANSFORMATION_STEPS = [
  {
    num: "01",
    title: "Before",
    caption: "Limited Opportunity",
    image: "/images/Ground img.png",
    alt: "A school sports ground with basic infrastructure and limited facilities",
  },
  {
    num: "02",
    title: "Marcos Quay Transformation",
    caption: "Building Change",
    image: "/images/solutions/transformation.jpg",
    alt: "Coaches and children during a structured sports development programme",
  },
  {
    num: "03",
    title: "After",
    caption: "Active School Sports",
    image: "/images/hero-sports-1.jpg",
    alt: "School children playing organised football during a structured session",
  },
];

const IMPACT_OUTCOMES = [
  {
    num: "01",
    title: "Better Spaces to Play",
    desc: "Schools gain safer, better-designed grounds where children can practise and participate regularly.",
  },
  {
    num: "02",
    title: "Grassroots Sport Introduced",
    desc: "Structured, age-appropriate sporting programmes become part of everyday school life.",
  },
  {
    num: "03",
    title: "Coaches & Teachers Empowered",
    desc: "Coaches and teachers receive training, practical resources and continued support.",
  },
  {
    num: "04",
    title: "More Children Participating",
    desc: "Schools move from occasional sports activities towards wider participation and engagement.",
  },
  {
    num: "05",
    title: "Pathways to Opportunity",
    desc: "Children gain access to competitions, sporting experiences and opportunities beyond the school playground.",
  },
];

function OurImpact() {
  return (
    <section id="impact" className="relative bg-white py-16 md:py-24">
      <div className="container">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-start mb-16 md:mb-24">
          <motion.div {...fade(0)}>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#E31B23] mb-5">
              Our Impact
            </p>
            <h2 className="font-heading font-extrabold tracking-[-0.02em] text-[2rem] sm:text-[2.8rem] lg:text-[3.2rem] text-[#0A1E4F] leading-[1.1] mb-7">
              Transforming School Sports,
              <br />
              <span className="relative inline-block text-[#E31B23]">
                One Ground at a Time
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
            <p className="text-[#000000] text-[0.95rem] sm:text-[1.05rem] leading-relaxed max-w-xl">
              Marcos Quay Foundation has helped schools move from limited
              sports infrastructure and participation to active, inclusive and
              structured sporting environments. By improving grounds,
              introducing grassroots programmes, training coaches and creating
              opportunities for children, we help schools build a stronger
              sporting culture.
            </p>
          </motion.div>

          {/* Quote box */}
          <motion.div {...fade(0.1)}>
            <div className="relative rounded-[18px] border border-[#165DFF]/10 bg-[#F4F8FF] p-8 sm:p-10">
              <span className="text-[2.8rem] leading-none font-heading font-bold text-[#165DFF]/30 select-none">
                “
              </span>
              <p className="mt-1 text-[1.1rem] sm:text-[1.25rem] font-heading font-semibold text-[#0A1E4F] leading-relaxed">
                When schools invest in sport, children invest in themselves.
              </p>
              <div className="mt-8 h-px w-10 bg-[#E31B23]" />
              <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#9AA5B8]">
                Marcos Quay Foundation
              </p>
            </div>
          </motion.div>
        </div>

        {/* Main visual story — three connected panels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative">
          {TRANSFORMATION_STEPS.map((step, i) => (
            <motion.div key={step.num} {...fade(0.08 * i)} className="relative">
              {/* Meta row */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[12px] font-bold text-[#E31B23]">
                  {step.num}
                </span>
                <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-[#0A1E4F]">
                  {step.title}
                </span>
              </div>

              {/* Photo + caption overlay */}
              <div className="relative overflow-hidden rounded-[16px] border border-[#E7EBF3]">
                <img
                  src={step.image}
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

              {/* Circular arrow indicator between panels */}
              {i < TRANSFORMATION_STEPS.length - 1 && (
                <span className="hidden md:flex absolute top-[148px] sm:top-[168px] -right-[23px] z-10 h-11 w-11 items-center justify-center rounded-full bg-[#0A1E4F] text-white shadow-[0_10px_24px_-10px_rgba(10,30,79,0.55)]">
                  <ArrowRight className="h-4.5 w-4.5" />
                </span>
              )}
            </motion.div>
          ))}
        </div>

        {/* Impact outcomes */}
        <motion.div {...fade(0.1)} className="mt-24 mb-10 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#E31B23]">
            Impact Outcomes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {IMPACT_OUTCOMES.map((o, i) => (
            <motion.div
              key={o.num}
              {...fade(0.05 * i)}
              className="rounded-[16px] border-2 border-[#A1B2D0] bg-white p-7"
            >
              <p className="text-[13px] font-bold text-[#E31B23]">{o.num}</p>
              <h4 className="mt-5 font-heading font-bold text-[15px] text-[#0A1E4F] leading-snug">
                {o.title}
              </h4>
              <p className="mt-3 text-[0.88rem] leading-relaxed text-[#6B7280]">
                {o.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   OUR STORY
   ══════════════════════════════════════════════════════════════ */

const IMPACT_NUMBERS = [
  { value: "450+", label: "Schools" },
  { value: "50,000+", label: "Students" },
  { value: "25+", label: "Cities" },
];

function OurStory() {
  return (
    <section id="story" className="relative overflow-hidden bg-white py-16 md:py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 -right-28 w-[350px] h-[350px] bg-[#165DFF]/[0.04] rounded-full blur-[80px]" />
      </div>

      <div className="container relative z-10">
        {/* Section heading */}
        <motion.div {...fade(0)} className="text-center mb-12 md:mb-16">
          <h2 className="heading-2 text-[#0A1E4F]">
            Our{" "}
            <span className="relative inline-block text-[#E31B23]">
              Story
              <svg
                className="absolute -bottom-2 left-0 w-full h-3"
                viewBox="0 0 170 12"
                preserveAspectRatio="none"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 8 C 28 2, 52 10, 84 6 C 118 2, 140 9, 167 5"
                  stroke="#165DFF"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Image */}
          <motion.div {...fade(0)} className="relative">
            <div className="relative rounded-[20px] sm:rounded-[28px] overflow-hidden">
              <img
                src="/images/solutions/curriculum.jpg"
                alt="Coach interacting with students on a school playground"
                className="w-full h-[340px] sm:h-[420px] lg:h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E4F]/15 to-transparent" />
            </div>
            {/* Floating accent */}
            <div className="absolute -bottom-4 -right-4 sm:bottom-6 sm:-right-6 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#165DFF]/10 border-2 border-[#165DFF]/15 flex items-center justify-center">
              <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-[#165DFF]" />
            </div>
          </motion.div>

          {/* Right — Content */}
          <div>
            <motion.div {...fade(0.1)}>
              <h3 className="font-heading font-extrabold tracking-[-0.02em] text-[1.8rem] sm:text-[2.2rem] lg:text-[2.6rem] text-[#0A1E4F] leading-tight mb-6">
                A Movement Born on School Grounds
              </h3>
            </motion.div>

            <motion.div {...fade(0.15)}>
              <p className="text-[#000000] text-[0.95rem] leading-relaxed mb-4">
                Marcos Quay Foundation began with a simple observation — India
                celebrates its sporting heroes, yet most school children never
                get to experience structured sport. Grounds sit idle, PE time
                goes unstructured, and potential goes undiscovered.
              </p>
              <p className="text-[#000000] text-[0.95rem] leading-relaxed mb-4">
                Instead of building academies, we chose a harder, more lasting
                path: transforming schools themselves into centres of sporting
                excellence — with certified coaches, structured curricula, and
                programmes that run through the school week, not around it.
              </p>
              <p className="text-[#000000] text-[0.95rem] leading-relaxed mb-8">
                Today that choice has reached schools and children across
                multiple cities — proof that when schools change, communities
                change with them.
              </p>
            </motion.div>

            {/* Impact numbers — large serif, separated by thin lines */}
            <motion.div {...fade(0.2)} className="flex items-center gap-0">
              {IMPACT_NUMBERS.map((n, i) => (
                <div key={n.label} className="flex items-center">
                  <div className="px-5 sm:px-7">
                    <p className="font-heading font-extrabold tracking-[-0.02em] text-[1.8rem] sm:text-[2.2rem] lg:text-[2.6rem] text-[#165DFF] leading-none">
                      {n.value}
                    </p>
                    <p className="text-[12px] font-semibold text-[#6B7280] mt-1.5">
                      {n.label}
                    </p>
                  </div>
                  {i < IMPACT_NUMBERS.length - 1 && (
                    <div className="w-[1px] h-14 bg-[#E0E5EF]" />
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   MISSION & VISION — Editorial split
   ══════════════════════════════════════════════════════════════ */

function MissionVision() {
  return (
    <section id="mission" className="relative overflow-hidden bg-[#F4F7FF] py-20 md:py-32">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[450px] h-[450px] bg-[#165DFF]/[0.05] rounded-full blur-[100px]" />
        <div className="absolute -bottom-28 -right-28 w-[380px] h-[380px] bg-[#3F7CFF]/[0.04] rounded-full blur-[90px]" />
        {/* Faint large "MISSION" text — left */}
        <span className="absolute top-[18%] left-[-2%] text-[6rem] sm:text-[8rem] lg:text-[10rem] font-heading font-extrabold uppercase text-[#165DFF]/[0.03] leading-none select-none pointer-events-none">
          Mission
        </span>
        {/* Faint large "VISION" text — right */}
        <span className="absolute bottom-[18%] right-[-2%] text-[6rem] sm:text-[8rem] lg:text-[10rem] font-heading font-extrabold uppercase text-[#165DFF]/[0.03] leading-none select-none pointer-events-none text-right">
          Vision
        </span>
        {/* Dotted pattern — top right */}
        <div className="absolute top-16 right-[6%] w-28 h-28 opacity-[0.08]" style={{ backgroundImage: "radial-gradient(#165DFF 1px, transparent 1px)", backgroundSize: "12px 12px" }} />
        {/* Dotted pattern — bottom left */}
        <div className="absolute bottom-20 left-[4%] w-24 h-24 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(#165DFF 0.8px, transparent 0.8px)", backgroundSize: "14px 14px" }} />
        {/* Concentric circles — left */}
        <svg className="absolute top-[30%] left-[2%] w-40 h-40 text-[#165DFF]/[0.04]" viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="0.6">
          <circle cx="60" cy="60" r="55" />
          <circle cx="60" cy="60" r="42" />
          <circle cx="60" cy="60" r="28" />
        </svg>
        {/* Concentric circles — right */}
        <svg className="absolute bottom-[25%] right-[3%] w-32 h-32 text-[#165DFF]/[0.035]" viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="0.6">
          <circle cx="60" cy="60" r="55" />
          <circle cx="60" cy="60" r="40" />
        </svg>
        {/* Curved sports field lines */}
        <svg className="absolute top-0 left-0 w-full h-full text-[#165DFF]/[0.03]" viewBox="0 0 1440 600" fill="none" preserveAspectRatio="none">
          <path d="M0 300 C 360 200, 720 400, 1080 280 S 1440 340, 1440 300" stroke="currentColor" strokeWidth="1" />
          <path d="M0 450 C 480 370, 960 530, 1440 420" stroke="currentColor" strokeWidth="0.6" strokeDasharray="4 14" />
        </svg>
      </div>

      <div className="container relative z-10">
        {/* Heading */}
        <motion.div {...fade(0)} className="text-center mb-16 md:mb-24">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#165DFF] mb-4">
            Purpose &amp; Direction
          </p>
          <h2 className="font-heading font-extrabold tracking-[-0.02em] text-[2rem] sm:text-[2.6rem] lg:text-[3.2rem] text-[#0A1E4F]">
            Mission &amp; Vision
          </h2>
        </motion.div>

        {/* Editorial split */}
        <div className="relative max-w-6xl mx-auto">
          {/* Curved flowing lines connecting to center */}
          <svg className="absolute top-1/2 left-0 right-0 -translate-y-1/2 w-full h-[2px] hidden md:block pointer-events-none" viewBox="0 0 1000 4" preserveAspectRatio="none">
            <line x1="0" y1="2" x2="420" y2="2" stroke="#165DFF" strokeWidth="1" opacity="0.15" />
            <line x1="580" y1="2" x2="1000" y2="2" stroke="#165DFF" strokeWidth="1" opacity="0.15" />
          </svg>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-10 md:gap-8 items-center">
            {/* Mission — Left */}
            <motion.div {...fade(0.1)} className="text-left bg-white rounded-[24px] border-2 border-[#D5DFF0] shadow-[0_24px_60px_-40px_rgba(10,30,79,0.35)] p-8 sm:p-10">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#165DFF] mb-4">
                Mission
              </p>
              <h3 className="font-heading font-extrabold tracking-[-0.02em] text-[1.8rem] sm:text-[2.2rem] lg:text-[2.6rem] text-[#0A1E4F] leading-[1.1] mb-6">
                Every child. Every school.
                <br />
                The joy of sport.
              </h3>
              <p className="text-[#6B7280] text-[0.9rem] leading-relaxed max-w-md mb-6">
                To ensure every child in every school experiences the
                confidence, fitness and character that structured sport builds —
                regardless of background or ability.
              </p>
              <div className="flex items-center gap-0 text-[12px] font-semibold text-[#165DFF]">
                <span>Confidence</span>
                <span className="mx-3 w-[1px] h-3 bg-[#165DFF]/30" />
                <span>Fitness</span>
                <span className="mx-3 w-[1px] h-3 bg-[#165DFF]/30" />
                <span>Character</span>
              </div>
            </motion.div>

            {/* Center emblem */}
            <motion.div {...fade(0.15)} className="flex items-center justify-center px-8 md:px-10">
              <div className="relative">
                {/* Outer ring */}
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-2 border-[#165DFF]/15 flex items-center justify-center">
                  {/* Inner ring */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-[#165DFF]/10 flex items-center justify-center">
                    {/* Core */}
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#165DFF] flex items-center justify-center shadow-[0_10px_30px_-6px_rgba(22,93,255,0.45)]">
                      <Target className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                    </div>
                  </div>
                </div>
                {/* Radiating thin lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 128 128">
                  <line x1="64" y1="0" x2="64" y2="16" stroke="#165DFF" strokeWidth="0.5" opacity="0.2" />
                  <line x1="64" y1="112" x2="64" y2="128" stroke="#165DFF" strokeWidth="0.5" opacity="0.2" />
                  <line x1="0" y1="64" x2="16" y2="64" stroke="#165DFF" strokeWidth="0.5" opacity="0.2" />
                  <line x1="112" y1="64" x2="128" y2="64" stroke="#165DFF" strokeWidth="0.5" opacity="0.2" />
                </svg>
              </div>
            </motion.div>

            {/* Vision — Right */}
            <motion.div {...fade(0.2)} className="text-left md:text-right bg-white rounded-[24px] border-2 border-[#D5DFF0] shadow-[0_24px_60px_-40px_rgba(10,30,79,0.35)] p-8 sm:p-10">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#165DFF] mb-4">
                Vision
              </p>
              <h3 className="font-heading font-extrabold tracking-[-0.02em] text-[1.8rem] sm:text-[2.2rem] lg:text-[2.6rem] text-[#0A1E4F] leading-[1.1] mb-6">
                A stronger, healthier India
                <br />
                through structured sports education.
              </h3>
              <p className="text-[#6B7280] text-[0.9rem] leading-relaxed max-w-md mb-6 md:ml-auto">
                A future where structured sports education is the norm, not the
                exception — and every schoolyard in the country is a launchpad
                for life.
              </p>
              <div className="flex items-center gap-0 text-[12px] font-semibold text-[#165DFF] md:justify-end">
                <span>Every Schoolyard</span>
                <span className="mx-3 w-[1px] h-3 bg-[#165DFF]/30" />
                <span>National Reach</span>
                <span className="mx-3 w-[1px] h-3 bg-[#165DFF]/30" />
                <span>Lifelong Habits</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   OUR VALUES — Horizontal editorial layout
   ══════════════════════════════════════════════════════════════ */

const VALUES = [
  {
    num: "01",
    title: "Inclusion",
    icon: Heart,
    desc: "Sport is for every child. We welcome different abilities, genders and backgrounds onto the same field.",
  },
  {
    num: "02",
    title: "Integrity",
    icon: Shield,
    desc: "We coach with honesty and measure with transparency — schools and parents always see real progress.",
  },
  {
    num: "03",
    title: "Impact",
    icon: TrendingUp,
    desc: "We chase outcomes that last: fitness, discipline, confidence and lifelong habits — measured and celebrated.",
  },
  {
    num: "04",
    title: "Collaboration",
    icon: Users,
    desc: "We work with schools, teachers, parents and partners as true teammates — transformation happens together.",
  },
];

function Values() {
  return (
    <section className="relative overflow-hidden h-screen max-h-[900px] bg-gradient-to-b from-[#F0F5FF] via-[#F4F8FF] to-[#EDF3FF]">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-[#165DFF]/[0.05] rounded-full blur-[90px]" />
        <div className="absolute -bottom-28 -right-28 w-[350px] h-[350px] bg-[#3F7CFF]/[0.04] rounded-full blur-[80px]" />
        <div className="absolute top-[50%] left-[8%] w-[250px] h-[250px] bg-[#165DFF]/[0.03] rounded-full blur-[70px]" />
        <svg className="absolute top-[10%] left-[-4%] w-64 h-64 text-[#165DFF]/[0.04]" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="0.8">
          <circle cx="100" cy="100" r="90" />
          <circle cx="100" cy="100" r="68" />
          <circle cx="100" cy="100" r="46" />
        </svg>
        <svg className="absolute bottom-[8%] right-[-2%] w-48 h-48 text-[#165DFF]/[0.035]" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="0.7">
          <circle cx="100" cy="100" r="90" />
          <circle cx="100" cy="100" r="60" />
        </svg>
        <svg className="absolute top-0 left-0 w-full h-full text-[#165DFF]/[0.025]" viewBox="0 0 1440 600" fill="none" preserveAspectRatio="none">
          <path d="M0 180 C 360 100, 720 260, 1080 140 S 1440 200, 1440 180" stroke="currentColor" strokeWidth="0.8" />
          <path d="M0 420 C 480 340, 960 500, 1440 380" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 14" />
        </svg>
        <div className="absolute top-20 right-[5%] w-28 h-28 opacity-[0.07]" style={{ backgroundImage: "radial-gradient(#165DFF 1px, transparent 1px)", backgroundSize: "12px 12px" }} />
        <div className="absolute bottom-24 left-[3%] w-24 h-24 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(#165DFF 0.8px, transparent 0.8px)", backgroundSize: "14px 14px" }} />
      </div>

      <div className="container relative z-10 max-w-5xl mx-auto h-full flex flex-col justify-center py-12 md:py-16">
        {/* Heading */}
        <motion.div {...fade(0)} className="mb-4 md:mb-6 text-center">
          <p className="text-[12px] md:text-[13px] font-bold uppercase tracking-[0.2em] text-[#165DFF] mb-2">
            What We Stand For
          </p>
          <h2 className="font-heading font-extrabold tracking-[-0.02em] text-[2.4rem] sm:text-[3rem] lg:text-[3.8rem] text-[#0A1E4F] mb-3">
            Our Values
          </h2>
          <p className="text-[#6B7280] text-[1.05rem] md:text-[1.15rem] leading-relaxed max-w-2xl mx-auto">
            The principles that guide our actions, shape our programmes and drive
            meaningful change in every school we work with.
          </p>
        </motion.div>

        {/* Values grid — 2×2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-0">
          {VALUES.map((v, i) => (
            <motion.div key={v.title} {...fade(i * 0.08)}>
              <div className="group py-6 md:py-7 border-t border-[#165DFF]/[0.12] last:border-b sm:[&:nth-last-child(-n+2)]:border-b">
                <div className="flex items-start gap-4 md:gap-5">
                  <span
                    className="font-heading font-extrabold text-[3.2rem] md:text-[3.8rem] text-[#165DFF]/[0.15] leading-none shrink-0 pt-0.5"
                  >
                    {v.num}
                  </span>
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-11 h-11 rounded-full border border-[#165DFF]/20 bg-white/60 flex items-center justify-center shrink-0 mt-0.5">
                      <v.icon className="w-5 h-5 text-[#165DFF]" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold tracking-[-0.01em] text-[1.2rem] md:text-[1.4rem] text-[#0A1E4F] mb-1">
                        {v.title}
                      </h3>
                      <p className="text-[0.9rem] md:text-[1rem] text-[#6B7280] leading-relaxed max-w-sm">
                        {v.desc}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 mt-2.5 opacity-[0.2] group-hover:opacity-[0.45] transition-opacity duration-500">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#165DFF]" />
                  <div className="w-5 h-[1px] bg-[#165DFF]" />
                  <div className="w-1 h-1 rounded-full bg-[#165DFF]/60" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   OUR APPROACH — Flowing journey
   ══════════════════════════════════════════════════════════════ */

const APPROACH_STEPS = [
  { icon: Building2, title: "Infrastructure", desc: "Modern playing surfaces and facilities" },
  { icon: Users, title: "Skilled Coaches", desc: "Certified professionals with expertise" },
  { icon: Dumbbell, title: "Consistent Practice", desc: "Structured sessions that build skill" },
  { icon: LineChart, title: "Performance Tracking", desc: "Data-driven insights to measure growth" },
  { icon: Trophy, title: "Student Growth", desc: "Confident, fit, and skilled athletes" },
];

function Approach() {
  return (
    <section className="relative overflow-hidden bg-[#F4F7FF] py-16 md:py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-28 -right-28 w-[350px] h-[350px] bg-[#165DFF]/[0.04] rounded-full blur-[80px]" />
      </div>

      <div className="container relative z-10">
        <motion.div {...fade(0)} className="text-center mb-14 md:mb-18">
          <p className="text-[13px] font-bold uppercase tracking-[0.2em] text-[#165DFF] mb-4">
            Our Approach
          </p>
          <h2 className="font-heading font-extrabold tracking-[-0.02em] text-[2.4rem] sm:text-[3rem] lg:text-[3.8rem] text-[#0A1E4F]">
            A Visual Journey
          </h2>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Curved connecting line — desktop */}
          <div className="hidden lg:block absolute top-[40px] left-[10%] right-[10%] h-[2px]">
            <div className="w-full h-full bg-gradient-to-r from-[#165DFF]/20 via-[#3F7CFF]/25 to-[#165DFF]/20" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-0">
            {APPROACH_STEPS.map((step, i) => (
              <motion.div key={step.title} {...fade(i * 0.08)} className="relative flex flex-col items-center text-center lg:px-3">
                {/* Icon circle */}
                <div className="w-[72px] h-[72px] rounded-full bg-white border-2 border-[#165DFF]/15 flex items-center justify-center mb-4 relative z-10 shadow-[0_4px_16px_-4px_rgba(22,93,255,0.12)]">
                  <step.icon className="w-7 h-7 text-[#165DFF]" />
                </div>

                {/* Arrow (mobile) */}
                {i < APPROACH_STEPS.length - 1 && (
                  <div className="lg:hidden flex justify-center my-2">
                    <div className="w-[1px] h-6 bg-[#165DFF]/20" />
                  </div>
                )}

                {/* Arrow (desktop) */}
                {i < APPROACH_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-[38px] -right-1 z-20">
                    <ArrowRight className="w-4 h-4 text-[#165DFF]/30" />
                  </div>
                )}

                <p className="text-[13px] font-bold text-[#165DFF]/40 mb-1">
                  0{i + 1}
                </p>
                <h3 className="font-heading font-bold text-[1.1rem] text-[#0A1E4F] mb-1.5">
                  {step.title}
                </h3>
                <p className="text-[0.9rem] text-[#6B7280] leading-relaxed max-w-[180px]">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   OUR FOUNDER
   ══════════════════════════════════════════════════════════════ */

function Founder() {
  return (
    <section id="founder" className="relative overflow-hidden bg-[#FDFDFB] py-16 md:py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-[380px] h-[380px] bg-[#165DFF]/[0.04] rounded-full blur-[90px]" />
        <div className="absolute bottom-0 -left-28 w-[350px] h-[350px] bg-[#E31B23]/[0.03] rounded-full blur-[90px]" />
      </div>

      <div className="container relative z-10">
        {/* Section heading */}
        <motion.div {...fade(0)} className="text-center mb-12 md:mb-16">
          <h2 className="heading-2 text-[#0A1E4F]">
            Our{" "}
            <span className="relative inline-block text-[#E31B23]">
              Founder
              <svg
                className="absolute -bottom-2 left-0 w-full h-3"
                viewBox="0 0 170 12"
                preserveAspectRatio="none"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 8 C 28 2, 52 10, 84 6 C 118 2, 140 9, 167 5"
                  stroke="#165DFF"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Image */}
          <motion.div {...fade(0)} className="relative max-w-[360px] sm:max-w-[440px] w-full mx-auto">
            <div
              className={`absolute -left-7 -top-7 w-28 h-28 rounded-full border border-[#165DFF]/15`}
            />
            <div
              className={`absolute -right-6 -bottom-6 w-32 h-32 rounded-full border border-[#E31B23]/15`}
            />
            <div className="relative overflow-hidden rounded-[20px] sm:rounded-[28px]">
              <img
                src="/images/about/founder-1.png"
                alt="Raahil Dhruva, Founder of Marcos Quay"
                className="w-full aspect-[652/735] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E4F]/20 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Right — Content */}
          <div>
            <motion.div {...fade(0.1)}>
              <h3 className="font-heading font-extrabold tracking-[-0.02em] text-[1.8rem] sm:text-[2.2rem] lg:text-[2.6rem] text-[#0A1E4F] leading-tight mb-6">
                Raahil Dhruva
              </h3>
            </motion.div>

            <motion.div {...fade(0.15)} className="space-y-4">
              <p className="text-[#000000] text-[0.95rem] leading-relaxed">
                Born in Mumbai, Raahil was an active child from a young age —
                competing at inter-school, inter-district and inter-state
                level, and excelling across tennis, football, running,
                swimming and more. After moving to the UK at age ten, he
                continued to pursue tennis, thriving with the support of
                strong school programmes, and later trained at the Sutton
                Tennis Academy in pursuit of representing India at world
                tournaments.
              </p>
              <p className="text-[#000000] text-[0.95rem] leading-relaxed">
                Following multiple victories, Raahil wanted the same
                opportunities made available to more students in India. He
                studied BSc. Entrepreneurship with a minor in Corporate
                Communications and Finance at Queens University, Charlotte, on
                a tennis scholarship — representing his university across the
                USA and achieving a ranking of 12 in doubles in the NCAA
                tournaments.
              </p>
              <p className="text-[#000000] text-[0.95rem] leading-relaxed">
                Raahil has always believed in a balance between education and
                an active lifestyle, a value he now instils in every school he
                collaborates with. Marcos Quay was founded on his vision to
                make every student an active participant in their day, in
                society, and throughout their lives.
              </p>
            </motion.div>

            <motion.div {...fade(0.2)} className="mt-8 flex items-center gap-4">
              <div className="h-px w-10 bg-[#E31B23]" />
              <div>
                <p className="font-heading font-bold text-[16px] text-[#0A1E4F]">
                  Raahil Dhruva
                </p>
                <p className="text-[13px] font-semibold text-[#000000] mt-0.5">
                  Director | Marcos Quay
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   FINAL CTA — Navy with integrated photo
   ══════════════════════════════════════════════════════════════ */

function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-white pt-2 pb-16 sm:pb-24">
      <div className="container relative">
        <div className="relative overflow-hidden rounded-[24px] sm:rounded-[32px] bg-[#0A1E4F] min-h-[400px] sm:min-h-[480px]">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A1E4F] via-[#0D2B6B] to-[#0A1E4F]" />

          {/* Sports silhouettes */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.06]">
            <svg className="absolute bottom-0 left-[5%] w-32 h-40 text-white" viewBox="0 0 80 100" fill="currentColor">
              <circle cx="40" cy="15" r="8" />
              <path d="M40 25 L30 55 L20 85 M40 25 L50 55 L60 85 M30 40 L15 35 M50 40 L65 35" stroke="currentColor" strokeWidth="3" fill="none" />
            </svg>
            <svg className="absolute bottom-0 right-[20%] w-32 h-40 text-white" viewBox="0 0 80 100" fill="currentColor">
              <circle cx="40" cy="15" r="8" />
              <path d="M40 25 L35 55 L25 85 M40 25 L45 55 L55 85 M35 42 L20 38 M45 42 L60 38" stroke="currentColor" strokeWidth="3" fill="none" />
            </svg>
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-2 min-h-[400px] sm:min-h-[480px]">
            {/* Left — Text */}
            <motion.div {...fade(0)} className="flex flex-col justify-center px-8 py-12 sm:px-12 lg:px-16">
              <h2 className="font-heading font-extrabold tracking-[-0.02em] text-[2rem] sm:text-[2.6rem] lg:text-[3rem] text-white leading-tight mb-6">
                Stronger Schools.
                <br />
                Healthier Children.
                <br />
                <span className="text-[#3F7CFF]">Brighter Future.</span>
              </h2>
              <p className="text-white/65 text-[0.95rem] leading-relaxed mb-8 max-w-md">
                Whether you run a school, lead a CSR programme, or simply want
                to give children the gift of sport — there is a place for you in
                this mission.
              </p>
              <div>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-[#3F7CFF] text-white font-heading font-bold text-[14px] px-8 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-12px_rgba(63,124,255,0.5)]"
                >
                  Partner With Us
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </motion.div>

            {/* Right — Integrated photo with curved shape */}
            <motion.div {...fade(0.15)} className="relative hidden lg:block">
              <div className="absolute inset-0">
                <svg viewBox="0 0 600 480" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                  <path d="M120 0 L600 0 L600 480 L120 480 C 40 480 0 420 0 360 L0 120 C 0 60 40 0 120 0 Z" fill="#0D2B6B" />
                </svg>
              </div>
              <div className="absolute inset-0 pl-16 pt-8 pb-8 pr-8">
                <img
                  src="/images/solutions/multisport.jpg"
                  alt="Students in blue sports uniforms playing together"
                  className="w-full h-full object-cover rounded-[16px]"
                />
                <div className="absolute inset-0 pl-16 pt-8 pb-8 pr-8 rounded-[16px]">
                  <div className="w-full h-full rounded-[16px] bg-gradient-to-t from-[#0A1E4F]/30 to-transparent" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   PAGE
   ══════════════════════════════════════════════════════════════ */

export default function About() {
  return (
    <div className="min-h-screen pt-20 pb-20">
      <Hero />
      <WhatIsMarcosQuay />
      <OurImpact />
      <OurStory />
      {/* <MissionVision /> */}
      {/* <Values /> */}
      {/* <Approach /> */}
      {/* <TrustedNetwork /> */}
      <Founder />
      <FinalCta />
    </div>
  );
}
