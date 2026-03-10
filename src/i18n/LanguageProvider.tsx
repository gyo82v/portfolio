// src/i18n/LanguageProvider.tsx
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { translations, type Lang, type NestedStrings } from "./translations";
import { LanguageContext } from "./LanguageContext";

const STORAGE_KEY = "lang";
type TValue = string | NestedStrings | undefined;

export default function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "en";
    const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
    return stored ?? "en";
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
    document.documentElement.lang = lang;
  }, [lang]);

  // stable setter
  const setLang = useCallback((l: Lang) => {
    setLangState(l);
  }, []);

  // typed getter for nested translation keys like "nav.home"
  const get = useCallback((obj: NestedStrings, path: string): TValue => {
    return path.split(".").reduce<TValue>((o, k) => {
      if (o && typeof o === "object" && k in o) {
        // safe indexing
        return (o as Record<string, TValue>)[k];
      }
      return undefined;
    }, obj as TValue);
  }, []);

  // stable translation function that depends on current lang and the typed 'get'
  const t = useCallback(
    (key: string, fallback?: string) => {
      const value = get(translations[lang], key) ?? get(translations["en"], key);
      if (typeof value === "string") return value;
      return fallback ?? key;
    },
    [lang, get],
  );

  const contextValue = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return <LanguageContext.Provider value={contextValue}>{children}</LanguageContext.Provider>;
}