import { FiMail } from "react-icons/fi";
import { useLanguage } from "../i18n/useLanguage";
import { focusEffects, transitions } from "../styles/patterns";

type Props = {
  email?: string;
};

export default function Contact({ email = "gyo82v@gmail.com" }: Props) {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="py-20 bg-white dark:bg-slate-900 transition-colors duration-200"
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2
          id="contact-title"
          className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100"
        >
          {t("pages.home.contact.title")}
        </h2>

        <p className="mt-3 text-slate-600 dark:text-slate-300">
          {t("pages.home.contact.description")}
        </p>

        <div className="mt-8">
          <a
            href={`mailto:${email}`}
            className={`
              inline-flex items-center gap-3 px-6 py-3 rounded-xl
              bg-slate-100 dark:bg-slate-800
              text-slate-900 dark:text-slate-100
              font-medium
              ring-1 ring-slate-200 dark:ring-slate-700
              hover:bg-slate-200 dark:hover:bg-slate-700
              ${transitions} ${focusEffects}
            `}
            aria-label={t("pages.home.contact.emailAria")}
          >
            <FiMail className="w-5 h-5" aria-hidden="true" />
            <span>{t("pages.home.contact.emailCta")}</span>
          </a>
        </div>
      </div>
    </section>
  );
}