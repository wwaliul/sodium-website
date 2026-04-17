import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  variant?: "default" | "tinted" | "dark";
  hover?: boolean;
  className?: string;
}

const bgMap = {
  default: "bg-bg-white",
  tinted: "bg-bg-secondary",
  dark: "bg-bg-dark text-text-inverse",
};

export function Card({
  children,
  variant = "default",
  hover = true,
  className,
}: CardProps) {
  return (
    <div
      className={cn(
        "p-md rounded-lg border border-border-subtle shadow-card",
        bgMap[variant],
        hover &&
          "transition-all duration-300 hover:shadow-card-hover hover:-translate-y-px",
        className
      )}
    >
      {children}
    </div>
  );
}