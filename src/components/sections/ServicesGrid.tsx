import type { ServiceContent } from "@/data/services";
import { ServiceCard } from "@/components/ui/ServiceCard";

type ServicesGridProps = {
  services: ServiceContent[];
};

export function ServicesGrid({ services }: ServicesGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {services.map((service) => (
        <ServiceCard key={service.slug} service={service} />
      ))}
    </div>
  );
}
