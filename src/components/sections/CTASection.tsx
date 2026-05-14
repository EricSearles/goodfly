import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";

type CTASectionProps = {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  dark?: boolean;
};

export function CTASection({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  dark = false
}: CTASectionProps) {
  return (
    <section className={dark ? "bg-brand-950 py-20" : "py-20"}>
      <Container>
        <div
          className={
            dark
              ? "rounded-[32px] border border-white/10 bg-white/6 px-6 py-10 text-center sm:px-10"
              : "rounded-[32px] border border-line/80 bg-white px-6 py-10 text-center shadow-sm sm:px-10"
          }
        >
          <span className={dark ? "text-xs font-semibold uppercase tracking-[0.3em] text-gold-500" : "text-xs font-semibold uppercase tracking-[0.3em] text-brand-900"}>
            Atendimento imediato
          </span>
          <h2 className={dark ? "mt-4 font-heading text-3xl font-semibold text-white sm:text-4xl" : "mt-4 font-heading text-3xl font-semibold text-brand-950 sm:text-4xl"}>
            {title}
          </h2>
          <p className={dark ? "mx-auto mt-4 max-w-2xl text-base leading-7 text-white/76" : "mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-600"}>
            {description}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={primaryHref}>{primaryLabel}</Button>
            {secondaryLabel && secondaryHref && (
              <Button
                href={secondaryHref}
                variant={dark ? "ghost" : "whatsapp"}
              >
                {secondaryLabel}
              </Button>
            )}
          </div>
          <p className={dark ? "mt-4 text-xs uppercase tracking-[0.25em] text-white/45" : "mt-4 text-xs uppercase tracking-[0.25em] text-muted-400"}>
            {siteConfig.serviceArea}
          </p>
        </div>
      </Container>
    </section>
  );
}
