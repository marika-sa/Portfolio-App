import Button from '../UI/Button/Button';
import styles from './Contact.module.css';

export default function Contact() {
    return (
        <section className={styles.contactSection}>
            <div className={styles.contactContainer}>
                <h2 className={styles.contactTitle}>Want to learn more about me or work together?</h2>
                <Button text="Send Me An Email" href="mailto:marika.sadowska00@gmail.com" />
            </div>
        </section>
    );
}