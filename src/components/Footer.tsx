"use client";

import Link from "next/link";
import { Container } from "@/components/Container";
import { useLanguage } from "@/i18n/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative border-t border-slate-200/60 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      {/* Decorative top gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-2/3 bg-gradient-to-r from-transparent via-sky-300/50 to-transparent" />

      {/* Background glow */}
      <div className="absolute -left-32 bottom-0 h-40 w-40 rounded-full bg-sky-100/30 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-40 w-40 rounded-full bg-indigo-100/20 blur-3xl" />

      <Container>
        <div className="relative flex flex-col gap-4 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-xs font-medium text-slate-500">
            {t.common.copyright}
          </div>
          <div className="flex items-center gap-5 text-xs font-semibold text-slate-600">
            <Link className="transition-colors hover:text-slate-900" href="/company-profile">
              {t.footer.companyProfile}
            </Link>
            <div className="h-3 w-px bg-slate-200" />
            <Link className="transition-colors hover:text-slate-900" href="/contact">
              {t.footer.contact}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
