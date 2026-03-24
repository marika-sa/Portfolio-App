import styles from './ProjectHeading.module.css';
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/animate-ui/components/animate/tooltip';
import { TooltipProvider } from '@/components/animate-ui/primitives/animate/tooltip';
import Link from 'next/link';
import Image from 'next/image';

interface ProjectHeadingProps {
    projectTitle: string;
    description: string;
    tag: string;
    icons: { src: string; alt: string }[];
    github?: string;
}

export default function ProjectHeading({ projectTitle, description, tag, icons, github }: ProjectHeadingProps) {
    return (
        <div className={styles.titleContainer}>
            <div className={styles.headingBox}>
                <h2 className={styles.heading}>{projectTitle}</h2>
                <div className={styles.tagBox}>
                    {github ? <Link href={github} className={styles.link}>
                        <Image src="/icons/github-icon.png" alt="GitHub" width={45} height={45} />
                    </Link> : <p>No Github</p>}
                    <span className={styles.tag}>{tag}</span>
                    <TooltipProvider>
                        <div className={styles.icons}>
                            {icons.map((icon, index) => (
                                <Tooltip key={index}>
                                    <TooltipTrigger asChild>
                                        <img key={index} src={icon.src} alt={icon.alt} className={styles.icon} width={35} height={35} />
                                    </TooltipTrigger>
                                    <TooltipContent className="bg-[#B493EA] text-white border-none px-3 py-1.5 text-xs rounded-md shadow-xl shadow-[#B493EA]/30">
                                        <p>{icon.alt}</p>
                                    </TooltipContent>
                                </Tooltip>
                            ))}
                        </div>
                    </TooltipProvider>
                </div>
            </div>
            <div className={styles.descriptionBox}>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    );
}