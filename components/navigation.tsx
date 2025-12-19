"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Menu, X } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  const navItems = [
    { id: "what-i-do", label: "Journey" },
    { id: "solutions", label: "Solutions" },
    { id: "case-studies", label: "Experience" },
    { id: "technical-expertise", label: "Expertise" },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50" : "bg-transparent"
          }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-lg font-bold text-foreground hover:text-accent transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent rounded px-2 relative z-50"
              aria-label="Neeraj - Go to home"
            >
              Neeraj
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm text-muted-foreground hover:text-accent transition-colors relative group focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent rounded px-2 py-1"
                  aria-label={`Go to ${item.label} section`}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}

              {isMounted && (
                <button
                  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                  className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent"
                  aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
                  title={`Current theme: ${theme}`}
                >
                  {theme === "light" ? (
                    <Moon className="h-4 w-4 text-foreground" aria-hidden="true" />
                  ) : (
                    <Sun className="h-4 w-4 text-foreground" aria-hidden="true" />
                  )}
                </button>
              )}

              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm px-4 py-2 rounded-lg bg-accent text-accent-foreground hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
                aria-label="Go to contact section"
              >
                Connect
              </button>
            </div>

            {/* Mobile Menu Button and Theme Toggle */}
            <div className="md:hidden flex items-center gap-2 relative z-50">
              {isMounted && (
                <button
                  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                  className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent"
                  aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
                >
                  {theme === "light" ? (
                    <Moon className="h-4 w-4 text-foreground" aria-hidden="true" />
                  ) : (
                    <Sun className="h-4 w-4 text-foreground" aria-hidden="true" />
                  )}
                </button>
              )}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg hover:bg-secondary transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent"
                aria-label={`${isMobileMenuOpen ? "Close" : "Open"} mobile menu`}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5 text-foreground" aria-hidden="true" />
                ) : (
                  <Menu className="h-5 w-5 text-foreground" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-background/95 backdrop-blur-md z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-[72px] left-0 right-0 z-40 md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
      >
        <div className="bg-background/95 backdrop-blur-md border-b border-border/50 shadow-xl">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 text-base text-muted-foreground hover:text-accent hover:bg-accent/10 rounded-lg transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent"
                aria-label={`Go to ${item.label} section`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-4 py-3 text-base rounded-lg bg-accent text-accent-foreground hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary mt-4"
              aria-label="Go to contact section"
            >
              Connect
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
