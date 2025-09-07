"use client"

import { Lightbulb, ShieldCheck, Users } from "lucide-react"
import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "react-intersection-observer"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
}

export default function WhyChooseUsSection() {
  const ref = useRef(null)
  const { isInView } = useInView(ref)

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
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Pourquoi Choisir la Bonne Entreprise ?</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            La sélection de votre partenaire de développement web est cruciale pour le succès de votre projet. Voici
            pourquoi Code éclair se distingue :
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              className="bg-gray-800 border-gray-700 p-8 rounded-lg shadow-xl space-y-4"
            >
              <Lightbulb className="h-10 w-10 text-yellow-400 mx-auto" />
              <h3 className="text-xl font-bold">Expertise et Innovation</h3>
              <p className="text-gray-300">
                Nous maîtrisons les dernières technologies et tendances pour vous offrir des solutions à la pointe de
                l'innovation.
              </p>
            </motion.div>
            <motion.div
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              className="bg-gray-800 border-gray-700 p-8 rounded-lg shadow-xl space-y-4"
            >
              <ShieldCheck className="h-10 w-10 text-green-400 mx-auto" />
              <h3 className="text-xl font-bold">Qualité et Fiabilité</h3>
              <p className="text-gray-300">
                Chaque ligne de code est écrite avec rigueur, garantissant des produits robustes, sécurisés et
                performants.
              </p>
            </motion.div>
            <motion.div
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              className="bg-gray-800 border-gray-700 p-8 rounded-lg shadow-xl space-y-4"
            >
              <Users className="h-10 w-10 text-blue-400 mx-auto" />
              <h3 className="text-xl font-bold">Approche Collaborative</h3>
              <p className="text-gray-300">
                Nous travaillons en étroite collaboration avec vous, de l'idée à la livraison, pour un résultat qui
                dépasse vos attentes.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
