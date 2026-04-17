import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const features = [
  {
    title: "Course Builder",
    description:
      "Intuitive drag-and-drop authoring that lets anyone create professional courses — no instructional design degree required.",
    bullets: [
      "Drag-and-drop multimedia authoring",
      "Reusable component library",
      "Pre-built course templates",
    ],
    accent: "from-brand-100 to-brand-50",
    iconBg: "bg-action-primary",
    icon: (
      <path d="M12 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7M16 3h5m0 0v5m0-5L10 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    ),
  },
  {
    title: "Learning Pathways",
    description:
      "Sequence courses into structured journeys with prerequisites, deadlines, and automated compliance tracking.",
    bullets: [
      "Prerequisite-based sequencing",
      "Automated deadline reminders",
      "Compliance rule enforcement",
    ],
    accent: "from-accent-lavender to-accent-indigo",
    iconBg: "bg-brand-500",
    icon: (
      <path d="M3 12h4l3-9 4 18 3-9h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    ),
  },
  {
    title: "Analytics & Reporting",
    description:
      "See real-time completion rates, time-to-competency, and compliance gaps — all exportable for audit season.",
    bullets: [
      "Real-time completion dashboards",
      "Time-to-competency tracking",
      "One-click audit-ready exports",
    ],
    accent: "from-info-100 to-brand-50",
    iconBg: "bg-info-500",
    icon: (
      <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6m8 0V9a2 2 0 012-2h2a2 2 0 012 2v10m4 0v-4a2 2 0 00-2-2h-2a2 2 0 00-2 2v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    ),
  },
];

export function Features() {
  return (
    <section id="features" className="mesh-features grain relative py-section overflow-hidden">
      <Container>
        <ScrollReveal>
          <Badge>FEATURES</Badge>
          <h2 className="text-h2 mt-sm text-text-primary">
            Save <span className="text-action-primary">7+ hours</span> a week on learning admin
          </h2>
          <p className="text-body-lg mt-xs max-w-2xl text-text-secondary">
            Everything you need to create, assign, track, and certify — without the overhead.
          </p>
        </ScrollReveal>

        <div className="mt-xxl grid gap-lg lg:grid-cols-3">
          {features.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={i + 1}>
              <div className="group relative h-full rounded-xl border border-border-subtle/50 bg-bg-white p-lg shadow-card transition-all duration-300 hover:shadow-elevated hover:-translate-y-[2px]">
                {/* Icon */}
                <div className={`mb-md flex h-[48px] w-[48px] items-center justify-center rounded-xl ${feature.iconBg} text-white shadow-sm transition-transform duration-300 group-hover:scale-105`}>
                  <svg width="22" height="22" viewBox="0 0 24 24">{feature.icon}</svg>
                </div>

                {/* Accent gradient top border */}
                <div className={`absolute inset-x-md -top-px h-[2px] rounded-full bg-gradient-to-r ${feature.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />

                <h3 className="text-h4 font-semibold text-text-primary font-display">
                  {feature.title}
                </h3>
                <p className="mt-xs text-body-md text-text-secondary">
                  {feature.description}
                </p>
                <ul className="mt-md space-y-xs">
                  {feature.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-xs">
                      <svg className="mt-[3px] shrink-0 text-action-primary" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8.5L6.5 12L13 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-body-sm text-text-primary">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}