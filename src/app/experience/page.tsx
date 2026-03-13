"use client";

import Link from "next/link";
import Image from "next/image";
import { Users, Mic2, TrendingUp, Lightbulb, Handshake, Award, ArrowRight } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";
import { basePath } from "@/lib/constants";

const experienceItems = [
  {
    icon: Users,
    title: "Networking",
    description:
      "Connect with Black professionals across industries. Build meaningful relationships that extend beyond the conference and last a lifetime.",
    highlights: [
      "Curated small-group networking with professionals and peers",
      "Opportunities to meet partner organizations and recruiters",
      "Dedicated time to reconnect with the Black UNC community",
    ],
  },
  {
    icon: Mic2,
    title: "Panels & Discussions",
    description:
      "Hear from industry leaders and innovators. Engage in real discussions on career growth, entrepreneurship, and the Black experience in corporate America.",
    highlights: [
      "Keynote conversation with our featured speaker",
      "Industry panels spanning consulting, finance, tech, and more",
      "Interactive Q&A designed for honest and actionable insight",
    ],
  },
  {
    icon: TrendingUp,
    title: "Career Development",
    description:
      "Gain insights and tools to advance your career. Workshops, mentorship opportunities, and resources designed specifically for your success.",
    highlights: [
      "Resume and LinkedIn feedback from experienced professionals",
      "Guided conversations about recruiting, internships, and full-time roles",
      "Practical sessions on storytelling, personal brand, and navigating early career",
    ],
  },
];

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Championing new ideas and creative problem-solving.",
  },
  {
    icon: Handshake,
    title: "Connection",
    description: "Building bridges between professionals and students.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Celebrating achievement and fostering ambition.",
  },
];

export default function ExperiencePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--dark)] py-24 lg:py-32">
        <div className="absolute inset-0 opacity-20">
          <Image
            src={`${basePath}/hero-group.jpg`}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--dark)] via-[var(--dark)]/80 to-[var(--dark)]/60" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
              The Full Experience
            </span>
            <h1 className="mt-4 max-w-2xl font-serif text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              More than a conference.{" "}
              <span className="italic text-[var(--accent)]">
                A movement.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/60">
              From networking with seasoned professionals to hearing powerful
              stories of innovation — here&apos;s what awaits you.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Experience Items */}
      <section className="bg-[var(--background)] py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {experienceItems.map((item, index) => (
              <FadeInSection key={item.title} delay={index * 0.1}>
                <div
                  className={`flex flex-col gap-10 lg:flex-row lg:items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex-1">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--accent-light)]">
                      <item.icon
                        size={24}
                        className="text-[var(--accent-hover)]"
                      />
                    </div>
                    <h2 className="mt-6 font-serif text-3xl font-bold text-[var(--foreground)]">
                      {item.title}
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex-1">
                    <div className="rounded-2xl border border-[var(--border)] bg-white p-8">
                      <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
                        What&apos;s included
                      </p>
                      <ul className="mt-4 space-y-3">
                        {item.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-center gap-3 text-[var(--foreground)]"
                          >
                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--accent-light)]">
                              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                            </span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[var(--dark)] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
                Our Values
              </span>
              <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
                What Drives Us
              </h2>
            </div>
          </FadeInSection>
          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {values.map((value, index) => (
              <FadeInSection key={value.title} delay={index * 0.1}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent)]/10">
                    <value.icon size={22} className="text-[var(--accent)]" />
                  </div>
                  <h3 className="mt-5 font-serif text-lg font-bold text-white">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/50">
                    {value.description}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--background)] py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
              Experience it for yourself
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-[var(--muted)]">
              Register for the 2026 conference and see what the community is all
              about.
            </p>
            <Link
              href="/registration"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-[var(--accent)] px-8 py-3.5 font-semibold text-[var(--dark)] transition-colors hover:bg-[var(--accent-hover)]"
            >
              Register Now
              <ArrowRight size={16} />
            </Link>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
