import { Hero } from "@/components/hero"
import { StatsShowcase } from "@/components/stats-showcase"
import { WhatIDo } from "@/components/what-i-do"
import { SolutionsProvided } from "@/components/solutions-provided"
import { CaseStudies } from "@/components/case-studies"
import { TechnicalExpertise } from "@/components/technical-expertise"
import { Philosophy } from "@/components/philosophy"
import { GetInTouch } from "@/components/get-in-touch"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <StatsShowcase />
      <WhatIDo />
      <SolutionsProvided />
      <CaseStudies />
      <TechnicalExpertise />
      <Philosophy />
      <GetInTouch />
    </main>
  )
}
