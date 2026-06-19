"use client";

import Link from "next/link";
import { WatermarkedImage } from "@/components/WatermarkedImage";
import {
  aircraftCategoryBadgeLabels,
  type Aircraft
} from "@/data/aircraft";
import { cn } from "@/lib/utils";

type AircraftCardProps = {
  aircraft: Aircraft;
  href: string;
};

export function AircraftCard({ aircraft, href }: AircraftCardProps) {
  return (
    <article
      className={cn(
        "overflow-hidden rounded-[30px] border bg-white shadow-[0_10px_26px_rgba(15,23,42,0.04)] transition duration-200",
        "border-[#E8E3DA] hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)]"
      )}
    >
      <Link href={href} className="block">
        <div className="group relative min-h-[260px] overflow-hidden bg-[#F7F4EE]">
          <WatermarkedImage
            src={aircraft.coverImage}
            alt={aircraft.name}
            className="min-h-[260px]"
            imageClassName="transition duration-300 group-hover:scale-[1.01]"
          />
        </div>
      </Link>

      <div className="space-y-4 p-6">
        <span className="inline-flex rounded-full border border-[#E8D8AA] bg-[#FBF7EA] px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#B88A1A]">
          {aircraftCategoryBadgeLabels[aircraft.category]}
        </span>

        <h2 className="font-heading text-2xl font-semibold text-[#0F3448]">
          {aircraft.name}
        </h2>

        <Link
          href={href}
          className="inline-flex rounded-full border border-[#E8E3DA] px-4 py-2 text-sm font-semibold text-[#0F3448] transition duration-200 hover:border-[#D7C48C] hover:bg-[#FBF7EA]"
        >
          Ver galeria
        </Link>
      </div>
    </article>
  );
}
