import { Card } from "@/components/ui/card"

export function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full">
        <div className="space-y-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Contact</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Open to senior backend and platform engineering opportunities.
            </p>
          </div>
          <Card className="p-8 md:p-12 bg-card">
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">Location</h3>
                <p className="text-lg text-foreground">Gurugram, Haryana, India</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">Email</h3>
                <a
                  href="mailto:nirv067@gmail.com"
                  className="text-lg text-foreground hover:text-accent transition-colors"
                >
                  nirv067@gmail.com
                </a>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">Phone</h3>
                <a href="tel:+919711445587" className="text-lg text-foreground hover:text-accent transition-colors">
                  +91-9711445587
                </a>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/neeraj-singh-majestic-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-foreground hover:text-accent transition-colors"
                >
                  LinkedIn Profile
                </a>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">GitHub</h3>
                <a
                  href="https://github.com/nirv067"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-foreground hover:text-accent transition-colors"
                >
                  GitHub Profile
                </a>
              </div>
            </div>
          </Card>
          <div className="text-center pt-8">
            <p className="text-sm text-muted-foreground">© 2025 Neeraj. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
