"use client"

import { CheckCircle2 } from "lucide-react"

export function TechnicalExpertise() {
  const expertise = [
    {
      category: "Backend & APIs",
      skills: "Node.js, JavaScript/TypeScript, Python, FastAPI, Django, REST APIs, Microservices, System Design",
    },
    {
      category: "Databases",
      skills: "PostgreSQL, MySQL, Redis, MongoDB",
    },
    {
      category: "Architecture & Messaging",
      skills: "Event-Driven Architecture, Asynchronous Processing, Apache Kafka, NATS (working exposure)",
    },
    {
      category: "Cloud & DevOps",
      skills: "Docker, CI/CD, AWS, GCP (working exposure)",
    },
    {
      category: "Security & Access Control",
      skills: "JWT, OAuth 2.0, Single Sign-On (SSO), Multi-Factor Authentication (MFA), RBAC, ABAC",
    },
    {
      category: "Frontend",
      skills: "React, Next.js, Angular",
    },
  ]

  return (
    <section id="technical-expertise" className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 relative">
      <div className="max-w-5xl w-full">
        <div className="space-y-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center gap-3">
              <span className="w-1 h-8 bg-accent rounded-full"></span>
              Technical Skills
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Production-tested technical stack and proven hands-on experience.
            </p>
          </div>
          <div className="space-y-4">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="p-6 border border-border/50 rounded-xl hover:bg-accent/5 hover:border-accent/50 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="grid md:grid-cols-3 gap-4 items-start">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                      {item.category}
                    </h3>
                  </div>
                  <p className="md:col-span-2 text-base text-muted-foreground leading-relaxed">{item.skills}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
