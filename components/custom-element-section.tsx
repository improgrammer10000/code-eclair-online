"use client"

import { MessageSquareText, Code } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function CustomElementSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 }) // Déclenche l'animation une seule fois quand 30% de l'élément est visible

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
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
        <div className="max-w-6xl mx-auto text-center space-y-12 relative z-10">
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold tracking-tight">
            Besoin d'un élément en plus ?
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Votre projet est unique, et vos besoins peuvent évoluer. Chez Code éclair, nous sommes experts dans
            l'intégration de fonctionnalités spécifiques, même dans un code existant.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants}>
              <div className="bg-gray-800 border-gray-700 p-8 rounded-lg shadow-xl space-y-4">
                <MessageSquareText className="h-10 w-10 text-blue-400 mx-auto" />
                <h3 className="text-xl font-bold">Intégration de Chatbot</h3>
                <p className="text-gray-300">
                  Ajoutez un chatbot intelligent pour améliorer l'expérience utilisateur, répondre aux questions
                  fréquentes et automatiser le support client, directement dans votre site actuel.
                </p>
              </div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="bg-gray-800 border-gray-700 p-8 rounded-lg shadow-xl space-y-4">
                <Code className="h-10 w-10 text-purple-400 mx-auto" />
                <h3 className="text-xl font-bold">Développement Sur Mesure</h3>
                <p className="text-gray-300">
                  Qu'il s'agisse d'une nouvelle fonctionnalité, d'une API complexe ou d'une optimisation de performance,
                  nous pouvons développer et intégrer du code sur mesure à votre projet existant.
                </p>
              </div>
            </motion.div>
          </div>
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto pt-4">
            N'hésitez pas à nous contacter pour discuter de vos idées et voir comment nous pouvons les concrétiser.
          </motion.p>
        </div>
      </motion.section>
    </div>
  )
}
