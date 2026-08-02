import personal from "@portfolio/data/base.json";

import { Router, type RouterRoute } from "@portfolio/components/router";
import { Home } from "@portfolio/pages/home";
import { MainLayout } from "@portfolio/components/main-layout";
import { Header } from "@portfolio/components/header";
import { Footer } from "@portfolio/components/footer";
import { ApplicationMenu } from "./menu";
import { Skills } from "./skills";
import { Projects } from "./projects";

const Layout = ({ children }: { children: React.ReactNode }) => {
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
            main={children}
        />
    );
};

export const routes: RouterRoute[] = [
    {
        path: "/",
        element: <Layout><Home /></Layout>,
    },
    {
        path: "/skills",
        element: <Layout><Skills /></Layout>,
    },
    {
        path: "/projects",
        element: <Layout><Projects /></Layout>,
    },
];

export function Routes() {
    return (
        <Router
            routes={routes}
            notFound={
                <>
                    Niente da vedere qui, torna alla <a href="/">home</a>.
                </>
            }
        />
    );
}