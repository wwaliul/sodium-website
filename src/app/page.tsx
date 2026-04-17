import { draftMode } from "next/headers";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { SocialProof } from "@/components/sections/SocialProof";
import { Stats } from "@/components/sections/Stats";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Features } from "@/components/sections/Features";
import { CTASection } from "@/components/sections/CTASection";
import { FeatureShowcase } from "@/components/sections/FeatureShowcase";
import { WhySwitch } from "@/components/sections/WhySwitch";
import { UseCases } from "@/components/sections/UseCases";
import { TestimonialsWall } from "@/components/sections/TestimonialsWall";
import { FAQSection } from "@/components/sections/FAQSection";
import { getDraftClient } from "@/lib/sanity/client";
import { TESTIMONIALS_QUERY, FAQ_QUERY } from "@/lib/sanity/queries";
import { SanityVisualEditing } from "@/components/sanity/VisualEditing";

export const revalidate = 3600;

export default async function Home() {
  const draft = await draftMode();
  const client = await getDraftClient();

  let sanityTestimonials: unknown[] = [];
  let sanityFaqs: unknown[] = [];

  try {
    sanityTestimonials = await client.fetch(TESTIMONIALS_QUERY);
    sanityFaqs = await client.fetch(FAQ_QUERY);
  } catch {
    // Sanity not configured — components use their own fallbacks
  }

  return (
    <>
      {draft.isEnabled && <SanityVisualEditing />}
      <Hero />
      <SocialProof />
      <Stats />
      <HowItWorks />
      <Features />
      <CTASection
        variant="mid"
        headline="Ready to see what 7 hours saved looks like?"
        subtext="Teams using Sodium Learn reclaim over 7 hours a week on learning administration. That's time back for strategy, not spreadsheets."
      />
      <FeatureShowcase />
      <WhySwitch />
      <UseCases />
      <TestimonialsWall sanityData={sanityTestimonials} />
      <FAQSection sanityData={sanityFaqs} />
      <CTASection
        variant="bottom"
        headline="Stop managing learning. Start delivering outcomes."
        subtext="Run training, knowledge, and learning all in one place."
      />
    </>
  );
}
