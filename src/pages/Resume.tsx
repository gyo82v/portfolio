import { FiDownload, FiExternalLink } from "react-icons/fi";
import { useLanguage } from "../i18n/useLanguage";
import { certificates } from "../data/certificates.ts";
import { focusEffects, transitions } from "../styles/patterns";

export default function ResumePage() {
  const { t } = useLanguage();

  const resumePdf = "/assets/resume.pdf"; // replace with your PDF path

  return (
    <main className="py-16 bg-slate-50 dark:bg-slate-800 min-h-screen transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <header className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100">
              {t("resume.header.name")}
            </h1>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
              {t("resume.header.profession")} • {t("resume.header.location")}
            </p>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
              {t("resume.header.contactEmail")}
            </p>
          </div>

          <div className="flex gap-3">
            <a
              href={resumePdf}
              download
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--accent)] text-white ${transitions} ${focusEffects}`}
              aria-label={t("resume.download")}
            >
              <FiDownload className="w-4 h-4" />
              <span>{t("resume.download")}</span>
            </a>

            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-slate-800 ring-1 ring-slate-200 ${transitions} ${focusEffects}`}
              aria-label={t("resume.openInNewTab")}
            >
              <FiExternalLink className="w-4 h-4" />
              <span>{t("resume.open")}</span>
            </a>
          </div>
        </header>

        {/* Two-column content: left main, right sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT: main (experience, education) */}
          <section className="lg:col-span-2 space-y-8">
            {/* Profile */}
            <div>
              <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                {t("resume.profileTitle")}
              </h2>
              <p className="mt-2 text-slate-700 dark:text-slate-200">
                {t("resume.profileText")}
              </p>
            </div>

            {/* Experience (placeholder entries) */}
            <div>
              <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                {t("resume.experienceTitle")}
              </h2>

              <article className="mt-4">
                <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                  {t("resume.sampleJob.title")}
                </h3>
                <div className="text-sm text-slate-600 dark:text-slate-300">
                  <span>{t("resume.sampleJob.company")}</span> · <span>{t("resume.sampleJob.date")}</span>
                </div>
                <p className="mt-2 text-slate-700 dark:text-slate-200">
                  {t("resume.sampleJob.description")}
                </p>
              </article>

              {/* Add more experience entries here as needed */}
            </div>

            {/* Education */}
            <div>
              <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                {t("resume.educationTitle")}
              </h2>

              <div className="mt-4">
                <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                  {t("resume.sampleEdu.degree")}
                </h3>
                <div className="text-sm text-slate-600 dark:text-slate-300">
                  <span>{t("resume.sampleEdu.institution")}</span> · <span>{t("resume.sampleEdu.date")}</span>
                </div>
              </div>
            </div>
          </section>

          {/* RIGHT: sidebar (skills, languages, certificates) */}
          <aside className="space-y-6">
            {/* Skills */}
            <div className="bg-white dark:bg-slate-700 rounded-2xl p-4 ring-1 ring-slate-200 dark:ring-slate-700">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">{t("resume.skillsTitle")}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {["TypeScript", "React", "Tailwind CSS", "Node.js", "Firebase"].map((s) => (
                  <li key={s}>
                    <span className="inline-block px-3 py-1 text-xs rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200">
                      {s}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Languages */}
            <div className="bg-white dark:bg-slate-700 rounded-2xl p-4 ring-1 ring-slate-200 dark:ring-slate-700">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">{t("resume.languagesTitle")}</h3>
              <ul className="mt-3 text-sm text-slate-700 dark:text-slate-200">
                <li>English — C2</li>
                <li>Italiano — C1</li>
              </ul>
            </div>

            {/* Certificates */}
            <div className="bg-white dark:bg-slate-700 rounded-2xl p-4 ring-1 ring-slate-200 dark:ring-slate-700">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">{t("resume.certificatesTitle")}</h3>

              <ul className="mt-3 space-y-3">
                {certificates.map((c) => (
                  <li key={c.id} className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-sm font-medium text-slate-900 dark:text-slate-100">{c.title}</div>
                      <div className="text-xs text-slate-600 dark:text-slate-300">{c.issuer} · {c.date}</div>
                    </div>

                    <div className="flex items-center gap-2">
                      <a
                        href={c.file}
                        download
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[var(--accent)] text-white text-xs ${transitions} ${focusEffects}`}
                        aria-label={`${t("resume.downloadCertificate")} ${c.title}`}
                      >
                        <FiDownload className="w-3 h-3" />
                        <span>{t("resume.download")}</span>
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        {/* Small print */}
        <p className="mt-10 text-xs text-slate-500 dark:text-slate-400">
          {t("resume.note")}
        </p>
      </div>
    </main>
  );
}