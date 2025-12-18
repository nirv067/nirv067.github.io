import { Card } from "@/components/ui/card"

export function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-secondary/30 relative"
    >
      <div className="max-w-5xl w-full">
        <div className="space-y-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center gap-3">
              <span className="w-1 h-8 bg-accent rounded-full"></span>
              Experience
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Technical ownership and delivery across production platforms.
            </p>
          </div>

          {/* Edustoke Case Study */}
          <Card className="p-8 md:p-12 space-y-6 bg-card border border-border/50 hover:border-accent/50 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            <div className="space-y-2 relative z-10">
              <div className="flex items-baseline gap-3 flex-wrap">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-accent transition-colors">
                  Edustoke
                </h3>
                <span className="text-sm text-accent font-semibold">Dec 2017 – Nov 2023</span>
              </div>
              <p className="text-lg text-muted-foreground">
                Senior Software Engineer — Technical Lead (Platform Ownership)
              </p>
              <p className="text-base text-muted-foreground">EdTech Marketplace Platform • Gurugram, India</p>
            </div>

            <div className="space-y-4 relative z-10">
              <div>
                <h4 className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">Overview</h4>
                <p className="text-base text-foreground leading-relaxed">
                  Served as primary technical owner for the core platform, responsible for backend architecture, system
                  reliability, and scalable growth. Led modernization of a legacy PHP/HTML monolith into a Node.js and
                  React modular architecture, improving maintainability and deployment safety.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">Key Deliverables</h4>
                <ul className="space-y-2 text-base text-foreground leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-accent mt-1">→</span>
                    <span>
                      Designed and delivered Lead Management System (LMS), Counsellor Management System (CMS), internal
                      CRM, RBAC/ABAC-based admin dashboards, and real-time analytics
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent mt-1">→</span>
                    <span>
                      Implemented JWT-based authentication, integrated OAuth 2.0 identity providers, and enabled Single
                      Sign-On (SSO)
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent mt-1">→</span>
                    <span>
                      Added Multi-Factor Authentication (MFA / 2FA) using OTP-based verification for high-privilege
                      roles
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent mt-1">→</span>
                    <span>
                      Designed and enforced Role-Based and Attribute-Based Access Control (RBAC/ABAC) across internal
                      workflows
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent mt-1">→</span>
                    <span>Integrated cloud telephony, ERP/CRM tools, and SEO automation pipelines</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent mt-1">→</span>
                    <span>
                      Established engineering standards, conducted code reviews, mentored developers, and acted as the
                      technical escalation point
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* FarMart Case Study */}
          <Card className="p-8 md:p-12 space-y-6 bg-card border border-border/50 hover:border-accent/50 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            <div className="space-y-2 relative z-10">
              <div className="flex items-baseline gap-3 flex-wrap">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-accent transition-colors">
                  FarMart
                </h3>
                <span className="text-sm text-accent font-semibold">Nov 2023 – Dec 2024</span>
              </div>
              <p className="text-lg text-muted-foreground">Senior Software Engineer — Backend & Platform Lead</p>
              <p className="text-base text-muted-foreground">AgriTech Supply Chain Platform • Gurugram, India</p>
            </div>

            <div className="space-y-4 relative z-10">
              <div>
                <h4 className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">Overview</h4>
                <p className="text-base text-foreground leading-relaxed">
                  Owned backend architecture and delivery for internal operational systems supporting vendors, field
                  teams, and compliance workflows. Worked closely with product and operations teams to ensure production
                  stability.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">Key Deliverables</h4>
                <ul className="space-y-2 text-base text-foreground leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-accent mt-1">→</span>
                    <span>
                      Automated internal sample processing workflows, eliminating manual handoffs and significantly
                      improving turnaround time
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent mt-1">→</span>
                    <span>
                      Built integrations for GST validation, Aadhaar-based identity checks, SIM-based tracking, billing,
                      and issue/ticket management
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent mt-1">→</span>
                    <span>
                      Improved API performance, scalability, and reliability through query optimization, asynchronous
                      processing, and structured error handling
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent mt-1">→</span>
                    <span>
                      Designed event-driven workflows using asynchronous patterns and Kafka-based messaging (working
                      exposure)
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <div className="space-y-6">
            <h3 className="text-xl font-bold text-foreground flex items-center gap-3">
              <span className="w-1 h-6 bg-accent rounded-full"></span>
              Other Roles
            </h3>

            <div className="space-y-4 pl-4 border-l-2 border-accent/30 hover:border-accent/50 transition-colors">
              <div>
                <div className="flex items-baseline gap-3 flex-wrap mb-1">
                  <h4 className="text-lg font-semibold text-foreground">Appinfoedge Solutions</h4>
                  <span className="text-sm text-accent font-semibold">Nov 2025 – Present</span>
                </div>
                <p className="text-base text-muted-foreground mb-2">
                  Senior Software Engineer — Technical Consultant • Noida, India
                </p>
                <p className="text-sm text-foreground leading-relaxed">
                  Architecting scalable backend systems and guiding secure API design, performance optimization, and
                  reliability best practices.
                </p>
              </div>

              <div>
                <div className="flex items-baseline gap-3 flex-wrap mb-1">
                  <h4 className="text-lg font-semibold text-foreground">Edustoke</h4>
                  <span className="text-sm text-accent font-semibold">Feb 2025 – Jul 2025</span>
                </div>
                <p className="text-base text-muted-foreground mb-2">
                  Technical Product Owner (Engineering-Focused) • Gurugram, India
                </p>
                <p className="text-sm text-foreground leading-relaxed">
                  Owned delivery of selected platform modules with responsibility for technical execution and system
                  stability.
                </p>
              </div>

              <div>
                <div className="flex items-baseline gap-3 flex-wrap mb-1">
                  <h4 className="text-lg font-semibold text-foreground">VUI Consultancy Pvt. Ltd.</h4>
                  <span className="text-sm text-accent font-semibold">Dec 2024 – Feb 2025</span>
                </div>
                <p className="text-base text-muted-foreground mb-2">
                  Senior Software Engineer — Technical Consultant • Gurugram, India
                </p>
                <p className="text-sm text-foreground leading-relaxed">
                  Delivered backend systems and AI-driven automation solutions for client platforms. Provided
                  architecture guidance, API design, and performance optimization.
                </p>
              </div>

              <div>
                <div className="flex items-baseline gap-3 flex-wrap mb-1">
                  <h4 className="text-lg font-semibold text-foreground">BlackLight Studio Works & Others</h4>
                  <span className="text-sm text-accent font-semibold">2016 – 2017</span>
                </div>
                <p className="text-base text-muted-foreground mb-2">
                  Software Engineer (Early Career) • Noida / Faridabad, India
                </p>
                <p className="text-sm text-foreground leading-relaxed">
                  Developed full-stack web applications using Angular, Java, PHP, JavaScript, HTML, and CSS. Built
                  internal CRM systems, reusable UI components, and third-party API integrations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
