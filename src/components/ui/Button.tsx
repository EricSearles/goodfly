import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500/40";

const variants = {
  primary:
    "bg-brand-950 text-white shadow-sm hover:bg-brand-900",
  secondary:
    "border border-gold-500/70 bg-white text-brand-950 hover:border-gold-500 hover:bg-gold-500/10",
  whatsapp:
    "bg-[#25D366] text-white shadow-sm hover:bg-[#1fae57]",
  ghost:
    "bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/16"
};

type ButtonProps = {
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  href?: string;
} & (
  | ButtonHTMLAttributes<HTMLButtonElement>
  | AnchorHTMLAttributes<HTMLAnchorElement>
);

export function Button({
  children,
  variant = "primary",
  className,
  href,
  ...props
}: ButtonProps) {
  const styles = cn(baseStyles, variants[variant], className);

  if (href) {
    const external = href.startsWith("http");

    return (
      <Link
        href={href}
        className={styles}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={styles} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
