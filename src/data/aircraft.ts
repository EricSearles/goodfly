export type AircraftCategory = "helicopteros" | "avioes";

export type Aircraft = {
  slug: string;
  category: AircraftCategory;
  name: string;
  shortName?: string;
  description?: string;
  passengers?: string;
  range?: string;
  speed?: string;
  useCases?: string[];
  coverImage: string;
  images: string[];
};

type AircraftCategoryMeta = {
  label: string;
  href: string;
  description: string;
};

type AircraftDefinition = {
  slug: string;
  category: AircraftCategory;
  name: string;
  description: string;
  images: string[];
  useCases: string[];
  passengers?: string;
  range?: string;
  speed?: string;
};

export const aircraftCategoryMeta: Record<
  AircraftCategory,
  AircraftCategoryMeta
> = {
  helicopteros: {
    label: "Helicópteros",
    href: "/aeronaves/helicopteros",
    description:
      "Modelos de helicópteros para operações especiais, traslados e apoio logístico."
  },
  avioes: {
    label: "Aviões",
    href: "/aeronaves/avioes",
    description:
      "Modelos de aviões e aeronaves executivas para traslados e demandas sob solicitação."
  }
};

export const aircraftCategoryBadgeLabels: Record<AircraftCategory, string> = {
  helicopteros: "Helicóptero",
  avioes: "Avião"
};

function buildAircraftImages(
  category: AircraftCategory,
  fileBase: string,
  total: number,
  {
    extension = "jpg",
    imageToken
  }: {
    extension?: string;
    imageToken?: (index: number) => string;
  } = {}
) {
  return Array.from({ length: total }, (_, index) => {
    const suffix = imageToken ? imageToken(index + 1) : `img-${index + 1}`;
    return `/images/aeronaves/${category}/${category === "helicopteros" ? "helicoptero" : "avioes"}-${fileBase}-${suffix}.${extension}`;
  });
}

function createAircraft({
  slug,
  category,
  name,
  description,
  images,
  useCases,
  passengers,
  range,
  speed
}: AircraftDefinition): Aircraft {
  return {
    slug,
    category,
    name,
    shortName: name,
    description,
    passengers,
    range,
    speed,
    useCases,
    coverImage: images[0],
    images
  };
}

