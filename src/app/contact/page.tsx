"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/i18n/LanguageContext";

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <div className="text-xs font-semibold tracking-wide text-slate-600">
        {label}
      </div>
      <div className="mt-2">{children}</div>
    </label>
  );
}

export default function ContactPage() {
  const { t } = useLanguage();
  const p = t.pages.contact;
  const [sent, setSent] = useState(false);

  return (
    /* 1. เน้นพื้นหลังหลักเป็นสีฟ้าอ่อนแบบเจาะจง (bg-[#f0f9ff] หรือ bg-sky-50) */
    <div className="relative min-h-screen overflow-hidden py-14 sm:py-16 bg-sky-50">
      
      {/* --- ส่วนหัว Hero Section --- */}
      <section className="relative mb-12 overflow-hidden rounded-[2.5rem] mx-4 sm:mx-10 bg-white shadow-xl border border-slate-100">
        <div className="absolute inset-0 z-0">
          <Image
            src="/topBG_contact.jpg" 
            alt="Contact Us Background"
            fill
            className="object-cover object-[85%_center]" 
            priority
          />
        </div>

        <div className="relative z-10 px-8 py-16 sm:px-12 sm:py-20 lg:py-24">
          <Container>
            <Reveal>
              <div className="max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                  {p.title}
                </h1>
                <p className="mt-4 text-lg leading-7 text-slate-700 font-normal">
                  {p.subtitle}
                </p>
              </div>
            </Reveal>
          </Container>
        </div>
      </section>

      {/* --- ส่วนเนื้อหา Form และ Information --- */}
      <Container>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          
          <Reveal>
            {/* ปรับสี Card ให้เป็นสีขาวเพื่อให้ตัดกับพื้นหลังสีฟ้าอ่อนด้านหลัง */}
            <div className="relative rounded-[2.5rem] border border-slate-100 bg-white p-7 shadow-2xl shadow-sky-900/5 ring-1 ring-white/70">
              <div className="pointer-events-none absolute -inset-px rounded-[2.5rem] bg-gradient-to-b from-sky-500/5 to-transparent" />
              <div className="text-sm font-bold tracking-tight text-slate-900">
                {p.form.title}
              </div>
              <form
                className="mt-6 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                  window.setTimeout(() => setSent(false), 2500);
                }}
              >
                <Field label={p.form.companyName}>
                  <input
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-sky-300 focus:ring-4 focus:ring-sky-100"
                    placeholder={p.form.companyName}
                  />
                </Field>
                <Field label={p.form.name}>
                  <input
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-sky-300 focus:ring-4 focus:ring-sky-100"
                    placeholder={p.form.name}
                  />
                </Field>
                <Field label={p.form.email}>
                  <input
                    required
                    type="email"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-sky-300 focus:ring-4 focus:ring-sky-100"
                    placeholder={p.form.email}
                  />
                </Field>
                <Field label={p.form.subject}>
                  <input
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-sky-300 focus:ring-4 focus:ring-sky-100"
                    placeholder={p.form.subject}
                  />
                </Field>
                <Field label={p.form.message}>
                  <textarea
                    required
                    rows={5}
                    className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-sky-300 focus:ring-4 focus:ring-sky-100"
                    placeholder={p.form.message}
                  />
                </Field>

                <div className="flex items-center justify-between gap-4">
                  <div className="text-xs text-slate-500">{p.form.note}</div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-xl transition-all hover:-translate-y-1"
                  >
                    {sent ? t.common.sent : t.common.send}
                  </button>
                </div>
              </form>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="space-y-6">
              <div className="rounded-3xl border border-slate-100 bg-white p-7 shadow-lg shadow-sky-900/5">
                <div className="text-sm font-bold tracking-tight text-slate-900">
                  {p.office.title}
                </div>
                <div className="mt-5 space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-4 w-4 text-sky-600" strokeWidth={1.8} />
                    <div>
                      <div className="text-xs font-semibold tracking-wide text-slate-500">{t.common.email}</div>
                      <a href={`mailto:${p.office.email}`} className="text-sm font-semibold text-slate-900 hover:text-sky-600">
                        {p.office.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-4 w-4 text-sky-600" strokeWidth={1.8} />
                    <div>
                      <div className="text-xs font-semibold tracking-wide text-slate-500">{t.common.phone}</div>
                      <a href={`tel:${p.office.phone}`} className="text-sm font-semibold text-slate-900 hover:text-sky-600">
                        {p.office.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 text-sky-600" strokeWidth={1.8} />
                    <div>
                      <div className="text-xs font-semibold tracking-wide text-slate-500">{t.common.address}</div>
                      <div className="text-sm font-semibold text-slate-900">
                        {t.common.addressValue}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative aspect-[16/10] overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-lg shadow-sky-900/5">
                <iframe
                  title="Japan System (Thailand) Co., Ltd. Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.611116242337!2d100.56066231535492!3d13.742054290353457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ee628b031b9%3A0xc39f20106428e239!2s253%20Asoke%20Towers!5e0!3m2!1sen!2sth!4v1649999999999!5m2!1sen!2sth"
                  className="h-full w-full transition-transform duration-500 group-hover:scale-[1.02]"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </div>
  );
}