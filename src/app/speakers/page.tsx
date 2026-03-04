"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SpeakerCard from "@/components/SpeakerCard";
import { FEATURED_SPEAKERS, PAST_GUESTS } from "@/lib/speakers-data";
import FadeInSection from "@/components/FadeInSection";

export default function SpeakersPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[var(--dark)] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
              2026 Lineup
            </span>
            <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Featured Speakers
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/60">
              Industry leaders, entrepreneurs, and innovators who are shaping
              the future. More speakers to be announced.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Featured Speakers */}
      <section className="bg-[var(--background)] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURED_SPEAKERS.map((speaker, index) => (
              <FadeInSection key={speaker.name} delay={index * 0.08}>
                <SpeakerCard name={speaker.name} title={speaker.title} featured />
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Past Guests */}
      <section className="border-t border-[var(--border)] bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
              Previous Years
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-[var(--foreground)]">
              Past Guests
            </h2>
          </FadeInSection>
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PAST_GUESTS.map((guest, index) => (
              <FadeInSection key={guest.name} delay={index * 0.05}>
                <SpeakerCard name={guest.name} />
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--dark)] py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-white">
              Want to hear them speak?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/50">
              Register for the 2026 conference to experience all our speakers
              and panels live.
            </p>
            <Link
              href="/registration"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-[var(--accent)] px-8 py-3.5 font-semibold text-[var(--dark)] transition-colors hover:bg-[var(--accent-hover)]"
            >
              Register for 2026
              <ArrowRight size={16} />
            </Link>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
