import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

interface SectionProps {
  children: ReactNode;
  label?: string;
  variant?: "light" | "tinted" | "dark";
  padding?: "default" | "compact" | "hero";
  className?: string;
}

const bgMap = {
  light: "bg-bg-primary",
  tinted: "bg-bg-secondary",
  dark: "bg-bg-dark text-text-inverse",
};

const paddingMap = {
  default: "py-section",
  compact: "py-section-compact",
  hero: "py-section-hero",
};

export function Section({
  children,
  label,
  variant = "light",
  padding = "default",
  className,
}: SectionProps) {
  return (
    <section className={cn(bgMap[variant], paddingMap[padding], className)}>
      <Container>
        {label && (
          <span className="text-label-sm mb-sm block uppercase tracking-[0.1px] text-text-secondary">
            {variant === "dark" ? (
              <span className="text-text-inverse/60">{label}</span>
            ) : (
              label
            )}
          </span>
        )}
        {children}
      </Container>
    </section>
  );
}