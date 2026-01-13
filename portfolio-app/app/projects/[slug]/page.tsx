import { projects } from "@/app/data/projects";
import { notFound } from "next/navigation";
import VideoBox from "../../components/UI/VideoBox/VideoBox";
import styles from "./page.module.css";
import ProjectHeading from "../../components/UI/ProjectHeading/ProjectHeading";
import Copy from "../../components/UI/Copy/Copy";
import Link from "next/link";

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

interface ProjectPageProps {
    params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <section className="flex flex-col items-center justify-center pt-0 mt-20 mb-20">
            <div className={"self-start" + " " + styles.backContainer}>
                <Link href="/projects">
                    <img src="/icons/left-arrow.png" alt="Back to Projects" className={"inline-block w-3 h-3 mr-3"} />Projects
                </Link>
            </div>
            <ProjectHeading projectTitle={project.title} description={project.description} tag={project.tag} icons={project.icons} />
            <div className="pt-0 mt-20 mb-20">
                <VideoBox videoLink={project.video} description={project.title} />
            </div>
            <div>
                <Copy subtitle="Project Requirements" text={project.requirements} />
                <Copy subtitle="Development Process" text={project.process} />
                <Copy subtitle="Outcomes" text={project.outcomes} />
            </div>
        </section>
    );
}