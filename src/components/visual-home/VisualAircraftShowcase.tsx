import Image from "next/image";
import Link from "next/link";
import {
  aircraftCategoryBadgeLabels,
  aircraftCategoryMeta,
  getAircraftByCategory,
  getAircraftCategories
} from "@/data/aircraft";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

const featuredAircraftByCategory = getAircraftCategories().map((category) => ({
  category,
  meta: aircraftCategoryMeta[category],
  items: getAircraftByCategory(category).slice(0, 3)
}));

export function VisualAircraftShowcase() {
  return (
    <section className="bg-[#f3f6f8] py-24">
      <Container>
        <SectionTitle
          title="Aeronaves"
          description="Helicópteros e aviões disponíveis para consulta e cotação."
        />

        <div className="mt-12 space-y-12">
          {featuredAircraftByCategory.map(({ category, meta, items }) => (
            <div
              key={category}
              className="rounded-[34px] border border-line/70 bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-3xl">
                  <span className="inline-flex rounded-full border border-gold-500/25 bg-gold-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-brand-900">
                    {meta.label}
                  </span>
                  <h3 className="mt-4 font-heading text-3xl font-semibold text-brand-950">
                    {meta.label} em destaque
                  </h3>
                  <p className="mt-4 text-base leading-7 text-muted-600">
                    {meta.description}
                  </p>
                </div>

                <Button href={meta.href} variant="secondary">
                  Ver todos os {meta.label.toLowerCase()}
                </Button>
              </div>

              <div className="mt-8 grid gap-6 lg:grid-cols-3">
                {items.map((item) => (
                  <article
                    key={item.slug}
                    className="overflow-hidden rounded-[28px] border border-line/80 bg-[#fcfdfe] shadow-sm"
                  >
                    <Link
                      href={`/aeronaves/${item.category}/${item.slug}`}
                      className="group block"
                    >
                      <div className="relative min-h-[260px] overflow-hidden">
                        <Image
                          src={item.coverImage}
                          alt={`${item.name} disponível para consulta`}
                          fill
                          className="object-cover transition duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/68 via-brand-950/8 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 p-5">
                          <span className="inline-flex rounded-full border border-white/12 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-gold-500">
                            {aircraftCategoryBadgeLabels[item.category]}
                          </span>
                          <h4 className="mt-3 font-heading text-2xl font-semibold text-white">
                            {item.name}
                          </h4>
                        </div>
                      </div>
                    </Link>

                    <div className="p-5">
                      <p className="text-sm leading-7 text-muted-600">
                        {item.description ?? meta.description}
                      </p>

                      {item.useCases?.[0] && (
                        <p className="mt-3 text-xs uppercase tracking-[0.22em] text-muted-400">
                          Uso recomendado: {item.useCases[0]}
                        </p>
                      )}

                      <div className="mt-5 flex flex-wrap gap-3">
                        <Button href="/contato" className="px-4 py-2 text-xs">
                          Solicitar cotação
                        </Button>
                        <Button
                          href={`/aeronaves/${item.category}/${item.slug}`}
                          variant="secondary"
                          className="px-4 py-2 text-xs"
                        >
                          Ver modelo
                        </Button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
