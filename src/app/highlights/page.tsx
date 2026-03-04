"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { GALLERY_IMAGES } from "@/lib/gallery-images";
import { basePath } from "@/lib/constants";
import { Camera, ChevronDown, X } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";

const IMAGES_PER_PAGE = 24;

export default function HighlightsPage() {
  const [visibleCount, setVisibleCount] = useState(IMAGES_PER_PAGE);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const hasMore = visibleCount < GALLERY_IMAGES.length;

  return (
    <div>
      <section className="bg-[var(--dark)] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
              Gallery
            </span>
            <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Past Event Highlights
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/60">
              Moments from our previous conferences — networking, panels, and
              community in action.
            </p>
          </FadeInSection>
          <FadeInSection delay={0.1}>
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/50">
              <Camera size={14} />
              {GALLERY_IMAGES.length} photos
            </div>
          </FadeInSection>
        </div>
      </section>

      <section className="bg-[var(--background)] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="columns-2 gap-4 sm:columns-3 lg:columns-4">
            {GALLERY_IMAGES.slice(0, visibleCount).map((img, index) => (
              <motion.div
                key={img}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.4, delay: (index % 12) * 0.03 }}
                className="mb-4 break-inside-avoid"
              >
                <div
                  className="group relative cursor-pointer overflow-hidden rounded-xl"
                  onClick={() => setSelectedImage(img)}
                >
                  <Image
                    src={`${basePath}/gallery/${img}`}
                    alt={`Event highlight ${index + 1}`}
                    width={400}
                    height={300}
                    className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-[var(--dark)]/0 transition-colors duration-300 group-hover:bg-[var(--dark)]/20" />
                </div>
              </motion.div>
            ))}
          </div>

          {hasMore && (
            <FadeInSection>
              <div className="mt-12 text-center">
                <button
                  onClick={() =>
                    setVisibleCount((prev) =>
                      Math.min(prev + IMAGES_PER_PAGE, GALLERY_IMAGES.length)
                    )
                  }
                  className="inline-flex items-center gap-2 rounded-md border border-[var(--border)] bg-white px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition-all hover:border-[var(--accent)]/30 hover:shadow-lg"
                >
                  Load More
                  <ChevronDown size={16} />
                </button>
                <p className="mt-3 text-xs text-[var(--muted)]">
                  Showing {Math.min(visibleCount, GALLERY_IMAGES.length)} of{" "}
                  {GALLERY_IMAGES.length}
                </p>
              </div>
            </FadeInSection>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
              aria-label="Close"
            >
              <X size={24} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-h-[85vh] max-w-[90vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={`${basePath}/gallery/${selectedImage}`}
                alt="Event highlight"
                width={1200}
                height={800}
                className="h-auto max-h-[85vh] w-auto rounded-lg object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
