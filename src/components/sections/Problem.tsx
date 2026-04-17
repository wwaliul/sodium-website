import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const painPoints = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-warning-500">
        <path d="M12 2l1.5 3.1 3.5.5-2.5 2.4.6 3.5L12 9.3 8.9 9.5l.6-3.5L7 4.6l3.5-.5L12 2z" fill="currentColor" opacity="0.3"/>
        <path d="M4 14h16M6 18h12M8 22h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    heading: "Fragmented systems",
    body: "Most teams are managing an LMS, an LXP, and an authoring tool separately. High cost, high overhead, low cohesion.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-error-500">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    heading: "More time managing tools than delivering learning",
    body: "Complex admin workflows eat the hours that should go into building good training.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-warning-500">
        <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    heading: "Broken integrations",
    body: "Disconnected systems mean inconsistent data, unreliable reporting, and no single source of truth.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-400">
        <path d="M21 8v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h14a2 2 0 012 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M3 8l9 6 9-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    heading: "Knowledge is scattered",
    body: "Teams can't find what they need when they need it. Information sits in inboxes, drives, and outdated docs.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-error-500">
        <path d="M23 6l-9.5 9.5-5-5L1 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17 6h6v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    heading: "Engagement drops off",
    body: "Outdated delivery and poor learner experience lead to low completion and weak adoption.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-warning-500">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M9 5a2 2 0 012-2h2a2 2 0 012 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M9 5h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M10 12h4M10 16h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    heading: "Compliance is hard to prove",
    body: "Tracking progress across a fragmented stack and producing audit-ready reports shouldn't take a day.",
  },
];

export function Problem() {
  return (
    <section className="relative py-section overflow-hidden mesh-dark">
      <div className="absolute inset-0 grain" />

      <Container>
        <ScrollReveal>
          <Badge variant="dark">THE PROBLEM</Badge>
          <h2 className="text-h2 mt-sm text-text-inverse font-display">
            Workplace learning is harder to run than it should be.
          </h2>
          <p className="text-body-lg mt-xs max-w-2xl text-text-inverse/60">
            Most learning teams spend more time fighting their tools than delivering outcomes. Sound familiar?
          </p>
        </ScrollReveal>

        <div className="mt-xxl grid gap-md sm:grid-cols-2 lg:grid-cols-3">
          {painPoints.map((pain, i) => (
            <ScrollReveal key={pain.heading} delay={i + 1}>
              <div className="group h-full rounded-xl border border-white/10 bg-white/5 p-lg transition-all duration-300 hover:bg-white/10 hover:-translate-y-[2px] backdrop-blur-sm">
                <div className="flex h-[44px] w-[44px] items-center justify-center rounded-xl bg-white/10 mb-md">
                  {pain.icon}
                </div>
                <h3 className="text-h4 font-display font-semibold text-text-inverse">
                  {pain.heading}
                </h3>
                <p className="mt-xs text-body-sm text-text-inverse/60">
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