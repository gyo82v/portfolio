import { useLanguage } from "../i18n/useLanguage";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function ProjectsSection() {
  const { t } = useLanguage();

  return (
    <section id="projects" aria-label={t("projects.sectionAria")} className="py-20 bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100">
            {t("projects.sectionTitle")}
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            {t("projects.sectionSubtitle")}
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}