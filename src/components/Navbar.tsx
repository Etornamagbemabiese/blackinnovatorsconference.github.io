"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/speakers", label: "Speakers" },
  { href: "/team", label: "Team" },
  { href: "/highlights", label: "Highlights" },
  { href: "/experience", label: "Experience" },
  { href: "/support", label: "Support" },
  { href: "/faq", label: "FAQ" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--border)] bg-white/95 shadow-sm backdrop-blur-md"
          : "bg-[var(--dark)]/95 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className={`font-serif text-lg font-bold tracking-tight transition-colors sm:text-xl ${
            scrolled ? "text-[var(--foreground)]" : "text-white"
          }`}
        >
          BIC<span className="text-[var(--accent)]">.</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                scrolled
                  ? "text-[var(--muted)] hover:bg-[var(--accent-light)] hover:text-[var(--foreground)]"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/registration"
            className="ml-4 rounded-md bg-[var(--accent)] px-5 py-2 text-sm font-semibold text-[var(--dark)] transition-colors hover:bg-[var(--accent-hover)]"
          >
            Register
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`rounded-lg p-2 lg:hidden ${
            scrolled ? "text-[var(--foreground)]" : "text-white"
          }`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`overflow-hidden lg:hidden ${
              scrolled ? "border-t border-[var(--border)] bg-white" : "border-t border-white/10 bg-[var(--dark)]"
            }`}
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                    scrolled
                      ? "text-[var(--foreground)] hover:bg-[var(--accent-light)]"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/registration"
                onClick={() => setMobileOpen(false)}
                className="mt-2 rounded-lg bg-[var(--accent)] px-4 py-3 text-center text-sm font-semibold text-[var(--dark)] transition-colors hover:bg-[var(--accent-hover)]"
              >
                Register for 2026
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
