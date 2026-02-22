"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Mic2, TrendingUp, Sparkles, ChevronDown } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";

const pillars = [
  {
    icon: Users,
    title: "Community",
    description: "A space where Black professionals and students connect, share ideas, and build lasting relationships.",
  },
  {
    icon: Mic2,
    title: "Voice",
    description: "Platforms for dialogue on the Black experience in corporate America, entrepreneurship, and innovation.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description: "Professional development, mentorship, and career advancement opportunities designed for your success.",
  },
];

const faqs = [
  {
    question: "What is the Black Innovators Conference?",
    answer: "An annual gathering at UNC that brings together Black professionals, students, and innovators to network, learn, and celebrate excellence. We create a space for meaningful connection and career growth.",
  },
  {
    question: "Who should attend?",
    answer: "Students, early-career professionals, entrepreneurs, and established leaders—anyone looking to connect with the Black professional community and invest in their growth.",
  },
  {
    question: "What makes it different?",
    answer: "We focus on the full experience: networking with seasoned professionals, panels on real challenges and opportunities, and a community built on authenticity and mutual support.",
  },
];

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-[var(--background)]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#E0F2F7] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <p className="text-sm font-medium uppercase tracking-widest text-[var(--muted)]">
              About Us
            </p>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
              We&apos;re on a mission to bring people{" "}
              <span className="italic">together.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--foreground)]/90">
              The Black Innovators Conference at UNC is a space where Black professionals, students, and innovators connect, share ideas, and build community. We believe in the power of bringing people together to create meaningful change and foster career growth.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Pillars - Interactive cards */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
              What We Stand For
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-[var(--muted)]">
              Our pillars guide everything we do.
            </p>
          </FadeInSection>
          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {pillars.map((pillar, index) => (
              <FadeInSection key={pillar.title} delay={index * 0.1}>
                <motion.div
                  className="group cursor-pointer rounded-2xl border border-[var(--border)] bg-white p-8 shadow-sm transition-shadow hover:border-[#7DD3FC] hover:shadow-lg"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#E0F2F7] transition-colors group-hover:bg-[#7DD3FC]/30">
                    <pillar.icon size={28} className="text-[var(--foreground)]" />
                  </div>
                  <h3 className="mt-6 font-serif text-xl font-semibold text-[var(--foreground)]">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-[var(--muted)]">
                    {pillar.description}
                  </p>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mission statement - Highlight */}
      <section className="bg-[#E0F2F7] py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <FadeInSection>
            <Sparkles size={32} className="mx-auto text-[var(--muted)]" />
            <blockquote className="mt-6 font-serif text-2xl italic leading-relaxed text-[var(--foreground)] sm:text-3xl">
              &ldquo;Our mission is to provide a platform for networking, panels, and professional development—all within a space designed to celebrate and elevate Black excellence.&rdquo;
            </blockquote>
          </FadeInSection>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
              Learn More
            </h2>
            <p className="mt-4 text-lg text-[var(--muted)]">
              Common questions about the conference.
            </p>
          </FadeInSection>
          <div className="mt-12 space-y-2">
            {faqs.map((item, index) => (
              <FadeInSection key={index} delay={index * 0.05}>
                <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-white">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-[#f9fafb]"
                  >
                    <span className="font-medium text-[var(--foreground)]">
                      {item.question}
                    </span>
                    <motion.span
                      animate={{ rotate: openFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown size={20} className="text-[var(--muted)]" />
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="border-t border-[var(--border)] px-6 py-4 text-[var(--muted)]">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[var(--border)] bg-white/50 py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
              Ready to join us?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-[var(--muted)]">
              Be part of the community. Register for this year&apos;s conference.
            </p>
            <Link
              href="/registration"
              className="mt-8 inline-flex items-center rounded-lg border-2 border-[var(--foreground)] bg-transparent px-8 py-3 font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--foreground)] hover:text-[var(--background)]"
            >
              RSVP for 2026
            </Link>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
