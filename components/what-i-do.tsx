"use client"

import { Code, Shield, Zap, Users, Database, CheckCircle } from "lucide-react"

export function WhatIDo() {
  const capabilities = [
    {
      icon: Code,
      title: "Backend Platform Ownership",
      description:
        "I take full technical responsibility for production systems—designing architecture, ensuring reliability, and managing growth.",
    },
    {
      icon: Shield,
      title: "Security-First Systems",
      description:
        "JWT, OAuth 2.0, SSO, MFA, RBAC/ABAC—I implement security layers that don't compromise on user experience.",
    },
    {
      icon: Zap,
      title: "Workflow Automation",
      description:
        "I eliminate manual processes through intelligent automation, freeing teams to focus on strategic work.",
    },
    {
      icon: Database,
      title: "Event-Driven Architecture",
      description: "Scalable async systems with Kafka-based messaging for decoupled, resilient operations at scale.",
    },
    {
      icon: Users,
      title: "Cross-Team Leadership",
      description:
        "Mentoring developers, establishing engineering standards, and being the technical escalation point.",
    },
    {
      icon: CheckCircle,
      title: "Production Reliability",
      description:
        "API optimization, query tuning, structured error handling, and monitoring that keeps systems running.",
    },
  ]

  return (
    <section
      id="what-i-do"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 relative"
      role="region"
      aria-label="My journey and capabilities"
    >
      <div className="max-w-5xl w-full">
        <div className="space-y-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center gap-3">
              <span className="w-1 h-8 bg-accent rounded-full" aria-hidden="true"></span>
              My Journey & Expertise
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              Here's what I've developed expertise in through years of real-world production challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon
              return (
                <div
                  key={index}
                  className="space-y-3 p-6 rounded-xl border border-border/50 bg-card/50 hover:bg-card hover:border-accent/50 transition-all duration-300 hover:-translate-y-1 group hover:shadow-lg hover:shadow-accent/10 focus-within:ring-2 focus-within:ring-accent"
                  role="article"
                  aria-label={capability.title}
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/20 group-hover:bg-accent/30 flex items-center justify-center transition-colors">
                    <Icon className="w-5 h-5 text-accent" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                    {capability.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">{capability.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
