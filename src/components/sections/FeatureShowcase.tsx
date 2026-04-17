import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const capabilities = [
  {
    title: "Certificates",
    description: "Auto-issue branded certificates on completion. Learners download and share instantly.",
    icon: <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />,
  },
  {
    title: "Assessments",
    description: "Quizzes, assignments, and practical evaluations with automated grading and feedback.",
    icon: <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />,
  },
  {
    title: "Blended Learning",
    description: "Combine online, in-person, and self-paced modules in a single pathway.",
    icon: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />,
  },
  {
    title: "Mobile Access",
    description: "Learners complete training on any device. Progress syncs automatically.",
    icon: <path d="M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H7V4h10v16zm-3-2H10v-2h4v2z" />,
  },
  {
    title: "Integrations",
    description: "Connect to HRIS, SSO, and communication tools your team already uses.",
    icon: <path d="M4 6h16M4 12h16M4 18h16" />,
  },
  {
    title: "Compliance",
    description: "Built-in regulatory tracking, automated renewal reminders, and full audit trails.",
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  },
];

export function FeatureShowcase() {
  return (
    <section className="mesh-hero grain relative py-section overflow-hidden">
      <Container>
        <ScrollReveal>
          <Badge>MORE CAPABILITIES</Badge>
          <h2 className="text-h2 mt-sm text-text-primary font-display">
            Everything else you need to run learning at scale
          </h2>
        </ScrollReveal>

        <div className="mt-xxl grid gap-md sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, i) => (
            <ScrollReveal key={cap.title} delay={Math.min(i + 1, 3)}>
              <div className="group flex h-full flex-col rounded-xl border border-border-subtle/50 bg-bg-white p-md shadow-card transition-all duration-300 hover:shadow-elevated hover:-translate-y-[2px]">
                <div className="mb-sm flex h-[44px] w-[44px] items-center justify-center rounded-xl bg-brand-50 text-action-primary transition-transform duration-300 group-hover:scale-110">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {cap.icon}
                  </svg>
                </div>
                <h3 className="text-h4 font-semibold text-text-primary font-display">
                  {cap.title}
                </h3>
                <p className="mt-xs text-body-sm text-text-secondary leading-relaxed">
                  {cap.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}