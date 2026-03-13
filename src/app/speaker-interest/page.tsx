"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";

export default function SpeakerInterestPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="bg-[var(--background)]">
      <section className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
        <FadeInSection>
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
            Speaker Interest
          </span>
          <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl">
            Share your story on stage
          </h1>
          <p className="mt-4 text-lg text-[var(--muted)]">
            If you&apos;re interested in speaking at the Black Innovators
            Conference, tell us a bit about yourself and your experience.
          </p>
        </FadeInSection>

        <FadeInSection delay={0.1}>
          {submitted ? (
            <div className="mt-10 rounded-2xl border border-[var(--border)] bg-white p-8 text-[var(--foreground)]">
              <h2 className="font-serif text-2xl font-semibold">
                Thank you for your interest.
              </h2>
              <p className="mt-3 text-[var(--muted)]">
                We&apos;ll review your submission and follow up with next steps
                if there is a good fit for this year&apos;s programming.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-10 space-y-6 rounded-2xl border border-[var(--border)] bg-white p-8"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[var(--foreground)]">
                    First Name
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full rounded-md border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm outline-none ring-0 focus:border-[var(--accent)]"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[var(--foreground)]">
                    Last Name
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full rounded-md border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm outline-none ring-0 focus:border-[var(--accent)]"
                  />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-[var(--foreground)]">
                  Email
                </label>
                <input
                  required
                  type="email"
                  className="w-full rounded-md border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm outline-none ring-0 focus:border-[var(--accent)]"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-[var(--foreground)]">
                  Current role & organization
                </label>
                <input
                  required
                  type="text"
                  className="w-full rounded-md border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm outline-none ring-0 focus:border-[var(--accent)]"
                  placeholder="e.g., Consultant at XYZ, Product Manager at ABC"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-[var(--foreground)]">
                  Briefly describe your career experience and what you&apos;d
                  like to speak about
                </label>
                <textarea
                  required
                  rows={5}
                  className="w-full rounded-md border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm outline-none ring-0 focus:border-[var(--accent)]"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-md bg-[var(--accent)] px-8 py-3.5 font-semibold text-[var(--dark)] transition-colors hover:bg-[var(--accent-hover)]"
              >
                Submit interest
                <ArrowRight size={16} />
              </button>
            </form>
          )}
        </FadeInSection>
      </section>
    </div>
  );
}

