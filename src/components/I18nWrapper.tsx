"use client";

import { useEffect, useState } from "react";
import { getDictionary, Locale } from "@/dictionaries";
import { I18nProvider } from "@/contexts/i18n-context";

export default function I18nWrapper({
    children,
    lang,
}: {
    children: React.ReactNode;
    lang: Locale;
}) {
    const [dict, setDict] = useState<any | null>(null);

    useEffect(() => {
        getDictionary(lang).then(setDict);
    }, [lang]);

    if (!dict) return null; // O puedes mostrar un loader

    return <I18nProvider dict={dict} lang={lang}>{children}</I18nProvider>;
}
