import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/sections/CTASection";
import { FAQ } from "@/components/sections/FAQ";
import { InternalHero } from "@/components/sections/InternalHero";
import { BenefitCard } from "@/components/ui/BenefitCard";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/ui/JsonLd";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ServiceCard } from "@/components/ui/ServiceCard";
import {
  relatedServiceSlugsBySlug,
  serviceGalleryBySlug
} from "@/data/service-gallery";
import { services, servicesBySlug } from "@/data/services";
import { getFaqJsonLd, getServiceJsonLd } from "@/lib/json-ld";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

const galleryLabels = [
  "Em foco",
  "Atendimento sob demanda",
  "Perfil da missão"
];

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug
  }));
}

export async function generateMetadata({
  params
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesBySlug[slug];

  if (!service) {
    return {};
  }

  return buildMetadata({
    title: service.seoTitle,
    description: service.seoDescription,
    path: `/${service.slug}`,
    keywords: service.keywords,
    image: service.heroImage
  });
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesBySlug[slug];

  if (!service) {
    notFound();
  }

  const galleryImages = serviceGalleryBySlug[service.slug] ?? [
    { src: service.heroImage, alt: service.heroAlt }
  ];
  const relatedServices = (relatedServiceSlugsBySlug[service.slug] ?? [])
    .map((relatedSlug) => servicesBySlug[relatedSlug])
    .filter(Boolean);

  return (
    <>
      <JsonLd
        data={getServiceJsonLd({
          name: service.title,
          description: service.description,
          path: `/${service.slug}`
        })}
      />
      <JsonLd data={getFaqJsonLd(service.faq)} />

      <InternalHero
        title={service.title}
        subtitle={service.subtitle}
        image={service.heroImage}
        imageAlt={service.heroAlt}
        breadcrumbItems={[
          { label: "Início", href: "/" },
          { label: "Serviços" },
          { label: service.navTitle }
        ]}
        primaryCta={{ label: service.ctaText, href: "/contato" }}
      />

      <section className="py-20">
        <Container>
          <div className="grid gap-10 xl:grid-cols-[0.9fr_1.1fr] xl:items-center">
            <div>
              <SectionTitle
                eyebrow="Descrição do serviço"
                title={service.navTitle}
                description={service.description}
              />

              <div className="mt-8 rounded-[32px] border border-line/80 bg-white p-8 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-900">
                  Atendimento
                </p>
                <p className="mt-4 text-sm leading-7 text-muted-600">
                  {siteConfig.legalPositioning}
                </p>
                <div className="gold-divider mt-6 h-px w-full" />
                <p className="mt-6 text-sm leading-7 text-muted-600">
                  Operações realizadas conforme disponibilidade operacional,
                  requisitos da missão, rota, meteorologia, documentação e
                  restrições aplicáveis.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.benefits.slice(0, 3).map((benefit) => (
                    <span
                      key={benefit.title}
                      className="rounded-full border border-gold-500/25 bg-gold-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-900"
                    >
                      {benefit.title}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="relative min-h-[420px] overflow-hidden rounded-[32px] border border-line/80 shadow-sm">
                <Image
                  src={galleryImages[0].src}
                  alt={galleryImages[0].alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/62 via-brand-950/16 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <p className="text-xs uppercase tracking-[0.28em] text-gold-500">
                    {galleryLabels[0]}
                  </p>
                  <p className="mt-3 max-w-xl text-xl font-semibold leading-8">
                    {service.summary}
                  </p>
                </div>
              </div>

              <div className="grid gap-5">
                {galleryImages.slice(1, 3).map((image, index) => (
                  <div
                    key={image.src}
                    className="relative min-h-[198px] overflow-hidden rounded-[28px] border border-line/80 shadow-sm"
                  >
                    <Image src={image.src} alt={image.alt} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-950/48 via-brand-950/8 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <span className="inline-flex rounded-full border border-white/14 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-gold-500">
                        {galleryLabels[index + 1]}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#f7f4ec] py-20">
        <Container>
          <SectionTitle
            eyebrow="Benefícios"
            title={`Benefícios de ${service.navTitle.toLowerCase()}`}
            description="Diferenciais do atendimento para esse tipo de operação."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {service.benefits.map((benefit) => (
              <BenefitCard
                key={benefit.title}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[32px] border border-line/80 bg-white p-8 shadow-sm">
              <SectionTitle
                eyebrow="Quando usar"
                title={`Quando solicitar ${service.navTitle.toLowerCase()}`}
              />
              <ul className="mt-6 space-y-4">
                {service.useCases.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-line/80 bg-muted-50 px-4 py-4 text-sm leading-7 text-muted-600"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[32px] border border-line/80 bg-brand-950 p-8 text-white shadow-sm">
              <SectionTitle
                eyebrow="Como funciona"
                title="Etapas da coordenação da missão"
                description="Etapas do atendimento e da análise da operação."
                light
              />
              <div className="mt-6 space-y-4">
                {service.howItWorks.map((step, index) => (
                  <div
                    key={step.title}
                    className="rounded-3xl border border-white/10 bg-white/8 p-5"
                  >
                    <p className="text-xs uppercase tracking-[0.3em] text-gold-500">
                      Etapa {index + 1}
                    </p>
                    <h3 className="mt-3 font-heading text-xl font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-white/76">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#f8fafb] py-20">
        <Container>
          <SectionTitle
            eyebrow="Informações importantes"
            title="Conformidade, disponibilidade e análise da missão"
            description="Pontos importantes antes da confirmação da operação."
          />
          <div className="mt-10 grid gap-4">
            {service.importantInfo.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-line/80 bg-white px-5 py-5 text-sm leading-7 text-muted-600 shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionTitle
            eyebrow="FAQ"
            title={`Perguntas frequentes sobre ${service.navTitle.toLowerCase()}`}
            description="Respostas objetivas sobre o atendimento e a cotação."
          />
          <div className="mt-10">
            <FAQ items={service.faq} />
          </div>
        </Container>
      </section>

      {relatedServices.length > 0 && (
        <section className="bg-[#f7f4ec] py-20">
          <Container>
            <SectionTitle
              eyebrow="Serviços relacionados"
              title="Outras soluções que podem fazer sentido para esta missão"
              description="Seleção de páginas próximas ao mesmo contexto operacional para facilitar sua navegação."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {relatedServices.map((relatedService) => (
                <ServiceCard key={relatedService.slug} service={relatedService} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTASection
        title="Precisa de atendimento imediato?"
        description="Nossa equipe avalia a missão e busca a solução aérea mais adequada conforme disponibilidade operacional."
        primaryLabel={service.ctaText}
        primaryHref="/contato"
        secondaryLabel="Falar no WhatsApp 24h"
        secondaryHref={siteConfig.whatsappHref}
      />
    </>
  );
}
