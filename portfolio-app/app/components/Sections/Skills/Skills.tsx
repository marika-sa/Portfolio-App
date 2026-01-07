import styles from './Skills.module.css';
import Image from 'next/image';
import Heading from '../../UI/Heading/Heading';

export default function Skills() {
    return (
        <section className="flex flex-row items-center justify-center mt-40 mb-40">
            <Heading title="My Skills" subtitle="A showcase of my developer skills that I acquired over the last 3 years of my experience - Professional, Apprenticeship, and College." />
        </section>
    );
}