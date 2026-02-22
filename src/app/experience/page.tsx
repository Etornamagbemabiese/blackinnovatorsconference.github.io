"use client";

import { Users, Mic2, TrendingUp } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";

const experienceItems = [
  {
    icon: Users,
    title: "Networking",
    description: "Connect with black professionals across industries. Build meaningful relationships that extend beyond the conference.",
  },
  {
    icon: Mic2,
    title: "Panels",
    description: "Hear from industry leaders and innovators. Engage in discussions on career growth, entrepreneurship, and community impact.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Gain insights and tools to advance your career. Workshops, mentorship opportunities, and resources designed for your success.",
  },
];

export default function ExperiencePage() {
  return (
    <div className="bg-[var(--background)]">
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <FadeInSection>
          <h1 className="font-serif text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl">
            The Experience
          </h1>
        </FadeInSection>
        <FadeInSection delay={0.1}>
          <p className="mt-4 max-w-2xl text-lg text-[var(--muted)]">
            What to expect at the Black Innovators Conference.
          </p>
        </FadeInSection>
        <div className="mt-20 space-y-16">
          {experienceItems.map((item, index) => (
            <FadeInSection key={item.title} delay={index * 0.1}>
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-[var(--border)] bg-white">
                  <item.icon size={24} className="text-[var(--foreground)]" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-semibold text-[var(--foreground)]">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-lg leading-relaxed text-[var(--muted)]">
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>
    </div>
  );
}
