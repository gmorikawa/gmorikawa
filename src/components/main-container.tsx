export type MainContainerProps = React.ComponentProps<"main">;

export function MainContainer({ children, className, ...props }: MainContainerProps) {
    return (
        <main {...props} className={["p-5 md:p-10", className].join(" ")}>
            {children}
        </main>
    );
}
