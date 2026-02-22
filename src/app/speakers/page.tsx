"use client";

import SpeakerCard from "@/components/SpeakerCard";
import { FEATURED_SPEAKERS, PAST_GUESTS } from "@/lib/speakers-data";
import FadeInSection from "@/components/FadeInSection";

export default function SpeakersPage() {
  return (
    <div className="bg-[var(--background)]">
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <FadeInSection>
          <h1 className="font-serif text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl">
            2026 Featured Speakers
          </h1>
        </FadeInSection>
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_SPEAKERS.map((speaker) => (
            <SpeakerCard
              key={speaker.name}
              name={speaker.name}
              title={speaker.title}
            />
          ))}
        </div>

        <FadeInSection>
          <h2 className="mt-24 font-serif text-3xl font-semibold tracking-tight text-[var(--foreground)]">
            Past Guests
          </h2>
        </FadeInSection>
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PAST_GUESTS.map((guest) => (
            <SpeakerCard key={guest.name} name={guest.name} />
          ))}
        </div>
      </section>
    </div>
  );
}
