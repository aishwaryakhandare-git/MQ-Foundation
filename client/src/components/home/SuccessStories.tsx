import { motion } from "framer-motion";
import { ArrowRight, MapPin, Play, Quote } from "lucide-react";

/* ─── Before / After comparison bar ─── */
function CompareBar({
  label,
  before,
  after,
  color,
}: {
  label: string;
  before: number;
  after: number;
  color: string;
}) {
  return (
    <div>
      <div className="flex items-center justify-between text-[11px] font-bold mb-1.5">
        <span className="text-[#64748B] uppercase tracking-[0.1em]">{label}</span>
        <span className="text-[#9AA5B8]">
          {before}% → <span style={{ color }} className="font-extrabold">{after}%</span>
        </span>
      </div>
      <div className="flex items-center gap-1.5">
        <div className="flex-1 h-1.5 rounded-full bg-[#EEF2F7] overflow-hidden">
          <div className="h-full rounded-full bg-[#C9D2E0] transition-all duration-700" style={{ width: `${before}%` }} />
        </div>
        <div className="flex-1 h-1.5 rounded-full bg-[#EEF2F7] overflow-hidden">
          <div className="h-full rounded-full transition-all duration-700" style={{ width: `${after}%`, background: color }} />
        </div>
      </div>
    </div>
  );
}

