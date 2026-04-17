import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { client } from "@/lib/sanity/client";
import { POSTS_QUERY } from "@/lib/sanity/queries";

export const revalidate = 3600;

export const metadata: Metadata = generatePageMetadata({
  title: "Blog",
  description:
    "Insights on workplace learning, compliance training, onboarding, and L&D strategy from the Sodium Learn team.",
  path: "/blog",
});

const fallbackPosts = [
  {
    title: "Why 70% compliance completion rates aren't good enough",
    slug: "why-70-percent-compliance-completion-not-enough",
    excerpt:
      "Most organisations accept mediocre completion rates as normal. Here's why that's a problem — and how to fix it.",
    category: "Compliance",
    publishedAt: "2026-04-10",
    author: { name: "Waliul Islam" },
  },
  {
    title: "The real cost of a bad onboarding experience",
    slug: "real-cost-bad-onboarding-experience",
    excerpt:
      "Poor onboarding doesn't just annoy new hires — it costs real money in productivity, retention, and manager time.",
    category: "Onboarding",
    publishedAt: "2026-04-03",
    author: { name: "Waliul Islam" },
  },
  {
    title: "LMS vs LXP: What's the difference and does it matter?",
    slug: "lms-vs-lxp-difference",
    excerpt:
      "The LMS vs LXP debate misses the point. Here's what actually matters when choosing a learning platform.",
    category: "Industry Trends",
    publishedAt: "2026-03-27",
    author: { name: "Waliul Islam" },
  },
  {
    title: "5 ways AI is changing workplace learning in 2026",
    slug: "5-ways-ai-changing-workplace-learning-2026",
    excerpt:
      "From content generation to personalised pathways, AI is transforming how organisations approach L&D.",
    category: "Product Updates",
    publishedAt: "2026-03-20",
    author: { name: "Waliul Islam" },
  },
  {
    title: "How to build a compliance training programme that people actually follow",
    slug: "build-compliance-programme-people-follow",
    excerpt:
      "A practical guide to designing compliance training that achieves 95%+ completion — without nagging.",
    category: "Guides",
    publishedAt: "2026-03-13",
    author: { name: "Waliul Islam" },
  },
  {
    title: "Measuring L&D ROI: A framework that actually works",
    slug: "measuring-ld-roi-framework",
    excerpt:
      "Stop counting course completions. Here's a framework for measuring the business impact of your learning programmes.",
    category: "Guides",
    publishedAt: "2026-03-06",
    author: { name: "Waliul Islam" },
  },
];

interface PostCard {
  title: string;
  slug: string;
  excerpt: string;
  category?: string;
  publishedAt: string;
  author?: { name: string };
}

async function getPosts(): Promise<PostCard[]> {
  try {
    if (!client) return fallbackPosts;
    const posts = await client.fetch(POSTS_QUERY);
    if (posts && posts.length > 0) return posts;
  } catch {
    // Sanity not configured yet — use fallback
  }
  return fallbackPosts;
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      <section className="bg-bg-primary py-section-hero">
        <Container>
          <ScrollReveal>
            <Badge>BLOG</Badge>
            <h1 className="text-h1 mt-sm text-text-primary font-display">
              Insights on workplace learning
            </h1>
            <p className="text-body-lg mt-sm max-w-2xl text-text-secondary">
              Practical strategies, industry analysis, and product updates from the Sodium Learn team.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      <section className="bg-bg-white py-section">
        <Container>
          <div className="grid gap-lg sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={Math.min(i + 1, 3)}>
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <article className="flex h-full flex-col rounded-lg border border-border-subtle bg-bg-primary p-md shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-px">
                    {post.category && (
                      <Badge className="mb-xs">{post.category}</Badge>
                    )}
                    <h2 className="text-h4 font-medium text-text-primary font-display transition-colors group-hover:text-action-primary">
                      {post.title}
                    </h2>
                    <p className="mt-xs text-body-sm text-text-secondary line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="mt-auto flex items-center gap-xs pt-md text-label-sm text-text-secondary">
                      {post.author && <span>{post.author.name}</span>}
                      {post.author && <span>·</span>}
                      <time dateTime={post.publishedAt}>
                        {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </time>
                    </div>
                  </article>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}