import Link from "next/link";
import { Container } from "./Container";
import { FOOTER_LINKS, CTA_PRIMARY } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="relative text-text-inverse">
      {/* CTA banner */}
      <div className="relative border-b border-text-inverse/10 overflow-hidden">
        <div className="absolute inset-0 mesh-dark" />
        <div className="absolute inset-0 grain" />
        <div className="absolute top-[20%] left-[15%] h-[200px] w-[200px] rounded-full bg-brand-400/10 blur-[80px]" />

        <Container className="relative flex flex-col items-center gap-lg py-xxl text-center md:flex-row md:justify-between md:text-left">
          <div>
            <h2 className="text-h3 font-display font-semibold text-text-inverse">
              Ready to transform workplace learning?
            </h2>
            <p className="mt-xs text-body-md text-text-inverse/50">
              See how Sodium Learn saves your team 7+ hours a week.
            </p>
          </div>
          <a
            href="#demo"
            className="group inline-flex items-center justify-center rounded-lg bg-white px-xl py-[14px] text-body-md font-semibold text-action-primary shadow-lg transition-all duration-300 hover:bg-brand-50 hover:shadow-xl hover:-translate-y-[1px] active:bg-brand-100 focus-visible:outline-[3px] focus-visible:outline-focus-ring focus-visible:outline-offset-2"
          >
            {CTA_PRIMARY}
            <svg className="ml-xs transition-transform duration-200 group-hover:translate-x-[2px]" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3.25 8H12.75M12.75 8L9.5 4.75M12.75 8L9.5 11.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </Container>
      </div>

      {/* Links */}
      <div className="bg-bg-dark">
        <Container className="py-xxl">
          <div className="grid gap-xl sm:grid-cols-2 lg:grid-cols-5">
            <div className="sm:col-span-2 lg:col-span-1">
              <Link href="/" className="flex items-center gap-[2px] group">
                <span className="flex items-center justify-center h-[28px] w-[28px] rounded-lg bg-brand-400 transition-colors group-hover:bg-brand-300">
                  <span className="text-label-sm font-bold text-brand-900">Na</span>
                </span>
                <span className="text-h4 font-bold gradient-text ml-xs font-display">
                  Sodium
                </span>
                <span className="text-h4 font-medium text-text-inverse/80 font-display">
                  Learn
                </span>
              </Link>
              <p className="mt-sm text-body-sm text-text-inverse/40" style={{ maxWidth: '280px' }}>
                Workplace learning without the complexity.
              </p>
            </div>

            <div>
              <h3 className="text-label-md mb-sm uppercase text-text-inverse/30">
                Product
              </h3>
              <ul className="space-y-xs">
                {FOOTER_LINKS.product.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-body-sm text-text-inverse/50 transition-colors duration-200 hover:text-text-inverse"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-label-md mb-sm uppercase text-text-inverse/30">
                Solutions
              </h3>
              <ul className="space-y-xs">
                {FOOTER_LINKS.solutions.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-body-sm text-text-inverse/50 transition-colors duration-200 hover:text-text-inverse"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-label-md mb-sm uppercase text-text-inverse/30">
                Resources
              </h3>
              <ul className="space-y-xs">
                {FOOTER_LINKS.resources.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-body-sm text-text-inverse/50 transition-colors duration-200 hover:text-text-inverse"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-label-md mb-sm uppercase text-text-inverse/30">
                Company
              </h3>
              <ul className="space-y-xs">
                {FOOTER_LINKS.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-body-sm text-text-inverse/50 transition-colors duration-200 hover:text-text-inverse"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-xxl flex flex-col items-center justify-between gap-sm border-t border-text-inverse/10 pt-lg sm:flex-row">
            <p className="text-label-sm text-text-inverse/30">
              &copy; {new Date().getFullYear()} Sodium Learn. All rights reserved.
            </p>
            <div className="flex gap-md">
              {FOOTER_LINKS.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-label-sm text-text-inverse/30 transition-colors duration-200 hover:text-text-inverse/60"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}