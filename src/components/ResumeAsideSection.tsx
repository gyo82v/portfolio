import { useLanguage } from "../i18n/useLanguage";

type Props = {
    title: string
    children: React.ReactNode
}

export default function ResumeAsideSection({title, children}:Props){
    const {t} = useLanguage()
    return(
        <section className={`bg-white dark:bg-slate-700 rounded-2xl p-4 lg:p-6 
                             ring-1 ring-slate-200 dark:ring-slate-700`}>
            <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-6">
                {t(title)}
            </h3>
            {children}
        </section>
    )
}