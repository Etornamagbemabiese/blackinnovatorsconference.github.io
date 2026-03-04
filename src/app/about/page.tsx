"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Mic2, TrendingUp, ChevronDown, ArrowRight } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";

const pillars = [
  {
    icon: Users,
    title: "Community",
    description:
      "A space where Black professionals and students connect, share ideas, and build lasting relationships that transcend the conference.",
  },
  {
    icon: Mic2,
    title: "Voice",
    description:
      "Platforms for meaningful dialogue on the Black experience in corporate America, entrepreneurship, and innovation.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description:
      "Professional development, mentorship, and career advancement opportunities designed to accelerate your success.",
  },
];

const faqs = [
  {
    question: "What is the Black Innovators Conference?",
    answer:
      "An annual gathering at UNC that brings together Black professionals, students, and innovators to network, learn, and celebrate excellence. We create a space for meaningful connection and career growth.",
  },
  {
    question: "Who should attend?",
    answer:
      "Students, early-career professionals, entrepreneurs, and established leaders—anyone looking to connect with the Black professional community and invest in their growth.",
  },
  {
    question: "What makes it different?",
    answer:
      "We focus on the full experience: networking with seasoned professionals, panels on real challenges and opportunities, and a community built on authenticity and mutual support.",
  },
];

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div>
      {/* Hero */}
      <section className="bg-[var(--dark)] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
              About Us
            </span>
            <h1 className="mt-4 max-w-3xl font-serif text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              We&apos;re on a mission to bring people{" "}
              <span className="italic text-[var(--accent)]">together.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/60">
              The Black Innovators Conference at UNC is a space where Black
              professionals, students, and innovators connect, share ideas, and
              build community. We believe in the power of bringing people
              together to create meaningful change and foster career growth.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-[var(--background)] py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
              Our Foundation
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
              What We Stand For
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-[var(--muted)]">
              Our pillars guide everything we do.
            </p>
          </FadeInSection>
          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {pillars.map((pillar, index) => (
              <FadeInSection key={pillar.title} delay={index * 0.1}>
                <motion.div
                  className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-white p-8 transition-all duration-300 hover:border-[var(--accent)]/30 hover:shadow-xl"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="absolute right-0 top-0 h-32 w-32 -translate-y-8 translate-x-8 rounded-full bg-[var(--accent)]/5 transition-transform duration-500 group-hover:scale-150" />
                  <div className="relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-light)]">
                      <pillar.icon
                        size={22}
                        className="text-[var(--accent-hover)]"
                      />
                    </div>
                    <h3 className="mt-6 font-serif text-xl font-bold text-[var(--foreground)]">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-[var(--muted)]">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Highlight */}
      <section className="bg-[var(--dark)] py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--accent)]/10">
              <div className="h-2 w-2 rounded-full bg-[var(--accent)]" />
            </div>
            <blockquote className="mt-8 font-serif text-2xl font-medium italic leading-relaxed text-white sm:text-3xl">
              &ldquo;Our mission is to provide a platform for networking,
              panels, and professional development—all within a space designed
              to celebrate and elevate Black excellence.&rdquo;
            </blockquote>
          </FadeInSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[var(--background)] py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
              Common Questions
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
              Learn More
            </h2>
          </FadeInSection>
          <div className="mt-12 space-y-3">
            {faqs.map((item, index) => (
              <FadeInSection key={index} delay={index * 0.05}>
                <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-white transition-colors hover:border-[var(--accent)]/20">
                  <button
                    onClick={() =>
                      setOpenFaq(openFaq === index ? null : index)
                    }
                    className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors"
                  >
                    <span className="font-medium text-[var(--foreground)]">
                      {item.question}
                    </span>
                    <motion.span
                      animate={{ rotate: openFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown
                        size={20}
                        className="text-[var(--accent)]"
                      />
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
                        <p className="border-t border-[var(--border)] px-6 py-5 leading-relaxed text-[var(--muted)]">
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
      <section className="border-t border-[var(--border)] bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
              Ready to join us?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-[var(--muted)]">
              Be part of the community. Registration is free and open to all.
            </p>
            <Link
              href="/registration"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-[var(--accent)] px-8 py-3.5 font-semibold text-[var(--dark)] transition-colors hover:bg-[var(--accent-hover)]"
            >
              RSVP for 2026
              <ArrowRight size={16} />
            </Link>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