/* ─── Featured school story ─── */
function FeaturedStory() {
  return (
    <div className="relative overflow-hidden rounded-[28px] bg-white border border-[#EAF1FD] shadow-[0_32px_70px_-38px_rgba(10,30,79,0.45)]">
      {/* Navy / red accent strip */}
      <div className="flex h-1" aria-hidden="true">
        <span className="w-2/3 bg-[#165DFF]" />
        <span className="flex-1 bg-[#E31B23]" />
      </div>

      <div className="grid lg:grid-cols-[1.05fr_1fr]">
        {/* Photo side */}
        <div className="relative min-h-[280px] sm:min-h-[360px]">
          <img
            src="/images/hero-sports.jpg"
            alt="Students at St. Xavier's School, Pune"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Video play button */}
          <button
            type="button"
            aria-label="Play St. Xavier's story"
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center text-white transition-all duration-300 hover:bg-white/30 hover:scale-105"
          >
            <Play className="w-4.5 h-4.5 ml-0.5" fill="white" strokeWidth={1.5} />
          </button>

          {/* Location badge */}
          <div className="absolute bottom-5 left-5 flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur px-3.5 py-2 text-[12px] font-bold text-[#1A2333] shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-[#165DFF]" />
            Pune, Maharashtra
          </div>
        </div>

        {/* Content side */}
        <div className="p-7 sm:p-9 lg:p-10">
          <div className="flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#E31B23]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E31B23]" />
            Featured Story
          </div>
          <h3 className="mt-3 font-heading font-extrabold text-[24px] sm:text-[28px] lg:text-[30px] text-[#0A1E4F] leading-tight">
            St. Xavier&apos;s High School
          </h3>
          <p className="mt-1.5 text-[12.5px] font-bold text-[#9AA5B8]">Pune, Maharashtra</p>

          {/* Key statistics */}
          <div className="mt-6 grid grid-cols-2 gap-6 rounded-2xl bg-[#F8FBFF] border border-[#EAF1FD] p-5">
            <div>
              <p className="font-heading font-extrabold text-[30px] sm:text-[34px] text-[#165DFF] leading-none">
                450+
              </p>
              <p className="mt-1.5 text-[12px] font-bold text-[#64748B]">
                students now play daily
              </p>
            </div>
            <div>
              <p className="font-heading font-extrabold text-[30px] sm:text-[34px] text-[#E31B23] leading-none">
                3.2×
              </p>
              <p className="mt-1.5 text-[12px] font-bold text-[#64748B]">
                growth in sports admissions
              </p>
            </div>
          </div>

          {/* Before / After progress */}
          <div className="mt-5 space-y-4">
            <CompareBar label="Participation" before={22} after={91} color="#165DFF" />
            <CompareBar label="Fitness Score" before={38} after={84} color="#E31B23" />
            <CompareBar label="PE Time / Week" before={40} after={100} color="#0A1E4F" />
          </div>

          {/* Principal quote */}
          <div className="relative mt-6 pl-5 border-l-[3px] border-[#165DFF]">
            <Quote className="absolute -top-2 left-3 w-5 h-5 text-[#165DFF]/40" strokeWidth={2.2} />
            <p className="text-[14.5px] leading-relaxed font-medium text-[#4B5563] italic">
              &ldquo;We&apos;ve never seen children this excited about coming to school.
              The discipline and confidence is visible in the classroom too.&rdquo;
            </p>
            <p className="mt-2.5 text-[12.5px] font-bold text-[#0A1E4F]">
              Mrs. Meera Kulkarni <span className="font-semibold text-[#9AA5B8]">— Principal</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Supporting school story ─── */
function MiniStory({
  school,
  location,
  metric,
  metricLabel,
  accent,
  quote,
}: {
  school: string;
  location: string;
  metric: string;
  metricLabel: string;
  accent: string;
  quote: string;
  initials: string;
}) {
  return (
    <div className="h-full w-full overflow-hidden rounded-[22px] bg-white border border-[#EAF1FD] shadow-[0_18px_45px_-32px_rgba(10,30,79,0.4)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_28px_60px_-34px_rgba(10,30,79,0.5)] hover:border-[#CADCFA]">
        {/* Accent line */}
        <div className="h-1 w-full" style={{ background: accent }} aria-hidden="true" />

        <div className="p-6 sm:p-7">
          {/* Metric */}
          <div className="flex items-baseline gap-2">
            <span className="font-heading font-extrabold text-[30px] sm:text-[32px] text-[#0A1E4F] leading-none">
              {metric}
            </span>
            <span className="text-[11px] font-bold text-[#9AA5B8] leading-tight">
              {metricLabel}
            </span>
          </div>

          {/* School */}
          <h4 className="mt-5 font-heading font-bold text-[16.5px] text-[#0A1E4F] leading-snug">
            {school}
          </h4>
          <p className="mt-1.5 flex items-center gap-1.5 text-[11.5px] font-bold text-[#9AA5B8]">
            <MapPin className="w-3 h-3" style={{ color: accent }} />
            {location}
          </p>

          {/* Quote */}
          <p className="mt-4 pt-4 border-t border-[#F1F5FB] text-[13px] leading-relaxed font-medium text-[#6B7280] italic">
            &ldquo;{quote}&rdquo;
          </p>
        </div>
      </div>
  );
}

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

/* ─── Blue / red accents applied per card index ─── */
const MINI_ACCENTS = ["#165DFF", "#E31B23", "#165DFF", "#E31B23", "#165DFF"];

export default function SuccessStories() {
  return (
    <section className="relative bg-white pt-16 sm:pt-20 lg:pt-24 pb-20 sm:pb-28 lg:pb-32 overflow-hidden">
      <div className="container relative lg:max-w-[1300px]">
        {/* ── Header ── */}
        <motion.div {...fade(0)} className="max-w-2xl mx-auto text-center">
          <p className="eyebrow justify-center text-[#E31B23] mb-4">Real Impact</p>
          <h2 className="heading-2 text-[#0A1E4F]">
            Success{" "}
            <span className="relative inline-block text-[#E31B23]">
              Stories
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
          <p className="body-lg mt-6 max-w-[560px] mx-auto">
            Real schools. Real children. Real change. These are the stories of
            campuses where sports became a way of life.
          </p>
        </motion.div>

        {/* ── Featured story ── */}
        <motion.div {...fade(0.08)} className="mt-14 sm:mt-16 lg:mt-20">
          <FeaturedStory />
        </motion.div>

        {/* ── Supporting stories — 5-across row ── */}
        <div className="mt-8 sm:mt-10 lg:mt-12 flex flex-wrap justify-center gap-6">
          {[
            {
              school: "Green Valley Public School",
              location: "Jaipur, Rajasthan",
              metric: "380+",
              metricLabel: "students active daily",
              quote: "The morning assemblies feel different now — our kids stand taller.",
            },
            {
              school: "Kendriya Vidyalaya, Bengaluru",
              location: "Bengaluru, Karnataka",
              metric: "96%",
              metricLabel: "PE attendance rate",
              quote: "Sports used to be a free period. Now it's the highlight of the day.",
            },
            {
              school: "DPS Indirapuram",
              location: "Ghaziabad, Uttar Pradesh",
              metric: "2.5×",
              metricLabel: "more girls in sport",
              quote: "Our girls' cricket team now competes at state level.",
            },
            {
              school: "Bishop Cotton School",
              location: "Shimla, Himachal Pradesh",
              metric: "−31%",
              metricLabel: "sedentary screen time",
              quote: "Parents tell us their children sleep better and eat better now.",
            },
            {
              school: "Ryan International",
              location: "Mumbai, Maharashtra",
              metric: "14",
              metricLabel: "new sport teams formed",
              quote: "We finally have a real structure behind our sports programme.",
            },
          ].map((story, i) => (
            <motion.div key={story.school} {...fade(0.1 + i * 0.06)} className="flex w-full sm:w-[calc(50%-12px)] lg:w-[calc(20%-19.2px)]">
              <MiniStory
                {...story}
                accent={MINI_ACCENTS[i]}
                initials={story.school.split(" ").map((w) => w[0]).join("")}
              />
            </motion.div>
          ))}
        </div>

        {/* ── CTA ── */}
        <motion.div {...fade(0.2)} className="mt-14 sm:mt-16 text-center">
          <a
            href="/impact"
            className="group inline-flex items-center gap-2.5 rounded-full bg-[#0A1E4F] px-7 py-3.5 text-[14px] font-bold text-white shadow-[0_18px_40px_-18px_rgba(10,30,79,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#13295C]"
          >
            Explore More Stories
            <ArrowRight className="w-4.5 h-4.5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}