import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const fallbackTestimonials = [
  {
    quote: "We cut onboarding time by 60%. New hires are productive in their first week instead of their first month.",
    metricHighlight: "60% faster onboarding",
    authorName: "Sarah Chen",
    authorTitle: "Head of People",
    authorCompany: "NovaCare",
  },
  {
    quote: "Compliance training completion went from 72% to 97% in the first quarter. Our auditors were impressed.",
    metricHighlight: "97% completion rate",
    authorName: "James Okafor",
    authorTitle: "Compliance Director",
    authorCompany: "Meridian Health",
  },
  {
    quote: "I used to spend an entire day each week chasing training records. Now it takes 20 minutes.",
    metricHighlight: "7+ hours saved/week",
    authorName: "Priya Sharma",
    authorTitle: "L&D Manager",
    authorCompany: "TechFlow",
  },
  {
    quote: "The course builder is genuinely easy to use. Our subject matter experts create their own content now.",
    metricHighlight: "3x more courses built",
    authorName: "Marcus Rivera",
    authorTitle: "Training Lead",
    authorCompany: "Pinnacle Group",
  },
  {
    quote: "We replaced three separate tools with Sodium Learn. The cost savings alone justified the switch.",
    metricHighlight: "40% cost reduction",
    authorName: "Emma Larsson",
    authorTitle: "COO",
    authorCompany: "Quantum Labs",
  },
  {
    quote: "Our teams actually complete the training now. The mobile experience and automated reminders make all the difference.",
    metricHighlight: "94% completion rate",
    authorName: "David Kim",
    authorTitle: "VP Operations",
    authorCompany: "Acme Corp",
  },
];

interface Testimonial {
  quote: string;
  metricHighlight?: string;
  authorName: string;
  authorTitle?: string;
  authorCompany?: string;
}

interface TestimonialsWallProps {
  sanityData?: unknown[];
}

function normalizeTestimonials(sanityData: unknown[]): Testimonial[] {
  return sanityData
    .filter((t): t is Record<string, unknown> => typeof t === "object" && t !== null)
    .map((t) => ({
      quote: (t.quote as string) || "",
      metricHighlight: (t.metricHighlight as string) || "",
      authorName: (t.authorName as string) || "",
      authorTitle: (t.authorTitle as string) || "",
      authorCompany: (t.authorCompany as string) || "",
    }))
    .filter((t) => t.quote && t.authorName);
}

const metricStyles = [
  { bg: "bg-brand-50", border: "border-brand-200/60", text: "text-action-primary" },
  { bg: "bg-success-100", border: "border-success-300/40", text: "text-success-700" },
  { bg: "bg-accent-fuchsia", border: "border-warning-300/40", text: "text-warning-700" },
  { bg: "bg-accent-lavender", border: "border-brand-200/40", text: "text-brand-600" },
  { bg: "bg-info-100", border: "border-info-300/40", text: "text-info-700" },
  { bg: "bg-warning-100", border: "border-warning-300/40", text: "text-warning-700" },
];

export function TestimonialsWall({ sanityData }: TestimonialsWallProps) {
  const testimonials =
    sanityData && sanityData.length > 0
      ? normalizeTestimonials(sanityData)
      : fallbackTestimonials;

  return (
    <section className="relative py-section overflow-hidden">
      <div className="absolute inset-0 mesh-features" />
      <div className="absolute inset-0 grain" />

      <Container>
        <ScrollReveal>
          <Badge>TESTIMONIALS</Badge>
          <h2 className="text-h2 mt-sm text-text-primary font-display">
            Teams that switched to <span className="gradient-text">Sodium Learn</span>
          </h2>
        </ScrollReveal>

        <div className="mt-xxl grid gap-md sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => {
            const style = metricStyles[i % metricStyles.length];
            return (
              <ScrollReveal key={t.authorName} delay={Math.min(i + 1, 3)}>
                <div className="group flex h-full flex-col rounded-xl border border-border-subtle/50 bg-bg-white shadow-card transition-all duration-300 hover:shadow-elevated hover:-translate-y-[2px]">
                  {/* Metric badge */}
                  {t.metricHighlight && (
                    <div className="px-md pt-md">
                      <span className={`inline-block rounded-md ${style.bg} ${style.border} border px-sm py-xs text-label-sm font-semibold ${style.text}`}>
                        {t.metricHighlight}
                      </span>
                    </div>
                  )}

                  {/* Quote */}
                  <div className="px-md pt-sm pb-md flex-1">
                    <p className="text-body-md text-text-primary leading-relaxed">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>

                  {/* Author */}
                  <div className="border-t border-border-subtle/30 px-md py-sm">
                    <div className="flex items-center gap-sm">
                      <div className="h-[40px] w-[40px] rounded-full bg-gradient-to-br from-brand-200 to-action-primary flex items-center justify-center shadow-sm shadow-action-primary/10">
                        <span className="text-label-sm font-bold text-white">
                          {t.authorName.split(" ").map(n => n[0]).join("")}
                        </span>
                      </div>
                      <div>
                        <p className="text-body-sm font-semibold text-text-primary">{t.authorName}</p>
                        {(t.authorTitle || t.authorCompany) && (
                          <p className="text-label-sm text-text-secondary">
                            {t.authorTitle}{t.authorTitle && t.authorCompany ? ", " : ""}{t.authorCompany}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}