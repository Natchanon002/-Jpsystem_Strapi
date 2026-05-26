"use client";

import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { htmlLangByLanguage } from "@/i18n/i18next";
import type { Language } from "@/i18n/translations";

/**
 * Map the app's internal language code to the Strapi locale code.
 * App uses "jp" internally, but Strapi expects "ja" for Japanese.
 */
function toStrapiLocale(lang: Language): string {
  return htmlLangByLanguage[lang] ?? lang;
}

/**
 * Extract data for a specific language from the SSR data prop.
 */
function extractSsrData<T>(
  ssrData: { th: T | null; en: T | null; jp: T | null } | T | null | undefined,
  lang: Language
): T | null {
  if (!ssrData) return null;
  if (typeof ssrData === "object" && ssrData !== null && ("en" in ssrData || "th" in ssrData || "jp" in ssrData)) {
    return (ssrData as Record<string, T | null>)[lang] ?? null;
  }
  return ssrData as T | null;
}

/**
 * A custom hook that fetches data from Strapi API on the client side,
 * re-fetching whenever the user's selected language changes.
 *
 * Flow:
 * 1. First checks the SSR pre-fetched data for the current locale
 * 2. Then checks the local cache
 * 3. If neither has data, fetches fresh from Strapi API
 *
 * @param fetchFn – The Strapi fetch function (e.g. getItSystemData)
 * @param ssrData – Pre-fetched data from the server (keyed by lang: { th, en, jp })
 *                  OR a single-locale object OR null.
 * @returns The current locale's data (or null if loading/error).
 */
export function useStrapiData<T>(
  fetchFn: (locale: string) => Promise<T | null>,
  ssrData?: { th: T | null; en: T | null; jp: T | null } | T | null
): T | null {
  const { lang } = useLanguage();
  const strapiLocale = toStrapiLocale(lang);

  const [data, setData] = useState<T | null>(() => extractSsrData(ssrData, lang));

  // Cache fetched results per locale to avoid redundant network calls
  const cacheRef = useRef<Record<string, T | null>>({});

  // Track the current lang to avoid race conditions
  const activeLangRef = useRef(lang);

  useEffect(() => {
    activeLangRef.current = lang;

    // 1. Try SSR data first (server pre-fetched all locales)
    const ssrResult = extractSsrData(ssrData, lang);
    if (ssrResult !== null) {
      cacheRef.current[lang] = ssrResult;
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setData(ssrResult);
      return;
    }

    // 2. Check client-side cache
    if (lang in cacheRef.current) {
      setData(cacheRef.current[lang]);
      return;
    }

    // 3. Fetch fresh from Strapi API (client-side)
    let cancelled = false;

    (async () => {
      try {
        const result = await fetchFn(strapiLocale);
        if (!cancelled && activeLangRef.current === lang) {
          cacheRef.current[lang] = result;
          setData(result);
        }
      } catch (err) {
        console.error(`[useStrapiData] Failed to fetch for locale "${strapiLocale}":`, err);
        if (!cancelled && activeLangRef.current === lang) {
          setData(null);
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [lang, strapiLocale, fetchFn, ssrData]);

  return data;
}
