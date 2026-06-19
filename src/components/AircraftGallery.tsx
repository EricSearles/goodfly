"use client";

import { useCallback, useState } from "react";
import { ImageLightbox } from "@/components/ImageLightbox";
import { WatermarkedImage } from "@/components/WatermarkedImage";
import { cn } from "@/lib/utils";

type AircraftGalleryProps = {
  images: string[];
  title: string;
};

export function AircraftGallery({ images, title }: AircraftGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const total = images.length;

  const goToPrevious = useCallback(() => {
    setActiveIndex((current) => (current === 0 ? total - 1 : current - 1));
  }, [total]);

  const goToNext = useCallback(() => {
    setActiveIndex((current) => (current === total - 1 ? 0 : current + 1));
  }, [total]);

  const activeImage = images[activeIndex];

  return (
    <>
      <div className="space-y-5">
        <button
          type="button"
          onClick={() => setLightboxOpen(true)}
          className="mx-auto block w-full max-w-4xl rounded-[30px] border border-[#E8E3DA] bg-white p-3 text-left shadow-[0_10px_26px_rgba(15,23,42,0.04)] transition hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)]"
          aria-label={`Abrir galeria ampliada de ${title}`}
        >
          <div className="relative min-h-[220px] overflow-hidden rounded-[24px] bg-[#F7F4EE] sm:min-h-[280px] lg:min-h-[320px]">
            <WatermarkedImage
              src={activeImage}
              alt={`${title} - imagem ${activeIndex + 1}`}
              className="min-h-[220px] sm:min-h-[280px] lg:min-h-[320px]"
              imageClassName="object-contain p-4 sm:p-6"
              watermarkType="logo"
              watermarkVariant="center"
              priority
            />
          </div>
        </button>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-5">
          {images.map((image, index) => (
            <button
              key={`${image}-${index}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={cn(
                "rounded-[22px] border bg-white p-2 shadow-[0_6px_18px_rgba(15,23,42,0.03)] transition",
                "border-[#E8E3DA] hover:border-[#D7C48C]",
                activeIndex === index && "border-[#D7C48C] ring-1 ring-[#D7C48C]"
              )}
              aria-label={`Selecionar imagem ${index + 1} de ${title}`}
            >
              <div className="relative min-h-[92px] overflow-hidden rounded-[16px] bg-[#F7F4EE]">
                <WatermarkedImage
                  src={image}
                  alt={`${title} - miniatura ${index + 1}`}
                  className="min-h-[92px]"
                  imageClassName="object-cover"
                  watermarkType="logo"
                  watermarkVariant="corner"
                />
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightboxOpen ? (
        <ImageLightbox
          images={images}
          currentIndex={activeIndex}
          title={title}
          onClose={() => setLightboxOpen(false)}
          onPrevious={goToPrevious}
          onNext={goToNext}
        />
      ) : null}
    </>
  );
}
