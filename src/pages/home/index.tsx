import personal from "@portfolio/data/base.json";

import { Header } from "@portfolio/components/header";
import { MainLayout } from "@portfolio/components/main-layout";
import { Footer } from "@portfolio/components/footer";

export function Home() {
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
        />
    );
}
