import type { MetadataRoute } from "next";
import { getAircraftByCategory } from "@/data/aircraft";
import { services } from "@/data/services";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const helicopters = getAircraftByCategory("helicopteros");
  const airplanes = getAircraftByCategory("avioes");

  const staticRoutes = [
    "",
    "/aeronaves",
    "/aeronaves/helicopteros",
    "/aeronaves/avioes",
    "/sobre",
    "/contato"
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
    priority: path === "" ? 1 : 0.8
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${siteConfig.url}/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9
  }));

  const helicopterRoutes = helicopters.map((aircraft) => ({
    url: `${siteConfig.url}/aeronaves/helicopteros/${aircraft.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.75
  }));

  const airplaneRoutes = airplanes.map((aircraft) => ({
    url: `${siteConfig.url}/aeronaves/avioes/${aircraft.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.75
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...helicopterRoutes,
    ...airplaneRoutes
  ];
}
