import { MainContainer } from "@portfolio/components/main-container";
import { Paragraph } from "@portfolio/components/paragraph";

import { Contact } from "./contact";
import { HomeSection } from "./home-section";

export function Home() {
    const paragraphs = [
        "Hello! I am a Brazilian Software Engineer with a degree in Game Development, living in Japan.",
        "I've been learning programming since I was 16 years old and have been learning mainly about web development.",
        "I have experience in both front-end and back-end development, and I enjoy working with modern web technologies.",
    ];

    return (
        <MainContainer>
            {paragraphs.map((paragraph, index) => (
                <p key={index} className="mb-2">
                    {paragraph}
                </p>
            ))}

            <HomeSection title="Send me a hello!">
                <Paragraph className="mb-4">
                    Feel free to reach out to me via the contacts below.
                </Paragraph>

                <Contact />
            </HomeSection>
        </MainContainer>
    );
}
