import type { Metadata } from "next";
import { Clock3, Mail, MessageCircleMore } from "lucide-react";
import { InternalHero } from "@/components/sections/InternalHero";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { ContactCard } from "@/components/ui/ContactCard";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Contato | Solicite sua Cotação | Good Fly",
  description:
    "Entre em contato com a Good Fly para solicitar cotação de voos executivos, helicópteros, UTI aérea e soluções especiais por WhatsApp ou formulário.",
  path: "/contato",
  keywords: ["Táxi aéreo", "Jato executivo", "UTI aérea", "Logística aérea"]
});

export default function ContatoPage() {
  return (
    <>
      <InternalHero
        title="Solicite sua cotação"
        subtitle="Preencha o formulário com os dados da missão ou fale com a equipe da Good Fly no WhatsApp para atendimento imediato."
        image="/images/hero-jato-executivo.jpg"
        imageAlt="Jato executivo em cenário premium para contato comercial"
        breadcrumbItems={[
          { label: "Início", href: "/" },
          { label: "Contato" }
        ]}
      />

      <section className="py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="space-y-6">
              <SectionTitle
                eyebrow="Canais diretos"
                title="Atendimento consultivo e responsivo"
                description="A melhor forma de acelerar uma cotação é enviar dados claros sobre rota, urgência e perfil da missão."
              />
              <ContactCard
                icon={<MessageCircleMore className="h-5 w-5" />}
                title="WhatsApp 24 horas"
              >
                <a href={siteConfig.whatsappHref} target="_blank" rel="noreferrer" className="font-semibold text-brand-900">
                  {siteConfig.whatsappDisplay}
                </a>
              </ContactCard>
              <ContactCard icon={<Mail className="h-5 w-5" />} title="E-mail">
                <a href={`mailto:${siteConfig.email}`} className="font-semibold text-brand-900">
                  {siteConfig.email}
                </a>
              </ContactCard>
              <ContactCard icon={<Clock3 className="h-5 w-5" />} title="Janela de atendimento">
                Atendimento 24 horas para voos executivos, remoções aeromédicas,
                logística urgente e operações especiais.
              </ContactCard>
            </div>

            <div>
              <QuoteForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
