"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { ChevronDown, MapPin } from "lucide-react"

type Experience = {
  company: string
  role: string
  period: string
  location: string
  summary: string
  bullets: string[]
  tech: string[]
  current?: boolean
}

const experiences: Experience[] = [
  {
    company: "Unifymark Technologies",
    role: "Senior Software Engineer (Consultant)",
    period: "Dec 2024 – Present · 19 mo",
    location: "Gurugram, India",
    summary:
      "Architecting enterprise cybersecurity and AI products — EDR, XDR, and AI-based FIR filing automation — as an individual contributor across three concurrent product lines.",
    bullets: [
      "Own end-to-end design of the AI-based FIR filing workflow, including authentication/authorization (JWT, RBAC), API design, and background job processing to automate report submission and cut manual turnaround time.",
      "Implement Redis caching and rate-limiting strategies to handle concurrent load across EDR/XDR data ingestion pipelines.",
      "Build a private, secure document storage solution for enterprise and institutional clients, containerized with Docker and Kubernetes for on-premise deployment.",
      "Customize and deploy products on client premises for regulated-sector tenders, configuring CI/CD pipelines and Nginx-based deployment infrastructure per client environment.",
    ],
    tech: ["Node.js", "React", "PostgreSQL", "Redis", "Python", "Docker", "Kubernetes", "JWT/OAuth", "RBAC"],
    current: true,
  },
  {
    company: "FarMart",
    role: "Senior Software Engineer & Delivery Lead",
    period: "Nov 2023 – Dec 2024 · 1 yr 2 mo",
    location: "Gurugram, India",
    summary:
      "Led a delivery team of 12 engineers on the FarMart OS platform, owning technical design, backend services, APIs, and database models for core marketplace operations.",
    bullets: [
      "Automated GST filing, invoice/bill generation, PO creation, and SO tracking with queue-based background workers — cutting end-to-end cycle time from 10–12 days to 2–3 days, a ~75% reduction.",
      "Saved ~20 hours per cycle by automating the API-driven PO creation flow from sample collection through final order, including rate-limiting and retry logic for third-party integrations.",
      "Applied database indexing and query optimization on high-traffic PostgreSQL tables to sustain performance as transaction volume scaled.",
      "Managed sprint planning, story assignment, and daily stand-ups as delivery lead, coordinating across engineering, product, and operations.",
      "Owned production deployments, monitoring, and incident response using CI/CD pipelines to maintain platform reliability.",
    ],
    tech: ["Node.js", "NestJS", "React", "PostgreSQL", "Redis", "Docker", "Jenkins", "GitHub Actions", "Microservices"],
  },
  {
    company: "Edustoke",
    role: "Senior Software Engineer & Technical Lead",
    period: "Apr 2020 – Nov 2023 · 3 yr 8 mo",
    location: "Gurugram, India",
    summary:
      "Led a technical team of 5, owning end-to-end development of core operations platforms: CRM, CMS, lead management, counselor management, and finance dashboards.",
    bullets: [
      "Built and scaled systems supporting 10,000–15,000 daily users, processing ~2,000 leads/day with automated filtering (rule-based + ElasticSearch indexing) surfacing ~600 verified leads/day for sales.",
      "Designed authentication and RBAC across admin platforms supporting 40+ counselors, 25+ lead verifiers, and 10+ finance/ops staff with differentiated permissions.",
      "Introduced Redis caching and database indexing on high-read endpoints, reducing query latency on core dashboards.",
      "Migrated legacy PHP and Sails.js/Angular systems to a unified React + Next.js microservices architecture, introducing CI/CD and containerized (Docker) deployments.",
      "Mentored engineers on code quality, system design, and production ownership; established unit/integration testing practices.",
      "Led incident response for production issues, resolving data-consistency and performance problems with minimal user disruption.",
    ],
    tech: ["React", "Next.js", "Node.js", "PostgreSQL", "Redis", "ElasticSearch", "PHP", "Angular", "Docker"],
  },
  {
    company: "BlackLight Studio Works Pvt. Ltd.",
    role: "Web Developer",
    period: "Dec 2016 – Dec 2017 · 1 yr 1 mo",
    location: "Noida, India",
    summary:
      "Developed full-stack web applications for client projects across API integration, database design, and UI development.",
    bullets: [
      "Collaborated with designers and stakeholders to deliver client-facing solutions using LAMP and MEAN stack architectures.",
    ],
    tech: ["PHP", "JavaScript", "MySQL", "HTML/CSS", "Java"],
  },
  {
    company: "Agilist Technologies",
    role: "Web Developer Trainee (previously Engineer Intern)",
    period: "Jan 2016 – Nov 2016 · 11 mo",
    location: "Noida, India",
    summary: "Progressed from engineering intern to web developer trainee, building foundational web development skills.",
    bullets: [
      "Gained hands-on exposure to professional software development practices, structured coding, and debugging.",
    ],
    tech: ["Core Java", "Advanced Java", "Web Fundamentals"],
  },
  {
    company: "Metazone",
    role: "Trainee (Part-time)",
    period: "Jul 2014 – Feb 2015 · 8 mo",
    location: "Faridabad, India",
    summary: "Trained in Core Java and Advanced Java alongside academic studies, building foundational programming skills.",
    bullets: [],
    tech: ["Core Java", "Advanced Java"],
  },
]

function ExperienceCard({ exp, index }: { exp: Experience; index: number }) {
  const [open, setOpen] = useState(index < 2)
  const hasBullets = exp.bullets.length > 0

  return (
    <Card className="p-6 md:p-10 space-y-5 bg-card border border-border/50 hover:border-accent/50 transition-all duration-300 group relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>

      <div className="space-y-2 relative z-10">
        <div className="flex items-baseline gap-3 flex-wrap">
          <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
            {exp.company}
          </h3>
          {exp.current && (
            <span className="text-xs font-semibold text-accent bg-accent/10 border border-accent/30 rounded-full px-2 py-0.5">
              Current
            </span>
          )}
          <span className="text-sm text-accent font-semibold ml-auto">{exp.period}</span>
        </div>
        <p className="text-base sm:text-lg text-muted-foreground">{exp.role}</p>
        <p className="text-sm text-muted-foreground flex items-center gap-1.5">
          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
          {exp.location}
        </p>
      </div>

      <p className="text-base text-foreground leading-relaxed relative z-10">{exp.summary}</p>

      {hasBullets && (
        <div className="relative z-10">
          <button
            onClick={() => setOpen((o) => !o)}
            className="flex items-center gap-2 text-sm font-semibold text-accent hover:underline focus-visible:ring-2 focus-visible:ring-accent rounded"
            aria-expanded={open}
          >
            {open ? "Hide details" : `Show ${exp.bullets.length} key deliverables`}
            <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden="true" />
          </button>
          <div
            className={`grid transition-all duration-300 ease-in-out ${open ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"}`}
          >
            <div className="overflow-hidden">
              <ul className="space-y-2 text-base text-foreground leading-relaxed">
                {exp.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-accent mt-1">→</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-wrap gap-2 relative z-10 pt-2">
        {exp.tech.map((t) => (
          <span
            key={t}
            className="text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground border border-border/50"
          >
            {t}
          </span>
        ))}
      </div>
    </Card>
  )
}

export function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 bg-secondary/30 relative"
    >
      <div className="max-w-5xl w-full">
        <div className="space-y-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center gap-3">
              <span className="w-1 h-8 bg-accent rounded-full"></span>
              Experience
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              10+ years of technical ownership and delivery across production platforms. Click any role to expand
              full details.
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <ExperienceCard key={exp.company + exp.period} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
