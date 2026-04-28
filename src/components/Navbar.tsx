"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Container } from "@/components/Container";
import { useLanguage } from "@/i18n/LanguageContext";

const topLinks = [
  { href: "/", key: "home" as const },
  { href: "/new-release", key: "newRelease" as const },
  { href: "/company-profile", key: "company" as const },
  { href: "/contact", key: "contact" as const },
];

const solutionLinks = [
  { href: "/it-system", key: "itSystem" as const },
  { href: "/e-tax", key: "eTax" as const },
  { href: "/marketing", key: "marketing" as const },
  { href: "/my-log-star", key: "myLogStar" as const },
];

export function Navbar() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  const inSolution = useMemo(() => {
    return solutionLinks.some((l) => l.href === pathname);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Link
            href="/"
            className="group flex items-center gap-3 text-sm font-semibold tracking-tight text-slate-900"
          >
            <span className="relative h-8 w-8 overflow-hidden rounded-full">
              <Image
                src="/logo_japanSystem.png"
                alt="Japan System Logo"
                width={32}
                height={32}
                className="object-contain"
                priority
              />
            </span>
            <span className="hidden sm:block">{t.brand}</span>
            <span className="sm:hidden">JST</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {topLinks.slice(0, 1).map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={
                    "relative rounded-full px-3 py-2 text-xs font-semibold tracking-wide transition-colors " +
                    (active
                      ? "text-slate-900"
                      : "text-slate-600 hover:text-slate-900")
                  }
                  data-cursor="interactive"
                >
                  {t.nav[l.key]}
                  {active ? (
                    <span className="absolute inset-x-2 -bottom-0.5 h-px bg-sky-500/70" />
                  ) : null}
                </Link>
              );
            })}

            <div
              className="relative"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              <button
                type="button"
                className={
                  "relative inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold tracking-wide transition-colors " +
                  (inSolution || open
                    ? "text-slate-900"
                    : "text-slate-600 hover:text-slate-900")
                }
                aria-haspopup="menu"
                aria-expanded={open}
                data-cursor="interactive"
              >
                {t.nav.solution}
                <span
                  className={
                    "text-slate-400 transition-transform duration-200 " +
                    (open ? "rotate-180" : "")
                  }
                  aria-hidden="true"
                >
                  ▾
                </span>
                {inSolution ? (
                  <span className="absolute inset-x-2 -bottom-0.5 h-px bg-sky-500/70" />
                ) : null}
              </button>

              <AnimatePresence>
                {open ? (
                  <motion.div
                    initial={{ opacity: 0, y: 8, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: 8, filter: "blur(10px)" }}
                    transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute left-0 top-full mt-2 w-64 overflow-hidden rounded-2xl border border-slate-100 bg-white/80 shadow-[0_30px_90px_rgba(15,23,42,0.10)] backdrop-blur"
                    role="menu"
                  >
                    <div className="p-2">
                      {solutionLinks.map((l, idx) => {
                        const active = pathname === l.href;
                        return (
                          <motion.div
                            key={l.href}
                            initial={{ opacity: 0, x: -6 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.22, delay: 0.03 * idx }}
                          >
                            <Link
                              href={l.href}
                              className={
                                "group flex items-center justify-between rounded-xl px-3 py-2 text-sm font-semibold transition-colors " +
                                (active
                                  ? "bg-slate-900 text-white"
                                  : "text-slate-700 hover:bg-slate-50 hover:text-slate-900")
                              }
                              onClick={() => setOpen(false)}
                              data-cursor="interactive"
                              role="menuitem"
                            >
                              <span>{t.nav[l.key]}</span>
                              <span
                                className={
                                  "text-sky-500/80 opacity-0 transition-opacity group-hover:opacity-100 " +
                                  (active ? "text-white/80 opacity-100" : "")
                                }
                                aria-hidden="true"
                              >
                                →
                              </span>
                            </Link>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>

            {topLinks.slice(1).map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={
                    "relative rounded-full px-3 py-2 text-xs font-semibold tracking-wide transition-colors " +
                    (active
                      ? "text-slate-900"
                      : "text-slate-600 hover:text-slate-900")
                  }
                  data-cursor="interactive"
                >
                  {t.nav[l.key]}
                  {active ? (
                    <span className="absolute inset-x-2 -bottom-0.5 h-px bg-sky-500/70" />
                  ) : null}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <Link
              href="/contact"
              className="hidden rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold tracking-wide text-white transition-colors hover:bg-slate-800 md:inline-flex"
              data-cursor="interactive"
            >
              {t.nav.contact}
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}

