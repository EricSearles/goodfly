import type { Metadata } from "next";
import { AircraftCategoryCard } from "@/components/AircraftCategoryCard";
import { InternalHero } from "@/components/sections/InternalHero";
import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Aeronaves | Good Fly",
  description:
    "Conheça opções de helicópteros e aviões da Good Fly para operações especiais, traslados e demandas sob solicitação.",
  path: "/aeronaves",
  keywords: [
    "Aeronaves executivas",
    "Helicópteros",
    "Galeria de aeronaves",
    "Aviação executiva"
  ],
  image: "/images/aeronaves/avioes/avioes-lear-45-img-4.jpg"
});

const categories = [
  {
    title: "Helicópteros",
    description:
      "Modelos de helicópteros para operações especiais, deslocamentos sob demanda e apoio logístico.",
    href: "/aeronaves/helicopteros",
    label: "Categoria",
    imageSrc: "/images/aeronaves/helicopteros/helicoptero-bell-429-img-1.jpg",
    imageAlt: "Helicóptero Bell 429"
  },
  {
    title: "Aviões",
    description:
      "Modelos de aviões e aeronaves executivas para operações especiais e traslados sob solicitação.",
    href: "/aeronaves/avioes",
    label: "Categoria",
    imageSrc: "/images/aeronaves/avioes/avioes-lear-45-img-1.jpg",
    imageAlt: "Avião executivo Lear 45"
  }
] as const;

export default function AeronavesPage() {
  return (
    <>
      <InternalHero
        title="Aeronaves"
        subtitle="Conheça algumas opções de aeronaves disponíveis para operações especiais, traslados e demandas sob solicitação."
        image="/images/aeronaves/avioes/avioes-lear-45-img-4.jpg"
        imageAlt="Aeronave executiva em destaque na galeria da Good Fly"
        breadcrumbItems={[
          { label: "Início", href: "/" },
          { label: "Aeronaves" }
        ]}
        primaryCta={{ label: "Solicitar cotação", href: "/contato" }}
      />

      <section className="py-20">
        <Container>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {categories.map((category) => (
              <AircraftCategoryCard
                key={category.href}
                title={category.title}
                description={category.description}
                href={category.href}
                label={category.label}
                imageSrc={category.imageSrc}
                imageAlt={category.imageAlt}
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
