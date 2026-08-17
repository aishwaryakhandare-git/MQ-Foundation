import { motion } from "framer-motion";
import { Link } from "wouter";
import Reveal from "@/components/home/Reveal";
import WaveDivider from "@/components/home/WaveDivider";
import TrustedNetwork from "@/components/home/TrustedNetwork";
import {
  Activity,
  ArrowRight,
  Check,
  ClipboardList,
  DraftingCompass,
  Eye,
  HeartHandshake,
  Play,
  RefreshCw,
  Rocket,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

/* ────────────────────────────────────────────────────────────────
   Decorative helpers
   ──────────────────────────────────────────────────────────────── */

function Dots({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <g fill="#165DFF">
        {Array.from({ length: 30 }).map((_, i) => (
          <circle key={i} cx={10 + (i % 6) * 20} cy={10 + Math.floor(i / 6) * 20} r="2.4" />
        ))}
      </g>
    </svg>
  );
}

function CurvedLines({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" className={className} fill="none" aria-hidden="true">
      <path d="M8 100a110 110 0 0 1 184 0" stroke="#165DFF" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M28 110a90 90 0 0 1 144 0" stroke="#27AE60" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M48 118a70 70 0 0 1 104 0" stroke="#F4B400" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function SportsSilhouettes({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 640 160" className={className} fill="currentColor" aria-hidden="true">
      {/* running child */}
      <g>
        <circle cx="120" cy="40" r="11" />
        <path d="M112 52l-6 34 12 4 4-26 6 22 12 3 2-12-10-14v-8l-20 7z" />
        <path d="M96 52l18 4M104 96l-4 18 10-2 2-16" />
        <path d="M96 52l18 4" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      </g>
      {/* kicking child */}
      <g>
        <circle cx="290" cy="42" r="11" />
        <path d="M282 54l-4 34 13 3 3-24 10 22 12 2-4-18-10-10v-8l-20 9z" />
        <path d="M266 56l18 3M268 94l-5 16 11-2 2-15" />
        <circle cx="352" cy="86" r="10" />
        <path d="M348 84l8-5-3 9z" fill="#000" opacity="0.85" />
      </g>
      {/* arms-up child */}
      <g>
        <circle cx="470" cy="40" r="11" />
        <path d="M462 54l-6 36 13 3 4-28 4 26 13 2 3-12-8-16-8-7z" />
        <path d="M444 48l18 8M452 96l-6 18 11-2 1-16M500 46l-18 9" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      </g>
      {/* trophy line */}
      <path d="M560 60c0 34-16 54-40 60M560 60h16v-6h-16M520 120h40M540 120v8h20v-8" stroke="currentColor" strokeWidth="6" strokeLinecap="round" fill="none" />
    </svg>
  );
}

/* ────────────────────────────────────────────────────────────────
   Process flow — What Sets Us Apart
   ──────────────────────────────────────────────────────────────── */

const PROCESS = [
  {
    icon: ClipboardList,
    title: "Needs Assessment",
    desc: "We study each school's facilities, children and goals.",
    color: "#165DFF",
    from: "#7FA8FF",
    to: "#0D3BB8",
  },
  {
    icon: DraftingCompass,
    title: "Programme Design",
    desc: "A tailored sports system built around the school.",
    color: "#27AE60",
    from: "#6FD69B",
    to: "#1E8A4C",
  },
  {
    icon: Rocket,
    title: "Implementation",
    desc: "Certified coaches deliver programmes across the week.",
    color: "#F4B400",
    from: "#FFC94D",
    to: "#C98200",
  },
  {
    icon: Activity,
    title: "Impact Measurement",
    desc: "Fitness, skill and confidence tracked transparently.",
    color: "#FF6B35",
    from: "#FF9C74",
    to: "#E24A1E",
  },
  {
    icon: RefreshCw,
    title: "Continuous Improvement",
    desc: "Programmes evolve with data, term after term.",
    color: "#8B5CF6",
    from: "#B79CFF",
    to: "#6D3FD8",
  },
];

function ProcessFlow() {
  return (
    <div className="relative">
      {/* curved connector (desktop) */}
      <svg
        className="absolute left-0 right-0 top-0 hidden lg:block w-full h-[90px] pointer-events-none"
        viewBox="0 0 500 90"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="mqf-process-line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#165DFF" />
            <stop offset="40%" stopColor="#27AE60" />
            <stop offset="70%" stopColor="#F4B400" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
        <path
          d="M50 45 C 90 8, 110 8, 150 45 C 190 82, 210 82, 250 45 C 290 8, 310 8, 350 45 C 390 82, 410 82, 450 45"
          stroke="url(#mqf-process-line)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="1 10"
          opacity="0.55"
        />
      </svg>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4 relative">
        {PROCESS.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ y: 28 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 + i * 0.16, ease: [0.22, 1, 0.36, 1] as const }}
            className="flex flex-col items-center text-center"
          >
            <div className="relative h-[90px] w-full flex items-center justify-center">
              <motion.div
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.16, ease: [0.34, 1.56, 0.64, 1] as const }}
                className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center border-4 border-white shadow-lg"
                style={{
                  background: `radial-gradient(circle at 30% 25%, ${step.from} 0%, ${step.color} 60%, ${step.to} 100%)`,
                  boxShadow: `0 14px 30px -10px ${step.color}88`,
                }}
              >
                <step.icon className="w-7 h-7 text-white" strokeWidth={2.2} />
                <span
                  className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-white flex items-center justify-center text-[10px] font-heading font-extrabold"
                  style={{ color: step.color }}
                >
                  {i + 1}
                </span>
              </motion.div>
            </div>
            <h4 className="font-heading font-bold text-[15px] text-[#0A1E4F] mt-3 leading-snug">
              {step.title}
            </h4>
            <p className="mt-1.5 text-[12.5px] leading-relaxed font-medium text-[#6B7280] hidden sm:block">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────
   Values
   ──────────────────────────────────────────────────────────────── */

