import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const platformCapabilities = [
  {
    number: "01",
    title: "Create",
    description:
      "Build engaging courses with drag-and-drop authoring. Add video, quizzes, and interactive content — no instructional design degree required.",
    icon: (
      <path d="M12 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7M16 3h5m0 0v5m0-5L10 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    ),
    iconBg: "bg-action-primary",
    shadowColor: "shadow-action-primary/20",
  },
  {
    number: "02",
    title: "Manage",
    description:
      "Organise learners, assign training, and track progress from one dashboard. Role-based permissions keep everything secure.",
    icon: (
      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M12 11a4 4 0 10-8 0 4 4 0 008 0zM19 8v6M22 11h-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    ),
    iconBg: "bg-brand-500",
    shadowColor: "shadow-brand-500/20",
  },
  {
    number: "03",
    title: "Deliver",
    description:
      "Launch structured learning pathways with automated reminders and real-time completion tracking. Mobile-ready for learning on the go.",
    icon: (
      <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    ),
    iconBg: "bg-info-500",
    shadowColor: "shadow-info-500/20",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-section overflow-hidden">
      <div className="absolute inset-0 mesh-hero" />
      <div className="absolute inset-0 grain" />

      <Container>
        <ScrollReveal>
          <Badge>HOW IT WORKS</Badge>
          <h2 className="text-h2 mt-sm text-text-primary font-display">
            One platform. Three things it does well.
          </h2>
          <p className="text-body-lg mt-xs max-w-2xl text-text-secondary">
            Create training, manage your people, and deliver a learning experience without switching between tools.
          </p>
        </ScrollReveal>

        <div className="mt-xxl grid gap-lg sm:grid-cols-2 lg:grid-cols-3">
          {platformCapabilities.map((cap, i) => (
            <ScrollReveal key={cap.number} delay={i + 1}>
              <div className="group relative h-full rounded-xl border border-border-subtle/50 bg-bg-white p-lg shadow-card transition-all duration-300 hover:shadow-elevated hover:-translate-y-[2px]">
                {/* Step number */}
                <span className="absolute right-lg top-lg text-h1 font-bold text-brand-50 font-display select-none">
                  {cap.number}
                </span>

                {/* Icon */}
                <div className={`mb-md flex h-[52px] w-[52px] items-center justify-center rounded-xl ${cap.iconBg} text-white shadow-md ${cap.shadowColor} transition-transform duration-300 group-hover:scale-110`}>
                  <svg width="24" height="24" viewBox="0 0 24 24">{cap.icon}</svg>
                </div>

                <h3 className="text-h4 font-display font-semibold text-text-primary">
                  {cap.title}
                </h3>
                <p className="mt-xs text-body-sm text-text-secondary leading-relaxed">
                  {cap.description}
                </p>

                {/* Connector arrow (hidden on last card and mobile) */}
                {i < 2 && (
                  <div className="hidden lg:flex absolute -right-[calc(var(--spacing-lg)/2)] top-1/2 -translate-y-1/2 z-10">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-border-default">
                      <path d="M8 4l8 8-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}