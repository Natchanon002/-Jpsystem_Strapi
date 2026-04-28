"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { PageTitle } from "@/components/PageTitle";
import { useLanguage } from "@/i18n/LanguageContext";
import { ChevronDown } from "lucide-react";

export default function ETaxPage() {
  const { t } = useLanguage();
  const p = t.pages.eTax;

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight * 0.8,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-white min-h-screen font-sans flex flex-col">
      <PageTitle title={p.metaTitle} />

      {/* --- ส่วนที่ 1: Hero Section --- */}
      <section className="relative h-[450px] sm:h-[500px] lg:h-[650px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* [ รูปที่ 1 ]: รูปพื้นหลังใหญ่ด้านบนสุด (Hero)
              ไฟล์ภาพ: public/bg_etax_hero.jpg
          */}
          <Image
            src="/bg_etax_hero.jpg"
            alt="E-Tax Invoice & E-Receipt Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/40" />
        </div>

        <div className="relative z-10 text-center px-6">
          <Reveal>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl drop-shadow-2xl">
              E-Tax Invoice & E-Receipt
            </h1>

            <button
              onClick={scrollToContent}
              className="mt-16 group relative inline-flex items-center justify-center"
            >
              <div className="absolute h-14 w-14 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm transition-all group-hover:bg-white/20" />
              <ChevronDown className="relative h-7 w-7 text-white animate-bounce" />
            </button>
          </Reveal>
        </div>
      </section>

      {/* --- ส่วนที่ 2: Pain Points (Are you wasting your time...) --- */}
      <section className="relative py-24 overflow-hidden bg-white">
        <Container>
          <div className="text-center mb-16">
            <Reveal>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight px-4">
                Are you wasting your time on handwritten signatures <br className="hidden md:block" /> on various documents?
              </h2>
              <div className="mt-6 mx-auto h-1 w-20 rounded-full bg-sky-500" />
            </Reveal>
          </div>

          <div className="relative mx-auto max-w-5xl px-4">
            <Reveal>
              <div className="relative overflow-hidden rounded-[3rem] shadow-2xl border border-slate-200">

                {/* [ รูปที่ 2 ]: รูปพื้นหลังส่วน Pain Points (รูปกองกระดาษ/ลายมือ)
                    ตำแหน่งไฟล์: public/bg_painpoints.jpg 
                */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/bg_painpoints.jpg"
                    alt="Background paperwork"
                    fill
                    className="object-cover"
                  />
                  {/* Overlay ไล่เฉดสีเพื่อให้ข้อความอ่านง่ายขึ้น */}
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent" />
                </div>

                <div className="relative z-10 px-8 py-16 sm:px-20 sm:py-20">
                  <div className="space-y-8 max-w-2xl">
                    {p.painItems.map((item, idx) => (
                      <Reveal key={idx} delay={idx * 0.1} x={-20}>
                        <div className="flex items-start gap-5 group">
                          {/* Bullet Point ดีไซน์ใหม่แบบ Glow */}
                          <div className="mt-2 h-3 w-3 rounded-full bg-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.8)] transition-transform group-hover:scale-125" />

                          <p className="text-xl md:text-2xl font-semibold text-white leading-snug drop-shadow-md">
                            {item}
                          </p>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* --- ส่วนที่ 3: About Section --- */}
      <section className="py-16 bg-slate-50">
        <Container>
          <Reveal>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">
                About e-Tax Invoice & e-Receipt and Digital Signature
              </h2>
              <div className="mt-4 mx-auto h-0.5 w-48 bg-slate-400" />
              <p className="mt-8 text-slate-500 text-sm md:text-base leading-relaxed">
                In Japan System We support the introduction of e-Tax invoice & e-Receipt and digital signatures,
                one of the nine DX measures promoted by the Thai Revenue Service.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* --- ส่วนที่ 4: Definition Cards --- */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal>
              <div className="h-full rounded-[2rem] bg-sky-50 p-8 shadow-sm border border-sky-100">
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-xl font-bold text-slate-800">What is e-Tax Invoice & e-Receipt?</h3>
                  <div className="bg-rose-100 p-2 rounded-lg">
                    {/* [ รูปที่ 3 ]: ไอคอนหัวข้อ e-Tax
                        ไฟล์ภาพ: public/icon_etax.png
                    */}
                    <Image src="/icon_etax.png" width={32} height={32} alt="e-Tax Icon" />
                  </div>
                </div>
                <div className="h-px w-full bg-slate-300 mb-6" />
                <p className="text-slate-500 text-sm leading-relaxed">
                  Refers to the use of tax invoices, electronic receipts, and digital signatures. Automatic date and time stamp.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="h-full rounded-[2rem] bg-sky-50 p-8 shadow-sm border border-sky-100">
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-xl font-bold text-slate-800">What is a digital signatures?</h3>
                  <div className="bg-amber-100 p-2 rounded-lg">
                    {/* [ รูปที่ 4 ]: ไอคอนหัวข้อ Digital Signatures
                        ไฟล์ภาพ: public/icon_signature.png
                    */}
                    <Image src="/icon_signature.png" width={32} height={32} alt="Signature Icon" />
                  </div>
                </div>
                <div className="h-px w-full bg-slate-300 mb-6" />
                <p className="text-slate-500 text-sm leading-relaxed">
                  Digital signature and electronic signatures it is the information attached to the Invoice & Tax Invoice document sent to show the identity of the sender of the document. Not just placing a picture signature on the tax invoice but it also uses digital technologyto prevent unauthorized use, signatures that enhancesecurity and convenience with data encryptiontechnology, including time stamps, etc.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* --- ส่วนที่ 5: Benefits Section --- */}
      <section className="py-12 bg-white">
        <Container>
          <div className="text-center mb-10">
            <Reveal>
              <h2 className="text-xl font-semibold text-slate-600">Benefits of introducing e-Tax Invoice & e-Receipt and digital signatures</h2>
              <div className="mt-4 mx-auto h-px w-48 bg-slate-400" />
            </Reveal>
          </div>

          <div className="relative rounded-[3rem] border border-white/50 bg-slate-100/30 p-4 shadow-xl backdrop-blur-md overflow-hidden">
            <div className="absolute -left-10 -bottom-10 h-32 w-32 bg-amber-200/20 blur-3xl rounded-full" />
            <div className="absolute -right-10 -top-10 h-32 w-32 bg-sky-200/20 blur-3xl rounded-full" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
              {[
                { id: 1, text: "Saving tax invoices on your own server orcloud server allows you to secure storageand without  the risk of document loss.", icon: "/benefit_1.png" },
                { id: 2, text: "Copies of certifications are stored on the IRS server.(Tax office)", icon: "/benefit_2.png" },
                { id: 3, text: "There is no need to go to the office and sign.", icon: "/benefit_3.png" },
                { id: 4, text: "Eliminate the risk of misuse of signatures byclarifying who signed when and being ableto verify them clearly.", icon: "/benefit_4.png" },
              ].map((item, idx) => (
                <Reveal key={item.id} delay={idx * 0.05}>
                  <div className="bg-white rounded-[2rem] p-6 shadow-md h-full flex flex-col border border-slate-100">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-slate-300 font-bold">{item.id}</span>
                      {/* [ รูปที่ 5-8 ]: ไอคอนรายการประโยชน์ 1-4
                          ไฟล์ภาพ: public/benefit_1.png ถึง benefit_4.png
                      */}
                      <Image src={item.icon} width={30} height={30} alt="icon" className="object-contain" />
                    </div>
                    <div className="h-px w-full bg-slate-100 mb-4" />
                    <p className="text-[12px] leading-relaxed text-slate-500 font-medium">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* --- ส่วนที่ 6: Mechanism Section --- */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-12">
            <Reveal>
              <h2 className="text-2xl font-bold text-slate-800 tracking-tight">e-Tax Invoice & e-Receipt and Digital Signature Mechanism</h2>
              <div className="mt-4 mx-auto h-px w-56 bg-slate-400" />
            </Reveal>
          </div>
          <Reveal>
            <div className="mx-auto max-w-5xl rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200 bg-white p-4 text-center">
              {/* [ รูปที่ 9 ]: รูปแผนผังขั้นตอนการทำงาน (Mechanism)
                  ไฟล์ภาพ: public/etax_mechanism.jpg
              */}
              <Image
                src="/e-tax_diagram_en.jpg"
                alt="Mechanism Diagram"
                width={1200}
                height={800}
                className="inline-block object-contain"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* --- ส่วนที่ 7: Introduction & Build System --- */}
      <section className="py-16 bg-white">
        <Container>
          <div className="relative mx-auto max-w-5xl">
            <Reveal>
              <div className="relative overflow-hidden rounded-[3rem] border border-slate-200 p-1 shadow-2xl">
                <div className="absolute inset-0 z-0 opacity-10">
                  {/* [ รูปที่ 10 ]: รูปพื้นหลังจางๆ ในส่วนแนะนำการติดตั้งระบบ
                      ไฟล์ภาพ: public/bg_etax_hero.jpg (หรือรูปอื่นตามต้องการ)
                  */}
                  <Image src="/bg_etax_hero.jpg" alt="background" fill className="object-cover" />
                </div>
                <div className="relative z-10 px-8 py-14 sm:px-16 text-center bg-white/95 rounded-[2.9rem]">
                  <h2 className="text-xl md:text-2xl font-bold text-slate-800 tracking-tight">
                    For the introduction of e-Tax Invoice & e-Receipt and digital signatures,
                  </h2>
                  <div className="mt-6 mx-auto h-px w-48 bg-slate-400" />
                  <p className="mt-8 text-slate-600 text-sm md:text-base leading-relaxed max-w-4xl mx-auto">
                    In addition to the application process for various services It is also necessary to introduce (and build) a system that meets the requirements of the Thai Revenue Office, Japan System, operates everything from the application process to the introduction and processing of tax invoices, electronic receipts, and also digital signatures on electronic documents.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* --- ส่วนที่ 8: Cost Reduction Example --- */}
      <section className="py-16 bg-white flex-grow">
        <Container>
          <div className="text-center mb-12">
            <Reveal>
              <h2 className="text-2xl font-semibold text-slate-700">Cost reduction example by introducing e-Tax Invoice & e-Receipt</h2>
              <div className="mt-4 mx-auto h-px w-56 bg-slate-400" />
            </Reveal>
          </div>

          <Reveal>
            <div className="mx-auto max-w-3xl rounded-[2.5rem] border border-slate-200 bg-white p-8 md:p-12 shadow-lg">
              <h3 className="text-center text-slate-600 font-bold mb-10 text-lg">Tax Invoice (Paper medium)</h3>
              <div className="space-y-6 max-w-md mx-auto">
                {[
                  { label: "Use paper", price: "0.8 Baht/set" },
                  { label: "Printing fee", price: "2 Baht/set" },
                  { label: "Storage material", price: "0.02 Baht/set" },
                  { label: "Delivery fee (EMS)", price: "37 Baht/set" },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-center text-slate-600 border-b border-slate-100 pb-2">
                    <span className="font-medium">{item.label} :</span>
                    <span className="font-bold">{item.price}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center text-slate-800 pt-4">
                  <span className="text-xl font-black uppercase">Total</span>
                  <span className="text-xl font-black">39.82 Baht</span>
                </div>
              </div>

              <div className="mt-12 text-center">
                <p className="text-slate-500 text-sm italic font-medium">Monthly cost when the circulation is 1,000 copies / month</p>
                <div className="mt-4 text-2xl md:text-3xl font-black text-rose-500">
                  39.82 Baht × 1,000 = 39,820 Baht / month
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 text-center">
              <h4 className="text-2xl md:text-4xl font-black text-rose-600 tracking-tight">
                Monthly 39,820 baht + labor cost reduction!
              </h4>
            </div>
          </Reveal>

          <div className="mt-16 flex justify-end">
            <Reveal>
              <Link href="/contact">
                <button className="bg-red-600 text-white px-10 py-3 rounded-full font-bold text-sm uppercase tracking-widest shadow-lg transition-all hover:bg-red-700 hover:scale-105">
                  Contact
                </button>
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>
    </div>
  );
}