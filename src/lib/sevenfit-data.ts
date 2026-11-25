export const SEVENFIT_CONTACT = {
  brandName: "SEVENFIT",
  fullName: "SevenFit Suplementos Nutricionais",
  legalName: "Performance Nutri Suplementos Alimentares e Vestuario LTDA",
  cnpj: "11.519.560/0001-73",
  foundedYear: "2010",
  brandSince: "2016",
  slogan: "SevenFit. Evolução é decisão.",
  phoneDisplay: "(49) 3444-9196",
  phoneHref: "tel:+554934449196",
  whatsappDigits: "554934449196",
  whatsappDefaultUrl:
    "https://wa.me/554934449196?text=Ol%C3%A1%2C+equipe+SevenFit%21+Vim+pelo+site+e+gostaria+de+falar+com+um+consultor.",
  instagramHandle: "@sevenfitgroup",
  instagramUrl: "https://www.instagram.com/sevenfitgroup/",
  facebookName: "SevenFit Suplementos Nutricionais",
  address: "Tv. Antônio Brunetto, 37 – Sala 01 – Centro, Concórdia – SC",
  cep: "CEP 89700-166",
  mapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Tv.+Ant%C3%B4nio+Brunetto,+37+-+Centro,+Conc%C3%B3rdia+-+SC,+89700-166",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Tv.%20Ant%C3%B4nio%20Brunetto%2C%2037%20-%20Centro%2C%20Conc%C3%B3rdia%20-%20SC%2C%2089700-166&output=embed",
};

export function buildWhatsAppUrl(customMessage: string): string {
  return `https://wa.me/${SEVENFIT_CONTACT.whatsappDigits}?text=${encodeURIComponent(customMessage)}`;
}

export const NAV_LINKS = [
  { label: "Pilares", href: "#pilares" },
  { label: "Diferenciais", href: "#vantagens" },
  { label: "CT SevenFit", href: "#ct-sevenfit" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Contato", href: "#contato" },
];

export const HERO_BENEFITS = [
  {
    title: "Hipertrofia & Performance",
    detail: "Fórmulas nacionais e importadas",
  },
  {
    title: "Emagrecimento & Saúde",
    detail: "Protocolos práticos para rotina",
  },
  {
    title: "Nutrição Individualizada",
    detail: "Consultoria técnica presencial",
  },
  {
    title: "Pronta Entrega & Delivery",
    detail: "Retirada rápida no Centro",
  },
];

export interface PillarItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  specs: string[];
  image: string;
  imageAlt: string;
  whatsappText: string;
  featuredDark?: boolean;
}

export const PILLARS: PillarItem[] = [
  {
    number: "01",
    title: "Suplementação Nacional & Importada",
    subtitle: "Pronta entrega e procedência",
    description:
      "Linhas completas de Whey Protein, Creatina, pré-treinos, aminoácidos e vitaminas de marcas consagradas como DUX e Explode Nutrition — disponíveis na hora, sem espera de frete.",
    specs: ["DUX Nutrition", "Explode Nutrition", "Whey & Creatina", "Pré-treinos"],
    image: "/images/pillar-suplementos.jpg",
    imageAlt:
      "Potes de suplementos nutricionais em acabamento preto fosco, coqueteleira e creatina cristalina sobre pedra natural",
    whatsappText:
      "Olá, SevenFit! Quero saber mais sobre Suplementação Nacional & Importada.",
  },
  {
    number: "02",
    title: "Alimentação Fit & Cozinha Saudável",
    subtitle: "Refeições prontas balanceadas",
    description:
      "Pratos prontos com controle de macronutrientes, preparo prático e sabor real para manter constância na dieta mesmo nos dias mais intensos.",
    specs: ["Refeições Prontas", "Macros Equilibrados", "Praticidade Diária"],
    image: "/images/pillar-alimentacao.jpg",
    imageAlt:
      "Refeições fit saudáveis com proteína grelhada, batata-doce, brócolis, abacate e quinoa em bowls escuros",
    whatsappText:
      "Olá, SevenFit! Quero saber mais sobre Alimentação Fit & Cozinha Saudável.",
  },
  {
    number: "03",
    title: "Vestuário & Acessórios Esportivos",
    subtitle: "Conforto e suporte ao treino",
    description:
      "Peças técnicas de treino, straps, faixas de pulso, coqueteleiras e acessórios esportivos selecionados para durabilidade e desempenho sob carga.",
    specs: ["Vestuário Técnico", "Straps & Munhequeiras", "Coqueteleiras"],
    image: "/images/pillar-vestuario.jpg",
    imageAlt:
      "Vestuário técnico esportivo preto e rubi dobrado ao lado de acessórios de treino em concreto arquitetônico",
    whatsappText:
      "Olá, SevenFit! Quero saber mais sobre Vestuário & Acessórios Esportivos.",
  },
  {
    number: "04",
    title: "CT SevenFit & Acompanhamento Nutricional",
    subtitle: "Treinamento personalizado + nutrição",
    description:
      "Espaço exclusivo de treinamento personalizado integrado ao acompanhamento nutricional individualizado — alinhando carga, técnica e estratégia alimentar para resultados mensuráveis.",
    specs: ["Treino Personalizado", "Acompanhamento Nutricional", "Centro de Concórdia"],
    image: "/images/pillar-ct-sevenfit.jpg",
    imageAlt:
      "Estúdio de treinamento personalizado CT SevenFit com rack de força e orientação técnica individual",
    whatsappText:
      "Olá, SevenFit! Quero saber mais sobre CT SevenFit & Acompanhamento Nutricional.",
    featuredDark: true,
  },
];

