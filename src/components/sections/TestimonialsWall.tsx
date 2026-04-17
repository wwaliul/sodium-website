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
];

const secondaryQuotes = [
  { quote: "The course builder is genuinely easy to use. Our SMEs create their own content now.", authorName: "Marcus R.", authorCompany: "Pinnacle Group" },
  { quote: "We replaced three separate tools. The cost savings alone justified the switch.", authorName: "Emma L.", authorCompany: "Quantum Labs" },
  { quote: "Teams actually complete the training now. Mobile experience makes all the difference.", authorName: "David K.", authorCompany: "Acme Corp" },
  { quote: "Our compliance audit took days instead of weeks. Sodium Learn changed how we prove training.", authorName: "Amina T.", authorCompany: "Helix Health" },
  { quote: "From sign-up to first course in under 15 minutes. That's unheard of.", authorName: "Jordan P.", authorCompany: "Atlas Digital" },
  { quote: "Finally, one platform that does it all. No more spreadsheet tracking.", authorName: "Lisa M.", authorCompany: "Meridian Group" },
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
          <Badge>CUSTOMER STORIES</Badge>
          <h2 className="text-h2 mt-sm text-text-primary">
            Teams that switched to <span className="gradient-text">Sodium Learn</span>
          </h2>
        </ScrollReveal>

        {/* Primary testimonials with metrics */}
        <div className="mt-xxl grid gap-lg lg:grid-cols-3">
          {testimonials.slice(0, 3).map((t, i) => {
            const style = metricStyles[i % metricStyles.length];
            return (
              <ScrollReveal key={t.authorName} delay={i + 1}>
                <div className="group flex h-full flex-col rounded-xl border border-border-subtle/50 bg-bg-white shadow-card transition-all duration-300 hover:shadow-elevated hover:-translate-y-[2px]">
                  {/* Metric badge — hero element */}
                  {t.metricHighlight && (
                    <div className="px-lg pt-lg">
                      <span className={`inline-block rounded-md border ${style.bg} ${style.border} px-md py-xs text-label-sm font-bold ${style.text}`}>
                        {t.metricHighlight}
                      </span>
                    </div>
                  )}

                  {/* Quote */}
                  <div className="px-lg pt-sm pb-md flex-1">
                    <p className="text-body-md text-text-primary leading-relaxed">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>

                  {/* Author */}
                  <div className="border-t border-border-subtle/30 px-lg py-md">
                    <div className="flex items-center gap-sm">
                      <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-gradient-to-br from-brand-200 to-action-primary shadow-sm shadow-action-primary/10">
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

        {/* Secondary quotes — volume proof */}
        <ScrollReveal delay={3}>
          <div className="mt-xxl">
            <div className="flex overflow-x-auto gap-md pb-sm snap-x snap-mandatory scrollbar-hide">
              {secondaryQuotes.map((q) => (
                <div
                  key={q.authorName}
                  className="min-w-[280px] snap-start rounded-xl border border-border-subtle/40 bg-bg-white/80 p-md shadow-card"
                >
                  <p className="text-body-sm text-text-primary italic leading-relaxed">
                    &ldquo;{q.quote}&rdquo;
                  </p>
                  <div className="mt-sm flex items-center gap-xs">
                    <div className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-brand-50">
                      <span className="text-label-sm font-semibold text-action-primary">
                        {q.authorName.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-label-sm font-semibold text-text-primary">{q.authorName}</p>
                      <p className="text-label-sm text-text-secondary">{q.authorCompany}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}