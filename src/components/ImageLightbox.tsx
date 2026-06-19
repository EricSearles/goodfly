"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect } from "react";
import { WatermarkedImage } from "@/components/WatermarkedImage";

type ImageLightboxProps = {
  images: string[];
  currentIndex: number;
  title: string;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
};

export function ImageLightbox({
  images,
  currentIndex,
  title,
  onClose,
  onPrevious,
  onNext
}: ImageLightboxProps) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowLeft") {
        onPrevious();
      }

      if (event.key === "ArrowRight") {
        onNext();
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onNext, onPrevious]);

  const currentImage = images[currentIndex];
  const hasNavigation = images.length > 1;

  return (
    <div
      className="fixed inset-0 z-[100] bg-brand-950/88 px-4 py-6 backdrop-blur-sm sm:px-8"
      role="dialog"
      aria-modal="true"
      aria-label={`Galeria ampliada de ${title}`}
      onClick={onClose}
    >
      <div className="flex h-full items-center justify-center">
        <div
          className="relative w-full max-w-5xl rounded-[32px] border border-white/10 bg-white/6 p-3 shadow-2xl sm:p-4"
          onClick={(event) => event.stopPropagation()}
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute right-3 top-3 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/12 text-white transition hover:bg-white/20"
            aria-label="Fechar galeria"
          >
            <X size={18} />
          </button>

          {hasNavigation ? (
            <>
              <button
                type="button"
                onClick={onPrevious}
                className="absolute left-3 top-1/2 z-20 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-brand-950/55 text-white transition hover:bg-brand-950/75"
                aria-label="Imagem anterior"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                type="button"
                onClick={onNext}
                className="absolute right-3 top-1/2 z-20 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-brand-950/55 text-white transition hover:bg-brand-950/75"
                aria-label="Próxima imagem"
              >
                <ChevronRight size={22} />
              </button>
            </>
          ) : null}

          <div className="relative min-h-[46vh] overflow-hidden rounded-[26px] bg-brand-950/88 sm:min-h-[50vh] lg:min-h-[52vh]">
            <WatermarkedImage
              src={currentImage}
              alt={`${title} - imagem ${currentIndex + 1}`}
              className="min-h-[46vh] sm:min-h-[50vh] lg:min-h-[52vh]"
              imageClassName="object-contain p-6 sm:p-10"
              watermarkType="logo"
              watermarkVariant="center"
              priority
            />
          </div>

          {hasNavigation ? (
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-center text-sm font-medium text-white/80 sm:text-left">
                Imagem {currentIndex + 1} de {images.length}
              </p>
              <div className="flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={onPrevious}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/15"
                >
                  <ChevronLeft size={18} />
                  Anterior
                </button>
                <button
                  type="button"
                  onClick={onNext}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/15"
                >
                  Próxima
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
