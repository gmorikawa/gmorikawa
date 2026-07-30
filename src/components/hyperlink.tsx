export interface HyperlinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> { }

export function Hyperlink(props: HyperlinkProps) {
    const defaultClasses = "pointer italic";
    return (
        <a
            {...props}
            className={[defaultClasses, props.className].filter(Boolean).join(" ")}
        >
            {props.children}
        </a>
    );
}
