"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Lightbulb, Palette, Code, Rocket, Handshake } from "lucide-react" // Nouvelles icônes

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
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

export default function WebContent() {
  const approachRef = useRef(null)
  const isApproachInView = useInView(approachRef, { once: true, amount: 0.1 })

  const processRef = useRef(null)
  const isProcessInView = useInView(processRef, { once: true, amount: 0.1 })

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden" // Géré par AnimatePresence dans CreationSection
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }} // Stagger pour les enfants
      className="mt-12 text-left max-w-6xl mx-auto space-y-20" // Augmentation de l'espacement vertical
    >
      <motion.h3 variants={textVariants} className="text-3xl md:text-4xl font-bold text-white text-center">
        Des Solutions Web Sur Mesure pour Votre Succès
      </motion.h3>
      <motion.p variants={textVariants} className="text-gray-300 text-lg text-center max-w-3xl mx-auto">
        De la vitrine élégante à la plateforme complexe, nous concevons des expériences web qui non seulement captivent,
        mais convertissent. Découvrez comment nous donnons vie à vos projets :
      </motion.p>

      {/* Bloc 1: Sites Vitrine & Portfolios */}
      <div className="flex flex-col md:flex-row items-center gap-10 bg-gray-900/50 border border-gray-700/50 rounded-lg shadow-xl backdrop-blur-sm p-8">
        <motion.div variants={imageVariants} className="w-full md:w-1/2 flex-shrink-0">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Site Vitrine Moderne"
            width={600}
            height={400}
            className="rounded-lg shadow-lg object-cover w-full h-auto"
          />
        </motion.div>
        <motion.div variants={textVariants} className="w-full md:w-1/2 space-y-4">
          <h4 className="text-2xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-purple-300">
            Sites Vitrine & Portfolios Épurés
          </h4>
          <p className="text-gray-300 text-base">
            Votre présence en ligne est votre carte de visite. Nous créons des sites vitrine et des portfolios
            personnalisés, conçus pour refléter l'identité de votre marque et captiver vos visiteurs dès le premier
            regard. Chaque pixel est pensé pour une expérience utilisateur fluide et mémorable.
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-1 text-sm">
            <li>Design responsive et adaptatif sur tous les appareils.</li>
            <li>Optimisation de la vitesse de chargement pour une performance maximale.</li>
            <li>Intégration de formulaires de contact et galeries interactives.</li>
          </ul>
        </motion.div>
      </div>

      {/* NEW SECTION: Notre Approche Unique */}
      <motion.div
        ref={approachRef}
        variants={containerVariants}
        initial="hidden"
        animate={isApproachInView ? "visible" : "hidden"}
        className="text-center space-y-12 py-10"
      >
        <motion.h4
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-blue-300"
        >
          Notre Approche Unique
        </motion.h4>
        <motion.p variants={itemVariants} className="text-gray-300 text-lg max-w-3xl mx-auto">
          Comment nous garantissons l'excellence et l'innovation pour chaque projet web.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            variants={itemVariants}
            className="bg-gray-900/50 border border-gray-700/50 p-6 rounded-lg shadow-xl backdrop-blur-sm flex flex-col items-center text-center space-y-4"
          >
            <Palette className="h-12 w-12 text-purple-400" />
            <h5 className="text-xl font-bold text-white">Design Centré Utilisateur</h5>
            <p className="text-gray-300 text-sm">
              Nous concevons des interfaces intuitives et esthétiques qui placent l'utilisateur au cœur de l'expérience.
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="bg-gray-900/50 border border-gray-700/50 p-6 rounded-lg shadow-xl backdrop-blur-sm flex flex-col items-center text-center space-y-4"
          >
            <Code className="h-12 w-12 text-pink-400" />
            <h5 className="text-xl font-bold text-white">Technologies de Pointe</h5>
            <p className="text-gray-300 text-sm">
              Nous utilisons les frameworks et outils les plus modernes pour des solutions robustes et évolutives.
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="bg-gray-900/50 border border-gray-700/50 p-6 rounded-lg shadow-xl backdrop-blur-sm flex flex-col items-center text-center space-y-4"
          >
            <Handshake className="h-12 w-12 text-green-400" />
            <h5 className="text-xl font-bold text-white">Support Continu</h5>
            <p className="text-gray-300 text-sm">
              Notre accompagnement ne s'arrête pas au lancement. Nous assurons maintenance et évolutions.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Bloc 2: Plateformes E-commerce Avancées (Inversé pour l'alternance) */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-10 bg-gray-900/50 border border-gray-700/50 rounded-lg shadow-xl backdrop-blur-sm p-8">
        <motion.div variants={imageVariants} className="w-full md:w-1/2 flex-shrink-0">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Plateforme E-commerce"
            width={600}
            height={400}
            className="rounded-lg shadow-lg object-cover w-full h-auto"
          />
        </motion.div>
        <motion.div variants={textVariants} className="w-full md:w-1/2 space-y-4">
          <h4 className="text-2xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-pink-300">
            Plateformes E-commerce Ultra Haut de Gamme
          </h4>
          <p className="text-gray-300 text-base">
            Propulsez vos ventes avec une boutique en ligne sur mesure, conçue pour la performance et la sécurité. Nous
            développons des solutions e-commerce robustes, intégrant des fonctionnalités avancées pour une gestion
            simplifiée et une expérience d'achat exceptionnelle.
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-1 text-sm">
            <li>Gestion de catalogue produits et stocks.</li>
            <li>Systèmes de paiement sécurisés et multiples options.</li>
            <li>Optimisation du tunnel de conversion et rapports détaillés.</li>
          </ul>
        </motion.div>
      </div>

      {/* NEW SECTION: Le Processus de Création Web */}
      <motion.div
        ref={processRef}
        variants={containerVariants}
        initial="hidden"
        animate={isProcessInView ? "visible" : "hidden"}
        className="text-center space-y-12 py-10"
      >
        <motion.h4
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-purple-300"
        >
          Notre Processus de Création Web
        </motion.h4>
        <motion.p variants={itemVariants} className="text-gray-300 text-lg max-w-3xl mx-auto">
          De l'idée au lancement, une collaboration transparente et efficace pour un résultat qui dépasse vos attentes.
        </motion.p>
        <div className="relative flex flex-col md:flex-row justify-center items-center md:items-start gap-8 pt-8">
          {/* Connecting line for desktop */}
          <div className="absolute hidden md:block top-1/2 left-0 right-0 h-0.5 bg-gray-700 z-0" />

          {/* Step 1: Découverte & Stratégie */}
          <motion.div
            variants={itemVariants}
            className="relative z-10 flex flex-col items-center text-center space-y-3 bg-gray-900/50 border border-gray-700/50 p-6 rounded-lg shadow-xl backdrop-blur-sm w-full md:w-1/4"
          >
            <div className="bg-purple-600 p-3 rounded-full">
              <Lightbulb className="h-8 w-8 text-white" />
            </div>
            <h5 className="text-xl font-bold text-white">1. Découverte & Stratégie</h5>
            <p className="text-gray-300 text-sm">
              Analyse de vos besoins, objectifs et marché pour définir la meilleure approche.
            </p>
          </motion.div>

          {/* Step 2: Conception & UX/UI */}
          <motion.div
            variants={itemVariants}
            className="relative z-10 flex flex-col items-center text-center space-y-3 bg-gray-900/50 border border-gray-700/50 p-6 rounded-lg shadow-xl backdrop-blur-sm w-full md:w-1/4"
          >
            <div className="bg-pink-600 p-3 rounded-full">
              <Palette className="h-8 w-8 text-white" />
            </div>
            <h5 className="text-xl font-bold text-white">2. Conception & UX/UI</h5>
            <p className="text-gray-300 text-sm">
              Création des maquettes, wireframes et design d'interface pour une expérience optimale.
            </p>
          </motion.div>

          {/* Step 3: Développement & Intégration */}
          <motion.div
            variants={itemVariants}
            className="relative z-10 flex flex-col items-center text-center space-y-3 bg-gray-900/50 border border-gray-700/50 p-6 rounded-lg shadow-xl backdrop-blur-sm w-full md:w-1/4"
          >
            <div className="bg-blue-600 p-3 rounded-full">
              <Code className="h-8 w-8 text-white" />
            </div>
            <h5 className="text-xl font-bold text-white">3. Développement & Intégration</h5>
            <p className="text-gray-300 text-sm">
              Codage, intégration des fonctionnalités et tests rigoureux pour un produit robuste.
            </p>
          </motion.div>

          {/* Step 4: Lancement & Suivi */}
          <motion.div
            variants={itemVariants}
            className="relative z-10 flex flex-col items-center text-center space-y-3 bg-gray-900/50 border border-gray-700/50 p-6 rounded-lg shadow-xl backdrop-blur-sm w-full md:w-1/4"
          >
            <div className="bg-green-600 p-3 rounded-full">
              <Rocket className="h-8 w-8 text-white" />
            </div>
            <h5 className="text-xl font-bold text-white">4. Lancement & Suivi</h5>
            <p className="text-gray-300 text-sm">
              Déploiement, optimisation SEO et maintenance continue pour assurer votre succès.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Bloc 3: Applications Web & SaaS */}
      <div className="flex flex-col md:flex-row items-center gap-10 bg-gray-900/50 border border-gray-700/50 rounded-lg shadow-xl backdrop-blur-sm p-8">
        <motion.div variants={imageVariants} className="w-full md:w-1/2 flex-shrink-0">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Application SaaS"
            width={600}
            height={400}
            className="rounded-lg shadow-lg object-cover w-full h-auto"
          />
        </motion.div>
        <motion.div variants={textVariants} className="w-full md:w-1/2 space-y-4">
          <h4 className="text-2xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-blue-300">
            Applications Web & Systèmes SaaS
          </h4>
          <p className="text-gray-300 text-base">
            Transformez vos processus métier avec des applications web personnalisées et des solutions SaaS innovantes.
            Nous concevons des outils puissants, intuitifs et évolutifs, adaptés à vos besoins spécifiques pour
            optimiser votre productivité.
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-1 text-sm">
            <li>Développement backend robuste et sécurisé.</li>
            <li>Intégrations API complexes avec des services tiers.</li>
            <li>Interfaces utilisateur (UI) intuitives et ergonomiques.</li>
          </ul>
        </motion.div>
      </div>

      {/* Bloc 4: Optimisation & Référencement (SEO) */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-10 bg-gray-900/50 border border-gray-700/50 rounded-lg shadow-xl backdrop-blur-sm p-8">
        <motion.div variants={imageVariants} className="w-full md:w-1/2 flex-shrink-0">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="SEO Optimization"
            width={600}
            height={400}
            className="rounded-lg shadow-lg object-cover w-full h-auto"
          />
        </motion.div>
        <motion.div variants={textVariants} className="w-full md:w-1/2 space-y-4">
          <h4 className="text-2xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-green-300">
            Optimisation & Référencement (SEO)
          </h4>
          <p className="text-gray-300 text-base">
            Un site magnifique ne suffit pas s'il n'est pas trouvé. Nous intégrons les meilleures pratiques SEO dès la
            conception pour assurer une visibilité maximale sur les moteurs de recherche et attirer un trafic qualifié.
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-1 text-sm">
            <li>Audit SEO technique et sémantique.</li>
            <li>Optimisation des performances (vitesse de chargement).</li>
            <li>Stratégie de mots-clés et de contenu.</li>
          </ul>
        </motion.div>
      </div>

      <motion.div variants={textVariants} className="text-center pt-8">
        <Link href="#contact">
          <Button className="px-8 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg">
            Discutons de votre projet web
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  )
}
