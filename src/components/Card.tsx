import type { ReactNode } from "react";
import Link from "next/link";

export function Card({
  title,
  desc,
  icon,
  className,
  href,
}: {
  title: string;
  desc: string;
  icon?: ReactNode;
  className?: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4">
      {icon ? (
        <div className="grid h-11 w-11 place-items-center rounded-xl border border-slate-100 bg-white">
          {icon}
        </div>
      ) : null}
      <div className="min-w-0">
        <div className="text-sm font-bold tracking-tight text-slate-900">
          {title}
        </div>
        <div className="mt-2 text-sm leading-6 text-slate-600">{desc}</div>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block" data-cursor="interactive">
        <div
          className={
            "group rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.06)] transition-transform duration-300 hover:-translate-y-0.5 " +
            (className ?? "")
          }
        >
          {content}
        </div>
      </Link>
    );
  }

  return (
    <div
      className={
        "group rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.06)] transition-transform duration-300 hover:-translate-y-0.5 " +
        (className ?? "")
      }
      data-cursor="interactive"
    >
      {content}
    </div>
  );
}

