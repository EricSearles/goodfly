type ServiceGalleryImage = {
  src: string;
  alt: string;
};

export const serviceGalleryBySlug: Record<string, ServiceGalleryImage[]> = {
  "voos-executivos": [
    {
      src: "/images/aeronaves/avioes/avioes-global-express-img-2.jpg",
      alt: "Jato executivo em destaque para voos sob demanda"
    },
    {
      src: "/images/aeronaves/avioes/avioes-gulfstream-g450-img-1.jpg",
      alt: "Cabine e perfil executivo para deslocamentos premium"
    },
    {
      src: "/images/aeronaves/avioes/avioes-lear-45-img-2.jpg",
      alt: "Aeronave executiva preparada para atendimento ágil"
    }
  ],
  helicopteros: [
    {
      src: "/images/aeronaves/helicopteros/helicoptero-bell-429-img-2.jpg",
      alt: "Helicóptero executivo para deslocamentos rápidos"
    },
    {
      src: "/images/aeronaves/helicopteros/helicoptero-esquilo-B3-img-1.jpg",
      alt: "Helicóptero em operação sob demanda"
    },
    {
      src: "/images/aeronaves/helicopteros/helicoptero-bell-long-ranger-img-1.jpg",
      alt: "Helicóptero com perfil operacional e executivo"
    }
  ],
  "uti-aerea": [
    {
      src: "/images/aeronaves/avioes/uti-movel-aerea.jpeg",
      alt: "Interior de UTI móvel aérea com estrutura clínica embarcada"
    },
    {
      src: "/images/aeronaves/avioes/uti-aerea-nova-img-.jpg",
      alt: "Aeronave aeromédica pronta para missão urgente"
    },
    {
      src: "/images/aeronaves/avioes/uti-movel-aerea-1.png",
      alt: "Operação aérea com perfil de resposta rápida"
    }
  ],
  "transporte-de-orgaos": [
    {
      src: "/images/aeronaves/avioes/uti-aerea-nova-img-.jpg",
      alt: "Aeronave dedicada a missões urgentes de transporte aéreo"
    },
    {
      src: "/images/aeronaves/avioes/avioes-citation-xls-img-2.jpg",
      alt: "Aeronave para logística aérea crítica"
    },
    {
      src: "/images/aeronaves/avioes/avioes-king-air-C90-img1.jpg",
      alt: "Aeronave em apoio a missões sensíveis e urgentes"
    }
  ],
  "translado-funerario-aereo": [
    {
      src: "/images/aeronaves/avioes/uti-aerea (2).jpeg",
      alt: "Cabine configurada para translado funerário aéreo"
    },
    {
      src: "/images/aeronaves/avioes/traslado-funerario-aereo-1.png",
      alt: "Aeronave com perfil adequado para translado aéreo"
    },
    {
      src: "/images/aeronaves/avioes/traslado-funerario-aereo-2.jpg",
      alt: "Solução aérea com coordenação discreta e organizada"
    }
  ],
  "aviacao-agricola": [
    {
      src: "/images/aeronaves/avioes/aviacao-agricola-1.jpg",
      alt: "Aeronave para apoio em operações agrícolas"
    },
    {
      src: "/images/aeronaves/avioes/aviacao-agricola-2.jpg",
      alt: "Solução aérea para cobertura de áreas amplas"
    },
    {
      src: "/images/aeronaves/avioes/aviacao-agricola-3.jpg",
      alt: "Aeronave em operação com foco em produtividade no campo"
    }
  ],
  "logistica-aerea": [
    {
      src: "/images/aeronaves/avioes/avioes-grand-caravan-img-1.jpg",
      alt: "Aeronave para logística aérea e cargas urgentes"
    },
    {
      src: "/images/aeronaves/avioes/avioes-king-air-C90-img2.jpg",
      alt: "Modelo utilizado em atendimento logístico sob demanda"
    },
    {
      src: "/images/aeronaves/avioes/avioes-seneca-bimotor-img-1.jpg",
      alt: "Aeronave em apoio a missões de entrega crítica"
    }
  ],
  "compra-e-venda-de-aeronaves": [
    {
      src: "/images/aeronaves/avioes/avioes-global-express-img-1.jpg",
      alt: "Aeronave executiva em vitrine de oportunidades"
    },
    {
      src: "/images/aeronaves/avioes/avioes-jato-legacy-650-img-2.jpg",
      alt: "Jato executivo em processo de avaliação de perfil"
    },
    {
      src: "/images/aeronaves/avioes/avioes-citation-sovereing-img-1.jpg",
      alt: "Aeronave com apelo comercial para compra e venda"
    }
  ],
  "gestao-de-aeronaves": [
    {
      src: "/images/aeronaves/avioes/avioes-jato-westwind-1124-img-1.jpg",
      alt: "Aeronave em contexto de gestão operacional"
    },
    {
      src: "/images/aeronaves/avioes/avioes-king-air-350-img1.jpg",
      alt: "Modelo executivo para aproveitamento estruturado do ativo"
    },
    {
      src: "/images/aeronaves/avioes/avioes-jato-legacy-650-img-3.jpg",
      alt: "Aeronave com foco em acompanhamento profissional"
    }
  ],
  "agregue-sua-aeronave": [
    {
      src: "/images/aeronaves/helicopteros/helicoptero-bell-429-img-4.jpg",
      alt: "Helicóptero executivo em contexto de agenciamento"
    },
    {
      src: "/images/aeronaves/avioes/avioes-gulfstream-g450-img-2.jpg",
      alt: "Aeronave preparada para melhor aproveitamento comercial"
    },
    {
      src: "/images/aeronaves/helicopteros/helicoptero-bell-jet-ranger-img-1.jpg",
      alt: "Aeronave em ambiente operacional com potencial de agregação"
    }
  ],
  "voos-compartilhados": [
    {
      src: "/images/aeronaves/avioes/avioes-jato-cj3-img-1.jpg",
      alt: "Jato executivo em cenário de compartilhamento sob demanda"
    },
    {
      src: "/images/aeronaves/avioes/avioes-cj1-img1.jpg",
      alt: "Aeronave com perfil adequado para operação compartilhada"
    },
    {
      src: "/images/aeronaves/avioes/avioes-phenom-100-img-1.jpg",
      alt: "Jato leve para composição de rota compartilhada"
    }
  ]
};

