"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Globe, Smartphone } from "lucide-react"
import WebContent from "./web-content" // Import du nouveau composant WebContent
import { useMobile } from "@/hooks/use-mobile" // Ajout de cette ligne

export default function CreationSection() {
  const [activeTab, setActiveTab] = useState<"web" | "mobile">("web")
  const { isMobile } = useMobile() // Ajout de cette ligne

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.05 })

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

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } },
  }

  return (
    <div className="bg-[#1f1f1f] relative overflow-hidden">
      <motion.section
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="py-20 px-4 md:px-8 lg:px-16 text-white"
      >
        <div className="max-w-6xl mx-auto text-center space-y-12 relative z-10">
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-purple-300"
          >
            Nous proposons la création...
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez l'étendue de nos compétences et choisissez la solution qui propulsera votre projet.
          </motion.p>

          <motion.div variants={itemVariants} className="flex justify-center gap-6 mt-10">
            <Button
              onClick={() => setActiveTab("web")}
              className={`px-4 py-2 text-sm md:px-8 md:py-4 md:text-lg font-semibold rounded-full transition-all duration-300 shadow-lg flex items-center gap-2 ${
                activeTab === "web"
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                  : "bg-gray-800 border border-gray-700 text-gray-300 hover:bg-gray-700 hover:border-gray-600 hover:text-white"
              }`}
            >
              <Globe className="h-6 w-6" />
              {isMobile ? "Web" : "Sites Web"}
            </Button>
            <Button
              onClick={() => setActiveTab("mobile")}
              className={`px-4 py-2 text-sm md:px-8 md:py-4 md:text-lg font-semibold rounded-full transition-all duration-300 shadow-lg flex items-center gap-2 ${
                activeTab === "mobile"
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                  : "bg-gray-800 border border-gray-700 text-gray-300 hover:bg-gray-700 hover:border-gray-600 hover:text-white"
              }`}
            >
              <Smartphone className="h-6 w-6" />
              {isMobile ? "Apps mobile" : "Applications Mobiles"}
            </Button>
          </motion.div>

          <AnimatePresence mode="wait">
            {activeTab === "web" && (
              <motion.div
                key="web-content-wrapper"
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <WebContent />
              </motion.div>
            )}

            {activeTab === "mobile" && (
              <motion.div
                key="mobile-content"
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="mt-12 text-left max-w-3xl mx-auto space-y-6"
              >
                <h3 className="text-3xl font-bold text-white">Applications Mobiles Innovantes pour iOS & Android</h3>
                <p className="text-gray-300 text-lg">
                  Élargissez votre portée et engagez vos utilisateurs avec des applications mobiles intuitives et
                  performantes. Nous gérons l'intégralité du processus, de la conception à la publication sur les
                  stores.
                </p>
                <ul className="list-disc list-inside text-gray-300 text-left space-y-2 pl-4">
                  <li>
                    **Développement Natif & Hybride :** Des applications optimisées pour iOS (Apple App Store) et
                    Android (Google Play Store).
                  </li>
                  <li>
                    **Expérience Utilisateur (UX) Immersive :** Des interfaces fluides et agréables, conçues pour
                    maximiser l'engagement.
                  </li>
                  <li>
                    **Gestion Complète de la Publication :** Nous nous occupons des soumissions, des mises à jour et de
                    la conformité aux directives des stores.
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.section>
    </div>
  )
}
