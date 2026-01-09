import styles from './Projects.module.css';
import ProjectsCard from '../../UI/ProjectsCard/ProjectsCard';
import React from 'react';

interface ProjectsProps {
    heading: React.ReactNode;
}

export default function Projects({ heading }: ProjectsProps) {
    return (
        <section className="flex flex-col items-center justify-center mt-20 mb-40">
            {heading}
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