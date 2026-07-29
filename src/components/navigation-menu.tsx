export type NavigationMenuProps = React.ComponentProps<"nav">;

export function NavigationMenu({ className, children, ...props }: NavigationMenuProps) {
    return (
        <nav {...props} className={["p-5 md:p-10", className].filter(Boolean).join(" ")}>
            <ul>
                {children}
            </ul>
        </nav>
    )
}

export default NavigationMenu;