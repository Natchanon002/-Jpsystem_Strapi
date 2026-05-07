"use client";

import { SiteImage as Image } from "@/components/SiteImage";
import { Container } from "@/components/Container";
import { LazyYouTube } from "@/components/LazyYouTube";
import { PageTitle } from "@/components/PageTitle";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/i18n/LanguageContext";
import type { ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";

type LocalizedField = {
  en?: string;
  th?: string;
  ja?: string;
};

export type MyLogStarDoc = {
  pageTitle?: LocalizedField;
  pageSubtitle?: LocalizedField;
  heroQ?: LocalizedField;
  heroA?: LocalizedField;
  featureTitle?: LocalizedField;
  featLogTitle?: LocalizedField;
  featLogDesc?: LocalizedField;
  featAvailTitle?: LocalizedField;
  featAvailDesc?: LocalizedField;
  acc1Title?: LocalizedField;
  acc1Q?: LocalizedField;
  acc1A?: LocalizedField;
  acc2Title?: LocalizedField;
  acc2P1?: LocalizedField;
  acc2P2?: LocalizedField;
  acc2P3?: LocalizedField;
  acc3Title?: LocalizedField;
  acc3Content?: LocalizedField;
  acc4Title?: LocalizedField;
  acc4P1?: LocalizedField;
  acc4P2?: LocalizedField;
  acc4P3?: LocalizedField;
  acc4P4?: LocalizedField;
  acc4P5?: LocalizedField;
};

function getLocalized(field: LocalizedField | undefined, lang: "en" | "th" | "jp"): string {
  if (!field) return "";
  const k = lang === "jp" ? "ja" : lang;
  return (field as Record<string, string | undefined>)[k] || "";
}

function FeatureCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-2xl sm:rounded-3xl border border-slate-100 bg-white p-5 sm:p-6 shadow-[0_24px_80px_rgba(15,23,42,0.06)]">
      <div className="text-sm font-bold tracking-tight text-slate-900">{title}</div>
      <div className="mt-3 sm:mt-4 text-sm leading-6 sm:leading-7 text-slate-600">{children}</div>
    </div>
  );
}

