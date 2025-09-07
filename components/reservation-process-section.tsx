"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Clock, Shield, MessageCircle, CheckCircle, Star, Users } from "lucide-react"
import Image from "next/image"

export default function ReservationProcessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

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
        background: "radial-gradient(ellipse at center, #2D1054 0%, #140D28 70%)",
      }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto text-center relative z-10"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="space-y-6 mb-16">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            <div className="text-white">Un processus de réservation</div>
            <div className="bg-gradient-to-r from-[#EDB1FD] to-[#CB80FE] bg-clip-text text-transparent">
              simple et rapide
            </div>
          </h2>
          <p className="text-lg md:text-xl text-white max-w-4xl mx-auto leading-relaxed">
            De l'idée à la mise en ligne, tout est fluide et transparent
          </p>
        </motion.div>

        {/* Process SVG - Responsive */}
        <motion.div variants={itemVariants} className="relative mb-20">
          <div className="flex justify-center">
            {/* Desktop version */}
            <Image
              src="/icons/etapes.svg"
              alt="Processus de réservation simple et rapide"
              width={1200}
              height={800}
              className="w-full h-auto hidden md:block"
            />
            {/* Tablet/Mobile version */}
            <Image
              src="/icons/etapes-vertical.svg"
              alt="Processus de réservation simple et rapide"
              width={400}
              height={600}
              className="w-auto h-auto block md:hidden"
            />
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-xl mb-4 mx-auto">
              <Clock className="h-6 w-6 text-green-400" />
            </div>
            <div className="text-2xl font-bold mb-2 text-white">24h</div>
            <p className="text-sm text-gray-300">Délai moyen de première réponse à votre demande</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="flex items-center justify-center w-12 h-12 bg-purple-500/20 rounded-xl mb-4 mx-auto">
              <Users className="h-6 w-6 text-purple-400" />
            </div>
            <div className="text-2xl font-bold mb-2 text-white">150+</div>
            <p className="text-sm text-gray-300">Projets livrés avec ce processus optimisé</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="flex items-center justify-center w-12 h-12 bg-pink-500/20 rounded-xl mb-4 mx-auto">
              <Star className="h-6 w-6 text-pink-400" />
            </div>
            <div className="text-2xl font-bold mb-2 text-white">4.9/5</div>
            <p className="text-sm text-gray-300">Note moyenne de satisfaction client</p>
          </div>
        </motion.div>

        {/* Detailed Benefits */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="text-left space-y-8">
            <h3 className="text-3xl font-bold text-white mb-6">Pourquoi nos clients choisissent ce processus</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <MessageCircle className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-white text-lg">Communication transparente</h4>
                  <p className="text-sm leading-relaxed text-gray-300">
                    Vous savez toujours où en est votre projet. Pas de zone d'ombre, pas de surprise. Chaque étape est
                    documentée et vous recevez des mises à jour régulières avec des visuels concrets.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Shield className="h-5 w-5 text-green-400" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-white text-lg">Engagement de résultat</h4>
                  <p className="text-sm leading-relaxed text-gray-300">
                    Nous nous engageons sur les délais et la qualité. Si quelque chose ne va pas, nous le corrigeons
                    sans frais supplémentaires. Votre satisfaction est notre priorité absolue.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-white text-lg">Validation à chaque étape</h4>
                  <p className="text-sm leading-relaxed text-gray-300">
                    Rien n'avance sans votre accord. Vous validez les maquettes, les fonctionnalités, et les contenus
                    avant qu'on passe à l'étape suivante. Zéro mauvaise surprise.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white mb-6 text-left">Ce qui fait la différence</h3>

            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h4 className="text-xl font-bold text-white mb-4">📋 Cahier des charges collaboratif</h4>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Contrairement aux agences qui imposent leur vision, nous construisons ensemble votre cahier des charges.
                Vous gardez le contrôle sur votre projet, nous apportons notre expertise technique.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">Vos besoins d'abord</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">
                  Notre expertise ensuite
                </span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-pink-500/20">
              <h4 className="text-xl font-bold text-white mb-4">⚡ Réactivité garantie</h4>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Vos questions ne restent jamais sans réponse plus de 24h (hors week-ends). Nous savons que votre temps
                est précieux et que l'attente génère du stress.
              </p>
              <div className="text-xs text-pink-300 font-medium">
                💡 Astuce : Nos clients les plus satisfaits sont ceux qui posent le plus de questions !
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20">
              <h4 className="text-xl font-bold text-white mb-4">🎯 Accompagnement post-lancement</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Le lancement n'est que le début. Nous restons disponibles pour les ajustements, les questions
                techniques, et l'évolution de votre projet. Pas d'abandon après livraison.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          variants={itemVariants}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">Ce que disent nos clients sur ce processus</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-left">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-300">Sarah M. - E-commerce</span>
              </div>
              <p className="text-gray-300 text-sm italic leading-relaxed">
                "Enfin une équipe qui tient ses promesses ! Chaque étape était claire, les délais respectés, et surtout
                : zéro stress. Je recommande vivement ce processus."
              </p>
            </div>
            <div className="text-left">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-300">Marc L. - Startup</span>
              </div>
              <p className="text-gray-300 text-sm italic leading-relaxed">
                "La transparence totale sur l'avancement, les coûts, et les délais. Exactement ce qu'il faut quand on
                lance son business et qu'on a besoin de certitudes."
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
