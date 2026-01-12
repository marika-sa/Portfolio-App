import Button from '../Button/Button';
import styles from './ButtonHeading.module.css';

interface ButtonHeadingProps {
    projectTitle: string;
    description: string;
    buttonText: string;
    buttonHref: string;
}

export default function ButtonHeading({ projectTitle, description, buttonText, buttonHref }: ButtonHeadingProps) {
    return (
        <div className={styles.titleContainer}>
            <div className={styles.headingBox}>
                <h2 className={styles.heading}>{projectTitle}</h2>
                <p className={styles.description}>{description}</p>
            </div>
            <div className={styles.buttonBox}>
                <Button text={buttonText} href={buttonHref} />
            </div>
        </div>
    );
}