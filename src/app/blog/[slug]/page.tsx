import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/layout/Container";
import { CTASection } from "@/components/sections/CTASection";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { client } from "@/lib/sanity/client";
import {
  POST_BY_SLUG_QUERY,
  POST_SLUGS_QUERY,
} from "@/lib/sanity/queries";
import { PortableText } from "@portabletext/react";

export const revalidate = 3600;

const fallbackPosts: Record<string, {
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  author: { name: string; role: string };
  body: string;
}> = {
  "why-70-percent-compliance-completion-not-enough": {
    title: "Why 70% compliance completion rates aren't good enough",
    excerpt:
      "Most organisations accept mediocre completion rates as normal. Here's why that's a problem — and how to fix it.",
    category: "Compliance",
    publishedAt: "2026-04-10",
    author: { name: "Waliul Islam", role: "Founder & CEO" },
    body: `If your compliance training completion rate sits around 70%, you're in good company — most organisations report similar numbers. But "normal" doesn't mean acceptable.

The 30% who don't complete represent real risk: regulatory fines, legal exposure, and gaps in your audit trail. More importantly, they represent people who didn't get the training they need to do their jobs safely and effectively.

## Why completion rates are low

Three factors drive most compliance training failures:

1. **Friction in the experience.** Learners have to log into a separate system, navigate to the right course, and figure out the interface before they even start learning.

2. **No accountability visibility.** Managers can't see who's overdue until it's too late. By the time they follow up, the deadline has passed.

3. **Content that doesn't respect the learner's time.** Long, generic modules that could be shorter and more targeted.

## What 97%+ completion looks like

When organisations switch to Sodium Learn, completion rates typically jump to 95-97% within the first quarter. Here's what they do differently:

- **Automated assignments and reminders.** Learners get assigned the moment a compliance requirement applies to them, and receive automatic reminders before deadlines.

- **Manager dashboards.** Real-time visibility into who's compliant, overdue, and at risk — so interventions happen early, not after the deadline.

- **Mobile-first content.** Learners complete training on their phone during a commute or between meetings, not at a desktop they rarely use.

The difference isn't better content or more motivated learners. It's removing the friction that prevents completion in the first place.`,
  },
  "real-cost-bad-onboarding-experience": {
    title: "The real cost of a bad onboarding experience",
    excerpt:
      "Poor onboarding doesn't just annoy new hires — it costs real money in productivity, retention, and manager time.",
    category: "Onboarding",
    publishedAt: "2026-04-03",
    author: { name: "Waliul Islam", role: "Founder & CEO" },
    body: `A bad onboarding experience doesn't just make a poor first impression. It creates compounding costs that accumulate for months — sometimes years — after the new hire starts.

## The numbers

Research consistently shows:

- **Time to productivity.** The average new hire takes 8-12 months to reach full productivity. Structured onboarding can cut this by 50%+.

- **Turnover.** Employees who experience poor onboarding are 2x more likely to look for a new job in their first year.

- **Manager time.** Managers spend an average of 10+ hours per new hire on ad hoc onboarding tasks — time that could be automated.

## What good onboarding looks like

The best onboarding programmes share three traits:

1. **Structured pathways.** Every new hire follows a clear, sequenced journey — not a scattered list of PDFs and calendar invites.

2. **Automated assignments.** Training is assigned on the start date (or before). No manual setup by the manager.

3. **Visible progress.** The new hire, their manager, and HR all see progress in real time. No one falls through the cracks.

Sodium Learn was built to deliver exactly this. Our onboarding pathways reduce time-to-productivity and manager overhead — while giving new hires a first impression that says "this company has its act together."`,
  },
  "lms-vs-lxp-difference": {
    title: "LMS vs LXP: What's the difference and does it matter?",
    excerpt:
      "The LMS vs LXP debate misses the point. Here's what actually matters when choosing a learning platform.",
    category: "Industry Trends",
    publishedAt: "2026-03-27",
    author: { name: "Waliul Islam", role: "Founder & CEO" },
    body: `The learning technology space loves acronyms and categories. The latest debate — LMS vs LXP — has generated thousands of blog posts, comparison tables, and LinkedIn hot takes. But most of them miss the point.

## The traditional distinction

- **LMS (Learning Management System):** Focused on administration. Assign courses, track completions, generate reports. Built for compliance and mandatory training.

- **LXP (Learning Experience Platform):** Focused on discovery. Curated content, social learning, AI-driven recommendations. Built for self-directed professional development.

## Why the distinction is breaking down

In practice, most organisations need both. Compliance training needs admin controls and audit trails. Professional development needs self-directed discovery and engagement features.

The platforms that win are the ones that do both well — without requiring two separate systems, two subscriptions, and two sets of admin overhead.

## What actually matters

When choosing a learning platform, forget the acronym. Ask these questions instead:

1. **Will people actually complete the training?** Completion rate is the most important metric. Everything else is secondary.

2. **Can non-technical people create content?** If only your L&D team can build courses, you've created a bottleneck.

3. **Can managers see what's happening?** Real-time visibility prevents problems instead of documenting them after the fact.

4. **Does it reduce admin time?** Your learning platform should save hours, not create them.

Sodium Learn was built around these four questions. Whether you call it an LMS, LXP, or something else entirely — the platform that answers these questions well is the one that delivers results.`,
  },
};

