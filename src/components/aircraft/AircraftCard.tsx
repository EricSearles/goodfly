import Link from "next/link";
import { AircraftImage } from "@/components/aircraft/AircraftImage";
import type { Aircraft } from "@/data/aircraft";

type AircraftCardProps = {
  aircraft: Aircraft;
  href: string;
};

function getSpecs(aircraft: Aircraft) {
  return [
    aircraft.passengers ? `Passageiros: ${aircraft.passengers}` : null,
    aircraft.range ? `Alcance: ${aircraft.range}` : null,
    aircraft.speed ? `Velocidade: ${aircraft.speed}` : null
  ].filter(Boolean) as string[];
}

export function AircraftCard({ aircraft, href }: AircraftCardProps) {
  const specs = getSpecs(aircraft);

  return (
    <article className="overflow-hidden rounded-[32px] border border-line/80 bg-white shadow-sm">
      <Link href={href} className="block">
        <AircraftImage
          src={aircraft.coverImage}
          alt={aircraft.name}
          className="rounded-none border-0"
          fallbackLabel={`Galeria do ${aircraft.name} em breve`}
        />
      </Link>
      <div className="space-y-4 p-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-600">
            {aircraft.category === "helicopteros" ? "Helicóptero" : "Aeronave"}
          </p>
          <h3 className="mt-3 font-heading text-2xl font-semibold text-brand-950">
            {aircraft.name}
          </h3>
          {aircraft.description && (
            <p className="mt-3 text-sm leading-7 text-muted-600">
              {aircraft.description}
            </p>
          )}
        </div>

        {specs.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {specs.map((item) => (
              <span
                key={item}
                className="rounded-full border border-line/80 bg-muted-50 px-3 py-1 text-xs font-medium text-brand-950"
              >
                {item}
              </span>
            ))}
          </div>
        )}

        <Link
          href={href}
          className="inline-flex text-sm font-semibold text-brand-950 transition-colors duration-200 hover:text-gold-700"
        >
          Ver detalhes e galeria
        </Link>
      </div>
    </article>
  );
}
