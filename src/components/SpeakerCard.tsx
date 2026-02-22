"use client";

import FadeInSection from "./FadeInSection";

interface SpeakerCardProps {
  name: string;
  title?: string;
}

export default function SpeakerCard({ name, title }: SpeakerCardProps) {
  return (
    <FadeInSection>
      <div className="rounded-2xl border border-[var(--border)] bg-white px-6 py-5 shadow-sm">
        <p className="font-serif text-lg font-semibold text-[var(--foreground)]">{name}</p>
        {title && (
          <p className="mt-1 text-sm text-[var(--muted)]">{title}</p>
        )}
      </div>
    </FadeInSection>
  );
}
