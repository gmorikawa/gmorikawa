export interface FooterProps extends React.ComponentProps<"footer"> {
    quote: string;
}

export function Footer({ className, quote, ...props }: FooterProps) {
    return (
        <footer
            {...props}
            className={[className, "p-1 bg-gray-900 text-gray-50 text-right japanese-text"].join(" ")}
        >
            <p>{quote}</p>
        </footer>
    )
}
