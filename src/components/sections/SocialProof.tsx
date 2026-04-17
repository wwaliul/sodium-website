import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const logos = [
  "Acme Corp", "TechFlow", "Meridian", "NovaCare",
  "Pinnacle", "Quantum", "Redshift", "Skyline",
];

const trustSignals = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-action-primary">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: "Enterprise-grade security",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-action-primary">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: "Setup in under 15 minutes",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-action-primary">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 4L12 14.01l-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: "99.9% uptime SLA",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-action-primary">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: "Role-based permissions",
  },
];

export function SocialProof() {
  return (
    <section className="relative border-b border-border-subtle/50 bg-bg-white py-xl overflow-hidden">
      <Container>
        <ScrollReveal>
          <p className="mb-lg text-center text-label-sm uppercase tracking-widest text-text-secondary/70">
            Trusted by 50+ organisations transforming workplace learning
          </p>
        </ScrollReveal>

        {/* Logo marquee */}
        <div className="relative">
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-bg-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-bg-white to-transparent" />

          <div className="overflow-hidden">
            <div className="flex items-center gap-xl animate-marquee whitespace-nowrap">
              {[...logos, ...logos].map((name, i) => (
                <span
                  key={`${name}-${i}`}
                  className="text-h4 font-display font-semibold text-gray-200 select-none"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Trust signal pills */}
        <ScrollReveal delay={1}>
          <div className="mt-xl flex flex-wrap items-center justify-center gap-md">
            {trustSignals.map((signal) => (
              <div
                key={signal.label}
                className="flex items-center gap-xs rounded-full bg-brand-50/70 px-md py-[7px] border border-brand-100/50"
              >
                {signal.icon}
                <span className="text-label-sm text-text-secondary">{signal.label}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}