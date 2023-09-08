export type  CustomButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
{
    tabIndex?: number;
    variant?: "inverse" | "outline" | "normal" | "muted" | "danger";
    className?: string;
    disableZoomOutEffect?: boolean
    fullWidth?: boolean
    rounded?: boolean
    href?: string
    Icon?: React.ReactNode
    iconDir?: "left" | "right"
}

