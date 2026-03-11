import { useLanguage } from "../i18n/useLanguage";
import Hero from "../components/Hero";

export default function Home(){
    const { t } = useLanguage();
    return(
        <section>
            <Hero />
        </section>
    )
}