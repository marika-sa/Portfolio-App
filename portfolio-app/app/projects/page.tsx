import Projects from "../components/Sections/Projects/Projects";
import Heading from "../components/UI/Heading/Heading";

export default function Home() {
    return (
        <section className="flex flex-col items-center justify-center mb-20">
            <Projects heading={<Heading title="Projects" subtitle="A selection of my personal projects and projects I completed during my software development apprenticeship." />} />
        </section>
    );
}