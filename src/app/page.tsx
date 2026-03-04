"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Users, Mic2, TrendingUp, Sparkles } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";
import { basePath } from "@/lib/constants";

const stats = [
  { value: "100+", label: "Attendees" },
  { value: "20+", label: "Speakers" },
  { value: "2", label: "Years Strong" },
  { value: "1", label: "Community" },
];

const experiences = [
  {
    icon: Users,
    title: "Networking",
    description:
      "Connect with Black professionals across industries and build relationships that extend far beyond the conference.",
  },
  {
    icon: Mic2,
    title: "Panels & Speakers",
    description:
      "Hear from industry leaders and innovators on career growth, entrepreneurship, and the Black experience in corporate America.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description:
      "Gain actionable insights, mentorship opportunities, and resources designed to accelerate your professional journey.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] overflow-hidden bg-[var(--dark)]">
        <Image
          src={`${basePath}/hero-group.jpg`}
          alt="Black Innovators Conference community"
          fill
          className="object-cover object-center opacity-40"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--dark)] via-[var(--dark)]/60 to-transparent" />

        <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl py-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <span className="inline-block rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
                UNC Chapel Hill &middot; 2026
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 font-serif text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              We&apos;re on a mission
              <br />
              to bring people{" "}
              <span className="italic text-[var(--accent)]">together.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-white/70"
            >
              The Black Innovators Conference connects Black professionals,
              students, and innovators for networking, panels, and professional
              development at UNC.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href="/registration"
                className="inline-flex items-center gap-2 rounded-md bg-[var(--accent)] px-7 py-3.5 text-sm font-semibold text-[var(--dark)] transition-all hover:bg-[var(--accent-hover)] hover:shadow-lg hover:shadow-[var(--accent)]/20"
              >
                Register for 2026
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative z-10 -mt-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-[var(--border)] shadow-xl sm:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white px-6 py-8 text-center"
                >
                  <p className="font-serif text-3xl font-bold text-[var(--accent)] sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm font-medium text-[var(--muted)]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* What to Expect */}
      <section className="bg-[var(--background)] py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
                The Experience
              </span>
              <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
                What to Expect
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--muted)]">
                A curated experience designed to inspire, connect, and empower
                the next generation of Black innovators.
              </p>
            </div>
          </FadeInSection>

          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {experiences.map((item, index) => (
              <FadeInSection key={item.title} delay={index * 0.1}>
                <div className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-white p-8 transition-all duration-300 hover:border-[var(--accent)]/30 hover:shadow-xl">
                  <div className="absolute right-0 top-0 h-32 w-32 -translate-y-8 translate-x-8 rounded-full bg-[var(--accent)]/5 transition-transform duration-500 group-hover:scale-150" />
                  <div className="relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-light)]">
                      <item.icon
                        size={22}
                        className="text-[var(--accent-hover)]"
                      />
                    </div>
                    <h3 className="mt-6 font-serif text-xl font-bold text-[var(--foreground)]">
                      {item.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-[var(--muted)]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Quote / Testimonial */}
      <section className="bg-[var(--dark)] py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <FadeInSection>
            <Sparkles size={28} className="mx-auto text-[var(--accent)]" />
            <blockquote className="mt-8 font-serif text-2xl font-medium italic leading-relaxed text-white sm:text-3xl lg:text-4xl">
              &ldquo;The moment that stood out most was how special it was to
              have a space full of Black professionals together.&rdquo;
            </blockquote>
            <p className="mt-6 text-sm font-medium text-[var(--dark-muted)]">
              &mdash; Conference Attendee
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--background)] py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="relative overflow-hidden rounded-3xl bg-[var(--dark)] px-8 py-16 text-center sm:px-16 sm:py-24">
              <div className="absolute inset-0 opacity-30">
                <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-[var(--accent)]/20 blur-3xl" />
                <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-[var(--accent)]/10 blur-3xl" />
              </div>
              <div className="relative">
                <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Ready to be part of
                  <br />
                  something{" "}
                  <span className="italic text-[var(--accent)]">
                    extraordinary
                  </span>
                  ?
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-lg text-white/60">
                  Join us at the 2026 Black Innovators Conference. Registration
                  is free and open to all.
                </p>
                <Link
                  href="/registration"
                  className="mt-10 inline-flex items-center gap-2 rounded-md bg-[var(--accent)] px-8 py-4 text-sm font-semibold text-[var(--dark)] transition-all hover:bg-[var(--accent-hover)] hover:shadow-lg hover:shadow-[var(--accent)]/20"
                >
                  Register Now
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
