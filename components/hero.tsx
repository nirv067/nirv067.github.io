"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, MessageCircle } from "lucide-react"
import { useEffect, useState } from "react"

const ROLES = [
  "Full-Stack & Distributed Systems Engineer",
  "Platform & Backend Architecture Lead",
  "Security-First Systems Builder",
  "AI-Driven Product Engineer",
]

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion || paused) return

    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length)
    }, 2600)
    return () => clearInterval(interval)
  }, [paused])

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-24 sm:pt-20 relative overflow-hidden"
      role="region"
      aria-label="Hero section"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-72 h-72 bg-accent/15 rounded-full blur-3xl opacity-15 animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      <div className="max-w-4xl w-full relative z-10">
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
              <Sparkles className="h-4 w-4 text-accent" aria-hidden="true" />
              <span className="text-sm text-accent font-medium">Welcome to my journey</span>
            </div>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-balance animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              Hi, I'm <span className="text-accent">Neeraj</span>
            </h1>
            <div
              className="flex flex-col gap-2 animate-slide-up"
              style={{ animationDelay: "0.15s" }}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onFocus={() => setPaused(true)}
              onBlur={() => setPaused(false)}
            >
              <div className="h-8 sm:h-9 flex items-center overflow-hidden" aria-live="polite">
                <span
                  key={roleIndex}
                  className="text-lg sm:text-xl md:text-2xl font-semibold text-muted-foreground animate-slide-up"
                >
                  {ROLES[roleIndex]}
                </span>
              </div>
              <div className="flex items-center gap-1.5" role="group" aria-label="Select role to display">
                {ROLES.map((role, i) => (
                  <button
                    key={role}
                    onClick={() => setRoleIndex(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent ${
                      i === roleIndex ? "w-6 bg-accent" : "w-1.5 bg-border hover:bg-accent/50"
                    }`}
                    aria-label={`Show role: ${role}`}
                    aria-current={i === roleIndex}
                  />
                ))}
              </div>
            </div>
          </div>

          <p
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl text-pretty animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            10+ years designing and scaling production systems across EdTech, AgriTech, and cybersecurity/AI. I've led
            teams of up to 12, owned platforms serving 10,000+ daily users, and automated workflows that cut cycle
            times by 75%.
          </p>

          <div className="pt-4 animate-slide-up flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4" style={{ animationDelay: "0.3s" }}>
            <Button
              size="lg"
              onClick={scrollToContact}
              className="group bg-accent hover:bg-primary text-accent-foreground w-full sm:w-auto"
              aria-label="Scroll to contact section"
            >
              <MessageCircle className="mr-2 h-4 w-4" aria-hidden="true" />
              Let's Talk
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Button>
            <Button
              size="lg"
              variant="outline-accent"
              onClick={() => scrollToSection("what-i-do")}
              className="group w-full sm:w-auto"
              aria-label="Scroll to my journey section"
            >
              Explore My Journey
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
