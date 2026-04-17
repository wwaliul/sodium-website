import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const logos = [
  { name: "Acme Corp", width: "w-[96px]" },
  { name: "TechFlow", width: "w-[88px]" },
  { name: "Meridian", width: "w-[92px]" },
  { name: "NovaCare", width: "w-[96px]" },
  { name: "Pinnacle", width: "w-[80px]" },
  { name: "Quantum", width: "w-[88px]" },
  { name: "Redshift", width: "w-[84px]" },
  { name: "Skyline", width: "w-[76px]" },
];

export function SocialProof() {
  return (
    <section className="relative border-b border-border-subtle/50 bg-bg-white py-xl">
      <Container>
        <ScrollReveal>
          <p className="mb-lg text-center text-label-sm uppercase tracking-widest text-text-secondary/60">
            Trusted by 50+ organisations transforming workplace learning
          </p>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <div className="flex flex-wrap items-center justify-center gap-xl">
            {logos.map((logo) => (
              <span
                key={logo.name}
                className={`text-h4 font-semibold font-display text-gray-200/90 transition-all duration-300 hover:text-gray-300 ${logo.width}`}
              >
                {logo.name}
              </span>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={2}>
          <div className="mt-xl flex flex-wrap items-center justify-center gap-md">
            <div className="flex items-center gap-xs rounded-full bg-brand-50 px-sm py-[6px] border border-brand-100/50">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-brand-500">
                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-label-sm text-text-secondary">Role-based permissions</span>
            </div>
            <div className="flex items-center gap-xs rounded-full bg-brand-50 px-sm py-[6px] border border-brand-100/50">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-brand-500">
                <path d="M3 15a4 4 0 004 4h9a5 5 0 005-5V9a2 2 0 00-2-2H5a2 2 0 00-2 2v6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 15a2 2 0 100-4 2 2 0 000 4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-label-sm text-text-secondary">Secure, scalable infrastructure</span>
            </div>
            <div className="flex items-center gap-xs rounded-full bg-brand-50 px-sm py-[6px] border border-brand-100/50">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-brand-500">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-label-sm text-text-secondary">API-ready foundations</span>
            </div>
            <div className="flex items-center gap-xs rounded-full bg-brand-50 px-sm py-[6px] border border-brand-100/50">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-brand-500">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-label-sm text-text-secondary">No lengthy onboarding — most teams are live within a week</span>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}