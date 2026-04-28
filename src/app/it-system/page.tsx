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

  // ฟังก์ชันสำหรับการเลื่อนลง
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight * 0.7,
      behavior: "smooth",
    });
  };

  // กำหนดชื่อหัวข้อและชื่อไฟล์รูปภาพตามลำดับ
  const services = p.serviceItems.map((item, idx) => {
    const fileNames = ["Maintainance.png", "Website & Online marketing.png", "IT Support & Help Desk.png", "Product management system.png"];
    return { title: item.title, fileName: fileNames[idx] };
  });

  return (
    <div className="bg-sky-50 min-h-screen pb-20 font-sans">
      <PageTitle title={p.metaTitle} />

      {/* --- Section 1: Hero --- */}
      <section className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/topbg_system.jpg" 
            alt="IT System Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/20" />
        </div>

        <div className="relative z-10 text-center">
          <Reveal>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl drop-shadow-md">
              {p.title}
            </h1>
            
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

      {/* --- Section 2: Products / Services --- */}
      <div className="relative z-20 py-16">
        <Container>
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl inline-block relative">
                {p.productsTitle}
                <div className="mt-3 h-0.5 w-full bg-slate-300" />
              </h2>
            </div>
          </Reveal>

          {/* กล่อง Glassmorphism คลุม Services ทั้งหมด */}
          <div className="rounded-[3rem] border border-white/50 bg-white/40 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {services.map((service, idx) => (
                <Reveal key={service.title} delay={0.05 * idx}>
                  <div className="group flex flex-col items-center justify-center rounded-[2.5rem] bg-white p-10 text-center shadow-lg transition-all hover:-translate-y-2 hover:shadow-2xl">
                    
                    {/* พื้นที่สำหรับใส่รูปภาพไอคอนตามชื่อไฟล์ที่กำหนด */}
                    <div className="relative mb-8 flex h-36 w-36 items-center justify-center overflow-hidden rounded-2xl bg-slate-50 border border-slate-100 p-4">
                      <Image 
                        src={`/${service.fileName}`} 
                        alt={service.title} 
                        fill 
                        className="object-contain p-4 transition-transform duration-300 group-hover:scale-110" 
                      />
                    </div>

                    <h3 className="text-base font-black uppercase tracking-[0.15em] text-slate-800 leading-tight">
                      {service.title}
                    </h3>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* Footer */}
      <div className="mt-20 text-center px-4">
        <p className="text-[10px] text-slate-400 uppercase tracking-widest font-medium">
          {t.common.copyright}
        </p>
      </div>
    </div>
  );
}