"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Card } from "@/components/Card";
import { PageTitle } from "@/components/PageTitle";
import { useLanguage } from "@/i18n/LanguageContext";
import { ChevronDown } from "lucide-react"; // เพิ่มไอคอนลูกศร

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
          <div className="absolute inset-0 bg-slate-950/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-white/75">
                Japan System
              </p>
              <h1 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                {t.pages.home.hero.title}
              </h1>
            </div>

            {/* --- ปรับแต่งปุ่ม Scroll Button ใหม่ให้เด้งได้เหมือนหน้า Marketing --- */}
            <button
              type="button"
              onClick={() => {
                const target = document.getElementById("services");
                if (target) {
                  target.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              className="mt-12 group relative inline-flex items-center justify-center h-16 w-16"
              aria-label="Scroll to services"
            >
              {/* วงกลมพื้นหลังสไตล์ Glassmorphism */}
              <div className="absolute inset-0 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20 group-hover:border-white/50 shadow-xl" />

              {/* ลูกศรที่ขยับเด้งไปมา */}
              <ChevronDown className="relative h-8 w-8 text-white animate-bounce transition-transform duration-300 group-hover:translate-y-1" />
            </button>
          </div>
        </div>
      </section>

      {/* --- Section 2: Services --- */}
      <section id="services" className="py-16 sm:py-20 bg-sky-50">
        <Container>
          <Reveal>
            <div className="flex items-end justify-between gap-6">
              <div>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                  {t.pages.home.services.title}
                </h2>
              </div>
              <Link
                href="/it-system"
                className="hidden text-sm font-semibold text-slate-700 hover:text-slate-900 sm:inline-flex"
                data-cursor="interactive"
              >
                {t.common.learnMore} <span className="ml-2 text-sky-500/80">→</span>
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
        </Container>
      </section>
    </div>
  );
}