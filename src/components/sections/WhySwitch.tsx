import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const comparisons = [
  { without: "Multiple tools to manage", with: "One platform" },
  { without: "Disconnected workflows", with: "Unified workflows" },
  { without: "Limited visibility", with: "Real-time insights" },
  { without: "Manual compliance tracking", with: "Audit-ready at any time" },
];

export function WhySwitch() {
  return (
    <section className="relative py-section overflow-hidden">
      <div className="absolute inset-0 mesh-features" />
      <div className="absolute inset-0 grain" />

      <Container>
        <ScrollReveal>
          <Badge>WHY SWITCH</Badge>
          <h2 className="text-h2 mt-sm text-text-primary font-display">
            A simpler way to run workplace learning.
          </h2>
        </ScrollReveal>

        <div className="mt-xxl grid gap-md lg:grid-cols-2">
          <ScrollReveal delay={1}>
            <div className="h-full rounded-xl border border-border-subtle/50 bg-bg-white p-lg shadow-card">
              <h3 className="text-h4 font-display font-semibold text-text-secondary mb-lg">
                Without Sodium
              </h3>
              <ul className="space-y-md">
                {comparisons.map((item) => (
                  <li key={item.without} className="flex items-start gap-sm">
                    <div className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-error-100 shrink-0 mt-[2px]">
                      <svg className="text-error-500" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M10 4L4 10M4 4l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-body-md text-text-secondary">{item.without}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={2}>
            <div className="relative h-full rounded-xl border border-brand-200/60 bg-brand-50/40 p-lg shadow-card overflow-hidden">
              {/* Subtle decorative gradient */}
              <div className="absolute top-0 right-0 h-[160px] w-[160px] rounded-full bg-action-primary/10 blur-[50px]" />

              <h3 className="text-h4 font-display font-semibold text-action-primary mb-lg">
                With Sodium
              </h3>
              <ul className="space-y-md">
                {comparisons.map((item) => (
                  <li key={item.with} className="flex items-start gap-sm">
                    <div className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-success-100 shrink-0 mt-[2px]">
                      <svg className="text-success-700" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M3 7l3 3 5-5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-body-md font-medium text-text-primary">{item.with}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>

        {/* Summary stat */}
        <ScrollReveal delay={3}>
          <div className="mt-xxl text-center">
            <p className="text-h3 font-semibold text-text-primary">
              <span className="gradient-text">7+ hours</span> saved per week on learning admin
            </p>
            <p className="text-body-md text-text-secondary mt-xs max-w-md mx-auto">
              Most learning tools do one thing well. Sodium Learn does all of it.
            </p>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}