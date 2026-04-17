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
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="mesh-hero grain relative py-section overflow-hidden">
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

        <div className="mt-xxl grid gap-sm sm:grid-cols-2 lg:grid-cols-3">
          {platformCapabilities.map((cap, i) => (
            <ScrollReveal key={cap.number} delay={i + 1}>
              <div className="group relative h-full rounded-xl border border-border-subtle/50 bg-bg-white p-md shadow-card transition-all duration-300 hover:shadow-elevated hover:-translate-y-[2px]">
                <div className={`mb-md flex h-[48px] w-[48px] items-center justify-center rounded-xl ${cap.iconBg} text-white shadow-sm transition-transform duration-300 group-hover:scale-105`}>
                  <svg width="22" height="22" viewBox="0 0 24 24">{cap.icon}</svg>
                </div>

                <span className="absolute right-md top-md text-h1 font-bold text-gray-100/80 font-display">
                  {cap.number}
                </span>

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