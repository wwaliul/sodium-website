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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.96, y: 12 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.7, ease, delay: 0.3 } },
};

export function Hero() {
  return (
    <section className="mesh-hero grain relative overflow-hidden pb-section-hero pt-xl">
      <Container>
        <div className="grid items-center gap-xxl lg:grid-cols-[1fr_1.1fr]">
          <motion.div
            className="max-w-lg"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeUp}>
              <Badge>WORKPLACE LEARNING PLATFORM</Badge>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-h1 mt-md text-text-primary"
            >
              Workplace learning{" "}
              <span className="relative">
                without
                <span className="absolute -bottom-[2px] left-0 h-[3px] w-full bg-gradient-to-r from-action-primary to-brand-400 rounded-full" />
              </span>{" "}
              the complexity.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-body-lg mt-md text-text-secondary"
            >
              Create, manage, and deliver learning that actually gets
              completed — all in one place.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-body-md mt-sm text-text-secondary"
            >
              Replace your LMS, LXP, and authoring tools with one platform.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-md flex flex-wrap gap-sm"
            >
              <a
                href="#demo"
                className="inline-flex items-center justify-center rounded-md bg-action-primary px-xl py-[14px] text-body-lg font-semibold text-white transition-all duration-200 hover:bg-action-hover hover:shadow-elevated active:bg-action-active focus-visible:outline-[3px] focus-visible:outline-focus-ring focus-visible:outline-offset-2"
              >
                {CTA_PRIMARY}
                <svg className="ml-xs" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3.75 9H14.25M14.25 9L10.5 5.25M14.25 9L10.5 12.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-md border-[1.5px] border-action-primary bg-white px-xl py-[14px] text-body-lg font-medium text-action-primary transition-all duration-200 hover:bg-brand-50 hover:shadow-card active:bg-brand-100 focus-visible:outline-[3px] focus-visible:outline-focus-ring focus-visible:outline-offset-2"
              >
                {CTA_SECONDARY}
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-xl flex items-center gap-lg">
              <div className="flex -space-x-xs">
                {[0,1,2,3].map(i => (
                  <div
                    key={i}
                    className="h-[32px] w-[32px] rounded-full border-2 border-bg-white"
                    style={{
                      background: [
                        "linear-gradient(135deg, #4898E8, #014DA1)",
                        "linear-gradient(135deg, #84E4AE, #2DCA72)",
                        "linear-gradient(135deg, #FFD47A, #F79009)",
                        "linear-gradient(135deg, #88BBF1, #1465C2)",
                      ][i],
                    }}
                  />
                ))}
              </div>
              <div>
                <p className="text-body-sm font-semibold text-text-primary">
                  50+ organisations
                </p>
                <p className="text-label-sm text-text-secondary">
                  trust Sodium Learn
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            {/* Dashboard mockup */}
            <div className="relative rounded-xl border border-border-subtle/60 bg-bg-white shadow-elevated overflow-hidden">
              {/* Title bar */}
              <div className="flex items-center gap-xs border-b border-border-subtle bg-gray-50/50 px-md py-sm">
                <div className="flex gap-[6px]">
                  <span className="h-[10px] w-[10px] rounded-full bg-error-300/80" />
                  <span className="h-[10px] w-[10px] rounded-full bg-warning-300/80" />
                  <span className="h-[10px] w-[10px] rounded-full bg-success-300/80" />
                </div>
                <div className="mx-auto flex items-center gap-xs rounded-md bg-bg-white px-sm py-[2px] border border-border-subtle">
                  <span className="h-[10px] w-[10px] rounded-full bg-success-500" />
                  <span className="text-label-sm text-text-secondary">app.sodiumlearn.com</span>
                </div>
              </div>

              {/* Dashboard content */}
              <div className="p-md">
                {/* Top bar */}
                <div className="flex items-center justify-between mb-md">
                  <div>
                    <p className="text-body-md font-semibold text-text-primary">Dashboard</p>
                    <p className="text-label-sm text-text-secondary">3 active pathways · 47 learners</p>
                  </div>
                  <div className="flex items-center gap-xs rounded-md bg-action-primary px-sm py-[6px]">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1v12M1 7h12" stroke="white" strokeWidth="1.5" strokeLinecap="round" /></svg>
                    <span className="text-label-sm font-medium text-white">New course</span>
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-sm mb-md">
                  <div className="rounded-lg bg-brand-50/60 p-sm border border-brand-100/40">
                    <p className="text-label-sm text-text-secondary">Completion</p>
                    <p className="text-h3 font-bold text-action-primary">94%</p>
                    <div className="mt-xs h-[4px] rounded-full bg-brand-100"><div className="h-[4px] w-[94%] rounded-full bg-action-primary" /></div>
                  </div>
                  <div className="rounded-lg bg-success-100/60 p-sm border border-success-300/30">
                    <p className="text-label-sm text-text-secondary">Saved/week</p>
                    <p className="text-h3 font-bold text-success-700">7.2h</p>
                    <div className="mt-xs flex items-center gap-[2px]">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 9V3M3 6l3-3 3 3" stroke="#2DCA72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      <span className="text-label-sm text-success-700">+12%</span>
                    </div>
                  </div>
                  <div className="rounded-lg bg-accent-fuchsia/60 p-sm border border-warning-300/30">
                    <p className="text-label-sm text-text-secondary">Overdue</p>
                    <p className="text-h3 font-bold text-warning-700">3</p>
                    <p className="text-label-sm text-warning-700 mt-xs">Action needed</p>
                  </div>
                </div>

                {/* Learner list */}
                <div className="space-y-[2px]">
                  {[
                    { name: "Induction Pathway", progress: 94, status: "On track", color: "bg-action-primary" },
                    { name: "Compliance Refresher", progress: 78, status: "In progress", color: "bg-brand-400" },
                    { name: "Advanced Skills", progress: 45, status: "Behind", color: "bg-warning-500" },
                  ].map((item) => (
                    <div key={item.name} className="flex items-center gap-sm rounded-md px-sm py-[8px] hover:bg-gray-50 transition-colors">
                      <div className="h-[36px] w-[36px] rounded-md bg-brand-50 flex items-center justify-center shrink-0">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 8h12M8 2v12" stroke="#014DA1" strokeWidth="1.5" strokeLinecap="round" /></svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-body-sm font-medium text-text-primary truncate">{item.name}</p>
                        <div className="flex items-center gap-xs mt-[2px]">
                          <div className="flex-1 h-[3px] rounded-full bg-gray-100">
                            <div className={`h-[3px] rounded-full ${item.color}`} style={{ width: `${item.progress}%` }} />
                          </div>
                          <span className="text-label-sm text-text-secondary shrink-0">{item.progress}%</span>
                        </div>
                      </div>
                      <span className={`text-label-sm font-medium shrink-0 ${
                        item.status === "On track" ? "text-success-700" :
                        item.status === "In progress" ? "text-action-primary" : "text-warning-700"
                      }`}>
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -right-[24px] -top-[24px] h-[80px] w-[80px] rounded-full bg-brand-100/40 blur-2xl" />
            <div className="absolute -bottom-[32px] -left-[16px] h-[100px] w-[100px] rounded-full bg-accent-lavender/60 blur-2xl" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}