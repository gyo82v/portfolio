import { FiDownload, FiExternalLink } from "react-icons/fi";
import { useLanguage } from "../i18n/useLanguage";
import { certificates } from "../data/certificates.ts";
import { additionalCertificates } from "../data/additionalCertificates.ts";
import { langCertificates } from "../data/langCertificates.ts";
import { focusEffects, transitions } from "../styles/patterns";
import CertificatesList from "../components/CertificatesList";
import ExperienceCard from "../components/ExperienceCard.tsx";
import IntExperienceCard from "../components/IntExperienceCard.tsx";
import Pill from "../components/elements/Pill.tsx";
import Divider from "../components/separators/Divider.tsx";

export default function ResumePage() {
  const { t } = useLanguage();
  const experienceArr = ["maestriPasta", "deckchairs", "cdc"]
  const IntExperienceArr = ["farm", "hostel"]
  const skillsArr = ["Next.js","TypeScript", "React-vite", "Tailwind CSS","Firebase","Git","HTML","CSS"]

  const resumePdf = "/assets/resume.pdf"; 

  return (
    <div className="py-16 bg-slate-50 dark:bg-slate-800 min-h-screen transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <header className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100">
              Giorgio Valle
            </h1>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
              {t("pages.resume.header.profession")} • {t("pages.resume.header.location")}
            </p>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
              gyo82v@gmail.com
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
          {/* LEFT: main (experience, education) */}
          <section className="lg:col-span-2 space-y-8 ">
            {/* Profile */}
            <div>
              <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                {t("pages.resume.profileTitle")}
              </h2>
              <p className="mt-2 text-slate-700 dark:text-slate-200">
                {t("pages.resume.profileText")}
              </p>
            </div>
            <Divider variant="section" />

            {/* Experience */}
            <div>
              <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                {t("pages.resume.experienceTitle")}
              </h2>
              {experienceArr.map((e, i) => (
                <div key={e}>
                  <ExperienceCard name={e} />
                  {i < experienceArr.length - 1 && (<Divider variant="item" />)}
                </div>
              ))}
            </div>
            <Divider variant="section"/>

            {/* Education */}
            <div>
              <div>
                <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  {t("pages.resume.educationTitle")}
                </h2>
                <div className="mt-4">
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                    {t("pages.resume.school.degree")}
                  </h3>
                  <div className="text-sm text-slate-600 dark:text-slate-300">
                    <span>{t("pages.resume.school.institution")}</span> · <span>{t("pages.resume.school.date")}</span>
                  </div>
                </div>
              </div>
              <Divider variant="item" />
              <div>
                <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  {t("pages.resume.certificatesMainTitle")}
                </h2>
                <CertificatesList certificates={certificates} />
              </div>
            </div>
            <Divider variant="section" />

            {/* international experience*/}
            <div>
              <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                {t("pages.resume.internationalExperienceTitle")}
              </h2>
              {IntExperienceArr.map((e, i) => (
                <div key={e}>
                  <IntExperienceCard name={e} />
                  {i < IntExperienceArr.length -1 && (<Divider variant="item" />)}
                </div>
              ))}
            </div>
          </section>

          {/* RIGHT: sidebar (skills, languages, certificates) */}
          <aside className="space-y-6 ">
            {/* Skills */}
            <div className="bg-white dark:bg-slate-700 rounded-2xl p-4 ring-1 ring-slate-200 dark:ring-slate-700">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">{t("pages.resume.skillsTitle")}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {skillsArr.map(s => <li key={s}><Pill>{s}</Pill></li>)}
              </ul>
            </div>

            {/* Languages */}
            <div className="bg-white dark:bg-slate-700 rounded-2xl p-4 ring-1 ring-slate-200 dark:ring-slate-700">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">{t("pages.resume.languagesTitle")}</h3>
              <ul className="mt-3 text-sm text-slate-700 dark:text-slate-200">
                <li>
                  {t("pages.resume.languageEnglish")}
                  <CertificatesList certificates={langCertificates} />
                </li>
                <li>{t("pages.resume.languageItalian")}</li>
              </ul>
            </div>

            {/* Certificates */}
            <div className="bg-white dark:bg-slate-700 rounded-2xl p-4 ring-1 ring-slate-200 dark:ring-slate-700">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">{t("pages.resume.certificatesTitle")}</h3>
              <CertificatesList certificates={additionalCertificates} />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}