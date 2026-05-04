import { CheckCircle } from "lucide-react"

const qualities = [
  "Écoute et bienveillance",
  "Discrétion assurée",
  "Sans jugement",
  "Disponible et flexible",
]

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image / Visual */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto lg:mx-0 rounded-2xl bg-secondary overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 rounded-full bg-primary/20 mx-auto mb-6 flex items-center justify-center">
                    <span className="font-serif text-5xl text-primary font-bold">C</span>
                  </div>
                  <p className="font-serif text-2xl text-foreground italic">
                    &quot;Des mots justes, un esprit tranquille.&quot;
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -z-10 top-8 -right-8 w-full h-full rounded-2xl border-2 border-primary/20 hidden lg:block" />
          </div>

          {/* Content */}
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Qui suis-je ?
            </h2>
            
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed mb-8">
              <p>
                Moi, c&apos;est <strong className="text-foreground">Cathy</strong>. J&apos;aide celles et ceux qui ont besoin d&apos;un coup de main pour écrire, corriger ou comprendre leurs courriers.
              </p>
              <p>
                Je suis à votre service : <strong className="text-foreground">actifs, demandeurs d&apos;emploi, étudiants, familles</strong>... Ma plume écrira pour vous, sans stress et sans jugement.
              </p>
              <p>
                Que ce soit pour un courrier administratif, une lettre de motivation, un discours ou simplement pour comprendre un document complexe, je suis là pour vous accompagner avec bienveillance.
              </p>
            </div>

            {/* Qualities */}
            <div className="grid sm:grid-cols-2 gap-3">
              {qualities.map((quality) => (
                <div key={quality} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{quality}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
