import { draftMode } from "next/headers";
import { Hero } from "@/components/sections/Hero";
import { ProductPreview } from "@/components/sections/ProductPreview";
import { Problem } from "@/components/sections/Problem";
import { CreateManageLearn } from "@/components/sections/CreateManageLearn";
import { WhySwitch } from "@/components/sections/WhySwitch";
import { Outcomes } from "@/components/sections/Outcomes";
import { UseCases } from "@/components/sections/UseCases";
import { Trust } from "@/components/sections/Trust";
import { TestimonialsWall } from "@/components/sections/TestimonialsWall";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
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
      <ProductPreview />
      <Problem />
      <CreateManageLearn />
      <WhySwitch />
      <Outcomes />
      <UseCases />
      <Trust />
      <TestimonialsWall sanityData={sanityTestimonials} />
      <FAQSection sanityData={sanityFaqs} />
      <CTASection variant="bottom" />
    </>
  );
}