"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Card } from "@/components/Card";
import { PageTitle } from "@/components/PageTitle";
import { useLanguage } from "@/i18n/LanguageContext";
import { ChevronDown } from "lucide-react";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="relative overflow-hidden">
      <PageTitle title={t.pages.home.metaTitle} />

      {/* --- Section 1: Hero --- */}
      <section className="relative border-b border-slate-100">
        <div className="relative overflow-hidden">
          <div className="aspect-[16/9] w-full lg:aspect-[21/9]">
            <img
              src="/homebg.jpg"
              alt="Home background"
              className="h-full w-full object-cover"
            />
          </div>
          {/* Multi-layer overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/50 to-slate-950/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-sky-900/20 to-indigo-900/10" />

          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <div className="max-w-3xl">
              {/* Animated badge */}
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400" />
                  </span>
                  <span className="text-xs font-semibold tracking-[0.2em] text-white/90 uppercase">
                    Japan System
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl drop-shadow-2xl">
                  {t.pages.home.hero.title}
                </h1>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="mt-4 text-base text-white/70 max-w-2xl mx-auto sm:text-lg">
                  {t.pages.home.hero.subtitle}
                </p>
              </Reveal>

              {/* CTA Buttons */}
              <Reveal delay={0.3}>
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="/it-system"
                    className="shimmer inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-xl transition-all hover:-translate-y-0.5 hover:shadow-2xl"
                  >
                    {t.pages.home.hero.ctaPrimary}
                    <span className="ml-2">→</span>
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
                  >
                    {t.nav.contact}
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Scroll indicator */}
            <Reveal delay={0.4}>
              <button
                type="button"
                onClick={() => {
                  const target = document.getElementById("services");
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className="mt-12 group relative inline-flex items-center justify-center h-14 w-14"
                aria-label="Scroll to services"
              >
                <div className="absolute inset-0 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-white/15 group-hover:border-white/40" />
                <ChevronDown className="relative h-6 w-6 text-white animate-bounce" />
              </button>
            </Reveal>
          </div>

          {/* Decorative floating orbs */}
          <div className="absolute -right-20 top-1/4 h-40 w-40 rounded-full bg-sky-500/10 blur-3xl animate-float" />
          <div className="absolute -left-16 bottom-1/3 h-32 w-32 rounded-full bg-indigo-500/10 blur-3xl animate-float-delayed" />
        </div>
      </section>

      {/* --- Section 2: Services --- */}
      <section id="services" className="relative py-20 sm:py-24 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-2/3 bg-gradient-to-r from-transparent via-sky-200 to-transparent" />
        <div className="absolute -right-32 top-20 h-64 w-64 rounded-full bg-sky-100/50 blur-3xl" />
        <div className="absolute -left-32 bottom-20 h-64 w-64 rounded-full bg-indigo-100/30 blur-3xl" />

        <Container>
          <div className="relative">
            <Reveal>
              <div className="flex items-end justify-between gap-6">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold tracking-wide text-slate-600 shadow-sm mb-4">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
                    Services
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                    {t.pages.home.services.title}
                  </h2>
                </div>
                <Link
                  href="/it-system"
                  className="hidden text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors sm:inline-flex items-center gap-1"
                  data-cursor="interactive"
                >
                  {t.common.learnMore}
                  <span className="text-sky-500 transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {t.pages.home.services.items.slice(0, 3).map((it, idx) => {
                const hrefs = ["/it-system", "/e-tax", "/marketing"];
                return (
                  <Reveal key={it.title} delay={0.06 * idx}>
                    <Card
                      title={it.title}
                      desc={it.desc}
                      href={hrefs[idx]}
                      icon={
                        <Image
                          src={
                            idx === 0
                              ? "/iconcpu.png"
                              : idx === 1
                                ? "/iconfile-text.png"
                                : "/iconchart-no-axes-combined.png"
                          }
                          alt="Service icon"
                          width={24}
                          height={24}
                          className="h-6 w-6 object-contain"
                        />
                      }
                    />
                  </Reveal>
                );
              })}
            </div>

            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:justify-center sm:gap-5 lg:grid-cols-2 lg:px-20">
              {t.pages.home.services.items.slice(3, 5).map((it, idx) => {
                const hrefs = ["/my-log-star", "/new-release"];
                return (
                  <Reveal key={it.title} delay={0.04 * idx}>
                    <Card
                      title={it.title}
                      desc={it.desc}
                      href={hrefs[idx]}
                      icon={
                        <Image
                          src={idx === 0 ? "/iconshield-check.png" : "/iconlightbulb.png"}
                          alt="Service icon"
                          width={24}
                          height={24}
                          className="h-6 w-6 object-contain"
                        />
                      }
                    />
                  </Reveal>
                );
              })}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}