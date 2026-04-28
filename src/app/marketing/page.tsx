"use client";

import Image from "next/image";
import { Container } from "@/components/Container";
import { PageTitle } from "@/components/PageTitle";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/i18n/LanguageContext";
import { ChevronDown } from "lucide-react";

export default function MarketingPage() {
  const { t } = useLanguage();
  const p = t.pages.marketing;

  const socialIcons = [
    { src: "/facebook.png", alt: "Facebook", label: "Facebook" },
    { src: "/instagram.png", alt: "Instagram", label: "Instagram" },
    { src: "/line.png", alt: "Line", label: "Line" },
    { src: "/Twitter.png", alt: "Twitter", label: "Twitter" },
  ];

  const scrollToContent = () => {
    const content = document.getElementById("content");
    content?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gradient-to-b from-slate-50 via-white to-slate-50/50 min-h-screen font-sans flex flex-col">
      <PageTitle title={p.metaTitle} />

      {/* --- Hero --- */}
      <section className="relative h-[450px] sm:h-[500px] lg:h-[600px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg_mmk.jpg"
            alt="Marketing background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/40 to-slate-900/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/10 to-sky-900/10" />
        </div>

        {/* Decorative floating elements */}
        <div className="absolute -right-20 top-1/4 h-40 w-40 rounded-full bg-sky-500/10 blur-3xl animate-float" />
        <div className="absolute -left-16 bottom-1/3 h-32 w-32 rounded-full bg-indigo-500/10 blur-3xl animate-float-delayed" />

        <div className="relative z-10 text-center px-6">
          <Reveal>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl drop-shadow-2xl uppercase">
              {p.heroTitle}
            </h1>
            <div className="mt-6 mx-auto h-0.5 w-24 bg-gradient-to-r from-sky-400 to-indigo-400 rounded-full" />

            <button
              onClick={scrollToContent}
              className="mt-12 group relative inline-flex items-center justify-center"
            >
              <div className="absolute h-14 w-14 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-white/15" />
              <ChevronDown className="relative h-7 w-7 text-white animate-bounce" />
            </button>
          </Reveal>
        </div>
      </section>

      {/* --- Service Cards --- */}
      <div id="content" className="py-20 flex-grow relative overflow-hidden">
        {/* Decorative */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-2/3 bg-gradient-to-r from-transparent via-sky-300/40 to-transparent" />
        <div className="absolute -right-20 top-40 h-48 w-48 rounded-full bg-sky-100/40 blur-3xl" />
        <div className="absolute -left-20 bottom-20 h-40 w-40 rounded-full bg-indigo-100/30 blur-3xl" />

        <Container>
          <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-2">

            {/* Card 1: Website */}
            <Reveal>
              <div className="flex flex-col items-center group">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">
                  <span className="relative">
                    {p.cardWebsite}
                    <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-gradient-to-r from-sky-400 to-indigo-400 rounded-full scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
                  </span>
                </h3>
                <div className="relative w-full aspect-square max-w-[450px] rounded-[3rem] overflow-hidden shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-[0_40px_100px_rgba(14,165,233,0.15)] gradient-border">
                  <Image src="/commk.jpg" alt="Website background" fill className="object-cover blur-[2px] transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-slate-200/20" />

                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="w-full max-w-[300px] aspect-[4/3] rounded-3xl bg-white/60 backdrop-blur-xl border border-white/50 shadow-2xl flex flex-col items-center justify-center p-6 transition-transform duration-500 group-hover:-translate-y-2">
                      <div className="relative h-20 w-20 mb-4">
                        <Image src="/website-icon.png" alt="Website" fill className="object-contain" />
                      </div>
                      <span className="text-lg font-bold text-slate-700 tracking-widest uppercase">Website</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Card 2: Online Marketing */}
            <Reveal delay={0.1}>
              <div className="flex flex-col items-center group">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">
                  <span className="relative">
                    {p.cardOnlineMarketing}
                    <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-gradient-to-r from-sky-400 to-indigo-400 rounded-full scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
                  </span>
                </h3>
                <div className="relative w-full aspect-square max-w-[450px] rounded-[3rem] overflow-hidden shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-[0_40px_100px_rgba(99,102,241,0.12)] gradient-border">
                  <Image src="/bg_mmk.jpg" alt="Marketing background" fill className="object-cover blur-[2px] transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-slate-200/20" />

                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="w-full h-full rounded-3xl bg-white/40 backdrop-blur-xl border border-white/40 shadow-2xl p-6 flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-2">
                      <div className="grid grid-cols-2 gap-4 w-full">
                        {socialIcons.map((icon) => (
                          <div key={icon.alt} className="bg-white rounded-2xl p-4 shadow-lg flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                            <div className="relative h-10 w-10 mb-2">
                              <Image src={icon.src} alt={icon.alt} fill className="object-contain" />
                            </div>
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">{icon.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

          </div>
        </Container>
      </div>
    </div>
  );
}