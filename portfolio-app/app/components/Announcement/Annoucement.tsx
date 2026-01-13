'use client'

import { useState } from 'react';
import styles from './Announcement.module.css';

export default function Announcement() {
    const [isVisable, setIsVisable] = useState(true);

    if (!isVisable) return null;

    return (
        <div className={styles.bannerContainer}>
            <p className={styles.text}>Fully Responsive Website Version Coming Soon...</p>
            <button className={styles.closeBtn} onClick={() => setIsVisable(false)} aria-label='Close Annoucement'>X</button>
        </div>
    );
}