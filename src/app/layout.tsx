import type { Metadata } from "next";
import {
  Barlow_Condensed,
  DM_Sans,
  Instrument_Serif,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://sevenfit-suplementos.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title:
    "SevenFit Suplementos Nutricionais | Suplementação, Alimentação Fit & CT em Concórdia - SC",
  description:
    "SevenFit. Evolução é decisão. Suplementos nacionais e importados a pronta entrega com cobertura de preço (Concórdia e Chapecó), refeições fit, vestuário, nutrição e CT SevenFit no Centro de Concórdia.",
  keywords: [
    "SevenFit",
    "Suplementos Concórdia",
    "Whey Protein Concórdia",
    "Creatina Concórdia",
    "Alimentação Fit Concórdia",
    "CT SevenFit",
    "Loja de Suplementos Concórdia SC",
    "DUX Nutrition",
    "Explode Nutrition",
  ],
  openGraph: {
    title: "SevenFit Suplementos Nutricionais | Evolução é decisão.",
    description:
      "Suplementação nacional e importada a pronta entrega, cobertura de preço garantida, alimentação fit, vestuário e CT SevenFit em Concórdia - SC.",
    url: siteUrl,
    siteName: "SevenFit Suplementos Nutricionais",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/hero-desktop.jpg",
        width: 1200,
        height: 630,
        alt: "SevenFit Suplementos Nutricionais — Evolução é decisão em Concórdia, SC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SevenFit Suplementos Nutricionais | Evolução é decisão.",
    description:
      "Suplementos originais a pronta entrega com cobertura de preço, cozinha fit e CT SevenFit no Centro de Concórdia - SC.",
    images: ["/images/hero-desktop.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["SportingGoodsStore", "LocalBusiness"],
  name: "SevenFit Suplementos Nutricionais",
  legalName: "Performance Nutri Suplementos Alimentares e Vestuario LTDA",
  taxID: "11.519.560/0001-73",
  foundingDate: "2010",
  slogan: "SevenFit. Evolução é decisão.",
  description:
    "Ecossistema completo de suplementação nutricional nacional e importada a pronta entrega com cobertura de preço, alimentação fit, vestuário esportivo, acompanhamento nutricional e treinamento personalizado (CT SevenFit) em Concórdia - SC.",
  url: siteUrl,
  image: `${siteUrl}/images/hero-desktop.jpg`,
  telephone: "+55-49-3444-9196",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Tv. Antônio Brunetto, 37 - Sala 01 - Centro",
    addressLocality: "Concórdia",
    addressRegion: "SC",
    postalCode: "89700-166",
    addressCountry: "BR",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "14:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "18",
    bestRating: "5",
    worstRating: "1",
  },
  sameAs: ["https://www.instagram.com/sevenfitgroup/"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${barlowCondensed.variable} ${dmSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased selection:bg-[#D91636] selection:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
