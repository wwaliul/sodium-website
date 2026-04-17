"use client";

import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  question: string;
  answer: ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
}

export function AccordionItem({
  question,
  answer,
  isOpen = false,
  onToggle,
}: AccordionItemProps) {
  return (
    <div className="border-b border-border-subtle">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-lg text-left text-body-lg font-medium text-text-primary transition-colors hover:text-action-primary"
        aria-expanded={isOpen}
      >
        {question}
        <span
          className={cn(
            "ml-sm shrink-0 text-text-secondary transition-transform duration-200",
            isOpen && "rotate-180"
          )}
          aria-hidden="true"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M5 7.5L10 12.5L15 7.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      <div
        className={cn(
          "grid transition-all duration-200",
          isOpen ? "grid-rows-[1fr] pb-lg" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <div className="text-body-md text-text-secondary">{answer}</div>
        </div>
      </div>
    </div>
  );
}

interface AccordionProps {
  items: { question: string; answer: ReactNode }[];
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={cn(className)}>
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  );
}