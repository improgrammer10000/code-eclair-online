"use client" // Nécessaire pour framer-motion

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Gem } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 }) // Déclenche l'animation une seule fois quand 30% de l'élément est visible

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.3, // Délai avant que les enfants commencent à apparaître
        staggerChildren: 0.2, // Délai entre l'apparition de chaque enfant
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className="bg-[#1f1f1f] relative overflow-hidden">
      {" "}
      {/* Ajout de ce div */}
      <motion.section
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="py-20 px-4 md:px-8 lg:px-16 text-white" // bg-[#1f1f1f] et relative overflow-hidden supprimés ici
      >
        {/* Subtle background glow/gradient for premium feel */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000" />
        </div>

        <div className="max-w-6xl mx-auto text-center space-y-12 relative z-10">
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-purple-300"
          >
            Nos Prestations de Services
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Que vous ayez besoin d'une présence en ligne simple ou d'une solution complexe et sur mesure, Code éclair
            est votre partenaire idéal.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants}>
              <Card className="bg-gray-900/50 border border-gray-700/50 text-white p-6 rounded-lg shadow-xl backdrop-blur-sm hover:bg-gray-800/60 hover:border-purple-500/50 transition-all duration-300">
                <CardHeader className="flex flex-col items-center space-y-4">
                  <Code className="h-12 w-12 text-purple-400" />
                  <CardTitle className="text-2xl font-bold">Sites Vitrine Simples</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 text-center space-y-4">
                  <CardDescription className="text-gray-300">
                    Créez une première impression mémorable avec un site web élégant et fonctionnel. Idéal pour
                    présenter votre activité, vos services et vos coordonnées.
                  </CardDescription>
                  <ul className="list-disc list-inside text-left mx-auto max-w-xs">
                    <li>Design responsive</li>
                    <li>Optimisation SEO de base</li>
                    <li>Intégration de formulaires de contact</li>
                    <li>Galerie d'images</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Card className="bg-gray-900/50 border border-gray-700/50 text-white p-6 rounded-lg shadow-xl backdrop-blur-sm hover:bg-gray-800/60 hover:border-pink-500/50 transition-all duration-300">
                <CardHeader className="flex flex-col items-center space-y-4">
                  <Gem className="h-12 w-12 text-pink-400" />
                  <CardTitle className="text-2xl font-bold">Solutions Haut de Gamme</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 text-center space-y-4">
                  <CardDescription className="text-gray-300">
                    Développez des plateformes complexes et innovantes, conçues pour répondre à vos besoins spécifiques
                    et évoluer avec votre entreprise.
                  </CardDescription>
                  <ul className="list-disc list-inside text-left mx-auto max-w-xs">
                    <li>Applications web personnalisées</li>
                    <li>E-commerce avancé</li>
                    <li>Intégrations API complexes</li>
                    <li>Systèmes de gestion de contenu (CMS) sur mesure</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
