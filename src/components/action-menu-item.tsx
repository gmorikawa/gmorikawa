export interface ActionMenuItemProps extends React.ComponentProps<"li"> {
    icon?: React.ReactNode;
    link: string;
    label: string;
}

export function ActionMenuItem({ icon, link, label, className, ...props }: ActionMenuItemProps) {
    return (
        <li {...props} className={["text-nowrap", className].filter(Boolean).join(" ")} >
            <a href={link} className="flex items-center gap-2">
                {icon} {label}
            </a>
        </li>
    );
}

export default ActionMenuItem;
