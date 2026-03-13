"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import FadeInSection from "@/components/FadeInSection";

const faqItems = [
  {
    question: "When and where is the conference?",
    answer:
      "The Black Innovators Conference takes place annually at the University of North Carolina at Chapel Hill. Specific dates and venue details for 2026 will be announced soon.",
  },
  {
    question: "Is registration free?",
    answer:
      "Yes, registration for the conference is free. We believe in making this space accessible to all Black professionals and students.",
  },
  {
    question: "Who can attend?",
    answer:
      "The conference is open to Black professionals, students, entrepreneurs, and anyone interested in connecting with and supporting the Black innovation community.",
  },
  {
    question: "What should I bring?",
    answer:
      "Bring your business cards, an open mind, and readiness to network. Dress code is business professional for the conference.",
  },
  {
    question: "How can I become a speaker or sponsor?",
    answer:
      "Please reach out to us through our Support page or contact information. We welcome speakers and sponsors who align with our mission.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div>
      {/* Hero */}
      <section className="bg-[var(--dark)] py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
              Help Center
            </span>
            <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 text-lg text-white/60">
              Everything you need to know about the conference.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="bg-[var(--background)] py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            {faqItems.map((item, index) => (
              <FadeInSection key={index} delay={0.05 * index}>
                <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-white transition-colors hover:border-[var(--accent)]/20">
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors"
                  >
                    <span className="pr-4 font-medium text-[var(--foreground)]">
                      {item.question}
                    </span>
                    <motion.span
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0"
                    >
                      <ChevronDown
                        size={20}
                        className="text-[var(--accent)]"
                      />
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
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

          <FadeInSection>
            <div className="mt-16 rounded-2xl border border-[var(--border)] bg-white p-8 text-center sm:p-10">
              <h2 className="font-serif text-2xl font-bold text-[var(--foreground)]">
                Still have questions?
              </h2>
              <p className="mx-auto mt-3 max-w-md text-[var(--muted)]">
                Reach out to us through our support page or follow us on social
                media for the latest updates.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Link
                  href="/support"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[var(--dark)] transition-colors hover:bg-[var(--accent-hover)]"
                >
                  Contact Us
                  <ArrowRight size={14} />
                </Link>
                <Link
                  href="/registration"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-[var(--border)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition-colors hover:bg-[var(--accent-light)]"
                >
                  Register
                </Link>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
