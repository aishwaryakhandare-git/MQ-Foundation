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

/* ─── Shared editorial bits ─── */

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

function Eyebrow({ children, center = false }: { children: ReactNode; center?: boolean }) {
  return (
    <p
      className={cn(
        "flex items-center gap-4 font-heading text-[13px] font-extrabold uppercase tracking-[0.2em] text-[#E31B23]",
        center && "justify-center",
      )}
    >
      <span className="h-px w-10 bg-[#E31B23]" />
      {children}
      {center && <span className="h-px w-10 bg-[#E31B23]" />}
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

/* ─── Data ─── */

const STATS_STRIP = [
  { value: "450+", label: "Schools Transformed" },
  { value: "125,000+", label: "Students Impacted" },
  { value: "96%", label: "School Satisfaction" },
  { value: "100%", label: "Safety Compliant" },
];

const BAND_STATS = [
  { value: "125,000+", label: "Students Impacted" },
  { value: "450+", label: "Schools Transformed" },
  { value: "96%", label: "School Satisfaction" },
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
  { label: "Health", img: "/images/solutions/fitness.jpg", desc: "More active children and better physical fitness." },
  { label: "Confidence", img: "/images/solutions/multisport.jpg", desc: "Sport gives students the confidence to participate, compete and lead." },
  { label: "Discipline", img: "/images/solutions/curriculum.jpg", desc: "Regular practice builds consistency, responsibility and teamwork." },
  { label: "Opportunity", img: "/images/solutions/transformation.jpg", desc: "More children get the chance to discover what they can do through sport." },
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
    role: "Manager – CSR, Pernod Ricard India Foundation",
  },
  {
    quote:
      "Through Sports for Change, our partnership with Sportz Village Foundation has shown how sport can create opportunity, social mobility and pathways from grassroots participation to higher competition.",
    name: "Shubham Nautiyal",
    role: "Senior Program Officer, HCL Foundation",
  },
  {
    quote:
      "Year after year, structured sport is helping children become more engaged in school, more confident in expression and more willing to take initiative.",
    name: "Inderpreet Devgun",
    role: "Associate Director – SSR, KPMG",
  },
  {
    quote:
      "For many children, sport became their first safe space to express themselves, build confidence and discover courage, belonging and aspiration through every session.",
    name: "Bharti Nayak",
    role: "Associate Manager – CSR, Sagility",
  },
];

/* ══════════════════════════════════════════════════════════════
   1 · HERO — photographic editorial statement
   ══════════════════════════════════════════════════════════════ */

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
          <Eyebrow center>Our Impact</Eyebrow>

          <h1 className="mt-6 font-heading font-extrabold leading-none tracking-[-0.03em] text-white text-6xl sm:text-7xl lg:text-8xl">
            125,000+
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

      {/* Right — handwritten phrase */}
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

/* ══════════════════════════════════════════════════════════════
   2 · IMPACT BY NUMBERS — horizontal statistics strip
   ══════════════════════════════════════════════════════════════ */

function StatsStrip() {
  return (
    <section className="bg-white py-14 lg:py-16">
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

/* ══════════════════════════════════════════════════════════════
   3 · THE MARCOS QUAY EFFECT — editorial + 3-stage flow
   ══════════════════════════════════════════════════════════════ */

function Effect() {
  return (
    <section className="bg-[#F3F7FC] py-16 lg:py-24">
      <div className="container">
        {/* Section header — centered */}
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
          {/* Left — editorial */}
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
              people and keep the momentum going — so the ground stays active
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

          {/* Right — image-led 3-stage transformation flow */}
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

        {/* Full-width — schools & states we reach */}
        <motion.div
          {...fade(0.15)}
          className="mt-14 rounded-[24px] border border-[#E7EBF3] bg-white p-7 sm:p-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-14 items-center">
            <div>
              <Eyebrow>Schools We Work With</Eyebrow>
              <h3 className="mt-5 font-heading font-extrabold tracking-[-0.02em] text-[1.55rem] sm:text-[1.9rem] leading-[1.2] text-[#0A1E4F]">
                Real schools, real grounds —
                across cities and states.
              </h3>
              <p className="mt-4 text-[14.5px] leading-[1.75] text-black">
                From inner-city schools to rural campuses, Marcos Quay works in
                partnership with schools of every kind — building infrastructure,
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

/* ══════════════════════════════════════════════════════════════
   4 · TRANSFORMING SCHOOL GROUNDS — photo + transformation list
   ══════════════════════════════════════════════════════════════ */

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
          {/* Left — photo with navy overlay */}
          <motion.div {...fade(0)} className="relative min-h-[420px] lg:min-h-[560px] overflow-hidden rounded-[18px]">
            <img
              src="/images/hero-sports-1.jpg"
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

          {/* Right — transformation list */}
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

/* ══════════════════════════════════════════════════════════════
   5 · IMPACT BY THE NUMBERS — pale-blue band + handwritten tail
   ══════════════════════════════════════════════════════════════ */

function NumbersBand() {
  return (
    <section className="relative overflow-hidden bg-[#F3F7FC] py-16 lg:py-24">
      <div className="container relative z-10">
        <SectionHeader eyebrow="Our Impact — By the Numbers">
          Impact, by the{" "}
          <span className="relative inline-block text-[#E31B23]">
            numbers
            <HandLine />
          </span>
        </SectionHeader>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-16">
          <motion.div {...fade(0)} className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-9">
              {BAND_STATS.map((s, i) => (
                <div
                  key={s.label}
                  className={cn("pl-6 border-l-[3px]", i % 2 === 0 ? "border-[#E31B23]" : "border-[#0A1E4F]")}
                >
                  <p className="font-heading font-extrabold tracking-[-0.02em] text-[2.6rem] sm:text-[3rem] leading-none text-[#0A1E4F]">
                    {s.value}
                  </p>
                  <p className="mt-2 font-heading text-[11px] font-bold uppercase tracking-[0.18em] text-[#0A1E4F]/80">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Faded monochrome + handwritten phrase */}
          <motion.div
            {...fade(0.15)}
            className="relative flex h-[300px] items-center justify-center lg:col-span-5 sm:h-[360px] lg:h-[420px]"
          >
            <img
              src="/images/sport-brighter-tomorrow.jpg"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover grayscale"
              style={{
                opacity: 0.16,
                maskImage:
                  "radial-gradient(ellipse 74% 70% at 52% 48%, black 12%, rgba(0,0,0,.75) 42%, transparent 78%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 74% 70% at 52% 48%, black 12%, rgba(0,0,0,.75) 42%, transparent 78%)",
              }}
            />
            <div
              className="absolute inset-0 bg-[#0A1E4F]/[0.04]"
              style={{
                maskImage:
                  "radial-gradient(ellipse 74% 70% at 52% 48%, black 12%, rgba(0,0,0,.75) 42%, transparent 78%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 74% 70% at 52% 48%, black 12%, rgba(0,0,0,.75) 42%, transparent 78%)",
              }}
            />
            <div className="relative z-10 flex flex-col items-center">
              <p className="font-serif text-center italic text-[1.8rem] sm:text-[2.1rem] leading-[1.3] text-[#0A1E4F]">
                More Than
                <br />
                A Game
              </p>
              <div className="mt-4 h-[2px] w-24 rounded-full bg-[#E31B23]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   6 · IMPACT BEYOND THE SCOREBOARD — editorial + image cards
   ══════════════════════════════════════════════════════════════ */

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

/* ══════════════════════════════════════════════════════════════
   7 · THE STUDENT JOURNEY — five-step horizontal flow
   ══════════════════════════════════════════════════════════════ */

function Journey() {
  return (
    <section className="bg-[#F3F7FC] py-16 lg:py-24">
      <div className="container">
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
                <span className="relative z-10 mt-[20px] hidden h-[14px] w-[14px] rounded-full border-2 border-[#E31B23] bg-[#F3F7FC] lg:block" />
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

/* ══════════════════════════════════════════════════════════════
   8 · OUTCOMES — tabs + metric card
   ══════════════════════════════════════════════════════════════ */

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
      "Structured physical education is woven into the school day—not as an occasional activity, but as consistent, timetable-driven practice with certified coaches, modern playing surfaces, and fitness tracking. Every session helps children build physical literacy and participate confidently in sport.",
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
      "Marcos Quay creates safe, inclusive sporting environments where girls and boys have equal opportunities to participate, develop their skills, and discover their potential. We make participation a regular part of school life, ensuring that every child feels welcome, supported, and confident on the field.Through girls-only and mixed sessions, female coach development, and student leadership opportunities, we help address barriers that can prevent girls from participating fully in sport. Coaches encourage equal participation, build confidence, and create positive team environments where every student has a voice.The result is a stronger sporting culture where girls and boys can play, practise, compete, and lead together—building confidence and leadership skills that extend far beyond the playing field.",
    ],
    metrics: [
      { value: "62%", label: "Girl Participation Rate", note: "Across partner schools" },
      { value: "2×", label: "More Girls in Daily Sport", note: "" },
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

        {/* Tabs — compact, one row, centered */}
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
              {/* Left — narrative */}
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

              {/* Right — 2×2 metric grid */}
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
                      2025–26
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

/* ══════════════════════════════════════════════════════════════
   9 · REAL VOICES — testimonials
   ══════════════════════════════════════════════════════════════ */

function Voices() {
  return (
    <section className="bg-[#F3F7FC] py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="In Their Own Words"
          intro="Hear from the people who see the impact every day — students, teachers, school leaders, and the partners who fund and champion our work."
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
                <span className="font-heading text-[2.2rem] font-extrabold leading-none text-[#E31B23]">“</span>
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
                <span className="font-heading text-[2.2rem] font-extrabold leading-none text-[#E31B23]">“</span>
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

/* ══════════════════════════════════════════════════════════════
   PAGE
   ══════════════════════════════════════════════════════════════ */

export default function ImpactPage() {
  return (
    <main className="min-h-screen bg-white pt-[76px] lg:pt-20">
      <Hero />
      <StatsStrip />
      <Effect />
      <Grounds />
      <NumbersBand />
      <Scoreboard />
      <Journey />
      <Outcomes />
      <Voices />
    </main>
  );
}