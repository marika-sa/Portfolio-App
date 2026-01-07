import Button from '../../UI/Button/Button';
import Socials from '../../UI/Socials/Socials';
import styles from './Hero.module.css';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="flex flex-row items-center justify-center pt-0 mt-40 mb-20">
            <div className={`${styles.heroCopyContent} basis-1/2`}>
                <h1 className={styles.heroTitle}>Hi there, I am <span className={styles.highlight}>Marika Sadowska</span> A Software Engineer with an eye for Design.</h1>
                <Button text="View My Projects" href="/projects" />
                <Socials width={40} height={40} />
            </div>
            <div className="basis-1/2 flex justify-end">
                <Image
                    src="/images/profile_image.png"
                    alt="Hero Image"
                    width={400}
                    height={400}
                    className={styles.heroImage}
                />
            </div>
        </section>
    );
}