"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "Qui suis-je" },
  { href: "#pricing", label: "Tarifs" },
  { href: "#contact", label: "Contact" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <Image 
              src="/images/logo.jpg" 
              alt="Cath'AdServices - Besoin d'aide" 
              width={140} 
              height={70}
              className="h-14 w-auto object-contain"
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <Button asChild>
              <a href="#contact">Me contacter</a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button asChild className="w-full mt-2">
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                  Me contacter
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
