"use client";

import Image from "next/image";
import FadeInSection from "./FadeInSection";

interface ProfileCardProps {
  name: string;
  image: string;
  alt?: string;
}

export default function ProfileCard({ name, image, alt }: ProfileCardProps) {
  return (
    <FadeInSection>
      <div className="group overflow-hidden rounded-2xl bg-[var(--card-bg)] shadow-sm transition-shadow hover:shadow-md">
        <div className="relative aspect-[3/4] overflow-hidden">
          <Image
            src={image}
            alt={alt ?? name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
        <div className="bg-[#f5f5f5] px-4 py-3">
          <p className="font-serif text-lg font-semibold text-[var(--foreground)]">{name}</p>
        </div>
      </div>
    </FadeInSection>
  );
}
