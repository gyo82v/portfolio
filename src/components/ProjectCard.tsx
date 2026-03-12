import { useLanguage } from "../i18n/useLanguage";
import type { ProjectData } from "../data/projects";

export default function ProjectCard({ project }: {project: ProjectData}) {
  const { t } = useLanguage();

  return (
    <article
      className="bg-white dark:bg-slate-700 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden ring-1 ring-slate-200 dark:ring-slate-700"
      aria-labelledby={`${project.id}-title`}
    >
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300"
        aria-label={t(project.titleKey)}
      >
        <div className="w-full h-60 md:h-60 lg:h-60 overflow-hidden">
          <img
            src={project.image}
            alt={t(project.imageAltKey)}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="p-4 sm:p-5">
          <h3 id={`${project.id}-title`} className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            {t(project.titleKey)}
          </h3>

          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            {t(project.descKey)}
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {project.techKeys.map((tk) => (
              <span
                key={tk}
                className="text-xs px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
              >
                {t(tk)}
              </span>
            ))}
          </div>

          <div className="mt-4 flex items-center gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-teal-600 dark:text-teal-400 hover:underline"
            >
              {t("pages.home.projects.viewLive")}
            </a>

            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-500 dark:text-slate-300 hover:underline"
              >
                {t("pages.home.projects.viewRepo")}
              </a>
            )}
          </div>
        </div>
      </a>
    </article>
  );
}