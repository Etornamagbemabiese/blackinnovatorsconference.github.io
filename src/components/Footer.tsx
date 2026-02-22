"use client";

import Link from "next/link";
import { Instagram } from "lucide-react";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/registration", label: "Registration" },
  { href: "/about", label: "About" },
  { href: "/team", label: "The Team" },
  { href: "/highlights", label: "Highlights" },
  { href: "/experience", label: "Experience" },
  { href: "/speakers", label: "Speakers" },
  { href: "/support", label: "Support" },
  { href: "/faq", label: "FAQ" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <p className="font-serif text-lg font-semibold text-[var(--foreground)]">
            Black Innovators Conference at UNC
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
        </div>
        <p className="mt-8 text-center text-sm text-[var(--muted)]">
          © {new Date().getFullYear()} Black Innovators Conference at UNC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
