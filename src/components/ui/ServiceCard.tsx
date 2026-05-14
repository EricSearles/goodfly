import Link from "next/link";
import type { ServiceContent } from "@/data/services";
import { ServiceIcon } from "@/components/ui/ServiceIcon";

type ServiceCardProps = {
  service: ServiceContent;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-[28px] border border-line/80 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg">
      <ServiceIcon name={service.icon} />
      <h3 className="mt-5 font-heading text-xl font-semibold text-brand-950">
        {service.navTitle}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-muted-600">{service.summary}</p>
      <Link
        href={`/${service.slug}`}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-900 transition group-hover:text-gold-500"
      >
        Saiba mais
        <span aria-hidden>→</span>
      </Link>
    </article>
  );
}
