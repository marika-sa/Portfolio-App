import styles from './Projects.module.css';
import Button from '../../UI/Button/Button';
import ProjectsCard from '../../UI/ProjectsCard/ProjectsCard';


export default function Projects() {
    return (
        <section className="flex flex-col items-center justify-center mt-20 mb-40">
            <div className={styles.titleContainer}>
                <div className={styles.headingBox}>
                    <h2 className={styles.heading}>My Projects</h2>
                    <p className={styles.description}>A selection of my personal projects and projects I completed during my software development apprenticeship.</p>
                </div>
                <div className={styles.buttonBox}>
                    <Button text="View All Projects" href="/projects" />
                </div>
            </div>
            <div className={`${styles.projectsContainer} width-full mt-10 flex`}>
                <div className={`${styles.cardBox}`}>
                    < ProjectsCard
                        backgroundImage="/images/payroll-app.png"
                        imageWidth={650}
                        imageHeight={200}
                        projectTitle="Payroll Manager"
                        href="/portfolio"
                        icons={[{ src: "/icons/python.png", alt: "Python" }]}
                        iconWidth={30}
                        iconHeight={30}
                    />
                    < ProjectsCard
                        backgroundImage="/images/banking-app.png"
                        imageWidth={650}
                        imageHeight={200}
                        projectTitle="Task Tracker"
                        href="/portfolio"
                        icons={[{ src: "/icons/java.png", alt: "Java" }, { src: "/icons/springboot.png", alt: "Spring Boot" }, { src: "/icons/mysql.png", alt: "MySQL" }]}
                        iconWidth={30}
                        iconHeight={30}
                    />
                </div>
                <div className={`${styles.cardBox} `}>
                    < ProjectsCard
                        backgroundImage="/images/banking-app.png"
                        imageWidth={650}
                        imageHeight={200}
                        projectTitle="Banking App"
                        href="/portfolio"
                        icons={[{ src: "/icons/csharp.png", alt: "C#" }, { src: "/icons/dotnet.png", alt: ".NET" }, { src: "/icons/mysql.png", alt: "MySQL" }]}
                        iconWidth={30}
                        iconHeight={30}
                    />
                    < ProjectsCard
                        backgroundImage="/images/messaging-app.png"
                        imageWidth={650}
                        imageHeight={200}
                        projectTitle="Messaging App"
                        href="/portfolio"
                        icons={[{ src: "/icons/csharp.png", alt: "C#" }, { src: "/icons/dotnet.png", alt: ".NET" }, { src: "/icons/mysql.png", alt: "MySQL" }]}
                        iconWidth={30}
                        iconHeight={30}
                    />
                </div>
            </div>
        </section>
    );
}