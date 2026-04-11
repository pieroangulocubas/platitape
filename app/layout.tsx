import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import ScrollReveal from "@/components/ScrollReveal";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Platita.pe — Haz crecer tu dinero en bienes raíces",
  description:
    "Invierte desde S/500 en proyectos inmobiliarios seleccionados del Perú. Rentabilidades del 10 al 22% anual. Sin complicaciones, 100% online.",
  keywords: "inversión, bienes raíces, Perú, inmobiliaria, rentabilidad, fintech",
  openGraph: {
    title: "Platita.pe — Haz crecer tu dinero en bienes raíces",
    description:
      "Invierte desde S/500 en proyectos inmobiliarios seleccionados del Perú.",
    type: "website",
    locale: "es_PE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${nunito.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
        <ScrollReveal />
      </body>
    </html>
  );
}
