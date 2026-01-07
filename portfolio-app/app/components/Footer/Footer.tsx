import styles from './Footer.module.css';
import Socials from '../UI/Socials/Socials';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p className={styles.copy}>
                © {new Date().getFullYear()} Marika Sadowska. All rights reserved.
            </p>
            <Socials width={30} height={30} />
        </footer>
    );
}