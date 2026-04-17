import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { client } from "@/lib/sanity/client";
import { POST_SLUGS_QUERY, SOLUTION_SLUGS_QUERY } from "@/lib/sanity/queries";

const fallbackBlogSlugs = [
  "why-70-percent-compliance-completion-not-enough",
  "real-cost-bad-onboarding-experience",
  "lms-vs-lxp-difference",
  "5-ways-ai-changing-workplace-learning-2026",
  "build-compliance-programme-people-follow",
  "measuring-ld-roi-framework",
];

const fallbackSolutionSlugs = [
  "compliance-training",
  "employee-onboarding",
  "professional-development",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages = [
    { path: "", changeFrequency: "weekly" as const, priority: 1 },
    { path: "/product", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/solutions", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/about", changeFrequency: "monthly" as const, priority: 0.5 },
    { path: "/blog", changeFrequency: "daily" as const, priority: 0.8 },
  ];

  let blogSlugs = fallbackBlogSlugs;
  let solutionSlugs = fallbackSolutionSlugs;

  try {
    const sanityBlogSlugs = await client.fetch(POST_SLUGS_QUERY);
    if (sanityBlogSlugs && sanityBlogSlugs.length > 0) {
      blogSlugs = sanityBlogSlugs;
    }
    const sanitySolutionSlugs = await client.fetch(SOLUTION_SLUGS_QUERY);
    if (sanitySolutionSlugs && sanitySolutionSlugs.length > 0) {
      solutionSlugs = sanitySolutionSlugs;
    }
  } catch {
    // Use fallbacks
  }

  return [
    ...staticPages.map((page) => ({
      url: `${SITE_URL}${page.path}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...solutionSlugs.map((slug: string) => ({
      url: `${SITE_URL}/solutions/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...blogSlugs.map((slug: string) => ({
      url: `${SITE_URL}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
  ];
}