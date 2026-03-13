"use client";

import { useState } from "react";
import FadeInSection from "@/components/FadeInSection";
import { ExternalLink, Calendar, MapPin, Clock, CheckCircle2 } from "lucide-react";

const MICROSOFT_FORM_URL =
  "https://forms.office.com/Pages/ResponsePage.aspx?id=oQggro32SkGpqzNryKhX0immAIIf7u1IrFCb_PGCUYJUNElQVTJJUlZRWEJRSFhGWkVKOE83WlRZOC4u";

const details = [
  { icon: Calendar, label: "Date", value: "Coming soon" },
  { icon: MapPin, label: "Location", value: "UNC Kenan-Flagler Business School" },
  { icon: Clock, label: "Cost", value: "Free for students & professionals" },
];

const REGISTRATION_OPEN = false;

export default function RegistrationPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
            {REGISTRATION_OPEN ? (
              <p className="mt-4 max-w-xl text-lg text-white/60">
                Complete the form below to register for the 2026 Black Innovators
                Conference.
              </p>
            ) : (
              <p className="mt-4 max-w-xl text-lg text-white/60">
                RSVP opens soon. Join the list so you&apos;re the first to know when
                registration goes live.
              </p>
            )}
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
            {!REGISTRATION_OPEN && (
              <div className="rounded-2xl border border-[var(--border)] bg-white p-8 text-[var(--foreground)] shadow-sm">
                <h2 className="font-serif text-2xl font-semibold">
                  RSVP coming soon
                </h2>
                <p className="mt-3 text-[var(--muted)]">
                  We&apos;re finalizing details for the 2026 Black Innovators Conference.
                  Check back the week after break to secure your spot.
                </p>
                <p className="mt-3 text-sm text-[var(--muted)]">
                  In the meantime, feel free to explore the site to learn more about the
                  experience, speakers, and how to support the conference.
                </p>
              </div>
            )}

            {REGISTRATION_OPEN && !submitted && (
              <div className="space-y-4">
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
                  className="inline-flex items-center gap-2 text-sm text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
                >
                  <ExternalLink size={16} />
                  Open form in new tab
                </a>
              </div>
            )}

            {REGISTRATION_OPEN && submitted && (
              <div className="rounded-2xl border border-[var(--border)] bg-white p-8 text-[var(--foreground)]">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 text-[var(--accent)]" size={24} />
                  <div>
                    <h2 className="font-serif text-2xl font-semibold">
                      You&apos;re all set.
                    </h2>
                    <p className="mt-2 text-[var(--muted)]">
                      Thank you for registering for the Black Innovators Conference at UNC.
                      Here are the key details for the day of the event:
                    </p>
                    <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
                      <li>
                        <span className="font-semibold">Location:</span> UNC Kenan-Flagler
                        Business School (exact room shared closer to the date)
                      </li>
                      <li>
                        <span className="font-semibold">Check-in:</span> Registration
                        opens 30 minutes before the first session
                      </li>
                      <li>
                        <span className="font-semibold">Dress code:</span> Business
                        professional
                      </li>
                    </ul>
                    <p className="mt-3 text-sm text-[var(--muted)]">
                      We&apos;ll follow up via email with any updates, full agenda, and
                      parking instructions as we get closer to the event.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
