import { Container } from "@/components/layout/Container";
import { CTA_PRIMARY } from "@/lib/constants";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

interface CTASectionProps {
  variant?: "mid" | "bottom";
  headline: string;
  subtext?: string;
  className?: string;
}

export function CTASection({
  variant = "mid",
  headline,
  subtext,
  className,
}: CTASectionProps) {
  const isBottom = variant === "bottom";

  return (
    <section className={`${isBottom ? "mesh-dark grain relative" : "bg-bg-secondary"} ${className || ""}`}>
      <Container
        className={`flex flex-col items-center ${isBottom ? "py-section-hero" : "py-section"} text-center`}
      >
        <ScrollReveal>
          <h2
            className={`w-full max-w-2xl ${isBottom ? "text-h1 text-text-inverse" : "text-h2 text-text-primary"}`}
            style={{ fontFamily: "var(--font-display)" }}
          >
            {headline}
          </h2>
        </ScrollReveal>
        {subtext && (
          <ScrollReveal delay={1}>
            <p
              className={`mt-sm w-full max-w-xl ${isBottom ? "text-body-lg text-text-inverse/60" : "text-body-lg text-text-secondary"}`}
            >
              {subtext}
            </p>
          </ScrollReveal>
        )}
        <ScrollReveal delay={2}>
          <div className="mt-xl flex flex-wrap justify-center gap-sm">
            <a
              href="#demo"
              className={`inline-flex items-center justify-center rounded-md px-xl py-[14px] text-body-lg font-semibold transition-all duration-200 focus-visible:outline-[3px] focus-visible:outline-focus-ring focus-visible:outline-offset-2 ${
                isBottom
                  ? "bg-white text-action-primary hover:bg-brand-50 hover:shadow-elevated active:bg-brand-100"
                  : "bg-action-primary text-white hover:bg-action-hover hover:shadow-elevated active:bg-action-active"
              }`}
            >
              {CTA_PRIMARY}
              <svg className="ml-xs" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3.75 9H14.25M14.25 9L10.5 5.25M14.25 9L10.5 12.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}