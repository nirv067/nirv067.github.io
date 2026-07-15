"use client"

import { GraduationCap } from "lucide-react"

const education = [
  {
    degree: "Bachelor of Technology, Information Technology",
    school: "J.C. Bose University of Science and Technology, YMCA",
    period: "2013 – 2016",
  },
  {
    degree: "Diploma, Electronics and Communications Engineering",
    school: "Guru BrahmaNand Ji Govt. Polytechnic, Nilokheri",
    period: "2010 – 2013",
  },
]

export function Education() {
  return (
    <section id="education" className="px-4 sm:px-6 py-16 relative">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3">
            <span className="w-1 h-7 bg-accent rounded-full"></span>
            Education
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {education.map((ed) => (
              <div
                key={ed.degree}
                className="p-6 rounded-xl border border-border/50 bg-card/50 hover:bg-card hover:border-accent/50 transition-all duration-300 hover:-translate-y-1 group flex gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/20 group-hover:bg-accent/30 flex items-center justify-center flex-shrink-0 transition-colors">
                  <GraduationCap className="w-5 h-5 text-accent" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground group-hover:text-accent transition-colors">
                    {ed.degree}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{ed.school}</p>
                  <p className="text-sm text-accent font-medium mt-1">{ed.period}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
