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
    <section className="relative overflow-hidden bg-brand-950 pt-28 text-white sm:pt-32">
      <Image src={image} alt={imageAlt} fill className="object-cover" />
      <div className="hero-overlay absolute inset-0" />
      <Container className="relative z-10 py-16 sm:py-20">
        <Breadcrumb items={breadcrumbItems} light />
        <div className="mt-6 max-w-3xl">
          <h1 className="font-heading text-4xl font-semibold leading-tight text-balance sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-white/78">{subtitle}</p>
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
