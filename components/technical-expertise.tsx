"use client"

import { useMemo, useState } from "react"
import { CheckCircle2 } from "lucide-react"

type Category = {
  name: string
  skills: string[]
}

const categories: Category[] = [
  {
    name: "Backend & API",
    skills: [
      "Node.js",
      "NestJS",
      "Express.js",
      "RESTful API Design",
      "GraphQL",
      "WebSockets",
      "API Gateway",
      "Rate Limiting",
      "Microservices Architecture",
      "System Design",
    ],
  },
  { name: "Frontend", skills: ["React", "Next.js", "Angular", "JavaScript (ES6+)", "HTML5", "CSS3"] },
  {
    name: "Databases & Caching",
    skills: ["PostgreSQL", "MySQL", "Redis", "ElasticSearch", "Database Design", "Indexing", "Query Optimization"],
  },
  {
    name: "Messaging & Async",
    skills: ["Kafka", "Background Job Processing", "Queue-Based Workers", "Event-Driven Architecture"],
  },
  { name: "Languages", skills: ["JavaScript", "TypeScript", "PHP", "Java", "Python"] },
  {
    name: "Cloud & DevOps",
    skills: ["AWS (EC2, S3, RDS)", "Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Nginx", "CI/CD", "On-Premise Deployment"],
  },
  {
    name: "Security",
    skills: ["JWT", "OAuth", "RBAC", "API Auth & Authorization", "EDR", "XDR", "AI-Based Compliance Automation"],
  },
  { name: "Testing & Quality", skills: ["Unit Testing", "Integration Testing", "Code Review"] },
  {
    name: "Practices",
    skills: ["Agile", "Scrum", "Sprint Planning", "Team Leadership", "Mentoring", "Production Incident Response"],
  },
]

const categoryNames = ["All", ...categories.map((c) => c.name)]

export function TechnicalExpertise() {
  const [active, setActive] = useState<string>("All")

  const filtered = useMemo(() => {
    if (active === "All") return categories
    return categories.filter((c) => c.name === active)
  }, [active])

  return (
    <section id="technical-expertise" className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 relative">
      <div className="max-w-5xl w-full">
        <div className="space-y-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center gap-3">
              <span className="w-1 h-8 bg-accent rounded-full"></span>
              Technical Skills
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Production-tested stack across backend, data, security, and cloud. Filter by category.
            </p>
          </div>

          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Filter technical skills by category"
          >
            {categoryNames.map((name) => (
              <button
                key={name}
                type="button"
                aria-pressed={active === name}
                onClick={() => setActive(name)}
                className={`text-sm font-medium px-3.5 py-1.5 rounded-full border transition-all duration-200 focus-visible:ring-2 focus-visible:ring-accent ${
                  active === name
                    ? "bg-accent text-accent-foreground border-accent shadow-sm shadow-accent/30"
                    : "bg-transparent text-muted-foreground border-border/50 hover:border-accent/50 hover:text-accent"
                }`}
              >
                {name}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {filtered.map((item) => (
              <div
                key={item.name}
                className="p-6 border border-border/50 rounded-xl hover:bg-accent/5 hover:border-accent/50 transition-all duration-300 group animate-fade-in"
              >
                <div className="grid md:grid-cols-3 gap-4 items-start">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                      {item.name}
                    </h3>
                  </div>
                  <div className="md:col-span-2 flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-sm px-2.5 py-1 rounded-full bg-secondary/70 text-secondary-foreground border border-border/40"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
