"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import ContactFormModal from "./contact-form-modal"
import { useState } from "react"

export default function FloatingCtaButton() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{
          opacity: 1,
          y: 0,
          scale: [1, 1.02, 1], // Animation de pulsation subtile
        }}
        exit={{ opacity: 0, y: 100 }}
        transition={{
          opacity: { duration: 0.3, ease: "easeOut" },
          y: { duration: 0.3, ease: "easeOut" },
          scale: {
            duration: 1.5, // Durée de la pulsation
            repeat: Number.POSITIVE_INFINITY, // Répéter à l'infini
            ease: "easeInOut", // Douceur de l'animation
          },
        }}
        className="fixed bottom-6 right-6 z-50" // Positionnement fixe en bas à droite
      >
        <motion.div
          whileHover={{ scale: 1.05 }} // Agrandit légèrement au survol
          whileTap={{ scale: 0.95 }} // Réduit légèrement au clic
          className="inline-block" // Nécessaire pour que whileHover/whileTap fonctionnent sur le Link/Button
        >
          <Button
            onClick={() => setIsContactModalOpen(true)}
            className="px-6 py-4 text-base font-semibold rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg text-white"
          >
            Lancer mon projet
          </Button>
        </motion.div>
      </motion.div>

      {/* Modal en dehors du motion.div pour éviter les problèmes de contexte */}
      <ContactFormModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </>
  )
}
