import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/layout/Container";
import { CTASection } from "@/components/sections/CTASection";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { CTA_PRIMARY } from "@/lib/constants";

export const metadata: Metadata = generatePageMetadata({
  title: "Product",
  description:
    "Everything you need to run workplace learning — course authoring, learning pathways, assessments, and analytics in one platform.",
  path: "/product",
});

const deepDives = [
  {
    id: "course-builder",
    badge: "COURSE AUTHORING",
    title: "Build courses without the learning curve",
    description:
      "Our drag-and-drop builder lets subject matter experts create professional courses in minutes — not days. Add video, quizzes, interactive content, and downloadable resources without any technical skills.",
    features: [
      "Drag-and-drop multimedia authoring",
      "AI-assisted content suggestions",
      "Reusable component and template library",
      "SCORM and xAPI import support",
      "Collaborative editing with version history",
    ],
    accent: "bg-brand-50",
    image: (
      <div className="rounded-lg border border-border-subtle bg-bg-white p-md shadow-card">
        <div className="flex items-center gap-xs mb-md">
          <div className="h-[32px] w-[32px] rounded bg-brand-50" />
          <div className="h-[10px] w-24 rounded bg-gray-100" />
        </div>
        <div className="space-y-sm">
          <div className="h-[80px] rounded-md bg-gray-50" />
          <div className="grid grid-cols-2 gap-sm">
            <div className="h-[40px] rounded-md bg-accent-lavender" />
            <div className="h-[40px] rounded-md bg-accent-indigo" />
          </div>
          <div className="h-[24px] w-2/3 rounded bg-gray-100" />
        </div>
      </div>
    ),
  },
  {
    id: "pathways",
    badge: "LEARNING PATHWAYS",
    title: "Guide learners from start to certified",
    description:
      "Sequence courses into structured journeys with prerequisites, deadlines, and compliance rules. Learners see a clear path forward; managers see who's on track.",
    features: [
      "Prerequisite-based course sequencing",
      "Automated deadline and renewal reminders",
      "Compliance rule enforcement and tracking",
      "Self-enrol and manager-assigned options",
      "Branching pathways for role-based learning",
    ],
    accent: "bg-accent-lavender",
    image: (
      <div className="rounded-lg border border-border-subtle bg-bg-white p-md shadow-card">
        <div className="space-y-sm">
          <div className="flex items-center gap-sm">
            <div className="h-[36px] w-[36px] rounded-md bg-brand-50 flex items-center justify-center text-label-sm font-semibold text-action-primary">1</div>
            <div className="flex-1 h-[10px] rounded bg-gray-100" />
            <div className="h-[4px] w-[24px] rounded bg-gray-200" />
          </div>
          <div className="flex items-center gap-sm">
            <div className="h-[36px] w-[36px] rounded-md bg-accent-lavender flex items-center justify-center text-label-sm font-semibold text-brand-500">2</div>
            <div className="flex-1 h-[10px] rounded bg-gray-100" />
            <div className="h-[4px] w-[24px] rounded bg-gray-200" />
          </div>
          <div className="flex items-center gap-sm">
            <div className="h-[36px] w-[36px] rounded-md bg-success-100 flex items-center justify-center text-label-sm font-semibold text-success-700">3</div>
            <div className="flex-1 h-[10px] rounded bg-gray-100" />
            <div className="h-[4px] w-[24px] rounded bg-success-300" />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "assessments",
    badge: "ASSESSMENTS & CERTIFICATION",
    title: "Prove competency, not just completion",
    description:
      "Go beyond completion tracking with built-in assessments, practical evaluations, and auto-issued certificates that prove real competency.",
    features: [
      "Quizzes with automated grading and feedback",
      "Practical evaluation workflows",
      "Auto-issued branded certificates",
      "Competency mapping and gap analysis",
      "Reassessment and recertification scheduling",
    ],
    accent: "bg-accent-indigo",
    image: (
      <div className="rounded-lg border border-border-subtle bg-bg-white p-md shadow-card">
        <div className="flex items-center justify-between mb-md">
          <span className="text-label-sm text-text-secondary">Assessment Results</span>
          <span className="text-label-sm font-medium text-success-700">Passed</span>
        </div>
        <div className="space-y-sm">
          <div className="flex items-center gap-sm">
            <div className="h-[8px] flex-1 rounded-full bg-gray-50"><div className="h-[8px] w-[85%] rounded-full bg-success-500" /></div>
            <span className="text-label-sm text-text-secondary">85%</span>
          </div>
          <div className="flex items-center gap-sm">
            <div className="h-[8px] flex-1 rounded-full bg-gray-50"><div className="h-[8px] w-[92%] rounded-full bg-success-500" /></div>
            <span className="text-label-sm text-text-secondary">92%</span>
          </div>
          <div className="flex items-center gap-sm">
            <div className="h-[8px] flex-1 rounded-full bg-gray-50"><div className="h-[8px] w-[78%] rounded-full bg-success-500" /></div>
            <span className="text-label-sm text-text-secondary">78%</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "analytics",
    badge: "REPORTING & COMPLIANCE",
    title: "Audit-ready, always",
    description:
      "Real-time dashboards show completion rates, overdue training, and compliance gaps — all exportable for audit season.",
    features: [
      "Real-time completion and progress dashboards",
      "Time-to-competency and ROI tracking",
      "Overdue training escalation and alerts",
      "One-click audit-ready PDF exports",
      "Role-based reporting access controls",
    ],
    accent: "bg-success-100",
    image: (
      <div className="rounded-lg border border-border-subtle bg-bg-white p-md shadow-card">
        <div className="grid grid-cols-2 gap-sm mb-md">
          <div className="rounded-md bg-brand-50 p-sm text-center">
            <div className="text-h3 font-semibold text-action-primary">97%</div>
            <div className="text-label-sm text-text-secondary">Compliant</div>
          </div>
          <div className="rounded-md bg-accent-fuchsia p-sm text-center">
            <div className="text-h3 font-semibold text-warning-700">3</div>
            <div className="text-label-sm text-text-secondary">Overdue</div>
          </div>
        </div>
        <div className="h-[40px] rounded-md bg-gray-50" />
      </div>
    ),
  },
];

const integrations = [
  "BambooHR",
  "Workday",
  "Okta",
  "Azure AD",
  "Slack",
  "Microsoft Teams",
  "Google Workspace",
  "Salesforce",
  "Zapier",
];

export default function ProductPage() {
  return (
    <>
      <section className="bg-bg-primary py-section-hero">
        <Container>
          <ScrollReveal>
            <Badge>PRODUCT</Badge>
            <h1 className="text-h1 mt-sm max-w-3xl text-text-primary font-display">
              Everything you need to run workplace learning
            </h1>
            <p className="text-body-lg mt-sm max-w-2xl text-text-secondary">
              One platform for creating, assigning, tracking, and certifying — no add-ons required.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      {deepDives.map((dive, i) => (
        <section
          key={dive.id}
          id={dive.id}
          className={i % 2 === 0 ? "bg-bg-white" : "bg-bg-primary"}
        >
          <Container className="py-section">
            <div className={`grid items-center gap-xxl lg:grid-cols-2 ${i % 2 !== 0 ? "lg:grid-flow-dense" : ""}`}>
              <div className={i % 2 !== 0 ? "lg:col-start-2" : ""}>
                <ScrollReveal>
                  <Badge>{dive.badge}</Badge>
                  <h2 className="text-h2 mt-sm text-text-primary font-display">
                    {dive.title}
                  </h2>
                  <p className="text-body-lg mt-sm text-text-secondary">
                    {dive.description}
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={1}>
                  <ul className="mt-lg space-y-xs">
                    {dive.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-xs">
                        <svg
                          className="mt-[3px] shrink-0 text-action-primary"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M3 8.5L6.5 12L13 4"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="text-body-md text-text-primary">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </ScrollReveal>
              </div>
              <ScrollReveal delay={1} className={i % 2 !== 0 ? "lg:col-start-1 lg:row-start-1" : ""}>
                {dive.image}
              </ScrollReveal>
            </div>
          </Container>
        </section>
      ))}

      <section id="integrations" className="bg-bg-white py-section">
        <Container>
          <ScrollReveal>
            <div className="text-center">
              <Badge>INTEGRATIONS</Badge>
              <h2 className="text-h2 mt-sm text-text-primary font-display">
                Connects with tools you already use
              </h2>
              <p className="text-body-lg mt-xs mx-auto max-w-xl text-text-secondary">
                Sync with your HRIS, SSO, and communication platforms — no manual data entry required.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <div className="mt-xxl flex flex-wrap items-center justify-center gap-xl">
              {integrations.map((name) => (
                <div
                  key={name}
                  className="flex h-[56px] min-w-[120px] items-center justify-center rounded-lg border border-border-subtle/50 bg-bg-white px-lg shadow-card transition-all duration-200 hover:shadow-card-hover hover:-translate-y-px"
                >
                  <span className="text-body-sm font-semibold text-gray-300 font-display">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <div className="mt-lg text-center">
              <Button href="#" variant="ghost" size="sm">
                View all integrations →
              </Button>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <CTASection
        variant="mid"
        headline="See the full platform in action"
        subtext="Get a personalised walkthrough of how Sodium Learn fits your team's workflow."
      />

      <CTASection
        variant="bottom"
        headline="Your learning platform shouldn't need 5 other tools"
        subtext="One platform. One subscription. Zero complexity."
      />
    </>
  );
}