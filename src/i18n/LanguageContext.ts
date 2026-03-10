import React from "react";
import type { Lang } from "./translations";

export type TranslationFn = (key: string, fallback?: string) => string;

export type LanguageContextType = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: TranslationFn;
};

export const LanguageContext = React.createContext<LanguageContextType | null>(null);