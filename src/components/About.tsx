import { useLanguage } from "../i18n/useLanguage";
import { focusEffects, transitions } from "../styles/patterns";
import {Link} from "react-router"
import CertificatesList from "../components/CertificatesList";
import { certificates } from "../data/certificates";

export default function About({
  skills = ["TypeScript", "React-vite", "Tailwind CSS", "Next.js", "Firebase", "CSS"]
}: {skills? : string[]}) {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="py-20 bg-slate-50 dark:bg-slate-800 transition-colors duration-200 border-2 border-pink-500"
    >
      <div className="max-w-5xl mx-auto px-6 border-2 border-green-500">
        <header className="mb-8 text-center  border-2 border-sky-500">
          <h2 id="about-title" className="text-2xl sm:text-3xl font-extrabold">
            {t("pages.home.about.title")}
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            {t("pages.home.about.subtitle")}
          </p>
        </header>

        <div className="flex flex-col gap-8  border-2 border-yellow-500">
          <div className=" text-slate-700 dark:text-slate-200 border-2 border-red-500">
            <p className="prose prose-sm sm:prose base dark:prose-invert max-w-none text-center">
              {t("pages.home.about.description")}
            </p>
          </div>

          <div className="flex flex-col gap-4 md:flex-row border-2 border-fuchsia-800">
             <CertificatesList certificates={certificates} showCount={3} />
            <div className="bg-white dark:bg-slate-700 rounded-2xl p-5 shadow-sm ring-1 ring-slate-200 dark:ring-slate-700">
              <h3 className="text-sm font-semibold ">
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
          </div>
        </div>
      </div>
    </section>
  );
}