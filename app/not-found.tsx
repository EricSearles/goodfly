import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center py-24">
      <Container className="text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-900">
          Página não encontrada
        </span>
        <h1 className="mt-4 font-heading text-4xl font-semibold text-brand-950">
          O conteúdo que você procura não está disponível.
        </h1>
        <p className="mt-4 text-base leading-7 text-muted-600">
          Volte para a página inicial e continue a navegação pela estrutura
          institucional da Good Fly.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-brand-950 px-5 py-3 text-sm font-semibold text-white"
        >
          Ir para o início
        </Link>
      </Container>
    </section>
  );
}
