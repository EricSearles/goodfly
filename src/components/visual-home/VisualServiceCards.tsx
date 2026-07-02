import Image from "next/image";
import Link from "next/link";
import type { ServiceContent } from "@/data/services";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

type VisualServiceCardsProps = {
  services: ServiceContent[];
};

function getServiceHref(slug: string) {
  return slug === "helicopteros" ? "/aeronaves/helicopteros" : `/${slug}`;
}

export function VisualServiceCards({ services }: VisualServiceCardsProps) {
  return (
    <section id="servicos" className="py-24">
      <Container>
        <SectionTitle
          title="Serviços"
          description="Voos executivos, helicópteros, UTI aérea, logística e operações especiais."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={getServiceHref(service.slug)}
              className="group overflow-hidden rounded-[30px] border border-line/80 bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
            >
              <div className="relative min-h-[250px] overflow-hidden">
                <Image
                  src={service.heroImage}
                  alt={service.heroAlt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/64 via-brand-950/12 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <div className="inline-flex rounded-2xl bg-white/12 p-3 backdrop-blur-sm">
                    <ServiceIcon name={service.icon} />
                  </div>
                  <h3 className="mt-4 font-heading text-2xl font-semibold">
                    {service.navTitle}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-white/82">
                    {service.summary}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between gap-3 p-6">
                <span className="text-sm font-semibold text-brand-950">
                  Ver detalhes
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
