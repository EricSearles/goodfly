import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  light?: boolean;
  compact?: boolean;
  href?: string;
};

export function Logo({ light = false, compact = false, href = "/" }: LogoProps) {
  const content = (
    <div className="flex items-center">
      <div
        className={cn(
          "relative overflow-hidden",
          compact ? "h-14 w-[180px] sm:w-[210px]" : "h-16 w-[220px] sm:h-20 sm:w-[280px]",
          light ? "brightness-0 invert" : ""
        )}
      >
        <Image
          src="/images/logo-goodfly-1.jpeg"
          alt="Good Fly Aviação Executiva"
          fill
          priority
          className="object-contain object-left"
        />
      </div>
    </div>
  );

  return <Link href={href}>{content}</Link>;
}
