"use client"

import { BarChart3, Zap, Layers } from "lucide-react"

export function StatsShowcase() {
  const stats = [
    {
      icon: BarChart3,
      value: "9+",
      label: "Years of Experience",
      description: "Solving complex production challenges",
    },
    {
      icon: Zap,
      value: "Production",
      label: "Systems Owned",
      description: "From design to production stability",
    },
    {
      icon: Layers,
      value: "2",
      label: "Industries",
      description: "EdTech and AgriTech platforms",
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 relative bg-card/50" aria-label="Career statistics" role="region">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="p-6 rounded-xl border border-border/50 bg-background hover:bg-accent/5 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 group"
                role="article"
                aria-label={`${stat.value} ${stat.label}`}
              >
                <Icon
                  className="w-8 h-8 text-accent mb-3 group-hover:scale-110 transition-transform"
                  aria-hidden="true"
                />
                <div className="text-4xl font-bold text-accent mb-2">{stat.value}</div>
                <h3 className="font-semibold text-foreground mb-2">{stat.label}</h3>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
