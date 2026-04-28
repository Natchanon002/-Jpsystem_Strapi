"use client";

import Image from "next/image";
import { Container } from "@/components/Container";
import { PageTitle } from "@/components/PageTitle";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/i18n/LanguageContext";
import { ChevronDown } from "lucide-react";

export default function ITSystemPage() {
  const { t } = useLanguage();
  const p = t.pages.itSystem;

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight * 0.7,
      behavior: "smooth",
    });
  };

  const services = p.serviceItems.map((item, idx) => {
    const fileNames = ["Maintainance.png", "Website & Online marketing.png", "IT Support & Help Desk.png", "Product management system.png"];
    return { title: item.title, fileName: fileNames[idx] };
  });

  return (
    <div className="bg-gradient-to-b from-sky-50 via-white to-sky-50/30 min-h-screen font-sans">
      <PageTitle title={p.metaTitle} />

      {/* --- Hero --- */}
      <section className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/topbg_system.jpg"
            alt="IT System Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/20 to-slate-900/50" />
        </div>

        {/* Decorative floating elements */}
        <div className="absolute -right-20 top-1/3 h-40 w-40 rounded-full bg-sky-500/10 blur-3xl animate-float" />
        <div className="absolute -left-16 bottom-1/4 h-32 w-32 rounded-full bg-indigo-500/10 blur-3xl animate-float-delayed" />

        <div className="relative z-10 text-center px-6">
          <Reveal>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl drop-shadow-2xl">
              {p.title}
            </h1>
            <p className="mt-4 text-base text-white/70 max-w-xl mx-auto">{p.subtitle}</p>

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

      {/* --- Products / Services --- */}
      <div className="relative z-20 py-20">
        {/* Decorative gradient line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-2/3 bg-gradient-to-r from-transparent via-sky-300/40 to-transparent" />

        <Container>
          <Reveal>
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold tracking-wide text-slate-600 shadow-sm mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
                Services
              </div>
              <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl">
                {p.productsTitle}
              </h2>
            </div>
          </Reveal>

          <div className="rounded-[3rem] border border-white/50 bg-white/50 p-6 sm:p-10 shadow-2xl backdrop-blur-xl relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute -left-10 -top-10 h-40 w-40 bg-sky-200/30 blur-3xl rounded-full" />
            <div className="absolute -right-10 -bottom-10 h-40 w-40 bg-indigo-200/20 blur-3xl rounded-full" />

            <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-2">
              {services.map((service, idx) => (
                <Reveal key={service.title} delay={0.05 * idx}>
                  <div className="group flex flex-col items-center justify-center rounded-[2.5rem] bg-white p-10 text-center shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl gradient-border">

                    <div className="relative mb-8 flex h-36 w-36 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50 to-sky-50/50 border border-slate-100 p-4">
                      <Image
                        src={`/${service.fileName}`}
                        alt={service.title}
                        fill
                        className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    <h3 className="text-base font-black uppercase tracking-[0.15em] text-slate-800 leading-tight transition-colors duration-300 group-hover:text-sky-700">
                      {service.title}
                    </h3>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}