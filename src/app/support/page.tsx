"use client";

import Link from "next/link";
import { Heart, ArrowRight, Mail, Handshake, Gift } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";

const sponsors = [
  { name: "Sponsor 1" },
  { name: "Sponsor 2" },
  { name: "Sponsor 3" },
];

const supportWays = [
  {
    icon: Gift,
    title: "Donate",
    description:
      "Your financial contribution directly supports programming, venue costs, and student scholarships.",
  },
  {
    icon: Handshake,
    title: "Sponsor",
    description:
      "Partner with us as a corporate sponsor and connect your brand with the next generation of Black innovators.",
  },
  {
    icon: Mail,
    title: "Spread the Word",
    description:
      "Follow us on social media, share our mission, and help us reach more people in the community.",
  },
];

export default function SupportPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[var(--dark)] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
              Get Involved
            </span>
            <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Support the Conference
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
              The Black Innovators Conference is made possible by the generosity
              of our sponsors and community. Your support helps us create a
              space where Black professionals can connect, learn, and grow.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Ways to Support */}
      <section className="bg-[var(--background)] py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
              Ways to Help
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
              How You Can Contribute
            </h2>
          </FadeInSection>
          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {supportWays.map((way, index) => (
              <FadeInSection key={way.title} delay={index * 0.1}>
                <div className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-white p-8 transition-all duration-300 hover:border-[var(--accent)]/30 hover:shadow-xl">
                  <div className="absolute right-0 top-0 h-32 w-32 -translate-y-8 translate-x-8 rounded-full bg-[var(--accent)]/5 transition-transform duration-500 group-hover:scale-150" />
                  <div className="relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-light)]">
                      <way.icon
                        size={22}
                        className="text-[var(--accent-hover)]"
                      />
                    </div>
                    <h3 className="mt-6 font-serif text-xl font-bold text-[var(--foreground)]">
                      {way.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-[var(--muted)]">
                      {way.description}
                    </p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Current Sponsors */}
      <section className="border-t border-[var(--border)] bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
                Our Partners
              </span>
              <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-[var(--foreground)]">
                Sponsors
              </h2>
            </div>
          </FadeInSection>
          <FadeInSection delay={0.1}>
            <div className="mx-auto mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-6">
              {sponsors.map((sponsor) => (
                <div
                  key={sponsor.name}
                  className="flex h-24 w-48 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--background)] text-sm font-medium text-[var(--muted)] transition-colors hover:border-[var(--accent)]/30"
                >
                  {sponsor.name}
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Donate CTA */}
      <section className="bg-[var(--dark)] py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-sm sm:p-14">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--accent)]/10">
                <Heart size={28} className="text-[var(--accent)]" />
              </div>
              <h3 className="mt-6 font-serif text-2xl font-bold text-white sm:text-3xl">
                Every contribution makes a difference
              </h3>
              <p className="mx-auto mt-4 max-w-md text-white/50">
                Help us continue building this community. Your support enables
                programming, scholarships, and resources for attendees.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Link
                  href="#"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-[var(--accent)] px-8 py-3.5 font-semibold text-[var(--dark)] transition-colors hover:bg-[var(--accent-hover)]"
                >
                  Support Us
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/registration"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 bg-white/5 px-8 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Register Instead
                </Link>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
