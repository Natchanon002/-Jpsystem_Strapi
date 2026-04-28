"use client";

import Image from "next/image";
import { type ReactNode, useState } from "react";
import { Container } from "@/components/Container";
import { PageTitle } from "@/components/PageTitle";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/i18n/LanguageContext";

function Chip({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold tracking-wide text-slate-700">
      {children}
    </span>
  );
}

function FeatureCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.06)]">
      <div className="text-sm font-bold tracking-tight text-slate-900">{title}</div>
      <div className="mt-4 text-sm leading-7 text-slate-600">{children}</div>
    </div>
  );
}

function AccordionItem({
  title,
  isOpen,
  onToggle,
  children,
}: {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-[0_16px_56px_rgba(15,23,42,0.06)]">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-lg font-semibold text-slate-900 transition-colors hover:bg-slate-50"
        onClick={onToggle}
      >
        <span>{title}</span>
        <span className="text-slate-500">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && <div className="border-t border-slate-100 px-6 py-5 text-sm leading-7 text-slate-600 bg-white">{children}</div>}
    </div>
  );
}

export default function MyLogStarPage() {
  const { t } = useLanguage();
  const p = t.pages.myLogStar;
  const [openSection, setOpenSection] = useState("fileServer");

  const sections = [
    {
      id: "fileServer",
      title: "My log Star FileServer",
      content: (
        <>
          <p>
            Pinpoint monitoring of important servers, low price & high functionality! File server access log / audit log management. Log monitoring is indispensable for measures against information leakage.
          </p>
          <p className="mt-4">
            For companies that own many servers or small and medium-sized companies with limited system resources, it can be difficult to monitor every system. MylogStar FileServer narrows the monitoring target to the file server where confidential information is stored and installs directly on that server.
          </p>
          <p className="mt-4">
            It monitors data input/output and user operations, maintaining security while allowing audit log acquisition. Operations are recorded chronologically as audit logs, with no need for a separate management server or PC agent.
          </p>
        </>
      ),
    },
    {
      id: "desktop",
      title: "My log Star Desktop",
      content: (
        <>
          <p>
            "Log management" & "device control" that can be done immediately on a stand-alone PC or a small base. MylogStar Desktop is ideal for environments with a small number of target PCs, including PCs that cannot connect to the network.
          </p>
          <p className="mt-4">
            No management server is required, and it can be installed directly on the target PC. With top-class log collection power, operation logs on the PC can be uprooted and managed as a trail.
          </p>
        </>
      ),
    },
    {
      id: "standalone",
      title: "MylogStar 4 Standalone Manager",
      content: (
        <p>
          MylogStar 4 Standalone Manager lets you centrally collect, manage, and view logs from multiple machines running Desktop. SQL Server is required to use Standalone Manager.
        </p>
      ),
    },
    {
      id: "console",
      title: "Easy-to-understand and simple management console",
      content: (
        <p>
          The management console of MylogStar Desktop is designed to be simple and easy to understand, even for personnel who are not familiar with IT.
        </p>
      ),
    },
    {
      id: "deviceControl",
      title: "Device control",
      content: (
        <p>
          MylogStar Desktop's Access Control Option not only prohibits USB use uniformly, but also allows detailed security policies like allow, prohibit, and read-only for USB storage.
        </p>
      ),
    },
  ];

  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? "" : id);
  };

  return (
    /* เพิ่ม bg-sky-50 และ min-h-screen เพื่อให้พื้นหลังเป็นสีฟ้าอ่อนทั้งหน้า */
    <div className="py-14 sm:py-16 bg-sky-50 min-h-screen">
      <PageTitle title={p.metaTitle} />
      <Container>
        <Reveal>
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              My log star
            </h1>
            <p className="mt-3 text-base leading-7 text-slate-600">
              What is log management? When you use a personal computer, information such as what software you used and which file you opened is recorded on your computer... (logs) contains a great deal of information, and a closer look reveals who, when, and what they were doing on their computer.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <div className="space-y-6">
              {/* ส่วนวิดีโอ */}
              <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.06)]">
                <div className="text-xs font-semibold tracking-wide text-sky-600 uppercase">{p.videoTitle}</div>
                <div className="mt-4 overflow-hidden rounded-3xl border border-slate-100 bg-slate-900/5">
                  <div className="relative aspect-video w-full bg-black">
                    <iframe
                      className="absolute inset-0 h-full w-full"
                      src="https://www.youtube.com/embed/R8GhVnNnbV8?si=-sLcHVTQTR_vjEMm"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
              {/* รูปภาพประกอบ 1 */}
              <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.06)]">
                <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-slate-50">
                  <Image
                    src="/logstar.png"
                    alt="LogStar"
                    width={1200}
                    height={720}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="space-y-6">
              {/* รูปภาพประกอบ 2 */}
              <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.06)]">
                <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-slate-50">
                  <Image
                    src="/mylogstar.png"
                    alt="MylogStar"
                    width={1200}
                    height={720}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
              {/* การ์ดฟีเจอร์ */}
              <FeatureCard title="MylogStar Features">
                <div className="space-y-6">
                  <div>
                    <div className="font-semibold text-slate-900">Log collection power</div>
                    <div className="mt-2 text-sm leading-7 text-slate-600">
                      Acquires logs at the kernel level of the OS, grasping operations that cannot be acquired by other log management products.
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Log availability</div>
                    <div className="mt-2 text-sm leading-7 text-slate-600">
                      Highly accurate logs for information leakage countermeasures and business improvement.
                    </div>
                  </div>
                </div>
              </FeatureCard>
            </div>
          </Reveal>
        </div>

        {/* Accordion ส่วนรายละเอียดเพิ่มเติม */}
        <div className="mt-12 space-y-4">
          {sections.map((section) => (
            <AccordionItem
              key={section.id}
              title={section.title}
              isOpen={openSection === section.id}
              onToggle={() => toggleSection(section.id)}
            >
              {section.content}
            </AccordionItem>
          ))}
        </div>
      </Container>
    </div>
  );
}