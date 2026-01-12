import styles from './ProjectHeading.module.css';
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/animate-ui/components/animate/tooltip';
import { TooltipProvider } from '@/components/animate-ui/primitives/animate/tooltip';

interface ProjectHeadingProps {
    projectTitle: string;
    description: string;
    tag: string;
    icons: { src: string; alt: string }[];
}

export default function ProjectHeading({ projectTitle, description, tag, icons }: ProjectHeadingProps) {
    return (
        <div className={styles.titleContainer}>
            <div className={styles.headingBox}>
                <h2 className={styles.heading}>{projectTitle}</h2>
                <div className={styles.tagBox}>
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