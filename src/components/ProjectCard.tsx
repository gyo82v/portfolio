import { useLanguage } from "../i18n/useLanguage";
import type { ProjectDataType } from "../types/dataTypes";
import { focusEffects, transitions } from "../styles/patterns";
import Pill from "./elements/Pill";

export default function ProjectCard({ project }: { project: ProjectDataType }) {
  const { t } = useLanguage();

  return (
    <article
      className={`
        group transform-gpu
        ${transitions}
        hover:scale-105 focus-within:scale-105
        hover:shadow-lg
        rounded-2xl overflow-hidden
        ring-1 ring-slate-200 dark:ring-slate-700
        focus-within:ring-2 focus-within:ring-[var(--accent)]
        bg-white dark:bg-slate-700
      `}
      aria-labelledby={`${project.id}-title`}
    >
      {/* Image (not a link) */}
      <div className="w-full h-60 overflow-hidden">
        <img
          src={project.image}
          alt={t(project.imageAltKey)}
          loading="lazy"
          className={`
            w-full h-full object-cover transform-gpu
            ${transitions}
            group-hover:scale-105 group-focus-within:scale-105
          `}
        />
      </div>

      <div className="p-4 sm:p-5">
        <h3
          id={`${project.id}-title`}
          className="text-lg font-semibold text-slate-900 dark:text-slate-100"
        >
          {t(project.titleKey)}
        </h3>

        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
          {t(project.descKey)}
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {project.techKeys.map(t => <Pill key={t} className="rounded-md">{t}</Pill>)}
        </div>

        {/* REAL LINKS */}
        <div className="mt-4 flex items-center gap-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              text-sm font-medium text-[var(--accent)]
              hover:underline
              ${focusEffects}
            `}
          >
            {t("pages.home.projects.viewLive")}
          </a>

          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                text-sm text-slate-600 dark:text-slate-300
                hover:underline
                ${focusEffects}
              `}
            >
              {t("pages.home.projects.viewRepo")}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}