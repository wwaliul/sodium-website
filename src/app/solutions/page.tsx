import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export const metadata: Metadata = generatePageMetadata({
  title: "Solutions",
  description:
    "Sodium Learn solutions for compliance training, employee onboarding, and professional development.",
  path: "/solutions",
});

const solutions = [
  {
    slug: "compliance-training",
    title: "Compliance Training",
    headline: "Compliance training that people actually complete",
    description:
      "Automate mandatory training, track completions in real time, and stay audit-ready year-round.",
    icon: (
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    ),
    color: "bg-brand-50",
    iconColor: "text-action-primary",
  },
  {
    slug: "employee-onboarding",
    title: "Employee Onboarding",
    headline: "Onboard new hires in half the time",
    description:
      "Structured pathways, automated assignments, and real-time progress tracking get new hires productive faster.",
    icon: (
      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
    ),
    color: "bg-accent-lavender",
    iconColor: "text-brand-500",
  },
  {
    slug: "professional-development",
    title: "Professional Development",
    headline: "Professional development that scales with your team",
    description:
      "Skills gap analysis, pathway libraries, and certification tracking for continuous growth.",
    icon: (
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    ),
    color: "bg-success-100",
    iconColor: "text-success-700",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <section className="bg-bg-primary py-section-hero">
        <Container>
          <ScrollReveal>
            <Badge>SOLUTIONS</Badge>
            <h1 className="text-h1 mt-sm max-w-3xl text-text-primary font-display">
              Built for how your team actually learns
            </h1>
            <p className="text-body-lg mt-sm max-w-2xl text-text-secondary">
              Whether you're onboarding new hires, staying compliant, or developing talent — Sodium Learn adapts to your use case.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      <section className="bg-bg-white py-section">
        <Container>
          <div className="grid gap-lg sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution, i) => (
              <ScrollReveal key={solution.slug} delay={i + 1}>
                <Link href={`/solutions/${solution.slug}`} className="group block h-full">
                  <Card className="h-full">
                    <div
                      className={`${solution.color} mb-md flex h-[48px] w-[48px] items-center justify-center rounded-md`}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={solution.iconColor}
                      >
                        {solution.icon}
                      </svg>
                    </div>
                    <h2 className="text-h4 font-medium text-text-primary font-display transition-colors group-hover:text-action-primary">
                      {solution.title}
                    </h2>
                    <p className="mt-xs text-body-md text-text-secondary">
                      {solution.description}
                    </p>
                    <span className="mt-md inline-block text-body-sm font-medium text-action-primary transition-colors group-hover:text-action-hover">
                      Learn more →
                    </span>
                  </Card>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}