const helicopters: Aircraft[] = [
  createAircraft({
    slug: "robinson-r22",
    category: "helicopteros",
    name: "Robinson R22",
    description:
      "Modelo leve para instrução, voos panorâmicos e deslocamentos de curta distância.",
    images: buildAircraftImages("helicopteros", "robinson-22", 5),
    useCases: ["Treinamento", "Sobrevoo", "Deslocamento leve"]
  }),
  createAircraft({
    slug: "robinson-r44",
    category: "helicopteros",
    name: "Robinson R44",
    description:
      "Helicóptero versátil para voos executivos, operações regionais e deslocamentos privados.",
    images: buildAircraftImages("helicopteros", "robinson-44", 6),
    useCases: ["Táxi aéreo", "Traslado executivo", "Operação regional"]
  }),
  createAircraft({
    slug: "robinson-r66",
    category: "helicopteros",
    name: "Robinson R66",
    description:
      "Configuração moderna para viagens regionais, apoio corporativo e operações com perfil premium.",
    images: buildAircraftImages("helicopteros", "robinson-66", 3),
    useCases: ["Viagem regional", "Apoio corporativo", "Traslado privado"]
  }),
  createAircraft({
    slug: "bell-429",
    category: "helicopteros",
    name: "Bell 429",
    description:
      "Bimotor executivo com proposta para operações corporativas, especiais e deslocamentos estratégicos.",
    images: buildAircraftImages("helicopteros", "bell-429", 4),
    useCases: ["Operação executiva", "Missões especiais", "Transporte corporativo"]
  }),
  createAircraft({
    slug: "bell-jet-ranger",
    category: "helicopteros",
    name: "Bell Jet Ranger",
    description:
      "Modelo clássico para apoio aéreo, voos regionais e deslocamentos com flexibilidade operacional.",
    images: buildAircraftImages("helicopteros", "bell-jet-ranger", 5),
    useCases: ["Táxi aéreo", "Apoio aéreo", "Deslocamento regional"]
  }),
  createAircraft({
    slug: "bell-long-ranger",
    category: "helicopteros",
    name: "Bell Long Ranger",
    description:
      "Versão alongada com perfil de conforto para trajetos executivos e apoio logístico regional.",
    images: buildAircraftImages("helicopteros", "bell-long-ranger", 4),
    useCases: ["Traslado executivo", "Apoio logístico", "Viagem regional"]
  }),
  createAircraft({
    slug: "esquilo-b3",
    category: "helicopteros",
    name: "Esquilo B3",
    description:
      "Modelo de grande flexibilidade operacional para missões corporativas, apoio técnico e rotas variadas.",
    images: buildAircraftImages("helicopteros", "esquilo-B3", 4),
    useCases: ["Operação corporativa", "Apoio técnico", "Deslocamento regional"]
  }),
  createAircraft({
    slug: "colibri",
    category: "helicopteros",
    name: "Colibri",
    description:
      "Helicóptero leve e ágil para operações de curta duração, treinamento e voos de apoio.",
    images: buildAircraftImages("helicopteros", "colibri", 2),
    useCases: ["Treinamento", "Apoio operacional", "Voos curtos"]
  }),
  createAircraft({
    slug: "grand-agusta",
    category: "helicopteros",
    name: "Grand Agusta",
    description:
      "Configuração com proposta premium para transporte executivo e rotas com foco em conforto.",
    images: buildAircraftImages("helicopteros", "grand-augusta", 3),
    useCases: ["Transporte premium", "Traslado executivo", "Operação corporativa"]
  }),
  createAircraft({
    slug: "grand-agusta-aw139",
    category: "helicopteros",
    name: "Grand Agusta AW139",
    description:
      "Modelo de maior porte para missões corporativas, rotas estratégicas e operações especiais.",
    images: buildAircraftImages("helicopteros", "grand-augusta-aw-139", 4),
    useCases: ["Missão corporativa", "Transporte executivo", "Operação especial"]
  })
];

