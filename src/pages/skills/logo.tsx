export interface LogoProps {
    src: string;
    label: string;
    size?: number;
}

export function Logo({ src, label, size }: LogoProps) {
    return (
        <img
            src={src}
            width={size ?? 50}
            height={size ?? 50}
            alt={label}
            loading="lazy"
        />
    );
}