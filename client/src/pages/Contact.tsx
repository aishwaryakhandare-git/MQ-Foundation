/**
 * Contact Page — Marcos Quay Foundation
 * Design: Clean Canvas NGO — modern, professional, accessible.
 * Sections: Consultation Form, Google Map, Contact Details, Office Hours
 */
import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MapView } from "@/components/Map";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { toast } from "sonner";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  ArrowRight,
  Send,
  Calendar,
  Download,
  Building,
  Users,
} from "lucide-react";

/* ─── Scroll Reveal Wrapper ─── */
function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, isVisible } = useScrollReveal(0.15);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ─── Contact Info Cards ─── */
const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "info@marcosquay.org",
    href: "mailto:info@marcosquay.org",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 75068 43435",
    href: "tel:+9175068 43435",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Mumbai, India",
    href: "#",
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Mon–Fri, 9 AM – 6 PM",
    href: "#",
  },
];

/* ─── FAQ Items ─── */
const faqs = [
  {
    q: "How do I book a consultation?",
    a: "Simply fill out the form above or call us directly. We'll respond within 24 hours to schedule a convenient time for discussion.",
  },
  {
    q: "Is the initial consultation free?",
    a: "Yes, the first consultation is completely free. We'll assess your school's needs and provide a tailored programme proposal.",
  },
  {
    q: "Can we get the school brochure?",
    a: "Absolutely. You can request a digital copy via the form or email us at info@marcosquay.org.",
  },
  {
    q: "How quickly can we start the programme?",
    a: "Typically within 4-6 weeks of signing the partnership agreement, depending on coach availability and your school's readiness.",
  },
];

/* ─── MAIN PAGE ─── */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    school: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll get back to you within 24 hours.");
    setFormData({ name: "", school: "", email: "", phone: "", city: "", message: "" });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* ═══════ HERO ═══════ */}
      <section className="relative py-20 md:py-28 bg-[#F7FAFC]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <p className="text-[#1E5AA8] font-semibold text-sm uppercase tracking-widest mb-4">
                Get In Touch
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="heading-1 text-[#1F2937] mb-6">
                Let's Start a<br />Conversation
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="body-lg max-w-2xl mx-auto">
                Whether you're a school administrator, principal, or CSR
                professional — we'd love to hear from you.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════ CONTACT INFO CARDS ═══════ */}
      <section className="py-12 bg-white border-b border-[#E5E7EB]">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((info, i) => (
              <Reveal key={info.label} delay={i * 60}>
                <a
                  href={info.href}
                  className="flex items-center gap-3 p-4 rounded-xl bg-[#F7FAFC] border border-[#E5E7EB]/50 hover:border-[#1E5AA8]/20 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#1E5AA8]/10 flex items-center justify-center shrink-0">
                    <info.icon className="w-5 h-5 text-[#1E5AA8]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#6B7280] font-medium uppercase">
                      {info.label}
                    </p>
                    <p className="text-sm font-medium text-[#1F2937]">
                      {info.value}
                    </p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ FORM + MAP ═══════ */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <Reveal>
              <div>
                <h2 className="heading-2 text-[#1F2937] mb-2">
                  Book a Consultation
                </h2>
                <p className="text-[#6B7280] mb-8">
                  Fill out the form below and our team will get back to you
                  within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium text-[#1F2937]">
                        Your Name *
                      </Label>
                      <Input
                        id="name"
                        placeholder="Full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="rounded-xl border-[#E5E7EB] focus:border-[#1E5AA8] focus:ring-[#1E5AA8]/20"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="school" className="text-sm font-medium text-[#1F2937]">
                        School Name *
                      </Label>
                      <Input
                        id="school"
                        placeholder="School name"
                        value={formData.school}
                        onChange={(e) => setFormData({ ...formData, school: e.target.value })}
                        className="rounded-xl border-[#E5E7EB] focus:border-[#1E5AA8] focus:ring-[#1E5AA8]/20"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium text-[#1F2937]">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="rounded-xl border-[#E5E7EB] focus:border-[#1E5AA8] focus:ring-[#1E5AA8]/20"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium text-[#1F2937]">
                        Phone
                      </Label>
                      <Input
                        id="phone"
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="rounded-xl border-[#E5E7EB] focus:border-[#1E5AA8] focus:ring-[#1E5AA8]/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-sm font-medium text-[#1F2937]">
                      City
                    </Label>
                    <Input
                      id="city"
                      placeholder="City"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="rounded-xl border-[#E5E7EB] focus:border-[#1E5AA8] focus:ring-[#1E5AA8]/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium text-[#1F2937]">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your school's sports education needs..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="rounded-xl border-[#E5E7EB] focus:border-[#1E5AA8] focus:ring-[#1E5AA8]/20 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="bg-[#1E5AA8] text-white hover:bg-[#1a4d8f] rounded-full px-8 py-6 font-semibold text-base w-full sm:w-auto"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Submit Consultation Request
                  </Button>
                </form>
              </div>
            </Reveal>

            {/* Map + Sidebar */}
            <Reveal delay={200}>
              <div className="space-y-6">
                {/* Google Map */}
                <div className="rounded-2xl overflow-hidden border border-[#E5E7EB]">
                  <MapView
                    className="h-72"
                    initialCenter={{ lat: 28.6139, lng: 77.209 }}
                    initialZoom={13}
                    onMapReady={(map) => {
                      if (typeof google !== 'undefined' && google.maps) {
                        new google.maps.Marker({
                          position: { lat: 28.6139, lng: 77.209 },
                          map,
                          title: "Marcos Quay Foundation",
                        });
                      }
                    }}
                  />
                </div>

                {/* Quick Actions */}
                <div className="bg-[#F7FAFC] rounded-2xl p-6 border border-[#E5E7EB]">
                  <h3 className="font-heading font-semibold text-lg text-[#1F2937] mb-4">
                    Quick Actions
                  </h3>
                  <div className="space-y-3">
                    <a
                      href="#"
                      className="flex items-center gap-3 text-sm text-[#6B7280] hover:text-[#1E5AA8] transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Chat on WhatsApp</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-3 text-sm text-[#6B7280] hover:text-[#1E5AA8] transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download School Brochure</span>
                    </a>
                    <a
                      href="/schools"
                      className="flex items-center gap-3 text-sm text-[#6B7280] hover:text-[#1E5AA8] transition-colors"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>View Our Process</span>
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════ FAQ ═══════ */}
      <section className="section-padding bg-[#F7FAFC]">
        <div className="container max-w-3xl">
          <Reveal>
            <div className="text-center mb-14">
              <p className="text-[#32B768] font-semibold text-sm uppercase tracking-widest mb-3">
                Questions?
              </p>
              <h2 className="heading-2 text-[#1F2937]">
                Frequently Asked
              </h2>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-b border-[#E5E7EB]">
                  <AccordionTrigger className="text-left font-heading font-medium text-[#1F2937] text-base hover:text-[#1E5AA8]">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#6B7280] text-sm leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>
    </div>
  );
}


