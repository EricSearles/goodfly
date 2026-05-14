import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { footerNavigation, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-brand-950 py-16 text-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <Logo light />
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/76">
              A Good Fly atua na intermediação e coordenação de soluções aéreas
              sob demanda, conectando clientes a aeronaves adequadas para cada
              missão com agilidade, discrição e atendimento 24 horas.
            </p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-white">Serviços e navegação</h3>
            <div className="mt-5 grid gap-3">
              {footerNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/72 transition hover:text-gold-500"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-white">Contato</h3>
            <div className="mt-5 space-y-3 text-sm leading-7 text-white/76">
              <p>WhatsApp: {siteConfig.whatsappDisplay}</p>
              <p>E-mail: {siteConfig.email}</p>
              <p>{siteConfig.serviceArea}</p>
            </div>
          </div>
        </div>
        <div className="gold-divider mt-10 h-px w-full" />
        <div className="mt-6 flex flex-col gap-4 text-xs leading-6 text-white/48 lg:flex-row lg:items-center lg:justify-between">
          <p>© {new Date().getFullYear()} Good Fly Aviação Executiva. Todos os direitos reservados.</p>
          <p className="max-w-3xl">
            A Good Fly realiza intermediação e coordenação de soluções aéreas
            com operadores homologados, conforme disponibilidade operacional,
            rota, meteorologia, documentação e requisitos específicos da missão.
          </p>
        </div>
      </Container>
    </footer>
  );
}
