import { Container } from "@/components/layout/Container";
import { CTA_PRIMARY } from "@/lib/constants";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

interface CTASectionProps {
  variant?: "mid" | "bottom";
  headline?: string;
  subtext?: string;
  className?: string;
}

export function CTASection({
  variant = "bottom",
  headline,
  subtext,
  className,
}: CTASectionProps) {
  const isBottom = variant === "bottom";

  const defaultHeadline = isBottom
    ? "Stop managing learning. Start delivering outcomes."
    : "Ready to see what 7 hours saved looks like?";

  const defaultSubtext = isBottom
    ? "Run training, knowledge, and learning — all in one place."
    : "Teams using Sodium Learn reclaim over 7 hours a week on learning administration.";

  return (
    <section className={`relative overflow-hidden ${isBottom ? "mesh-dark" : "bg-bg-secondary"} ${className || ""}`}>
      {isBottom && <div className="absolute inset-0 grain" />}

      {/* Decorative orbs for bottom variant */}
      {isBottom && (
        <>
          <div className="absolute top-[20%] left-[10%] h-[200px] w-[200px] rounded-full bg-brand-400/10 blur-[80px]" />
          <div className="absolute bottom-[10%] right-[15%] h-[180px] w-[180px] rounded-full bg-action-primary/10 blur-[80px]" />
        </>
      )}

      <Container
        className={`flex flex-col items-center ${isBottom ? "py-section-hero" : "py-section"} text-center`}
      >
        {/* Problem reframe for bottom CTA */}
        {isBottom && (
          <ScrollReveal>
            <p className="text-body-md text-text-inverse/50 mb-md max-w-xl">
              L&D teams spend hours managing tools instead of delivering outcomes.
            </p>
          </ScrollReveal>
        )}

        <ScrollReveal delay={1}>
          <h2
            className={`w-full max-w-2xl font-display ${isBottom ? "text-h1 text-text-inverse" : "text-h2 text-text-primary"}`}
          >
            {headline || defaultHeadline}
          </h2>
        </ScrollReveal>
        {((subtext !== undefined ? subtext : defaultSubtext)) && (
          <ScrollReveal delay={2}>
            <p
              className={`mt-sm w-full max-w-xl ${isBottom ? "text-body-lg text-text-inverse/60" : "text-body-lg text-text-secondary"}`}
            >
              {subtext || defaultSubtext}
            </p>
          </ScrollReveal>
        )}
        <ScrollReveal delay={3}>
          <div className="mt-xl flex flex-wrap justify-center gap-sm">
            <a
              href="#demo"
              className={`group inline-flex items-center justify-center rounded-lg px-xl py-[14px] text-body-md font-semibold transition-all duration-300 focus-visible:outline-[3px] focus-visible:outline-focus-ring focus-visible:outline-offset-2 ${
                isBottom
                  ? "bg-white text-action-primary shadow-lg hover:bg-brand-50 hover:shadow-xl hover:-translate-y-[1px] active:bg-brand-100"
                  : "bg-action-primary text-white shadow-lg shadow-action-primary/20 hover:bg-action-hover hover:shadow-xl hover:shadow-action-primary/30 hover:-translate-y-[1px] active:bg-action-active"
              }`}
            >
              {CTA_PRIMARY}
              <svg className="ml-xs transition-transform duration-200 group-hover:translate-x-[2px]" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3.75 9H14.25M14.25 9L10.5 5.25M14.25 9L10.5 12.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            {isBottom && (
              <a
                href="#how-it-works"
                className="group inline-flex items-center justify-center rounded-lg border-[1.5px] border-white/30 px-xl py-[14px] text-body-md font-medium text-text-inverse transition-all duration-300 hover:border-white/50 hover:bg-white/10 hover:-translate-y-[1px] active:bg-white/5 focus-visible:outline-[3px] focus-visible:outline-focus-ring focus-visible:outline-offset-2"
              >
                See how it works
                <svg className="ml-xs transition-transform duration-200 group-hover:translate-x-[2px]" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3.75 9H14.25M14.25 9L10.5 5.25M14.25 9L10.5 12.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            )}
          </div>
        </ScrollReveal>

        {/* Trust badges + credibility for bottom CTA */}
        {isBottom && (
          <ScrollReveal delay={4}>
            <div className="mt-xl flex flex-wrap items-center justify-center gap-lg">
              {["No credit card required", "Setup in 15 minutes", "Cancel anytime"].map((text) => (
                <div key={text} className="flex items-center gap-xs">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-success-300">
                    <path d="M3 8.5L6.5 12L13 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-label-sm text-text-inverse/50">{text}</span>
                </div>
              ))}
            </div>
            <p className="text-label-sm text-text-inverse/30 text-center mt-lg">
              Built by operators with experience in IT, healthcare, and workplace learning.
            </p>
          </ScrollReveal>
        )}
      </Container>
    </section>
  );
}