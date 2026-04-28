"use client";

import Link from "next/link";
import {
  AlertTriangle,
  FileCheck,
  Fingerprint,
  ShieldCheck,
  TrendingDown,
} from "lucide-react";
import { Container } from "@/components/Container";
import { PageTitle } from "@/components/PageTitle";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/i18n/LanguageContext";

function InfoPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_18px_60px_rgba(15,23,42,0.06)]">
      <div className="text-xs font-semibold tracking-wide text-slate-500">
        {label}
      </div>
      <div className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
        {value}
      </div>
    </div>
  );
}

function StatBar({
  label,
  current,
  withSystem,
}: {
  label: string;
  current: number;
  withSystem: number;
}) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-6">
      <div className="flex items-end justify-between gap-4">
        <div className="text-sm font-bold tracking-tight text-slate-900">{label}</div>
        <div className="text-xs font-semibold text-slate-500">
          Current <span className="text-slate-900">{current}%</span> → With Japan System{" "}
          <span className="text-slate-900">{withSystem}%</span>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <div>
          <div className="mb-1 text-[11px] font-semibold tracking-wide text-slate-500">
            Current Process
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-slate-400/70"
              style={{ width: `${current}%` }}
            />
          </div>
        </div>
        <div>
          <div className="mb-1 text-[11px] font-semibold tracking-wide text-slate-500">
            With Japan System e‑Tax
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-sky-500/70"
              style={{ width: `${withSystem}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ETaxPage() {
  const { t } = useLanguage();
  const p = t.pages.eTax;

  return (
    <div>
      <PageTitle title={p.metaTitle} />

      {/* Section 1: Hero */}
      <section className="relative overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-slate-50" />
          <div
            className="absolute inset-0 opacity-[0.14]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(2,132,199,0.12), rgba(15,23,42,0.03)), url('/hero-it.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
          <div className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-slate-900/5 blur-3xl" />
        </div>

        <Container>
          <div className="relative py-16 sm:py-20 lg:py-24">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-100 bg-white/70 px-3 py-1 text-xs font-semibold tracking-wide text-slate-700 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-500/80" />
                Clean Professionalism
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
                {p.title}
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="relative max-w-3xl overflow-hidden rounded-[2rem] border border-white/60 bg-white/90 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur">
                <div className="pointer-events-none absolute inset-0 bg-slate-100/70" />
                <div className="relative">
                  <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
                    {p.heroSubtitle}
                  </p>
                  <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-100/90">
                    <div className="grid h-72 w-full place-items-center text-sm font-semibold uppercase tracking-[0.32em] text-slate-500">
                      Image placeholder
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.20}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                  data-cursor="interactive"
                >
                  {p.cta.primary} <span className="ml-2 text-white/80">→</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Section 2: Pain Points */}
      <section className="py-14 sm:py-16">
        <Container>
          <Reveal>
            <div className="max-w-2xl">
              <div className="text-xs font-semibold tracking-wide text-sky-600">
                {p.painTitle}
              </div>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                {p.painTitle}
              </h2>
            </div>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {p.painItems.map((it, idx) => (
              <Reveal key={it} delay={0.04 * idx}>
                <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.06)]">
                  <div className="flex items-start gap-4">
                    <div className="grid h-11 w-11 place-items-center rounded-xl border border-slate-100 bg-white">
                      <AlertTriangle className="h-5 w-5 text-sky-600" strokeWidth={1.6} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-bold tracking-tight text-slate-900">
                        {it}
                      </div>
                      <div className="mt-2 text-sm leading-6 text-slate-600">
                        Reduce friction with digital workflow + secure signing.
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Section 3: Solution */}
      <section className="border-y border-slate-100 bg-slate-50/50 py-14 sm:py-16">
        <Container>
          <Reveal>
            <div className="max-w-3xl">
              <div className="text-xs font-semibold tracking-wide text-sky-600">
                {p.solutionTitle}
              </div>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                {p.solutionTitle}
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                {p.solutionDesc}
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <Reveal>
              {/* Image Placeholder */}
              <div className="rounded-3xl border border-slate-100 bg-gradient-to-br from-slate-50 to-slate-100 p-7 shadow-[0_24px_80px_rgba(15,23,42,0.06)]">
                <div className="aspect-square w-full overflow-hidden rounded-2xl border border-slate-100 bg-white">
                  <div className="grid h-full w-full place-items-center">
                    <div className="text-xs font-semibold text-slate-500">SOLUTION ILLUSTRATION</div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="space-y-5">
                <div className="rounded-3xl border border-slate-100 bg-white p-7 shadow-[0_24px_80px_rgba(15,23,42,0.06)]">
                  <div className="flex items-start gap-5">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl border border-slate-100 bg-white">
                      <FileCheck className="h-6 w-6 text-sky-600" strokeWidth={1.6} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-bold tracking-tight text-slate-900">
                        {p.blocks.eTax.title}
                      </div>
                      <div className="mt-2 text-sm leading-6 text-slate-600">
                        {p.blocks.eTax.desc}
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 h-px w-full bg-slate-100" />
                  <div className="mt-6 grid grid-cols-2 gap-3 text-xs font-semibold text-slate-600">
                    <div className="rounded-2xl border border-slate-100 bg-white p-4">
                      Paperless workflow
                    </div>
                    <div className="rounded-2xl border border-slate-100 bg-white p-4">
                      Audit-ready storage
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-slate-100 bg-white p-7 shadow-[0_24px_80px_rgba(15,23,42,0.06)]">
                  <div className="flex items-start gap-5">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl border border-slate-100 bg-white">
                      <Fingerprint className="h-6 w-6 text-sky-600" strokeWidth={1.6} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-bold tracking-tight text-slate-900">
                        {p.blocks.signature.title}
                      </div>
                      <div className="mt-2 text-sm leading-6 text-slate-600">
                        {p.blocks.signature.desc}
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 h-px w-full bg-slate-100" />
                  <div className="mt-6 grid grid-cols-2 gap-3 text-xs font-semibold text-slate-600">
                    <div className="rounded-2xl border border-slate-100 bg-white p-4">
                      Remote approval
                    </div>
                    <div className="rounded-2xl border border-slate-100 bg-white p-4">
                      Tamper resistance
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="mt-8 rounded-3xl border border-slate-100 bg-white p-7">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-sky-600" strokeWidth={1.6} />
                <div className="text-sm font-bold tracking-tight text-slate-900">
                  Trust by design
                </div>
              </div>
              <div className="mt-2 text-sm leading-6 text-slate-600">
                Thin separators, clear information architecture, and enterprise-grade posture—
                designed to feel calm, premium, and reliable.
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Section 4: Cost reduction & comparison */}
      <section className="py-14 sm:py-16">
        <Container>
          <Reveal>
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-sky-600">
                <TrendingDown className="h-4 w-4" strokeWidth={1.8} />
                {p.compareTitle}
              </div>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                {p.compareTitle}
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                {p.compareSubtitle}
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-5">
            {p.metrics.map((m, idx) => (
              <Reveal key={m.k} delay={0.05 * idx}>
                <StatBar label={m.k} current={m.current} withSystem={m.withSystem} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.12}>
            <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-3xl border border-slate-100 bg-white p-7 sm:flex-row sm:items-center">
              <div>
                <div className="text-sm font-bold tracking-tight text-slate-900">
                  Ready to modernize approvals?
                </div>
                <div className="mt-2 text-sm leading-6 text-slate-600">
                  Start with a clean pilot—then scale with confidence.
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                data-cursor="interactive"
              >
                {p.cta.primary} <span className="ml-2 text-white/80">→</span>
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Section 5: e-Tax Details */}
      <section className="border-t border-slate-100 py-14 sm:py-16">
        <Container>
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                {p.detailsTitle}
              </h2>
              <p className="mt-3 text-base leading-7 text-slate-600">{p.detailsSubtitle}</p>
            </div>
          </Reveal>

          {/* Image Placeholder Section */}
          <Reveal>
            <div className="mt-10 rounded-2xl border border-slate-100 bg-gradient-to-br from-slate-50 to-slate-100 p-8">
              <div className="aspect-video w-full overflow-hidden rounded-xl border border-slate-100 bg-white">
                <div className="grid h-full w-full place-items-center">
                  <div className="rounded-full border border-slate-300 bg-white/60 px-4 py-2 text-xs font-semibold text-slate-600 backdrop-blur">
                    INFOGRAPHIC / IMAGE PLACEHOLDER
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
            <Reveal>
              <div className="rounded-2xl border border-slate-100 bg-white p-7">
                <div className="text-xs font-semibold tracking-wide text-sky-600">
                  {p.detailsProblemTitle}
                </div>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                  {p.detailsProblemItems.map((it) => (
                    <li key={it} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900/70" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="rounded-2xl border border-slate-100 bg-white p-7">
                <div className="text-xs font-semibold tracking-wide text-sky-600">
                  {p.detailsSolutionTitle}
                </div>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                  {p.detailsSolutionItems.map((it) => (
                    <li key={it} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500/80" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="mt-10 rounded-3xl border border-slate-100 bg-white p-7">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <div className="text-xs font-semibold tracking-wide text-sky-600">
                    {p.detailsImpactTitle}
                  </div>
                  <div className="mt-1 text-lg font-bold tracking-tight text-slate-900">
                    {p.detailsImpactTitle}
                  </div>
                </div>
                <div className="text-xs font-medium text-slate-500">
                  *Illustrative values
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {p.detailsImpactItems.map((it) => (
                  <InfoPill key={it.label} label={it.label} value={it.value} />
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}

