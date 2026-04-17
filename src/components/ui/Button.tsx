import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "default" | "lg";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-action-primary text-white hover:bg-action-hover active:bg-action-active",
  secondary:
    "bg-white border-[1.5px] border-action-primary text-action-primary hover:bg-brand-50 active:bg-brand-200",
  ghost:
    "bg-transparent text-action-primary hover:bg-bg-secondary active:bg-brand-200",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-xs py-[8px] text-body-sm",
  default: "px-lg py-[12px] text-body-md",
  lg: "px-xl py-[16px] text-body-lg",
};

interface ButtonAsButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: undefined;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

interface ButtonAsLink extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  variant = "primary",
  size = "default",
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-md font-medium transition-colors duration-150",
    "focus-visible:outline-[3px] focus-visible:outline-focus-ring focus-visible:outline-offset-2",
    "disabled:opacity-40 disabled:pointer-events-none",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if ("href" in props && props.href !== undefined) {
    return <a className={classes} {...(props as ButtonAsLink)} />;
  }

  return <button className={classes} {...(props as ButtonAsButton)} />;
}