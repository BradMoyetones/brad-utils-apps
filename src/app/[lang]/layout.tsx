import { getDictionary, Locale } from "../../dictionaries";
import { I18nProvider } from "@/contexts/i18n-context";

// Definimos los idiomas soportados para la generación estática
export async function generateStaticParams() {
  return [{ lang: 'es' }, { lang: 'en' }]
}

export async function generateMetadata({ params }: { params: { lang: string } }) {
  const dict = await getDictionary(params.lang as Locale)

  return {
    title: "Brad Utils - Herramientas y Utilidades Digitales",
    description:
      "Plataforma integral de herramientas para manipulación de PDFs, procesamiento de imágenes y conversión de datos.",
  }
}

export default async function LangLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  const dict = await getDictionary(params.lang)
  return (
    <I18nProvider dict={dict} lang={params.lang}>
      {children}
    </I18nProvider>
  );
}
