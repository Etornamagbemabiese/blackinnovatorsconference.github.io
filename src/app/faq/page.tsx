"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import FadeInSection from "@/components/FadeInSection";

const faqItems = [
  {
    question: "When and where is the conference?",
    answer: "The Black Innovators Conference takes place annually at the University of North Carolina at Chapel Hill. Specific dates and venue details for 2026 will be announced soon.",
  },
  {
    question: "Is registration free?",
    answer: "Yes, registration for the conference is free. We believe in making this space accessible to all black professionals and students.",
  },
  {
    question: "Who can attend?",
    answer: "The conference is open to black professionals, students, entrepreneurs, and anyone interested in connecting with and supporting the black innovation community.",
  },
  {
    question: "What should I bring?",
    answer: "Bring your business cards, an open mind, and readiness to network. We recommend dressing business casual for the event.",
  },
  {
    question: "How can I become a speaker or sponsor?",
    answer: "Please reach out to us through our Support page or contact information. We welcome speakers and sponsors who align with our mission.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-[var(--background)]">
      <section className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
        <FadeInSection>
          <h1 className="font-serif text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl">
            Frequently Asked Questions
          </h1>
        </FadeInSection>
        <FadeInSection delay={0.1}>
          <p className="mt-4 text-lg text-[var(--muted)]">
            Logistics and answers to common questions.
          </p>
        </FadeInSection>
        <div className="mt-12 space-y-2">
          {faqItems.map((item, index) => (
            <FadeInSection key={index} delay={0.05 * index}>
              <div className="overflow-hidden rounded-lg border border-[var(--border)] bg-white">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left font-medium text-[var(--foreground)] transition-colors hover:bg-[#f9fafb]"
                >
                  <span>{item.question}</span>
                  <motion.span
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown size={20} className="text-[var(--muted)]" />
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
      </section>
    </div>
  );
}
