import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/layout/Container";
import { CTASection } from "@/components/sections/CTASection";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { client } from "@/lib/sanity/client";
import { TEAM_QUERY } from "@/lib/sanity/queries";

export const revalidate = 3600;

export const metadata: Metadata = generatePageMetadata({
  title: "About",
  description:
    "Sodium Learn started from a simple frustration: why is workplace learning software so hard to use?",
  path: "/about",
});

const values = [
  {
    title: "Simplicity over complexity",
    description:
      "If it needs a training session to use, we redesign it. Learning software should be the easiest tool in your stack.",
    icon: (
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    ),
  },
  {
    title: "Outcomes over features",
    description:
      "We don't ship features for their own sake. Every addition must measurably improve learning outcomes or save admin time.",
    icon: (
      <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z" />
    ),
  },
  {
    title: "Learners first",
    description:
      "The best learning programme fails if learners don't complete it. We design for the person taking the course, not just the admin assigning it.",
    icon: (
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    ),
  },
];

const fallbackTeam = [
  {
    name: "Waliul Islam",
    role: "Founder & CEO",
    bio: "Former L&D consultant frustrated with the tools available. Built Sodium Learn to be the platform he wished existed.",
  },
  {
    name: "Jamee",
    role: "Head of Design",
    bio: "Design obsessive who believes enterprise software doesn't have to look like enterprise software.",
  },
  {
    name: "Zubayer",
    role: "Lead Engineer",
    bio: "Full-stack engineer with a focus on performance and accessibility. Ships clean code fast.",
  },
];

const avatarGradients = [
  "from-brand-200 to-brand-400",
  "from-success-300 to-brand-300",
  "from-info-300 to-brand-500",
];

interface TeamMember {
  name: string;
  role: string;
  bio?: string;
  photo?: { asset: { _ref: string } };
  linkedin?: string;
}

async function getTeam(): Promise<TeamMember[]> {
  try {
    const team = await client.fetch(TEAM_QUERY);
    if (team && team.length > 0) return team;
  } catch {
    // Sanity not configured yet
  }
  return fallbackTeam;
}

export default async function AboutPage() {
  const team = await getTeam();

  return (
    <>
      <section className="bg-bg-primary py-section-hero">
        <Container>
          <ScrollReveal>
            <Badge>ABOUT</Badge>
            <h1 className="text-h1 mt-sm max-w-3xl text-text-primary font-display">
              Building the future of workplace learning
            </h1>
            <p className="text-body-lg mt-sm max-w-2xl text-text-secondary">
              Sodium Learn started from a simple frustration: why is workplace
              learning software so hard to use?
            </p>
          </ScrollReveal>
        </Container>
      </section>

      <section className="bg-bg-white py-section">
        <Container>
          <div className="grid items-center gap-xxl lg:grid-cols-2">
            <ScrollReveal>
              <Badge>OUR STORY</Badge>
              <h2 className="text-h2 mt-sm text-text-primary font-display">
                We got tired of the status quo
              </h2>
              <div className="mt-md space-y-md text-body-md text-text-secondary">
                <p>
                  After years of implementing and managing enterprise LMS
                  platforms for clients, our founder Waliul kept hearing the
                  same complaint: &ldquo;This software makes my job harder, not
                  easier.&rdquo;
                </p>
                <p>
                  Compliance training completion rates hovered around 70%.
                  Onboarding took weeks longer than it should. L&D managers
                  spent more time fighting software than designing learning
                  experiences.
                </p>
                <p>
                  Sodium Learn was built to flip that equation. Every feature
                  is designed to reduce admin overhead and increase learner
                  engagement — because the best learning programme is one
                  that people actually complete.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <div className="rounded-lg border border-border-subtle bg-bg-primary p-xxl shadow-card">
                <div className="text-display-2 font-semibold text-action-primary">
                  50+
                </div>
                <p className="text-body-lg text-text-secondary">
                  Organisations trust Sodium Learn
                </p>
                <div className="mt-xxl grid grid-cols-3 gap-sm text-center">
                  <div>
                    <div className="text-h3 font-semibold text-text-primary">
                      94%
                    </div>
                    <div className="text-label-sm text-text-secondary">
                      Avg. completion
                    </div>
                  </div>
                  <div>
                    <div className="text-h3 font-semibold text-text-primary">
                      7h
                    </div>
                    <div className="text-label-sm text-text-secondary">
                      Saved/week
                    </div>
                  </div>
                  <div>
                    <div className="text-h3 font-semibold text-text-primary">
                      15m
                    </div>
                    <div className="text-label-sm text-text-secondary">
                      To launch
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <section className="bg-bg-primary py-section">
        <Container>
          <ScrollReveal>
            <Badge>VALUES</Badge>
            <h2 className="text-h2 mt-sm text-text-primary font-display">
              What we believe
            </h2>
          </ScrollReveal>
          <div className="mt-xxl grid gap-lg lg:grid-cols-3">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i + 1}>
                <Card className="h-full">
                  <div className="mb-sm flex h-[40px] w-[40px] items-center justify-center rounded-md bg-brand-50 text-action-primary">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      {value.icon}
                    </svg>
                  </div>
                  <h3 className="text-h4 font-medium text-text-primary font-display">
                    {value.title}
                  </h3>
                  <p className="mt-xs text-body-md text-text-secondary">
                    {value.description}
                  </p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="careers" className="bg-bg-white py-section">
        <Container>
          <ScrollReveal>
            <Badge>TEAM</Badge>
            <h2 className="text-h2 mt-sm text-text-primary font-display">
              The people behind Sodium Learn
            </h2>
          </ScrollReveal>
          <div className="mt-xxl grid gap-lg sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} delay={i + 1}>
                <div className="flex h-full flex-col">
                  <div className={`mb-sm flex h-[64px] w-[64px] items-center justify-center rounded-full bg-gradient-to-br ${avatarGradients[i % avatarGradients.length]}`}>
                    <span className="text-body-lg font-bold text-white">
                      {member.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <h3 className="text-h4 font-medium text-text-primary font-display">
                    {member.name}
                  </h3>
                  <p className="text-body-sm font-medium text-action-primary">
                    {member.role}
                  </p>
                  {member.bio && (
                    <p className="mt-xs text-body-sm text-text-secondary">
                      {member.bio}
                    </p>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        variant="bottom"
        headline="Join the team reimagining workplace learning"
        subtext="We're a small, focused team building something that matters. If that sounds interesting, we'd love to hear from you."
      />
    </>
  );
}