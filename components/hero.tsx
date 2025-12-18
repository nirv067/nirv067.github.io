"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, MessageCircle } from "lucide-react"

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden"
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
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-balance animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              Hi, I'm <span className="text-accent">Neeraj</span>
            </h1>
          </div>

          <p
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl text-pretty animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            Let me walk you through 9+ years of building scalable backend systems, securing platforms, and automating
            operations. From EdTech to AgriTech, I've owned systems that power businesses.
          </p>

          <div className="pt-4 animate-slide-up flex flex-wrap gap-4" style={{ animationDelay: "0.3s" }}>
            <Button
              size="lg"
              onClick={scrollToContact}
              className="group bg-accent hover:bg-primary text-accent-foreground"
              aria-label="Scroll to contact section"
            >
              <MessageCircle className="mr-2 h-4 w-4" aria-hidden="true" />
              Let's Talk
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("what-i-do")}
              className="group border-accent/50 hover:border-accent text-foreground"
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
