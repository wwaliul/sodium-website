import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const painPoints = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-warning-500">
        <path d="M12 2l1.5 3.1 3.5.5-2.5 2.4.6 3.5L12 9.3 8.9 9.5l.6-3.5L7 4.6l3.5-.5L12 2z" fill="currentColor" opacity="0.3"/>
        <path d="M4 14h16M6 18h12M8 22h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    heading: "Content takes too long to create and update",
    body: "Every change means re-authoring across tools. Content ages faster than you can update it.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-error-500">
        <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    heading: "Tools don't connect, so workflows break",
    body: "An LMS here, an LXP there, an authoring tool somewhere else. No single source of truth.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-error-500">
        <path d="M23 6l-9.5 9.5-5-5L1 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17 6h6v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    heading: "Engagement drops across teams",
    body: "Outdated delivery and poor learner experience lead to low completion rates and weak adoption.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-warning-500">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M9 5a2 2 0 012-2h2a2 2 0 012 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M9 5h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M10 12h4M10 16h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    heading: "Progress and compliance are hard to track",
    body: "Fragmented reporting makes it impossible to prove compliance or see who's falling behind.",
  },
];

export function Problem() {
  return (
    <section className="relative py-section overflow-hidden mesh-dark">
      <div className="absolute inset-0 grain" />

      {/* Decorative orb */}
      <div className="absolute top-[20%] right-[10%] h-[200px] w-[200px] rounded-full bg-brand-400/10 blur-[80px]" />

      <Container>
        <div className="grid gap-xxl lg:grid-cols-[2fr_3fr]">
          {/* Left — narrative */}
          <ScrollReveal>
            <Badge variant="dark">THE PROBLEM</Badge>
            <h2 className="text-h2 mt-sm text-text-inverse leading-[1.15]">
              Workplace learning is harder to run than it should be.
            </h2>
            <p className="text-body-lg mt-md text-text-inverse/60" style={{ maxWidth: '480px' }}>
              When tools don&rsquo;t connect, workflows break. When workflows break, teams fall behind.
            </p>
            <div className="mt-lg accent-line" />
          </ScrollReveal>

          {/* Right — pain points */}
          <div className="space-y-sm">
            {painPoints.map((pain, i) => (
              <ScrollReveal key={pain.heading} delay={i + 1}>
                <div className="group rounded-xl border border-white/10 bg-white/5 p-lg transition-all duration-300 hover:bg-white/10 hover:-translate-y-[1px] backdrop-blur-sm">
                  <div className="flex items-start gap-md">
                    <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-lg bg-white/10">
                      {pain.icon}
                    </div>
                    <div>
                      <h3 className="text-h4 font-semibold text-text-inverse">
                        {pain.heading}
                      </h3>
                      <p className="mt-xs text-body-sm text-text-inverse/60">
                        {pain.body}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}