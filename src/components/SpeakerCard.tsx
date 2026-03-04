"use client";

import { Mic2, Star } from "lucide-react";

interface SpeakerCardProps {
  name: string;
  title?: string;
  featured?: boolean;
}

export default function SpeakerCard({ name, title, featured }: SpeakerCardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:shadow-xl ${
        featured
          ? "border-[var(--accent)]/20 bg-white hover:border-[var(--accent)]/40"
          : "border-[var(--border)] bg-white hover:border-[var(--accent)]/20"
      }`}
    >
      {featured && (
        <div className="absolute right-0 top-0 h-24 w-24 -translate-y-6 translate-x-6 rounded-full bg-[var(--accent)]/5 transition-transform duration-500 group-hover:scale-150" />
      )}
      <div className="relative flex items-start gap-4">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
            featured ? "bg-[var(--accent-light)]" : "bg-[var(--background)]"
          }`}
        >
          {featured ? (
            <Star size={18} className="text-[var(--accent)]" />
          ) : (
            <Mic2 size={18} className="text-[var(--muted)]" />
          )}
        </div>
        <div>
          <p className="font-serif text-lg font-bold text-[var(--foreground)]">
            {name}
          </p>
          {title && (
            <p className={`mt-1 text-sm ${featured ? "text-[var(--accent-hover)]" : "text-[var(--muted)]"}`}>
              {title}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
