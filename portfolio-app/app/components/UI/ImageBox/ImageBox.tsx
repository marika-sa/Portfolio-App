import styles from './ImageBox.module.css';

interface ImageBoxProps {
    image: string;
    alt?: string;
}

export default function ImageBox({ image, alt }: ImageBoxProps) {
    return (
        <div className={styles.imageBox}>
            <img src={image} alt={alt} className={styles.image} />
        </div>
    );
}