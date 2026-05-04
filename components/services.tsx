import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PenLine, Search, Lightbulb, MessageSquareReply, FileText, Heart, PartyPopper, Music, Sparkles } from "lucide-react"

// Services mis en avant : Écritures personnelles
const featuredServices = [
  {
    icon: Heart,
    title: "Anniversaires & Fêtes",
    description: "Discours touchants, poèmes personnalisés, textes pour livres d'or... Rendez vos célébrations inoubliables.",
  },
  {
    icon: PartyPopper,
    title: "Mariages & Baptêmes",
    description: "Discours de cérémonie, voeux personnalisés, remerciements... Des mots qui marquent les esprits.",
  },
  {
    icon: Music,
    title: "Chansons & Hommages",
    description: "Paroles sur mesure, hommages émouvants, textes poétiques... Des créations uniques qui viennent du coeur.",
  },
]

// Services secondaires : Correction & Rédaction
const secondaryServices = [
  {
    icon: PenLine,
    title: "Rédaction",
    description: "Lettres de candidature, motivation, courriers personnels... Des textes clairs et efficaces.",
  },
  {
    icon: Search,
    title: "Correction",
    description: "Orthographe, grammaire, tournures de phrases... pour des textes impeccables.",
  },
]

// Services tertiaires : Administratif
const adminServices = [
  {
    icon: Lightbulb,
    title: "Compréhension",
    description: "Je vous aide à comprendre vos courriers complexes et à décrypter le jargon administratif.",
  },
  {
    icon: MessageSquareReply,
    title: "Réponse aux courriers",
    description: "On rédige ensemble des réponses claires et efficaces à vos correspondances.",
  },
  {
    icon: FileText,
    title: "Assistance administrative",
    description: "Classement, organisation de documents, aide aux démarches et formalités du quotidien.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Ce que je fais pour vous
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des idées qui prennent forme... pour tous vos moments de vie
          </p>
        </div>

        {/* Featured Services - Écritures personnelles */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="h-6 w-6 text-primary" />
            <h3 className="font-serif text-2xl font-semibold text-foreground">
              Écritures personnelles
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <Card key={service.title} className="border-primary/30 bg-gradient-to-br from-primary/5 to-secondary/30 hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Secondary Services - Correction & Rédaction */}
        <div className="mb-12">
          <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
            Correction & Rédaction
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {secondaryServices.map((service) => (
              <Card key={service.title} className="border-border/50 hover:border-secondary transition-colors">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Admin Services */}
        <div>
          <h3 className="font-serif text-xl font-semibold text-muted-foreground mb-6">
            Assistance administrative
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {adminServices.map((service) => (
              <Card key={service.title} className="border-border/30 bg-muted/30">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <service.icon className="h-5 w-5 text-muted-foreground" />
                    <CardTitle className="text-base font-medium text-muted-foreground">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
