import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { generatePageMetadata } from "@/lib/seo";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/layout/Container";
import { CTASection } from "@/components/sections/CTASection";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { client } from "@/lib/sanity/client";
import {
  SOLUTION_BY_SLUG_QUERY,
  SOLUTION_SLUGS_QUERY,
} from "@/lib/sanity/queries";

export const revalidate = 3600;

interface SolutionData {
  title: string;
  headline: string;
  description: string;
  problem: string;
  solution: string;
  features: { title: string; description: string }[];
  testimonial: {
    quote: string;
    metric: string;
    name: string;
    title: string;
    company: string;
  };
  color: string;
  iconColor: string;
}

const fallbackSolutions: Record<string, SolutionData> = {
  "compliance-training": {
    title: "Compliance Training",
    headline: "Compliance training that people actually complete",
    description:
      "Automate mandatory training, track completions in real time, and stay audit-ready year-round.",
    problem:
      "Most compliance training platforms are built for content storage, not completion. Learners forget deadlines, managers can't see who's overdue, and auditors ask for reports that take hours to compile.",
    solution:
      "Sodium Learn automates the entire compliance cycle — from assignment to reminder to certification. Managers see real-time compliance gaps; auditors get one-click reports.",
    features: [
      { title: "Automated assignment & reminders", description: "Set compliance rules once. Learners get auto-assigned and reminded — no manual chasing." },
      { title: "Real-time compliance dashboards", description: "See who's compliant, overdue, and at risk across every team and regulation." },
      { title: "Audit-ready exports", description: "One-click PDF reports with full timestamps, completion records, and certificate verification." },
      { title: "Recertification tracking", description: "Automated renewal reminders before certificates expire. Never let compliance lapse again." },
    ],
    testimonial: {
      quote: "Compliance training completion went from 72% to 97% in the first quarter. Our auditors were impressed.",
      metric: "97% completion rate",
      name: "James Okafor",
      title: "Compliance Director",
      company: "Meridian Health",
    },
    color: "bg-brand-50",
    iconColor: "text-action-primary",
  },
  "employee-onboarding": {
    title: "Employee Onboarding",
    headline: "Onboard new hires in half the time",
    description:
      "Structured pathways, automated assignments, and real-time progress tracking get new hires productive faster.",
    problem:
      "Onboarding is usually a scattered mix of PDFs, live sessions, and hope. New hires get overwhelmed, managers lose track of progress, and time-to-productivity stretches for months.",
    solution:
      "Sodium Learn gives every new hire a clear, sequential onboarding pathway. Managers track progress in real time. No one falls through the cracks.",
    features: [
      { title: "Structured onboarding pathways", description: "Sequence induction modules, policy reviews, and role-specific training into one clear journey." },
      { title: "Automated assignments", description: "New hires auto-enrol on their start date. No manual setup or missed steps." },
      { title: "Manager dashboards", description: "See each new hire's progress at a glance. Intervene early when someone falls behind." },
      { title: "Peer & mentor connections", description: "Blend online modules with in-person touchpoints for a complete onboarding experience." },
    ],
    testimonial: {
      quote: "We cut onboarding time by 60%. New hires are productive in their first week instead of their first month.",
      metric: "60% faster onboarding",
      name: "Sarah Chen",
      title: "Head of People",
      company: "NovaCare",
    },
    color: "bg-accent-lavender",
    iconColor: "text-brand-500",
  },
  "professional-development": {
    title: "Professional Development",
    headline: "Professional development that scales with your team",
    description:
      "Skills gap analysis, pathway libraries, and certification tracking for continuous growth.",
    problem:
      "Professional development is often ad hoc — one-off courses with no connection to career goals or business needs. There's no visibility into skills gaps and no way to track ROI.",
    solution:
      "Sodium Learn maps learning to competency frameworks. Learners self-direct their development; managers see skills gaps and progress at a glance.",
    features: [
      { title: "Competency mapping", description: "Define skills frameworks and map courses to competencies. See exactly where gaps exist." },
      { title: "Self-directed learning", description: "Learners browse and enrol in development pathways aligned with their career goals." },
      { title: "Certification tracking", description: "Track qualifications, expiry dates, and recertification requirements in one place." },
      { title: "ROI measurement", description: "Link learning outcomes to business metrics. Prove the value of your L&D investment." },
    ],
    testimonial: {
      quote: "I used to spend an entire day each week chasing training records. Now it takes 20 minutes.",
      metric: "7+ hours saved/week",
      name: "Priya Sharma",
      title: "L&D Manager",
      company: "TechFlow",
    },
    color: "bg-success-100",
    iconColor: "text-success-700",
  },
};

interface SanitySolutionSection {
  label?: string;
  heading?: string;
  body?: unknown[];
  image?: { asset: { _ref: string } };
  features?: string[];
}

