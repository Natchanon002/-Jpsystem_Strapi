"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageTitle } from "@/components/PageTitle";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/i18n/LanguageContext";

export default function NewReleasePage() {
  const { t } = useLanguage();
  const p = t.pages.newRelease;

  return (
    /* พื้นหลังหลักเป็นสีฟ้าอ่อน (bg-sky-50) */
    <div className="relative overflow-hidden py-14 sm:py-16 bg-sky-50 min-h-screen">
      <PageTitle title={p.metaTitle} />

      <Container>
        {/* --- ส่วนหัว Hero Section ปรับเป็นสีขาว --- */}
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 px-8 py-16 sm:px-12 sm:py-20 border border-slate-100 shadow-xl">
            {/* พื้นที่สำหรับใส่รูปพื้นหลัง */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/topBG-new-releasesss.jpg"
                alt="Background visual"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay มืดบางๆ เพื่อให้ตัวหนังสือสีขาวอ่านง่ายขึ้น */}
              <div className="absolute inset-0 bg-black/20" />
            </div>

            <div className="relative z-10 mx-auto max-w-2xl text-center text-white">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl drop-shadow-lg">
                {p.title}
              </h1>
              <p className="mt-4 text-lg leading-8 text-white/80 font-normal drop-shadow-md">
                {p.subtitle}
              </p>
            </div>
          </div>
        </Reveal>

        {/* --- ส่วนเนื้อหา e-Tax Section --- */}
        <Reveal delay={0.06}>
          <div className="mt-10 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_28px_80px_rgba(15,23,42,0.06)]">
            <div className="border-b border-slate-200 bg-white px-6 py-8 sm:px-10 sm:py-10">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-2xl">
                  <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                    {p.eTaxHeading}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {p.taxInvoiceSubtitle}
                  </p>
                </div>
                <div className="shrink-0">
                  <div className="aspect-[5/3] w-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 lg:w-56">
                    <Image
                      src="/topimg-new-release.jpg"
                      alt="New release top visual"
                      width={560}
                      height={336}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white px-6 py-8 sm:px-10 sm:py-10">
              {/* ตารางคำนวณ */}
              <div className="grid gap-3 rounded-3xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-700 sm:text-base">
                <div className="grid grid-cols-[minmax(160px,1fr)_minmax(120px,auto)] gap-4 font-semibold text-slate-900">
                  <div>{p.costTable.option}</div>
                  <div className="text-right">{p.costTable.value}</div>
                </div>
                <div className="grid grid-cols-[minmax(160px,1fr)_minmax(120px,auto)] gap-4 border-t border-slate-200 pt-4">
                  <div>{p.costTable.usePaper}</div>
                  <div className="text-right">{p.costTable.usePaperVal}</div>
                </div>
                <div className="grid grid-cols-[minmax(160px,1fr)_minmax(120px,auto)] gap-4 border-t border-slate-200 pt-4">
                  <div>{p.costTable.printingFee}</div>
                  <div className="text-right">{p.costTable.printingFeeVal}</div>
                </div>
                <div className="grid grid-cols-[minmax(160px,1fr)_minmax(120px,auto)] gap-4 border-t border-slate-200 pt-4">
                  <div>{p.costTable.storageMaterial}</div>
                  <div className="text-right">{p.costTable.storageMaterialVal}</div>
                </div>
                <div className="grid grid-cols-[minmax(160px,1fr)_minmax(120px,auto)] gap-4 border-t border-slate-200 pt-4">
                  <div>{p.costTable.deliveryFee}</div>
                  <div className="text-right">{p.costTable.deliveryFeeVal}</div>
                </div>
                <div className="grid grid-cols-[minmax(160px,1fr)_minmax(120px,auto)] gap-4 border-t border-slate-200 pt-4">
                  <div className="font-semibold text-red-600">{p.costTable.total}</div>
                  <div className="text-right font-semibold text-red-600">{p.costTable.totalVal}</div>
                </div>
              </div>

              {/* ส่วนสรุปรายเดือน */}
              <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_16px_36px_rgba(15,23,42,0.06)] text-sm text-slate-700 sm:text-base">
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-900">
                    <span className="text-lg font-bold">£</span>
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-slate-900">
                      {p.monthlyCostLabel}
                    </div>
                    <div className="mt-3 text-base font-bold leading-6 text-red-600">
                      {p.monthlyCostValue}
                    </div>
                    <div className="mt-2 text-sm font-semibold leading-6 text-red-600">
                      {p.monthlyCostReduction}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <Link
                  href="/e-tax"
                  className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                >
                  {t.common.readMore}
                </Link>
              </div>
            </div>
          </div>
        </Reveal>

        {/* --- ส่วนวิดีโอและรูปภาพด้านล่าง (ลบคำหัวข้อ Clip/Image ออกแล้ว) --- */}
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.3fr_0.9fr]">
          <Reveal delay={0.08}>
            <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 pb-[56.25%]">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src="https://www.youtube.com/embed/R8GhVnNnbV8?si=-sLcHVTQTR_vjEMm"
                  title="My Log Star video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="relative rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] flex flex-col h-full">
              {/* กล่องรูปภาพ */}
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">
                <Image
                  src="/botimg_new-release.png"
                  alt="Bottom new release visual"
                  width={1200}
                  height={720}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* ปุ่ม READ MORE แยกออกมาอยู่ด้านล่างและชิดขวา */}
              <div className="mt-6 flex justify-end">
                <Link
                  href="/my-log-star"
                  className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-slate-800 hover:-translate-y-1 active:scale-95"
                >
                  {t.common.readMore}
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </div>
  );
}