interface SanityPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  mainImage?: { asset: { _ref: string } };
  category?: string;
  publishedAt: string;
  body?: Record<string, unknown>[];
  seo?: { metaTitle?: string; metaDescription?: string; ogImage?: { asset: { _ref: string } } };
  author?: { name: string; slug: string; image?: { asset: { _ref: string } }; role?: string; bio?: unknown[] };
  relatedPosts?: { title: string; slug: string; excerpt: string; publishedAt: string; category?: string }[];
}

async function getPost(slug: string): Promise<SanityPost | null> {
  try {
    const post = await client.fetch(POST_BY_SLUG_QUERY, { slug });
    if (post) return post;
  } catch {
    // Sanity not configured yet
  }
  return null;
}

async function getSlugs(): Promise<string[]> {
  try {
    const slugs = await client.fetch(POST_SLUGS_QUERY);
    if (slugs && slugs.length > 0) return slugs;
  } catch {
    // Fall through to fallback
  }
  return Object.keys(fallbackPosts);
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
  const sanityPost = await getPost(slug);
  const fallbackPost = fallbackPosts[slug];

  const title = sanityPost?.seo?.metaTitle || sanityPost?.title || fallbackPost?.title;
  const description = sanityPost?.seo?.metaDescription || sanityPost?.excerpt || fallbackPost?.excerpt;

  if (!title) return generatePageMetadata({ title: "Blog", path: "/blog" });
  return generatePageMetadata({ title, description, path: `/blog/${slug}` });
}

function renderFallbackBody(body: string) {
  const paragraphs = body.split("\n\n");
  return paragraphs.map((p, i) => {
    const trimmed = p.trim();
    if (trimmed.startsWith("## ")) {
      return (
        <h2 key={i} className="text-h3 mt-xxl mb-sm text-text-primary font-display">
          {trimmed.replace("## ", "")}
        </h2>
      );
    }
    if (trimmed.startsWith("1. ") || trimmed.startsWith("- ")) {
      const items = trimmed.split("\n");
      return (
        <ul key={i} className="my-sm space-y-xs">
          {items.map((item, j) => (
            <li
              key={j}
              className="text-body-md text-text-secondary"
              dangerouslySetInnerHTML={{
                __html: item
                  .replace(/^[\d]+\.\s\*\*|\-\s\*\*/g, "<strong>")
                  .replace(/\*\*(?=[.:,\s])/g, "</strong>")
                  .replace(/^\d+\.\s/, "")
                  .replace(/^-\s/, ""),
              }}
            />
          ))}
        </ul>
      );
    }
    return (
      <p key={i} className="text-body-md text-text-secondary my-sm">
        {trimmed}
      </p>
    );
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sanityPost = await getPost(slug);
  const fallbackPost = fallbackPosts[slug];

  if (!sanityPost && !fallbackPost) {
    notFound();
  }

  const title = sanityPost?.title || fallbackPost?.title || "";
  const category = sanityPost?.category || fallbackPost?.category || "";
  const publishedAt = sanityPost?.publishedAt || fallbackPost?.publishedAt || "";
  const author = sanityPost?.author || fallbackPost?.author;

  return (
    <>
      <article className="bg-bg-primary pb-section pt-xxl">
        <Container>
          <div className="mx-auto max-w-2xl">
            <ScrollReveal>
              <Link
                href="/blog"
                className="text-body-sm text-text-secondary transition-colors hover:text-action-primary"
              >
                ← Back to blog
              </Link>
              {category && (
                <Badge className="mt-md block w-fit">{category}</Badge>
              )}
              <h1 className="text-h1 mt-sm text-text-primary font-display">{title}</h1>
              <div className="mt-sm flex items-center gap-xs text-body-sm text-text-secondary">
                {author && (
                  <span className="font-medium text-text-primary">
                    {author.name}
                  </span>
                )}
                {author?.role && <span>·</span>}
                {author?.role && <span>{author.role}</span>}
                {publishedAt && <span>·</span>}
                {publishedAt && (
                  <time dateTime={publishedAt}>
                    {new Date(publishedAt).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                )}
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </article>

      <section className="bg-bg-white py-section">
        <Container>
          <div className="prose mx-auto max-w-2xl">
            {sanityPost?.body ? (
              <PortableText
                // @ts-expect-error — Sanity body shape is validated by GROQ at runtime
                value={sanityPost.body}
              />
            ) : (
              fallbackPost && renderFallbackBody(fallbackPost.body)
            )}
          </div>
        </Container>
      </section>

      <CTASection
        variant="mid"
        headline="Ready to transform your workplace learning?"
        subtext="See how Sodium Learn can improve completion rates and reduce admin time for your team."
      />
    </>
  );
}