const VALUES = [
  {
    icon: HeartHandshake,
    title: "Inclusion",
    desc: "Sport is for every child. We welcome different abilities, genders and backgrounds onto the same field.",
    color: "#165DFF",
    from: "#7FA8FF",
    to: "#0D3BB8",
    glow: "rgba(22,93,255,0.18)",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    desc: "We coach with honesty and measure with transparency — schools and parents always see real progress.",
    color: "#27AE60",
    from: "#6FD69B",
    to: "#1E8A4C",
    glow: "rgba(39,174,96,0.18)",
  },
  {
    icon: TrendingUp,
    title: "Impact",
    desc: "We chase outcomes that last: fitness, discipline, confidence and lifelong habits — measured and celebrated.",
    color: "#F4B400",
    from: "#FFC94D",
    to: "#C98200",
    glow: "rgba(244,180,0,0.18)",
  },
  {
    icon: Users,
    title: "Collaboration",
    desc: "We work with schools, teachers, parents and partners as true teammates — transformation happens together.",
    color: "#8B5CF6",
    from: "#B79CFF",
    to: "#6D3FD8",
    glow: "rgba(139,92,246,0.18)",
  },
];

/* ────────────────────────────────────────────────────────────────
   Section — Hero
   ──────────────────────────────────────────────────────────────── */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F3F8FF] via-white to-white pt-4 lg:pt-8 pb-16 lg:pb-20">
      <Dots className="absolute right-[8%] top-12 w-24 opacity-[0.06] pointer-events-none" />
      <CurvedLines className="absolute -left-6 top-1/3 w-40 opacity-[0.05] pointer-events-none" />

      <div className="container relative">
        <motion.div
          initial={{ y: 28 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-flex items-center justify-center gap-2.5">
            <span className="h-px w-8 bg-[#165DFF]" aria-hidden="true" />
            <p className="eyebrow !text-[#165DFF]">About Us</p>
            <span className="h-px w-8 bg-[#165DFF]" aria-hidden="true" />
          </span>
          <h1 className="heading-1 text-[#0A1E4F] mt-5">
            Building a Healthier, Stronger India{" "}
            <span className="text-gradient-blue">Through Sport</span>
          </h1>
          <p className="body-lg mt-6 max-w-xl mx-auto">
            Marcos Quay Foundation partners with schools to make structured
            sports education a right for every child — turning schoolyards
            into places where fitness, confidence and discipline are built
            together, every single day.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href="#mission"
              className="btn-primary"
            >
              Our Mission
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#story"
              className="btn-outline"
            >
              <Play className="w-4.5 h-4.5" fill="currentColor" />
              Watch Our Story
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────
   Section — Our Story
   ──────────────────────────────────────────────────────────────── */

function OurStory() {
  return (
    <section
      id="story"
      className="relative overflow-hidden bg-gradient-to-b from-white via-[#F5F9FF] to-[#EAF3FF] pb-28 lg:pb-32 scroll-mt-27"
    >
      <Dots className="absolute left-[4%] top-16 w-24 opacity-[0.05] pointer-events-none" />
      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2.5">
                <span className="h-px w-8 bg-[#165DFF]" aria-hidden="true" />
                <p className="eyebrow !text-[#165DFF]">Our Story</p>
              </span>
              <h2 className="heading-2 text-[#0A1E4F] mt-5">
                A Movement Born on School Grounds
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="body-lg mt-6">
                Marcos Quay Foundation began with a simple observation — India
                celebrates its sporting heroes, yet most school children never
                get to experience structured sport. Grounds sit idle, PE time
                goes unstructured, and potential goes undiscovered.
              </p>
              <p className="body-lg mt-5">
                Instead of building academies, we chose a harder, more lasting
                path: transforming schools themselves into centres of sporting
                excellence — with certified coaches, structured curricula, and
                programmes that run through the school week, not around it.
              </p>
              <p className="body-lg mt-5">
                Today that choice has reached 450+ schools and 50,000+ children
                across 25+ cities — proof that when schools change, communities
                change with them.
              </p>
            </Reveal>
          </div>

          <Reveal delay={150} className="relative">
            <div className="absolute -top-8 -right-8 w-64 h-64 rounded-full bg-gradient-to-br from-[#165DFF]/10 to-[#27AE60]/10 blur-2xl pointer-events-none" />
            <Dots className="absolute -left-8 -bottom-8 w-24 opacity-[0.1] pointer-events-none" />
            <div className="relative rounded-[32px] overflow-hidden border-[6px] border-white shadow-lift">
              <motion.img
                src="/images/solutions/curriculum.jpg"
                alt="A Marcos Quay Foundation coach interacting with students on a school playground"
                loading="lazy"
                initial={{ scale: 1.08 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] as const }}
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E4F]/25 via-transparent to-transparent" />
            </div>
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
              className="absolute -bottom-6 left-8 rounded-2xl bg-white/90 backdrop-blur-md border border-[#E3EEFB] shadow-soft px-5 py-4 flex items-center gap-4"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#27AE60] to-[#1E8A4C] flex items-center justify-center shrink-0 shadow-[0_10px_20px_-8px_rgba(39,174,96,0.55)]">
                <HeartHandshake className="w-5.5 h-5.5 text-white" strokeWidth={2.2} />
              </div>
              <div>
                <p className="font-heading font-extrabold text-2xl text-[#0A1E4F] leading-none">300+</p>
                <p className="text-[12px] font-semibold text-[#6B7280] mt-1">Certified Coaches</p>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────
   Section — Mission & Vision (overlapping cards)
   ──────────────────────────────────────────────────────────────── */

function MissionVision() {
  return (
    <section id="mission" className="relative bg-white scroll-mt-24">
      <div className="container relative">
        <Reveal className="relative grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 -mt-0 lg:-mt-0">
          {/* Mission */}
          <div className="group relative h-full overflow-hidden rounded-[32px] border border-[#DCEFE2] bg-gradient-to-br from-[#F2FBF5] via-white to-white p-8 sm:p-10 shadow-[0_24px_60px_-28px_rgba(39,174,96,0.35)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_34px_80px_-30px_rgba(39,174,96,0.45)]">
              <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-[#27AE60]/[0.12] blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 -right-20 w-56 h-56 rounded-full border-[14px] border-[#27AE60]/[0.05] pointer-events-none" />
              <Dots className="absolute -bottom-6 -left-6 w-28 opacity-[0.05] pointer-events-none" />
              <CurvedLines className="absolute -top-6 right-10 w-24 opacity-[0.05] pointer-events-none" />

              <div className="relative">
                <div className="flex items-center justify-between gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6FD69B] to-[#1E8A4C] flex items-center justify-center shadow-[0_16px_30px_-12px_rgba(39,174,96,0.6)] ring-8 ring-[#27AE60]/10 transition-transform duration-300 group-hover:scale-105">
                    <Target className="w-8 h-8 text-white" strokeWidth={2.1} />
                  </div>
                  <span className="hidden sm:inline-flex items-center rounded-full bg-[#27AE60]/10 px-4 py-1.5 text-[11px] font-heading font-bold uppercase tracking-wider text-[#1E8A4C]">
                    What We Do Today
                  </span>
                </div>

                <p className="eyebrow !text-[#27AE60] mt-8">Mission</p>
                <h3 className="heading-3 text-[#0A1E4F] mt-3">
                  Every child. Every school. The joy of sport.
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-[#4B5563]">
                  To ensure every child in every school experiences the
                  confidence, fitness and character that structured sport builds —
                  regardless of background or ability.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {["Confidence", "Fitness", "Character"].map((chip) => (
                    <span
                      key={chip}
                      className="inline-flex items-center gap-1.5 rounded-full bg-white border border-[#27AE60]/20 px-3.5 py-1.5 text-[12px] font-semibold text-[#1E8A4C]"
                    >
                      <Check className="w-3 h-3" strokeWidth={3} />
                      {chip}
                    </span>
                  ))}
                </div>

                <div className="mt-8 h-px bg-gradient-to-r from-[#27AE60]/30 via-[#27AE60]/10 to-transparent" />
                <p className="mt-4 text-[13px] font-semibold text-[#27AE60]">
                  One belief on every field: every child deserves a place in the game.
                </p>
              </div>
            </div>

          {/* Vision */}
          <div className="group relative h-full overflow-hidden rounded-[32px] border border-[#DCE8F7] bg-gradient-to-br from-[#F2F7FF] via-white to-white p-8 sm:p-10 shadow-[0_24px_60px_-28px_rgba(22,93,255,0.35)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_34px_80px_-30px_rgba(22,93,255,0.45)]">
              <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-[#165DFF]/[0.1] blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 -right-20 w-56 h-56 rounded-full border-[14px] border-[#165DFF]/[0.05] pointer-events-none" />
              <Dots className="absolute -bottom-6 -left-6 w-28 opacity-[0.05] pointer-events-none" />
              <CurvedLines className="absolute -top-6 right-10 w-24 opacity-[0.05] pointer-events-none" />

              <div className="relative">
                <div className="flex items-center justify-between gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7FA8FF] to-[#0D3BB8] flex items-center justify-center shadow-[0_16px_30px_-12px_rgba(22,93,255,0.6)] ring-8 ring-[#165DFF]/10 transition-transform duration-300 group-hover:scale-105">
                    <Eye className="w-8 h-8 text-white" strokeWidth={2.1} />
                  </div>
                  <span className="hidden sm:inline-flex items-center rounded-full bg-[#165DFF]/10 px-4 py-1.5 text-[11px] font-heading font-bold uppercase tracking-wider text-[#0D3BB8]">
                    Where We&apos;re Headed
                  </span>
                </div>

                <p className="eyebrow !text-[#165DFF] mt-8">Vision</p>
                <h3 className="heading-3 text-[#0A1E4F] mt-3">
                  A stronger, healthier India.
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-[#4B5563]">
                  A future where structured sports education is the norm, not the
                  exception — and every schoolyard in the country is a launchpad
                  for life.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {["Every Schoolyard", "National Reach", "Lifelong Habits"].map((chip) => (
                    <span
                      key={chip}
                      className="inline-flex items-center gap-1.5 rounded-full bg-white border border-[#165DFF]/20 px-3.5 py-1.5 text-[12px] font-semibold text-[#0D3BB8]"
                    >
                      <Check className="w-3 h-3" strokeWidth={3} />
                      {chip}
                    </span>
                  ))}
                </div>

                <div className="mt-8 h-px bg-gradient-to-r from-[#165DFF]/30 via-[#165DFF]/10 to-transparent" />
                <p className="mt-4 text-[13px] font-semibold text-[#165DFF]">
                  An India where every schoolyard is a launchpad for life.
                </p>
              </div>
            </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────
   Section — Our Values
   ──────────────────────────────────────────────────────────────── */

function Values() {
  return (
    <section className="relative overflow-hidden bg-white pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 lg:pb-24">
      <div className="container relative">
        <Reveal className="max-w-2xl mx-auto text-center">
          <p className="eyebrow justify-center text-[#27AE60] mb-4">What We Stand For</p>
          <h2 className="heading-2 text-[#0A1E4F]">Our Values</h2>
          <p className="body-lg mt-5">
            Four principles guide every session, every coach, and every school
            we partner with.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7 mt-14">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 90} className="h-full">
              <div
                className="group relative h-full rounded-[24px] bg-white border border-[#EDF1F9] p-7 transition-all duration-300 ease-out hover:-translate-y-2 hover:border-transparent"
                style={{ boxShadow: "0 10px 30px -14px rgba(20,33,61,0.12)" }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `0 26px 54px -20px ${v.glow}, 0 10px 30px -12px rgba(20,33,61,0.14)`)}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 10px 30px -14px rgba(20,33,61,0.12)")}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `radial-gradient(circle at 30% 25%, ${v.from} 0%, ${v.color} 60%, ${v.to} 100%)`, boxShadow: `0 12px 24px -10px ${v.color}aa` }}
                >
                  <v.icon className="w-7 h-7 text-white" strokeWidth={2.2} />
                </div>
                <h3 className="mt-5 font-heading font-bold text-[17px] text-[#0A1E4F]">{v.title}</h3>
                <p className="mt-2.5 text-[13.5px] leading-relaxed font-medium text-[#6B7280]">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────
   Section — Our Approach
   ──────────────────────────────────────────────────────────────── */

const APPROACH_POINTS = [
  "School-owned programmes, not one-off guest sessions",
  "Certified coaches trained in child development",
  "Outcomes parents and principals can actually see",
];

function Approach() {
  return (
    <section className="relative overflow-hidden bg-[#F2F7FF] pb-20 lg:pb-28">
      <WaveDivider fill="#FFFFFF" />
      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16 items-center">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2.5">
                <span className="h-px w-8 bg-[#165DFF]" aria-hidden="true" />
                <p className="eyebrow !text-[#165DFF]">Our Approach</p>
              </span>
              <h2 className="heading-2 text-[#0A1E4F] mt-5">What Sets Us Apart</h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="body-lg mt-6">
                We don&apos;t parachute in with tournaments and leave. We embed a
                complete, school-owned sports system — from assessment to
                continuous improvement — so excellence outlasts any single season.
              </p>
              <ul className="mt-7 space-y-4">
                {APPROACH_POINTS.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-0.5 w-6 h-6 rounded-full bg-[#27AE60]/12 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-[#27AE60]" strokeWidth={3} />
                    </span>
                    <span className="text-[15px] font-semibold text-[#1F2937]">{point}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="relative">
            <Dots className="absolute -top-10 right-0 w-20 opacity-[0.06] pointer-events-none" />
            <div className="rounded-[28px] bg-white/80 backdrop-blur-sm border border-[#E3EEFB] shadow-soft px-6 py-10 sm:px-10 sm:py-12">
              <ProcessFlow />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────
   Section — Final CTA
   ──────────────────────────────────────────────────────────────── */

function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-white pt-2 pb-16 sm:pb-24">
      <div className="container relative">
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] sm:rounded-[44px] bg-gradient-to-br from-[#0A1E4F] via-[#165DFF] to-[#1E8A4C] px-6 py-16 sm:px-12 sm:py-20 lg:px-16 lg:py-24 text-center shadow-[0_40px_90px_-30px_rgba(13,59,184,0.6)]">
            {/* soft floating gradients */}
            <motion.div
              animate={{ y: [0, -22, 0] }}
              transition={{ duration: 9, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
              className="absolute -top-28 -left-20 w-[28rem] h-[28rem] bg-[#3F7CFF]/40 rounded-full blur-3xl pointer-events-none"
            />
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 11, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
              className="absolute -bottom-32 -right-16 w-[26rem] h-[26rem] bg-[#27AE60]/30 rounded-full blur-3xl pointer-events-none"
            />
            {/* sports silhouettes */}
            <SportsSilhouettes className="absolute left-0 bottom-6 w-full h-40 text-white/[0.08] pointer-events-none" />
            {/* soft waves */}
            <svg className="absolute bottom-0 left-0 w-full h-24 opacity-[0.14] pointer-events-none" viewBox="0 0 1200 96" preserveAspectRatio="none" fill="#FFFFFF" aria-hidden="true">
              <path d="M0 64c200-28 400-28 600 0s400 28 600 0v32H0z" opacity="0.5" />
              <path d="M0 40c200 30 400 30 600 0s400-30 600 0v56H0z" opacity="0.35" />
            </svg>
            <Dots className="absolute right-[8%] top-[14%] w-24 opacity-[0.15] pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-2 text-[#FFC94D] font-heading font-bold text-[12px] sm:text-[13px] uppercase tracking-wider">
                Be Part of the Movement
              </span>
              <h2 className="heading-2 text-white mt-6">
                Stronger Schools. Healthier Children. Brighter Future.
              </h2>
              <p className="mt-5 text-white/80 text-base sm:text-lg leading-relaxed">
                Whether you run a school, lead a CSR programme, or simply want
                to give children the gift of sport — there is a place for you in
                this mission.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-white text-[#0D3BB8] font-heading font-bold px-8 py-4 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  Get Involved
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/schools"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 text-white font-heading font-bold px-8 py-4 transition-all duration-300 hover:bg-white/10 hover:border-white"
                >
                  Partner With Us
                  <HeartHandshake className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────
   Page
   ──────────────────────────────────────────────────────────────── */

export default function About() {
  return (
    <div className="min-h-screen pt-20">
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
