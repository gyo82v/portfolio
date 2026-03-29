import Hero from "../components/Hero";
import ProjectsSection from "../components/ProjectsSection";
import About from "../components/About";
import Contact from "../components/Contact";
import Divider from "../components/separators/Divider";

export default function Home(){
    return(
        <section>
            <Hero />
            <Divider variant="section" />
            <ProjectsSection />
            <Divider variant="section" />
            <About />
            <Divider variant="section" />
            <Contact />
        </section>
    )
}