const dictionaries: Record<string, () => Promise<any>> = {
  en: () => import("./en.json").then((module) => module.default),
  es: () => import("./es.json").then((module) => module.default),
}

export type Locale = "en" | "es"

export const getDictionary = async (locale: string) => {
  // Verificar si el locale es válido, si no, usar español como predeterminado
  const validLocale = (["en", "es"].includes(locale) ? locale : "es") as Locale
  
  try {
    return await dictionaries[validLocale]()
  } catch (error) {
    console.error(`Error loading dictionary for locale: ${validLocale}`, error)
    // Fallback a español si hay un error
    return await dictionaries.es()
  }
}
