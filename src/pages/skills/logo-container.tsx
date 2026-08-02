export type LogoContainerProps = React.ComponentProps<"div">;

export function LogoContainer({ children, className, ...props }: LogoContainerProps) {
    return (
        <div
            style={{ scrollbarWidth: "none" }}
            className={["flex flex-row gap-4 overflow-x-auto", className].filter(Boolean).join(" ")}
            {...props}
        >
            {children}
        </div>
    );
}