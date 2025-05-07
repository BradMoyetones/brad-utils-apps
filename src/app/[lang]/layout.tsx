import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { Locale } from "../../dictionaries";
import I18nWrapper from "@/components/I18nWrapper";

const inter = Inter({ subsets: ["latin"] });

export function generateStaticParams() {
  return [{ lang: 'es' }, { lang: 'en' }];
}

export function generateMetadata() {
  return {
    title: "Brad Utils - Herramientas y Utilidades Digitales",
    description:
      "Plataforma integral de herramientas para manipulación de PDFs, procesamiento de imágenes y conversión de datos.",
  };
}

export default function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { lang: Locale };
}) {
  return (
    <div className={`${inter.className} antialiased`}>
      <I18nWrapper lang={params.lang}>
        {children}
      </I18nWrapper>
    </div>
  );
}
