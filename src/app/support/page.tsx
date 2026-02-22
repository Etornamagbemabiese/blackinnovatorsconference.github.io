"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";

const sponsors = [
  { name: "Sponsor 1" },
  { name: "Sponsor 2" },
  { name: "Sponsor 3" },
];

export default function SupportPage() {
  return (
    <div className="bg-[var(--background)]">
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <FadeInSection>
          <h1 className="font-serif text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl">
            Support the Conference
          </h1>
        </FadeInSection>
        <FadeInSection delay={0.1}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
            The Black Innovators Conference is made possible by the generosity of our sponsors and community. Your support helps us create a space where black professionals can connect, learn, and grow together.
          </p>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <h2 className="mt-16 font-serif text-2xl font-semibold text-[var(--foreground)]">
            Our Sponsors
          </h2>
          <div className="mt-8 flex flex-wrap gap-8">
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.name}
                className="flex h-24 w-48 items-center justify-center rounded-lg border border-[var(--border)] bg-white text-[var(--muted)]"
              >
                {sponsor.name}
              </div>
            ))}
          </div>
        </FadeInSection>

        <FadeInSection delay={0.3}>
          <div className="mt-20 rounded-2xl border border-[var(--border)] bg-white p-8 sm:p-12">
            <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#f5f5f5]">
                <Heart size={28} className="text-[var(--foreground)]" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-semibold text-[var(--foreground)]">
                  Donate / Support
                </h3>
                <p className="mt-2 text-[var(--muted)]">
                  Help us continue building this community. Every contribution makes a difference.
                </p>
              </div>
              <Link
                href="#"
                className="shrink-0 rounded-lg border-2 border-[var(--foreground)] px-6 py-3 font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--foreground)] hover:text-[var(--background)]"
              >
                Support Us
              </Link>
            </div>
          </div>
        </FadeInSection>
      </section>
    </div>
  );
}
