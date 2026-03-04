"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { RotateCcw } from "lucide-react";

interface TeamFlipCardProps {
  name: string;
  image: string;
  bio: string[];
  title?: string;
}

export default function TeamFlipCard({ name, image, bio, title }: TeamFlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="h-[340px] w-full cursor-pointer [perspective:1000px] sm:h-[400px]"
      onClick={() => setIsFlipped(!isFlipped)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && setIsFlipped(!isFlipped)}
      aria-label={`${name} - Click to ${isFlipped ? "see photo" : "read bio"}`}
    >
      <motion.div
        className="relative h-full w-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-sm"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          <div className="relative h-full w-full">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--dark)] via-transparent to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 px-5 py-4">
            <p className="font-serif text-xl font-bold text-white">{name}</p>
            {title && (
              <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-white/70">{title}</p>
            )}
            <p className="mt-2 text-xs font-medium text-[var(--accent)]">
              Tap to read bio
            </p>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 overflow-hidden rounded-2xl border border-[var(--border)] bg-white p-6 shadow-md"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="flex h-full flex-col overflow-y-auto">
            <p className="font-serif text-xl font-bold text-[var(--foreground)]">{name}</p>
            {title && (
              <p className="mb-4 mt-1 text-xs font-medium text-[var(--accent)]">{title}</p>
            )}
            <ul className="flex-1 space-y-2.5 text-sm text-[var(--muted)]">
              {bio.map((point, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-1.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[var(--accent-light)]">
                    <span className="h-1 w-1 rounded-full bg-[var(--accent)]" />
                  </span>
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 flex items-center gap-1.5 text-xs font-medium text-[var(--accent)]">
              <RotateCcw size={12} /> Tap to flip back
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
