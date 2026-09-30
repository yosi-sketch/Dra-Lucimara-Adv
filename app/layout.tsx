import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const displayFont = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#120f0d",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dralucimarafernandes.adv.br"),
  title: "Dra. Lucimara Fernandes | Advocacia & Consultoria Jurídica em Poços de Caldas - MG",
  description:
    "Advocacia de excelência e atendimento dedicado conduzido pela Dra. Lucimara Fernandes (OAB/MG 231.216). Especialista em Direito do Trabalho, Cível, Família, Previdenciário e Consumidor. Atendimento presencial no Edifício Enterprise em Poços de Caldas/MG e on-line em todo o Brasil.",
  keywords: [
    "Dra. Lucimara Fernandes",
    "Lucimara Fernandes Advogada",
    "advogada em Poços de Caldas",
    "Edifício Enterprise Poços de Caldas",
    "Jardim Cascatinha Poços de Caldas",
    "OAB MG 231216",
    "direito do trabalho Poços de Caldas",
    "advogada trabalhista Minas Gerais",
    "direito civil Poços de Caldas",
    "direito de família e sucessões",
    "direito previdenciário e aposentadoria",
    "advocacia especializada Minas Gerais",
  ],
  authors: [{ name: "Dra. Lucimara Fernandes" }],
  creator: "Dra. Lucimara Fernandes Advocacia",
  publisher: "Dra. Lucimara Fernandes Advocacia",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=2" },
      { url: "/icon.png?v=2", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico?v=2",
    apple: [
      { url: "/apple-icon.png?v=2", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.dralucimarafernandes.adv.br",
    title: "Dra. Lucimara Fernandes | Advocacia de Alta Precisão em Poços de Caldas - MG",
    description:
      "Assessoria jurídica estratégica e humanizada com dedicação integral a cada causa. Sede no Edifício Enterprise em Poços de Caldas - MG e atendimento digital em todo o Brasil.",
    siteName: "Dra. Lucimara Fernandes Advocacia",
    images: [
      {
        url: "/logo-dark.png",
        width: 1024,
        height: 420,
        alt: "Dra. Lucimara Fernandes Advocacia — OAB/MG 231.216",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${bodyFont.variable} ${displayFont.variable} scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/favicon.ico?v=2" sizes="any" />
        <link rel="icon" href="/icon.png?v=2" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-icon.png?v=2" />
      </head>
      <body className="min-h-screen overflow-x-clip bg-ivory font-sans text-ink antialiased selection:bg-brand-700 selection:text-white">
        {children}
      </body>
    </html>
  );
}
