import type { FAQEntry } from "@/lib/json-ld";

type FAQProps = {
  items: FAQEntry[];
  light?: boolean;
};

export function FAQ({ items, light = false }: FAQProps) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <details
          key={item.question}
          className={light ? "rounded-3xl border border-white/10 bg-white/8 p-6 text-white" : "rounded-3xl border border-line/80 bg-white p-6 text-brand-950 shadow-sm"}
        >
          <summary className="cursor-pointer list-none font-heading text-lg font-semibold">
            {item.question}
          </summary>
          <p className={light ? "mt-4 text-sm leading-7 text-white/76" : "mt-4 text-sm leading-7 text-muted-600"}>
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
