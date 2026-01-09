import styles from './ProjectsCard.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/animate-ui/components/animate/tooltip';
import { TooltipProvider } from '@/components/animate-ui/primitives/animate/tooltip';

interface ButtonProps {
    projectTitle: string;
    href: string;
    icons: { src: string; alt: string }[];
    iconWidth: number;
    iconHeight: number;
    backgroundImage: string;
    imageWidth: number;
    imageHeight: number;
}

export default function ProjectsCard({ projectTitle, href, iconWidth, iconHeight, icons, backgroundImage, imageWidth, imageHeight }: ButtonProps) {
    return (
        <Link href={href}>
            <div className={styles.cardContainer}>
                <Image
                    src={backgroundImage}
                    width={imageWidth}
                    height={imageHeight}
                    className={styles.card}
                    alt="Project Image" />
                <div className={styles.titleIconContainer}>
                    <div className={styles.title}>
                        {projectTitle}
                    </div>
                    <TooltipProvider>
                        <div className={styles.icons}>
                            {icons.map((icon, index) => (
                                <Tooltip key={index}>
                                    <TooltipTrigger asChild>
                                        <Image key={index} src={icon.src} alt={icon.alt} width={iconWidth} height={iconHeight} />
                                    </TooltipTrigger>
                                    <TooltipContent className="bg-[#B493EA] text-white border-none px-3 py-1.5 text-xs rounded-md shadow-xl shadow-[#B493EA]/30">
                                        <p>{icon.alt}</p>
                                    </TooltipContent>
                                </Tooltip>
                            ))}</div>
                    </TooltipProvider>
                </div>
            </div>
        </Link >
    );
}