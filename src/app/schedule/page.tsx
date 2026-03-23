"use client";

import FadeInSection from "@/components/FadeInSection";

const scheduleItems = [
  { time: "10:00 am – 10:30 am", event: "Registration and Refreshments" },
  { time: "10:45 am – 11:00 am", event: "Opening Speech" },
  { time: "11:00 am – 11:15 am", event: "Partner Organization Introductions" },
  { time: "11:30 am – 12:30 pm", event: "Panel #1" },
  { time: "12:45 pm – 1:45 pm", event: "Lunch + Group Picture" },
  { time: "2:00 pm – 2:30 pm", event: "Keynote Speech by Mr. Joseph High" },
  { time: "2:45 pm – 3:45 pm", event: "Panel #2" },
  { time: "4:00 pm – 4:30 pm", event: "Senior Perspectives" },
  { time: "4:30 pm – 5:00 pm", event: "Closing + Reflections" },
];

export default function SchedulePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[var(--dark)] py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
              2026 Conference
            </span>
            <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Schedule
            </h1>
            <p className="mt-4 text-lg text-white/60">
              A full day of connection, inspiration, and community.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Schedule */}
      <section className="bg-[var(--background)] py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-[140px] top-0 hidden h-full w-px bg-[var(--border)] sm:block" />

            <div className="space-y-0">
              {scheduleItems.map((item, index) => (
                <FadeInSection key={index} delay={index * 0.05}>
                  <div className="flex flex-col gap-2 py-6 sm:flex-row sm:items-start sm:gap-0">
                    <div className="sm:w-[160px] sm:shrink-0 sm:pr-8 sm:text-right">
                      <span className="text-sm font-semibold text-[var(--accent)]">
                        {item.time}
                      </span>
                    </div>
                    <div className="relative sm:pl-10">
                      {/* dot */}
                      <span className="absolute -left-[5px] top-1 hidden h-[10px] w-[10px] rounded-full border-2 border-[var(--accent)] bg-white sm:block" />
                      <p className="text-base font-medium text-[var(--foreground)]">
                        {item.event}
                      </p>
                    </div>
                  </div>
                  {index < scheduleItems.length - 1 && (
                    <div className="border-t border-[var(--border)] sm:hidden" />
                  )}
                </FadeInSection>
              ))}
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
