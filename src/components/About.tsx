import { useLanguage } from "../i18n/useLanguage";
import { focusEffects, transitions } from "../styles/patterns";
import {Link} from "react-router"
import CertificatesList from "../components/CertificatesList";
import { certificates } from "../data/certificates";
import AboutSection from "./AboutSection";
import { HiOutlineDocumentText } from "react-icons/hi";
import Pill from "./elements/Pill";

export default function About({
  skills = ["Next.js","React-vite","TypeScript","Git", "Tailwind CSS", "Firebase", "Javascript","HTML", "CSS"]
}: {skills? : string[]}) {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="py-20 bg-slate-50 dark:bg-slate-800 transition-colors duration-200 "
    >
      <div className="max-w-5xl mx-auto px-6 ">
        <header className="mb-8 text-center  ">
          <h2 id="about-title" className="text-2xl sm:text-3xl font-extrabold">
            {t("pages.home.about.title")}
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            {t("pages.home.about.subtitle")}
          </p>
        </header>

        <div className="flex flex-col gap-8 ">
          <div className=" text-slate-700 dark:text-slate-200 ">
            <p className="prose prose-sm sm:prose base dark:prose-invert max-w-none text-center">
              {t("pages.home.about.description")}
            </p>
          </div>

          <div className="flex flex-col gap-4 md:flex-row">
            <AboutSection title="pages.home.about.certsTitle">
              <CertificatesList certificates={certificates} showCount={3} />
            </AboutSection>
            <AboutSection title="pages.home.about.skillsTitle">
              <div className="flex flex-col gap-6 justify-between h-full">
              <ul className="flex flex-wrap gap-2 md:gap-3 md:mt-8" aria-label={t("pages.home.about.skillsTitle")}>
                {skills.map((skill) => (
                  <li key={skill}>
                    <Pill className={`md:text-sm md:px-6 md:py-3 `}>
                      {skill}
                    </Pill>
                  </li>
                ))}
              </ul>

              <div>
                <Link
                  to="resume"
                  className={`
                    inline-flex items-center justify-center w-full px-4 py-2 rounded-lg
                    bg-[var(--accent)] text-white font-medium
                    ${transitions} ${focusEffects}
                    hover:bg-opacity-90
                  `}
                >
                  <HiOutlineDocumentText className="h-5 w-5 mr-1" />
                  <span> {t("pages.home.about.resume")}</span>
                </Link>
              </div>
              </div>
            </AboutSection>
          </div>
        </div>
      </div>
    </section>
  );
}