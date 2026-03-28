import ProjectCard from "../components/ProjectCard";
import { useLanguage } from "../i18n/useLanguage";
import { projects } from "../data/projects";
import { smallProjects } from "../data/smallProjects";
import Divider from "../components/separators/Divider.tsx";

export default function ProjectsPage() {
  const { t } = useLanguage();

  const featuredProjects = projects;
  const otherProjects = smallProjects;

  return (
    <div className="min-h-screen max-w-7xl mx-auto">
      <section className="mx-auto w-full px-4 pb-4 lg:pb-8 pt-14 sm:px-6 lg:px-10 lg:pt-16">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
            {t("pages.projects.kicker")}
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            {t("pages.projects.title")}
          </h1>
          <p className="mt-5 text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
            {t("pages.projects.description")}
          </p>
        </div>
      </section>
      <Divider variant="section" />

      <section className="mx-auto w-full px-4 sm:px-6 lg:px-10 py-4 lg:py-8">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            {t("pages.projects.featured.title")}
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300 sm:text-base">
            {t("pages.projects.featured.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
      <Divider variant="section" />

      <section className="mx-auto w-full px-4 sm:px-6 lg:px-10 py-4 lg:py-8">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            {t("pages.projects.other.title")}
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300 sm:text-base">
            {t("pages.projects.other.description")}
          </p>
        </div>

        <div className="rounded-2xl bg-slate-100 p-4 dark:bg-slate-900/40 sm:p-6 lg:p-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:gap-10">
             {otherProjects.map((project) => (
               <ProjectCard key={project.id} project={project} />
             ))}
          </div>
        </div>
      </section>
      <Divider variant="section" />

      <section className="mx-auto w-fullpx-4 sm:px-6 lg:px-10 pt-4 lg:pt-8 pb-22">
        <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white/70 p-8 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-950/60 sm:p-10">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
              {t("pages.projects.closing.kicker")}
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
              {t("pages.projects.closing.title")}
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
              {t("pages.projects.closing.description")}
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900/60">
              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                {t("pages.projects.closing.card1.title")}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {t("pages.projects.closing.card1.description")}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900/60">
              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                {t("pages.projects.closing.card2.title")}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {t("pages.projects.closing.card2.description")}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900/60">
              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                {t("pages.projects.closing.card3.title")}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {t("pages.projects.closing.card3.description")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

