export interface ToolsContainerProps extends React.ComponentProps<"section"> {
    title: string;
}

export function ToolsContainer({ title, children, className, ...props }: ToolsContainerProps) {
    return (
        <section className={["pb-10 mb-10 border-b-1 border-gray-300", className].filter(Boolean).join(" ")} {...props}>
            <header className="mb-4">
                <h5 className="font-bold text-2xl">
                    {title}
                </h5>
            </header>

            {children}
        </section>
    );
}