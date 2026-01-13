import Heading from "../components/UI/Heading/Heading";
import ImageBox from "../components/UI/ImageBox/ImageBox";

export default function ComingSoon() {
    return (
        <main className="flex w-full flex min-h-screen flex-col items-center space-evenly">
            <section className="flex flex-col items-center justify-center pt-0 mt-20 mb-20">
                <Heading title="Coming Soon" subtitle="An exciting new project is on its way!" />
                <div className="pt-0 mt-20 mb-20">
                    <ImageBox image="/images/coming-soon-banner.png" alt="Colourful blurred bubble image with Coming soon text" />
                </div>
            </section>
        </main>
    );
}