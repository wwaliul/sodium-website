import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const painPoints = [
  {
    icon: "🧩",
    heading: "Fragmented systems",
    body: "Most teams are managing an LMS, an LXP, and an authoring tool separately. High cost, high overhead, low cohesion.",
  },
  {
    icon: "⏱",
    heading: "More time managing tools than delivering learning",
    body: "Complex admin workflows eat the hours that should go into building good training.",
  },
  {
    icon: "🔗",
    heading: "Broken integrations",
    body: "Disconnected systems mean inconsistent data, unreliable reporting, and no single source of truth.",
  },
  {
    icon: "📦",
    heading: "Knowledge is scattered",
    body: "Teams can't find what they need when they need it. Information sits in inboxes, drives, and outdated docs.",
  },
  {
    icon: "📉",
    heading: "Engagement drops off",
    body: "Outdated delivery and poor learner experience lead to low completion and weak adoption.",
  },
  {
    icon: "📊",
    heading: "Compliance is hard to prove",
    body: "Tracking progress across a fragmented stack and producing audit-ready reports shouldn't take a day.",
  },
];

export function Problem() {
  return (
    <section className="bg-bg-secondary py-section overflow-hidden">
      <Container>
        <ScrollReveal>
          <Badge>THE PROBLEM</Badge>
          <h2 className="text-h2 mt-sm text-text-primary font-display">
            Workplace learning is harder to run than it should be.
          </h2>
        </ScrollReveal>

        <div className="mt-xxl grid gap-sm sm:grid-cols-2 lg:grid-cols-3">
          {painPoints.map((pain, i) => (
            <ScrollReveal key={pain.heading} delay={i + 1}>
              <div className="group h-full rounded-xl border border-border-subtle/50 bg-bg-white p-md shadow-card transition-all duration-300 hover:shadow-elevated hover:-translate-y-[2px]">
                <div className="text-3xl mb-sm">{pain.icon}</div>
                <h3 className="text-h4 font-semibold text-text-primary font-display">
                  {pain.heading}
                </h3>
                <p className="mt-xs text-body-sm text-text-secondary">
                  {pain.body}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
