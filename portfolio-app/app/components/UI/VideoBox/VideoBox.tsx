import styles from './VideoBox.module.css';

interface VideoBoxProps {
    videoLink: string;
    description?: string;
}

export default function VideoBox({ videoLink, description }: VideoBoxProps) {
    return (
        <div className={styles.videoBox}>
            <iframe src={videoLink} title={description} className={styles.video} allowFullScreen loading="lazy"></iframe>
        </div>
    );
}