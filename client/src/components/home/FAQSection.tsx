import { motion } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How does the programme work in our school?",
    a: "We deploy certified coaches to your school who conduct structured PE classes as part of the regular timetable. The programme covers multiple sports, fitness assessments, and inter-school competitions.",
  },
  {
    q: "What sports are included?",
    a: "We offer football, basketball, cricket, athletics, volleyball, kabaddi, kho kho, badminton, and more. The specific sports are customised based on your school's facilities and student interests.",
  },
  {
    q: "Is this aligned with NEP 2020?",
    a: "Yes, our entire curriculum is designed to be NEP 2020 compliant. We focus on holistic education, skill development, and experiential learning through sports.",
  },
  {
    q: "How many students can participate?",
    a: "We work with schools of all sizes, from 200 to 5,000+ students. Our coach-to-student ratio ensures every child gets quality attention and coaching.",
  },
  {
    q: "How do you measure impact?",
    a: "We use comprehensive assessment tools including fitness metrics, participation rates, competition results, academic correlation studies, and parent/teacher satisfaction surveys.",
  },
  {
    q: "Can existing PE teachers continue?",
    a: "Absolutely. We work alongside existing PE teachers, providing them with training, resources, and development opportunities to enhance their capabilities.",
  },
  {
    q: "What age groups do you cover?",
    a: "We serve students from Class 1 to Class 12 (ages 6-18), with age-appropriate curriculum and coaching methods for each grade level.",
  },
];

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 25 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function FAQSection() {
  return (
    <section className="relative bg-white pt-8 sm:pt-12 lg:pt-14 pb-20 sm:pb-28 lg:pb-32 overflow-hidden">
      <div className="container lg:max-w-[1180px]">
        {/* ── Header ── */}
        <motion.div {...fade(0)} className="max-w-2xl mx-auto text-center">
          <p className="eyebrow justify-center text-[#165DFF] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E31B23]" />
            FAQs
          </p>
          <h2 className="heading-2 text-[#0A1E4F]">
            Frequently Asked{" "}
            <span className="relative inline-block text-[#E31B23]">
              Questions
              <svg
                className="absolute -bottom-2 left-0 w-full h-3"
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 8 C 34 2, 62 10, 100 6 C 140 2, 165 9, 197 5"
                  stroke="#165DFF"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
          <p className="mt-6 text-[15px] sm:text-[16px] leading-[1.7] text-[#6B7280] font-medium">
            Answers to the questions schools and parents ask us most
            often about our sports education programmes.
          </p>
        </motion.div>

        {/* ── Accordion ── */}
        <motion.div {...fade(0.1)} className="mt-12 sm:mt-14 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={faq.q}
                value={`faq-${i}`}
                className="overflow-hidden rounded-[16px] border border-[#E7EBF3] bg-white px-6 sm:px-7 shadow-[0_10px_30px_-24px_rgba(10,30,79,0.35)] transition-colors duration-300 hover:border-[#CADCFA] has-[[data-state=open]]:border-[#165DFF]/40 has-[[data-state=open]]:bg-[#F8FBFF]"
              >
                <AccordionTrigger className="group gap-4 py-5 text-left hover:no-underline [&>svg]:hidden">
                  <span className="flex items-start gap-4">
                    <span className="font-heading font-extrabold text-[13px] text-[#165DFF] pt-1 leading-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-heading font-semibold text-[15px] sm:text-[16px] leading-snug text-[#0A1E4F] group-data-[state=open]:text-[#165DFF] transition-colors duration-300">
                      {faq.q}
                    </span>
                  </span>

                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#CADCFA] text-[#165DFF] transition-transform duration-300 group-data-[state=open]:rotate-45 group-data-[state=open]:border-[#165DFF]/60 group-data-[state=open]:bg-[#165DFF]/[0.06]">
                    <Plus className="h-4 w-4" strokeWidth={2.2} />
                  </span>
                </AccordionTrigger>

                <AccordionContent className="pb-5 pl-8 sm:pl-10 text-[14px] sm:text-[15px] leading-relaxed text-[#6B7280]">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* ── Still have questions ── */}
        <motion.div {...fade(0.16)} className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-5 sm:gap-8 rounded-[20px] border border-[#EAF1FD] bg-[#F8FBFF] px-8 py-6 sm:py-5">
            <div className="text-left">
              <p className="font-heading font-bold text-[16px] text-[#0A1E4F]">
                Still have questions?
              </p>
              <p className="mt-1 text-[13.5px] text-[#6B7280]">
                Talk to our team and we&apos;ll help you find the right answer.
              </p>
            </div>
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[#0A1E4F] px-6 py-3 text-[13.5px] font-bold text-white shadow-[0_14px_30px_-14px_rgba(10,30,79,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#13295C]"
            >
              Contact Us
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}