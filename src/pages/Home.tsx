import Hero from "../components/Hero";
import ProjectsSection from "../components/ProjectsSection";
import About from "../components/About";

export default function Home(){
    return(
        <section>
            <Hero />
            <ProjectsSection />
            <About />
        </section>
    )
}