"use client";

import TeamFlipCard from "@/components/TeamFlipCard";
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
              Conference possible. Tap any card to learn more.
            </p>
          </FadeInSection>
        </div>
      </section>

      <section className="bg-[var(--background)] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM_MEMBERS.map((member, index) => (
              <FadeInSection key={member.name} delay={index * 0.08}>
                <TeamFlipCard
                  name={member.name}
                  image={member.image}
                  bio={member.bio}
                  title={member.title}
                />
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
