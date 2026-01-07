import Hero from "./components/Sections/Hero/Hero";
import Skills from "./components/Sections/Skills/Skills";

export default function Home() {
  return (
    <main className="flex w-full flex min-h-screen flex-col items-center space-evenly">
      <Hero />
      <Skills />
    </main>
  );
}
