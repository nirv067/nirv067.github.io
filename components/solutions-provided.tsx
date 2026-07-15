"use client"

import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export function SolutionsProvided() {
  const solutions = [
    {
      problem: "10–12 day GST filing & procurement cycle",
      solution: "I automated GST filing, invoicing, and PO/SO workflows at FarMart",
      impact: "Queue-based background workers cut end-to-end cycle time to 2–3 days — a ~75% reduction",
    },
    {
      problem: "20+ hours of manual PO creation per cycle",
      solution: "I automated the API-driven PO flow from sample collection to final order",
      impact: "Added rate-limiting and retry logic for third-party integrations, saving ~20 hours per cycle",
    },
    {
      problem: "Manual, unauditable incident report filing",
      solution: "I own the AI-based FIR filing workflow at Unifymark",
      impact: "Automated report submission end-to-end with JWT/RBAC-secured background job processing",
    },
    {
      problem: "10,000–15,000 daily users straining core dashboards",
      solution: "I introduced Redis caching and indexing on high-read endpoints at Edustoke",
      impact: "Reduced query latency on core dashboards while sustaining ~2,000 leads processed per day",
    },
    {
      problem: "Undifferentiated access across 75+ internal staff",
      solution: "I designed RBAC across admin platforms at Edustoke",
      impact: "Supported 40+ counselors, 25+ lead verifiers, and 10+ finance/ops staff with tailored permissions",
    },
    {
      problem: "Legacy PHP/Sails.js monolith slowing releases",
      solution: "I migrated Edustoke's platform to React, Next.js, and microservices",
      impact: "Introduced CI/CD and Docker deployments, improving release velocity and maintainability",
    },
    {
      problem: "Concurrent load across EDR/XDR data ingestion",
      solution: "I implemented Redis caching and rate-limiting at Unifymark",
      impact: "Sustained reliable throughput across security data pipelines under concurrent load",
    },
    {
      problem: "Regulated-sector clients needing on-premise deployment",
      solution: "I containerized and shipped secure document storage with Docker & Kubernetes",
      impact: "Delivered client-premise deployments with CI/CD and Nginx configured per environment",
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
              Real production problems I've owned and solved, with measurable impact
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
