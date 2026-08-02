export interface ContainerProps extends React.ComponentProps<"div"> { }

export function Container({ children, className, ...props }: ContainerProps) {
    return (
        <div {...props}>
            {children}
        </div>
    );
}