interface SanitySolution {
  _id: string;
  title: string;
  slug: string;
  headline: string;
  description: string;
  sections?: SanitySolutionSection[];
  seo?: { metaTitle?: string; metaDescription?: string };
}

async function getSolution(slug: string): Promise<SanitySolution | null> {
  try {
    if (!client) return null;
    const solution = await client.fetch(SOLUTION_BY_SLUG_QUERY, { slug });
    if (solution) return solution;
  } catch {
    // Sanity not configured yet
  }
  return null;
}

async function getSlugs(): Promise<string[]> {
  try {
    if (!client) return Object.keys(fallbackSolutions);
    const slugs = await client.fetch(SOLUTION_SLUGS_QUERY);
    if (slugs && slugs.length > 0) return slugs;
  } catch {
    // Fall through to fallback
  }
  return Object.keys(fallbackSolutions);
}

export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const sanitySolution = await getSolution(slug);
  const fallback = fallbackSolutions[slug];

  const title = sanitySolution?.seo?.metaTitle || sanitySolution?.headline || fallback?.headline;
  const description = sanitySolution?.seo?.metaDescription || sanitySolution?.description || fallback?.description;

  if (!title) return generatePageMetadata({ title: "Solutions", path: "/solutions" });
  return generatePageMetadata({ title, description, path: `/solutions/${slug}` });
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sanitySolution = await getSolution(slug);
  const fallback = fallbackSolutions[slug];

  if (!sanitySolution && !fallback) {
    notFound();
  }

  const title = sanitySolution?.title || fallback?.title || "";
  const headline = sanitySolution?.headline || fallback?.headline || "";
  const description = sanitySolution?.description || fallback?.description || "";
  const problem = fallback?.problem || "";
  const solution = fallback?.solution || "";
  const features = fallback?.features || [];
  const testimonial = fallback?.testimonial;

  return (
    <>
      <section className="bg-bg-primary py-section-hero">
        <Container>
          <ScrollReveal>
            <Badge>{title.toUpperCase()}</Badge>
            <h1 className="text-h1 mt-sm max-w-3xl text-text-primary font-display">
              {headline}
            </h1>
            <p className="text-body-lg mt-sm max-w-2xl text-text-secondary">
              {description}
            </p>
          </ScrollReveal>
        </Container>
      </section>

      <section className="bg-bg-white py-section">
        <Container>
          <div className="grid gap-xxl lg:grid-cols-2">
            <ScrollReveal>
              <Badge>THE PROBLEM</Badge>
              <h2 className="text-h3 mt-sm text-text-primary font-display">
                {slug === "compliance-training"
                  ? "Compliance doesn't have to be this hard"
                  : slug === "employee-onboarding"
                  ? "Onboarding doesn't have to be this slow"
                  : "Development doesn't have to be this ad hoc"}
              </h2>
              <p className="text-body-lg mt-sm text-text-secondary">
                {problem}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <Badge>OUR SOLUTION</Badge>
              <h2 className="text-h3 mt-sm text-text-primary font-display">
                {slug === "compliance-training"
                  ? "Automate the cycle, prove the outcomes"
                  : slug === "employee-onboarding"
                  ? "Structure the journey, track the progress"
                  : "Map the skills, measure the impact"}
              </h2>
              <p className="text-body-lg mt-sm text-text-secondary">
                {solution}
              </p>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <section className="bg-bg-primary py-section">
        <Container>
          <ScrollReveal>
            <Badge>KEY FEATURES</Badge>
            <h2 className="text-h2 mt-sm text-text-primary font-display">
              Purpose-built for {title.toLowerCase()}
            </h2>
          </ScrollReveal>
          <div className="mt-xxl grid gap-lg sm:grid-cols-2">
            {features.map((feature, i) => (
              <ScrollReveal key={feature.title} delay={i + 1}>
                <Card className="h-full">
                  <h3 className="text-h4 font-medium text-text-primary font-display">
                    {feature.title}
                  </h3>
                  <p className="mt-xs text-body-md text-text-secondary">
                    {feature.description}
                  </p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {testimonial && (
        <section className="bg-bg-white py-section">
          <Container>
            <ScrollReveal>
              <div className="mx-auto max-w-2xl">
                <span className="mb-sm inline-block rounded-md bg-success-100 px-sm py-xs text-label-sm font-medium text-success-700">
                  {testimonial.metric}
                </span>
                <blockquote className="text-h3 font-medium text-text-primary font-display">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="mt-md">
                  <p className="text-body-md font-medium text-text-primary">
                    {testimonial.name}
                  </p>
                  <p className="text-body-sm text-text-secondary">
                    {testimonial.title}, {testimonial.company}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </Container>
        </section>
      )}

      <CTASection
        variant="bottom"
        headline={`Ready to transform your ${title.toLowerCase()}?`}
        subtext="See how Sodium Learn can automate your workflow and prove outcomes."
      />
    </>
  );
}