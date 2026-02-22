"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GALLERY_IMAGES } from "@/lib/gallery-images";
import FadeInSection from "@/components/FadeInSection";

export default function HighlightsPage() {
  return (
    <div className="bg-[var(--background)]">
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <FadeInSection>
          <h1 className="font-serif text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl">
            Past Event Highlights
          </h1>
        </FadeInSection>
        <FadeInSection delay={0.1}>
          <p className="mt-4 max-w-2xl text-lg text-[var(--muted)]">
            Moments from our previous conferences—networking, panels, and community.
          </p>
        </FadeInSection>
        {/* Masonry-style grid */}
        <div className="mt-16 columns-2 gap-4 sm:columns-3 lg:columns-4">
          {GALLERY_IMAGES.map((img, index) => (
            <motion.div
              key={img}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.4, delay: index % 12 * 0.03 }}
              className="mb-4 break-inside-avoid"
            >
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src={`/gallery/${img}`}
                  alt={`Event highlight ${index + 1}`}
                  width={400}
                  height={300}
                  className="h-auto w-full object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
