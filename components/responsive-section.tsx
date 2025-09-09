"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Smartphone, Tablet, Monitor, Users, TrendingUp, Shield } from "lucide-react"
import Image from "next/image"
import ContactFormModal from "./contact-form-modal"

export default function ResponsiveSection() {
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
    <section ref={ref} className="relative py-20 px-4 md:px-8 lg:px-16 bg-white overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto text-center relative z-10"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="space-y-6 mb-16">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight" style={{ color: "#323D59" }}>
            Une expérience parfaite sur tous les écrans
          </h2>
          <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed" style={{ color: "#323D59" }}>
            Smartphone, tablette, ou ordinateur... Que ce soit un site web ou bien une app mobile, nos créations
            s'adaptent à tous les supports pour offrir la meilleure expérience à vos utilisateurs.
          </p>
        </motion.div>

        {/* Statistics Cards */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-xl mb-4 mx-auto">
              <Smartphone className="h-6 w-6 text-white" />
            </div>
            <div className="text-3xl font-bold mb-2" style={{ color: "#323D59" }}>
              65%
            </div>
            <p className="text-sm font-medium" style={{ color: "#323D59" }}>
              du trafic web provient des mobiles
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
            <div className="flex items-center justify-center w-12 h-12 bg-purple-500 rounded-xl mb-4 mx-auto">
              <Users className="h-6 w-6 text-white" />
            </div>
            <div className="text-3xl font-bold mb-2" style={{ color: "#323D59" }}>
              3x
            </div>
            <p className="text-sm font-medium" style={{ color: "#323D59" }}>
              plus de conversions avec un design adaptatif
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border border-green-200">
            <div className="flex items-center justify-center w-12 h-12 bg-green-500 rounded-xl mb-4 mx-auto">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <div className="text-3xl font-bold mb-2" style={{ color: "#323D59" }}>
              40%
            </div>
            <p className="text-sm font-medium" style={{ color: "#323D59" }}>
              d'amélioration du référencement Google
            </p>
          </div>
        </motion.div>

        {/* Responsive SVG */}
        <motion.div variants={itemVariants} className="relative py-12 mb-16">
          <div className="flex justify-center">
            {/* Desktop version */}
            <Image
              src="/icons/responsive.svg"
              alt="Design responsive sur mobile, tablette et desktop"
              width={1000}
              height={600}
              className="w-full max-w-5xl h-auto hidden md:block"
            />
            {/* Tablet/Mobile version */}
            <Image
              src="/icons/responsive-vertical.svg"
              alt="Design responsive sur mobile, tablette et desktop"
              width={400}
              height={600}
              className="w-auto h-auto block md:hidden"
            />
          </div>
        </motion.div>

        {/* Key Benefits with Icons */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="text-left space-y-6">
            <h3 className="text-2xl font-bold mb-6" style={{ color: "#323D59" }}>
              Pourquoi c'est essentiel pour votre business ?
            </h3>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <Smartphone className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold mb-2" style={{ color: "#323D59" }}>
                  Vos clients sont partout
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: "#323D59", opacity: 0.8 }}>
                  Ils consultent votre site depuis leur canapé sur mobile, comparent vos services sur tablette, ou
                  finalisent leur achat sur ordinateur. Un design adaptatif les accompagne à chaque étape.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <TrendingUp className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <h4 className="font-semibold mb-2" style={{ color: "#323D59" }}>
                  Google privilégie le responsive
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: "#323D59", opacity: 0.8 }}>
                  Depuis 2021, Google classe les sites en priorité selon leur version mobile. Un site non-adaptatif =
                  une visibilité réduite dans les résultats de recherche.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <Shield className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h4 className="font-semibold mb-2" style={{ color: "#323D59" }}>
                  Investissement pérenne
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: "#323D59", opacity: 0.8 }}>
                  Plus besoin de créer plusieurs versions de votre site. Une seule solution qui s'adapte
                  automatiquement, économisant temps et budget sur le long terme.
                </p>
              </div>
            </div>
          </div>

          <div className="text-left space-y-6">
            <h3 className="text-2xl font-bold mb-6" style={{ color: "#323D59" }}>
              Notre approche technique
            </h3>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Monitor className="h-6 w-6" style={{ color: "#323D59" }} />
                <h4 className="font-semibold" style={{ color: "#323D59" }}>
                  Design "Mobile First"
                </h4>
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#323D59", opacity: 0.8 }}>
                Nous concevons d'abord pour mobile, puis adaptons aux écrans plus grands. Cette méthode garantit une
                expérience optimale sur tous les appareils.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                  Chargement rapide
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                  Navigation intuitive
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                  Contenu lisible
                </span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <Tablet className="h-6 w-6" style={{ color: "#323D59" }} />
                <h4 className="font-semibold" style={{ color: "#323D59" }}>
                  Tests sur vrais appareils
                </h4>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "#323D59", opacity: 0.8 }}>
                Nous testons votre site sur une large gamme d'appareils réels pour garantir un fonctionnement parfait,
                pas seulement en simulation.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div variants={itemVariants}>
          <Button
            onClick={() => setIsContactModalOpen(true)}
            size="lg"
            className="px-8 py-7 text-lg font-bold rounded-full bg-gradient-to-r from-[#7740FD] to-[#AB52F1] hover:from-[#6B35E8] hover:to-[#9A47E6] shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 text-white"
          >
            <span className="hidden sm:inline">Découvrez nos designs adaptatifs</span>
            <span className="sm:hidden">Découvrez nos designs</span>
          </Button>
        </motion.div>
      </motion.div>
      {/* Contact Form Modal */}
      <ContactFormModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </section>
  )
}
