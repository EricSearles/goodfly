import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  light?: boolean;
  compact?: boolean;
  href?: string;
};

export function Logo({ light = false, compact = false, href = "/" }: LogoProps) {
  const content = (
    <div className="flex items-center gap-3">
      <div
        className={cn(
          "flex h-12 w-12 items-center justify-center rounded-full border text-lg font-bold",
          light
            ? "border-gold-500/60 bg-white/8 text-gold-500"
            : "border-gold-500/40 bg-brand-950 text-gold-500"
        )}
      >
        G
      </div>
      <div className="space-y-0.5">
        <div
          className={cn(
            "font-heading text-lg font-semibold tracking-[0.18em] uppercase",
            light ? "text-white" : "text-brand-950"
          )}
        >
          Good Fly
        </div>
        {!compact && (
          <div
            className={cn(
              "text-[10px] font-medium uppercase tracking-[0.4em]",
              light ? "text-gold-500" : "text-brand-900"
            )}
          >
            Aviação Executiva
          </div>
        )}
      </div>
    </div>
  );

  return <Link href={href}>{content}</Link>;
}
