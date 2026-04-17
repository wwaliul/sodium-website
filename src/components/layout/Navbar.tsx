"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { NAV_LINKS, CTA_PRIMARY } from "@/lib/constants";
import { Container } from "./Container";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 h-[72px] transition-all duration-300",
        scrolled
          ? "bg-bg-white/90 shadow-nav backdrop-blur-xl border-b border-border-subtle/50"
          : "bg-transparent"
      )}
    >
      <Container className="flex h-full items-center justify-between">
        <Link href="/" className="flex items-center gap-[2px] group">
          <span className="relative flex items-center justify-center h-[32px] w-[32px] rounded-md bg-action-primary transition-colors group-hover:bg-action-hover">
            <span className="text-label-sm font-bold text-white">Na</span>
          </span>
          <span className="text-h4 font-bold text-action-primary ml-xs font-display">
            Sodium
          </span>
          <span className="text-h4 font-medium text-text-primary font-display">
            Learn
          </span>
        </Link>

        <nav className="hidden items-center gap-lg md:flex" aria-label="Main">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-body-md font-medium text-text-secondary transition-colors duration-200 hover:text-action-primary relative after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-0 after:bg-action-primary after:transition-all after:duration-200 hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-sm">
          <a
            href="#demo"
            className="inline-flex items-center justify-center rounded-md bg-action-primary px-lg py-[10px] text-body-md font-semibold text-white transition-all duration-200 hover:bg-action-hover hover:shadow-elevated active:bg-action-active focus-visible:outline-[3px] focus-visible:outline-focus-ring focus-visible:outline-offset-2"
          >
            {CTA_PRIMARY}
          </a>
        </div>

        <button
          className="flex items-center justify-center rounded-md p-xs text-text-primary transition-colors hover:bg-bg-secondary md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {mobileOpen ? (
              <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            ) : (
              <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </Container>

      <div
        className={cn(
          "fixed inset-x-0 top-[72px] bottom-0 bg-bg-white/95 backdrop-blur-xl z-40 transition-all duration-300 md:hidden",
          mobileOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-8 pointer-events-none"
        )}
      >
        <nav className="flex flex-col gap-md p-lg" aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-body-lg font-medium text-text-primary py-sm border-b border-border-subtle"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-sm">
            <a
              href="#demo"
              className="inline-flex w-full items-center justify-center rounded-md bg-action-primary px-lg py-[12px] text-body-md font-semibold text-white transition-colors hover:bg-action-hover"
              onClick={() => setMobileOpen(false)}
            >
              {CTA_PRIMARY}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}