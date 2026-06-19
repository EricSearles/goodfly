import Image from "next/image";
import { Clock3, Globe2, ShieldCheck } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";
import { AircraftShowcase } from "@/components/sections/AircraftShowcase";
import { FAQ } from "@/components/sections/FAQ";
import { Hero } from "@/components/sections/Hero";
import { QuickQuoteBar } from "@/components/sections/QuickQuoteBar";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { BenefitCard } from "@/components/ui/BenefitCard";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/ui/JsonLd";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { homeServiceSlugs, servicesBySlug } from "@/data/services";
import { getFaqJsonLd } from "@/lib/json-ld";
import { siteConfig } from "@/lib/site";

const featuredServices = homeServiceSlugs.map((slug) => servicesBySlug[slug]);

const homeFaq = [
  {
    question: "A Good Fly opera aeronaves próprias?",
    answer:
      "A Good Fly atua na intermediação e coordenação de soluções aéreas sob demanda, conectando clientes a operadores homologados conforme a natureza de cada missão."
  },
  {
    question: "Como solicitar uma cotação?",
    answer:
      "Você pode preencher o formulário do site ou chamar no WhatsApp com origem, destino, data, número de passageiros e tipo de missão."
  },
  {
    question: "O atendimento é 24 horas?",
    answer:
      "Sim. O atendimento é 24 horas para demandas de voos executivos, UTI aérea, logística crítica e operações especiais."
  },
  {
    question: "Quais informações preciso enviar para cotar um voo?",
    answer:
      "Origem, destino, data, horário desejado, número de passageiros e qualquer detalhe relevante da missão ajudam a acelerar a análise."
  },
  {
    question: "É possível cotar UTI aérea?",
    answer:
      "Sim. Envie o contexto clínico e logístico para que a equipe avalie a solução aeromédica adequada."
  },
  {
    question: "A Good Fly atende transporte de órgãos?",
    answer:
      "Sim. A equipe analisa a urgência, a rota e a disponibilidade operacional para coordenar a solução logística aérea."
  },
  {
    question: "Posso agregar minha aeronave?",
    answer:
      "Sim. A Good Fly apoia proprietários que desejam melhorar o aproveitamento do ativo com apoio comercial e gestão profissional."
  }
];

const institutionalHighlights = [
  {
    title: "Atendimento imediato",
    description:
      "Resposta consultiva para missões urgentes, executivas ou especiais com foco em tempo de reação."
  },
  {
    title: "Rede de aeronaves",
    description:
      "Conexão com diferentes perfis de aeronaves e operadores conforme a rota, a missão e a disponibilidade."
  },
  {
    title: "Operação responsável",
    description:
      "Clareza sobre escopo, disponibilidade, requisitos da missão e informação correta antes da contratação."
  }
];

