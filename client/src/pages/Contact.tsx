import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Globe,
  Send,
  ArrowRight,
  MessageCircle,
  Linkedin,
  Instagram,
  Twitter,
  ChevronDown,
} from "lucide-react";

const fade = (delay = 0) => ({
  initial: { y: 30 },
  whileInView: { y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const SUBJECTS = [
  "General Inquiry",
  "School Partnership",
  "CSR Collaboration",
  "Coaching Programme",
  "Infrastructure Support",
  "Media & Press",
  "Other",
];

const CONTACT_DETAILS = [
  {
    icon: MapPin,
    label: "Head Office",
    value: "3rd Floor, 24, N S Rd No. 9, Nutan Laxmi Society, JVPD Scheme, Vile Parle West, Mumbai 400049",
    sub: "Vile Parle West",
  },
  {
    icon: MapPin,
    label: "Branch Office",
    value: "1001B, 10th Floor, Sri Krishna Building, New Link Road, Andheri West, Mumbai 400053",
    sub: "Andheri West",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 75068 43435",
    sub: "Mon – Fri, 9 AM – 6 PM",
    href: "tel:+917506843435",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "info@marcosquay.org",
    sub: "We reply within 24 hours",
    href: "mailto:info@marcosquay.org",
  },
  {
    icon: Globe,
    label: "Website",
    value: "www.marcosquay.org",
    sub: "Explore our programmes",
    href: "https://marcosquay.org",
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Monday – Friday",
    sub: "9:00 AM – 6:00 PM IST",
  },
];

const SOCIALS = [
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: MessageCircle, label: "WhatsApp", href: "#" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <main className="min-h-screen bg-white pb-20">
      {/* ═══════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-b from-[#F6F8FC] via-white to-[#FAFBFF] overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#165DFF]/[0.08] rounded-full blur-[100px]" />
          <div className="absolute -bottom-32 -right-32 w-[420px] h-[420px] bg-[#3F7CFF]/[0.07] rounded-full blur-[90px]" />
          <svg className="absolute top-20 right-[6%] w-64 h-64 text-[#165DFF]/[0.08] rotate-[10deg]" viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="0.8">
            <circle cx="60" cy="60" r="52" />
            <path d="M60 8 L60 24 M60 96 L60 112 M8 60 L24 60 M96 60 L112 60" />
            <path d="M60 8 C 76 24, 76 44, 60 60 C 44 76, 44 96, 60 112" />
            <path d="M8 60 C 24 44, 44 44, 60 60 C 76 76, 96 76, 112 60" />
          </svg>
          <svg className="absolute bottom-10 left-[8%] w-44 h-44 text-[#165DFF]/[0.06] -rotate-[20deg]" viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="0.6">
            <circle cx="60" cy="60" r="52" />
            <path d="M60 8 C 76 24, 76 44, 60 60 C 44 76, 44 96, 60 112" />
            <path d="M8 60 C 24 44, 44 44, 60 60 C 76 76, 96 76, 112 60" />
          </svg>
          <div className="absolute bottom-16 left-[4%] w-36 h-36 opacity-[0.25]" style={{ backgroundImage: "radial-gradient(#165DFF 1px, transparent 1px)", backgroundSize: "14px 14px" }} />
          <div className="absolute top-32 right-[3%] w-28 h-28 opacity-[0.35]" style={{ backgroundImage: "radial-gradient(#165DFF 0.8px, transparent 0.8px)", backgroundSize: "12px 12px" }} />
          <svg className="absolute top-0 left-0 w-full h-full text-[#165DFF]/[0.15]" viewBox="0 0 1440 400" fill="none" preserveAspectRatio="none">
            <path d="M0 200 C 360 120, 720 280, 1080 160 S 1440 220, 1440 200" stroke="currentColor" strokeWidth="1" />
            <path d="M0 300 C 400 220, 800 380, 1200 260 S 1440 320, 1440 280" stroke="currentColor" strokeWidth="0.6" strokeDasharray="4 12" />
          </svg>
        </div>

        <div className="container relative z-10 pt-28 sm:pt-36 pb-16 md:pb-20">
          <motion.div {...fade(0)} className="max-w-3xl mx-auto text-center">
            {/* Accent line */}
            <div className="flex justify-center mb-6">
              <div className="w-12 h-[3px] rounded-full bg-gradient-to-r from-[#165DFF] to-[#3F7CFF]" />
            </div>

            {/* Serif heading */}
            <h1
              className="text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[5.5rem] leading-[0.95] tracking-[-0.02em] text-[#0A1E4F] mb-6"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              Contact Us
            </h1>

            <p className="text-[0.95rem] sm:text-[1.05rem] text-[#6B7280] leading-relaxed max-w-xl mx-auto">
              Have a question or need support? Simply submit a ticket and we&apos;ll get
              back to you as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          MAIN CONTACT AREA — Form | Info | Map
      ═══════════════════════════════════════════════════ */}
      <section className="relative bg-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 -left-32 w-[380px] h-[380px] bg-[#165DFF]/[0.06] rounded-full blur-[80px]" />
          <div className="absolute bottom-0 -right-28 w-[340px] h-[340px] bg-[#3F7CFF]/[0.05] rounded-full blur-[70px]" />
          <div className="absolute top-[40%] right-[10%] w-[280px] h-[280px] bg-[#0A1E4F]/[0.04] rounded-full blur-[80px]" />
          <div className="absolute top-16 left-[6%] w-32 h-32 opacity-[0.10]" style={{ backgroundImage: "radial-gradient(#165DFF 0.8px, transparent 0.8px)", backgroundSize: "12px 12px" }} />
          <div className="absolute bottom-20 right-[5%] w-28 h-28 opacity-[0.08]" style={{ backgroundImage: "radial-gradient(#165DFF 0.8px, transparent 0.8px)", backgroundSize: "14px 14px" }} />
          <svg className="absolute top-0 left-0 w-full h-full text-[#165DFF]/[0.05]" viewBox="0 0 1440 600" fill="none" preserveAspectRatio="none">
            <path d="M0 120 C 480 40, 960 200, 1440 100" stroke="currentColor" strokeWidth="0.8" />
            <path d="M0 380 C 360 300, 720 460, 1080 340 S 1440 400, 1440 360" stroke="currentColor" strokeWidth="0.6" strokeDasharray="4 14" />
          </svg>
          <svg className="absolute bottom-[15%] left-[3%] w-36 h-36 text-[#165DFF]/[0.05] rotate-[25deg]" viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="0.6">
            <circle cx="60" cy="60" r="52" />
            <path d="M60 8 C 76 24, 76 44, 60 60 C 44 76, 44 96, 60 112" />
          </svg>
        </div>
        <div className="container pt-2 pb-16 md:pt-4 md:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">

            {/* ═══ LEFT — Send us a Message ═══ */}
            <motion.div {...fade(0)} className="lg:col-span-5">
              <div className="mb-5">
                <h2
                  className="text-[1.8rem] sm:text-[2.1rem] text-[#0A1E4F] leading-tight mb-3"
                  style={{ fontFamily: "'DM Serif Display', serif" }}
                >
                  Send us a Message
                </h2>
                <div className="w-10 h-[2.5px] rounded-full bg-[#165DFF] mb-4" />
                <p className="text-[#6B7280] text-[0.9rem] leading-relaxed">
                  Fill out the form below and our team will respond within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-[13px] font-semibold text-[#0A1E4F] mb-1.5">
                    Full Name <span className="text-[#165DFF]">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-[10px] border border-[#E0E5EF] bg-white text-[#0A1E4F] text-[0.9rem] placeholder:text-[#9CA3AF] outline-none transition-all duration-300 focus:border-[#165DFF] focus:ring-2 focus:ring-[#165DFF]/10"
                  />
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-[13px] font-semibold text-[#0A1E4F] mb-1.5">
                      Email Address <span className="text-[#165DFF]">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-[10px] border border-[#E0E5EF] bg-white text-[#0A1E4F] text-[0.9rem] placeholder:text-[#9CA3AF] outline-none transition-all duration-300 focus:border-[#165DFF] focus:ring-2 focus:ring-[#165DFF]/10"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-[13px] font-semibold text-[#0A1E4F] mb-1.5">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-[10px] border border-[#E0E5EF] bg-white text-[#0A1E4F] text-[0.9rem] placeholder:text-[#9CA3AF] outline-none transition-all duration-300 focus:border-[#165DFF] focus:ring-2 focus:ring-[#165DFF]/10"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-[13px] font-semibold text-[#0A1E4F] mb-1.5">
                    Subject <span className="text-[#165DFF]">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-[10px] border border-[#E0E5EF] bg-white text-[#0A1E4F] text-[0.9rem] outline-none appearance-none transition-all duration-300 focus:border-[#165DFF] focus:ring-2 focus:ring-[#165DFF]/10"
                    >
                      <option value="" disabled>Select a subject</option>
                      {SUBJECTS.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF] pointer-events-none" />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-[13px] font-semibold text-[#0A1E4F] mb-1.5">
                    Message <span className="text-[#165DFF]">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="Tell us how we can help..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-[10px] border border-[#E0E5EF] bg-white text-[#0A1E4F] text-[0.9rem] placeholder:text-[#9CA3AF] outline-none resize-none transition-all duration-300 focus:border-[#165DFF] focus:ring-2 focus:ring-[#165DFF]/10"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="inline-flex items-center gap-2.5 rounded-full bg-[#165DFF] text-white font-heading font-bold text-[14px] px-8 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-12px_rgba(22,93,255,0.5)]"
                >
                  <Send className="w-4 h-4" />
                  Submit
                </button>
              </form>
            </motion.div>

            {/* ═══ MIDDLE — Contact Information ═══ */}
            <motion.div {...fade(0.1)} className="lg:col-span-3">
              <div className="mb-8">
                <h3
                  className="text-[1.4rem] text-[#0A1E4F] leading-tight mb-3"
                  style={{ fontFamily: "'DM Serif Display', serif" }}
                >
                  Get in Touch
                </h3>
                <div className="w-8 h-[2.5px] rounded-full bg-[#165DFF]" />
              </div>

              <div className="space-y-6">
                {CONTACT_DETAILS.map((item) => (
                  <div key={item.label} className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-[8px] bg-[#165DFF]/8 flex items-center justify-center shrink-0 mt-0.5">
                      <item.icon className="w-[18px] h-[18px] text-[#165DFF]" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-[#9CA3AF] uppercase tracking-wider mb-0.5">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-[0.9rem] font-semibold text-[#0A1E4F] hover:text-[#165DFF] transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-[0.9rem] font-semibold text-[#0A1E4F]">
                          {item.value}
                        </p>
                      )}
                      <p className="text-[0.78rem] text-[#6B7280] mt-0.5">
                        {item.sub}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social icons */}
              <div className="mt-8 pt-6 border-t border-[#E8ECF4]">
                <p className="text-[11px] font-semibold text-[#9CA3AF] uppercase tracking-wider mb-3">
                  Follow Us
                </p>
                <div className="flex items-center gap-2.5">
                  {SOCIALS.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className="w-9 h-9 rounded-[8px] bg-[#165DFF]/8 flex items-center justify-center text-[#165DFF] hover:bg-[#165DFF] hover:text-white transition-all duration-300"
                    >
                      <s.icon className="w-[18px] h-[18px]" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* ═══ RIGHT — Map ═══ */}
            <motion.div {...fade(0.2)} className="lg:col-span-4">
              <div className="relative rounded-[18px] overflow-hidden border border-[#E0E5EF] shadow-[0_8px_40px_-12px_rgba(10,30,79,0.1)]">
                {/* Map */}
                <div className="h-[580px] lg:h-[680px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.8!2d72.8407!3d19.0984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA1JzU0LjIiTiA3MsKwNTAnMjYuNSJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin&q=Marcos+Quay+Foundation,+Vile+Parle+West,+Mumbai"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Marcos Quay Foundation Location"
                  />
                </div>

                {/* Location overlay — HTML, not inside map */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/95 backdrop-blur-md rounded-[12px] p-4 shadow-[0_8px_30px_-8px_rgba(10,30,79,0.18)] border border-white/60">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-[#165DFF] flex items-center justify-center shrink-0 mt-0.5">
                          <MapPin className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <p className="font-heading font-bold text-[0.85rem] text-[#0A1E4F]">
                            Marcos Quay Foundation
                          </p>
                          <p className="text-[0.75rem] text-[#6B7280] mt-0.5">
                            Vile Parle West, Mumbai
                          </p>
                        </div>
                      </div>
                    </div>
                    <a
                      href="https://maps.google.com/?q=19.0984,72.8407"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#165DFF] hover:text-[#0A1E4F] transition-colors"
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SUPPORT STRIP
      ═══════════════════════════════════════════════════ */}
      <section className="relative bg-[#F6F8FC] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-[#165DFF]/[0.06] rounded-full blur-[70px]" />
          <div className="absolute -bottom-24 -left-16 w-[260px] h-[260px] bg-[#3F7CFF]/[0.05] rounded-full blur-[70px]" />
          <div className="absolute top-[30%] left-[8%] w-24 h-24 opacity-[0.10]" style={{ backgroundImage: "radial-gradient(#165DFF 0.8px, transparent 0.8px)", backgroundSize: "12px 12px" }} />
          <svg className="absolute top-0 left-0 w-full h-full text-[#165DFF]/[0.05]" viewBox="0 0 1440 200" fill="none" preserveAspectRatio="none">
            <path d="M0 100 C 480 40, 960 160, 1440 80" stroke="currentColor" strokeWidth="0.8" />
            <path d="M0 160 C 360 100, 720 180, 1080 120 S 1440 150, 1440 130" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 14" />
          </svg>
        </div>

        <div className="container relative z-10 py-14 md:py-18">
          <motion.div {...fade(0)} className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#165DFF]/8 mb-5">
              <MessageCircle className="w-4 h-4 text-[#165DFF]" />
              <span className="text-[12px] font-semibold text-[#165DFF]">
                We&apos;re here to help
              </span>
            </div>

            <h3
              className="text-[1.6rem] sm:text-[1.9rem] text-[#0A1E4F] leading-snug mb-3"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              Our team typically responds within 24 hours.
            </h3>

            <p className="text-[#6B7280] text-[0.9rem] leading-relaxed mb-8 max-w-lg mx-auto">
              Whether you&apos;re a school administrator, CSR professional, or parent —
              we&apos;re ready to assist you with any questions about our programmes.
            </p>

            {/* Social icons */}
            <div className="flex items-center justify-center gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full bg-white border border-[#E0E5EF] flex items-center justify-center text-[#165DFF] hover:bg-[#165DFF] hover:text-white hover:border-[#165DFF] transition-all duration-300"
                >
                  <s.icon className="w-[18px] h-[18px]" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
