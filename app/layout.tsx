import type { Metadata } from 'next'
import { Playfair_Display, Source_Sans_3 } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap"
});

const sourceSans = Source_Sans_3({ 
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Cath'AdServices - Assistance Administrative et Rédaction",
  description: "Aide à la rédaction de courriers, assistance administrative à domicile, correction et compréhension de documents. Service personnalisé et bienveillant.",
  keywords: ["rédaction", "assistance administrative", "courriers", "aide à domicile", "secrétariat"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${playfair.variable} ${sourceSans.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
