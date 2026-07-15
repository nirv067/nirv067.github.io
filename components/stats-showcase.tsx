"use client"

import { useEffect, useRef, useState } from "react"
import { BarChart3, Users, Layers, Gauge } from "lucide-react"

type Stat = {
  icon: typeof BarChart3
  target: number
  suffix: string
  prefix?: string
  label: string
  description: string
}

const stats: Stat[] = [
  {
    icon: BarChart3,
    target: 10,
    suffix: "+",
    label: "Years of Experience",
    description: "Production systems across three industries",
  },
  {
    icon: Users,
    target: 15000,
    suffix: "",
    label: "Daily Active Users",
    description: "Peak platform usage owned at Edustoke",
  },
  {
    icon: Layers,
    target: 12,
    suffix: "",
    label: "Engineers Led",
    description: "Largest delivery team, at FarMart",
  },
  {
    icon: Gauge,
    target: 75,
    suffix: "%",
    label: "Cycle Time Reduction",
    description: "GST filing & procurement automation",
  },
]

function useCountUp(target: number, active: boolean) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return
    let frame: number
    const duration = 1400
    const start = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * target))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [active, target])

  return value
}

function StatCard({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)
  const value = useCountUp(stat.target, active)
  const Icon = stat.icon

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="p-6 rounded-xl border border-border/50 bg-background hover:bg-accent/5 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 group"
      role="article"
      aria-label={`${stat.target}${stat.suffix} ${stat.label}`}
    >
      <Icon className="w-8 h-8 text-accent mb-3 group-hover:scale-110 transition-transform" aria-hidden="true" />
      <div className="text-4xl font-bold text-accent mb-2 tabular-nums">
        {stat.prefix}
        {value.toLocaleString()}
        {stat.suffix}
      </div>
      <h3 className="font-semibold text-foreground mb-2">{stat.label}</h3>
      <p className="text-sm text-muted-foreground">{stat.description}</p>
    </div>
  )
}

export function StatsShowcase() {
  return (
    <section className="py-16 px-4 sm:px-6 relative bg-card/50" aria-label="Career statistics" role="region">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
