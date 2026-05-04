import { Button } from "@/components/ui/button"
import { PenLine, ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-8">
          <PenLine className="h-4 w-4" />
          <span>Assistance administrative et rédaction</span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6 text-balance">
          Des idées qui prennent forme...
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed">
          Les mots vous échappent ? Les courriers vous donnent du fil à retordre ?
        </p>

        <p className="text-lg sm:text-xl text-foreground font-medium mb-10">
          Respirez... on va trouver les bons mots ensemble.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild className="text-base px-8">
            <a href="#contact">
              Écrivons ensemble
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild className="text-base px-8">
            <a href="#services">Découvrir mes services</a>
          </Button>
        </div>

        {/* Trust indicator */}
        <p className="mt-12 text-sm text-muted-foreground">
          50% de crédit d&apos;impôt sur les prestations à domicile
        </p>
      </div>
    </section>
  )
}
