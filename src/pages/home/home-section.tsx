import { Container } from "@portfolio/components/container";

export interface HomeSectionProps extends React.ComponentProps<"section"> {
    title: string;
}

export function HomeSection({ title, children, ...props }: HomeSectionProps) {
    return (
        <section className="my-8" {...props}>
            <HomeSectionTitle title={title} />

            <Container className="py-2 md:py-4">
                {children}
            </Container>
        </section>
    );
}

interface HomeSectionTitleProps {
    title: string;
}

function HomeSectionTitle({ title }: HomeSectionTitleProps) {
    return (
        <h2 className="text-2xl font-bold mb-4">
            {title}
        </h2>
    );
}