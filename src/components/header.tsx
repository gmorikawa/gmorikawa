export interface HeaderProps extends React.ComponentProps<"header"> {
    japaneseName: string;
    fullname: string;
    title: string;
}

export function Header({ className, japaneseName, fullname, title, ...props }: HeaderProps) {
    return (
        <header
            {...props}
            className={["p-5 md:p-10 flex flex-col md:flex-row justify-between", className].join(" ")}
        >
            <div className="grow">
                <h4 className="text-lg japanese-text">
                    {japaneseName}
                </h4>

                <h2 className="text-4xl">
                    {fullname}
                </h2>

                <h2 className="text-lg">
                    {title}
                </h2>
            </div>
        </header>
    );
}
