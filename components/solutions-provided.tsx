"use client"

import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export function SolutionsProvided() {
  const solutions = [
    {
      problem: "Manual operational bottlenecks costing hours daily",
      solution: "I automated end-to-end sample processing workflows at FarMart",
      impact: "Eliminated manual handoffs between teams, reduced manual effort and improved turnaround time",
    },
    {
      problem: "Security vulnerabilities and access control gaps",
      solution: "I implemented comprehensive security layers at Edustoke",
      impact: "Deployed JWT authentication, OAuth 2.0 SSO, MFA for privileged roles, and RBAC/ABAC across workflows",
    },
    {
      problem: "Legacy PHP monolith hindering feature delivery",
      solution: "I migrated Edustoke's core platform to Node.js + React",
      impact: "Needed to improve deployment safety and enable independent module releases. Improved maintainability and reduced deployment risk",
    },
    {
      problem: "Disconnected internal systems and data silos",
      solution: "I built integrated operational platforms at Edustoke",
      impact: "Delivered LMS, CMS, internal CRM, and admin dashboards with real-time analytics to unify workflows",
    },
    {
      problem: "API performance and reliability issues under load",
      solution: "I optimized production APIs at FarMart",
      impact: "Applied query optimization, async processing, and structured error handling to improve scalability",
    },
    {
      problem: "Scaling challenges with synchronous workflows",
      solution: "I designed event-driven architecture at FarMart",
      impact: "Implemented async processing and Kafka-based messaging for decoupled, resilient operations",
    },
  ]

  return (
    <section
      id="solutions"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 bg-secondary/30 relative"
    >
      <div className="max-w-6xl w-full">
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Production Challenges I've Solved</h2>
            <div className="flex justify-center mb-6">
              <div className="w-12 h-1 bg-accent rounded-full"></div>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Real production problems I've owned and solved
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