export const DIFFERENTIALS = [
  {
    code: "01 / POLÍTICA COMERCIAL",
    title: "Garantia de Cobertura de Preço",
    description:
      "Cobre ofertas de sites oficiais ou lojas físicas de Concórdia e Chapecó na mesma marca — à vista ou em até 2x no cartão.",
    highlight: "Até 2x no cartão",
  },
  {
    code: "02 / PROCEDÊNCIA",
    title: "100% Original a Pronta Entrega",
    description:
      "Estoque local verificado com procedência oficial das principais marcas. Você compra e já sai utilizando no mesmo treino.",
    highlight: "Zero espera de frete",
  },
  {
    code: "03 / ORIENTAÇÃO TÉCNICA",
    title: "Atendimento Consultivo Especializado",
    description:
      "Suporte real de equipe especialista em musculação e nutrição para ajustar suplementação ao seu objetivo de emagrecimento, hipertrofia ou saúde.",
    highlight: "Consultoria presencial",
  },
];

export const STRUCTURE_AMENITIES = [
  {
    title: "Compra na Loja Física",
    detail: "Atendimento no Centro de Concórdia",
  },
  {
    title: "Retirada Rápida (Pickup)",
    detail: "Reserve pelo WhatsApp e retire na hora",
  },
  {
    title: "Delivery Local",
    detail: "Entrega ágil em Concórdia",
  },
  {
    title: "Cartão, Débito & NFC",
    detail: "Pagamento por aproximação facilitado",
  },
  {
    title: "Acessibilidade Completa",
    detail: "Entrada, estacionamento e banheiro adaptados",
  },
  {
    title: "Wi-Fi Gratuito",
    detail: "Conectividade disponível para clientes",
  },
];

export const REVIEWS = [
  {
    source: "Google Reviews • 5,0 ★",
    author: "Cliente Verificado",
    quote:
      "Grande variedade de suplementos originais e orientação técnica que realmente ajuda a escolher o que funciona para o objetivo do treino.",
  },
  {
    source: "Google Reviews • 5,0 ★",
    author: "Atleta Local",
    quote:
      "Cobriram o preço na hora, sem precisar esperar entrega de fora. Além dos suplementos, as refeições fit salvam a rotina da semana.",
  },
  {
    source: "Facebook • Recomendado",
    author: "Aluno CT SevenFit",
    quote:
      "Atendimento diferenciado em Concórdia. Equipe domina musculação e nutrição e entrega um ecossistema completo em um único endereço.",
  },
];

export const OPENING_HOURS = [
  { day: "Segunda a Sexta", hours: "09h00 às 19h00" },
  { day: "Sábado", hours: "09h00 às 14h00" },
  { day: "Domingo", hours: "Fechado" },
];
