"use client";

import FadeInSection from "@/components/FadeInSection";
import { ExternalLink, Calendar, MapPin, Clock } from "lucide-react";

const MICROSOFT_FORM_URL =
  "https://forms.office.com/Pages/ResponsePage.aspx?id=oQggro32SkGpqzNryKhX0immAIIf7u1IrFCb_PGCUYJUNElQVTJJUlZRWEJRSFhGWkVKOE83WlRZOC4u";

const details = [
  { icon: Calendar, label: "Date", value: "Coming Soon" },
  { icon: MapPin, label: "Location", value: "UNC Chapel Hill" },
  { icon: Clock, label: "Cost", value: "Free" },
];

export default function RegistrationPage() {
  return (
    <div>
      <section className="bg-[var(--dark)] py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
              2026 Conference
            </span>
            <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Connection Begins Here
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/60">
              Complete the form below to register for the 2026 Black Innovators
              Conference.
            </p>
          </FadeInSection>

          <FadeInSection delay={0.1}>
            <div className="mt-10 grid grid-cols-3 gap-4">
              {details.map((detail) => (
                <div
                  key={detail.label}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-sm"
                >
                  <detail.icon
                    size={18}
                    className="text-[var(--accent)]"
                  />
                  <p className="mt-2 text-xs font-medium text-white/40">
                    {detail.label}
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-white">
                    {detail.value}
                  </p>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      <section className="bg-[var(--background)] py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeInSection delay={0.15}>
            <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-lg">
              <iframe
                src={MICROSOFT_FORM_URL}
                title="2026 Registration Form"
                className="h-[800px] w-full min-h-[600px] border-0"
                allowFullScreen
              />
            </div>
            <a
              href={MICROSOFT_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
            >
              <ExternalLink size={16} />
              Open form in new tab
            </a>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