const safetyPoints = [
  {
    icon: ShieldCheck,
    title: "Operadores homologados",
    description:
      "Priorizamos soluções com operadores autorizados e aderentes ao perfil da missão."
  },
  {
    icon: Clock3,
    title: "Planejamento e resposta",
    description:
      "Cada cotação considera janela operacional, rota, documentação, meteorologia e taxas aplicáveis."
  },
  {
    icon: Globe2,
    title: "Cobertura nacional",
    description:
      "Atendimento em todo o Brasil conforme disponibilidade, infraestrutura e necessidades específicas."
  }
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={getFaqJsonLd(homeFaq)} />
      <Hero />
      <QuickQuoteBar />

      <section id="servicos" className="section-grid py-20">
        <Container>
          <SectionTitle
            eyebrow="Soluções aéreas sob demanda"
            title="Serviços estratégicos para missões executivas, especiais e urgentes"
            description="Conheça os principais serviços aéreos coordenados pela Good Fly para missões executivas, especiais e urgentes."
          />
          <div className="mt-10">
            <ServicesGrid services={featuredServices} />
          </div>
        </Container>
      </section>

      <AircraftShowcase />

      <section className="py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center">
            <div>
              <SectionTitle
                title="Agenciamento aéreo com atendimento imediato"
                description="A Good Fly atua na intermediação e coordenação de soluções aéreas sob demanda, conectando clientes a aeronaves adequadas para cada missão, com atendimento imediato, suporte 24 horas e foco em segurança, agilidade e discrição."
              />
            </div>
            <div className="grid gap-5">
              {institutionalHighlights.map((item) => (
                <BenefitCard
                  key={item.title}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-brand-950 py-20 text-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <SectionTitle
                eyebrow="Atendimento nacional"
                title="Atendimento 24 horas em todo o Brasil"
                description="Para voos executivos, remoções aeromédicas, transporte de órgãos, logística urgente e operações especiais, nossa equipe analisa a necessidade e busca a solução aérea mais adequada."
                light
              />
              <div className="mt-8">
                <Button href={siteConfig.whatsappHref} variant="whatsapp">
                  Falar no WhatsApp agora
                </Button>
              </div>
            </div>
            <div className="rounded-[32px] border border-white/10 bg-white/8 p-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-brand-900/80 p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-gold-500">
                    Missões atendidas
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/78">
                    Táxi aéreo executivo, helicópteros, UTI aérea, logística
                    crítica, agricultura e operações sob demanda.
                  </p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/10 p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-gold-500">
                    Estrutura consultiva
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/78">
                    Atendimento humano, análise rápida e posicionamento jurídico
                    claro sobre intermediação.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="relative min-h-[320px] overflow-hidden rounded-[32px] border border-line/70 shadow-sm">
              <Image
                src="/images/catalogo-good-fly.jpg"
                alt="Catálogo institucional Good Fly em mesa premium"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <SectionTitle
                eyebrow="Agregue sua aeronave"
                title="Proprietário de aeronave? Agregue sua aeronave à Good Fly."
                description="Auxiliamos proprietários na gestão, comercialização de voos, organização operacional e melhor aproveitamento da aeronave, buscando reduzir custos fixos e transformar o ativo em oportunidade."
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Redução de custos fixos",
                  "Otimização operacional",
                  "Maior aproveitamento da aeronave",
                  "Apoio comercial",
                  "Gestão profissional"
                ].map((benefit) => (
                  <div
                    key={benefit}
                    className="rounded-2xl border border-line/80 bg-white px-4 py-4 text-sm font-medium text-brand-950 shadow-sm"
                  >
                    {benefit}
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button href="/agregue-sua-aeronave">Quero agregar minha aeronave</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-muted-50 py-20">
        <Container>
          <SectionTitle
            eyebrow="Segurança, conformidade e transparência"
            title="Informação correta antes da contratação"
            description="A Good Fly prioriza operadores homologados, planejamento operacional e informação correta antes da contratação. As cotações dependem de disponibilidade, rota, meteorologia, documentação, taxas aeroportuárias e requisitos da missão."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {safetyPoints.map((point) => {
              const Icon = point.icon;

              return (
                <article
                  key={point.title}
                  className="rounded-[28px] border border-line/80 bg-white p-6 shadow-sm"
                >
                  <div className="inline-flex rounded-2xl border border-gold-500/30 bg-gold-500/10 p-3 text-gold-500">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-semibold text-brand-950">
                    {point.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted-600">
                    {point.description}
                  </p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionTitle
            eyebrow="Perguntas frequentes"
            title="Dúvidas comuns sobre o atendimento da Good Fly"
            description="Respostas objetivas para reforçar posicionamento, segurança e o funcionamento da cotação sob demanda."
          />
          <div className="mt-10">
            <FAQ items={homeFaq} />
          </div>
        </Container>
      </section>

      <CTASection
        title="Precisa voar com urgência, conforto e segurança?"
        description="A Good Fly encontra a solução aérea mais adequada para sua necessidade."
        primaryLabel="Solicitar cotação agora"
        primaryHref="/contato"
        secondaryLabel="Falar no WhatsApp 24h"
        secondaryHref={siteConfig.whatsappHref}
      />
    </>
  );
}
