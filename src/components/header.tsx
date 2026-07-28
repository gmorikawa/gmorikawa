import personal from "@portfolio/data/base.json";

export type PortifolioHeaderProps = React.ComponentProps<"header">;

export function PortifolioHeader({ className, ...props }: PortifolioHeaderProps) {
    return (
        <header {...props} className={`p-5 md:p-10 flex flex-col md:flex-row justify-between ${className}`}>
            <div className="grow">
                <h4 className="text-lg japanese-text">
                    {personal.presentation.japaneseName}
                </h4>

                <h2 className="text-4xl">
                    {personal.presentation.fullname}
                </h2>

                <h2 className="text-lg">
                    {personal.presentation.title}
                </h2>
            </div>
        </header>
    );
}
