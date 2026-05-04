"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "cathadservice@gmail.com",
    href: "mailto:cathadservice@gmail.com",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "06 71 94 94 30",
    href: "tel:+33600000000",
  },
  {
    icon: MapPin,
    label: "Zone d'intervention",
    value: " luneville et environ ",
  },
  {
    icon: Clock,
    label: "Horaires",
    value: "Lun-Ven, 9h-16h",
  },
]

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Un courrier vous bloque ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ne restez pas seul(e), je suis là pour vous aider. Contactez-moi pour échanger sur vos besoins.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Envoyez-moi un message</CardTitle>
              <CardDescription>
                Je vous réponds dans les 24 heures
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                    <Send className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Message envoyé !
                  </h3>
                  <p className="text-muted-foreground">
                    Merci pour votre message. Je vous recontacte très bientôt.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Nom
                      </label>
                      <Input 
                        id="name" 
                        name="name" 
                        placeholder="Votre nom" 
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email
                      </label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        placeholder="votre@email.fr" 
                        required 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-foreground">
                      Téléphone (optionnel)
                    </label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      type="tel" 
                      placeholder="06 XX XX XX XX" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Votre message
                    </label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      placeholder="Décrivez votre besoin..."
                      rows={5}
                      required 
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    {info.href ? (
                      <a 
                        href={info.href} 
                        className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-lg font-medium text-foreground">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Additional note */}
            <div className="mt-12 p-6 rounded-xl bg-secondary">
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Premier contact gratuit !</strong> Nous pouvons échanger par téléphone pour discuter de vos besoins avant de planifier un rendez-vous diagnostic.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
