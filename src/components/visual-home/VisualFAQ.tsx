import Image from "next/image";
import type { FAQEntry } from "@/lib/json-ld";
import { FAQ } from "@/components/sections/FAQ";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

type VisualFAQProps = {
  items: FAQEntry[];
};

export function VisualFAQ({ items }: VisualFAQProps) {
  return (
    <section className="bg-[#f8fafb] py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionTitle
              eyebrow="Perguntas frequentes"
              title="Dúvidas comuns sobre atendimento, disponibilidade e cotação"
              description="Respostas objetivas para quem quer entender rapidamente como a Good Fly atende cada tipo de missão."
            />

            <div className="relative mt-8 min-h-[300px] overflow-hidden rounded-[30px] border border-line/80 shadow-sm">
              <Image
                src="/images/aeronaves/helicopteros/helicoptero-grand-augusta-img-1.jpg"
                alt="Helicóptero executivo compondo a seção de perguntas frequentes"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/38 to-transparent" />
            </div>
          </div>

          <div>
            <FAQ items={items} />
          </div>
        </div>
      </Container>
    </section>
  );
}
