import personal from "@portfolio/data/personal-information.json";

export type PortifolioHeaderProps = React.ComponentProps<"header">;

export function PortifolioHeader({ className, ...props }: PortifolioHeaderProps) {
    return (
        <header {...props} className={`p-5 md:p-10 flex flex-col md:flex-row justify-between ${className}`}>
            <div className="grow">
                <h4 className="text-lg japanese-text">
                    {personal?.name?.japanese}
                </h4>

                <h2 className="text-4xl">
                    {personal?.name?.original}
                </h2>

                <h2 className="text-lg">
                    {personal?.title}
                </h2>
            </div>
        </header>
    );
}