function AccordionItem({
  title,
  isOpen,
  onToggle,
  children,
  imageSrc,
  imageAlt,
}: {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: ReactNode;
  imageSrc?: string;
  imageAlt?: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-100 bg-white shadow-[0_16px_56px_rgba(15,23,42,0.06)]">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-3 sm:gap-4 px-4 py-4 sm:px-6 sm:py-5 text-left text-base sm:text-lg font-semibold text-slate-900 transition-colors hover:bg-slate-50"
        onClick={onToggle}
      >
        <span>{title}</span>
        <span className="text-slate-500 shrink-0">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && (
        <div className="border-t border-slate-100 px-4 py-4 sm:px-6 sm:py-5 bg-white">
          <div className="text-sm leading-6 sm:leading-7 text-slate-600 whitespace-pre-line">{children}</div>
          {imageSrc && (
            <div className="mt-6">
              <div className="relative overflow-hidden rounded-xl border border-slate-100 bg-slate-50">
                <Image
                  src={imageSrc}
                  alt={imageAlt || title}
                  width={1200}
                  height={720}
                  sizes="(max-width: 1024px) 90vw, 70vw"
                  priority
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function MyLogStarClient({ doc }: { doc: MyLogStarDoc | null }) {
  const { lang, setLang, t: baseT } = useLanguage();
  const fallback = baseT.pages.myLogStar;
  const [openSection, setOpenSection] = useState("fileServer");
  const [liveDoc, setLiveDoc] = useState<MyLogStarDoc | null>(null);

  // Live preview from Sanity Studio (no publish needed)
  useEffect(() => {
    const isPreview = typeof window !== "undefined" && window.location.search.includes("preview=true");
    if (!isPreview) return;

    const handler = (e: MessageEvent) => {
      const msg = e.data;
      if (!msg || typeof msg !== "object") return;

      if ((msg as { type?: string }).type === "sanity-preview-update") {
        const next = (msg as { data?: unknown }).data;
        if (next && typeof next === "object") {
          setLiveDoc(next as MyLogStarDoc);
        }
        return;
      }

      if ((msg as { type?: string }).type === "sanity-switch-lang") {
        const nextLang = (msg as { lang?: string }).lang;
        if (nextLang === "en" || nextLang === "th" || nextLang === "jp") {
          setLang(nextLang);
        }
      }
    };

    window.addEventListener("message", handler);
    window.parent?.postMessage({ type: "sanity-preview-ready" }, "*");
    return () => window.removeEventListener("message", handler);
  }, [setLang]);

  /** รวมฟิลด์แยกจาก Sanity กลับเป็นข้อความเดียว */
  function join(...parts: (LocalizedField | undefined)[]): string {
    return parts.map(p => getLocalized(p, lang)).filter(Boolean).join("\n\n");
  }

  const t = useMemo(() => {
    const d = liveDoc || doc || {};
    return {
      metaTitle: getLocalized(d.pageTitle, lang) || fallback.metaTitle,
      heroTitle: getLocalized(d.pageTitle, lang) || fallback.heroTitle,
      heroDesc: join(d.heroQ, d.heroA) || fallback.heroDesc,
      featureTitle: getLocalized(d.featureTitle, lang) || fallback.featureTitle,
      featureLogCollectionTitle: getLocalized(d.featLogTitle, lang) || fallback.featureLogCollectionTitle,
      featureLogCollectionDesc: getLocalized(d.featLogDesc, lang) || fallback.featureLogCollectionDesc,
      featureLogAvailabilityTitle: getLocalized(d.featAvailTitle, lang) || fallback.featureLogAvailabilityTitle,
      featureLogAvailabilityDesc: getLocalized(d.featAvailDesc, lang) || fallback.featureLogAvailabilityDesc,
      accordion: [
        {
          id: "fileServer",
          title: getLocalized(d.acc1Title, lang) || fallback.accordion[0]?.title || "",
          content: join(d.acc1Q, d.acc1A) || fallback.accordion[0]?.content || "",
        },
        {
          id: "desktop",
          title: getLocalized(d.acc2Title, lang) || fallback.accordion[1]?.title || "",
          content: join(d.acc2P1, d.acc2P2, d.acc2P3) || fallback.accordion[1]?.content || "",
        },
        {
          id: "standalone",
          title: getLocalized(d.acc3Title, lang) || fallback.accordion[2]?.title || "",
          content: getLocalized(d.acc3Content, lang) || fallback.accordion[2]?.content || "",
        },
        {
          id: "console",
          title: getLocalized(d.acc4Title, lang) || fallback.accordion[3]?.title || "",
          content: join(d.acc4P1, d.acc4P2, d.acc4P3, d.acc4P4, d.acc4P5) || fallback.accordion[3]?.content || "",
        },
      ],
    };
  }, [doc, liveDoc, lang, fallback]);

  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? "" : id);
  };

  return (
    <div className="py-10 sm:py-14 md:py-16 bg-sky-50 min-h-screen">
      <PageTitle title={t.metaTitle} />
      <Container>
        <Reveal>
          <div className="max-w-3xl">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
              {t.heroTitle}
            </h1>
            <p className="mt-2 sm:mt-3 text-sm sm:text-base leading-6 sm:leading-7 text-slate-600">
              {t.heroDesc}
            </p>
          </div>
        </Reveal>

        <div className="mt-6 sm:mt-10 grid gap-5 sm:gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <div className="space-y-5 sm:space-y-6">
              <div className="rounded-2xl sm:rounded-3xl border border-slate-100 bg-white p-4 sm:p-6 shadow-[0_24px_80px_rgba(15,23,42,0.06)]">
                <LazyYouTube videoId="R8GhVnNnbV8" title="My Log Star Overview" />
              </div>
              <div className="rounded-2xl sm:rounded-3xl border border-slate-100 bg-white p-4 sm:p-6 shadow-[0_24px_80px_rgba(15,23,42,0.06)]">
                <div className="relative overflow-hidden rounded-xl sm:rounded-3xl border border-slate-100 bg-slate-50">
                  <Image
                    src="/logstar.png"
                    alt="LogStar"
                    width={1200}
                    height={720}
                    sizes="(max-width: 1024px) 90vw, 55vw"
                    loading="lazy"
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="space-y-5 sm:space-y-6">
              <div className="rounded-2xl sm:rounded-3xl border border-slate-100 bg-white p-4 sm:p-6 shadow-[0_24px_80px_rgba(15,23,42,0.06)]">
                <div className="relative overflow-hidden rounded-xl sm:rounded-3xl border border-slate-100 bg-slate-50">
                  <Image
                    src="/mylogstar.png"
                    alt="MylogStar"
                    width={1200}
                    height={720}
                    sizes="(max-width: 1024px) 90vw, 35vw"
                    loading="lazy"
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
              <FeatureCard title={t.featureTitle}>
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <div className="font-semibold text-slate-900">{t.featureLogCollectionTitle}</div>
                    <div className="mt-1.5 sm:mt-2 text-sm leading-6 sm:leading-7 text-slate-600">
                      {t.featureLogCollectionDesc}
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{t.featureLogAvailabilityTitle}</div>
                    <div className="mt-1.5 sm:mt-2 text-sm leading-6 sm:leading-7 text-slate-600">
                      {t.featureLogAvailabilityDesc}
                    </div>
                  </div>
                </div>
              </FeatureCard>
            </div>
          </Reveal>
        </div>

        <div className="mt-8 sm:mt-12 space-y-3 sm:space-y-4">
          {t.accordion.map((section) => (
            <AccordionItem
              key={section.id}
              title={section.title}
              isOpen={openSection === section.id}
              onToggle={() => toggleSection(section.id)}
              imageSrc={
                section.id === "standalone"
                  ? "/fileserver.png"
                  : section.id === "console"
                    ? "/desktop.jpg"
                    : undefined
              }
              imageAlt={
                section.id === "standalone"
                  ? "MylogStar FileServer"
                  : section.id === "console"
                    ? "MylogStar Desktop"
                    : undefined
              }
            >
              {section.content}
            </AccordionItem>
          ))}
        </div>
      </Container>
    </div>
  );
}

