"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Language } from "@/i18n/translations";
import { translations } from "@/i18n/translations";

type LanguageContextValue = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (typeof translations)[Language];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "jst-lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const saved = window.localStorage.getItem(STORAGE_KEY) as Language | null;

    if (saved && saved in translations) {
      setLangState(saved);
      return;
    }

    // Auto-detect: Japanese browser → "jp", everything else → "en"
    const browserLang = navigator.language || "";
    const detected: Language = browserLang.startsWith("ja") ? "jp" : "en";
    setLangState(detected);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.dataset.lang = lang;
  }, [lang]);

  const value = useMemo<LanguageContextValue>(() => {
    return {
      lang,
      setLang: (next) => setLangState(next),
      t: translations[lang],
    };
  }, [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

