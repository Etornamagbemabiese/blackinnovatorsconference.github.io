"use client";

import FadeInSection from "@/components/FadeInSection";
import { ExternalLink } from "lucide-react";

const MICROSOFT_FORM_URL =
  "https://forms.office.com/Pages/ResponsePage.aspx?id=oQggro32SkGpqzNryKhX0immAIIf7u1IrFCb_PGCUYJUNElQVTJJUlZRWEJRSFhGWkVKOE83WlRZOC4u";

export default function RegistrationPage() {
  return (
    <div className="bg-[var(--background)]">
      <section className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
        <FadeInSection>
          <h1 className="font-serif text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl">
            Connection Begins Here
          </h1>
        </FadeInSection>
        <FadeInSection delay={0.1}>
          <p className="mt-4 text-lg text-[var(--muted)]">
            Complete the form below to register for the 2026 Black Innovators Conference.
          </p>
        </FadeInSection>
        <FadeInSection delay={0.15}>
          <div className="mt-8 overflow-hidden rounded-xl border border-[var(--border)] bg-white shadow-sm">
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
            className="mt-4 inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--foreground)]"
          >
            <ExternalLink size={16} />
            Open form in new tab
          </a>
        </FadeInSection>
      </section>
    </div>
  );
}
