import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { WhatsAppFloatingButton } from "@/components/layout/WhatsAppFloatingButton";
import { JsonLd } from "@/components/ui/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { getOrganizationJsonLd } from "@/lib/json-ld";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const gtmId = process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-NWW26XM3";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap"
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  icons: {
    icon: [{ url: "/images/icone.png", type: "image/png" }],
    shortcut: ["/images/icone.png"],
    apple: [{ url: "/images/icone.png", type: "image/png" }]
  },
  ...buildMetadata({
    title: "Good Fly Aviação Executiva | Soluções Aéreas sob Demanda",
    description: siteConfig.description,
    keywords: [
      "Táxi aéreo",
      "Jato executivo",
      "Helicóptero executivo",
      "UTI aérea",
      "Transporte de órgãos",
      "Logística aérea",
      "Gestão de aeronaves",
      "Aviação executiva no Brasil"
    ]
  })
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {gtmId ? (
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`
            }}
          />
        ) : null}
      </head>
      <body className={`${manrope.variable} ${sora.variable} font-sans antialiased`}>
        {gtmId ? (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        ) : null}
        <JsonLd data={getOrganizationJsonLd()} />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}