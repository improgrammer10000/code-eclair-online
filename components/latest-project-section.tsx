"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Play, X, Smartphone, Trophy, MapPin, Zap, Users, Target, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LatestProjectSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

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

  const openVideoModal = () => {
    setIsVideoModalOpen(true)
  }

  const closeVideoModal = () => {
    setIsVideoModalOpen(false)
  }

  return (
    <>
      <section
        ref={ref}
        className="relative py-20 px-4 md:px-8 lg:px-16 text-white overflow-hidden"
        style={{
          backgroundColor: "#020747",
        }}
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
          <div className="absolute bottom-1/3 left-1/12 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-2xl opacity-25" />
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto relative z-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Block - Content with decorative background */}
            <motion.div variants={itemVariants} className="space-y-8 text-center lg:text-left relative">
              {/* Decorative background for the content block */}
              <div className="absolute inset-0 -my-8 -mx-2 md:-mx-4 lg:-mx-8 rounded-3xl bg-gradient-to-br from-white/5 via-purple-500/5 to-pink-500/5 backdrop-blur-sm border border-white/10 opacity-60" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-400/15 to-purple-400/15 rounded-full blur-2xl" />

              <div className="relative z-10">
                {/* Title with gradient background */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-500/10 to-blue-500/10 rounded-2xl blur-xl transform -rotate-1" />
                  <h2 className="relative text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                    <div className="text-white drop-shadow-lg">Notre dernière</div>
                    <div className="text-white drop-shadow-lg">création mise</div>
                    <div className="bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent drop-shadow-lg">
                      en lumière
                    </div>
                  </h2>
                </div>

                {/* Description with subtle background */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-800/20 to-gray-700/20 rounded-xl backdrop-blur-sm border border-white/5" />
                  <p className="relative text-lg md:text-xl text-gray-300 leading-relaxed max-w-lg mx-auto lg:mx-0 p-6">
                    <span className="font-semibold text-white">Vroom</span> - Une application mobile pensée pour les
                    livreurs. Un projet qui a même été présenté à la TV.
                  </p>
                </div>

                {/* Buttons with enhanced background */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-slate-500/10 rounded-2xl blur-lg transform rotate-1" />
                  <div className="relative flex flex-col xl:flex-row gap-4 justify-center lg:justify-start p-4">
                    <Button
                      onClick={openVideoModal}
                      className="px-6 xl:px-8 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-purple-500/25 flex items-center justify-center gap-3 transform hover:scale-105 w-full xl:w-auto"
                    >
                      <Play className="h-5 w-5" />
                      Vu à la TV
                    </Button>

                    <Link
                      href="https://play.google.com/store/apps/details?id=com.vroombroom.android&hl=fr"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="px-6 xl:px-8 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-slate-700 via-slate-600 to-gray-700 hover:from-slate-800 hover:via-slate-700 hover:to-gray-800 transition-all shadow-lg hover:shadow-slate-500/25 flex items-center justify-center gap-3 text-white border border-slate-500/30 transform hover:scale-105 w-full xl:w-auto">
                        <Smartphone className="h-5 w-5" />
                        Télécharger
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Block - SVG with Tablet Overlay */}
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-end">
              <div className="w-full flex justify-center lg:justify-end relative">
                {/* Main SVG */}
                <Image
                  src="/icons/dernierproj.svg"
                  alt="Notre dernière création - Application mobile pour livreurs"
                  width={0}
                  height={0}
                  className="w-auto h-auto max-w-full scale-150"
                  style={{ width: "auto", height: "auto" }}
                  priority
                />

                {/* Tablet Overlay - Bottom Left avec scale uniforme */}
                <div className="absolute bottom-1 left-0 transform translate-x-[-10%] translate-y-[0%] scale-75 md:scale-90">
                  <div className="relative w-auto h-auto">
                    {/* Tablet SVG */}
                    <Image
                      src="/icons/tablette.svg"
                      alt="Tablette avec vidéo de démonstration"
                      width={0}
                      height={0}
                      className="w-auto h-auto"
                      style={{
                        width: "auto",
                        height: "auto",
                      }}
                    />

                    {/* Video inside tablet with margin - Clickable */}
                    <div
                      className="absolute top-[5%] left-[18.5%] w-[58.5%] h-[88%] rounded-[10px] overflow-hidden cursor-pointer group"
                      onClick={openVideoModal}
                    >
                      <iframe
                        src="https://www.youtube.com/embed/G8p0WBgDpwg?autoplay=1&mute=1&loop=1&playlist=G8p0WBgDpwg&controls=0&showinfo=0&rel=0&modestbranding=1"
                        title="Démonstration de l'application"
                        className="w-full h-full rounded-[15px] transition-transform duration-300 group-hover:scale-105 scale-100"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{
                          border: "none",
                          borderRadius: "15px",
                          pointerEvents: "none",
                        }}
                      />

                      {/* Overlay pour indiquer que c'est cliquable */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-[15px] flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-3">
                          <Play className="h-6 w-6 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Success Story Section */}
          <motion.div variants={itemVariants} className="mt-20 text-center">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-2xl" />

              <div className="relative z-10">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <Trophy className="h-8 w-8 text-yellow-400" />
                  <h3 className="text-3xl md:text-4xl font-bold text-white">Une Success Story Télévisée</h3>
                  <Trophy className="h-8 w-8 text-yellow-400" />
                </div>

                <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                  <span className="font-semibold text-white">Thomas PAREDES</span> a défendu Vroom face à 4 concurrents
                  sur un plateau TV et a remporté un financement de{" "}
                  <span className="font-bold text-yellow-400">10 000€</span>. Une validation exceptionnelle de notre
                  expertise en développement mobile.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="h-8 w-8 text-blue-400" />
                    </div>
                    <div className="text-2xl font-bold mb-2 text-white">5 Candidats</div>
                    <p className="text-sm text-gray-400">En compétition sur le plateau</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Award className="h-8 w-8 text-yellow-400" />
                    </div>
                    <div className="text-2xl font-bold mb-2 text-white">10 000€</div>
                    <p className="text-sm text-gray-400">Financement remporté</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Target className="h-8 w-8 text-purple-400" />
                    </div>
                    <div className="text-2xl font-bold mb-2 text-white">1er Prix</div>
                    <p className="text-sm text-gray-400">Projet le plus convaincant</p>
                  </div>
                </div>

                <Link
                  href="https://www.canal32.fr/thematiques/economie/51325/investir-pour-reussir-la-finale-du-04-novembre-2024.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="px-8 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 transition-all shadow-lg hover:shadow-yellow-500/25 text-white">
                    <Play className="h-5 w-5 mr-2" />
                    <span className="hidden sm:inline">Voir la finale complète</span>
                    <span className="sm:hidden">Voir la final</span>
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* App Features Section */}
          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
              Pourquoi Vroom révolutionne la livraison ?
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-blue-400" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">Tri Intelligent</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  L'algorithme optimise automatiquement l'ordre des livraisons pour réduire le temps de trajet et
                  maximiser l'efficacité.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-green-400" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">GPS Intégré</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Navigation fluide d'une adresse à l'autre sans ressaisie. Un clic et le GPS se lance automatiquement
                  vers la prochaine destination.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-purple-400" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">Assistance Complète</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Accompagnement du livreur de A à Z : gestion des tournées, suivi en temps réel, et optimisation
                  continue des performances.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Why This Matters Section */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-purple-500/20">
              <h3 className="text-2xl md:text-3xl font-bold text-center text-white mb-8">
                Ce que cette réussite signifie pour votre projet
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Expertise Validée</h4>
                      <p className="text-gray-300 text-sm">
                        Notre capacité à créer des apps innovantes reconnue par des experts
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Vision Business</h4>
                      <p className="text-gray-300 text-sm">
                        Nous comprenons les enjeux métier et créons des solutions qui génèrent de la valeur
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Innovation Technique</h4>
                      <p className="text-gray-300 text-sm">
                        Algorithmes avancés et UX optimisée pour des résultats concrets
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Succès Mesurable</h4>
                      <p className="text-gray-300 text-sm">
                        Des projets qui se démarquent et obtiennent reconnaissance et financement
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
          <motion.div role="dialog" aria-modal="true" aria-label="Lecture vidéo Vroom"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full h-full max-w-6xl max-h-[90vh] mx-4 bg-gray-900 rounded-none md:rounded-2xl overflow-hidden shadow-2xl flex flex-col"
          >
            {/* Header with close button */}
            <div className="flex items-center justify-between p-3 md:p-4 bg-gray-800 border-b border-gray-700 flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-white font-medium ml-3 text-sm md:text-base">
                  Reportage - Vroom par Thomas PAREDES
                </span>
              </div>
              <button
                onClick={closeVideoModal}
                className="p-2 hover:bg-gray-700 rounded-lg transition-colors duration-200 flex-shrink-0"
              >
                <X className="h-5 w-5 text-gray-400 hover:text-white" />
              </button>
            </div>

            {/* Video container */}
            <div className="relative flex-1 bg-black flex items-center justify-center">
              <div className="relative w-full h-full">
                {/* wrapper responsive */}
                <div className="absolute inset-0">
                  <iframe
                    className="w-full h-full"
                    title="Reportage - Vroom par Thomas PAREDES"
                    src="https://www.youtube.com/embed/G8p0WBgDpwg?autoplay=1&mute=1&playsinline=1&rel=0&modestbranding=1&enablejsapi=1"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </div>
              </div>
            </div>

            {/* Footer info */}
            <div className="p-3 md:p-4 bg-gray-800 text-center flex-shrink-0">
              <p className="text-gray-300 text-xs md:text-sm">
                Vroom - Application mobile pour livreurs - Présentée à la télévision
              </p>
            </div>

            {/* Mobile swipe indicator */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-600 rounded-full md:hidden"></div>
          </motion.div>
        </div>
      )}
    </>
  )
}
