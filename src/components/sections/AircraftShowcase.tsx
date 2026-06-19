import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

const aircraftCategoryCards = [
  {
    title: "Helicópteros",
    description:
      "Modelos para operações especiais, deslocamentos sob demanda e apoio logístico.",
    href: "/aeronaves",
    images: [
      "/images/aeronaves/helicopteros/helicoptero-robinson-22-img-1.jpg",
      "/images/aeronaves/helicopteros/helicoptero-bell-429-img-1.jpg",
      "/images/aeronaves/helicopteros/helicoptero-esquilo-B3-img-1.jpg"
    ]
  },
  {
    title: "Aviões",
    description:
      "Opções para traslados, voos executivos e demandas especiais sob solicitação.",
    href: "/aeronaves",
    images: [
      "/images/aeronaves/avioes/avioes-baron-img-1.jpg",
      "/images/aeronaves/avioes/avioes-jato-westwind-1124-img-1.jpg",
      "/images/aeronaves/avioes/avioes-lear-45-img-1.jpg"
    ]
  }
] as const;

export function AircraftShowcase() {
  return (
    <section className="bg-[#FBF9F4] py-20">
      <Container>
        <SectionTitle
          eyebrow="Aeronaves"
          title="Helicópteros e Aviões"
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {aircraftCategoryCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group overflow-hidden rounded-[32px] border border-line/80 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="grid gap-3 border-b border-line/70 bg-[#F6F1E6] p-3 sm:grid-cols-[1.15fr_0.85fr]">
                <div className="relative min-h-[240px] overflow-hidden rounded-[24px]">
                  <Image
                    src={card.images[0]}
                    alt={card.title}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="grid gap-3 sm:grid-rows-2">
                  {card.images.slice(1).map((imagePath, index) => (
                    <div
                      key={`${card.title}-${index}`}
                      className="relative min-h-[114px] overflow-hidden rounded-[20px]"
                    >
                      <Image
                        src={imagePath}
                        alt={`${card.title} ${index + 2}`}
                        fill
                        className="object-cover transition duration-300 group-hover:scale-[1.03]"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4 p-6">
                <span className="inline-flex rounded-full border border-gold-500/25 bg-gold-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-gold-500">
                  Aeronaves
                </span>
                <h3 className="font-heading text-3xl font-semibold text-brand-950">
                  {card.title}
                </h3>
                <p className="max-w-2xl text-sm leading-7 text-muted-600">
                  {card.description}
                </p>
                <span className="inline-flex items-center rounded-full border border-line/80 px-4 py-2 text-sm font-semibold text-brand-950 transition duration-200 group-hover:border-gold-500/40 group-hover:bg-[#FBF7EA]">
                  Ver área de aeronaves
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
