export type ServiceContent = {
  slug: string;
  title: string;
  navTitle: string;
  subtitle: string;
  summary: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  heroImage: string;
  heroAlt: string;
  benefits: Array<{ title: string; description: string }>;
  useCases: string[];
  howItWorks: Array<{ title: string; description: string }>;
  importantInfo: string[];
  faq: Array<{ question: string; answer: string }>;
  ctaText: string;
  icon:
    | "plane"
    | "helicopter"
    | "heartPulse"
    | "shieldPlus"
    | "sprout"
    | "package"
    | "settings2"
    | "planeTakeoff"
    | "users";
  featuredOnHome?: boolean;
};

export const services: ServiceContent[] = [
  {
    slug: "voos-executivos",
    title: "Voos Executivos sob Demanda",
    navTitle: "Voos Executivos",
    subtitle:
      "Agenciamento de jatos executivos, táxi aéreo executivo e fretamento sob demanda com atendimento consultivo 24 horas.",
    summary:
      "Soluções ágeis para viagens corporativas, deslocamentos estratégicos e roteiros personalizados.",
    description:
      "A Good Fly coordena soluções de aviação executiva no Brasil para clientes que precisam de agilidade, discrição e flexibilidade de rota, conectando a operação à aeronave e ao operador homologado mais adequado.",
    seoTitle:
      "Voos Executivos sob Demanda | Táxi Aéreo Executivo | Good Fly",
    seoDescription:
      "Solicite cotação de voos executivos, táxi aéreo executivo, fretamento de jato e aluguel de jato particular com atendimento 24 horas em todo o Brasil.",
    keywords: [
      "Táxi aéreo",
      "Táxi aéreo executivo",
      "Jato executivo",
      "Fretamento de jato",
      "Aluguel de jato particular",
      "Aviação executiva no Brasil"
    ],
    heroImage: "/images/hero-jato-executivo.jpg",
    heroAlt: "Jato executivo em solo ao pôr do sol",
    benefits: [
      {
        title: "Atendimento imediato",
        description:
          "Análise rápida do trajeto, perfil da missão e janela operacional para retorno de cotação em curto prazo."
      },
      {
        title: "Flexibilidade de rota",
        description:
          "Coordenação de embarques em diferentes bases, escalas estratégicas e agendas de última hora."
      },
      {
        title: "Discrição e conforto",
        description:
          "Soluções desenhadas para executivos, famílias e deslocamentos que exigem privacidade."
      }
    ],
    useCases: [
      "Reuniões corporativas com agenda apertada",
      "Deslocamentos para fazendas, polos industriais e cidades sem malha regular eficiente",
      "Viagens com necessidade de privacidade, rapidez e conveniência",
      "Operações especiais para grupos reduzidos ou rotas sob medida"
    ],
    howItWorks: [
      {
        title: "Briefing da missão",
        description:
          "Recebemos origem, destino, data, passageiros, horários e necessidades específicas da viagem."
      },
      {
        title: "Busca de solução",
        description:
          "Mapeamos disponibilidade operacional e perfil de aeronaves com operadores devidamente autorizados."
      },
      {
        title: "Cotação e coordenação",
        description:
          "Apresentamos a alternativa mais aderente e apoiamos a jornada até a confirmação da operação."
      }
    ],
    importantInfo: [
      "As cotações dependem de disponibilidade operacional, aeroporto, meteorologia e regras aplicáveis à missão.",
      "A Good Fly atua na intermediação e coordenação, não se apresentando como operadora aérea própria.",
      "Taxas aeroportuárias, pernoite, reposicionamento e necessidades especiais podem impactar o orçamento final."
    ],
    faq: [
      {
        question: "A Good Fly opera aeronaves próprias?",
        answer:
          "Não necessariamente. A Good Fly atua na intermediação e coordenação de soluções aéreas sob demanda, conectando clientes a operadores e aeronaves adequadas conforme a necessidade de cada missão."
      },
      {
        question: "Consigo solicitar jato executivo com pouca antecedência?",
        answer:
          "Sim. Muitas missões são urgentes. Envie origem, destino, data, horário e número de passageiros para avaliarmos a disponibilidade operacional."
      },
      {
        question: "Vocês atendem somente capitais?",
        answer:
          "Não. Buscamos soluções para rotas em todo o Brasil, inclusive em localidades com acesso aéreo mais estratégico."
      }
    ],
    ctaText: "Solicitar cotação de voo executivo",
    icon: "plane",
    featuredOnHome: true
  },
  {
    slug: "helicopteros",
    title: "Helicópteros Executivos e Operacionais",
    navTitle: "Helicópteros",
    subtitle:
      "Coordenação de soluções com helicópteros executivos para deslocamentos urbanos, missões rápidas e operações especiais.",
    summary:
      "Agilidade em curtas distâncias, acesso a áreas específicas e deslocamentos com ganho de tempo.",
    description:
      "A Good Fly conecta clientes a soluções com helicópteros executivos e operacionais conforme o perfil da missão, buscando ganho logístico, rapidez e conveniência.",
    seoTitle:
      "Aluguel de Helicóptero Executivo | Helicópteros sob Demanda | Good Fly",
    seoDescription:
      "Cotação para aluguel de helicóptero, helicóptero executivo e operações sob demanda com atendimento 24 horas e coordenação especializada.",
    keywords: [
      "Aluguel de helicóptero",
      "Helicóptero executivo",
      "Táxi aéreo",
      "Aviação executiva no Brasil"
    ],
    heroImage: "/images/helicoptero-executivo.jpg",
    heroAlt: "Catálogo Good Fly com helicópteros e serviços especiais",
    benefits: [
      {
        title: "Mobilidade estratégica",
        description:
          "Solução útil para evitar grandes deslocamentos terrestres e otimizar agendas em regiões urbanas e remotas."
      },
      {
        title: "Versatilidade de missão",
        description:
          "Atendimento para traslado executivo, inspeções, apoio operacional e agendas com múltiplos pontos."
      },
      {
        title: "Coordenação dedicada",
        description:
          "Acompanhamento da disponibilidade e da alternativa aérea mais compatível com a demanda."
      }
    ],
    useCases: [
      "Transfer entre aeroporto, heliponto, fazenda ou base operacional",
      "Visitas técnicas e inspeções em áreas de difícil acesso",
      "Agenda executiva em múltiplos compromissos no mesmo dia",
      "Apoio em operações especiais com rapidez"
    ],
    howItWorks: [
      {
        title: "Entendimento do trajeto",
        description:
          "Levantamos pontos de embarque, pouso, quantidade de passageiros e finalidade do voo."
      },
      {
        title: "Verificação operacional",
        description:
          "Analisamos viabilidade com operadores homologados, restrições locais e janelas de atendimento."
      },
      {
        title: "Coordenação da solução",
        description:
          "Compartilhamos a cotação e seguimos com o suporte até a etapa de confirmação."
      }
    ],
    importantInfo: [
      "A disponibilidade de helicópteros varia por região, helipontos, peso, alcance e condições meteorológicas.",
      "Algumas rotas exigem análise prévia de segurança, autorização local e infraestrutura compatível.",
      "A operação é coordenada com terceiros devidamente autorizados conforme a missão."
    ],
    faq: [
      {
        question: "É possível cotar helicóptero para trechos curtos?",
        answer:
          "Sim. O helicóptero pode ser uma solução eficiente para deslocamentos urbanos e regionais com necessidade de agilidade."
      },
      {
        question: "Vocês atendem operações fora dos grandes centros?",
        answer:
          "Sim. Avaliamos a viabilidade conforme infraestrutura, autonomia, peso transportado e disponibilidade operacional."
      }
    ],
    ctaText: "Quero cotar um helicóptero",
    icon: "helicopter",
    featuredOnHome: true
  },
  {
    slug: "uti-aerea",
    title: "UTI Aérea e Ambulância Aérea",
    navTitle: "UTI Aérea",
    subtitle:
      "Intermediação de soluções aeromédicas com atendimento imediato, análise logística e suporte 24 horas.",
    summary:
      "Coordenação ágil para remoções aeromédicas, transporte assistido e missões sensíveis.",
    description:
      "A Good Fly atua na coordenação de UTI aérea e ambulância aérea, conectando a missão a operadores e equipes especializadas conforme a complexidade clínica e a logística necessária.",
    seoTitle: "UTI Aérea e Ambulância Aérea | Remoção Aeromédica | Good Fly",
    seoDescription:
      "Solicite UTI aérea, ambulância aérea e remoção aeromédica com atendimento 24 horas e coordenação responsável em todo o Brasil.",
    keywords: ["UTI aérea", "Ambulância aérea", "Remoção aeromédica"],
    heroImage: "/images/uti-aerea.jpg",
    heroAlt: "Catálogo Good Fly com soluções aéreas especiais",
    benefits: [
      {
        title: "Atuação 24 horas",
        description:
          "Recebimento ágil das informações clínicas e logísticas para análise imediata da missão."
      },
      {
        title: "Coordenação sensível",
        description:
          "Atenção aos detalhes de urgência, equipe, estrutura de embarque e necessidade de continuidade assistencial."
      },
      {
        title: "Cobertura nacional",
        description:
          "Busca de soluções em diversas regiões do Brasil conforme disponibilidade e requisitos médicos."
      }
    ],
    useCases: [
      "Transferência inter-hospitalar",
      "Remoção de pacientes em longa distância",
      "Atendimento em locais sem logística terrestre adequada",
      "Missões que exigem análise aeromédica e resposta rápida"
    ],
    howItWorks: [
      {
        title: "Coleta de dados essenciais",
        description:
          "Solicitamos dados clínicos, origem, destino, contato do responsável e urgência da missão."
      },
      {
        title: "Avaliação da operação",
        description:
          "Avaliamos disponibilidade aeromédica, perfil da aeronave e suporte necessário para o caso."
      },
      {
        title: "Acompanhamento até a confirmação",
        description:
          "Centralizamos a comunicação para agilizar a tomada de decisão e a coordenação da resposta."
      }
    ],
    importantInfo: [
      "A missão depende da condição clínica, aceite médico, infraestrutura aeroportuária e disponibilidade especializada.",
      "Documentos do paciente, informações hospitalares e contatos responsáveis aceleram a análise.",
      "A Good Fly coordena a solução junto a operadores e estruturas competentes para o atendimento."
    ],
    faq: [
      {
        question: "É possível cotar UTI aérea com urgência?",
        answer:
          "Sim. O atendimento é 24 horas. Quanto mais completos estiverem os dados clínicos e logísticos, mais rápida tende a ser a análise."
      },
      {
        question: "Vocês fazem remoção entre hospitais?",
        answer:
          "Sim. Esse é um dos cenários mais comuns, sempre condicionado à disponibilidade e aos requisitos médicos da missão."
      }
    ],
    ctaText: "Preciso de UTI aérea agora",
    icon: "heartPulse",
    featuredOnHome: true
  },
  {
    slug: "transporte-de-orgaos",
    title: "Transporte Aéreo de Órgãos",
    navTitle: "Transporte de Órgãos",
    subtitle:
      "Coordenação logística aérea crítica para missões sensíveis que exigem rapidez e alinhamento operacional.",
    summary:
      "Soluções sob demanda para transporte de órgãos, equipes e materiais sensíveis.",
    description:
      "A Good Fly apoia a coordenação logística de transporte de órgãos e equipes médicas, buscando a solução aérea mais adequada diante do tempo crítico e da urgência da operação.",
    seoTitle: "Transporte de Órgãos por Via Aérea | Logística Crítica | Good Fly",
    seoDescription:
      "Coordenação de transporte aéreo de órgãos, equipes médicas e materiais sensíveis com atendimento 24 horas em todo o Brasil.",
    keywords: ["Transporte de órgãos", "Logística aérea", "UTI aérea"],
    heroImage: "/images/transporte-orgaos.jpg",
    heroAlt: "Painel Good Fly com foco em transporte de órgãos e logística crítica",
    benefits: [
      {
        title: "Rapidez no acionamento",
        description:
          "Recebemos a missão e iniciamos a busca da solução operacional com a maior agilidade possível."
      },
      {
        title: "Apoio à logística crítica",
        description:
          "Coordenação de horários, bases, escalas e interfaces necessárias para reduzir atrasos."
      },
      {
        title: "Comunicação centralizada",
        description:
          "Facilitamos o fluxo de informações entre envolvidos para uma operação mais organizada."
      }
    ],
    useCases: [
      "Transporte de órgãos com janela de tempo crítica",
      "Deslocamento de equipes médicas e apoio hospitalar",
      "Missões com múltiplas conexões logísticas",
      "Atendimentos em diferentes estados do Brasil"
    ],
    howItWorks: [
      {
        title: "Acionamento imediato",
        description:
          "Entendemos rota, urgência, materiais envolvidos e janelas operacionais."
      },
      {
        title: "Estruturação da alternativa",
        description:
          "Buscamos disponibilidade com operadores adequados à missão e às exigências do transporte."
      },
      {
        title: "Coordenação contínua",
        description:
          "Acompanhamos a jornada com foco em tempo de resposta e alinhamento operacional."
      }
    ],
    importantInfo: [
      "A viabilidade depende de disponibilidade de aeronave, horário, aeroporto, meteorologia e requisitos da missão.",
      "Missões críticas exigem dados objetivos e acionamento imediato para ganhar tempo na análise.",
      "A Good Fly faz a intermediação da solução aérea, respeitando disponibilidade operacional."
    ],
    faq: [
      {
        question: "Vocês atendem transporte de órgãos em todo o Brasil?",
        answer:
          "Buscamos atender em todo o território nacional conforme disponibilidade operacional, janela da missão e infraestrutura dos aeroportos envolvidos."
      },
      {
        question: "Também é possível transportar equipe médica?",
        answer:
          "Sim. O briefing da missão deve incluir todas as necessidades logísticas para análise completa."
      }
    ],
    ctaText: "Acionar transporte de órgãos",
    icon: "shieldPlus",
    featuredOnHome: true
  },
  {
    slug: "translado-funerario-aereo",
    title: "Translado Funerário Aéreo e Esquife",
    navTitle: "Translado Funerário Aéreo",
    subtitle:
      "Coordenação de traslado funerário aéreo com sensibilidade, discrição e análise documental da missão.",
    summary:
      "Apoio em operações de esquife e traslado aéreo com atendimento humanizado e responsivo.",
    description:
      "A Good Fly coordena soluções de translado funerário aéreo, considerando documentação, urgência, rota e comunicação com os envolvidos de forma respeitosa e organizada.",
    seoTitle:
      "Translado Funerário Aéreo | Transporte Aéreo de Esquife | Good Fly",
    seoDescription:
      "Solicite translado funerário aéreo, transporte aéreo de esquife e coordenação logística com atendimento 24 horas e suporte humanizado.",
    keywords: ["Translado funerário aéreo", "Esquife", "Logística aérea"],
    heroImage: "/images/translado-funerario-aereo.jpg",
    heroAlt: "Painel institucional Good Fly com serviços de traslado especial",
    benefits: [
      {
        title: "Atendimento humanizado",
        description:
          "Comunicação cuidadosa para lidar com um momento sensível sem perder a objetividade operacional."
      },
      {
        title: "Apoio documental",
        description:
          "Orientação inicial sobre documentação, rota e etapas críticas da operação."
      },
      {
        title: "Coordenação ágil",
        description:
          "Busca de disponibilidade de acordo com a urgência, localização e requisitos da missão."
      }
    ],
    useCases: [
      "Translado entre estados",
      "Operações com esquife por via aérea",
      "Atendimento a famílias, funerárias e responsáveis operacionais",
      "Missões com necessidade de tempo e organização"
    ],
    howItWorks: [
      {
        title: "Recebimento das informações",
        description:
          "Coletamos origem, destino, necessidade de prazo e dados documentais básicos."
      },
      {
        title: "Análise da operação",
        description:
          "Verificamos disponibilidade operacional, regras aplicáveis e melhores alternativas logísticas."
      },
      {
        title: "Suporte até a definição",
        description:
          "Apoiamos a comunicação e a coordenação para viabilizar a solução mais adequada."
      }
    ],
    importantInfo: [
      "Documentação, horários de aeroporto e disponibilidade podem impactar o prazo de atendimento.",
      "Cada missão exige análise individual conforme origem, destino e requisitos sanitários ou operacionais.",
      "A Good Fly coordena a intermediação da operação com operadores devidamente autorizados."
    ],
    faq: [
      {
        question: "Vocês atendem translado funerário aéreo com urgência?",
        answer:
          "Sim. O atendimento é 24 horas e a análise depende das informações logísticas e documentais da missão."
      },
      {
        question: "Também auxiliam com esquife?",
        answer:
          "Sim. Informe a necessidade no primeiro contato para direcionarmos a análise corretamente."
      }
    ],
    ctaText: "Solicitar translado funerário aéreo",
    icon: "plane",
    featuredOnHome: true
  },
  {
    slug: "aviacao-agricola",
    title: "Aviação Agrícola sob Demanda",
    navTitle: "Aviação Agrícola",
    subtitle:
      "Coordenação de soluções em aviação agrícola para pulverização, dispersão técnica e operações no campo.",
    summary:
      "Apoio para pulverização aérea, dispersão de defensivos e missões técnicas em áreas rurais.",
    description:
      "A Good Fly conecta produtores e operações rurais a soluções de aviação agrícola conforme área, janela de aplicação, perfil técnico e disponibilidade.",
    seoTitle: "Aviação Agrícola | Pulverização Aérea | Good Fly",
    seoDescription:
      "Soluções de aviação agrícola e pulverização aérea sob demanda com atendimento consultivo, disponibilidade operacional e cobertura nacional.",
    keywords: ["Aviação agrícola", "Pulverização aérea", "Logística aérea"],
    heroImage: "/images/aviacao-agricola.jpg",
    heroAlt: "Aeronave agrícola em operação sobre plantação",
    benefits: [
      {
        title: "Alcance operacional",
        description:
          "Busca de alternativas para aplicação em áreas amplas com eficiência logística."
      },
      {
        title: "Apoio técnico inicial",
        description:
          "Levantamento da necessidade para direcionar a solução mais aderente à operação."
      },
      {
        title: "Atendimento nacional",
        description:
          "Análise de atendimento em diferentes polos agrícolas conforme disponibilidade."
      }
    ],
    useCases: [
      "Pulverização aérea sob demanda",
      "Aplicação em grandes áreas com janela operacional sensível",
      "Operações em regiões com difícil mobilização terrestre",
      "Apoio a cronogramas agrícolas sazonais"
    ],
    howItWorks: [
      {
        title: "Levantamento da operação",
        description:
          "Recebemos localização, tipo de aplicação, área estimada e prazo desejado."
      },
      {
        title: "Busca de disponibilidade",
        description:
          "Mapeamos soluções com operadores e equipamentos compatíveis com a missão."
      },
      {
        title: "Alinhamento comercial",
        description:
          "Apresentamos a alternativa e orientamos os próximos passos para continuidade."
      }
    ],
    importantInfo: [
      "A disponibilidade depende de base operacional, janela climática, tipo de aplicação e porte da demanda.",
      "Questões ambientais, regulatórias e técnicas precisam ser observadas em cada missão.",
      "A Good Fly atua como coordenadora e intermediadora da solução aérea."
    ],
    faq: [
      {
        question: "A Good Fly faz pulverização aérea diretamente?",
        answer:
          "A Good Fly faz a intermediação e coordenação da solução, conectando a demanda a operadores adequados conforme disponibilidade."
      },
      {
        question: "Vocês atendem diferentes estados?",
        answer:
          "Sim. Avaliamos cada solicitação de acordo com localização, urgência e disponibilidade operacional."
      }
    ],
    ctaText: "Solicitar atendimento em aviação agrícola",
    icon: "sprout",
    featuredOnHome: true
  },
  {
    slug: "logistica-aerea",
    title: "Logística Aérea, Malotes e Cargas Urgentes",
    navTitle: "Logística Aérea",
    subtitle:
      "Coordenação de logística aérea urgente para cargas críticas, documentos, peças e malotes.",
    summary:
      "Soluções aéreas para itens urgentes com análise de rota, prazo e criticidade.",
    description:
      "A Good Fly apoia operações de logística aérea sob demanda para materiais urgentes, peças, documentos e cargas críticas em diferentes regiões do Brasil.",
    seoTitle: "Logística Aérea Urgente | Malotes e Cargas Críticas | Good Fly",
    seoDescription:
      "Coordenação de logística aérea urgente, malotes, documentos e cargas críticas com atendimento 24 horas em todo o Brasil.",
    keywords: ["Logística aérea", "Malotes", "Cargas urgentes", "Táxi aéreo"],
    heroImage: "/images/logistica-aerea.jpg",
    heroAlt: "Painel Good Fly com logística aérea e transporte de cargas",
    benefits: [
      {
        title: "Rapidez operacional",
        description:
          "Soluções para demandas que não podem aguardar a malha tradicional."
      },
      {
        title: "Cobertura ampla",
        description:
          "Avaliação de rotas em todo o Brasil conforme criticidade e disponibilidade."
      },
      {
        title: "Coordenação sob medida",
        description:
          "Análise do melhor fluxo para tipo de material, prazo e destino."
      }
    ],
    useCases: [
      "Peças paradas em operações industriais ou agrícolas",
      "Documentos e malotes sensíveis",
      "Materiais hospitalares ou urgências logísticas",
      "Cargas críticas com prazo apertado"
    ],
    howItWorks: [
      {
        title: "Briefing da carga",
        description:
          "Recebemos origem, destino, peso, volume, urgência e restrições do material."
      },
      {
        title: "Estudo da alternativa",
        description:
          "Verificamos disponibilidade de aeronaves, bases e timing operacional."
      },
      {
        title: "Coordenação da entrega",
        description:
          "Organizamos a comunicação para acelerar a tomada de decisão e o follow-up."
      }
    ],
    importantInfo: [
      "Peso, dimensões, acondicionamento e urgência impactam diretamente a alternativa aérea disponível.",
      "Algumas cargas exigem análise documental, embalagem específica ou aeroportos aptos.",
      "A Good Fly coordena a solução em parceria com operadores e estruturas compatíveis."
    ],
    faq: [
      {
        question: "Vocês atendem apenas grandes cargas?",
        answer:
          "Não. Também analisamos malotes, documentos, peças e materiais urgentes, dependendo do contexto logístico."
      },
      {
        question: "O atendimento é emergencial?",
        answer:
          "Sim. Muitas solicitações ocorrem com urgência e são tratadas com prioridade de resposta."
      }
    ],
    ctaText: "Preciso de logística aérea urgente",
    icon: "package",
    featuredOnHome: true
  },
  {
    slug: "compra-e-venda-de-aeronaves",
    title: "Compra e Venda de Aeronaves",
    navTitle: "Compra e Venda",
    subtitle:
      "Apoio consultivo em intermediação de compra e venda de aeronaves com visão comercial e operacional.",
    summary:
      "Conexão entre oportunidade, análise de perfil e prospecção alinhada ao objetivo do cliente.",
    description:
      "A Good Fly auxilia na intermediação de compra e venda de aeronaves, conectando interesses de mercado e apoiando a avaliação inicial do ativo conforme o objetivo da negociação.",
    seoTitle:
      "Compra e Venda de Aeronaves | Intermediação de Negócios | Good Fly",
    seoDescription:
      "Intermediação para compra e venda de aeronaves, jatos executivos e helicópteros com apoio comercial e análise consultiva.",
    keywords: [
      "Compra e venda de aeronaves",
      "Jato executivo",
      "Helicóptero executivo"
    ],
    heroImage: "/images/jato-executivo-pista.jpg",
    heroAlt: "Jatos executivos estacionados em pátio aeronáutico",
    benefits: [
      {
        title: "Apoio consultivo",
        description:
          "Direcionamento comercial de acordo com perfil de uso, faixa de investimento e tipo de operação."
      },
      {
        title: "Rede de mercado",
        description:
          "Conexão com oportunidades e interlocutores conforme disponibilidade e interesse."
      },
      {
        title: "Visão prática",
        description:
          "Análise inicial considerando contexto operacional, adequação e aproveitamento do ativo."
      }
    ],
    useCases: [
      "Busca de jato executivo compatível com missão corporativa",
      "Venda de aeronaves com apoio comercial",
      "Avaliação de oportunidade para renovação de frota",
      "Negócios envolvendo aeronaves de uso executivo ou especial"
    ],
    howItWorks: [
      {
        title: "Entendimento do objetivo",
        description:
          "Mapeamos o perfil desejado da aeronave ou da oportunidade de venda."
      },
      {
        title: "Prospecção e triagem",
        description:
          "Buscamos alternativas compatíveis e organizamos os principais pontos de análise."
      },
      {
        title: "Apoio nas próximas etapas",
        description:
          "Facilitamos a conexão inicial para evolução comercial conforme interesse das partes."
      }
    ],
    importantInfo: [
      "Negociações dependem de disponibilidade de mercado, documentação, histórico do ativo e interesse das partes.",
      "Inspeções, auditorias e aspectos regulatórios devem ser tratados nas etapas técnicas apropriadas.",
      "A Good Fly atua como intermediadora e facilitadora comercial."
    ],
    faq: [
      {
        question: "Vocês vendem aeronaves próprias?",
        answer:
          "A atuação principal é de intermediação e apoio consultivo, conectando oportunidades conforme o perfil e a disponibilidade do mercado."
      },
      {
        question: "Atendem jatos e helicópteros?",
        answer:
          "Sim. O suporte pode envolver diferentes categorias de aeronaves conforme a necessidade."
      }
    ],
    ctaText: "Quero falar sobre compra ou venda",
    icon: "plane",
    featuredOnHome: true
  },
  {
    slug: "gestao-de-aeronaves",
    title: "Gestão e Agenciamento de Aeronaves",
    navTitle: "Gestão de Aeronaves",
    subtitle:
      "Suporte à gestão, comercialização de voos e organização operacional para melhor aproveitamento do ativo.",
    summary:
      "Estruturação operacional e comercial para proprietários que buscam eficiência e acompanhamento profissional.",
    description:
      "A Good Fly apoia proprietários na gestão e no agenciamento de aeronaves, buscando melhor aproveitamento do ativo, apoio comercial e organização operacional conforme o perfil da operação.",
    seoTitle:
      "Gestão de Aeronaves | Administração de Aeronaves | Good Fly",
    seoDescription:
      "Conheça a gestão e o agenciamento de aeronaves da Good Fly para reduzir custos, apoiar a comercialização e otimizar a operação do ativo.",
    keywords: [
      "Gestão de aeronaves",
      "Administração de aeronaves",
      "Agenciamento de aeronaves",
      "Agregar aeronave"
    ],
    heroImage: "/images/gestao-aeronaves.jpg",
    heroAlt: "Painel institucional Good Fly com gestão e agenciamento de aeronaves",
    benefits: [
      {
        title: "Otimização operacional",
        description:
          "Apoio para organizar rotinas, fornecedores e demandas ligadas ao uso da aeronave."
      },
      {
        title: "Apoio comercial",
        description:
          "Busca de melhor aproveitamento do ativo conforme modelo operacional e disponibilidade."
      },
      {
        title: "Visão profissional",
        description:
          "Atendimento consultivo para proprietários que querem estruturar a gestão com mais clareza."
      }
    ],
    useCases: [
      "Proprietários que querem reduzir ociosidade do ativo",
      "Organização da rotina operacional da aeronave",
      "Apoio à comercialização de voos conforme disponibilidade",
      "Estruturação mais profissional da gestão"
    ],
    howItWorks: [
      {
        title: "Diagnóstico inicial",
        description:
          "Entendemos o perfil da aeronave, base, custos, metas e disponibilidade do proprietário."
      },
      {
        title: "Desenho da estratégia",
        description:
          "Definimos o modelo de apoio operacional e comercial compatível com o ativo."
      },
      {
        title: "Acompanhamento",
        description:
          "Mantemos a coordenação do fluxo de oportunidades e das demandas relacionadas à operação."
      }
    ],
    importantInfo: [
      "O resultado depende do perfil da aeronave, base operacional, disponibilidade, documentação e contexto de mercado.",
      "A Good Fly não substitui obrigações regulatórias do proprietário ou do operador responsável.",
      "A atuação é voltada à coordenação, organização e agenciamento do ativo."
    ],
    faq: [
      {
        question: "A gestão ajuda a reduzir custos fixos?",
        answer:
          "Esse é um dos objetivos possíveis. A estratégia depende do perfil da aeronave e do modelo de aproveitamento viável para o ativo."
      },
      {
        question: "A Good Fly também apoia a comercialização da aeronave?",
        answer:
          "Sim. O apoio pode envolver gestão, agenciamento e, quando fizer sentido, frentes comerciais relacionadas ao ativo."
      }
    ],
    ctaText: "Quero falar sobre gestão de aeronave",
    icon: "settings2",
    featuredOnHome: true
  },
  {
    slug: "agregue-sua-aeronave",
    title: "Agregue sua Aeronave",
    navTitle: "Agregue sua Aeronave",
    subtitle:
      "Uma página dedicada para proprietários que querem estrutura comercial, gestão e melhor aproveitamento da aeronave.",
    summary:
      "Transforme o ativo em oportunidade com apoio profissional, organização e visão comercial.",
    description:
      "A Good Fly auxilia proprietários que desejam agregar sua aeronave, buscando melhor aproveitamento do ativo, apoio comercial e organização operacional alinhada à realidade da aeronave.",
    seoTitle: "Agregue sua Aeronave | Good Fly",
    seoDescription:
      "Saiba como agregar sua aeronave à Good Fly e contar com apoio comercial, gestão profissional e melhor aproveitamento do ativo.",
    keywords: [
      "Agregar aeronave",
      "Gestão de aeronaves",
      "Administração de aeronaves"
    ],
    heroImage: "/images/catalogo-good-fly.jpg",
    heroAlt: "Catálogo Good Fly sobre mesa em ambiente premium",
    benefits: [
      {
        title: "Redução de custos fixos",
        description:
          "Estratégias para buscar melhor aproveitamento da aeronave e aliviar o peso da ociosidade."
      },
      {
        title: "Apoio comercial",
        description:
          "Suporte na apresentação do ativo e na conexão com oportunidades compatíveis."
      },
      {
        title: "Gestão mais clara",
        description:
          "Organização de fluxo operacional, comunicação e acompanhamento profissional."
      }
    ],
    useCases: [
      "Proprietários com aeronave subutilizada",
      "Busca por melhor aproveitamento econômico do ativo",
      "Necessidade de apoio comercial e organização operacional",
      "Estruturação profissional para crescer com previsibilidade"
    ],
    howItWorks: [
      {
        title: "Conhecimento do ativo",
        description:
          "Levantamos categoria da aeronave, base, disponibilidade e expectativa do proprietário."
      },
      {
        title: "Planejamento do agenciamento",
        description:
          "Definimos caminhos de apoio comercial e operacional conforme o perfil do ativo."
      },
      {
        title: "Entrada na rotina de acompanhamento",
        description:
          "Passamos a atuar na coordenação do fluxo, comunicação e evolução das oportunidades."
      }
    ],
    importantInfo: [
      "A análise depende do tipo de aeronave, documentação, base, disponibilidade e contexto do mercado.",
      "A atuação da Good Fly envolve coordenação e agenciamento, respeitando os limites operacionais e regulatórios aplicáveis.",
      "Cada ativo exige uma estratégia própria para atingir melhor aproveitamento."
    ],
    faq: [
      {
        question: "Qualquer proprietário pode agregar a aeronave?",
        answer:
          "Cada caso é analisado individualmente conforme tipo de aeronave, documentação, disponibilidade e aderência ao modelo de agenciamento."
      },
      {
        question: "Agregar significa operar pela Good Fly?",
        answer:
          "Não. A proposta é de apoio comercial, gestão e coordenação do aproveitamento do ativo, sem descaracterizar a responsabilidade do operador e das exigências aplicáveis."
      }
    ],
    ctaText: "Quero agregar minha aeronave",
    icon: "planeTakeoff"
  },
  {
    slug: "voos-compartilhados",
    title: "Voos Compartilhados",
    navTitle: "Voos Compartilhados",
    subtitle:
      "Soluções para compartilhamento de operação conforme perfil da missão, disponibilidade e análise de compatibilidade.",
    summary:
      "Alternativas para dividir uma operação aérea quando houver viabilidade e condições compatíveis.",
    description:
      "A Good Fly avalia oportunidades de voos compartilhados conforme rota, agenda, perfil dos passageiros e disponibilidade operacional, sempre dentro das condições compatíveis para cada missão.",
    seoTitle: "Voos Compartilhados | Soluções Aéreas sob Demanda | Good Fly",
    seoDescription:
      "Conheça as possibilidades de voos compartilhados com análise de rota, disponibilidade e atendimento consultivo da Good Fly.",
    keywords: ["Voos compartilhados", "Táxi aéreo executivo", "Jato executivo"],
    heroImage: "/images/jato-executivo-pista.jpg",
    heroAlt: "Pátio com jatos executivos para operações sob demanda",
    benefits: [
      {
        title: "Melhor aproveitamento",
        description:
          "Quando viável, o compartilhamento pode tornar a operação mais inteligente e eficiente."
      },
      {
        title: "Análise sob demanda",
        description:
          "Cada oportunidade é estudada conforme rota, agenda e compatibilidade operacional."
      },
      {
        title: "Atendimento consultivo",
        description:
          "Acompanhamento para entender se o formato compartilhado faz sentido para a missão."
      }
    ],
    useCases: [
      "Rotas com possibilidade de compartilhamento entre perfis compatíveis",
      "Viagens executivas com objetivo de otimização de custo",
      "Operações programadas com maior flexibilidade de agenda"
    ],
    howItWorks: [
      {
        title: "Análise do pedido",
        description:
          "Entendemos rota, datas, quantidade de passageiros e objetivo do voo."
      },
      {
        title: "Estudo de compatibilidade",
        description:
          "Verificamos se existe cenário operacional compatível para compartilhamento."
      },
      {
        title: "Encaminhamento da solução",
        description:
          "Se houver viabilidade, apresentamos a alternativa com clareza sobre condições e limites."
      }
    ],
    importantInfo: [
      "Voos compartilhados dependem de viabilidade real, agenda, perfil da missão e disponibilidade operacional.",
      "Nem toda rota ou necessidade permite compartilhamento com segurança e aderência.",
      "A Good Fly analisa e coordena possibilidades, sem prometer disponibilidade prévia."
    ],
    faq: [
      {
        question: "Toda cotação pode virar voo compartilhado?",
        answer:
          "Não. O compartilhamento depende de compatibilidade operacional e comercial da missão."
      },
      {
        question: "É uma solução garantida?",
        answer:
          "Não. Cada caso é analisado individualmente conforme disponibilidade e aderência."
      }
    ],
    ctaText: "Quero analisar voo compartilhado",
    icon: "users"
  }
];

export const servicesBySlug = Object.fromEntries(
  services.map((service) => [service.slug, service])
) as Record<string, ServiceContent>;

export const homeServiceSlugs = [
  "voos-executivos",
  "helicopteros",
  "uti-aerea",
  "transporte-de-orgaos",
  "translado-funerario-aereo",
  "aviacao-agricola",
  "logistica-aerea",
  "compra-e-venda-de-aeronaves",
  "gestao-de-aeronaves"
];
