import { motion } from "framer-motion";
import { ArrowRight, Quote, Trophy } from "lucide-react";

/* ─── Featured story: MQ National Sports Day Football Cup ─── */
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
        <div className="relative min-h-[200px] sm:min-h-[280px]">
          <img
            src="/images/Home/success-story-home.jpg"
            alt="Students competing in the MQ National Sports Day Football Cup"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Trophy badge */}
          <div className="absolute bottom-5 left-5 flex items-center gap-1.5 rounded-full bg-white/90 px-3.5 py-2 text-[12px] font-bold text-[#1A2333] shadow-sm backdrop-blur">
            <Trophy className="h-3.5 w-3.5 text-[#E31B23]" />
            MQ National Sports Day Football Cup 2026
          </div>
        </div>

        {/* Content side */}
        <div className="p-5 sm:p-7 lg:p-8">
          <div className="flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#E31B23]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E31B23]" />
            Football
          </div>
          <h3 className="mt-3 font-heading text-[24px] font-extrabold leading-tight text-[#0A1E4F] sm:text-[27px]">
            More Than a Football Cup. An Opportunity to Play, Compete and Grow.
          </h3>
          <p className="mt-1.5 text-[12.5px] font-bold text-[#9AA5B8]">
            Marcos Quay Foundation · National Sports Day 2026
          </p>

          <p className="mt-4 text-[15px] font-semibold leading-relaxed text-[#0A1E4F]">
            The MQ National Sports Day Football Cup 2026 brought 270+ young
            footballers from 14 schools across Mumbai onto one field.
          </p>

          <div className="mt-4 space-y-3 text-[13.5px] font-medium leading-[1.7] text-[#4B5563]">
            <p>
              For many, it was the first time a school fixture meant a jersey,
              a crowd and a final whistle - a real platform to play competitive
              football and learn the values of teamwork, discipline and
              sportsmanship.
            </p>
            <p>
              Cosmopolitan School (SSC) lifted the boys&apos; trophy, with Nahar
              International runners-up, while AVM School, Bandra West, won the
              girls&apos; category ahead of Nanavati School. Guest of Honour Siya
              Sawant - who represented India at the Under-12 Championship in
              Peru - reminded young athletes what disciplined practice can
              build. Special appreciation went to Ishaan Shahane and Raju Singh
              for planning and executing the cup.
            </p>
          </div>

          {/* Motto quote */}
          <div className="relative mt-5 border-l-[3px] border-[#E31B23] pl-5">
            <Quote
              className="absolute -top-2 left-3 h-5 w-5 text-[#E31B23]/40"
              strokeWidth={2.2}
            />
            <p className="font-heading text-[15px] font-extrabold italic leading-relaxed text-[#0A1E4F]">
              One Goal - Ab Sirf Dekhega Nahi, Khelega India.
            </p>
          </div>

          {/* Read more */}
          <a
            href="/impact#feature-football"
            className="mt-5 inline-flex items-center gap-2.5 rounded-full bg-[#0A1E4F] px-5 py-2.5 text-[13px] font-bold text-white shadow-[0_14px_30px_-14px_rgba(10,30,79,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#13295C]"
          >
            Read More in the Dispatch
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
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

export default function SuccessStories() {
  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-16">
      <div className="container relative lg:max-w-[1300px]">
        {/* ── Header ── */}
        <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-3 justify-center text-[#E31B23]">Real Impact</p>
          <h2 className="heading-2 text-[#0A1E4F]">
            Success{" "}
            <span className="relative inline-block text-[#E31B23]">
              Stories
              <svg
                className="absolute -bottom-2 left-0 h-3 w-full"
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
          <p className="body-lg mx-auto mt-4 max-w-[560px]">
            Real champions. Real schools. Real change. Fresh from the Marcos Quay Dispatch -
            the stories that made news this term.
          </p>
        </motion.div>

        {/* ── Featured story ── */}
        <motion.div {...fade(0.08)} className="mt-8 sm:mt-10">
          <FeaturedStory />
        </motion.div>
      </div>
    </section>
  );
}