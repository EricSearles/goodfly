import { cn } from "@/lib/utils";

type WatermarkedImageProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  watermarkType?: "logo" | "text";
  watermarkVariant?: "corner" | "center";
  priority?: boolean;
};

export function WatermarkedImage({
  src,
  alt,
  className,
  imageClassName,
  watermarkType = "logo",
  watermarkVariant = "corner",
  priority = false
}: WatermarkedImageProps) {
  return (
    <div className={cn("relative h-full w-full overflow-hidden bg-[#F7F4EE]", className)}>
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className={cn("block h-full w-full object-cover", imageClassName)}
      />

      <div className="pointer-events-none absolute inset-0 z-10">
        {watermarkType === "logo" ? (
          watermarkVariant === "center" ? (
            <div className="absolute inset-0 flex items-center justify-center px-6">
              <img
                src="/images/logo-watermark.png"
                alt=""
                aria-hidden="true"
                className="h-auto w-32 object-contain opacity-[0.22] sm:w-40 lg:w-48"
              />
            </div>
          ) : (
            <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4">
              <img
                src="/images/logo-watermark.png"
                alt=""
                aria-hidden="true"
                className="h-auto w-16 object-contain opacity-[0.2] sm:w-20"
              />
            </div>
          )
        ) : null}

        {watermarkType === "text" ? (
          <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
            <span className="text-lg font-semibold uppercase tracking-[0.28em] text-white opacity-[0.14] sm:text-2xl">
              Central Funerária Brasil
            </span>
          </div>
        ) : null}
      </div>
    </div>
  );
}
