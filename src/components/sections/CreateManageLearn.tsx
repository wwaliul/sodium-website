"use client";

import { useState, useEffect, useCallback } from "react";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Create",
    headline: "Create training faster",
    description:
      "Build engaging courses with drag-and-drop authoring. Add video, quizzes, and interactive content — no instructional design degree required.",
    icon: (
      <path d="M12 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7M16 3h5m0 0v5m0-5L10 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    ),
    iconBg: "bg-action-primary",
    shadowColor: "shadow-action-primary/20",
    subFeatures: [
      { text: "Drag-and-drop multimedia authoring", icon: "M12 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7M16 3h5m0 0v5m0-5L10 14" },
      { text: "Reusable component library", icon: "M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" },
      { text: "Pre-built course templates", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 012-2h2a2 2 0 012 2M9 5h6M9 14l2 2 4-4" },
    ],
    mockup: (
      <div className="rounded-lg bg-bg-white border border-border-subtle/40 p-md shadow-card">
        <div className="flex items-center gap-xs mb-sm">
          <div className="h-[8px] w-[8px] rounded-full bg-action-primary" />
          <div className="h-[8px] w-[40px] rounded-full bg-gray-100" />
          <div className="ml-auto flex gap-xs">
            <div className="h-[8px] w-[24px] rounded bg-brand-50" />
            <div className="h-[8px] w-[24px] rounded bg-success-100" />
          </div>
        </div>
        <div className="space-y-xs">
          <div className="flex items-center gap-xs rounded-md bg-brand-50/50 px-sm py-[6px]">
            <div className="h-[16px] w-[16px] rounded bg-action-primary/20" />
            <div className="h-[8px] w-[60%] rounded-full bg-action-primary/30" />
          </div>
          <div className="flex items-center gap-xs rounded-md bg-gray-50 px-sm py-[6px]">
            <div className="h-[16px] w-[16px] rounded bg-gray-200" />
            <div className="h-[8px] w-[45%] rounded-full bg-gray-200" />
          </div>
          <div className="flex items-center gap-xs rounded-md bg-gray-50 px-sm py-[6px]">
            <div className="h-[16px] w-[16px] rounded bg-gray-200" />
            <div className="h-[8px] w-[55%] rounded-full bg-gray-200" />
          </div>
        </div>
      </div>
    ),
  },
  {
    number: "02",
    title: "Manage",
    headline: "Assign, structure, and control",
    description:
      "Organise learners, assign training, and track progress from one dashboard. Role-based permissions keep everything secure.",
    icon: (
      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M12 11a4 4 0 10-8 0 4 4 0 008 0zM19 8v6M22 11h-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    ),
    iconBg: "bg-brand-500",
    shadowColor: "shadow-brand-500/20",
    subFeatures: [
      { text: "Prerequisite-based sequencing", icon: "M3 12h4l3-9 4 18 3-9h4" },
      { text: "Automated deadline reminders", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
      { text: "Compliance rule enforcement", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 012-2h2a2 2 0 012 2M9 5h6M9 14l2 2 4-4" },
    ],
    mockup: (
      <div className="rounded-lg bg-bg-white border border-border-subtle/40 p-md shadow-card">
        <div className="flex flex-col items-center gap-sm py-xs">
          <div className="flex items-center gap-sm w-full">
            <div className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-action-primary text-white text-label-sm font-bold shrink-0">1</div>
            <div className="flex-1 h-[8px] rounded-full bg-action-primary" />
          </div>
          <div className="flex items-center gap-sm w-full">
            <div className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-brand-400 text-white text-label-sm font-bold shrink-0">2</div>
            <div className="flex-1 h-[8px] rounded-full bg-brand-200">
              <div className="h-[8px] w-[60%] rounded-full bg-brand-400" />
            </div>
          </div>
          <div className="flex items-center gap-sm w-full">
            <div className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-gray-200 text-text-secondary text-label-sm font-bold shrink-0">3</div>
            <div className="flex-1 h-[8px] rounded-full bg-gray-100" />
          </div>
        </div>
      </div>
    ),
  },
  {
    number: "03",
    title: "Learn",
    headline: "Deliver a modern learner experience",
    description:
      "Launch structured learning pathways with automated reminders and real-time completion tracking. Mobile-ready for learning on the go.",
    icon: (
      <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    ),
    iconBg: "bg-info-500",
    shadowColor: "shadow-info-500/20",
    subFeatures: [
      { text: "Real-time completion dashboards", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6m8 0V9a2 2 0 012-2h2a2 2 0 012 2v10m4 0v-4a2 2 0 00-2-2h-2a2 2 0 00-2 2v4" },
      { text: "Time-to-competency tracking", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
      { text: "One-click audit-ready exports", icon: "M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" },
    ],
    mockup: (
      <div className="rounded-lg bg-bg-white border border-border-subtle/40 p-md shadow-card">
        <div className="flex items-end gap-xs h-[48px] mb-sm">
          <div className="flex-1 rounded-t bg-brand-100" style={{ height: "30%" }} />
          <div className="flex-1 rounded-t bg-brand-200" style={{ height: "50%" }} />
          <div className="flex-1 rounded-t bg-action-primary" style={{ height: "80%" }} />
          <div className="flex-1 rounded-t bg-brand-300" style={{ height: "65%" }} />
          <div className="flex-1 rounded-t bg-success-300" style={{ height: "94%" }} />
          <div className="flex-1 rounded-t bg-brand-200" style={{ height: "55%" }} />
        </div>
        <div className="flex items-center justify-between">
          <div className="h-[8px] w-[40%] rounded-full bg-gray-100" />
          <div className="flex items-center gap-[2px]">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 9V3M3 6l3-3 3 3" stroke="#2DCA72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            <span className="text-label-sm text-success-700 font-medium">+18%</span>
          </div>
        </div>
      </div>
    ),
  },
];

const supplementaryCapabilities = [
  "Certificates",
  "Assessments",
  "Mobile Access",
  "Compliance",
];

const AUTO_ADVANCE_MS = 5000;

export function CreateManageLearn() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const goToStep = useCallback((index: number) => {
    setActiveStep(index);
    setIsPaused(true);
    setProgress(0);
  }, []);

  // Auto-advance timer with progress tracking
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + (100 / (AUTO_ADVANCE_MS / 50));
        if (next >= 100) {
          setActiveStep((current) => (current + 1) % steps.length);
          return 0;
        }
        return next;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isPaused]);

  const currentStep = steps[activeStep];

  return (
    <section id="how-it-works" className="relative py-section overflow-hidden">
      <div className="absolute inset-0 mesh-hero" />
      <div className="absolute inset-0 grain" />

      <Container>
        <ScrollReveal>
          <Badge>HOW IT WORKS</Badge>
          <h2 className="mt-sm text-h2 text-text-primary">
            Bring training, knowledge, and delivery into one place.
          </h2>
          <p className="text-body-lg mt-xs max-w-2xl text-text-secondary">
            Create, manage, and deliver learning without switching between tools.
          </p>
        </ScrollReveal>

        {/* Step indicator */}
        <ScrollReveal delay={1}>
          <div className="mt-xxl flex items-center gap-sm">
            {steps.map((step, i) => (
              <button
                key={step.number}
                onClick={() => goToStep(i)}
                className="group flex items-center gap-sm"
                aria-label={`Go to step ${step.number}: ${step.title}`}
              >
                <div className="relative flex items-center justify-center">
                  <div
                    className={`flex h-[40px] w-[40px] items-center justify-center rounded-full border-2 transition-all duration-500 ${
                      i === activeStep
                        ? "border-action-primary bg-action-primary text-white"
                        : i < activeStep
                        ? "border-action-primary bg-brand-50 text-action-primary"
                        : "border-border-default bg-bg-white text-text-secondary"
                    }`}
                  >
                    <span className="text-label-sm font-bold">{step.number}</span>
                  </div>
                  {/* Progress ring for active step */}
                  {i === activeStep && !isPaused && (
                    <svg
                      className="absolute h-[48px] w-[48px] -rotate-90"
                      viewBox="0 0 48 48"
                    >
                      <circle
                        cx="24"
                        cy="24"
                        r="22"
                        fill="none"
                        stroke="var(--color-action-primary)"
                        strokeWidth="2"
                        strokeDasharray={`${(progress / 100) * 138.2} 138.2`}
                        strokeLinecap="round"
                        className="transition-none"
                      />
                    </svg>
                  )}
                </div>
                <span
                  className={`text-body-md font-semibold transition-colors duration-300 hidden sm:block ${
                    i === activeStep ? "text-action-primary" : "text-text-secondary"
                  }`}
                >
                  {step.title}
                </span>
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="h-[2px] w-sm bg-border-default mx-xs hidden md:block">
                    <div
                      className="h-full bg-action-primary transition-all duration-500"
                      style={{
                        width: i < activeStep ? "100%" : i === activeStep ? `${progress}%` : "0%",
                      }}
                    />
                  </div>
                )}
              </button>
            ))}
            {/* Play/Pause button */}
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="ml-auto flex h-[32px] w-[32px] items-center justify-center rounded-full border border-border-default bg-bg-white text-text-secondary hover:bg-gray-50 transition-colors duration-200"
              aria-label={isPaused ? "Resume auto-advance" : "Pause auto-advance"}
            >
              {isPaused ? (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor"><path d="M3 2l10 5-10 5V2z" /></svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor"><rect x="2" y="2" width="3.5" height="10" rx="1" /><rect x="8.5" y="2" width="3.5" height="10" rx="1" /></svg>
              )}
            </button>
          </div>
        </ScrollReveal>

        {/* Step content */}
        <div className="mt-xl relative">
          <div
            key={activeStep}
            className="grid gap-xl lg:grid-cols-[1fr_1fr]"
          >
            {/* Left — Copy */}
            <div className="animate-fade-in-up">
              <span className="text-display-2 font-bold text-brand-50/80 select-none leading-none">
                {currentStep.number}
              </span>
              <h3 className="text-h3 mt-sm font-semibold text-text-primary -mt-lg relative z-10">
                {currentStep.headline}
              </h3>
              <p className="mt-md text-body-lg text-text-secondary" style={{ maxWidth: '520px' }}>
                {currentStep.description}
              </p>

              <ul className="mt-lg space-y-sm">
                {currentStep.subFeatures.map((sub) => (
                  <li key={sub.text} className="flex items-start gap-sm">
                    <div className="flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-md bg-brand-50 mt-[2px]">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-action-primary" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d={sub.icon} />
                      </svg>
                    </div>
                    <span className="text-body-md text-text-primary">{sub.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — Mockup */}
            <div className="animate-fade-in-up flex items-center justify-center" style={{ animationDelay: "100ms" }}>
              {currentStep.mockup}
            </div>
          </div>
        </div>

        {/* Supplementary capabilities */}
        <ScrollReveal delay={2}>
          <div className="mt-xxl flex flex-wrap items-center justify-center gap-sm">
            {supplementaryCapabilities.map((cap) => (
              <span
                key={cap}
                className="rounded-full border border-border-subtle bg-bg-white px-md py-[8px] text-body-sm font-medium text-text-secondary hover:border-action-primary hover:text-action-primary transition-colors duration-200 cursor-default"
              >
                {cap}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}