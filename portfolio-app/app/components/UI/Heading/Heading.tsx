import styles from './Heading.module.css';

interface HeadingProps {
    title: string;
    subtitle: string;
}

export default function Heading({ title, subtitle }: HeadingProps) {
    return (
        <div className="text-center max-w-3xl">
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.subtitle}>
                {subtitle}
            </p>
        </div>
    );
}