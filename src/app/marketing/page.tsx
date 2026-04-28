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

  // จัดกลุ่ม Social Icons ตามรูปตัวอย่าง (2x2)
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
    <div className="bg-slate-50 min-h-screen font-sans flex flex-col">
      <PageTitle title={p.metaTitle} />

      {/* --- Section 1: Hero --- */}
      <section className="relative h-[450px] sm:h-[500px] lg:h-[600px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg_mmk.jpg"
            alt="Marketing background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/40" />
        </div>

        <div className="relative z-10 text-center px-6">
          <Reveal>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl drop-shadow-2xl uppercase">
              Website and online marketing
            </h1>
            <div className="mt-8 mx-auto h-0.5 w-24 bg-sky-400" />

            <button
              onClick={scrollToContent}
              className="mt-12 group relative inline-flex items-center justify-center"
            >
              <div className="absolute h-14 w-14 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm transition-all group-hover:bg-white/20" />
              <ChevronDown className="relative h-7 w-7 text-white animate-bounce" />
            </button>
          </Reveal>
        </div>
      </section>

      {/* --- Section 2: Service Cards --- */}
      <div id="content" className="py-20 flex-grow">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">

            {/* --- Card 1: Website --- */}
            <Reveal>
              <div className="flex flex-col items-center group">
                <h3 className="text-2xl font-bold text-slate-800 mb-6 underline underline-offset-8 decoration-slate-300">
                  Website
                </h3>
                <div className="relative w-full aspect-square max-w-[450px] rounded-[3rem] overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                  {/* รูปพื้นหลังจำลองโต๊ะทำงาน */}
                  <Image src="/commk.jpg" alt="Website background" fill className="object-cover blur-[2px]" />
                  <div className="absolute inset-0 bg-slate-200/20" />

                  {/* แผ่น Glassmorphism กลางรูป */}
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="w-full max-w-[300px] aspect-[4/3] rounded-3xl bg-white/60 backdrop-blur-xl border border-white/50 shadow-2xl flex flex-col items-center justify-center p-6">
                      <div className="relative h-20 w-20 mb-4">
                        {/* ไอคอนหน้าจอ Website */}
                        <Image src="/website-icon.png" alt="Website" fill className="object-contain" />
                      </div>
                      <span className="text-lg font-bold text-slate-700 tracking-widest uppercase">Website</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* --- Card 2: Online Marketing --- */}
            <Reveal delay={0.1}>
              <div className="flex flex-col items-center group">
                <h3 className="text-2xl font-bold text-slate-800 mb-6 underline underline-offset-8 decoration-slate-300">
                  Online marketing
                </h3>
                <div className="relative w-full aspect-square max-w-[450px] rounded-[3rem] overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                  {/* รูปพื้นหลังจำลอง Laptop/Marketing */}
                  <Image src="/bg_mmk.jpg" alt="Marketing background" fill className="object-cover blur-[2px]" />
                  <div className="absolute inset-0 bg-slate-200/20" />

                  {/* แผ่น Glassmorphism กลางรูป */}
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="w-full h-full rounded-3xl bg-white/40 backdrop-blur-xl border border-white/40 shadow-2xl p-6 flex items-center justify-center">
                      <div className="grid grid-cols-2 gap-4 w-full">
                        {socialIcons.map((icon) => (
                          <div key={icon.alt} className="bg-white rounded-2xl p-4 shadow-lg flex flex-col items-center justify-center transition-transform hover:-translate-y-1">
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

      {/* --- Footer --- */}
      <footer className="py-10 bg-white border-t border-slate-100">
        <Container>
          <p className="text-center text-[10px] text-slate-400 uppercase tracking-[0.2em] font-medium">
            Copyright Japan System Co., Ltd. & Japan System (Thailand) Co., Ltd. All rights Reserved.
          </p>
        </Container>
      </footer>
    </div>
  );
}