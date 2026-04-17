export const SITE_NAME = "Sodium Learn";
export const SITE_URL = "https://sodiumlearn.com";
export const SITE_DESCRIPTION =
  "Workplace learning without the complexity. Create, manage, and deliver learning that actually gets completed — all in one place.";

export const NAV_LINKS = [
  { label: "Product", href: "/product" },
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Resources", href: "/blog" },
  { label: "About", href: "/about" },
] as const;

export const FOOTER_LINKS = {
  product: [
    { label: "Features", href: "/product" },
    { label: "Course Builder", href: "/product#course-builder" },
    { label: "Learning Pathways", href: "/product#pathways" },
    { label: "Analytics", href: "/product#analytics" },
    { label: "Integrations", href: "/product#integrations" },
  ],
  solutions: [
    { label: "Compliance Training", href: "/solutions/compliance-training" },
    { label: "Employee Onboarding", href: "/solutions/employee-onboarding" },
    { label: "Professional Development", href: "/solutions/professional-development" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "Guides", href: "/blog?category=Guides" },
    { label: "Templates", href: "/blog?category=Templates" },
    { label: "Help Centre", href: "#" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/about#careers" },
    { label: "Contact", href: "mailto:hello@sodiumlearn.com" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
} as const;

export const CTA_PRIMARY = "Request a demo";
export const CTA_SECONDARY = "See how it works";