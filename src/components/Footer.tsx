"use client";

import Link from "next/link";
import { Container } from "@/components/Container";
import { useLanguage } from "@/i18n/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-slate-100 bg-white">
      <Container>
        <div className="flex flex-col gap-4 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-xs font-medium text-slate-600">
            {t.common.copyright}
          </div>
          <div className="flex items-center gap-4 text-xs font-semibold text-slate-700">
            <Link className="hover:text-slate-900" href="/company-profile">
              {t.footer.companyProfile}
            </Link>
            <Link className="hover:text-slate-900" href="/contact">
              {t.footer.contact}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
