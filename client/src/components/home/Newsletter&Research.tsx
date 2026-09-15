import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  FileText,
  Users,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/* Animation                                                                  */
/* -------------------------------------------------------------------------- */

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: {
    duration: 0.7,
    delay,
    ease: [0.22, 1, 0.36, 1] as const,
  },
});

/* -------------------------------------------------------------------------- */
/* Newsletter                                                                 */
/* -------------------------------------------------------------------------- */

const NEWSLETTER_POINTS = [
  {
    icon: FileText,
    title: "Impact stories",
    subtitle: "from the field",
    iconBg: "#EBF3FF",
    iconColor: "#165DFF",
  },
  {
    icon: CalendarDays,
    title: "Updates on",
    subtitle: "events & initiatives",
    iconBg: "#FFF0F1",
    iconColor: "#E31B23",
  },
  {
    icon: Users,
    title: "Inspiring stories",
    subtitle: "from our community",
    iconBg: "#EAF8F0",
    iconColor: "#159957",
  },
];

/* -------------------------------------------------------------------------- */
/* Research                                                                   */
/* -------------------------------------------------------------------------- */

const INSIGHTS = [
  {
    category: "IMPACT REPORT",
    title: "Sport for a Brighter Tomorrow",
    description:
      "Key findings from our latest impact study across schools and communities.",
    image: "/images/sport-brighter-tomorrow.jpg",
  },
  {
    category: "RESEARCH BRIEF",
    title: "The Power of Play",
    description:
      "How sport contributes to better learning, health and life skills.",
    image: "/images/power-of-play.jpg",
  },
  {
    category: "THOUGHT PIECE",
    title: "Active Communities, Stronger India",
    description:
      "Perspectives on the role of sport in building inclusive and resilient communities.",
    image: "/images/active-communities.png",
  },
];

/* -------------------------------------------------------------------------- */
/* Newsletter Section                                                         */
/* -------------------------------------------------------------------------- */

