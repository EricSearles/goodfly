import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { siteConfig } from "@/lib/site";

const steps = [
  {
    step: "01",
    title: "Solicite sua cotação",
    description:
      "Envie origem, destino, data, passageiros e contexto da missão para nossa equipe avaliar a necessidade."
  },
  {
    step: "02",
    title: "Receba opções disponíveis",
    description:
      "Apresentamos alternativas compatíveis com o perfil operacional, a disponibilidade e o objetivo do voo."
  },
  {
    step: "03",
    title: "Confirme seu voo",
    description:
      "Após a definição da melhor solução, seguimos com a coordenação da operação e os próximos passos."
  }
];

export function VisualHowItWorks() {
  return (
    <section className="bg-[#f7f4ec] py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <SectionTitle
              eyebrow="Como funciona"
              title="Uma jornada curta, objetiva e desenhada para acelerar a decisão"
              description="Um fluxo simples para pedir sua cotação, receber opções e confirmar a melhor alternativa para a missão."
            />

            <div className="mt-10 grid gap-4">
              {steps.map((item) => (
                <article
                  key={item.step}
                  className="rounded-[28px] border border-line/80 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-950 font-heading text-lg font-semibold text-gold-500">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-brand-950">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-muted-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-line/80 bg-white p-4 shadow-sm">
            <div className="relative min-h-[430px] overflow-hidden rounded-[28px]">
              <Image
                src="/images/aeronaves/avioes/avioes-citation-xls-img-2.jpg"
                alt="Aeronave executiva em pista para ilustrar o processo de cotação"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/60 via-brand-950/12 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <p className="text-xs uppercase tracking-[0.28em] text-gold-500">
                  Atendimento direto
                </p>
                <h3 className="mt-3 font-heading text-3xl font-semibold">
                  Missões especiais, executivas e urgentes em um fluxo único.
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/78">
                  Se preferir acelerar o briefing, nossa equipe também atende via
                  WhatsApp para organizar os dados iniciais da missão.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button href="/contato">Solicitar cotação</Button>
                  <Button href={siteConfig.whatsappHref} variant="whatsapp">
                    Falar no WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
