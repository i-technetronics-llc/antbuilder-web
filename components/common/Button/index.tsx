import clsx from "clsx";
import { CustomButtonProps } from "./type";
import Link from "next/link";

const Button = ({
    children,
    variant = "normal",
    fullWidth,
    className,
    tabIndex = 0,
    disableZoomOutEffect,
    disabled,
    href,
    rounded,
    ...rest
}: CustomButtonProps) => {
    // Generate dynamic class names based on variant and fullWidth
    const buttonClass = clsx(
        `px-5 inline-block py-2 rounded-lg transition capitalize text-base cursor-pointer`,
        {
            "bg-primary text-white": variant === "normal",
            "bg-white text-primary": variant === "inverse",
            "border-2 border-primary text-primary bg-transparent": variant === "outline",
            "text-accent-900, bg-gray-200": variant === "muted",
            "bg-red-500 text-white": variant === "danger",
            "w-full": fullWidth,
            "hover:opacity-80 hover:scale-95": !disableZoomOutEffect,
            "opacity-70 pointer-events-none": disabled,
            "rounded-full": rounded
        }
    );

    if (href) {
        return (
            <Link className={`${buttonClass} ${className}`} href={href}>
                {children}
            </Link>
        )
    }

    return (
        <button
            className={`${buttonClass} ${className}`}
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;
