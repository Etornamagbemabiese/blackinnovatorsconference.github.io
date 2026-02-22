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
      className="h-[320px] w-full cursor-pointer [perspective:1000px] sm:h-[380px]"
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
        {/* Front - Photo */}
        <div
          className="absolute inset-0 overflow-hidden rounded-2xl bg-[var(--card-bg)] shadow-sm"
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
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-[#f5f5f5]/95 px-4 py-3 backdrop-blur-sm">
            <p className="font-serif text-lg font-semibold text-[var(--foreground)]">{name}</p>
            {title && (
              <p className="mt-0.5 line-clamp-2 text-xs text-[var(--muted)]">{title}</p>
            )}
            <p className="mt-1 text-xs text-[var(--muted)]">Click to read bio</p>
          </div>
        </div>

        {/* Back - Bio */}
        <div
          className="absolute inset-0 overflow-hidden rounded-2xl bg-white p-5 shadow-md"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="flex h-full flex-col overflow-y-auto">
            <p className="font-serif text-lg font-semibold text-[var(--foreground)]">{name}</p>
            {title && (
              <p className="mb-3 mt-1 text-xs text-[var(--muted)]">{title}</p>
            )}
            <ul className="flex-1 space-y-1.5 text-sm text-[var(--muted)]">
              {bio.map((point, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--muted)]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <p className="mt-2 flex items-center gap-1 text-xs text-[var(--muted)]">
              <RotateCcw size={12} /> Click to flip back
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
