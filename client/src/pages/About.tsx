import { motion } from "framer-motion";
import { Link } from "wouter";
import TrustedNetwork from "@/components/home/TrustedNetwork";
import {
  ArrowRight,
  Eye,
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

const SERIF = "'DM Serif Display', serif";

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
            <div className="w-10 h-[2.5px] rounded-full bg-[#165DFF]" />
          </div>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#165DFF] mb-4">
            About Marcos Quay
          </p>
          <h1
            className="text-[2.4rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem] leading-[1.02] text-[#0A1E4F] mb-6"
            style={{ fontFamily: SERIF }}
          >
            Building a Healthier, Stronger India Through Sport
          </h1>
          <p className="text-[0.95rem] sm:text-[1.05rem] text-[#6B7280] leading-relaxed max-w-2xl mx-auto">
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
          {/* Overlapping title */}
          <div className="absolute -bottom-6 sm:-bottom-4 left-0 right-0 sm:left-8 sm:right-auto">
              <h2
                className="text-[3rem] sm:text-[5rem] lg:text-[10.5rem] text-white leading-[0.85] drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]"
                style={{ fontFamily: SERIF }}
              >
                About Us
              </h2>
          </div>
        </motion.div>
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
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#165DFF] mb-4">
                Our Story
              </p>
              <h2
                className="text-[1.8rem] sm:text-[2.2rem] lg:text-[2.6rem] text-[#0A1E4F] leading-tight mb-6"
                style={{ fontFamily: SERIF }}
              >
                A Movement Born on School Grounds
              </h2>
            </motion.div>

            <motion.div {...fade(0.15)}>
              <p className="text-[#6B7280] text-[0.95rem] leading-relaxed mb-4">
                Marcos Quay Foundation began with a simple observation — India
                celebrates its sporting heroes, yet most school children never
                get to experience structured sport. Grounds sit idle, PE time
                goes unstructured, and potential goes undiscovered.
              </p>
              <p className="text-[#6B7280] text-[0.95rem] leading-relaxed mb-4">
                Instead of building academies, we chose a harder, more lasting
                path: transforming schools themselves into centres of sporting
                excellence — with certified coaches, structured curricula, and
                programmes that run through the school week, not around it.
              </p>
              <p className="text-[#6B7280] text-[0.95rem] leading-relaxed mb-8">
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
                    <p
                      className="text-[1.8rem] sm:text-[2.2rem] lg:text-[2.6rem] text-[#165DFF] leading-none"
                      style={{ fontFamily: SERIF }}
                    >
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
        <span className="absolute top-[18%] left-[-2%] text-[6rem] sm:text-[8rem] lg:text-[10rem] font-extrabold uppercase text-[#165DFF]/[0.03] leading-none select-none pointer-events-none" style={{ fontFamily: SERIF }}>
          Mission
        </span>
        {/* Faint large "VISION" text — right */}
        <span className="absolute bottom-[18%] right-[-2%] text-[6rem] sm:text-[8rem] lg:text-[10rem] font-extrabold uppercase text-[#165DFF]/[0.03] leading-none select-none pointer-events-none text-right" style={{ fontFamily: SERIF }}>
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
          <h2
            className="text-[2rem] sm:text-[2.6rem] lg:text-[3.2rem] text-[#0A1E4F]"
            style={{ fontFamily: SERIF }}
          >
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

          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-10 md:gap-0 items-center">
            {/* Mission — Left */}
            <motion.div {...fade(0.1)} className="text-left">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#165DFF] mb-4">
                Mission
              </p>
              <h3
                className="text-[1.8rem] sm:text-[2.2rem] lg:text-[2.6rem] text-[#0A1E4F] leading-[1.1] mb-6"
                style={{ fontFamily: SERIF }}
              >
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
            <motion.div {...fade(0.2)} className="text-left md:text-right">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#165DFF] mb-4">
                Vision
              </p>
              <h3
                className="text-[1.8rem] sm:text-[2.2rem] lg:text-[2.6rem] text-[#0A1E4F] leading-[1.1] mb-6"
                style={{ fontFamily: SERIF }}
              >
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
          <h2
            className="text-[2.4rem] sm:text-[3rem] lg:text-[3.8rem] text-[#0A1E4F] mb-3"
            style={{ fontFamily: SERIF }}
          >
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
                    className="text-[3.2rem] md:text-[3.8rem] text-[#165DFF]/[0.15] leading-none shrink-0 pt-0.5"
                    style={{ fontFamily: SERIF }}
                  >
                    {v.num}
                  </span>
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-11 h-11 rounded-full border border-[#165DFF]/20 bg-white/60 flex items-center justify-center shrink-0 mt-0.5">
                      <v.icon className="w-5 h-5 text-[#165DFF]" />
                    </div>
                    <div>
                      <h3
                        className="text-[1.2rem] md:text-[1.4rem] text-[#0A1E4F] mb-1"
                        style={{ fontFamily: SERIF }}
                      >
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
          <h2
            className="text-[2.4rem] sm:text-[3rem] lg:text-[3.8rem] text-[#0A1E4F]"
            style={{ fontFamily: SERIF }}
          >
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
              <h2
                className="text-[2rem] sm:text-[2.6rem] lg:text-[3rem] text-white leading-tight mb-6"
                style={{ fontFamily: SERIF }}
              >
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
      <OurStory />
      <MissionVision />
      <Values />
      <Approach />
      <TrustedNetwork />
      <FinalCta />
    </div>
  );
}
