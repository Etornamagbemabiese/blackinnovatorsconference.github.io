"use client";

import Link from "next/link";
import { Instagram } from "lucide-react";

const quickLinks = [
  { href: "/about", label: "About" },
  { href: "/speakers", label: "Speakers" },
  { href: "/team", label: "Team" },
  { href: "/highlights", label: "Highlights" },
];

const resourceLinks = [
  { href: "/registration", label: "Register" },
  { href: "/experience", label: "Experience" },
  { href: "/support", label: "Support Us" },
  { href: "/faq", label: "FAQ" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--dark)] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="font-serif text-2xl font-bold">
              BIC<span className="text-[var(--accent)]">.</span>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--dark-muted)]">
              The Black Innovators Conference at UNC connects Black
              professionals, students, and innovators to build community and
              advance careers.
            </p>
            <a
              href="https://www.instagram.com/unc.mbsa/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm text-[var(--dark-muted)] transition-colors hover:text-[var(--accent)]"
              aria-label="Instagram"
            >
              <Instagram size={18} />
              <span>Follow us</span>
            </a>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--dark-muted)] transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
              Resources
            </h3>
            <ul className="mt-4 space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--dark-muted)] transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
              Conference
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-[var(--dark-muted)]">
              University of North Carolina
              <br />
              at Chapel Hill
            </p>
            <Link
              href="/registration"
              className="mt-6 inline-block rounded-md bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-[var(--dark)] transition-colors hover:bg-[var(--accent-hover)]"
            >
              Register Now
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-center text-xs text-[var(--dark-muted)]">
            &copy; {new Date().getFullYear()} Black Innovators Conference at
            UNC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
