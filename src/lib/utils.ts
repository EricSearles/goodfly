import { siteConfig } from "@/lib/site";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function buildWhatsAppUrl(message: string) {
  return `${siteConfig.whatsappHref}?text=${encodeURIComponent(message)}`;
}

export function buildQuoteMessage(fields: Record<string, string>) {
  const rows = Object.entries(fields)
    .filter(([, value]) => value.trim().length > 0)
    .map(([label, value]) => `${label} ${value}`);

  return `${siteConfig.whatsappBaseMessage}\n\n${rows.join("\n")}`;
}

export function slugToTitle(slug: string) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}
