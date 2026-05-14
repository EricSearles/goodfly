import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/sections/CTASection";
import { FAQ } from "@/components/sections/FAQ";
import { InternalHero } from "@/components/sections/InternalHero";
import { BenefitCard } from "@/components/ui/BenefitCard";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/ui/JsonLd";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { services, servicesBySlug } from "@/data/services";
import { getFaqJsonLd, getServiceJsonLd } from "@/lib/json-ld";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

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
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <SectionTitle
                eyebrow="Descrição do serviço"
                title={service.navTitle}
                description={service.description}
              />
            </div>
            <div className="rounded-[32px] border border-line/80 bg-white p-8 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-900">
                Posicionamento institucional
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
            </div>
          </div>
        </Container>
      </section>

      <section className="section-grid py-20">
        <Container>
          <SectionTitle
            eyebrow="Benefícios"
            title={`Por que considerar ${service.navTitle.toLowerCase()} com a Good Fly`}
            description="Cada operação é analisada de forma consultiva para alinhar missão, agilidade e disponibilidade."
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
                title={`Situações em que ${service.navTitle.toLowerCase()} pode fazer sentido`}
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
                description="Fluxo pensado para acelerar o entendimento e a resposta."
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

      <section className="bg-muted-50 py-20">
        <Container>
          <SectionTitle
            eyebrow="Informações importantes"
            title="Conformidade, disponibilidade e análise da missão"
            description="Pontos relevantes antes de avançar para a contratação."
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
            eyebrow="FAQ específico"
            title={`Perguntas frequentes sobre ${service.navTitle.toLowerCase()}`}
            description="Reforço de contexto para decisões mais rápidas e seguras."
          />
          <div className="mt-10">
            <FAQ items={service.faq} />
          </div>
        </Container>
      </section>

      <CTASection
        title="Precisa de atendimento imediato?"
        description="Nossa equipe avalia a necessidade da missão e busca a solução aérea mais adequada conforme disponibilidade operacional."
        primaryLabel={service.ctaText}
        primaryHref="/contato"
        secondaryLabel="Falar no WhatsApp 24h"
        secondaryHref={siteConfig.whatsappHref}
      />
    </>
  );
}
