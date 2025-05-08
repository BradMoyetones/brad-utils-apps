import { getDictionary, Locale } from "../../dictionaries";
import { I18nProvider } from "@/contexts/i18n-context";

// Idiomas soportados
export async function generateStaticParams() {
  return [{ lang: 'es' }, { lang: 'en' }]
}

type Params = Promise<{ lang: string }>;

export async function generateMetadata({ params }: { params: Params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return {
    title: "Brad Utils - Herramientas y Utilidades Digitales",
    description:
      "Plataforma integral de herramientas para manipulación de PDFs, procesamiento de imágenes y conversión de datos.",
  };
}

export default async function LangLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Params;
}>) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <I18nProvider dict={dict} lang={lang}>
      {children}
    </I18nProvider>
  );
}
