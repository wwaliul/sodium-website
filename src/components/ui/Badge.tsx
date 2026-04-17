import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "dark";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "text-label-sm uppercase tracking-widest",
        variant === "dark" ? "text-text-inverse/60" : "text-text-secondary",
        className
      )}
    >
      {children}
    </span>
  );
}