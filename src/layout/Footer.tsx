import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { useLanguage } from "../i18n/useLanguage";
import { focusEffects, transitions } from "../styles/patterns";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 transition-colors duration-200">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Giorgio Valle
            </p>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
              {t("footer.subtitle")}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`mailto:gyo82v@gmail.com`}
              className={`
                inline-flex items-center justify-center rounded-full p-3
                bg-white dark:bg-slate-700
                text-slate-700 dark:text-slate-200
                ring-1 ring-slate-200 dark:ring-slate-600
                hover:bg-slate-100 dark:hover:bg-slate-600
                ${transitions} ${focusEffects}
              `}
              aria-label={t("footer.emailAria")}
            >
              <FiMail className="h-5 w-5" aria-hidden="true" />
            </a>

            <a
              href="https://www.linkedin.com/in/giorgio-valle-051842353/"
              target="_blank"
              rel="noopener noreferrer"
              className={`
                inline-flex items-center justify-center rounded-full p-3
                bg-white dark:bg-slate-700
                text-slate-700 dark:text-slate-200
                ring-1 ring-slate-200 dark:ring-slate-600
                hover:bg-slate-100 dark:hover:bg-slate-600
                ${transitions} ${focusEffects}
              `}
              aria-label={t("footer.linkedinAria")}
            >
              <FaLinkedinIn className="h-5 w-5" aria-hidden="true" />
            </a>

            <a
              href="https://github.com/gyo82v"
              target="_blank"
              rel="noopener noreferrer"
              className={`
                inline-flex items-center justify-center rounded-full p-3
                bg-white dark:bg-slate-700
                text-slate-700 dark:text-slate-200
                ring-1 ring-slate-200 dark:ring-slate-600
                hover:bg-slate-100 dark:hover:bg-slate-600
                ${transitions} ${focusEffects}
              `}
              aria-label={t("footer.githubAria")}
            >
              <FaGithub className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-slate-200 dark:border-slate-700 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            © {year} Giorgio Valle
          </p>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            {t("footer.note")}
          </p>
        </div>
      </div>
    </footer>
  );
}