export const relatedServiceSlugsBySlug: Record<string, string[]> = {
  "voos-executivos": [
    "helicopteros",
    "compra-e-venda-de-aeronaves",
    "voos-compartilhados"
  ],
  helicopteros: [
    "voos-executivos",
    "agregue-sua-aeronave",
    "gestao-de-aeronaves"
  ],
  "uti-aerea": [
    "transporte-de-orgaos",
    "logistica-aerea",
    "helicopteros"
  ],
  "transporte-de-orgaos": [
    "uti-aerea",
    "logistica-aerea",
    "voos-executivos"
  ],
  "translado-funerario-aereo": [
    "logistica-aerea",
    "voos-executivos",
    "helicopteros"
  ],
  "aviacao-agricola": [
    "logistica-aerea",
    "helicopteros",
    "compra-e-venda-de-aeronaves"
  ],
  "logistica-aerea": [
    "transporte-de-orgaos",
    "uti-aerea",
    "aviacao-agricola"
  ],
  "compra-e-venda-de-aeronaves": [
    "gestao-de-aeronaves",
    "agregue-sua-aeronave",
    "voos-executivos"
  ],
  "gestao-de-aeronaves": [
    "agregue-sua-aeronave",
    "compra-e-venda-de-aeronaves",
    "voos-executivos"
  ],
  "agregue-sua-aeronave": [
    "gestao-de-aeronaves",
    "compra-e-venda-de-aeronaves",
    "helicopteros"
  ],
  "voos-compartilhados": [
    "voos-executivos",
    "compra-e-venda-de-aeronaves",
    "helicopteros"
  ]
};

