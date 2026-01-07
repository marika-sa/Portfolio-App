import Link from 'next/link';
import Image from 'next/image';
import styles from './Socials.module.css';

interface SocialsProps {
    width: number;
    height: number;
}

export default function Socials({ width, height }: SocialsProps) {
    return (
        <div className={styles.socials}>
            <Link href="https://github.com/marika-sa" className={styles.link}>
                <Image src="/icons/github-icon.png" alt="GitHub" width={width} height={height} />
            </Link>
            <Link href="https://www.linkedin.com/in/marika-sadowska/" className={styles.link}>
                <Image src="/icons/linkedin-icon.png" alt="LinkedIn" width={width} height={height} />
            </Link>
            <Link href="mailto:marika.sadowska00@gmail.com" className={styles.link}>
                <Image src="/icons/email-icon.png" alt="Email" width={width} height={height} />
            </Link>
        </div>
    );
}