export function NewsletterSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <div className="container overflow-hidden lg:max-w-[1300px]">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

          {/* ---------------------------------------------------------------- */}
          {/* Left Content                                                      */}
          {/* ---------------------------------------------------------------- */}

          <motion.div {...fade(0)}>
            <p className="eyebrow mb-5 justify-start text-[#165DFF]">
              Newsletter
            </p>

            <h2 className="heading-2 leading-[1.05] text-[#0A0A0A]">
              Stories{" "}
              <span className="relative inline-block text-[#E31B23]">
                That Move Us

                {/* Hand drawn underline */}
                <svg
                  className="absolute -bottom-3 left-0 h-3.5 w-full"
                  viewBox="0 0 400 14"
                  preserveAspectRatio="none"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 9 C 65 4, 115 11, 180 7 C 250 3, 325 10, 397 5"
                    stroke="#165DFF"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            <p className="mt-7 max-w-[590px] text-[15px] font-medium leading-[1.7] text-[#4B5563] sm:text-[16px]">
              Get the latest updates on our programs, community stories,
              events and milestones — straight to your inbox.
              <br />
              Be a part of our journey towards a more active, inclusive
              and brighter future.
            </p>

            {/* Email Form */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-8 flex max-w-[750px] flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                placeholder="Enter your email address"
                aria-label="Email address"
                className="h-[58px] flex-1 rounded-[9px] border border-[#000000] bg-white px-5 text-[15px] text-[#0A1E4F] outline-none transition-all placeholder:text-[#9AA5B8] focus:border-[#165DFF] focus:ring-2 focus:ring-[#165DFF]/10"
              />

              <button
                type="submit"
                className="h-[58px] rounded-[9px] bg-[#165DFF] px-9 font-heading text-[15px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0A4FD1] hover:shadow-[0_15px_30px_-15px_rgba(22,93,255,0.7)]"
              >
                Subscribe
              </button>
            </form>

            {/* Benefits */}
            <div className="mt-9 grid grid-cols-1 gap-7 sm:grid-cols-3 sm:gap-4">
              {NEWSLETTER_POINTS.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    {...fade(0.15 + index * 0.08)}
                    className="text-center sm:text-left"
                  >
                    <div
                      className="mx-auto flex h-14 w-14 items-center justify-center rounded-full sm:mx-0"
                      style={{ backgroundColor: item.iconBg }}
                    >
                      <Icon
                        className="h-6 w-6"
                        style={{ color: item.iconColor }}
                        strokeWidth={1.8}
                      />
                    </div>

                    <p className="mt-3 text-[14px] font-medium leading-[1.4] text-[#374151]">
                      {item.title}
                      <br />
                      {item.subtitle}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <p className="mt-8 text-[12px] font-medium text-[#9AA5B8]">
              We respect your privacy. No spam, ever.
            </p>
          </motion.div>

          {/* ---------------------------------------------------------------- */}
          {/* Newsletter Visual                                                 */}
          {/* ---------------------------------------------------------------- */}

          <motion.div
            {...fade(0.15)}
            className="relative mx-auto w-full max-w-[720px]"
          >
            {/* Soft shape behind image */}
            <div className="absolute -inset-5 -z-10 rounded-[70px] bg-[#F4F8FF]" />

            {/* Main image */}
            <div className="relative overflow-hidden rounded-[28px]">
              <img
                src="/images/Newslettering.png"
                alt="Children participating in sport"
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
            </div>

            {/* Newsletter Preview */}
            <motion.div
              initial={{ opacity: 0, x: 35, y: 15 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute -bottom-8 right-[-2%] w-[47%] min-w-[245px] rotate-[-2deg] rounded-[12px] bg-white p-5 shadow-[0_25px_55px_-20px_rgba(10,30,79,0.35)] sm:-bottom-10 sm:right-[1%] sm:p-6"
            >
              <div className="flex items-center justify-between">
                <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#165DFF]">
                  MQ Foundation
                </span>

                <span className="text-[8px] font-medium text-[#9AA5B8]">
                  June 2026
                </span>
              </div>

              <h3 className="mt-4 text-[24px] font-bold leading-none text-[#111827] sm:text-[28px]">
                Our{" "}
                <span className="text-[#E31B23]">
                  Newsletter
                </span>
              </h3>

              <svg
                className="mt-1 h-3 w-full"
                viewBox="0 0 250 12"
                fill="none"
              >
                <path
                  d="M2 8 C 55 2, 110 11, 170 6 C 205 3, 225 9, 248 5"
                  stroke="#165DFF"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>

              <p className="mt-2 text-[8px] font-bold tracking-[0.16em] text-[#9AA5B8]">
                PEOPLE &nbsp; | &nbsp; PROGRAMS &nbsp; | &nbsp; PROGRESS
              </p>

              <div className="mt-4 overflow-hidden rounded-[7px]">
                <img
                  src="public/images/Newsletterimg2.png"
                  alt=""
                  className="aspect-[16/8] w-full object-cover"
                />
              </div>

              <h4 className="mt-3 text-[16px] font-bold text-[#172033]">
                Sporting Brighter Futures
              </h4>

              <p className="mt-1 text-[9px] leading-[1.5] text-[#6B7280]">
                Stories of children, communities and change through
                the power of sport.
              </p>

              <div className="mt-5 h-[3px] w-7 bg-[#E31B23]" />
            </motion.div>

            {/* Latest Edition Circle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.6,
              }}
              className="absolute right-[-4%] top-[44%] flex h-[105px] w-[105px] -translate-y-1/2 items-center justify-center rounded-full border-[4px] border-white bg-[#165DFF] text-center text-white shadow-[0_15px_35px_-12px_rgba(22,93,255,0.6)] sm:h-[120px] sm:w-[120px]"
            >
              <div>
                <p className="font-heading text-[15px] font-medium italic leading-[1.25] sm:text-[17px]">
                  Latest
                  <br />
                  Edition
                </p>

                <ArrowRight className="mx-auto mt-2 h-5 w-5" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Research & Insights Section                                                */
/* -------------------------------------------------------------------------- */

export function ResearchInsightsSection() {
  return (
    <section className="relative bg-white py-20 sm:py-24 lg:py-28">
      <div className="container overflow-hidden lg:max-w-[1300px]">

        {/* Top divider */}
        <div className="mb-16 h-px w-full bg-[#E8EDF5]" />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.5fr] lg:gap-16">

          {/* ---------------------------------------------------------------- */}
          {/* Left                                                               */}
          {/* ---------------------------------------------------------------- */}

          <motion.div {...fade(0)}>
            <p className="eyebrow mb-5 justify-start text-[#165DFF]">
              Research and Insights
            </p>

            <h2 className="heading-2 leading-[1.05] text-[#111827]">
              Building the{" "}
              <span className="relative inline-block text-[#E31B23]">
                Evidence

                <svg
                  className="absolute -bottom-3 left-0 h-3.5 w-full"
                  viewBox="0 0 250 14"
                  preserveAspectRatio="none"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 9 C 45 3, 80 11, 125 7 C 175 3, 215 10, 247 5"
                    stroke="#165DFF"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              for Sport
            </h2>

            <p className="mt-7 max-w-[500px] text-[15px] font-medium leading-[1.7] text-[#4B5563] sm:text-[16px]">
              Our research and insights highlight the impact of sport on
              children&apos;s development, education, health and community
              wellbeing. We work with partners, scholars and institutions
              to generate evidence that informs practice and policy.
            </p>

            <a
              href="#research"
              className="mt-8 inline-flex h-[52px] items-center gap-3 rounded-[8px] bg-[#165DFF] px-7 font-heading text-[14px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0A4FD1] hover:shadow-[0_16px_30px_-15px_rgba(22,93,255,0.7)]"
            >
              Explore All Insights
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          {/* ---------------------------------------------------------------- */}
          {/* Insight Cards                                                      */}
          {/* ---------------------------------------------------------------- */}

          <div
            id="research"
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {INSIGHTS.map((item, index) => (
              <motion.article
                key={item.title}
                {...fade(0.12 + index * 0.08)}
                className="group overflow-hidden rounded-[9px] border border-[#DDE4EE] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#165DFF]/40 hover:shadow-[0_22px_45px_-30px_rgba(10,30,79,0.4)]"
              >
                {/* Image */}
                <div className="relative overflow-hidden p-3 pb-0">
                  <div className="overflow-hidden rounded-[5px]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5">
                  <p className="text-[9px] font-bold tracking-[0.13em] text-[#165DFF]">
                    {item.category}
                  </p>

                  <h3 className="mt-2 text-[17px] font-bold leading-[1.2] text-[#172033]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[12.5px] font-medium leading-[1.55] text-[#6B7280]">
                    {item.description}
                  </p>

                  <a
                    href="#"
                    className="mt-5 inline-flex items-center gap-2 text-[12px] font-bold text-[#165DFF] transition-all group-hover:gap-3"
                  >
                    Read More
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Combined Component                                                         */
/* -------------------------------------------------------------------------- */

export default function NewsletterAndResearch() {
  return (
    <>
      <NewsletterSection />
      <ResearchInsightsSection />
    </>
  );
}