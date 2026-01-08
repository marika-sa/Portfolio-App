import styles from './Skills.module.css';
import Heading from '../../UI/Heading/Heading';
import SkillsCard from '../../UI/SkillsCard/SkillsCard';


export default function Skills() {
    return (
        <section className="flex flex-col items-center justify-center mt-40 mb-40">
            <Heading title="My Skills" subtitle="A showcase of my developer skills that I acquired over the last 3 years of my experience - Professional, Apprenticeship, and College." />
            <SkillsCard />
        </section>
    );
}