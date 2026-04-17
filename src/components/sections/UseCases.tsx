import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const useCases = [
  {
    title: "Compliance Training",
    body: "Deliver, track, and prove compliance at scale. Audit-ready reports, automated renewal reminders.",
    icon: (
      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    ),
  },
  {
    title: "Employee Onboarding",
    body: "Get new hires productive faster. Structured pathways, clear milestones, real-time progress.",
    icon: (
      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M12 11a4 4 0 10-8 0 4 4 0 008 0zM19 8v6M22 11h-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    ),
  },
  {
    title: "Distributed Teams",
    body: "Consistent learning across locations and departments. Mobile-ready. Progress syncs automatically.",
    icon: (
      <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    ),
  },
  {
    title: "Operational Knowledge",
    body: "Keep SOPs and company knowledge up to date and accessible in the flow of work.",
    icon: (
      <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    ),
  },
];

export function UseCases() {
  return (
    <section className="bg-bg-secondary py-section overflow-hidden">
      <Container>
        <ScrollReveal>
          <Badge>USE CASES</Badge>
          <h2 className="text-h2 mt-sm text-text-primary font-display">
            Built for high-urgency learning workflows.
          </h2>
        </ScrollReveal>

        <div className="mt-xxl grid gap-sm sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map((useCase, i) => (
            <ScrollReveal key={useCase.title} delay={i + 1}>
              <div className="group h-full rounded-xl border border-border-subtle/50 bg-bg-white p-md shadow-card transition-all duration-300 hover:shadow-elevated hover:-translate-y-[2px]">
                <div className="mb-md flex h-[48px] w-[48px] items-center justify-center rounded-xl bg-brand-100 text-action-primary shadow-sm transition-transform duration-300 group-hover:scale-105">
                  <svg width="22" height="22" viewBox="0 0 24 24">{useCase.icon}</svg>
                </div>
                <h3 className="text-h4 font-semibold text-text-primary font-display">
                  {useCase.title}
                </h3>
                <p className="mt-xs text-body-sm text-text-secondary">
                  {useCase.body}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
