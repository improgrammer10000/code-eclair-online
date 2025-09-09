import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: "Code éclair - service de création d'app mobile & site web",
  description:
    "Développeur spécialisé en création d'applications mobiles et sites web. Transformez vos idées en réalité numérique avec des solutions sur mesure.",
  generator: "Code éclair",
  metadataBase: new URL("https://code-eclair.fr"),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  openGraph: {
    title: "Code éclair - service de création d'app mobile & site web",
    description:
      "Des solutions web & mobile sur mesure. De l'idée à la mise en ligne, nous réalisons vos projets numériques.",
    url: "https://code-eclair.fr",
    siteName: "Code éclair",
    images: [
      {
        url: "https://code-eclair.fr/og-image.jpg", // place ce fichier dans /public
        width: 1200,
        height: 630,
        alt: "Code éclair - votre partenaire web & mobile",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Code éclair - service de création d'app mobile & site web",
    description:
      "Développeur spécialisé en création d'applications mobiles et sites web. Transformez vos idées en réalité numérique avec des solutions sur mesure.",
    images: ["https://code-eclair.fr/og-image.jpg"]
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: { canonical: "https://code-eclair.fr" },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>

        {/* JSON-LD Schema.org pour Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Code éclair",
              url: "https://code-eclair.fr",
              logo: "https://code-eclair.fr/logo.png",
              sameAs: [
                "https://www.linkedin.com/in/thomas-paredes-2560932b0/"
              ],
            }),
          }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
};