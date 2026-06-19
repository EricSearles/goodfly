import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AircraftGallery } from "@/components/AircraftGallery";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { getAircraftByCategory, getAircraftBySlug } from "@/data/aircraft";
import { buildMetadata } from "@/lib/metadata";

type AirplaneDetailParams = {
  slug: string;
};

type AirplaneDetailPageProps = {
  params: Promise<AirplaneDetailParams>;
};

function buildWhatsAppLink(modelName: string) {
  const message = `Olá, gostaria de receber informações sobre o avião ${modelName} pela Good Fly.`;
  return `https://wa.me/5511931111111?text=${encodeURIComponent(message)}`;
}

export async function generateStaticParams() {
  return getAircraftByCategory("avioes").map((item) => ({
    slug: item.slug
  }));
}

export async function generateMetadata({
  params
}: AirplaneDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const aircraft = getAircraftBySlug("avioes", slug);

  if (!aircraft) {
    return buildMetadata({
      title: "Aviões | Good Fly",
      description: "Galeria de aviões da Good Fly.",
      path: "/aeronaves/avioes"
    });
  }

  return buildMetadata({
    title: `${aircraft.name} | Aviões | Good Fly`,
    description:
      "Galeria de imagens do modelo. Informações técnicas serão adicionadas em breve.",
    path: `/aeronaves/avioes/${aircraft.slug}`,
    image: aircraft.coverImage,
    keywords: [aircraft.name, "Aviões", "Good Fly", "Galeria de imagens"]
  });
}

export default async function AirplaneDetailPage({
  params
}: AirplaneDetailPageProps) {
  const { slug } = await params;
  const aircraft = getAircraftBySlug("avioes", slug);

  if (!aircraft) {
    notFound();
  }

  const whatsappLink = buildWhatsAppLink(aircraft.name);

  return (
    <div className="bg-[#FBF9F4] pt-28 sm:pt-32">
      <Container>
        <div className="py-16 sm:py-20">
          <Breadcrumb
            items={[
              { label: "Início", href: "/" },
              { label: "Aeronaves", href: "/aeronaves" },
              { label: "Aviões", href: "/aeronaves/avioes" },
              { label: aircraft.name }
            ]}
          />

          <div className="mt-6 max-w-4xl">
            <h1 className="font-heading text-4xl font-semibold tracking-tight text-[#0F3448] sm:text-5xl">
              {aircraft.name}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#5B7285]">
              Galeria de imagens do modelo. Informações técnicas serão
              adicionadas em breve.
            </p>
          </div>

          <div className="mt-10">
            <AircraftGallery images={aircraft.images} title={aircraft.name} />
          </div>

          <div className="mt-10">
            <Button
              href={whatsappLink}
              variant="secondary"
              className="border-[#D7C48C] bg-white text-[#0F3448] hover:bg-[#FBF7EA]"
            >
              Solicitar informações sobre este modelo
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
