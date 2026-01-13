import styles from './SkillsCard.module.css';
import Image from 'next/image';
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/animate-ui/components/animate/tooltip';
import { TooltipProvider } from '@/components/animate-ui/primitives/animate/tooltip';


export default function SkillsCard() {

    const backend = [
        { name: "Node.js", src: "/icons/nodejs.png" },
        { name: "C#", src: "/icons/csharp.png" },
        { name: ".NET", src: "/icons/dotnet.png" },
        { name: "Python", src: "/icons/python.png" },
        { name: "Java", src: "/icons/java.png" },
        { name: "Spring Boot", src: "/icons/springboot.png" },
    ];

    const frontend = [
        { name: "JavaScript", src: "/icons/javascript-1.png" },
        { name: "React", src: "/icons/react.png" },
        { name: "TypeScript", src: "/icons/typescript.png" },
        { name: "Next.js", src: "/icons/nextjs.png" },
    ];

    const other = [
        { name: "Docker", src: "/icons/docker.png" },
        { name: "MySQL", src: "/icons/mysql.png" },
        { name: "Playwright", src: "/icons/playwright.png" },
        { name: "Percy", src: "/icons/percy.png" },
    ];

    return (

        <div className={styles.skillsContainer}>
            <div className={styles.skillSection}>
                <h3>Frontend Tech</h3>
                <TooltipProvider>
                    <div className={`${styles.skills} basis-1/3 flex flex-wrap gap-4`}>
                        {frontend.map((skill) => (
                            <Tooltip key={skill.name}>
                                <TooltipTrigger asChild>
                                    <Image
                                        src={skill.src}
                                        alt={skill.name}
                                        width={70}
                                        height={70}
                                        className="transition-transform hover:scale-105"
                                    />
                                </TooltipTrigger>
                                <TooltipContent className="bg-[#B493EA] text-white border-none px-3 py-1.5 text-xs rounded-md shadow-xl shadow-[#B493EA]/30">
                                    <p>{skill.name}</p>
                                </TooltipContent>
                            </Tooltip>
                        ))}
                    </div>
                </TooltipProvider>
            </div>

            <div className={styles.skillSection}>
                <h3>Backend Tech</h3>
                <TooltipProvider>
                    <div className={`${styles.skills} basis-1/3 flex flex-wrap gap-4`}>
                        {backend.map((skill) => (
                            <Tooltip key={skill.name}>
                                <TooltipTrigger asChild>
                                    <Image
                                        src={skill.src}
                                        alt={skill.name}
                                        width={70}
                                        height={70}
                                        className="transition-transform hover:scale-105"
                                    />
                                </TooltipTrigger>
                                <TooltipContent className="bg-[#B493EA] text-white border-none px-3 py-1.5 text-xs rounded-md shadow-xl shadow-[#B493EA]/30">
                                    <p>{skill.name}</p>
                                </TooltipContent>
                            </Tooltip>
                        ))}
                    </div>
                </TooltipProvider>
            </div>

            <div className={styles.skillSection}>
                <h3>Other Tech</h3>
                <TooltipProvider>
                    <div className={`${styles.skills} basis-1/3 flex flex-wrap gap-4`}>
                        {other.map((skill) => (
                            <Tooltip key={skill.name}>
                                <TooltipTrigger asChild>
                                    <Image
                                        src={skill.src}
                                        alt={skill.name}
                                        width={70}
                                        height={70}
                                        className="transition-transform hover:scale-105"
                                    />
                                </TooltipTrigger>
                                <TooltipContent className="bg-[#B493EA] text-white px-3 py-1.5 text-xs rounded-md shadow-xl shadow-[#B493EA]/30">
                                    <p>{skill.name}</p>
                                </TooltipContent>
                            </Tooltip>
                        ))}
                    </div>
                </TooltipProvider>
            </div>
        </div>
    );
}