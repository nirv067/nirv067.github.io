"use client"

import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export function SolutionsProvided() {
  const solutions = [
    {
      problem: "Manual operational bottlenecks costing hours daily",
      solution: "End-to-end workflow automation",
      impact: "Eliminated manual handoffs, significantly improved turnaround time",
    },
    {
      problem: "Security vulnerabilities and access control gaps",
      solution: "Comprehensive security implementation",
      impact: "Deployed JWT, OAuth 2.0, SSO, MFA, and RBAC/ABAC systems",
    },
    {
      problem: "Legacy monolith hindering feature delivery",
      solution: "Strategic architectural modernization",
      impact: "Migrated from PHP monolith to modular Node.js + React architecture",
    },
    {
      problem: "Disconnected internal systems and data silos",
      solution: "Unified platform architecture",
      impact: "Built LMS, CMS, internal CRM, and admin dashboards with real-time analytics",
    },
    {
      problem: "API performance and reliability issues",
      solution: "Production optimization and monitoring",
      impact: "Query optimization, async processing, and structured error handling",
    },
    {
      problem: "Scaling challenges with synchronous workflows",
      solution: "Event-driven architecture patterns",
      impact: "Implemented async processing and Kafka-based messaging for decoupled systems",
    },
  ]

  return (
    <section
      id="solutions"
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-secondary/30 relative"
    >
      <div className="max-w-6xl w-full">
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Solutions I Provide</h2>
            <div className="flex justify-center mb-6">
              <div className="w-12 h-1 bg-accent rounded-full"></div>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Real problems solved with measurable business impact
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutions.map((item, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card border border-border/50 group hover:border-accent/50 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                <div className="space-y-4 relative z-10">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-accent mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <div className="space-y-2">
                      <h3 className="text-base font-semibold text-muted-foreground">{item.problem}</h3>
                      <p className="text-lg font-semibold text-foreground">{item.solution}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.impact}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
