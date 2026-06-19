"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

type AircraftImageProps = {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
};

export function AircraftImage({
  src,
  alt,
  className,
  fallbackLabel = "Imagem em breve"
}: AircraftImageProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[28px] border border-line/80 bg-[radial-gradient(circle_at_top,_rgba(225,177,55,0.18),_transparent_30%),linear-gradient(180deg,rgba(14,22,40,0.94),rgba(7,14,27,0.98))]",
        className
      )}
    >
      {hasError ? (
        <div className="flex h-full min-h-[220px] items-center justify-center px-6 text-center text-sm font-medium text-white/78">
          {fallbackLabel}
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover"
          onError={() => setHasError(true)}
        />
      )}
    </div>
  );
}
