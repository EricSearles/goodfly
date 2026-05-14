import { absoluteUrl } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

export type FAQEntry = {
  question: string;
  answer: string;
};

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.whatsappDisplay,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      areaServed: "BR",
      availableLanguage: ["pt-BR"],
      telephone: siteConfig.whatsappDisplay
    },
    description: siteConfig.legalPositioning
  };
}

export function getFaqJsonLd(faq: FAQEntry[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}

export function getServiceJsonLd({
  name,
  description,
  path
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url
    },
    areaServed: {
      "@type": "Country",
      name: "Brasil"
    },
    description,
    url: absoluteUrl(path)
  };
}
