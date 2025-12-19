"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Phone, Linkedin, Github, MessageCircle, ArrowRight } from "lucide-react"

export function GetInTouch() {
  const contactMethods = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Quick Response",
      href: "https://wa.me/919711445587",
      primary: true,
    },
    {
      icon: Mail,
      label: "Email",
      value: "nirv067@gmail.com",
      href: "mailto:nirv067@gmail.com",
      primary: true,
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9711445587",
      href: "tel:+919711445587",
      primary: false,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect professionally",
      href: "https://www.linkedin.com/in/neeraj-singh-majestic-dev/",
      primary: false,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View code samples",
      href: "https://github.com/nirv067",
      primary: false,
    },
  ]

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 relative">
      <div className="max-w-4xl w-full">
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
            <div className="flex justify-center mb-6">
              <div className="w-12 h-1 bg-accent rounded-full"></div>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Open to senior backend and platform engineering opportunities. Available for roles focused on production
              systems, architecture, and technical ownership.
            </p>
          </div>

          <Card className="p-8 md:p-12 bg-card border border-border/50 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>

            <div className="space-y-8 relative z-10">
              <div>
                <h3 className="text-sm font-semibold text-accent uppercase tracking-wide mb-6">
                  Preferred Contact Methods
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {contactMethods
                    .filter((method) => method.primary)
                    .map((method, index) => (
                      <a
                        key={index}
                        href={method.href}
                        target={method.href.startsWith("http") ? "_blank" : undefined}
                        rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="group/btn"
                      >
                        <div className="relative">
                          <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-accent/50 rounded-lg opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 blur-sm -z-10"></div>
                          <Button
                            variant="outline"
                            size="lg"
                            className="w-full justify-start h-auto py-4 hover:bg-accent hover:text-accent-foreground group/inner bg-card/50 border-border/50"
                          >
                            <method.icon className="h-5 w-5 mr-3 group-hover/inner:scale-110 transition-transform" />
                            <div className="text-left">
                              <div className="font-semibold text-foreground group-hover/inner:text-accent-foreground">{method.label}</div>
                              <div className="text-sm text-muted-foreground group-hover/inner:text-accent-foreground/80">
                                {method.value}
                              </div>
                            </div>
                          </Button>
                        </div>
                      </a>
                    ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-accent uppercase tracking-wide mb-4">Other Channels</h3>
                <div className="flex flex-wrap gap-3">
                  {contactMethods
                    .filter((method) => !method.primary)
                    .map((method, index) => (
                      <a
                        key={index}
                        href={method.href}
                        target={method.href.startsWith("http") ? "_blank" : undefined}
                        rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        <Button
                          variant="outline-accent"
                          className="group/btn"
                        >
                          <method.icon className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                          {method.label}
                        </Button>
                      </a>
                    ))}
                </div>
              </div>

              <div className="pt-6 border-t border-border/50">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <p className="text-sm font-semibold text-foreground">Based in Gurugram, Haryana, India</p>
                    <p className="text-sm text-muted-foreground">Open to remote and hybrid opportunities</p>
                  </div>
                  <a href="https://wa.me/919711445587" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="group bg-primary hover:bg-accent text-primary-foreground hover:text-accent-foreground">
                      <MessageCircle className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                      Message on WhatsApp
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </div>
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
