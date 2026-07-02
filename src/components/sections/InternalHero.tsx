import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";

type InternalHeroProps = {
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  breadcrumbItems: Array<{ label: string; href?: string }>;
  primaryCta?: { label: string; href: string };
};

export function InternalHero({
  title,
  subtitle,
  image,
  imageAlt,
  breadcrumbItems,
  primaryCta
}: InternalHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-[#eef3f5] pt-28 sm:pt-32">
      <div className="absolute inset-0">
        <Image src={image} alt={imageAlt} fill className="object-cover object-center" />
        <div className="absolute inset-0 bg-[linear-gradient(98deg,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.84)_34%,rgba(7,28,31,0.14)_100%),linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(7,28,31,0.18)_100%)]" />
      </div>

      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/58 to-transparent" />
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-white/70 blur-3xl" />
      <div className="absolute -right-24 top-20 h-80 w-80 rounded-full bg-gold-500/12 blur-3xl" />

      <Container className="relative z-10 py-16 sm:py-20">
        <Breadcrumb items={breadcrumbItems} />
        <div className="mt-6 max-w-3xl rounded-[32px] border border-white/70 bg-white/52 p-8 shadow-sm backdrop-blur-[6px] sm:p-10">
          <h1 className="font-heading text-4xl font-semibold leading-tight text-balance text-brand-950 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-brand-950/78">{subtitle}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {primaryCta && <Button href={primaryCta.href}>{primaryCta.label}</Button>}
            <Button href={siteConfig.whatsappHref} variant="whatsapp">
              Falar no WhatsApp 24h
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
