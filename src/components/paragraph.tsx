export interface ParagraphProps extends React.ComponentProps<"p"> { }

export function Paragraph({ children, ...props }: ParagraphProps) {
    return (
        <p {...props}>
            {children}
        </p>
    );
}
