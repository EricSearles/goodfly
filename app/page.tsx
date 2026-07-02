import { JsonLd } from "@/components/ui/JsonLd";
import { VisualAircraftShowcase } from "@/components/visual-home/VisualAircraftShowcase";
import { VisualCTA } from "@/components/visual-home/VisualCTA";
import { VisualFAQ } from "@/components/visual-home/VisualFAQ";
import { VisualHero } from "@/components/visual-home/VisualHero";
import { VisualHowItWorks } from "@/components/visual-home/VisualHowItWorks";
import { VisualInstitutional } from "@/components/visual-home/VisualInstitutional";
import { VisualServiceCards } from "@/components/visual-home/VisualServiceCards";
import { homeServiceSlugs, servicesBySlug } from "@/data/services";
import { getFaqJsonLd } from "@/lib/json-ld";

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

export default function HomePage() {
  return (
    <>
      <JsonLd data={getFaqJsonLd(homeFaq)} />
      <VisualHero />
      <VisualServiceCards services={featuredServices} />
      <VisualAircraftShowcase />
      <VisualInstitutional />
      <VisualHowItWorks />
      <VisualFAQ items={homeFaq} />
      <VisualCTA />
    </>
  );
}