const airplanes: Aircraft[] = [
  createAircraft({
    slug: "bandeirante",
    category: "avioes",
    name: "Bandeirante",
    description:
      "Modelo versátil para missões regionais, apoio logístico e operações sob demanda.",
    images: buildAircraftImages("avioes", "bandeirante", 3),
    useCases: ["Operação regional", "Logística aérea", "Traslado sob demanda"]
  }),
  createAircraft({
    slug: "baron",
    category: "avioes",
    name: "Baron",
    description:
      "Bimotor com perfil ágil para rotas executivas e deslocamentos de curta a média distância.",
    images: buildAircraftImages("avioes", "baron", 3),
    useCases: ["Traslado executivo", "Voo regional", "Missão privativa"]
  }),
  createAircraft({
    slug: "citation-bravo",
    category: "avioes",
    name: "Citation Bravo",
    description:
      "Jato executivo para viagens corporativas com foco em agilidade e conforto.",
    images: buildAircraftImages("avioes", "citation-bravo", 3),
    useCases: ["Viagem executiva", "Traslado corporativo", "Missão especial"]
  }),
  createAircraft({
    slug: "citation-s2",
    category: "avioes",
    name: "Citation S2",
    description:
      "Jato leve para deslocamentos rápidos e operações executivas sob solicitação.",
    images: buildAircraftImages("avioes", "citation-s2", 2),
    useCases: ["Executivo leve", "Viagem regional", "Missão rápida"]
  }),
  createAircraft({
    slug: "citation-sovereign",
    category: "avioes",
    name: "Citation Sovereign",
    description:
      "Jato com proposta de alcance e conforto para missões corporativas de maior porte.",
    images: buildAircraftImages("avioes", "citation-sovereing", 6),
    useCases: ["Longa distância", "Executivo premium", "Operação corporativa"]
  }),
  createAircraft({
    slug: "citation-xls",
    category: "avioes",
    name: "Citation XLS",
    description:
      "Modelo executivo equilibrado para traslados rápidos e rotas com perfil premium.",
    images: buildAircraftImages("avioes", "citation-xls", 5),
    useCases: ["Executivo premium", "Voo corporativo", "Missão sob demanda"]
  }),
  createAircraft({
    slug: "citation-cj1",
    category: "avioes",
    name: "Citation CJ1",
    description:
      "Jato compacto para deslocamentos executivos e rotas objetivas.",
    images: buildAircraftImages("avioes", "cj1", 2, {
      imageToken: (index) => `img${index}`
    }),
    useCases: ["Executivo compacto", "Viagem rápida", "Traslado direto"]
  }),
  createAircraft({
    slug: "citation-cj2",
    category: "avioes",
    name: "Citation CJ2",
    description:
      "Jato executivo leve para rotas corporativas, voos regionais e demandas sob solicitação.",
    images: [
      ...buildAircraftImages("avioes", "cj2", 2, {
        imageToken: (index) => `img${index}`
      }),
      ...buildAircraftImages("avioes", "jato-cj2", 3)
    ],
    useCases: ["Executivo leve", "Voos regionais", "Missão corporativa"]
  }),
  createAircraft({
    slug: "citation-cj3",
    category: "avioes",
    name: "Citation CJ3",
    description:
      "Jato para deslocamentos executivos com conforto e boa flexibilidade operacional.",
    images: buildAircraftImages("avioes", "jato-cj3", 3),
    useCases: ["Traslado executivo", "Operação regional", "Perfil premium"]
  }),
  createAircraft({
    slug: "global-express",
    category: "avioes",
    name: "Global Express",
    description:
      "Aeronave de alto padrão para missões executivas de grande alcance.",
    images: buildAircraftImages("avioes", "global-express", 3),
    useCases: ["Longo alcance", "Executivo internacional", "Operação premium"]
  }),
  createAircraft({
    slug: "grand-caravan",
    category: "avioes",
    name: "Grand Caravan",
    description:
      "Modelo robusto para logística, transporte regional e operações com perfil utilitário.",
    images: buildAircraftImages("avioes", "grand-caravan", 4),
    useCases: ["Logística aérea", "Operação regional", "Transporte utilitário"]
  }),
  createAircraft({
    slug: "gulfstream-g450",
    category: "avioes",
    name: "Gulfstream G450",
    description:
      "Jato executivo de alto padrão para rotas estratégicas e viagens corporativas.",
    images: buildAircraftImages("avioes", "gulfstream-g450", 4),
    useCases: ["Executivo premium", "Missão corporativa", "Longa distância"]
  }),
  createAircraft({
    slug: "legacy-650",
    category: "avioes",
    name: "Legacy 650",
    description:
      "Jato com cabine ampla para voos executivos e traslados sob demanda.",
    images: buildAircraftImages("avioes", "jato-legacy-650", 4),
    useCases: ["Cabine ampla", "Executivo premium", "Viagem corporativa"]
  }),
  createAircraft({
    slug: "westwind-1124",
    category: "avioes",
    name: "Westwind 1124",
    description:
      "Jato executivo com perfil clássico para missões corporativas e estratégicas.",
    images: buildAircraftImages("avioes", "jato-westwind-1124", 4),
    useCases: ["Executivo clássico", "Missão corporativa", "Traslado sob demanda"]
  }),
  createAircraft({
    slug: "king-air-350",
    category: "avioes",
    name: "King Air 350",
    description:
      "Turboélice executivo para rotas regionais, apoio corporativo e deslocamentos eficientes.",
    images: buildAircraftImages("avioes", "king-air-350", 3, {
      imageToken: (index) => `img${index}`
    }),
    useCases: ["Turboélice executivo", "Operação regional", "Apoio corporativo"]
  }),
  createAircraft({
    slug: "king-air-b200",
    category: "avioes",
    name: "King Air B200",
    description:
      "Modelo versátil para voos regionais com perfil executivo e boa flexibilidade operacional.",
    images: buildAircraftImages("avioes", "king-air-B200", 3, {
      imageToken: (index) => `img${index}`
    }),
    useCases: ["Voo regional", "Executivo utilitário", "Missão versátil"]
  }),
  createAircraft({
    slug: "king-air-b300",
    category: "avioes",
    name: "King Air B300",
    description:
      "Turboélice de maior porte para operações corporativas e deslocamentos de médio alcance.",
    images: buildAircraftImages("avioes", "king-air-B300", 3, {
      imageToken: (index) => `img${index}`
    }),
    useCases: ["Médio alcance", "Operação corporativa", "Traslado executivo"]
  }),
  createAircraft({
    slug: "king-air-c90",
    category: "avioes",
    name: "King Air C90",
    description:
      "Turboélice para missões regionais e voos sob demanda com perfil executivo.",
    images: buildAircraftImages("avioes", "king-air-C90", 4, {
      imageToken: (index) => `img${index}`
    }),
    useCases: ["Missão regional", "Executivo leve", "Voos sob demanda"]
  }),
  createAircraft({
    slug: "lear-45",
    category: "avioes",
    name: "Lear 45",
    description:
      "Jato executivo para viagens corporativas com proposta de rapidez e conforto.",
    images: buildAircraftImages("avioes", "lear-45", 4),
    useCases: ["Executivo rápido", "Viagem corporativa", "Perfil premium"]
  }),
  createAircraft({
    slug: "learjet-31",
    category: "avioes",
    name: "Learjet 31",
    description:
      "Jato leve com perfil esportivo para deslocamentos executivos e missões rápidas.",
    images: buildAircraftImages("avioes", "learjet-31", 3),
    useCases: ["Jato leve", "Deslocamento rápido", "Executivo privativo"]
  }),
  createAircraft({
    slug: "phenom-100",
    category: "avioes",
    name: "Phenom 100",
    description:
      "Jato compacto para voos executivos de curta e média distância.",
    images: buildAircraftImages("avioes", "phenom-100", 3),
    useCases: ["Executivo compacto", "Curta distância", "Missão ágil"]
  }),
  createAircraft({
    slug: "rv10",
    category: "avioes",
    name: "RV10",
    description:
      "Aeronave leve para deslocamentos privativos e operações pontuais sob solicitação.",
    images: buildAircraftImages("avioes", "rv10", 3, {
      imageToken: (index) => `img${index}`
    }),
    useCases: ["Privativo leve", "Missão pontual", "Deslocamento direto"]
  }),
  createAircraft({
    slug: "seneca-bimotor",
    category: "avioes",
    name: "Seneca Bimotor",
    description:
      "Bimotor para rotas regionais e operações com foco em versatilidade.",
    images: buildAircraftImages("avioes", "seneca-bimotor", 2),
    useCases: ["Bimotor regional", "Viagem regional", "Operação versátil"]
  }),
  createAircraft({
    slug: "seneca-v",
    category: "avioes",
    name: "Seneca V",
    description:
      "Modelo executivo para deslocamentos regionais e missões sob demanda.",
    images: buildAircraftImages("avioes", "seneca-v", 4),
    useCases: ["Executivo regional", "Missão sob demanda", "Bimotor premium"]
  }),
  createAircraft({
    slug: "cheyenne-ii-xl",
    category: "avioes",
    name: "Cheyenne II XL",
    description:
      "Turboélice executivo com foco em conforto e flexibilidade para rotas estratégicas.",
    images: [
      "/images/aeronaves/avioes/chayenne-II-xl-img-1.jpg"
    ],
    useCases: ["Turboélice premium", "Rota estratégica", "Executivo sob demanda"]
  })
];

export const aircraft: readonly Aircraft[] = [...helicopters, ...airplanes] as const;

export function getAircraftByCategory(category: AircraftCategory) {
  return aircraft.filter((item) => item.category === category);
}

export function getAircraftBySlug(category: AircraftCategory, slug: string) {
  return aircraft.find(
    (item) => item.category === category && item.slug === slug
  );
}

export function getAircraftCategories(): AircraftCategory[] {
  return ["helicopteros", "avioes"];
}
