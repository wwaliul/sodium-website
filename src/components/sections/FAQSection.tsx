import { Badge } from "@/components/ui/Badge";
import { Accordion } from "@/components/ui/Accordion";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { PortableText } from "@portabletext/react";
import type { ReactNode } from "react";

const fallbackFaqs = [
  {
    question: "What is Sodium Learn?",
    answer:
      "Sodium Learn is an all-in-one workplace learning platform that lets you create courses, build learning pathways, assign learners, and track completion — all from a single, easy-to-use interface.",
  },
  {
    question: "How is Sodium Learn different from a traditional LMS?",
    answer:
      "Traditional LMS platforms are built for content hosting. Sodium Learn is built for learning outcomes. We combine course authoring, pathway management, compliance tracking, and real-time analytics in one platform.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes. We offer a 14-day free trial with full access to all features. No credit card required. You can also request a personalised demo.",
  },
  {
    question: "How long does it take to deploy?",
    answer:
      "Most teams are up and running within a day. Our onboarding wizard guides you through setup, and you can import existing content or start from templates.",
  },
  {
    question: "What integrations do you support?",
    answer:
      "Sodium Learn integrates with popular HRIS systems (BambooHR, Workday), SSO providers (Okta, Azure AD), and communication tools (Slack, Microsoft Teams). We also offer a REST API for custom integrations.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. We encrypt all data at rest and in transit, and host on AWS infrastructure with 99.9% uptime.",
  },
  {
    question: "Which industries do you support?",
    answer:
      "Sodium Learn is built for compliance-heavy and distributed organisations across healthcare, manufacturing, retail, financial services, government, and non-profits. If your team runs recurring training or has regulatory requirements, it's likely a fit.",
  },
  {
    question: "Is Sodium Learn AI-powered?",
    answer:
      "Sodium Learn is built with AI in mind — it's part of our product roadmap and architecture. Current features focus on fast content creation, structured workflows, and real-time reporting. AI-assisted capabilities will be released as they become available.",
  },
];

interface FAQSectionProps {
  sanityData?: unknown[];
}

interface NormalizedFaq {
  question: string;
  answer: string | unknown[];
}

function normalizeFaqs(sanityData: unknown[]): NormalizedFaq[] {
  return sanityData
    .filter((f): f is Record<string, unknown> => typeof f === "object" && f !== null)
    .map((f) => ({
      question: (f.question as string) || "",
      answer: Array.isArray(f.answer) ? f.answer : (f.answer as string) || "",
    }))
    .filter((f) => f.question);
}

function FaqAnswer({ answer }: { answer: string | unknown[] }) {
  if (typeof answer === "string") return <>{answer}</>;
  // @ts-expect-error PortableText type mismatch
  return <PortableText value={answer} />;
}

export function FAQSection({ sanityData }: FAQSectionProps) {
  const normalized =
    sanityData && sanityData.length > 0
      ? normalizeFaqs(sanityData)
      : fallbackFaqs.map((faq) => ({
          question: faq.question,
          answer: faq.answer as string | unknown[],
        }));

  const items = normalized.map((faq) => ({
    question: faq.question,
    answer: <FaqAnswer answer={faq.answer} /> as ReactNode,
  }));

  return (
    <section className="bg-bg-primary py-section">
      <Container>
        <ScrollReveal>
          <div className="mx-auto max-w-2xl">
            <Badge>FAQ</Badge>
            <h2 className="text-h2 mt-sm text-text-primary font-display">
              Common questions about Sodium Learn
            </h2>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <div className="mx-auto mt-xl max-w-2xl">
            <Accordion items={items} />
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}