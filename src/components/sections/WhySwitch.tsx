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
    <section className="mesh-features grain relative py-section overflow-hidden">
      <Container>
        <ScrollReveal>
          <Badge>WHY SWITCH</Badge>
          <h2 className="text-h2 mt-sm text-text-primary font-display">
            A simpler way to run workplace learning.
          </h2>
        </ScrollReveal>

        <div className="mt-xxl grid gap-md lg:grid-cols-2">
          <ScrollReveal delay={1}>
            <div className="rounded-xl border border-border-subtle/50 bg-bg-white p-lg shadow-card">
              <h3 className="text-h4 font-semibold text-text-secondary font-display mb-md">
                Without Sodium
              </h3>
              <ul className="space-y-sm">
                {comparisons.map((item) => (
                  <li key={item.without} className="flex items-start gap-sm">
                    <svg className="mt-[2px] shrink-0 text-error-500" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M13.5 4.5L4.5 13.5M4.5 4.5L13.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-body-md text-text-secondary">{item.without}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={2}>
            <div className="rounded-xl border border-brand-200/50 bg-brand-50/50 p-lg shadow-card">
              <h3 className="text-h4 font-semibold text-action-primary font-display mb-md">
                With Sodium
              </h3>
              <ul className="space-y-sm">
                {comparisons.map((item) => (
                  <li key={item.with} className="flex items-start gap-sm">
                    <svg className="mt-[2px] shrink-0 text-success-500" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M3 9L7.5 13.5L15 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-body-md font-medium text-text-primary">{item.with}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={3}>
          <p className="mt-xl text-body-lg text-text-secondary text-center max-w-2xl mx-auto">
            Most learning tools do one thing well. Sodium Learn does all of it.
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}
