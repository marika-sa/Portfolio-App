'use client';

import Link from 'next/link';
import styles from './Nav.module.css';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.links}>
                    <Link href="/" className={`${styles.link} ${pathname === '/' ? styles.active : ''}`}>Home</Link>
                    <Link href="/about" className={`${styles.link} ${pathname === '/about' ? styles.active : ''}`}>About</Link>
                    <Link href="/projects" className={`${styles.link} ${pathname.startsWith('/projects') ? styles.active : ''}`}>Projects</Link>
                </div>
            </nav>
        </header>
    );
}