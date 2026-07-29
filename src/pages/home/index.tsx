import personal from "@portfolio/data/base.json";

import { Header } from "@portfolio/components/header";
import { MainLayout } from "@portfolio/components/main-layout";
import { Footer } from "@portfolio/components/footer";
import { ApplicationMenu } from "../menu";

export function Home() {
    const paragraphs = [
        "Hello, my name is Gabriel Morikawa!",
        "I am a Brazilian Software Engineer with a degree in Game Development, living in Japan.",
        "I've been learning programming since I was 16 years old and have experience in various programming languages and technologies. I like to learn new things and take on challenges.",
        "Nice to meet you!"
    ];

    return (
        <MainLayout
            header={
                <Header
                    japaneseName={personal.presentation.japaneseName}
                    fullname={personal.presentation.fullname}
                    title={personal.presentation.title}
                />
            }
            footer={
                <Footer quote={personal.presentation.quote} />
            }
            side={
                <ApplicationMenu />
            }
            main={
                <div className="p-5 md:p-10">
                {paragraphs.map((paragraph, index) => (
                    <p key={index} className="mb-2">
                        {paragraph}
                    </p>
                ))}
                </div>
            }
        />
    );
}
