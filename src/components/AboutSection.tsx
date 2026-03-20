import { useLanguage } from "../i18n/useLanguage";
import type { ReactNode } from "react"

type Props = {
    title : string
    children: ReactNode
}

export default function AboutSection({title, children}:Props){
    const {t} = useLanguage()
    return(
        <section className={`flex flex-col md:flex-1 p-5 rounded-2xl 
                             bg-white dark:bg-slate-700 shadow-sm ring-1 ring-slate-200 dark:ring-slate-70`}>
            <h3 className="text-sm font-semibold mb-6 md:text-lg">{t(title)}</h3>
            <div className="flex-1">
                {children}
            </div>
        </section>
    )

}