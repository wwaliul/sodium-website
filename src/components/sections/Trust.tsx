import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const pillars = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Role-based permissions",
    description: "Control who sees what, who creates, and who manages — with granular access for every team and role.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Secure, scalable infrastructure",
    description: "Enterprise-grade hosting with 99.9% uptime. Data hosted in the UK and EU with full encryption at rest and in transit.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "API-ready foundations",
    description: "Connect Sodium Learn to your existing tools — HRIS, SSO, analytics, and more — through a robust API and native integrations.",
  },
];

const badges = [
  "SOC 2",
  "GDPR",
  "ISO 27001",
  "UK/EU Data",
];

export function Trust() {
  return (
    <section className="relative py-section overflow-hidden mesh-dark">
      <div className="absolute inset-0 grain" />

      {/* Decorative orb */}
      <div className="absolute bottom-[10%] left-[20%] h-[240px] w-[240px] rounded-full bg-brand-400/10 blur-[80px]" />

      <Container>
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="dark">ENTERPRISE READY</Badge>
            <h2 className="mt-sm text-h2 text-text-inverse">
              Built for scale and control.
            </h2>
            <p className="text-body-lg mt-xs text-text-inverse/60">
              From compliance-heavy regulated industries to fast-growing distributed teams — Sodium Learn is engineered for the way you work.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-xxl grid gap-lg sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, i) => (
            <ScrollReveal key={pillar.title} delay={i + 1}>
              <div className="group h-full rounded-xl border border-white/10 bg-white/5 p-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:-translate-y-[1px]">
                <div className="mb-md flex h-[48px] w-[48px] items-center justify-center rounded-xl bg-white/10 text-brand-300">
                  {pillar.icon}
                </div>
                <h3 className="text-h4 font-semibold text-text-inverse">
                  {pillar.title}
                </h3>
                <p className="mt-xs text-body-sm text-text-inverse/60">
                  {pillar.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Compliance badges */}
        <ScrollReveal delay={3}>
          <div className="mt-xxl flex flex-wrap items-center justify-center gap-sm">
            {badges.map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-xs rounded-lg border border-white/10 bg-white/5 px-md py-sm backdrop-blur-sm"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-brand-300">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-label-md font-semibold text-text-inverse/80">{badge}</span>
              </div>
            ))}
          </div>
          <p className="text-label-sm text-text-inverse/40 text-center mt-md">
            Data hosted in the UK and EU · Full encryption at rest and in transit
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}