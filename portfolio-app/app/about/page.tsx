import Heading from "../components/UI/Heading/Heading";
import ImageBox from "../components/UI/ImageBox/ImageBox";
import SkillsCard from "../components/UI/SkillsCard/SkillsCard";
import Copy from "../components/UI/Copy/Copy";

export default function Home() {
    return (
        <main className="flex w-full flex min-h-screen flex-col items-center space-evenly">
            <section className="flex flex-col items-center justify-center pt-0 mt-20 mb-20">
                <Heading title="About Me" subtitle="Learn more about my journey to become a software developer, the projects I've worked on, my work experience and my education." />
                <div className="pt-0 mt-20 mb-20">
                    <ImageBox image="/images/aquarium-me.jpg" alt="About Me Illustration" />
                </div>
                <Copy subtitle="My Journey" text={["From a young age, I was captivated by the world of technology. This fascination led me to pursue a career in software development, where I could combine my love for problem-solving with my passion for creating innovative solutions. Over the years, I've honed my skills through various projects and experiences, each contributing to my growth as a developer. I'm excited to continue this journey, embracing new challenges and opportunities to make a meaningful impact in the tech industry."]} />
                <Copy subtitle="My Experience" text={["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]} />
                <Copy subtitle="My Education" text={["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."]} />
                <SkillsCard />
            </section>
        </main>
    );
}