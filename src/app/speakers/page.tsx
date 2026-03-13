"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import SpeakerCard from "@/components/SpeakerCard";
import { KEYNOTE_SPEAKER, PARTNER_TRACKS } from "@/lib/speakers-data";
import FadeInSection from "@/components/FadeInSection";

export default function SpeakersPage() {
  const [activeTrackId, setActiveTrackId] = useState(PARTNER_TRACKS[0]?.id);
  const activeTrack =
    PARTNER_TRACKS.find((track) => track.id === activeTrackId) ??
    PARTNER_TRACKS[0];

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

      {/* Keynote */}
      <section className="bg-[var(--background)] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
              Keynote Speaker
            </h2>
          </FadeInSection>
          <div className="mt-8 max-w-2xl">
            <SpeakerCard
              name={KEYNOTE_SPEAKER.name}
              title={KEYNOTE_SPEAKER.title}
              featured
            />
            <p className="mt-4 text-[var(--muted)]">{KEYNOTE_SPEAKER.bio}</p>
          </div>
        </div>
      </section>

      {/* Tracks with tabs */}
      <section className="border-t border-[var(--border)] bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
                  Partner Organizations & Industries
                </span>
                <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-[var(--foreground)]">
                  Speaker Tracks
                </h2>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.1}>
            <div className="mt-8 flex flex-wrap gap-3">
              {PARTNER_TRACKS.map((track) => (
                <button
                  key={track.id}
                  onClick={() => setActiveTrackId(track.id)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    track.id === activeTrackId
                      ? "border-[var(--accent)] bg-[var(--accent-light)] text-[var(--foreground)]"
                      : "border-[var(--border)] bg-white text-[var(--muted)] hover:border-[var(--accent)]/40"
                  }`}
                >
                  {track.label}
                </button>
              ))}
            </div>
          </FadeInSection>

          <FadeInSection delay={0.15}>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {activeTrack.speakers.map((speaker) => (
                <SpeakerCard
                  key={speaker.name}
                  name={speaker.name}
                  title={speaker.title}
                />
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--dark)] py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-white">
              Want to join the lineup?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/50">
              If you&apos;re interested in speaking or partnering with the
              conference, share your story with us.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/speaker-interest"
                className="inline-flex items-center gap-2 rounded-md bg-[var(--accent)] px-8 py-3.5 font-semibold text-[var(--dark)] transition-colors hover:bg-[var(--accent-hover)]"
              >
                Speaker Interest Form
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/registration"
                className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/5 px-8 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
              >
                Register to Attend
                <ArrowRight size={16} />
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
