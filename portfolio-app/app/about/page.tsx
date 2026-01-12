import Heading from "../components/UI/Heading/Heading";
import ImageBox from "../components/UI/ImageBox/ImageBox";
import SkillsCard from "../components/UI/SkillsCard/SkillsCard";
import Copy from "../components/UI/Copy/Copy";

export default function Home() {
    return (
        <main className="flex w-full flex min-h-screen flex-col items-center space-evenly">
            <section className="flex flex-col items-center justify-center pt-0 mt-20 mb-20">
                <Heading title="About Me" subtitle="Thanks for stopping by. Read below to learn more about my software development journey, the projects I’ve worked on, my work experience and education." />
                <div className="pt-0 mt-20 mb-20">
                    <ImageBox image="/images/aquarium-me.jpg" alt="About Me Illustration" />
                </div>
                <Copy subtitle="My Journey" text={["From a young age, I was captivated by the world of technology. This fascination led me to pursue a career in software development, where I could combine my love for problem-solving with my passion for creating innovative solutions. Over the years, I've honed my skills through various projects and experiences, each contributing to my growth as a developer. I'm excited to continue this journey, embracing new challenges and opportunities to make a meaningful impact in the tech industry."]} />
                <Copy subtitle="My Experience" text={["My journey began in 2021 when I applied to the FIT Software Development Apprenticeship programme, and shortly after applying I was interviewing to join Vaultree for the 2 year programme. After a successful application and interview, in February 2022 I began the apprenticeship where I learned how to code but also how to design and test software. During this programme I had the opportunity to learn so many new technologies and use them hands-on at Vaultree. ", "In 2024 after graduating and completing the Software Development Apprenticeship, I got offered a full-time position at Vaultree where I continued to work for the next year and half. During this time I worked on all things design and got the opportunity to work on the implementation of a massive project, gaining valuable experience in complex software design and React app development.", "I am currently looking for a new opportunity in Software and Frontend Engineering fields, to apply my 3 years of development experience, looking forward to taking on a new challenge to further develop my skills and learn from other great developers within the field."]} />
                <Copy subtitle="My Education" text={["After completing the Software Development Apprenticeship in 2024 I received a Level 6 NFQ Advanced Certificate in Computer Programming from Kerry College Ireland. Also during the apprenticeship, I received an IT Specialist Java Certification with Pearson Vue in 2023.", "In December 2025, I completed a Level 7 NFQ Diploma in Applied Software Development at CCT College Dublin (award pending), modules included Programming & Mathematics fundamentals, Fullstack Web & Mobile development, Strategic Business & Professional development, and Software Analysis, Design & development."]} />
                <SkillsCard />
            </section>
        </main>
    );
}