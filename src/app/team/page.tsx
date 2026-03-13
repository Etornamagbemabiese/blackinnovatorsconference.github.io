"use client";

import Image from "next/image";
import { TEAM_MEMBERS } from "@/lib/team-data";
import FadeInSection from "@/components/FadeInSection";

export default function TeamPage() {
  return (
    <div>
      <section className="bg-[var(--dark)] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
              The People Behind BIC
            </span>
            <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Meet Our Team
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/60">
              The passionate individuals who make the Black Innovators
              Conference possible.
            </p>
          </FadeInSection>
        </div>
      </section>

      <section className="bg-[var(--background)] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM_MEMBERS.map((member, index) => (
              <FadeInSection key={member.name} delay={index * 0.08}>
                <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-sm">
                  <div className="relative aspect-[3/4] w-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-2 px-4 py-4">
                    <h2 className="font-serif text-lg font-semibold text-[var(--foreground)]">
                      {member.name}
                    </h2>
                    {member.title && (
                      <p className="text-sm font-medium text-[var(--muted)]">
                        {member.title}
                      </p>
                    )}
                    <ul className="mt-2 space-y-1 text-sm text-[var(--muted)]">
                      {member.bio.map((point) => (
                        <li key={point} className="flex gap-2">
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
