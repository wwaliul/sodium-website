import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/layout/Container";

const capabilities = [
  "Course Creation",
  "Learning Pathways",
  "Compliance Tracking",
  "Onboarding",
  "Knowledge Base",
  "Assessments",
  "Certifications",
  "Mobile Access",
  "Analytics",
  "Integrations",
];

export function ProductPreview() {
  return (
    <section className="relative overflow-hidden py-section">
      <div className="absolute inset-0 mesh-features" />
      <div className="absolute inset-0 grain" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <Badge>WHAT IS SODIUM LEARN?</Badge>
          <h2 className="mt-lg text-h2">
            The single platform for workplace learning.
          </h2>
          <p className="mt-md text-body-lg text-text-secondary">
            Create, manage, and deliver without switching between tools.
          </p>
        </div>

        {/* Product screenshot mockup — learner view */}
        <div className="scroll-reveal-scale mx-auto mt-xxl max-w-3xl">
          <div className="relative rounded-xl border border-border-subtle/60 bg-bg-white shadow-elevated overflow-hidden glow-subtle">
            {/* Browser chrome */}
            <div className="flex items-center gap-xs border-b border-border-subtle bg-gray-50/80 px-md py-sm">
              <div className="flex gap-[6px]">
                <span className="h-[10px] w-[10px] rounded-full bg-error-300/80" />
                <span className="h-[10px] w-[10px] rounded-full bg-warning-300/80" />
                <span className="h-[10px] w-[10px] rounded-full bg-success-300/80" />
              </div>
              <div className="mx-auto flex items-center gap-xs rounded-md bg-bg-white px-sm py-[3px] border border-border-subtle">
                <span className="h-[8px] w-[8px] rounded-full bg-success-500" />
                <span className="text-label-sm text-text-secondary">app.sodiumlearn.com/learn</span>
              </div>
            </div>

            {/* Learner experience mockup */}
            <div className="p-lg">
              <div className="flex items-center justify-between mb-lg">
                <div>
                  <p className="text-h4 font-semibold text-text-primary">My Learning</p>
                  <p className="text-label-sm text-text-secondary mt-[2px]">2 assigned · 1 in progress · 1 completed</p>
                </div>
                <div className="flex items-center gap-xs">
                  <div className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-brand-50">
                    <span className="text-label-sm font-bold text-action-primary">AK</span>
                  </div>
                </div>
              </div>

              {/* Course cards */}
              <div className="grid grid-cols-2 gap-sm">
                <div className="rounded-lg border border-border-subtle bg-bg-white p-md hover:shadow-card transition-shadow duration-300">
                  <div className="flex items-center gap-xs mb-sm">
                    <div className="flex h-[28px] w-[28px] items-center justify-center rounded-md bg-success-100">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5.5 7l2 2 3-3.5" stroke="#2DCA72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                    <span className="text-label-sm font-medium text-success-700">Completed</span>
                  </div>
                  <p className="text-body-sm font-semibold text-text-primary">Fire Safety Awareness</p>
                  <p className="text-label-sm text-text-secondary mt-xs">4 modules · 30 min</p>
                  <div className="mt-sm h-[3px] rounded-full bg-success-100">
                    <div className="h-[3px] w-full rounded-full bg-success-500" />
                  </div>
                </div>

                <div className="rounded-lg border border-brand-100 bg-brand-50/30 p-md hover:shadow-card transition-shadow duration-300">
                  <div className="flex items-center gap-xs mb-sm">
                    <div className="flex h-[28px] w-[28px] items-center justify-center rounded-md bg-brand-100">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 3v8" stroke="#014DA1" strokeWidth="1.5" strokeLinecap="round" /></svg>
                    </div>
                    <span className="text-label-sm font-medium text-action-primary">In progress</span>
                  </div>
                  <p className="text-body-sm font-semibold text-text-primary">Induction Pathway</p>
                  <p className="text-label-sm text-text-secondary mt-xs">6 modules · 2h 15min</p>
                  <div className="mt-sm h-[3px] rounded-full bg-brand-100">
                    <div className="h-[3px] w-[65%] rounded-full bg-action-primary progress-animate" />
                  </div>
                  <p className="text-label-sm font-medium text-action-primary mt-xs">65% complete</p>
                </div>
              </div>

              {/* Knowledge base preview */}
              <div className="mt-md rounded-lg border border-border-subtle bg-gray-50/60 p-md">
                <div className="flex items-center gap-xs mb-sm">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 3h4v4H3zM9 3h4v4H9zM3 9h4v4H3zM9 9h4v4H9z" stroke="#6C6C89" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  <p className="text-body-sm font-semibold text-text-primary">Knowledge Base</p>
                </div>
                <div className="flex flex-wrap gap-xs">
                  {["IT Security Policy", "Remote Work Guide", "Expense Process", "Brand Guidelines"].map((doc) => (
                    <span key={doc} className="rounded-md bg-bg-white border border-border-subtle px-sm py-[4px] text-label-sm text-text-secondary hover:border-action-primary hover:text-action-primary transition-colors duration-200 cursor-pointer">
                      {doc}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Capability ticker */}
        <div className="scroll-reveal mx-auto mt-xxl max-w-4xl">
          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-bg-white to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-bg-white to-transparent" />

            <div className="flex animate-marquee">
              {[...capabilities, ...capabilities].map((cap, i) => (
                <div
                  key={`${cap}-${i}`}
                  className="flex shrink-0 items-center px-sm py-xs"
                >
                  <span className="rounded-full bg-brand-50 border border-brand-100/50 px-md py-[8px] text-body-sm font-medium text-action-primary whitespace-nowrap">
                    {cap}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}