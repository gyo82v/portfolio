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
import { HiChevronRight } from "react-icons/hi";

export default function ResumePage() {
  const { t } = useLanguage();
  const experienceArr = ["maestriPasta", "deckchairs", "cdc"]
  const IntExperienceArr = ["farm", "hostel"]
  const skillsArr = ["Next.js","TypeScript", "React-vite", "Tailwind CSS","Firebase","Git","HTML","CSS"]

  const resumePdf = "/assets/resume.pdf"; 

  return (
    <div className="py-16 bg-slate-50 dark:bg-slate-800 min-h-screen transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <header className="mb-8 lg:mb-18 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-10">
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
        <Divider variant="section" />

        {/* Two-column content: left main, right sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 ">
          {/* LEFT: main (experience, education) */}
          <section className="lg:col-span-2 space-y-8 ">
            {/* Profile */}
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 text-center mb-4 lg:mb-6">
                {t("pages.resume.profileTitle")}
              </h2>
              <p className="mt-2 text-slate-700 dark:text-slate-200 text-center">
                {t("pages.resume.profileText")}
              </p>
            </div>
            <Divider variant="section" />

            {/* Experience */}
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 text-center mb-6 lg:mb-10">
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
              <div className="mb-8">
                <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 text-center mb-6 lg:mb-10">
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
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-6 lg:mb-8">
                  {t("pages.resume.certificatesMainTitle")}
                </h3>
                <CertificatesList certificates={certificates} />
              </div>
            </div>
            <Divider variant="section" />

            {/* international experience*/}
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 text-center mb-6 lg:mb-10">
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
            <div className="bg-white dark:bg-slate-700 rounded-2xl p-4 lg:p-6 ring-1 ring-slate-200 dark:ring-slate-700">
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-4">
                {t("pages.resume.skillsTitle")}
              </h3>
              <ul className="flex flex-wrap gap-2 lg:gap-3">
                {skillsArr.map(s => <li key={s}><Pill className="lg:px-5 lg:py-2">{s}</Pill></li>)}
              </ul>
            </div>

            {/* Languages */}
            <div className="bg-white dark:bg-slate-700 rounded-2xl p-4 lg:p-6 ring-1 ring-slate-200 dark:ring-slate-700">
              <h3 className=" font-semibold text-slate-900 dark:text-slate-100 mb-4">
                {t("pages.resume.languagesTitle")}
              </h3>
              <ul className="text-sm text-slate-700 dark:text-slate-200 ">
                <li className="flex gap-3 mb-4">
                   <HiChevronRight className="text-teal-500 mt-1 shrink-0" />
                  <div className="flex flex-col gap-3">
                    {t("pages.resume.languageEnglish")}
                    <CertificatesList certificates={langCertificates} />
                  </div>
                </li>
                <li className="flex gap-3">
                  <HiChevronRight className="text-teal-500 mt-1 shrink-0" />
                  <span>{t("pages.resume.languageItalian")}</span>
                </li>
              </ul>
            </div>

            {/* Certificates */}
            <div className="bg-white dark:bg-slate-700 rounded-2xl p-4 lg:p-6 ring-1 ring-slate-200 dark:ring-slate-700">
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-4 lg:mb-6">
                {t("pages.resume.certificatesTitle")}
              </h3>
              <CertificatesList 
                certificates={additionalCertificates} 
                className="py-6 lg:py-8"
                listClassName="lg:gap-6"
              />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}