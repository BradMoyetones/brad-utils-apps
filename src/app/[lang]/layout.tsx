import { getDictionary, Locale } from "../../dictionaries";
import { I18nProvider } from "@/contexts/i18n-context";

// Definimos los idiomas soportados para la generación estática
export async function generateStaticParams() {
  return [{ lang: 'es' }, { lang: 'en' }]
}

export async function generateMetadata() {
  const dict = await getDictionary("es")

  return {
    title: "Brad Utils - Herramientas y Utilidades Digitales",
    description:
      "Plataforma integral de herramientas para manipulación de PDFs, procesamiento de imágenes y conversión de datos.",
  }
}

export default async function LangLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const dict = await getDictionary("es")
  return (
    <I18nProvider dict={dict} lang={"es"}>
      {children}
    </I18nProvider>
  );
}
