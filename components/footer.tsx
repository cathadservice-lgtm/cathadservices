import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo and tagline */}
          <div className="text-center md:text-left">
            <a href="#" className="inline-block mb-3">
              <Image 
                src="/images/logo.jpg" 
                alt="Cath'AdServices" 
                width={120} 
                height={60}
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </a>
            <p className="text-background/70 italic">
              Des idées qui prennent forme...
            </p>
          </div>

          {/* Quick links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#services" className="text-background/70 hover:text-background transition-colors">
              Services
            </a>
            <a href="#about" className="text-background/70 hover:text-background transition-colors">
              Qui suis-je
            </a>
            <a href="#pricing" className="text-background/70 hover:text-background transition-colors">
              Tarifs
            </a>
            <a href="#contact" className="text-background/70 hover:text-background transition-colors">
              Contact
            </a>
          </nav>
        </div>

        {/* Separator */}
        <div className="border-t border-background/20 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-background/60">
            <p>
              © {new Date().getFullYear()} Cath&apos;AdServices. Tous droits réservés.
            </p>
            <p>
              — Cathy
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
