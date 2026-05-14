import { cn } from "@/lib/utils";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  light = false
}: SectionTitleProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && (
        <span
          className={cn(
            "mb-4 inline-flex rounded-full border px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em]",
            light
              ? "border-white/15 bg-white/8 text-gold-500"
              : "border-gold-500/25 bg-gold-500/10 text-brand-900"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl",
          light ? "text-white" : "text-brand-950"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-7 sm:text-lg",
            light ? "text-white/78" : "text-muted-600"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
