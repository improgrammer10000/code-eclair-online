"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import React, { useState } from "react"
import ContactFormModal from "./contact-form-modal"

// Utilisation de React.forwardRef pour passer le ref au composant
const HeroSection = React.forwardRef<HTMLElement>((props, ref) => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <>
      <section
        ref={ref}
        className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden"
      >
        {/* Static background color with radial gradient */}
        <div
          className="absolute inset-0 z-0 opacity-90"
          style={{
            background: "radial-gradient(ellipse 50vw 100vh at bottom right,#29206B, #130F24)",
          }}
        />

        {/* Brillance SVG */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="absolute z-10 mr-[80px] mt-[300px] gt370:mt-[200px] gt600:mt-[240px] gt700:mr-[200px] gt700:mt-[180px]" // Marges responsives
        >
          <Image
            src="/brillance.svg"
            alt="Effet de brillance"
            width={300}
            height={300}
            className="w-full h-auto opacity-50"
          />
        </motion.div>

        {/* Animated wave pattern */}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-[242px] z-20" // Positionné en bas, hauteur fixe, z-index 20
          style={{
            backgroundImage: `url("/wave.svg")`,
            backgroundSize: "cover", // Pour que le SVG s'étende sur toute la largeur et maintienne ses proportions
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Background overlay for blur effect */}
        <motion.div
          initial={{ opacity: 1, backdropFilter: "blur(100px)" }} // Commence avec un flou intense et opaque
          animate={{ opacity: 0, backdropFilter: "blur(0px)" }} // Anime vers l'absence de flou et transparent
          transition={{ duration: 1, ease: "easeOut" }} // Durée de 1 seconde
          className="absolute inset-0 z-50 bg-transparent pointer-events-none" // Au-dessus de tout, transparent, n'intercepte pas les clics
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative z-30 text-center px-4 space-y-4 max-w-4xl" // z-index 30 pour le contenu principal
        >
          <div className="flex flex-col items-center justify-center space-y-2">
            <Image src="/logo.svg" alt="Code éclair Logo" width={150} height={88} className="h-24 w-auto" />
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">Code éclair</h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
              Nous développons des sites web et des applications mobiles adaptés à vos besoins, qu'il s'agisse d'un
              projet simple ou d'une plateforme sur mesure. Laissez-vous emporter
            </p>
          </div>
          {/* Conteneur pour les SVGs iPhone et PC portable avec animations de flottement individuelles */}
          <div className="w-full flex justify-center items-end gap-8 mb-4">
            <motion.div
              animate={{ y: [0, -8, 0], x: [0, 5, 0] }} // Mouvement vertical et horizontal
              transition={{
                y: {
                  duration: 2.5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: 1.2,
                },
                x: {
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: 1.5,
                },
              }}
            >
              <Image
                src="/iphone.svg"
                alt="iPhone"
                width={100} // Taille ajustée pour être proportionnelle au PC portable
                height={200}
                className="h-auto w-auto max-w-[80px] md:max-w-[100px] lg:max-w-[120px]"
              />
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0], x: [0, -6, 0] }} // Mouvement vertical et horizontal différent
              transition={{
                y: {
                  duration: 2.8,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: 1.4,
                },
                x: {
                  duration: 3.2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: 1.7,
                },
              }}
            >
              <Image
                src="/pc-portable.svg"
                alt="Ordinateur portable"
                width={1355} // Largeur originale pour le ratio
                height={242} // Hauteur originale pour le ratio
                className="w-full h-auto max-w-[300px] md:max-w-[350px] lg:max-w-[400px]"
              />
            </motion.div>
          </div>
          <Button
            onClick={() => setIsContactModalOpen(true)}
            className="mt-8 px-8 py-6 text-lg font-semibold rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg"
          >
            Parler de mon projet
          </Button>
        </motion.div>
      </section>

      <ContactFormModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </>
  )
})

HeroSection.displayName = "HeroSection"

export default HeroSection
