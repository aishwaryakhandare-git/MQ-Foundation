import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ArrowDown } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const fade = (delay = 0) => ({
  initial: { y: 30 },
  whileInView: { y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

/* ─── Shared editorial bits ─── */

function HandLine() {
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
        stroke="#E31B23"
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
        "flex items-center gap-4 font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-[#E31B23]",
        center && "justify-center",
      )}
    >
      <span className="h-px w-10 bg-[#E31B23]" />
      {children}
      {center && <span className="h-px w-10 bg-[#E31B23]" />}
    </p>
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
    points: ["Limited infrastructure", "Irregular practice", "Limited coaching", "Low participation"],
  },
  {
    num: "02",
    title: "Marcos Quay Transformation",
    red: true,
    points: ["Ground development", "Structured curriculum", "Coach training", "Regular sessions"],
  },
  {
    num: "03",
    title: "After",
    red: false,
    points: ["Active school grounds", "Confident students", "Consistent participation", "Better sporting pathways"],
  },
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

/* ══════════════════════════════════════════════════════════════
   1 · HERO — photographic editorial statement
   ══════════════════════════════════════════════════════════════ */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0A1E4F]">
      <img
        src="/images/hero-sports.jpg"
        alt="Indian school children actively playing football on a school sports ground"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Soft white fades for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
      <div className="absolute inset-y-0 right-0 hidden lg:block w-[34%] bg-gradient-to-l from-white/75 to-transparent" />

      <div className="container relative z-10 flex min-h-[620px] lg:min-h-[680px] items-center pt-28 pb-16 lg:pt-32 lg:pb-20">
        <div className="grid w-full grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] items-center gap-10">
          {/* Left — message */}
          <motion.div {...fade(0)}>
            <Eyebrow>Our Impact</Eyebrow>

            <h1 className="mt-6 font-heading font-extrabold leading-none tracking-[-0.03em] text-[#0A1E4F] text-6xl sm:text-7xl lg:text-8xl">
              125,000+
            </h1>
            <p className="mt-3 font-serif text-[2rem] sm:text-[2.6rem] lg:text-[3rem] leading-[1.1] text-[#0A1E4F]">
              Students Impacted
            </p>

            <p className="mt-7 max-w-[520px] text-[15.5px] sm:text-[16px] leading-[1.75] text-[#6B7280]">
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

          {/* Right — handwritten phrase */}
          <motion.div {...fade(0.15)} className="hidden lg:flex flex-col items-end justify-center self-stretch">
            <p className="font-serif italic text-right text-[1.7rem] leading-[1.35] text-[#0A1E4F]/90">
              Play
              <br />
              Learn
              <br />
              Grow
              <br />
              Belong
            </p>
            <div className="mt-4 h-[2px] w-[70%] rounded-full bg-[#E31B23]" />
          </motion.div>
        </div>
      </div>
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
              <p className="font-serif text-[2.5rem] sm:text-[3rem] leading-none text-[#0A1E4F]">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left — editorial */}
          <motion.div {...fade(0)} className="self-start lg:sticky lg:top-28">
            <Eyebrow>The Marcos Quay Effect</Eyebrow>
            <h2 className="mt-6 font-serif text-[2.1rem] sm:text-[2.7rem] lg:text-[3.2rem] leading-[1.12] text-[#0A1E4F]">
              From limited opportunity
              <br />
              to{" "}
              <span className="relative inline-block text-[#E31B23]">
                a culture of sport.
                <HandLine />
              </span>
            </h2>
            <p className="mt-7 max-w-[500px] text-[15.5px] sm:text-[16px] leading-[1.75] text-[#6B7280]">
              Many schools have the space for sport, but not always the
              structure, coaching or consistency needed to make it work. Marcos
              Quay works alongside schools to change that.
            </p>
          </motion.div>

          {/* Right — 3-stage transformation flow */}
          <div className="space-y-3">
            {EFFECT_STAGES.map((stage, i) => (
              <motion.div key={stage.num} {...fade(0.05 * i)}>
                <div
                  className={cn(
                    "rounded-[18px] border p-6 sm:p-7",
                    stage.red ? "border-[#F2D3D5] bg-[#FBEEEE]" : "border-[#E7EBF3] bg-white",
                  )}
                >
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
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] items-center gap-12 lg:gap-16">
          {/* Left — photo with navy overlay */}
          <motion.div {...fade(0)} className="relative min-h-[420px] lg:min-h-[560px] overflow-hidden rounded-[18px]">
            <img
              src="/images/hero-sports-1.jpg"
              alt="Students playing on a transformed school football ground"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0A1E4F]/95 via-[#0A1E4F]/70 to-transparent px-8 pt-16 pb-8">
              <div className="h-[3px] w-9 rounded-full bg-[#E31B23]" />
              <p className="mt-4 max-w-[340px] font-serif text-[1.45rem] sm:text-[1.7rem] leading-[1.3] text-white">
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
            <Eyebrow>Physical Transformation</Eyebrow>
            <h2 className="mt-6 font-serif text-[1.95rem] sm:text-[2.4rem] leading-[1.15] text-[#0A1E4F]">
              What{" "}
              <span className="relative inline-block text-[#E31B23]">
                changes
                <HandLine />
              </span>{" "}
              on the ground
            </h2>

            <div className="mt-8">
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
                    <p className="mt-1.5 text-[14.5px] leading-[1.7] text-[#6B7280]">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-16">
          <motion.div {...fade(0)} className="lg:col-span-7">
            <Eyebrow>Our Impact — By the Numbers</Eyebrow>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-9">
              {BAND_STATS.map((s, i) => (
                <div
                  key={s.label}
                  className={cn("pl-6 border-l-[3px]", i % 2 === 0 ? "border-[#E31B23]" : "border-[#0A1E4F]")}
                >
                  <p className="font-serif text-[2.6rem] sm:text-[3rem] leading-none text-[#0A1E4F]">
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
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16">
          <motion.div {...fade(0)} className="self-start lg:sticky lg:top-28">
            <Eyebrow>Beyond the Scoreboard</Eyebrow>
            <h2 className="mt-6 font-serif text-[2.1rem] sm:text-[2.7rem] lg:text-[3.1rem] leading-[1.12] text-[#0A1E4F]">
              The impact goes
              <br />
              beyond{" "}
              <span className="relative inline-block text-[#E31B23]">
                the scoreboard.
                <HandLine />
              </span>
            </h2>
            <p className="mt-7 max-w-[400px] text-[15.5px] sm:text-[16px] leading-[1.75] text-[#6B7280]">
              Sport shapes healthier, happier and more confident children. The
              benefits last a lifetime.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                  <p className="mt-2.5 text-[14px] leading-[1.7] text-[#6B7280]">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
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
        <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center">
          <Eyebrow center>The Student Journey</Eyebrow>
          <h2 className="mt-6 font-serif text-[2.1rem] sm:text-[2.7rem] lg:text-[3.1rem] leading-[1.12] text-[#0A1E4F]">
            From first play
            <br />
            to a brighter tomorrow.
          </h2>
          <p className="mt-6 text-[15.5px] sm:text-[16px] leading-[1.75] text-[#6B7280]">
            A structured journey that helps every child find their potential
            through sport.
          </p>
        </motion.div>

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
                <p className="mt-2 max-w-[210px] text-[13.5px] leading-[1.7] text-[#6B7280]">
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
   8 · REAL VOICES — testimonials
   ══════════════════════════════════════════════════════════════ */

function Voices() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16">
          <motion.div {...fade(0)} className="self-start lg:sticky lg:top-28">
            <Eyebrow>Real Voices. Real Change.</Eyebrow>
            <h2 className="mt-6 font-serif text-[2.1rem] sm:text-[2.6rem] lg:text-[3rem] leading-[1.12] text-[#0A1E4F]">
              What People Are{" "}
              <span className="relative inline-block text-[#E31B23]">
                Saying
                <HandLine />
              </span>
            </h2>
            <p className="mt-7 max-w-[400px] text-[15.5px] sm:text-[16px] leading-[1.75] text-[#6B7280]">
              Hear from the people who see the impact every day — students,
              teachers and school leaders.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.name}
                {...fade(0.06 * i)}
                className="flex h-full flex-col rounded-[16px] border border-[#E7EBF3] bg-[#FDFDFB] p-6"
              >
                <span className="font-serif text-[2.2rem] leading-none text-[#E31B23]">“</span>
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
    <main className="min-h-screen bg-white">
      <Hero />
      <StatsStrip />
      <Effect />
      <Grounds />
      <NumbersBand />
      <Scoreboard />
      <Journey />
      <Voices />
    </main>
  );
}