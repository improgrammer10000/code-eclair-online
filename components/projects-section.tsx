"use client" // Nécessaire pour framer-motion

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function ProjectsSection() {
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

  const projects = [
    {
      title: "E-commerce de Luxe Personnalisé",
      description:
        "Une plateforme de vente en ligne sur mesure, optimisée pour la conversion et l'expérience utilisateur haut de gamme.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Application SaaS Intuitive & Scalable",
      description:
        "Une application web métier robuste, conçue pour simplifier la gestion de projets complexes et évoluer avec vos besoins.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Site Vitrine Artistique Immersif",
      description:
        "Un portfolio digital captivant pour un artiste, mettant en valeur ses œuvres avec des animations fluides et un design unique.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Portail Immobilier Avancé",
      description:
        "Une plateforme complète pour la recherche, la gestion et la promotion de biens immobiliers, avec des fonctionnalités de pointe.",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <div className="bg-[#1f1f1f]">
      {" "}
      {/* Ajout de ce div */}
      <motion.section
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="py-20 px-4 md:px-8 lg:px-16 text-white" // bg-[#1f1f1f] supprimé ici
      >
        <div className="max-w-6xl mx-auto text-center space-y-12">
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-purple-300"
          >
            Nos Réalisations Exceptionnelles
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Explorez notre portfolio diversifié, illustrant notre engagement envers l'excellence et l'innovation dans
            chaque projet.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="bg-gray-900/50 border border-gray-700/50 text-white rounded-lg shadow-xl overflow-hidden group backdrop-blur-sm hover:bg-gray-800/60 hover:border-purple-500/50 transition-all duration-300">
                  <div className="relative w-full h-48 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardHeader className="p-6">
                    <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                    <CardDescription className="text-gray-300">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <Link href="#" className="text-purple-400 hover:underline text-sm font-medium">
                      Voir le projet →
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  )
}
