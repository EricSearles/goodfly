import type { Metadata } from "next";
import { AircraftCard } from "@/components/AircraftCard";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Container } from "@/components/ui/Container";
import { getAircraftByCategory } from "@/data/aircraft";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Aviões | Good Fly",
  description:
    "Conheça alguns modelos de aviões disponíveis para operações especiais, traslados e demandas sob solicitação.",
  path: "/aeronaves/avioes",
  keywords: [
    "Aviões",
    "Aviões executivos",
    "Operações especiais",
    "Good Fly"
  ],
  image: "/images/jato-executivo-pista.jpg"
});

export default function AvioesPage() {
  const airplanes = getAircraftByCategory("avioes");

  return (
    <>
      <section className="bg-[#FBF9F4] pt-28 sm:pt-32">
        <Container>
          <div className="max-w-4xl py-16 sm:py-20">
            <Breadcrumb
              items={[
                { label: "Início", href: "/" },
                { label: "Aeronaves", href: "/aeronaves" },
                { label: "Aviões" }
              ]}
            />
            <h1 className="mt-6 font-heading text-4xl font-semibold tracking-tight text-[#0F3448] sm:text-5xl">
              Aviões
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#5B7285]">
              Conheça alguns modelos disponíveis para operações especiais,
              traslados e demandas sob solicitação.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-[#F5F1E8] py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {airplanes.map((item) => (
              <AircraftCard
                key={item.slug}
                aircraft={item}
                href={`/aeronaves/avioes/${item.slug}`}
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
