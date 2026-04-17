"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/layout/Container";

interface StatItem {
  value: string;
  label: string;
  suffix: string;
  numericValue: number;
}

const stats: StatItem[] = [
  { value: "94", label: "Course completion rate", suffix: "%", numericValue: 94 },
  { value: "7.2", label: "Hours saved per week", suffix: "h", numericValue: 7.2 },
  { value: "50", label: "Organisations worldwide", suffix: "+", numericValue: 50 },
  { value: "15", label: "Minutes to launch", suffix: "m", numericValue: 15 },
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

function StatCard({ stat, index }: { stat: StatItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const count = useCountUp(stat.numericValue, 2000, isVisible);

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

  const displayValue = stat.numericValue % 1 !== 0
    ? count.toFixed(1)
    : Math.round(count).toString();

  return (
    <div
      ref={ref}
      className={`scroll-reveal scroll-reveal-delay-${index + 1} text-center`}
    >
      <p className="text-display-2 gradient-text leading-none">
        {displayValue}
        <span className="text-h3">{stat.suffix}</span>
      </p>
      <p className="text-body-sm text-text-secondary mt-sm max-w-[200px] mx-auto">
        {stat.label}
      </p>
    </div>
  );
}

export function Stats() {
  return (
    <section className="relative py-section-compact bg-bg-white border-y border-border-subtle/50">
      <Container>
        <div className="grid grid-cols-2 gap-xl lg:grid-cols-4">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}