import { useLanguage } from "../i18n/useLanguage";

export default function Home(){
    const { t } = useLanguage();
    return(
        <section>
            <p>{t("pages.home.title")}</p>
        </section>
    )
}