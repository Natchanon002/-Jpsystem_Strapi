import { getProjects, richTextToPlain } from "@/lib/strapi";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Our latest projects powered by Strapi CMS.",
};

export const revalidate = 60; // ISR — revalidate every 60 seconds

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Page Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-600 mb-3">
            Strapi CMS
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Projects
          </h1>
          <p className="mt-4 text-base text-slate-500 max-w-xl mx-auto leading-relaxed">
            ข้อมูลด้านล่างดึงมาจาก Strapi CMS แบบ Real-time (ISR 60s)
          </p>
        </div>

        {/* Projects List */}
        {projects.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
            <p className="text-slate-400 text-sm">ยังไม่มี Project — เพิ่มข้อมูลใน Strapi แล้วรีเฟรชหน้านี้</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {projects.map((project) => (
              <article
                key={project.documentId}
                className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-sky-200 hover:-translate-y-0.5"
              >
                {/* Decorative gradient bar */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h2 className="text-lg font-bold text-slate-900 sm:text-xl tracking-tight">
                      {project.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 line-clamp-3">
                      {richTextToPlain(project.description)}
                    </p>
                  </div>

                  <div className="shrink-0 grid h-10 w-10 place-items-center rounded-xl bg-sky-50 text-sky-600 transition-colors group-hover:bg-sky-100">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-3 text-xs text-slate-400">
                  <time dateTime={project.publishedAt}>
                    {new Date(project.publishedAt).toLocaleDateString("th-TH", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span className="inline-block h-1 w-1 rounded-full bg-slate-300" />
                  <span className="font-mono text-[10px] text-slate-300">
                    {project.documentId.slice(0, 8)}
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Debug info */}
        <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-5 text-xs text-slate-500">
          <p className="font-semibold text-slate-700 mb-2">🔗 API Endpoint</p>
          <code className="block rounded-lg bg-white border border-slate-200 px-3 py-2 font-mono text-[11px] text-slate-600 break-all">
            {process.env.NEXT_PUBLIC_STRAPI_URL}/api/projects
          </code>
          <p className="mt-3 text-slate-400">
            Total: {projects.length} project(s) · Revalidate: {revalidate}s
          </p>
        </div>
      </div>
    </section>
  );
}
