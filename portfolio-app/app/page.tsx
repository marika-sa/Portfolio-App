import Hero from "./components/Sections/Hero/Hero";
import Skills from "./components/Sections/Skills/Skills";
import Projects from "./components/Sections/Projects/Projects";
import ButtonHeading from "./components/UI/ButtonHeading/ButtonHeading";

export default function Home() {
  return (
    <main className="flex w-full flex min-h-screen flex-col items-center space-evenly">
      <Hero />
      <Skills />
      <Projects heading={<ButtonHeading projectTitle="Projects" description="A selection of my personal projects and projects I completed during my software development apprenticeship." buttonText="View All Projects" buttonHref="/projects" />} />
    </main>
  );
}
