"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Rocket, ArrowRight } from "lucide-react"
import Image from "next/image"
import ContactFormModal from "./contact-form-modal"

export default function CompleteSolutionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section
      ref={ref}
      className="relative py-20 px-4 md:px-8 lg:px-16 text-white overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0f0b3c 0%, #1a0f4a 50%, #0f0b3c 100%)",
      }}
    >
      {/* Background effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto text-center space-y-16 relative z-10"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="space-y-6">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            De l'idée à la mise en ligne, on s'occupe de tout.
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Conception, design, développement, hébergement et mise en production. Vous n'avez rien à gérer, on s'occupe
            de tout de A à Z.
          </p>
        </motion.div>

        {/* Process Steps - Responsive SVG */}
        <motion.div variants={itemVariants} className="relative py-12">
          <div className="flex justify-center">
            {/* Desktop version */}
            <Image
              src="/icons/ensemble.svg"
              alt="Processus complet de A à Z"
              width={800}
              height={200}
              className="w-full max-w-4xl h-auto hidden md:block"
            />
            {/* Tablet/Mobile version */}
            <Image
              src="/icons/ensemble-vertical.svg"
              alt="Processus complet de A à Z"
              width={400}
              height={600}
              className="w-auto h-auto block md:hidden"
            />
          </div>
        </motion.div>

        {/* Informational Content */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-purple-300 font-bold text-lg">1</span>
            </div>
            <h3 className="text-xl font-semibold text-white">Zéro stress technique</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Pas besoin de vous soucier des serveurs, des mises à jour ou de la sécurité. Nous gérons tout l'aspect
              technique pour que vous puissiez vous concentrer sur votre business.
            </p>
          </div>

          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-pink-300 font-bold text-lg">2</span>
            </div>
            <h3 className="text-xl font-semibold text-white">Livraison garantie</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Délais respectés, qualité assurée. Votre projet sera livré clé en main, testé et optimisé, prêt à
              accueillir vos premiers visiteurs.
            </p>
          </div>

          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-300 font-bold text-lg">3</span>
            </div>
            <h3 className="text-xl font-semibold text-white">Support continu</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Après le lancement, nous restons à vos côtés. Maintenance, évolutions, et support technique pour faire
              grandir votre présence en ligne.
            </p>
          </div>
        </motion.div>

        {/* Key Benefits */}
        <motion.div
          variants={itemVariants}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-white/10"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-6">Pourquoi choisir notre approche complète ?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-white mb-1">Un seul interlocuteur</h4>
                <p className="text-gray-300 text-sm">Plus besoin de jongler entre différents prestataires</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-white mb-1">Cohérence garantie</h4>
                <p className="text-gray-300 text-sm">Design, développement et hébergement parfaitement alignés</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-white mb-1">Économies réalisées</h4>
                <p className="text-gray-300 text-sm">Tarif global plus avantageux qu'une approche fragmentée</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-white mb-1">Délais optimisés</h4>
                <p className="text-gray-300 text-sm">Processus fluide sans attente entre les différentes étapes</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="space-y-6">
          <Button
            onClick={() => setIsContactModalOpen(true)}
            size="lg"
            className="px-8 py-6 text-lg font-bold rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 transform hover:scale-105"
          >
            <Rocket className="mr-3 h-6 w-6" />
            <span className="hidden sm:inline">Lancer mon projet maintenant</span>
            <span className="sm:hidden">Commencer maintenant</span>
          </Button>

          <div className="pt-4">
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="inline-flex items-center text-gray-300 hover:text-white transition-colors duration-300 text-lg group"
            >
              Découvrir le détail de notre offre
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </motion.div>
      </motion.div>
      <ContactFormModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </section>
  )
}
