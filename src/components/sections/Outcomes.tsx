"use client";

import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

interface OutcomeItem {
  value: string;
  suffix: string;
  label: string;
  description: string;
  numericValue: number;
}

const outcomes: OutcomeItem[] = [
  {
    value: "94",
    suffix: "%",
    label: "Completion rate",
    description: "Courses actually get finished — not just assigned.",
    numericValue: 94,
  },
  {
    value: "7.2",
    suffix: "h",
    label: "Saved per week",
    description: "Hours reclaimed from admin and manual tracking.",
    numericValue: 7.2,
  },
  {
    value: "50",
    suffix: "+",
    label: "Organisations",
    description: "Teams running learning on Sodium Learn today.",
    numericValue: 50,
  },
  {
    value: "15",
    suffix: "m",
    label: "Minutes to launch",
    description: "From sign-up to your first course going live.",
    numericValue: 15,
  },
];

function useCountUp(target: number, duration: number = 2000, startCounting: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(parseFloat((target * eased).toFixed(1)));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration, startCounting]);

  return count;
}

function OutcomeCard({ outcome, index }: { outcome: OutcomeItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const count = useCountUp(outcome.numericValue, 2000, isVisible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const displayValue = outcome.numericValue % 1 !== 0
    ? count.toFixed(1)
    : Math.round(count).toString();

  return (
    <ScrollReveal delay={index + 1}>
      <div
        ref={ref}
        className="group rounded-xl border border-border-subtle/50 bg-bg-white p-lg shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-[2px]"
      >
        <p className="text-display-2 gradient-text leading-none">
          {displayValue}
          <span className="text-h3">{outcome.suffix}</span>
        </p>
        <p className="text-h4 font-semibold text-text-primary mt-sm">
          {outcome.label}
        </p>
        <p className="text-body-sm text-text-secondary mt-xs">
          {outcome.description}
        </p>
      </div>
    </ScrollReveal>
  );
}

export function Outcomes() {
  return (
    <section className="relative py-section bg-bg-secondary overflow-hidden">
      <Container>
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <Badge>OUTCOMES</Badge>
            <h2 className="mt-sm text-h2 text-text-primary">
              Outcomes that matter to your team.
            </h2>
            <p className="text-body-lg mt-xs text-text-secondary">
              Real numbers from real teams running learning on Sodium Learn.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-xxl grid gap-lg sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((outcome, i) => (
            <OutcomeCard key={outcome.label} outcome={outcome} index={i} />
          ))}
        </div>

        <ScrollReveal delay={3}>
          <div className="mt-xl text-center">
            <a
              href="#demo"
              className="group inline-flex items-center justify-center rounded-lg border-[1.5px] border-action-primary bg-white px-xl py-[14px] text-body-md font-medium text-action-primary transition-all duration-300 hover:bg-brand-50 hover:shadow-card active:bg-brand-100 focus-visible:outline-[3px] focus-visible:outline-focus-ring focus-visible:outline-offset-2"
            >
              See it in action
              <svg className="ml-xs transition-transform duration-200 group-hover:translate-x-[2px]" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3.75 9H14.25M14.25 9L10.5 5.25M14.25 9L10.5 12.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}