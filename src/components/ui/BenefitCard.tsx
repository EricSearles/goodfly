type BenefitCardProps = {
  title: string;
  description: string;
};

export function BenefitCard({ title, description }: BenefitCardProps) {
  return (
    <article className="rounded-3xl border border-line/80 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="mb-4 h-1.5 w-14 rounded-full bg-gold-500/70" />
      <h3 className="font-heading text-xl font-semibold text-brand-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted-600">{description}</p>
    </article>
  );
}
