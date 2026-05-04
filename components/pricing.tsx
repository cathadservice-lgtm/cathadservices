import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

const pricingOptions = [
  {
    title: "Ponctuel",
    subtitle: "Pour vos besoins occasionnels",
    featured: false,
    items: [
      { label: "1 document", price: "30 €" },
      { label: "2 documents", price: "50 €" },
      { label: "3 documents", price: "75 €" },
    ],
    description: "Idéal pour un courrier urgent ou une aide ponctuelle.",
  },
  {
    title: "Abonnement",
    subtitle: "Formule régulière avantageuse",
    featured: true,
    items: [
      { label: "Tarif horaire", price: "40-50 €/h" },
      { label: "Suivi régulier", price: "Sur devis" },
    ],
    description: "Quelques heures par mois, fréquence flexible selon vos besoins.",
  },
  {
    title: "Diagnostic",
    subtitle: "Entretien personnalisé",
    featured: false,
    items: [
      { label: "60 min d'entretien", price: "50 €" },
    ],
    description: "Offert si suivi d'un abonnement. On échange sur vos besoins à votre domicile.",
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Tarifs transparents
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des formules adaptées à vos besoins et à votre budget
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {pricingOptions.map((option) => (
            <Card 
              key={option.title} 
              className={`relative ${option.featured ? "border-primary shadow-lg scale-105" : "border-border/50"}`}
            >
              {option.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                    <Star className="h-3 w-3" />
                    Recommandé
                  </span>
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl">{option.title}</CardTitle>
                <CardDescription>{option.subtitle}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  {option.items.map((item) => (
                    <div key={item.label} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                      <span className="text-muted-foreground">{item.label}</span>
                      <span className="font-semibold text-foreground">{item.price}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-6">
                  {option.description}
                </p>
                <Button 
                  asChild 
                  className="w-full" 
                  variant={option.featured ? "default" : "outline"}
                >
                  <a href="#contact">En savoir plus</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        
      </div>
    </section>
  )
}
