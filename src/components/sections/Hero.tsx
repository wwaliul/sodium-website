"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/layout/Container";
import { CTA_PRIMARY, CTA_SECONDARY } from "@/lib/constants";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.94, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.9, ease, delay: 0.3 } },
};

const logos = [
  "Acme Corp",
  "NovaTech",
  "Helix Health",
  "Meridian Group",
  "Apex Labs",
  "QuantumEdge",
  "Atlas Digital",
  "Pinnacle",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-section-hero pt-[140px] lg:pt-[160px]">
      <div className="absolute inset-0 mesh-hero" />
      <div className="absolute inset-0 grain" />

      {/* Decorative orbs */}
      <div className="absolute top-[8%] right-[12%] h-[320px] w-[320px] rounded-full bg-brand-200/20 blur-[100px]" />
      <div className="absolute bottom-[15%] left-[5%] h-[240px] w-[240px] rounded-full bg-accent-lavender/30 blur-[80px]" />

      <Container>
        {/* Centered hero content */}
        <motion.div
          className="relative z-10 mx-auto max-w-3xl text-center"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUp}>
            <Badge>WORKPLACE LEARNING PLATFORM</Badge>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-lg text-display-2 leading-[1.08]"
          >
            Workplace learning{" "}
            <span className="relative inline-block">
              <span className="gradient-text">without</span>
              <span className="absolute -bottom-[3px] left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-action-primary to-brand-400" />
            </span>{" "}
            the complexity.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-lg text-body-lg text-text-secondary mx-auto max-w-[540px]"
          >
            Create, manage, and deliver learning that actually gets completed — all in one platform.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-xl flex flex-wrap items-center justify-center gap-sm"
          >
            <a
              href="#demo"
              className="group inline-flex items-center justify-center rounded-lg bg-action-primary px-xl py-[14px] text-body-md font-semibold text-white shadow-lg shadow-action-primary/20 transition-all duration-300 hover:bg-action-hover hover:shadow-xl hover:shadow-action-primary/30 hover:-translate-y-[1px] active:bg-action-active focus-visible:outline-[3px] focus-visible:outline-focus-ring focus-visible:outline-offset-2"
            >
              {CTA_PRIMARY}
              <svg className="ml-xs transition-transform duration-200 group-hover:translate-x-[2px]" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3.75 9H14.25M14.25 9L10.5 5.25M14.25 9L10.5 12.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#how-it-works"
              className="group inline-flex items-center justify-center rounded-lg border-[1.5px] border-action-primary bg-white px-xl py-[14px] text-body-md font-medium text-action-primary transition-all duration-300 hover:bg-brand-50 hover:shadow-card active:bg-brand-100 focus-visible:outline-[3px] focus-visible:outline-focus-ring focus-visible:outline-offset-2"
            >
              {CTA_SECONDARY}
            </a>
          </motion.div>

          {/* Trust bar */}
          <motion.div
            variants={fadeUp}
            className="mt-xxl"
          >
            <p className="text-label-sm text-text-secondary tracking-wider uppercase mb-md">
              Trusted by leading organisations
            </p>
            <div className="relative overflow-hidden">
              {/* Fade edges */}
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-bg-primary to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-bg-primary to-transparent" />

              <div className="flex animate-marquee">
                {[...logos, ...logos].map((name, i) => (
                  <div
                    key={`${name}-${i}`}
                    className="flex shrink-0 items-center justify-center px-xl py-sm"
                  >
                    <span className="text-body-md font-semibold text-text-secondary/40 select-none whitespace-nowrap">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Product mockup */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          className="relative z-10 mx-auto mt-xxl max-w-4xl"
        >
          <div className="relative rounded-xl border border-border-subtle/60 bg-bg-white shadow-elevated overflow-hidden glow-subtle">
            {/* Browser chrome */}
            <div className="flex items-center gap-xs border-b border-border-subtle bg-gray-50/80 px-md py-sm">
              <div className="flex gap-[6px]">
                <span className="h-[10px] w-[10px] rounded-full bg-error-300/80" />
                <span className="h-[10px] w-[10px] rounded-full bg-warning-300/80" />
                <span className="h-[10px] w-[10px] rounded-full bg-success-300/80" />
              </div>
              <div className="mx-auto flex items-center gap-xs rounded-md bg-bg-white px-sm py-[3px] border border-border-subtle">
                <span className="h-[8px] w-[8px] rounded-full bg-success-500" />
                <span className="text-label-sm text-text-secondary">app.sodiumlearn.com/dashboard</span>
              </div>
            </div>

            {/* Dashboard content */}
            <div className="p-lg">
              <div className="flex items-center justify-between mb-md">
                <div>
                  <p className="text-h4 font-semibold text-text-primary">Dashboard</p>
                  <p className="text-label-sm text-text-secondary mt-[2px]">3 active pathways · 47 learners</p>
                </div>
                <div className="flex items-center gap-xs rounded-lg bg-action-primary px-sm py-[8px] shadow-sm shadow-action-primary/20">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1v12M1 7h12" stroke="white" strokeWidth="1.5" strokeLinecap="round" /></svg>
                  <span className="text-label-sm font-semibold text-white">New course</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-sm mb-md">
                <div className="rounded-lg bg-brand-50/70 p-sm border border-brand-100/50">
                  <p className="text-label-sm text-text-secondary">Completion</p>
                  <p className="text-h3 font-bold gradient-text">94%</p>
                  <div className="mt-xs h-[4px] rounded-full bg-brand-100">
                    <div className="h-[4px] w-[94%] rounded-full bg-action-primary progress-animate" />
                  </div>
                </div>
                <div className="rounded-lg bg-success-100/70 p-sm border border-success-300/40">
                  <p className="text-label-sm text-text-secondary">Saved/week</p>
                  <p className="text-h3 font-bold text-success-700">7.2h</p>
                  <div className="mt-xs flex items-center gap-[2px]">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 9V3M3 6l3-3 3 3" stroke="#2DCA72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    <span className="text-label-sm font-medium text-success-700">+12%</span>
                  </div>
                </div>
                <div className="rounded-lg bg-accent-fuchsia/60 p-sm border border-warning-300/40">
                  <p className="text-label-sm text-text-secondary">Overdue</p>
                  <p className="text-h3 font-bold text-warning-700">3</p>
                  <p className="text-label-sm font-medium text-warning-700 mt-xs">Action needed</p>
                </div>
              </div>

              <div className="space-y-[2px]">
                {[
                  { name: "Induction Pathway", progress: 94, status: "On track", color: "bg-action-primary" },
                  { name: "Compliance Refresher", progress: 78, status: "In progress", color: "bg-brand-400" },
                  { name: "Advanced Skills", progress: 45, status: "Behind", color: "bg-warning-500" },
                ].map((item) => (
                  <div key={item.name} className="flex items-center gap-sm rounded-lg px-sm py-[10px] hover:bg-gray-50/80 transition-colors duration-200">
                    <div className="flex h-[36px] w-[36px] items-center justify-center rounded-lg bg-brand-50 shrink-0">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 8h12M8 2v12" stroke="#014DA1" strokeWidth="1.5" strokeLinecap="round" /></svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-body-sm font-medium text-text-primary truncate">{item.name}</p>
                      <div className="flex items-center gap-xs mt-[3px]">
                        <div className="flex-1 h-[3px] rounded-full bg-gray-100">
                          <div className={`h-[3px] rounded-full ${item.color} progress-animate`} style={{ width: `${item.progress}%` }} />
                        </div>
                        <span className="text-label-sm text-text-secondary shrink-0">{item.progress}%</span>
                      </div>
                    </div>
                    <span className={`text-label-sm font-medium shrink-0 px-xs py-[2px] rounded-md ${
                      item.status === "On track" ? "text-success-700 bg-success-100/60" :
                      item.status === "In progress" ? "text-action-primary bg-brand-50" : "text-warning-700 bg-accent-fuchsia/60"
                    }`}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating notification */}
          <motion.div
            initial={{ opacity: 0, x: 20, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2, ease }}
            className="absolute -right-[8px] top-[60px] z-20 hidden rounded-xl border border-border-subtle/60 bg-bg-white p-sm shadow-elevated lg:block"
          >
            <div className="flex items-center gap-sm">
              <div className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-success-100">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5.5 7l2 2 3-3.5" stroke="#2DCA72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
              <div>
                <p className="text-body-sm font-semibold text-text-primary">Pathway completed</p>
                <p className="text-label-sm text-text-secondary">Sarah finished onboarding</p>
              </div>
            </div>
          </motion.div>

          {/* Decorative depth orbs */}
          <div className="absolute -right-[24px] -top-[24px] h-[120px] w-[120px] rounded-full bg-brand-200/30 blur-[60px]" />
          <div className="absolute -bottom-[32px] -left-[16px] h-[140px] w-[140px] rounded-full bg-accent-lavender/40 blur-[80px]" />
        </motion.div>
      </Container>
    </section>
  );
}