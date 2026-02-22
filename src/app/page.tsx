"use client";

import Link from "next/link";
import Image from "next/image";
import FadeInSection from "@/components/FadeInSection";
import { basePath } from "@/lib/constants";

export default function Home() {
  return (
    <div className="bg-[var(--background)]">
      {/* Hero - Light blue background, text top, full-width image bottom */}
      <section className="bg-[#E0F2F7]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Mission */}
            <FadeInSection>
              <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-5xl xl:text-6xl">
                We&apos;re on a mission to bring people{" "}
                <span className="italic">together.</span>
              </h1>
            </FadeInSection>
            {/* Testimonial */}
            <FadeInSection delay={0.1}>
              <div className="flex flex-col justify-center">
                <blockquote className="font-serif text-xl italic leading-relaxed text-[var(--foreground)] sm:text-2xl">
                  &ldquo;The moment that stood out most was how special it was to have a space full of black professionals together.&rdquo;
                </blockquote>
                <Link
                  href="/registration"
                  className="mt-8 inline-flex w-fit items-center rounded border border-[#7DD3FC] bg-white/80 px-8 py-3 font-medium uppercase tracking-wide text-[var(--foreground)] transition-colors hover:bg-white hover:border-[#0EA5E9]"
                >
                  RSVP FOR THIS YEAR&apos;S EVENT
                </Link>
              </div>
            </FadeInSection>
          </div>
        </div>
        {/* Full-width group photo with What to Expect overlay on left */}
        <div className="relative h-[50vh] min-h-[400px] w-full lg:h-[55vh]">
          <Image
            src={`${basePath}/hero-group.jpg`}
            alt="Black Innovators Conference - Community of Black professionals and students at UNC"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          {/* What to Expect - left side, vertically centered */}
          <div className="absolute left-0 top-0 flex h-full items-center px-6 lg:px-12">
            <FadeInSection delay={0.2}>
              <div className="max-w-md rounded-lg bg-white/90 px-6 py-6 backdrop-blur-sm lg:px-8 lg:py-8">
                <h2 className="font-serif text-2xl font-semibold text-[var(--foreground)] sm:text-3xl">
                  What to Expect
                </h2>
                <ul className="mt-6 space-y-3 text-left text-[var(--foreground)]">
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--foreground)]" />
                    <span>Opportunities to network with seasoned Black professionals in various fields and other high-achieving students</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--foreground)]" />
                    <span>Intriguing panels discussing the Black experience in corporate America</span>
                  </li>
                </ul>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
    </div>
  );
}
