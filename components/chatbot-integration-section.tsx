"use client"

import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot, MessageSquare, ShieldCheck, TrendingUp, Plug, Layers } from "lucide-react"

export default function ChatbotIntegrationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.12 })

  const container = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.15 } },
  }
  const item = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
  }

  return (
    <section
      id="chatbot"
      className="relative text-white py-20 px-4 md:px-8 lg:px-16 overflow-hidden"
      style={{
        background: "linear-gradient(to bottom right, #1f1f1f, #29206B, #1f1f1f)",
      }}
    >
      {/* Background accents */}
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(800px 400px at 85% 20%, rgba(124,58,237,0.18), rgba(17,17,17,0.0) 60%), radial-gradient(900px 500px at 10% 85%, rgba(236,72,153,0.16), rgba(17,17,17,0.0) 60%)",
        }}
      />
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 max-w-6xl mx-auto"
      >
        <motion.h2
          variants={item}
          className="text-4xl md:text-5xl font-extrabold tracking-tight text-center bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-purple-300 leading-tight pb-2"
        >
          Intégration de Chatbot sur votre site
        </motion.h2>
        <motion.p variants={item} className="mt-6 text-center text-lg md:text-xl text-gray-300 leading-relaxed">
          Vous avez déjà un site ? L'une de nos forces est d'y ajouter des fonctionnalités sans tout refondre. Avez-vous
          pensé à intégrer un chatbot ? Par exemple, nous avons intégré des centaines de chatbots à des projets
          existants pour capter plus de leads, automatiser le support et qualifier les demandes 24/7.
        </motion.p>

        {/* Content row */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Copy + benefits */}
          <motion.div variants={item} className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-2xl md:text-3xl font-bold">
                Ajoutez des fonctionnalités à votre site existant (ex. chatbot)
              </h3>
              <p className="text-gray-300">
                Au-delà de la refonte complète, nous enrichissons votre site existant avec des fonctionnalités ciblées.{" "}
                Le chatbot est un exemple concret : il répond 24/7, qualifie les prospects, allège le support, et
                transmet les demandes directement à votre équipe.
              </p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <li className="flex items-start gap-3">
                <div className="mt-1 rounded-md bg-purple-600/20 p-2 border border-purple-600/40">
                  <MessageSquare className="h-5 w-5 text-purple-300" />
                </div>
                <div>
                  <p className="font-semibold">Réponses immédiates 24/7</p>
                  <p className="text-sm text-gray-400">
                    Améliore l&apos;expérience client et capture les opportunités en dehors des horaires.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 rounded-md bg-pink-600/20 p-2 border border-pink-600/40">
                  <TrendingUp className="h-5 w-5 text-pink-300" />
                </div>
                <div>
                  <p className="font-semibold">Plus de conversions</p>
                  <p className="text-sm text-gray-400">
                    Qualification des leads et accompagnement pendant le parcours.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 rounded-md bg-purple-600/20 p-2 border border-purple-600/40">
                  <ShieldCheck className="h-5 w-5 text-purple-300" />
                </div>
                <div>
                  <p className="font-semibold">Fiable et sécurisé</p>
                  <p className="text-sm text-gray-400">
                    Respect de la confidentialité, règles d&apos;escalade et supervision humaine.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 rounded-md bg-pink-600/20 p-2 border border-pink-600/40">
                  <Bot className="h-5 w-5 text-pink-300" />
                </div>
                <div>
                  <p className="font-semibold">Personnalisé à votre marque</p>
                  <p className="text-sm text-gray-400">Ton, scénarios et intégrations adaptés à vos besoins.</p>
                </div>
              </li>
            </ul>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg">
                Discuter de l’intégration
              </Button>
               {/* 
               
               <Button
                variant="secondary"
                className="rounded-full bg-gray-800 border border-gray-700 text-gray-200 hover:bg-gray-700"
              >
                Voir des exemples
              </Button> 
                */}
              
            </div>
          </motion.div>

          {/* Highlight image */}
          <motion.div variants={item} className="relative w-full">
            <div className="rounded-2xl border border-gray-700/60 bg-gray-900/60 shadow-2xl backdrop-blur-md p-3">
              <div className="rounded-xl bg-gradient-to-br from-purple-600/25 to-pink-600/20 p-4">
                <Image
                  src="/images/chatbot.svg"
                  alt="Exemple d’intégration de chatbot sur un site"
                  width={900}
                  height={640}
                  className="w-full h-auto rounded-md"
                  priority
                />
              </div>
            </div>
            {/* Glow */}
            <div className="pointer-events-none absolute -inset-6 rounded-[24px] blur-2xl opacity-30 bg-gradient-to-r from-purple-600 to-pink-600" />
          </motion.div>
        </div>

        {/* Two clear paths */}
        <motion.div variants={item} className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gray-900/50 border border-gray-700/60 backdrop-blur-sm hover:bg-gray-900/70 transition">
            <CardHeader className="flex flex-row items-center gap-3">
              <div className="rounded-md bg-purple-600/20 p-2 border border-purple-600/40">
                <Plug className="h-5 w-5 text-purple-300" />
              </div>
              <CardTitle className="text-xl text-white">J’ai déjà un site</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-3">
              <p>
                Votre site est en ligne — nous y ajoutons des fonctionnalités sans tout casser. Par exemple, un chatbot
                s'intègre proprement à votre design et à vos outils existants, pour des gains rapides et mesurables.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                <li>Intégration légère via script ou composant</li>
                <li>Connexion à vos formulaires et CRM</li>
                <li>Personnalisation du design et du ton</li>
                <li>
                  Autres intégrations possibles : analytics, formulaires avancés, recherche, paiement, prise de
                  rendez-vous
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border border-gray-700/60 backdrop-blur-sm hover:bg-gray-900/70 transition">
            <CardHeader className="flex flex-row items-center gap-3">
              <div className="rounded-md bg-pink-600/20 p-2 border border-pink-600/40">
                <Layers className="h-5 w-5 text-pink-300" />
              </div>
              <CardTitle className="text-xl text-white">Je pars de zéro (A → Z)</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-3">
              <p>
                Vous partez de zéro ? Nous concevons et développons votre site de A à Z, en pensant le chatbot comme une
                brique native du parcours pour maximiser la conversion et le support.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                <li>Stratégie, UX/UI, développement et déploiement</li>
                <li>Chatbot pensé pour la conversion et le support</li>
                <li>Mesures, A/B testing et évolution continue</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA footer */}
        <motion.div variants={item} className="mt-8 text-center">
          <Button className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg">
            Parler de mon projet
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
