import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type AircraftCategoryCardProps = {
  title: string;
  description: string;
  href: string;
  label?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export function AircraftCategoryCard({
  title,
  description,
  href,
  label = "Categoria",
  imageSrc,
  imageAlt
}: AircraftCategoryCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group block rounded-[32px] border border-line/80 bg-white p-7 shadow-sm transition duration-200",
        "hover:-translate-y-1 hover:shadow-lg"
      )}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-600">
        {label}
      </p>
      <h2 className="mt-4 font-heading text-3xl font-semibold text-brand-950">
        {title}
      </h2>
      {imageSrc ? (
        <div className="relative mt-5 min-h-[180px] overflow-hidden rounded-[24px] border border-line/70 bg-[#F7F4EE]">
          <Image
            src={imageSrc}
            alt={imageAlt ?? title}
            fill
            className="object-cover transition duration-300 group-hover:scale-[1.02]"
          />
        </div>
      ) : null}
      <p className="mt-4 text-sm leading-7 text-muted-600">{description}</p>
      <span className="mt-6 inline-flex text-sm font-semibold text-brand-950 transition-colors duration-200 group-hover:text-gold-700">
        Ver categoria
      </span>
    </Link>
  );
}
