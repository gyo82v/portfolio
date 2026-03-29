import { useLanguage } from "../i18n/useLanguage";
import type { ProjectDataType } from "../types/dataTypes";
import { focusEffects, transitions } from "../styles/patterns";
import Pill from "./elements/Pill";

export default function ProjectCard({ project }: { project: ProjectDataType }) {
  const { t } = useLanguage();

  return (
    <article
      className={`
        group h-full overflow-hidden rounded-2xl
        border border-slate-200 bg-white shadow-sm
        hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl
        focus-within:-translate-y-1 focus-within:scale-[1.02]
        focus-within:ring-2 focus-within:ring-[var(--accent)]
        dark:border-slate-700 dark:bg-slate-700 dark:shadow-none
        ${transitions}
      `}
      aria-labelledby={`${project.id}-title`}
    >
      <div className="flex h-full flex-col">
        {/* Image (not a link) */}
        <div className="h-60 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
          <img
            src={project.image}
            alt={t(project.imageAltKey)}
            loading="lazy"
            className="h-full w-full object-cover transform-gpu transition-transform duration-500 ease-out group-hover:scale-105 group-focus-within:scale-105"
          />
        </div>

        <div className="flex flex-1 flex-col p-4 sm:p-5">
          <h3
            id={`${project.id}-title`}
            className="text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-100"
          >
            {t(project.titleKey)}
          </h3>

          <p className="mt-2 min-h-[4.5rem] text-sm leading-6 text-slate-600 dark:text-slate-300">
            {t(project.descKey)}
          </p>

          <div className="mt-4 flex  flex-wrap gap-2">
            {project.techKeys.map((tech) => (
              <Pill key={tech} className="rounded-md">
                {tech}
              </Pill>
            ))}
          </div>

          {/* REAL LINKS */}
          <div className="mt-auto flex items-center gap-4 pt-5">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                inline-flex items-center gap-1 text-sm font-medium
                text-[var(--accent)] underline-offset-4 hover:underline
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
                  inline-flex items-center gap-1 text-sm
                  text-slate-600 underline-offset-4 hover:underline
                  dark:text-slate-300
                  ${focusEffects}
                `}
              >
                {t("pages.home.projects.viewRepo")}
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}



/*
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
  */