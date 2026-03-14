import Hero from "../components/Hero";
import ProjectsSection from "../components/ProjectsSection";
import About from "../components/About";
import Contact from "../components/Contact";

export default function Home(){
    return(
        <section>
            <Hero />
            <ProjectsSection />
            <About />
            <Contact />
        </section>
    )
}