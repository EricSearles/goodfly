import type { ReactNode } from "react";

type ContactCardProps = {
  icon: ReactNode;
  title: string;
  children: ReactNode;
};

export function ContactCard({ icon, title, children }: ContactCardProps) {
  return (
    <article className="rounded-[28px] border border-line/80 bg-white p-6 shadow-sm">
      <div className="mb-4 inline-flex rounded-2xl border border-gold-500/30 bg-gold-500/10 p-3 text-gold-500">
        {icon}
      </div>
      <h3 className="font-heading text-xl font-semibold text-brand-950">{title}</h3>
      <div className="mt-3 text-sm leading-7 text-muted-600">{children}</div>
    </article>
  );
}
