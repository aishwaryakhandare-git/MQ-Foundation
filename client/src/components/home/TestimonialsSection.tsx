import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "Marcus went from barely kicking a ball to scoring the winning goal in the city championship. Marcos Quay didn't just teach him football — they taught him discipline, teamwork, and how to handle both victory and defeat with grace.",
    initials: "DH",
    name: "David Hernandez",
    role: "Parent of Marcus, 11 — Football Program",
    color: "#3F7CFF",
    bg: "#EBF1FF",
  },
  {
    quote:
      "My daughter Ananya used to hate PE class. Now she looks forward to every session. The coaches genuinely care about each child's progress and make every sport fun and accessible.",
    initials: "PS",
    name: "Priya Sharma",
    role: "Parent of Ananya, 9 — Multi-Sport Program",
    color: "#2E9E5F",
    bg: "#E8F8F0",
  },
  {
    quote:
      "As a school principal, I've seen many external programs come and go. Marcos Quay is different — their structured curriculum and certified coaches have transformed our sports culture entirely.",
    initials: "RM",
    name: "Rajesh Mehta",
    role: "Principal, Delhi Public School",
    color: "#BBA4F2",
    bg: "#F1ECFF",
  },
];

const fade = (delay: number) => ({
  initial: { y: 28 },
  animate: { y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function TestimonialsSection() {
  return (
    <section className="relative bg-[#FAFBFF] overflow-hidden">
      <div className="container relative z-10">
        <div className="py-16 md:py-24">
          {/* Header */}
          <motion.div {...fade(0)} className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
            <span className="inline-block font-heading font-bold text-xs sm:text-sm tracking-widest uppercase text-[#FF8A6B] mb-4">
              Community Voices
            </span>
            <h2 className="heading-2 text-[#0A1E4F] max-w-[600px] mx-auto leading-tight text-[1.6rem] sm:text-[1.9rem] lg:text-[2.2rem]">
              Schools Who Trust Us
            </h2>
          </motion.div>

          {/* Testimonial cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.name}
                {...fade(i * 0.1)}
                className="relative"
              >
                <div
                  className="relative h-full rounded-[20px] p-7 sm:p-8 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_-16px_rgba(0,0,0,0.1)]"
                  style={{
                    background: t.bg,
                    boxShadow: `0 4px 20px -8px ${t.color}25`,
                  }}
                >
                  {/* Quote icon */}
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center mb-5"
                    style={{ background: `${t.color}20` }}
                  >
                    <Quote className="w-5 h-5" style={{ color: t.color }} />
                  </div>

                  {/* Quote text */}
                  <p className="text-[0.95rem] leading-relaxed text-[#374151] flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 mt-6 pt-5 border-t border-black/5">
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center text-white font-heading font-bold text-sm"
                      style={{ background: t.color }}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <p className="font-heading font-bold text-[0.9rem] text-[#0A1E4F]">
                        {t.name}
                      </p>
                      <p className="text-[0.75rem] text-[#6B7280] mt-0.5">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
