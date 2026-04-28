"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { Container } from "@/components/Container";
import { PageTitle } from "@/components/PageTitle";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/i18n/LanguageContext";

export default function CompanyProfilePage() {
  const { t } = useLanguage();
  const p = t.pages.company;

  return (
    <div>
      <PageTitle title={p.metaTitle} />

      {/* Section 1: Hero - ปรับสีฟอนต์เป็นสีดำ (slate-900) */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-white">
        {/* พื้นที่สำหรับใส่รูปพื้นหลัง */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/topB_company_profile.jpg" 
            alt="Company background"
            fill
            className="object-cover"
            priority
          />
          {/* ถ้าพื้นหลังสว่างมากจนอ่านยาก สามารถใส่ overlay สีขาวจางๆ ได้ครับ */}
          {/* <div className="absolute inset-0 bg-white/10" /> */}
        </div>

        {/* เนื้อหาด้านบนรูป - ปรับสีเป็น slate-900 (ดำเข้ม) */}
        <div className="relative z-10">
          <Container>
            <div className="max-w-2xl">
              <Reveal>
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                  {p.title}
                </h1>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="mt-5 text-lg font-normal leading-8 text-slate-700">
                  {p.subtitle}
                </p>
              </Reveal>
            </div>
          </Container>
        </div>
      </section>

      {/* Section 2: About - โค้ดเดิมทั้งหมด */}
      <section className="py-14 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div className="rounded-3xl border border-slate-100 bg-white p-7 shadow-[0_28px_90px_rgba(15,23,42,0.10)] ring-1 ring-white/70">
                <div className="text-xs font-semibold tracking-wide text-sky-600">
                  {p.about.title}
                </div>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                  {p.about.title}
                </h2>
                <p className="mt-4 text-base font-light leading-7 text-slate-600">
                  {p.about.body}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-[0_28px_90px_rgba(15,23,42,0.10)] ring-1 ring-white/70">
                <div
                  className="aspect-[16/10] w-full"
                  style={{
                    backgroundImage:
                      "url('/office.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  aria-label={p.about.imageAlt}
                  role="img"
                />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/45 to-transparent" />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Section 3: Corporate Information - โค้ดเดิมทั้งหมด */}
      <section className="border-y border-slate-100 bg-slate-50/50 py-14 sm:py-16">
        <Container>
          <Reveal>
            <div className="max-w-2xl">
              <div className="text-xs font-semibold tracking-wide text-sky-600">
                {p.infoTitle}
              </div>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                {p.infoTitle}
              </h2>
            </div>
          </Reveal>

          <div className="mt-10 overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-[0_28px_90px_rgba(15,23,42,0.10)] ring-1 ring-white/70">
            <div className="divide-y divide-slate-100">
              {p.info.map((r, idx) => (
                <Reveal key={r.k} delay={0.04 * idx}>
                  <div className="grid grid-cols-1 gap-2 p-6 sm:grid-cols-3 sm:items-center">
                    <div className="text-xs font-semibold tracking-wide text-slate-500">
                      {r.k}
                    </div>
                    <div className="sm:col-span-2 text-sm font-semibold text-slate-900">
                      {r.v}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Section 4: Services - โค้ดเดิมทั้งหมด */}
      <section className="py-14 sm:py-16">
        <Container>
          <Reveal>
            <div className="max-w-2xl">
              <div className="text-xs font-semibold tracking-wide text-sky-600">
                {p.servicesTitle}
              </div>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                {p.servicesTitle}
              </h2>
            </div>
          </Reveal>

          <div className="mt-10 rounded-3xl border border-slate-100 bg-white p-7 shadow-[0_28px_90px_rgba(15,23,42,0.10)] ring-1 ring-white/70">
            <ul className="space-y-4">
              {p.services.map((s, idx) => (
                <Reveal key={s} delay={0.04 * idx}>
                  <li className="flex items-start gap-4">
                    <span className="mt-0.5 grid h-8 w-8 place-items-center rounded-full border border-slate-100 bg-white">
                      <Check className="h-4 w-4 text-sky-600" strokeWidth={2} />
                    </span>
                    <span className="text-base font-light leading-7 text-slate-700">
                      {s}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </div>
  );
}