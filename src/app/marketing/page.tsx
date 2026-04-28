"use client";

import Image from "next/image";
import { Container } from "@/components/Container";
import { PageTitle } from "@/components/PageTitle";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/i18n/LanguageContext";
import { ChevronDown } from "lucide-react"; // ใช้ไอคอนลูกศรจาก lucide-react

export default function MarketingPage() {
  const { t } = useLanguage();
  const p = t.pages.marketing;

  const socialIcons = [
    { src: "/facebook.png", alt: "Facebook" },
    { src: "/line.png", alt: "Line" },
    { src: "/Twitter.png", alt: "Twitter" },
    { src: "/instagram.png", alt: "Instagram" },
  ];

  // ฟังก์ชันสำหรับเลื่อนหน้าจอลงไปยังส่วนเนื้อหา
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight * 0.8, // เลื่อนลงมาประมาณ 80% ของความสูงหน้าจอ
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-sky-50 min-h-screen pb-20 font-sans">
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
          <div className="absolute inset-0 bg-slate-900/30" />
        </div>

        <div className="relative z-10 text-center px-6">
          <Reveal>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl drop-shadow-2xl">
              Website and online marketing
              <br />
              <span className="text-sky-300">Japan System</span>
            </h1>
            <div className="mt-8 mx-auto h-1 w-full max-w-4xl bg-gradient-to-r from-transparent via-white/70 to-transparent" />

            {/* --- ปุ่มเลื่อนลง (Scroll Down Button) --- */}
            <button
              onClick={scrollToContent}
              className="mt-12 group relative inline-flex items-center justify-center"
            >
              <div className="absolute h-16 w-16 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20 group-hover:border-white/50" />
              <ChevronDown className="relative h-8 w-8 text-white animate-bounce transition-transform duration-300 group-hover:translate-y-1" />
            </button>
          </Reveal>
        </div>
      </section>

      {/* --- Section 2: Service Cards --- */}
      <div id="content" className="py-16 relative z-20">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">

            {/* Card ฝั่งซ้าย: Website Development */}
            <Reveal>
              <div className="flex flex-col items-center rounded-[3rem] bg-white p-10 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/50 text-center h-full transition-all hover:shadow-[0_30px_60px_rgba(0,0,0,0.15)]">
                <h2 className="text-3xl font-black text-slate-800 uppercase tracking-widest mb-10">
                  website development
                </h2>

                <div className="relative aspect-[16/10] w-full max-w-md overflow-hidden rounded-3xl shadow-2xl transition-transform hover:scale-[1.02]">
                  <Image
                    src="/commk.jpg"
                    alt="Website Development Display"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="mt-10 text-xl font-bold text-slate-400 uppercase tracking-[0.3em]">
                  website
                </div>
              </div>
            </Reveal>

            {/* Card ฝั่งขวา: Digital Marketing */}
            <Reveal delay={0.1}>
              <div className="flex flex-col items-center rounded-[3rem] bg-white p-10 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/50 text-center h-full transition-all hover:shadow-[0_30px_60px_rgba(0,0,0,0.15)]">
                <h2 className="text-3xl font-black text-slate-800 uppercase tracking-widest mb-10">
                  digital marketing
                </h2>

                <div className="flex flex-col gap-8 items-center justify-center flex-grow py-6">
                  <div className="flex flex-col gap-6">
                    {socialIcons.map((icon) => (
                      <div key={icon.alt} className="group relative h-16 w-16 transition-all duration-300 hover:scale-125">
                        <Image
                          src={icon.src}
                          alt={icon.alt}
                          fill
                          className="object-contain drop-shadow-xl"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 text-slate-400 text-sm font-semibold italic uppercase tracking-widest">
                    Social media presence
                  </div>
                </div>
              </div>
            </Reveal>

          </div>
        </Container>
      </div>

      {/* Footer text */}
      <div className="mt-20 text-center px-4 pb-10">
        <p className="text-[11px] text-slate-400 uppercase tracking-[0.2em] font-medium">
          Copyright Japan System Co., Ltd. & Japan System (Thailand) Co., Ltd. All rights Reserved.
        </p>
      </div>
    </div>
  );
}