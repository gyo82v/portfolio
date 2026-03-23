import { useLanguage } from "../i18n/useLanguage";

export default function ExperienceCard({name}:{name: string}){
    const {t} = useLanguage()
    return(
        <article className="mt-4">
                <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                  {t(`pages.resume.${name}.title`)}
                </h3>
                <div className="text-sm text-slate-600 dark:text-slate-300">
                  <span>{t(`pages.resume.${name}.company`)}</span> · <span>{t(`pages.resume.${name}.date`)}</span>
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-300">
                  {t(`pages.resume.${name}.location`)}
                </div>
                <p className="mt-2 text-slate-700 dark:text-slate-200">
                  {t(`pages.resume.${name}.description`)}
                </p>
        </article>
    )
}