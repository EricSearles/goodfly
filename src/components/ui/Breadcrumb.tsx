import Link from "next/link";
import { ChevronRight } from "lucide-react";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
  light?: boolean;
};

export function Breadcrumb({ items, light = false }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-sm">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-2">
            {index > 0 && (
              <ChevronRight className={light ? "text-white/40" : "text-muted-400"} size={14} />
            )}
            {item.href ? (
              <Link
                href={item.href}
                className={light ? "text-white/80 hover:text-white" : "text-muted-600 hover:text-brand-950"}
              >
                {item.label}
              </Link>
            ) : (
              <span className={light ? "text-white" : "text-brand-950"}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
