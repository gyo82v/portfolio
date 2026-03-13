import { useLanguage } from "../i18n/useLanguage";
import { focusEffects, transitions } from "../styles/patterns";
import {Link} from "react-router"

type Props = {
  resumeHref?: string;
  skills?: string[];
};

export default function About({
  skills = ["TypeScript", "React-vite", "Tailwind CSS", "Next.js", "Firebase", "CSS"]
}: Props) {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="py-20 bg-slate-50 dark:bg-slate-800 transition-colors duration-200"
    >
      <div className="max-w-5xl mx-auto px-6">
        <header className="mb-8 text-center md:text-left">
          <h2 id="about-title" className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100">
            {t("pages.home.about.title")}
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            {t("pages.home.about.subtitle")}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Left: description (takes 2 cols on md+) */}
          <div className="md:col-span-2 text-slate-700 dark:text-slate-200">
            <p className="prose prose-sm sm:prose base dark:prose-invert max-w-none">
              {t("pages.home.about.description.paragraph1")}
            </p>

            <div className="mt-4 prose prose-sm sm:prose base dark:prose-invert max-w-none">
              <p>{t("pages.home.about.description.paragraph2")}</p>
            </div>
          </div>

          {/* Right: skills + resume */}
          <aside className="md:col-span-1">
            <div className="bg-white dark:bg-slate-700 rounded-2xl p-5 shadow-sm ring-1 ring-slate-200 dark:ring-slate-700">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                {t("pages.home.about.skillsTitle")}
              </h3>

              <ul className="mt-3 flex flex-wrap gap-2" aria-label={t("pages.home.about.skillsTitle")}>
                {skills.map((skill) => (
                  <li key={skill}>
                    <span
                      className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
                      aria-hidden="true"
                    >
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-5">
                <Link
                  to="resume"
                  className={`
                    inline-flex items-center justify-center w-full px-4 py-2 rounded-lg
                    bg-[var(--accent)] text-white font-medium
                    ${transitions} ${focusEffects}
                    hover:bg-opacity-90
                  `}
                >
                  {t("pages.home.about.resume")}
                </Link>

                <p className="mt-3 text-xs text-slate-500 dark:text-slate-300">
                  {t("pages.home.about.resumeHint")}
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}