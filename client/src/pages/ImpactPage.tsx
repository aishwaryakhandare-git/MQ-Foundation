import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ArrowDown } from "lucide-react";
import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const fade = (delay = 0) => ({
  initial: { y: 30 },
  whileInView: { y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

/* â”€â”€â”€ Shared editorial bits â”€â”€â”€ */

function HandLine({ color = "#E31B23" }: { color?: string }) {
  return (
    <svg
      className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-3"
      viewBox="0 0 200 12"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 8 C 40 2, 72 10, 110 7 C 150 4, 182 10, 196 5"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Eyebrow({ children, center = false, tone = "dark" }: { children: ReactNode; center?: boolean; tone?: "dark" | "light" }) {
  const light = tone === "light";
  return (
    <p
      className={cn(
        "flex items-center gap-4 font-heading text-[13px] font-extrabold uppercase tracking-[0.2em]",
        light ? "text-white" : "text-[#E31B23]",
        center && "justify-center",
      )}
    >
      <span className={cn("h-px w-10", light ? "bg-white/70" : "bg-[#E31B23]")} />
      {children}
      {center && <span className={cn("h-px w-10", light ? "bg-white/70" : "bg-[#E31B23]")} />}
    </p>
  );
}

function SectionHeader({ eyebrow, children, intro }: { eyebrow: string; children: ReactNode; intro?: string }) {
  return (
    <motion.div {...fade(0)} className="mx-auto max-w-3xl text-center">
      <Eyebrow center>{eyebrow}</Eyebrow>
      <h2 className="mt-6 font-heading font-extrabold tracking-[-0.02em] text-[2.2rem] sm:text-[2.8rem] lg:text-[3.4rem] leading-[1.1] text-[#0A1E4F]">
        {children}
      </h2>
      {intro && (
        <p className="mt-7 mx-auto max-w-[560px] text-[15.5px] sm:text-[16px] leading-[1.75] text-black">
          {intro}
        </p>
      )}
    </motion.div>
  );
}

/* â”€â”€â”€ Data â”€â”€â”€ */

const STATS_STRIP = [
  { value: "14+", label: "Years of Experience" },
  { value: "128+", label: "Schools Partnered" },
  { value: "152105+", label: "Students Impacted" },
  { value: "100%", label: "Safety Compliant" },
];

const EFFECT_STAGES = [
  {
    num: "01",
    title: "Before",
    red: false,
    img: "/images/problems/inactivity.jpg",
    points: ["Limited infrastructure", "Irregular practice", "Limited coaching", "Low participation"],
  },
  {
    num: "02",
    title: "Marcos Quay Transformation",
    red: true,
    img: "/images/solutions/transformation.jpg",
    points: ["Ground development", "Structured curriculum", "Coach training", "Regular sessions"],
  },
  {
    num: "03",
    title: "After",
    red: false,
    img: "/images/Student-AfterImg.png",
    points: ["Active school grounds", "Confident students", "Consistent participation", "Better sporting pathways"],
  },
];

const PARTNER_SCHOOLS = [
  { img: "/images/School Logos/DSB.png", name: "DSB" },
  { img: "/images/School Logos/DPS School.png", name: "DPS" },
  { img: "/images/School Logos/GIS NEW LOGO.jpg", name: "GIS" },
  { img: "/images/School Logos/KES School.png", name: "KES" },
  { img: "/images/School Logos/Little Steps.png", name: "Little Steps" },
  { img: "/images/School Logos/Nahar PNG.png", name: "Nahar" },
  { img: "/images/School Logos/Redwood.png", name: "Redwood" },
  { img: "/images/School Logos/RNSIS.png", name: "RNSIS" },
  { img: "/images/School Logos/Udgam logo Rajkot.png", name: "Udgam" },
  { img: "/images/School Logos/NSIA logo.png", name: "NSIA" },
  { img: "/images/School Logos/MMIS_Logo.png", name: "MMIS" },
  { img: "/images/School Logos/Saraf World School.png", name: "Saraf World" },
  { img: "/images/School Logos/Shubham Global School.png", name: "Shubham Global" },
  { img: "/images/School Logos/Westwood.png", name: "Westwood" },
  { img: "/images/School Logos/JVM Salav.png", name: "JVM Salav" },
  { img: "/images/School Logos/Dr. Amin.png", name: "Dr. Amin" },
  { img: "/images/School Logos/Cosmo Primary Logo.png", name: "Cosmo" },
  { img: "/images/School Logos/Prarthana Vidhyala.png", name: "Prarthana" },
  { img: "/images/School Logos/Tejas.png", name: "Tejas" },
  { img: "/images/School Logos/Guru Nanak Global Academy.png", name: "Guru Nanak Global" },
  { img: "/images/School Logos/NSM School Logo.png", name: "NSM" },
  { img: "/images/School Logos/Chanderbala Modi Academy, Ankleshwar.png", name: "Chanderbala Modi" },
];

const REACH_CITIES = [
  "Mumbai",
  "Pune",
  "Nagpur",
  "Nashik",
  "Rajkot",
  "Vadodara",
  "Ankleshwar",
  "Ratnagiri",
  "Begumganj",
];

const TRANSFORM_AREAS = [
  { title: "Infrastructure", desc: "Better playing surfaces, equipment and sporting spaces." },
  { title: "Grassroots Development", desc: "Creating opportunities for children to discover and develop sporting ability." },
  { title: "Structured Programmes", desc: "Consistent sport sessions instead of occasional activity." },
  { title: "Coach Development", desc: "Skilled coaches delivering safe and purposeful training." },
  { title: "Student Participation", desc: "Making sport accessible to more children across the school." },
];

const SCOREBOARD_CARDS = [
  { label: "Health", img: "/images/Home/GrassrootPlay.jpeg", desc: "More active children and better physical fitness." },
  { label: "Confidence", img: "/images/WhySportsMatter/Image_1.jpeg", desc: "Sport gives students the confidence to participate, compete and lead." },
  { label: "Discipline", img: "/images/Home/Sports_Development.jpeg", desc: "Regular practice builds consistency, responsibility and teamwork." },
  { label: "Opportunity", img: "/images/Home/Community_Impact.jpeg", desc: "More children get the chance to discover what they can do through sport." },
];

const JOURNEY = [
  { num: "01", title: "Discover", desc: "First opportunity to experience structured sport." },
  { num: "02", title: "Participate", desc: "Regular sessions make sport part of school life." },
  { num: "03", title: "Develop", desc: "Coaching builds skills progressively." },
  { num: "04", title: "Compete", desc: "Students gain opportunities to test themselves." },
  { num: "05", title: "Grow", desc: "Sport develops confidence and life skills beyond the field." },
];

const TESTIMONIALS = [
  {
    quote:
      "Marcos Quay transformed our sports programme entirely. Our students are more active, confident and motivated than ever before.",
    name: "Rajesh Kumar",
    role: "PE Coordinator",
  },
  {
    quote:
      "The structured coaching and regular sessions have made a real difference. Sport is now a key part of our school culture.",
    name: "Anil Sharma",
    role: "Principal",
  },
  {
    quote:
      "I used to just watch other people play. Now I feel confident and I love being part of the team.",
    name: "Priya Joshi",
    role: "Student, Class 8",
  },
];

const ECOSYSTEM_VOICES = [
  {
    quote:
      "Sports and coaching build more than athletes. They build resilience. Seeing children turn hesitation on the field into confidence in life shows that true value lies in potential realized.",
    name: "Preethi Baretto",
    role: "Country CSR & Social Leader, Decathlon India",
  },
  {
    quote:
      "The Raftaar program is rooted in inclusion. It helps young athletes from rural and tribal communities access opportunities in sport while building confidence, discipline, teamwork and life skills.",
    name: "Smriti Ria Patar",
    role: "Manager â€“ CSR, Pernod Ricard India Foundation",
  },
  {
    quote:
      "Through Sports for Change, our partnership with Marcos Quay Foundation has shown how sport can create opportunity, social mobility and pathways from grassroots participation to higher competition.",
    name: "Shubham Nautiyal",
    role: "Senior Program Officer, HCL Foundation",
  },
  {
    quote:
      "Year after year, structured sport is helping children become more engaged in school, more confident in expression and more willing to take initiative.",
    name: "Inderpreet Devgun",
    role: "Associate Director â€“ SSR, KPMG",
  },
  {
    quote:
      "For many children, sport became their first safe space to express themselves, build confidence and discover courage, belonging and aspiration through every session.",
    name: "Bharti Nayak",
    role: "Associate Manager â€“ CSR, Sagility",
  },
];

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   1 Â· HERO â€” photographic editorial statement
   â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */

function Hero() {
  return (
    <section className="relative flex min-h-[640px] lg:min-h-[720px] items-center overflow-hidden bg-[#0A1E4F]">
      <img
        src="/images/Impact-HeroImg.png"
        alt="Indian school children actively playing football on a school sports ground"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Subtle navy scrim for readability over the photo */}
      <div className="absolute inset-0 bg-[#0A1E4F]/35" />

      <div className="container relative z-10">
        <motion.div {...fade(0)} className="mx-auto max-w-3xl text-center">
          <Eyebrow center tone="light">Our Impact</Eyebrow>

          <h1 className="mt-6 font-heading font-extrabold leading-none tracking-[-0.03em] text-white text-6xl sm:text-7xl lg:text-8xl">
            152105+
          </h1>
          <p className="mt-3 font-heading font-extrabold tracking-[-0.02em] text-[2rem] sm:text-[2.6rem] lg:text-[3rem] leading-[1.1] text-white">
            Students Impacted
          </p>

          <p className="mx-auto mt-7 max-w-xl text-[15.5px] sm:text-[16px] leading-[1.75] text-white/85">
            From better grounds to better coaching, Marcos Quay Foundation is
            helping schools create a more meaningful part of every
            child&apos;s education.
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-flex items-center gap-2.5 rounded-full bg-[#E31B23] px-8 py-4 font-heading font-bold text-[14.5px] text-white shadow-[0_18px_40px_-16px_rgba(227,27,35,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c8171f]"
          >
            A Stronger, More Active India
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>

      {/* Right â€” handwritten phrase */}
      <motion.div {...fade(0.15)} className="absolute bottom-10 right-10 z-10 hidden lg:block">
        <p className="font-serif text-right italic text-[1.5rem] leading-[1.35] text-white/90">
          Play
          <br />
          Learn
          <br />
          Grow
          <br />
          Belong
        </p>
        <div className="mt-3 ml-auto h-[2px] w-[70%] rounded-full bg-[#E31B23]" />
      </motion.div>
    </section>
  );
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   2 Â· WHAT WE SAW â€” storytelling opener (Sport was there. Opportunity wasn't.)
   â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */

const WAS_STEPS = [
  {
    num: "01",
    label: "Conceptualising",
    title: "Understanding the Need.",
    desc: "We assess each school's existing sports ecosystem, identify gaps in infrastructure, participation, coaching and curriculum, and create a clear sports strategy aligned with the school's goals and students' needs.",
  },
  {
    num: "02",
    label: "Curating",
    title: "Designing the Right Experience.",
    desc: "We curate age-appropriate, scientifically researched programmes, certified coaches, suitable equipment and structured curricula across sportsâ€”creating meaningful opportunities for every student to participate and progress.",
  },
  {
    num: "03",
    label: "Executing",
    title: "Turning the Plan Into Practice.",
    desc: "We bring the programme to life through consistent, timetable-driven sessions, professional coaching, infrastructure support, fitness tracking, reporting and continuous monitoringâ€”ensuring that sport becomes a sustained part of school life.",
  },
];

function WhatWeSaw() {
  return (
    <section className="relative overflow-hidden bg-white pt-12 lg:pt-16 pb-8 lg:pb-10">
      {/* Background image with overlay */}
      <div className="absolute inset-x-0 top-0 h-[95%] pointer-events-none">
        <img
          src="/images/WhatWeSaw.png"
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="h-full w-full object-cover"
        />
        
      </div>
      <div className="container relative">
        <div className="lg:ml-auto lg:max-w-[70%]">
          {/* Text â€” above the images, left-aligned */}
          <motion.div {...fade(0)}>
            <Eyebrow>What We Saw</Eyebrow>

            <h2 className="mt-3 font-heading font-extrabold tracking-[-0.02em] text-[1.9rem] sm:text-[2.3rem] lg:text-[2.8rem] leading-[1.1] text-[#0A1E4F]">
              Sport was there.{" "}
              <span className="text-[#E31B23]">Opportunity wasn&apos;t.</span>
            </h2>

            <p className="mt-3 font-heading font-semibold text-[16px] sm:text-[17px] leading-[1.6] text-[#0A1E4F] max-w-2xl">
              In many Indian schools, the children are ready to play.
            </p>
            <p className="mt-2 text-[14px] sm:text-[14.5px] leading-[1.7] text-black max-w-2xl">
              But too often the trained coaches, structured programs, suitable
              playing spaces and consistent opportunities to develop simply
              aren&apos;t there. The willingness exists â€” the system around it
              doesn&apos;t yet.
            </p>
          </motion.div>

          {/* Three process steps */}
          <motion.div {...fade(0.1)} className="mt-3 lg:mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
              {WAS_STEPS.map((step, i) => (
                <motion.div key={step.num} {...fade(0.1 + i * 0.08)}>
                  <div className="relative h-full overflow-hidden rounded-[16px] border border-[#E7EBF3] bg-white p-5 sm:p-6 shadow-[0_18px_40px_-26px_rgba(10,30,79,0.3)]">
                    <span className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#E31B23] via-[#165DFF] to-[#3F7CFF]" />
                    <div className="flex items-baseline gap-2">
                      <span className="font-heading font-extrabold text-[1.5rem] leading-none text-[#165DFF]">
                        {step.num}
                      </span>
                      <span className="font-heading font-bold uppercase tracking-[0.16em] text-[11px] text-[#E31B23]">
                        {step.label}
                      </span>
                    </div>
                    <h3 className="mt-3 font-heading font-extrabold text-[15px] sm:text-[16px] leading-snug tracking-[-0.01em] text-[#0A1E4F]">
                      {step.title}
                    </h3>
                    <div className="mt-2.5 h-px w-10 bg-gradient-to-r from-[#E31B23] to-[#165DFF]" />
                    <p className="mt-3 text-[12.5px] sm:text-[13px] leading-relaxed text-black">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Handwritten accent â€” far right */}
            <motion.div {...fade(0.35)} className="mt-6 flex justify-end">
              <div className="text-right">
                <p className="font-serif italic text-[1.25rem] sm:text-[1.4rem] leading-[1.4] text-[#0A1E4F]">
                  Same Schools.
                  <br />
                  <span className="text-[#165DFF]">Different Possibilities.</span>
                </p>
                <div className="mt-2 ml-auto h-[2px] w-[60%] rounded-full bg-[#E31B23]" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   3 Â· IMPACT BY NUMBERS â€” horizontal statistics strip
   â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */

function StatsStrip() {
  return (
    <section className="bg-white pt-16 lg:pt-24 pb-14 lg:pb-16">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-[20px] border border-[#E7EBF3] bg-[#E7EBF3]">
          {STATS_STRIP.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center justify-center gap-3 bg-white px-6 py-9 text-center"
            >
              <p className="font-heading font-extrabold tracking-[-0.02em] text-[2.5rem] sm:text-[3rem] leading-none text-[#0A1E4F]">
                {s.value}
              </p>
              <div className="h-[2px] w-7 rounded-full bg-[#E31B23]" />
              <p className="font-heading text-[11px] font-bold uppercase tracking-[0.18em] text-[#0A1E4F]">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   3 Â· THE MARCOS QUAY EFFECT â€” editorial + 3-stage flow
   â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */

function Effect() {
  return (
    <section className="bg-[#F3F7FC] py-16 lg:py-24">
      <div className="container">
        {/* Section header â€” centered */}
        <motion.div {...fade(0)} className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading font-extrabold tracking-[-0.02em] text-[2.2rem] sm:text-[2.8rem] lg:text-[3.4rem] leading-[1.1] text-[#0A1E4F]">
            The Marcos Quay{" "}
            <span className="relative inline-block text-[#E31B23]">
              Effect
              <HandLine />
            </span>
          </h2>
          <p className="mt-7 mx-auto max-w-[560px] text-[15.5px] sm:text-[16px] leading-[1.75] text-black">
            Many schools have the space for sport, but not always the structure,
            coaching or consistency needed to make it work. Marcos Quay works
            alongside schools to change that.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16">
          {/* Left â€” editorial */}
          <motion.div {...fade(0)} className="self-start lg:sticky lg:top-28">
            <h2 className="font-heading font-extrabold tracking-[-0.02em] text-[2rem] sm:text-[2.5rem] lg:text-[2.9rem] leading-[1.12] text-[#0A1E4F]">
              From limited opportunity
              <br />
              to{" "}
              <span className="relative inline-block text-[#E31B23]">
                a culture of sport.
                <HandLine />
              </span>
            </h2>
            <p className="mt-6 max-w-[500px] text-[15.5px] sm:text-[16px] leading-[1.75] text-black">
              We assess each school, set up what&apos;s missing, train the
              people and keep the momentum going â€” so the ground stays active
              long after we leave.
            </p>

            <div className="mt-9 grid grid-cols-3 gap-3">
              {STATS_STRIP.slice(0, 3).map((s) => (
                <div
                  key={s.label}
                  className="rounded-[14px] border border-[#E7EBF3] bg-white px-3 py-4 text-center"
                >
                  <p className="font-heading font-extrabold tracking-[-0.02em] text-[1.35rem] sm:text-[1.6rem] leading-none text-[#0A1E4F]">
                    {s.value}
                  </p>
                  <p className="mt-1.5 text-[9.5px] font-bold uppercase tracking-[0.14em] text-[#9AA5B8]">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right â€” image-led 3-stage transformation flow */}
          <div className="space-y-3">
            {EFFECT_STAGES.map((stage, i) => (
              <motion.div key={stage.num} {...fade(0.05 * i)}>
                <div
                  className={cn(
                    "overflow-hidden rounded-[18px] border",
                    stage.red ? "border-[#F2D3D5] bg-[#FBEEEE]" : "border-[#E7EBF3] bg-white",
                  )}
                >
                  <div className="flex flex-col sm:flex-row">
                    <div className="relative h-[180px] overflow-hidden sm:h-auto sm:w-[45%] sm:min-h-[240px] shrink-0">
                      <img
                        src={stage.img}
                        alt={stage.title}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E4F]/40 to-transparent sm:bg-gradient-to-r" />
                    </div>
                    <div className="flex-1 p-6 sm:p-7">
                      <div className="flex items-center gap-3">
                        <span className="font-heading text-[13px] font-extrabold text-[#E31B23]">
                          {stage.num}
                        </span>
                        <span className="font-heading text-[12px] font-bold uppercase tracking-[0.18em] text-[#0A1E4F]">
                          {stage.title}
                        </span>
                      </div>
                      <ul className="mt-4 grid gap-2">
                        {stage.points.map((p) => (
                          <li key={p} className="flex items-start gap-2.5 text-[14px] text-[#4A5568]">
                            <span className="mt-[8px] h-[2px] w-4 shrink-0 rounded-full bg-[#E31B23]/75" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {i < EFFECT_STAGES.length - 1 && (
                  <div className="flex justify-center py-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E7EBF3] bg-white text-[#E31B23]">
                      <ArrowDown className="h-3.5 w-3.5" />
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Full-width â€” schools & states we reach */}
        <motion.div
          {...fade(0.15)}
          className="mt-14 rounded-[24px] border border-[#E7EBF3] bg-white p-7 sm:p-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-14 items-center">
            <div>
              <Eyebrow>Schools We Work With</Eyebrow>
              <h3 className="mt-5 font-heading font-extrabold tracking-[-0.02em] text-[1.55rem] sm:text-[1.9rem] leading-[1.2] text-[#0A1E4F]">
                Real schools, real grounds â€”
                across cities and states.
              </h3>
              <p className="mt-4 text-[14.5px] leading-[1.75] text-black">
                From inner-city schools to rural campuses, Marcos Quay works in
                partnership with schools of every kind â€” building infrastructure,
                training coaches and making sport a daily habit.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {REACH_CITIES.map((city, i) => (
                  <span
                    key={city}
                    className={cn(
                      "rounded-full border px-3.5 py-1.5 font-heading text-[11px] font-bold tracking-[0.06em]",
                      i % 2 === 0
                        ? "border-[#E7EBF3] bg-[#F3F7FC] text-[#0A1E4F]"
                        : "border-[#F2D3D5] bg-[#FBEEEE] text-[#B0212C]",
                    )}
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="font-heading text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#9AA5B8]">
                Partner schools
              </p>
              <div className="mt-4 grid grid-cols-3 sm:grid-cols-4 gap-x-5 gap-y-7">
                {PARTNER_SCHOOLS.map((school) => (
                  <div key={school.name} className="flex h-12 items-center justify-center" title={school.name}>
                    <img
                      src={school.img}
                      alt={school.name}
                      loading="lazy"
                      className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   4 Â· TRANSFORMING SCHOOL GROUNDS â€” photo + transformation list
   â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */

function Grounds() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container">
        <SectionHeader eyebrow="Physical Transformation">
          What{" "}
          <span className="relative inline-block text-[#E31B23]">
            changes
            <HandLine />
          </span>{" "}
          on the ground
        </SectionHeader>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] items-center gap-12 lg:gap-16">
          {/* Left â€” photo with navy overlay */}
          <motion.div {...fade(0)} className="relative min-h-[420px] lg:min-h-[560px] overflow-hidden rounded-[18px]">
            <img
              src="/images/Home/Community_Impact.jpeg"
              alt="Students playing on a transformed school football ground"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0A1E4F]/95 via-[#0A1E4F]/70 to-transparent px-8 pt-16 pb-8">
              <div className="h-[3px] w-9 rounded-full bg-[#E31B23]" />
              <p className="mt-4 max-w-[340px] font-heading font-bold tracking-[-0.01em] text-[1.45rem] sm:text-[1.7rem] leading-[1.3] text-white">
                Turning school grounds into places to play.
              </p>
              <p className="mt-5 font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-white/85">
                Better Schools.
                <br />
                Brighter Futures.
              </p>
            </div>
          </motion.div>

          {/* Right â€” transformation list */}
          <motion.div {...fade(0.1)}>
            <div>
              {TRANSFORM_AREAS.map((area, i) => (
                <div
                  key={area.title}
                  className={cn("flex items-start gap-5 py-6", i > 0 && "border-t border-[#E7EBF3]")}
                >
                  <div className="mt-1.5 h-[3px] w-6 shrink-0 rounded-full bg-[#E31B23]" />
                  <div>
                    <h3 className="font-heading text-[13px] font-bold uppercase tracking-[0.16em] text-[#0A1E4F]">
                      {area.title}
                    </h3>
                    <p className="mt-1.5 text-[14.5px] leading-[1.7] text-black">
                      {area.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   6 Â· IMPACT BEYOND THE SCOREBOARD â€” editorial + image cards
   â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */

function Scoreboard() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Beyond the Scoreboard"
          intro="Sport shapes healthier, happier and more confident children. The benefits last a lifetime."
        >
          The impact goes
          <br />
          beyond{" "}
          <span className="relative inline-block text-[#E31B23]">
            the scoreboard.
            <HandLine />
          </span>
        </SectionHeader>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SCOREBOARD_CARDS.map((card, i) => (
            <motion.div
              key={card.label}
              {...fade(0.06 * i)}
              className="overflow-hidden rounded-[16px] border border-[#E7EBF3] bg-white"
            >
              <div className="relative h-40 sm:h-44 overflow-hidden">
                <img src={card.img} alt={card.label} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2.5">
                  <span className="h-[3px] w-5 rounded-full bg-[#E31B23]" />
                  <h3 className="font-heading text-[12px] font-bold uppercase tracking-[0.18em] text-[#0A1E4F]">
                    {card.label}
                  </h3>
                </div>
                <p className="mt-2.5 text-[14px] leading-[1.7] text-black">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   7 Â· THE STUDENT JOURNEY â€” five-step horizontal flow
   â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */

function Journey() {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24">
      {/* Background image with overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/images/TheStudentJourney.png"
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="h-full w-full object-cover"
        />
        
      </div>
      <div className="container relative">
        <SectionHeader
          eyebrow="The Student Journey"
          intro="A structured journey that helps every child find their potential through sport."
        >
          From first play
          <br />
          to a brighter tomorrow.
        </SectionHeader>

        <div className="relative mt-16 lg:mt-20">
          {/* Connecting line */}
          <div className="absolute top-[26px] left-[9%] right-[9%] hidden h-px bg-[#C9D6F0] lg:block" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6">
            {JOURNEY.map((step, i) => (
              <motion.div
                key={step.num}
                {...fade(0.06 * i)}
                className="relative flex flex-col items-center px-2 text-center"
              >
                <span className="relative z-10 mt-[20px] hidden h-[14px] w-[14px] rounded-full border-2 border-[#E31B23] bg-white lg:block" />
                <p className="mt-0 font-heading text-[15px] font-extrabold text-[#E31B23] lg:mt-6">
                  {step.num}
                </p>
                <h3 className="mt-2 font-heading text-[1.05rem] font-bold text-[#0A1E4F]">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-[210px] text-[13.5px] leading-[1.7] text-black">
                  {step.desc}
                </p>

                {i < JOURNEY.length - 1 && (
                  <span className="absolute top-[21px] -right-[26px] z-10 hidden text-[#E31B23] lg:flex">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   8 Â· OUTCOMES â€” tabs + metric card
   â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */

const OUTCOME_TABS = [
  "Health and Well-Being",
  "Educational Outcomes",
  "Gender Equity and Participation",
  "Sporting Excellence",
];

const OUTCOME_CONTENT = [
  {
    heading: "Where Movement Shapes Healthy Lives",
    copy: [
      "Structured physical education is woven into the school dayâ€”not as an occasional activity, but as consistent, timetable-driven practice with certified coaches, modern playing surfaces, and fitness tracking. Every session helps children build physical literacy and participate confidently in sport.",
      "Regular practice improves fitness, stamina, coordination, strength, and agility, while developing confidence, discipline, teamwork, and focus. Tracking progress over time helps schools measure development and provide the right support.",
      "The result is healthier, more confident, and more active children, with habits and life skills that extend beyond the school gate.",
    ],
    metrics: [
      { value: "17%", label: "Fitness Quotient Gain", note: "Bottom Quartile" },
      { value: "52%", label: "Weekly Physical Activity Time", note: "" },
      { value: "39%", label: "Overall SEL Growth", note: "Social & Emotional Learning" },
    ],
  },
  {
    heading: "Where Sport Strengthens Learning",
    copy: [
      "Regular physical activity helps students build focus, discipline, teamwork, and problem-solving skills that support learning beyond the sports field. Structured sessions create consistent routines, encourage collaboration, and help students develop the confidence to take on challenges.",
      "As students learn to set goals, follow instructions, practise consistently, and work as a team, these habits naturally carry into the classroom. Sport also creates a positive break from academic pressure, helping students return to lessons feeling energised, focused, and ready to learn.",
      "By making sport a consistent part of school life, Marcos Quay helps create an environment where physical activity and education work together to support the whole child.",
    ],
    metrics: [
      { value: "35%", label: "Better Classroom Focus", note: "Post-session concentration" },
      { value: "18%", label: "Higher Attendance Rates", note: "" },
      { value: "28%", label: "Academic Confidence Growth", note: "" },
    ],
  },
  {
    heading: "Where Every Child Plays Equally",
    copy: [
      "Marcos Quay creates safe, inclusive sporting environments where girls and boys have equal opportunities to participate, develop their skills, and discover their potential. We make participation a regular part of school life, ensuring that every child feels welcome, supported, and confident on the field.Through girls-only and mixed sessions, female coach development, and student leadership opportunities, we help address barriers that can prevent girls from participating fully in sport. Coaches encourage equal participation, build confidence, and create positive team environments where every student has a voice.The result is a stronger sporting culture where girls and boys can play, practise, compete, and lead togetherâ€”building confidence and leadership skills that extend far beyond the playing field.",
    ],
    metrics: [
      { value: "62%", label: "Girl Participation Rate", note: "Across partner schools" },
      { value: "2Ã—", label: "More Girls in Daily Sport", note: "" },
      { value: "41%", label: "Growth in Leadership Roles", note: "Within squads" },
    ],
  },
  {
    heading: "Where Talent Is Discovered and Grown",
    copy: [
      "Marcos Quay creates structured pathways that help young athletes discover their potential, develop their skills, and progress towards competitive sport. What begins on the school field can become an opportunity to compete at higher levels.Through professional coaching, regular fixtures, talent identification, and exposure to district and state-level competitions, students gain the experience and support needed to take their abilities further.The goal is to ensure that talented children are not limited by a lack of access or opportunity, but have a credible pathway from grassroots participation to sporting excellence.",
    ],
    metrics: [
      { value: "120+", label: "Students at District Level", note: "" },
      { value: "38", label: "State-Level Selections", note: "" },
      { value: "12", label: "School Teams Competing", note: "Across sports" },
    ],
  },
];

function Outcomes() {
  const [active, setActive] = useState(0);
  const tab = OUTCOME_CONTENT[active];

  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="container">
        <SectionHeader eyebrow="Outcomes">
          What{" "}
          <span className="relative inline-block text-[#E31B23]">
            Sport Delivers
            <HandLine color="#165DFF" />
          </span>
        </SectionHeader>

        {/* Tabs â€” compact, one row, centered */}
        <motion.div
          {...fade(0.1)}
          role="tablist"
          className="mx-auto mt-8 flex max-w-[1180px] flex-wrap items-center justify-center gap-4"
        >
          {OUTCOME_TABS.map((label, i) => (
            <button
              key={label}
              type="button"
              role="tab"
              aria-selected={active === i}
              onClick={() => setActive(i)}
              className={cn(
                "flex h-[52px] lg:h-[56px] flex-1 min-w-[180px] items-center justify-center rounded-full px-6 lg:px-7 text-center font-heading text-[13px] font-bold transition-colors duration-300",
                active === i
                  ? "bg-[#165DFF] text-white shadow-[0_14px_30px_-14px_rgba(22,93,255,0.6)]"
                  : "bg-[#F4F6FB] text-[#0A1E4F] hover:bg-[#ECF0F7]",
              )}
            >
              {label}
            </button>
          ))}
        </motion.div>

        {/* Main content card */}
        <div className="mx-auto mt-6 max-w-[1280px] rounded-[24px] border border-[#E7EBF3] bg-[#FDFDFB] p-6 sm:p-9 lg:p-11 shadow-[0_24px_60px_-40px_rgba(10,30,79,0.3)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            >
              {/* Left â€” narrative */}
              <div>
                <h3 className="font-heading font-extrabold tracking-[-0.02em] text-[1.6rem] sm:text-[2rem] leading-[1.2] text-[#0A1E4F]">
                  {tab.heading}
                </h3>
                <div className="mt-4 space-y-3 text-[14.5px] leading-[1.8] text-black">
                  {tab.copy.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Right â€” 2Ã—2 metric grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {tab.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-[18px] border border-[#E7EBF3] bg-white p-5 sm:p-6 flex flex-col justify-between"
                  >
                    <p className="font-heading font-extrabold tracking-[-0.02em] text-[2.5rem] sm:text-[2.8rem] leading-none text-[#165DFF]">
                      {m.value}
                    </p>
                    <div className="mt-3">
                      <p className="font-heading text-[14px] font-bold leading-snug text-[#0A1E4F]">
                        {m.label}
                      </p>
                      {m.note && (
                        <p className="mt-0.5 text-[11px] text-[#9AA5B8]">{m.note}</p>
                      )}
                    </div>
                  </div>
                ))}

                {/* Annual report card */}
                <div className="relative overflow-hidden rounded-[18px] border border-[#E7EBF3] bg-white">
                  <img
                    src="/images/hero-sports.jpg"
                    alt="Students participating in school sport"
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E4F]/95 via-[#0A1E4F]/45 to-[#0A1E4F]/10" />
                  <div className="relative z-10 flex h-full min-h-[170px] flex-col justify-end p-5">
                    <p className="font-heading text-[10px] font-bold uppercase tracking-[0.18em] text-[#165DFF]">
                      Annual Impact Report
                    </p>
                    <p className="mt-1.5 font-heading text-[1.15rem] font-extrabold leading-tight text-white">
                      2025â€“26
                      <br />
                      In Review
                    </p>
                  </div>
                  <a
                    href="#"
                    className="absolute bottom-4 right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#165DFF] text-white shadow-[0_14px_28px_-12px_rgba(22,93,255,0.65)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0D3BB8]"
                    aria-label="Download Annual Impact Report"
                  >
                    <ArrowDown className="h-4.5 w-4.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

/* 
   9 Â· REAL VOICES  testimonials
    */

function Voices() {
  return (
    <section className="bg-[#F3F7FC] py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="In Their Own Words"
          intro="Hear from the people who see the impact every day â€” students, teachers, school leaders, and the partners who fund and champion our work."
        >
          Voices from the{" "}
          <span className="relative inline-block text-[#E31B23]">
            Ecosystem
            <HandLine />
          </span>
        </SectionHeader>

        <div className="mt-14">
          <div className="flex items-center gap-3">
            <span className="h-[3px] w-8 rounded-full bg-[#E31B23]" />
            <p className="font-heading text-[11px] font-bold uppercase tracking-[0.22em] text-[#0A1E4F]">
              Schools & Students
            </p>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.name}
                {...fade(0.06 * i)}
                className="flex h-full flex-col rounded-[16px] border border-[#E7EBF3] bg-white p-6 shadow-[0_10px_30px_-24px_rgba(10,30,79,0.4)]"
              >
                <span className="font-heading text-[2.2rem] font-extrabold leading-none text-[#E31B23]">â€œ</span>
                <p className="mt-2 flex-1 text-[13.5px] leading-[1.75] text-[#0A1E4F]">{t.quote}</p>
                <div className="mt-6 h-px w-8 bg-[#E7EBF3]" />
                <p className="mt-3 font-heading text-[13px] font-bold text-[#0A1E4F]">{t.name}</p>
                <p className="mt-0.5 text-[11px] uppercase tracking-[0.14em] text-[#9AA5B8]">{t.role}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 flex items-center gap-3">
            <span className="h-[3px] w-8 rounded-full bg-[#165DFF]" />
            <p className="font-heading text-[11px] font-bold uppercase tracking-[0.22em] text-[#0A1E4F]">
              Partners & Funders
            </p>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-5">
            {ECOSYSTEM_VOICES.map((t, i) => (
              <motion.div
                key={t.name}
                {...fade(0.06 * i)}
                className="flex h-full flex-col rounded-[16px] border border-[#E7EBF3] bg-white p-6 shadow-[0_10px_30px_-24px_rgba(10,30,79,0.4)]"
              >
                <span className="font-heading text-[2.2rem] font-extrabold leading-none text-[#E31B23]">â€œ</span>
                <p className="mt-2 flex-1 text-[13.5px] leading-[1.75] text-[#0A1E4F]">{t.quote}</p>
                <div className="mt-6 h-px w-8 bg-[#E7EBF3]" />
                <p className="mt-3 font-heading text-[13px] font-bold text-[#0A1E4F]">{t.name}</p>
                <p className="mt-0.5 text-[11px] uppercase tracking-[0.14em] text-[#9AA5B8]">{t.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* 
   10 · THE MARCOS QUAY DISPATCH  broadsheet digital newspaper
    */

const DISPATCH_STORY_INDEX = [
  { page: "05", category: "Schools", headline: "5 new districts join the network" },
  { page: "08", category: "People", headline: "Girls' league draws record participation" },
  { page: "12", category: "Progress", headline: "Fitness scores improve 18% in a term" },
  { page: "16", category: "In Focus", headline: "Coaches complete new certification cycle" },
  { page: "20", category: "Grounds", headline: "Two campuses turn bare ground into turf" },
  { page: "24", category: "Community", headline: "Parents' sports day packs the stands" },
];

const DOGRA = (
  <span className="font-bold text-[#1B2A4A]">
    Ms. Adita Dogra, Principal of Bombay Presidency International School
  </span>
);

const DISPATCH_ITEMS = [
  {
    tag: "Field",
    headline: "The Love for Football Is Born in the Mud",
    page: "06",
    photo: "/images/Inter-school%20Competitions.JPG",
    alt: "Kids at play on a muddy school ground",
    caption: "Where the real game begins - no fancy turf, no floodlights, just rain and a muddy ground.",
    body: (
      <>
        The World Cup is played in stadiums. The love for football is born in the mud. No fancy turf, no floodlights,
        no expensive boots - just rain, a muddy ground and kids who would rather play than stay indoors. Because this
        is where the real game begins. Tell us: what is your favourite memory of playing in the rain? Follow @marcosquay
        for more moments that prove one thing -{" "}
        <span className="font-bold text-[#1B2A4A]">Ab Sirf Dekhega Nahi, Khelega India.</span>
      </>
    ),
  },
  {
    tag: "People",
    headline: "Great Schools Are Built by Empowered Educators",
    page: "08",
    photo: "/images/solutions/multisport.jpg",
    alt: "Teachers take part in a Marcos Quay teacher engagement activity",
    caption: "Feedback from Ms. Adita Dogra, Principal of Bombay Presidency International School.",
    body: (
      <>
        Great schools are built by empowered educators. We are honored to receive encouraging feedback from{" "}
        {DOGRA}, on the Teacher Engagement Activities conducted by Marcos Quay - through collaboration, teamwork and
        fun-filled challenges that strengthen bonds, boost motivation and foster a positive school culture. Together,
        we are building stronger teams and happier learning environments.
      </>
    ),
  },
  {
    tag: "Progress",
    headline: "India Loves Watching Sports - It's Time We Love Playing Them Too",
    page: "12",
    photo: "/images/solutions/fitness.jpg",
    alt: "Young athletes push through a structured training circuit",
    caption: "Millions cheer from the sidelines - we help children step onto the field.",
    body: (
      <>
        India loves watching sports - it is time we love playing them too. Today, millions cheer from the sidelines,
        but only a small percentage step onto the field. At Marcos Quay we believe every child deserves the opportunity
        to experience the power of sport - not just as a spectator, but as a participant. Because sports don't just
        build athletes - they build{" "} 
        <span className="font-bold text-[#1B2A4A]">
          confidence, discipline, resilience, teamwork and leaders
        </span>{" "}
        for tomorrow.
      </>
    ),
  },
];

const DISPATCH_BRIEFS = [
  "Principal conclave brings 40 school heads to one table for a sports curriculum review.",
  "Inter-school athletics meet scheduled for the first Sunday of next month.",
  "Coaches complete a fresh certification cycle ahead of the new academic term.",
  "New sport-specific resource hub launched for teachers.",
  "Girls' football squad tops the district clean-sheet table after an unbeaten term.",
  "Three partner schools pilot fitness report cards sent home every term.",
];

const DISPATCH_NUMBERS = [
  { value: "21,400+", label: "Sessions Completed" },
  { value: "340", label: "Fixtures Held" },
  { value: "87", label: "Coaches Certified" },
  { value: "9", label: "Girls' Leagues Active" },
  { value: "12", label: "New Partner Schools" },
];

const DISPATCH_FEATURES = [
  {
    tag: "Football",
    headline: "More Than a Football Cup. An Opportunity to Play, Compete and Grow.",
    deck: "The MQ National Sports Day Football Cup 2026 brought 270+ young footballers from 14 schools across Mumbai onto one field.",
    photo: "/images/newsletter-success-img.jpg",
    alt: "Young footballers line up for a fixture at the MQ National Sports Day Football Cup",
    caption: "270+ young footballers from 14 schools took part in the cup.",
    body: [
      "The MQ National Sports Day Football Cup 2026 brought together more than 270 young footballers from 14 schools across Mumbai. For many, it was the first time a school fixture meant a jersey, a crowd and a final whistle - a real platform to play competitive football, contest meaningful matches and learn the values of teamwork, discipline and sportsmanship.",
      "In the boys' category, Cosmopolitan School (SSC) lifted the trophy, with Nahar International School as runners-up. The girls' category was won by AVM School, Bandra West, with Nanavati School finishing second. Every squad left with a season's worth of lessons and a reason to return to practice.",
      "A highlight of the day was Siya Sawant, international sprinter and an athlete who represented India at the Under-12 Championship in Peru, joining as Guest of Honour. Her journey of dedication, opportunity and consistent effort reminded young athletes what disciplined practice can build.",
      "Special appreciation went to Ishaan Shahane and Raju Singh for planning and executing the entire cup. At Marcos Quay, we believe every child deserves the chance to step onto the field, compete, learn and discover their potential.",
    ],
    pull: "One Goal - Ab Sirf Dekhega Nahi, Khelega India.",
    inspire:
      "We believe every child deserves the chance to play, compete and discover their own potential.",
    stat: { value: "270+", label: "Footballers from 14 Schools" },
  },
  {
    tag: "Girls' Football",
    headline: "Subroto Cup Runners-Up: Westwood Girls' Team Rides a Momentous Run",
    deck: "Two commanding wins, one unforgettable campaign - Westwood's girls' football team takes its journey to the national stage.",
    photo: "/images/Newsletter-success_2.jpg",
    alt: "Westwood Girls' football team celebrating their Subroto Cup runners-up finish",
    caption: "Westwood Girls' Football Team - runners-up at the Subroto Cup.",
    body: [
      "What a journey it has been for the Westwood Girls' Football Team. At the Subroto Cup, the side powered past Christ 1-0 and then swept Saint Paul 4-0 - a run built on courage, discipline and the kind of teamwork champions are made of.",
      "A narrow, hard-fought win followed by a statement victory: every match reflected an unbreakable fighting spirit. Finishing as runners-up is a testament to the hard work of every player, coach and supporter who believed from the first whistle.",
      "For the team, this is not the end - it is the beginning of even greater victories. Congratulations, champions.",
    ],
    pull: "This is not the end - it is the beginning of even greater victories.",
    inspire:
      "Courage, discipline, teamwork and an unbreakable fighting spirit - that is what champions are made of.",
    stat: { value: "4-0", label: "Win vs Saint Paul" },
  },
  {
    tag: "Commonwealth Games",
    headline: "India Shines at Commonwealth Games 2026",
    deck: "13 gold medals and countless moments of pride - India finishes fourth among 74 nations with 39 medals.",
    photo: "/images/Newsletter-success-3.jpg",
    alt: "Athletes competing on a sports ground as India shines at the Commonwealth Games",
    caption: "From the ring to the mat, from the track to the platform - India conquered.",
    body: [
      "India finished fourth among 74 nations at the Commonwealth Games 2026, with 13 gold, 17 silver and 9 bronze medals - 39 in all - and countless moments of pride. From the boxing ring to the judo mat, from the track to the platform, a new generation of athletes announced itself.",
      "Boxing led the charge with seven golds - Sakshi Chaudhary (51 kg), Preeti Pawar (54 kg), Jaismine Lamboria (57 kg), Priya Ghanghas (60 kg), Arundhati Choudhary (70 kg), Sachin Siwach and Ankush Panghal. Mirabai Chanu added gold in weightlifting, Asmita Dey and Harsh Singh in judo, Sharmila Dhankar and Dilip Gavit in athletics and para-athletics, and Soman Rana in para-sports.",
      "The Games confirmed a shift as much as a medal tally - five golds in the men's events, eight in the women's, across thirteen sports. Champions don't just inspire us to watch; they inspire us to play. Every medal is an invitation for every child to step onto the field, dream bigger and believe in the power of sport.",
    ],
    pull: "From the ring to the mat, from the track to the platform - our athletes didn't just compete, they conquered.",
    inspire:
      "Champions don't just inspire us to watch - they inspire us to play. Ab Sirf Dekhega Nahi, Khelega India.",
    stat: { value: "39", label: "Medals at CWG 2026" },
  },
];

const NEWSPAPER = {
  paper: "#F5F0E4",
  sheet: "#FBF8EE",
  ink: "#221C17",
  navy: "#1B2A4A",
  red: "#E31B23",
  muted: "#5C544A",
  hairline: "rgba(34,28,23,0.18)",
};

const PAPER_GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.45 0'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)'/%3E%3C/svg%3E\")";

function Newsletter() {
  return (
    <section id="dispatch" className="relative overflow-hidden bg-white scroll-mt-24 pt-24 lg:pt-28 pb-20 lg:pb-32">
      <div className="relative mx-auto w-full max-w-[1320px] px-4 sm:px-6">
        <motion.div
          {...fade(0.05)}
          className="relative overflow-hidden border border-[#C5C2BA] text-[18px]"
          style={{
            backgroundColor: NEWSPAPER.sheet,
            color: NEWSPAPER.ink,
            boxShadow:
              "inset 0 0 0 1px rgba(125,125,125,0.14), inset 0 0 28px 7px rgba(125,125,125,0.05), 0 1px 0 rgba(34,28,23,0.25), 0 1px 2px rgba(34,28,23,0.12), 0 30px 80px -40px rgba(34,28,23,0.6)",
          }}
        >
          {/* Ink blot + sheet grain on the paper itself */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.045]"
            style={{ backgroundImage: PAPER_GRAIN, backgroundRepeat: "repeat", backgroundSize: "120px 120px" }}
          />

          {/* 
              MASTHEAD
           */}
          <div className="relative px-6 pt-6 sm:px-10 sm:pt-7">
            {/* Handwritten accent, top-right */}
            <p
                className="absolute right-6 top-3 -rotate-3 font-script text-xl font-bold text-[#E31B23] sm:right-9 sm:text-2xl"
              >
                More Than Sport
              </p>

            <p className="text-center text-[8px] font-bold uppercase tracking-[0.4em] text-[#1B2A4A] sm:text-[9px]">
              Schools &nbsp;·&nbsp; Sport &nbsp;·&nbsp; Communities
            </p>

            <h3
              className="mt-2.5 text-center font-masthead font-black uppercase leading-[0.95] tracking-[-0.01em] text-[#221C17]"
              style={{ fontSize: "clamp(2rem, 5.4vw, 3.75rem)" }}
            >
              The{" "}
              <span className="text-[#E31B23]">Marcos</span>{" "}
              <span className="text-[#165DFF]">Quay</span>{" "}
              Dispatch
            </h3>

            <div className="mt-3 border-y-2 border-[#221C17]">
              <div className="grid grid-cols-1 items-center gap-y-1 border-b border-[#221C17]/40 py-1.5 text-[7.5px] font-bold uppercase tracking-[0.14em] text-[#221C17]/80 sm:grid-cols-3 sm:text-[8.5px]">
                <span className="text-center sm:text-left">Vol. VII &nbsp;|&nbsp; No. 9</span>
                <span className="hidden text-center sm:block">
                  A monthly briefing from the field  written like the news it is
                </span>
                <span className="text-center sm:text-right sm:border-l sm:border-[#221C17]/30">
                  September 2026
                </span>
              </div>
            </div>
          </div>

          {/* 
              TOP STORY INDEX
           */}
          <div className="relative px-6 pt-4 sm:px-10 sm:pt-5">
            <p className="text-[8px] font-bold uppercase tracking-[0.32em] text-[#E31B23]">
              Inside This Edition
            </p>
            <div className="mt-2 grid grid-cols-1 border border-[#221C17]/30 sm:grid-cols-2 lg:grid-cols-6">
              {DISPATCH_STORY_INDEX.map((item, i) => (
                <div
                  key={item.page}
                  className={cn(
                    "flex items-baseline gap-3 px-4 py-2.5",
                    i > 0 && "border-t border-[#221C17]/25",
                    i === 1 && "sm:border-t-0",
                    i % 2 === 1 && "sm:border-l sm:border-[#221C17]/25",
                    i > 0 && "lg:border-t-0",
                    i > 0 && "lg:border-l lg:border-[#221C17]/25",
                  )}
                >
                  <span className="font-masthead text-xl font-black leading-none text-[#E31B23]">
                    {item.page}
                  </span>
                  <span className="flex flex-col leading-tight">
                    <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#1B2A4A]">
                      {item.category}
                    </span>
                    <span className="mt-0.5 font-newspaper text-[11.5px] italic leading-snug text-[#221C17]/85">
                      {item.headline}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
              LEAD STORY (55 / 45)
          â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
          <div className="relative px-6 pt-6 sm:px-10">
            <div className="grid grid-cols-1 gap-7 md:grid-cols-[1.55fr_1fr] md:gap-10">

              {/* Article column */}
              <div>
                <div className="flex items-center gap-3">
                  <span className="bg-[#E31B23] px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.26em] text-[#FBF8EE]">
                    Front Page
                  </span>
                  <span className="h-px flex-1 bg-[#E31B23]/50" />
                </div>

                <h4
                  className="mt-4 font-masthead font-black leading-[1.06] tracking-[-0.01em] text-[#221C17]"
                  style={{ fontSize: "clamp(1.6rem, 3.8vw, 2.5rem)" }}
                >
                  An Award Night Caps a Decade of Quiet, Persistent Work
                </h4>

                <p className="mt-3 border-l-2 border-[#E31B23]/50 pl-3 font-newspaper text-[14.5px] italic leading-[1.6] text-[#4C433A]">
                  Marcos Quay Foundation honoured with the &ldquo;Persistent
                  Commitment to Indian Sports&rdquo; award at the IAMGAME
                  Sports Awards 2026 &mdash; recognition of years of
                  consistency, investment and belief in grassroots sport.
                </p>

                <p className="mt-3 text-[8.5px] font-bold uppercase tracking-[0.26em] text-[#221C17]/75">
                  From the Newsroom
                </p>

                {/* Body copy -- printed columns with drop cap */}
                <div
                  className="mt-4 text-justify font-newspaper text-[14.5px] leading-[1.75] text-[#2A241F] md:[column-count:2] [column-gap:2.4rem] md:[column-rule:1px_solid_rgba(34,28,23,0.2)]"
                >
                  <p className="[&:first-letter]:float-left [&:first-letter]:mt-1 [&:first-letter]:mr-2 [&:first-letter]:font-masthead [&:first-letter]:text-[2.9rem] [&:first-letter]:font-black [&:first-letter]:leading-[0.72] [&:first-letter]:text-[#E31B23]">
                    The stage at the IAMGAME Sports Awards 2026 fell quiet for
                    a moment, and then the name followed: Marcos Quay
                    Foundation, recognised for &ldquo;Persistent Commitment to
                    Indian Sports&rdquo;. It is a proud moment for the
                    organisation &mdash; and a recognition that belongs to
                    every coach, every partner school and every young athlete
                    who has shown up, term after term, ground after ground.
                  </p>
                  <p className="mt-2.5">
                    This award is more than a trophy on a shelf. It is a
                    celebration of years of consistency, commitment and
                    investment towards strengthening India&rsquo;s sporting
                    ecosystem &mdash; from empowering coaches and schools to
                    creating opportunities for young athletes across the
                    country.
                  </p>
                  <p className="mt-2.5">
                    The journey has always been driven by a single belief:
                    &ldquo;Ab Sirf Dekhega Nahi, Khelega India.&rdquo;
                    Not just watching &mdash; playing. That is the ground on
                    which the foundation has built infrastructure, trained
                    coaches and made sport a fixed part of the school week.
                  </p>
                  <p className="mt-2.5">
                    A heartfelt thank you goes out to the entire MQ family, the
                    school partners, the coaches, the athletes and everyone who
                    continues to believe in the vision. The journey continues.
                    The commitment remains. The impact grows.
                  </p>
                </div>

                <p className="mt-4 border-t border-[#221C17]/25 pt-2 text-[8.5px] font-bold uppercase tracking-[0.2em] text-[#5C544A]">
                  Continued on Page 05 &mdash; &ldquo;From One School Ground to the Podium&rdquo; &middot; 01
                </p>
              </div>

              {/* Photo column */}
              <div>
                <div className="border border-[#221C17]/35">
                  <img
                    src="/images/award-linkedin.jpg"
                    alt="A coach guiding students through a structured morning session on a school sports field"
                    loading="lazy"
                    className="w-full object-cover"
                    style={{ aspectRatio: "1 / 1" }}
                  />
                </div>
                <p className="mt-2 text-[10px] italic leading-snug text-[#5C544A]">
                  Marcos Quay Foundation takes the stage at the IAMGAME Sports
                  Awards 2026 &mdash; honoured for &ldquo;Persistent
                  Commitment to Indian Sports&rdquo;.
                </p>
                <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.2em] text-[#221C17]/50">
                  Photo by the Field Desk
                </p>

                {/* Small boxed note */}
                <div className="mt-5 border-y border-[#221C17]/40 py-3 text-center">
                  <p className="font-masthead text-[15px] font-black text-[#1B2A4A]">
                    Ab Sirf Dekhega Nahi,
                    <br />
                    Khelega India.
                  </p>
                  <p className="mt-1 text-[8px] uppercase tracking-[0.24em] text-[#5C544A]">
                    From the Founder&rsquo;s Desk
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
              SUPPORTING STORIES + IN BRIEF
          â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
          <div className="relative mt-6 border-t-2 border-[#221C17] px-6 pt-5 sm:px-10">
            <div className="grid grid-cols-1 gap-7 md:grid-cols-[1fr_1fr_1fr_0.85fr] md:gap-0 md:divide-x md:divide-[#221C17]/20">

              {DISPATCH_ITEMS.map((item, i) => (
                <article
                  key={item.headline}
                  id={`dispatch-${item.tag.toLowerCase()}`}
                  className={cn(
                    "scroll-mt-24",
                    i === 0 ? "md:pr-6" : "md:pl-6 md:pr-6",
                  )}
                >
                  <p className="text-[8px] font-bold uppercase tracking-[0.28em] text-[#E31B23]">
                    {item.tag}
                  </p>
                  <h5 className="mt-2 font-masthead text-[18px] font-black leading-[1.1] text-[#221C17]">
                    {item.headline}
                  </h5>

                  <div className="mt-3 border border-[#221C17]/30">
                    <img
                      src={item.photo}
                      alt={item.alt}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </div>
                  <p className="mt-1.5 text-[9.5px] italic leading-snug text-[#5C544A]">
                    {item.caption}
                  </p>

                  <p className="mt-3 text-justify font-newspaper text-[13.5px] leading-[1.65] text-[#2A241F]">
                    {item.body}
                  </p>

                  <p className="mt-3 text-[8.5px] font-bold uppercase tracking-[0.2em] text-[#1B2A4A]">
                    Page {item.page} ’
                  </p>
                </article>
              ))}

              {/* IN BRIEF sidebar */}
                  <aside className="mt-8 md:mt-0 md:pl-6 md:pr-11">
                <p className="bg-[#E31B23] px-2.5 py-1 inline-block text-[8px] font-bold uppercase tracking-[0.26em] text-[#FBF8EE]">
                  In Brief
                </p>
                <ul className="mt-3">
                  {DISPATCH_BRIEFS.map((b, i) => (
                    <li
                      key={b}
                      className="border-b border-[#221C17]/20 py-3 first:pt-0 last:border-b-0 last:pb-0"
                    >
                      <span className="font-masthead text-[13px] font-black text-[#E31B23]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="mt-1 font-newspaper text-[12px] italic leading-[1.6] text-[#3A332C]">
                        {b}
                      </p>
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
          </div>

          {/* PAGE TWO — the term in numbers + success stories */}
          <div className="relative mt-6 border-t-2 border-[#221C17] px-6 pt-6 sm:px-10">
            <div className="flex items-center gap-3">
              <span className="bg-[#1B2A4A] px-2.5 py-1 text-[8.5px] font-bold uppercase tracking-[0.26em] text-[#FBF8EE]">
                Page Two
              </span>
              <span className="h-px flex-1 bg-[#221C17]/40" />
              <span className="text-[8.5px] font-bold uppercase tracking-[0.3em] text-[#1B2A4A]">
                Success Stories
              </span>
            </div>

            {/* By the numbers */}
            <div className="mt-4 border border-[#221C17]/35 bg-[#F1EBDC]/60">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 lg:divide-x lg:divide-[#221C17]/20">
                {DISPATCH_NUMBERS.map((n) => (
                  <div key={n.label} className="px-5 py-5 text-center">
                    <p className="font-masthead text-[1.9rem] font-black leading-none text-[#1B2A4A]">
                      {n.value}
                    </p>
                    <p className="mt-1.5 text-[8px] font-bold uppercase tracking-[0.22em] text-[#5C544A]">
                      {n.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Feature stories */}
            <div className="mt-6 grid grid-cols-1 gap-10">
              {DISPATCH_FEATURES.map((f) => (
                <article
                  key={f.headline}
                  id={`feature-${f.tag.toLowerCase().replace(/\s+/g, "-")}`}
                  className="scroll-mt-24 grid grid-cols-1 gap-7 md:grid-cols-[1.35fr_1fr] md:gap-10"
                >
                  <div>
                    <p className="text-[8px] font-bold uppercase tracking-[0.28em] text-[#E31B23]">
                      {f.tag}
                    </p>
                    <h5 className="mt-2 font-masthead text-[22px] font-black leading-[1.08] tracking-[-0.01em] text-[#221C17] md:text-[26px]">
                      {f.headline}
                    </h5>
                    <p className="mt-2.5 border-l-2 border-[#E31B23]/50 pl-3 font-newspaper text-[14px] italic leading-[1.6] text-[#4C433A]">
                      {f.deck}
                    </p>
                    <div className="mt-4 text-justify font-newspaper text-[13.5px] leading-[1.72] text-[#2A241F] md:[column-count:2] md:[column-gap:2rem] md:[column-rule:1px_solid_rgba(34,28,23,0.2)]">
                      {f.body.map((para) => (
                        <p
                          key={para.slice(0, 32)}
                          className="[&:not(:first-child)]:mt-2.5"
                        >
                          {para}
                        </p>
                      ))}
                    </div>
                    <blockquote className="mt-4 border-l-2 border-[#165DFF]/60 pl-4">
                      <p className="font-masthead text-[16px] font-bold italic leading-[1.35] text-[#1B2A4A]">
                        {f.pull}
                      </p>
                    </blockquote>
                    <div className="mt-5 border border-[#E31B23]/35 bg-[#FBEEEE] px-5 py-4">
                      <p className="text-[8px] font-bold uppercase tracking-[0.28em] text-[#E31B23]">
                        In Their Words
                      </p>
                      <p className="mt-2 font-masthead text-[17px] font-bold italic leading-[1.32] text-[#1B2A4A]">
                        &ldquo;{f.inspire}&rdquo;
                      </p>
                    </div>
                  </div>

                  <div className="h-full">
                    <div className="border border-[#221C17]/35">
                      <img
                        src={f.photo}
                        alt={f.alt}
                        loading="lazy"
                        className="aspect-[4/3] w-full object-cover"
                      />
                    </div>
                    <p className="mt-2 text-[10px] italic leading-snug text-[#5C544A]">
                      {f.caption}
                    </p>
                    <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.2em] text-[#221C17]/50">
                      Photo by the Field Desk
                    </p>
                    <div className="mt-4 bg-[#1B2A4A] p-5 text-center">
                      <p className="font-masthead text-[2rem] font-black leading-none text-white">
                        {f.stat.value}
                      </p>
                      <p className="mt-2 text-[8px] font-bold uppercase tracking-[0.24em] text-[#C8D6FF]">
                        {f.stat.label}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
              VOICES FROM THE FIELD + NEXT EDITION
          â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
          <div className="relative mt-6 border-t-2 border-[#221C17] px-6 pt-6 pb-8 sm:px-10">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.5fr_1fr] md:gap-10">

              {/* VOICES */}
              <div className="relative md:pr-8">
                <p className="text-[8.5px] font-bold uppercase tracking-[0.3em] text-[#E31B23]">
                  Voices From the Field
                </p>

                <div className="relative mt-4">
                  
                  <div className="np-photo">
                    <img
                      src="/images/Inter-school Competitions.JPG"
                      alt="Students and coaches on a partner school ground"
                      loading="lazy"
                      className="grayscale w-full object-cover opacity-70"
                      style={{ aspectRatio: "16 / 5", objectPosition: "50% 30%" }}
                    />
                  </div>
                  <p className="mt-4 font-masthead text-[1.35rem] font-black leading-[1.2] text-[#221C17] sm:text-[1.55rem]">
                    Sport has brought a new energy to our school. The students
                    are more confident, more focused and genuinely happier.
                  </p>
                  <p className="mt-4 border-t border-[#221C17]/25 pt-2.5 text-[8.5px] font-bold uppercase tracking-[0.24em] text-[#5C544A]">
                    ” School Principal · Partner School, Gujarat
                  </p>
                </div>
              </div>

              {/* NEXT EDITION panel */}
              <div className="flex flex-col justify-between gap-6 border border-[#1B2A4A]/35 bg-[#E7EEF7] p-7 text-[#1B2A4A] sm:flex-row md:flex-col">
                <div>
                  <p className="inline-block border-b border-[#1B2A4A]/40 pb-1 text-[9px] font-bold uppercase tracking-[0.3em]">
                    Next Edition
                  </p>
                  <p className="mt-5 font-masthead text-[2.6rem] font-black leading-none tracking-[-0.01em]">
                    1 Oct 2026
                  </p>
                  <p className="mt-4 font-newspaper text-[13px] italic leading-[1.6] text-[#1B2A4A]/80">
                    A monthly, newspaper-style briefing from the field.
                    New edition on the first of every month.
                  </p>
                </div>

                {/* Arrow/rule towards the next edition */}
                <div className="flex items-center gap-3 text-[#E31B23]">
                  <span className="h-px flex-1 bg-[#E31B23]/60 min-w-[24px]" />
                  
                </div>
              </div>
            </div>

            {/* 
                STAY CONNECTED â€” editorial subscription
             */}
            <div className="mt-8 border border-[#221C17]/35 px-6 py-5 sm:px-8">
              <div className="grid grid-cols-1 items-center gap-5 sm:grid-cols-[1fr_auto]">
                <div>
                  <p className="text-[8.5px] font-bold uppercase tracking-[0.3em] text-[#E31B23]">
                    Stay Connected
                  </p>
                  <p className="mt-1.5 font-newspaper text-[14px] italic text-[#2A241F]">
                    Get the latest updates, stories and opportunities from Marcos Quay.
                  </p>
                </div>

                <button
                  type="button"
                  className="group inline-flex items-center gap-3 border-2 border-[#221C17] bg-[#221C17] px-6 py-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[#FBF8EE] transition-colors hover:bg-[#E31B23] hover:border-[#E31B23]"
                >
                  Subscribe Now
                  
                </button>
              </div>
            </div>
          </div>

          {/* 
              FOOTER / COLOPHON
           */}
          <div className="relative border-t-2 border-[#221C17] px-6 py-4 sm:px-10">
            <div className="grid grid-cols-1 items-center gap-y-1.5 text-center text-[7.5px] font-bold uppercase tracking-[0.22em] text-[#5C544A] sm:grid-cols-3 sm:text-[8.5px]">
              <span className="sm:text-left">Marcos Quay Foundation</span>
              <span className="sm:border-x sm:border-[#221C17]/25">
                Printed Monthly · Set in Newsreader & Playfair
              </span>
              <span className="sm:text-right">September 2026 · – 9</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* 
   PAGE
    */

/*  Impact numbers hero  */

const IMPACT_HERO_STATS = [
  { value: "14+", label: "Years of Experience" },
  { value: "128+", label: "Schools Partnered" },
  { value: "152105+", label: "Students Impacted" },
  { value: "100%", label: "Safety Compliant" },
];

function ImpactHero() {
  return (
    <section className="relative overflow-hidden bg-[#0A1E4F] py-16 lg:py-20">
      {/* faint grain + glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: PAPER_GRAIN, backgroundRepeat: "repeat", backgroundSize: "120px 120px" }}
      />
      <div className="pointer-events-none absolute -right-32 -top-40 h-[420px] w-[420px] rounded-full bg-[#165DFF]/25 blur-[120px]" />
      <div className="pointer-events-none absolute -left-32 -bottom-40 h-[420px] w-[420px] rounded-full bg-[#E31B23]/25 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-[1320px] px-4 sm:px-6">
        <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center">
          <p className="font-heading text-[11px] font-extrabold uppercase tracking-[0.26em] text-[#FF8A8F]">
            The Marcos Quay Effect in Numbers
          </p>
          <h2 className="mt-3 font-masthead font-black uppercase leading-[0.95] tracking-[-0.01em] text-white">
            Impact that Speaks for Itself
          </h2>
        </motion.div>

        <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-[22px] border border-white/10 bg-white/10 lg:grid-cols-4">
          {IMPACT_HERO_STATS.map((s, i) => (
            <motion.div
              key={s.label}
              {...fade(0.08 + i * 0.06)}
              className="flex flex-col items-center justify-center gap-3 bg-[#0A1E4F] px-6 py-10 text-center"
            >
              <p className="font-heading font-black tracking-[-0.03em] text-[2.8rem] sm:text-[3.4rem] leading-none text-white tabular-nums">
                {s.value}
              </p>
              <div className="h-[2px] w-7 rounded-full bg-[#E31B23]" />
              <p className="font-heading text-[10.5px] font-bold uppercase tracking-[0.16em] text-[#C8D6FF]">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ImpactNumbersHero() {
  const stats = [
    { value: "14+", label: "Years of Experience" },
    { value: "128+", label: "Schools Partnered" },
    { value: "152105+", label: "Students Impacted" },
    { value: "100%", label: "Safety Compliant" },
  ];

  return (
    <section className="relative bg-white pt-20 lg:pt-28 pb-10 lg:pb-14">
      <div className="container">
        <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading font-extrabold tracking-[-0.02em] text-[2rem] leading-[1.08] text-[#0A1E4F] sm:text-[2.6rem]">
            The Marcos Quay Effect
          </h2>
        </motion.div>

        <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 sm:gap-x-6 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div key={s.label} {...fade(0.06 * i)} className="text-center">
              <p className="font-heading font-black tracking-[-0.03em] text-[2.6rem] leading-none text-[#0A1E4F] tabular-nums sm:text-[3rem]">
                {s.value}
              </p>
              <div className="mx-auto mt-4 h-[2px] w-7 rounded-full bg-[#E31B23]" />
              <p className="mt-4 font-heading text-[11px] font-bold uppercase tracking-[0.16em] text-[#0A1E4F]/75">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ImpactPage() {
  return (
    <main>
      {/* Hero commented out — show only the newspaper */}
      {/* <ImpactNumbersHero />
      <ImpactHero /> */}
      <Newsletter />
      {/* <StatsStrip />
      <WhatWeSaw />
      <Effect />
      <Grounds />
      <Scoreboard />
      <Journey />
      <Outcomes />
      <Voices /> */}
    </main>
  );
}
