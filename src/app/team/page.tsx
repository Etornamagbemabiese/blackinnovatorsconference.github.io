"use client";

import TeamFlipCard from "@/components/TeamFlipCard";
import { TEAM_MEMBERS } from "@/lib/team-data";
import FadeInSection from "@/components/FadeInSection";

export default function TeamPage() {
  return (
    <div className="bg-[var(--background)]">
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <FadeInSection>
          <h1 className="font-serif text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl">
            Our People
          </h1>
        </FadeInSection>
        <FadeInSection delay={0.1}>
          <p className="mt-4 max-w-2xl text-lg text-[var(--muted)]">
            Click any card to flip and read their bio.
          </p>
        </FadeInSection>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM_MEMBERS.map((member) => (
            <FadeInSection key={member.name}>
              <TeamFlipCard
                name={member.name}
                image={member.image}
                bio={member.bio}
                title={member.title}
              />
            </FadeInSection>
          ))}
        </div>
      </section>
    </div>
  );
}
