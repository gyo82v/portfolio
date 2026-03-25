import  ProjectCard  from "../components/ProjectCard";
import { useLanguage } from "../i18n/useLanguage";
import { projects } from "../data/projects";
import { smallProjects } from "../data/smallProjects";

type ProjectType = "website" | "game" | "ai";

type CategorizedProject = (typeof smallProjects)[number] & {
  type: ProjectType;
};

const sectionOrder: ProjectType[] = ["website", "game", "ai"];

const sectionMeta: Record<
  ProjectType,
  {
    titleKey: string;
    descriptionKey: string;
  }
> = {
  website: {
    titleKey: "pages.projects.sections.website.title",
    descriptionKey: "pages.projects.sections.website.description",
  },
  game: {
    titleKey: "pages.projects.sections.games.title",
    descriptionKey: "pages.projects.sections.games.description",
  },
  ai: {
    titleKey: "pages.projects.sections.ai.title",
    descriptionKey: "pages.projects.sections.ai.description",
  },
};

function groupProjectsByType(items: CategorizedProject[]) {
  return items.reduce<Record<ProjectType, CategorizedProject[]>>(
    (acc, project) => {
      const type = project.type;

      if (!acc[type]) {
        acc[type] = [];
      }

      acc[type].push(project);
      return acc;
    },
    {
      website: [],
      game: [],
      ai: [],
    }
  );
}

export default function ProjectsPage() {
  const { t } = useLanguage();
  const typedSmallProjects = smallProjects as CategorizedProject[];
  const groupedProjects = groupProjectsByType(typedSmallProjects);

  const featuredProjects = projects;

  return (
    <main className="min-h-screen">
      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-10 lg:py-16">
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

      <section className="mx-auto w-full max-w-6xl px-4 pb-12 sm:px-6 lg:px-10 lg:pb-16">
        <div className="mb-6 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            {t("pages.projects.featured.title")}
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300 sm:text-base">
            {t("pages.projects.featured.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 lg:px-10 lg:pb-20">
        <div className="mb-8 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            {t("pages.projects.other.title")}
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300 sm:text-base">
            {t("pages.projects.other.description")}
          </p>
        </div>

        <div className="space-y-12">
          {sectionOrder.map((type) => {
            const items = groupedProjects[type];

            if (items.length === 0) return null;

            return (
              <section key={type} className="space-y-5">
                <div className="max-w-3xl">
                  <h3 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-2xl">
                    {t(sectionMeta[type].titleKey)}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300 sm:text-base">
                    {t(sectionMeta[type].descriptionKey)}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-2">
                  {items.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 lg:px-10 lg:pb-24">
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
    </main>
  );
}

