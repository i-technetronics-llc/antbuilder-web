import clsx from "clsx";
import { CustomButtonProps } from "./type";
import Link from "next/link";

interface ButtonIconProps {
    Icon: React.ReactNode,
    iconDir: "left" | "right"
}

const Button = ({
    children,
    variant = "normal",
    fullWidth,
    className,
    tabIndex = 0,
    disableZoomOutEffect,
    disabled,
    href,
    Icon,
    rounded,
    iconDir = "left",
    ...rest
}: CustomButtonProps) => {
    // Generate dynamic class names based on variant and fullWidth
    const buttonClass = clsx(
        `px-[32px] inline-flex items-center py-2.5 rounded-lg transition capitalize text-[24px] cursor-pointer`,
        {
            "bg-primary text-white": variant === "normal",
            "bg-white text-primary": variant === "inverse",
            "border-2 border-primary text-primary bg-transparent": variant === "outline",
            "text-accent-900, bg-gray-200": variant === "muted",
            "bg-red-500 text-white": variant === "danger",
            "w-full": fullWidth,
            "hover:opacity-80 hover:scale-95": !disableZoomOutEffect,
            "opacity-70 pointer-events-none": disabled,
            "!rounded-full": rounded,
            "flex-row-reverse": iconDir === "right"
        }
    );

    if (href) {
        return (
            <Link className={`${buttonClass} ${className}`} href={href}>
                <ButtonIcon Icon={Icon} iconDir={iconDir} />
                {children}
            </Link>
        )
    }

    return (
        <button
            className={`${buttonClass} ${className}`}
            {...rest}
        >
            <ButtonIcon Icon={Icon} iconDir={iconDir} />
            {children}
        </button>
    );
};

export default Button;

const ButtonIcon = ({ Icon, iconDir }: ButtonIconProps) => (
    <span className={`${iconDir === "left" ? "mr-2" : "ml-2"}`}>
        {Icon}
    </span>
)