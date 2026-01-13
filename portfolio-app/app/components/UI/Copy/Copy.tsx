import styles from './Copy.module.css';

interface CopyProps {
    subtitle: string;
    text: string[];
}

export default function Copy({ subtitle, text }: CopyProps) {
    return (
        <div className=" mb-15 px-5 max-w-4xl">
            <h3 className={styles.subtitle}>{subtitle}</h3>
            {text.map((sentence, index) => (
                <p key={index} className={styles.text}>
                    {sentence}
                </p>
            ))}
        </div>
    );
}