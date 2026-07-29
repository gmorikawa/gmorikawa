export interface LayoutProps {
    header?: React.ReactNode;
    side?: React.ReactNode;
    main?: React.ReactNode;
    footer?: React.ReactNode;
}

export function MainLayout(props: LayoutProps) {
    return (
        <div className="h-full flex flex-col">
            <div className="basis-auto">
                {props?.header}
            </div>

            <div className="flex flex-col md:flex-row grow">
                <div className="min-w-3xs basis-auto">
                    {props?.side}
                </div>

                <div className="grow">
                    {props?.main}
                </div>
            </div>

            <div className="basis-auto">
                {props?.footer}
            </div>
        </div>
    );
}
