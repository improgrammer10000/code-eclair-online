"use client"

import HeroSection from "@/components/hero-section"
import ChatbotIntegrationSection from "@/components/chatbot-integration-section" // Import du nouveau composant
import CompleteSolutionSection from "@/components/complete-solution-section" // Import du nouveau composant
import ResponsiveSection from "@/components/responsive-section" // Import du nouveau composant
import ReservationProcessSection from "@/components/reservation-process-section" // Import du nouveau composant
import LatestProjectSection from "@/components/latest-project-section" // Import du nouveau composant
import Footer from "@/components/footer"
import FloatingCtaButton from "@/components/floating-cta-button"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef } from "react"

export default function HomePage() {
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: false, amount: 0.5 })

  return (
    <motion.div
      initial={{ backgroundPosition: "0% 0%" }}
      animate={{ backgroundPosition: "100% 100%" }}
      transition={{
        duration: 30,
        ease: "linear",
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      }}
      className="relative min-h-screen overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1f1f1f, #3a1f3a, #1f1f1f, #3a1f3a)",
        backgroundSize: "200% 200%",
      }}
    >
      {/* Subtle animated detail layer (noise/grain) */}
      <motion.div
        initial={{ backgroundPosition: "0% 0%" }}
        animate={{ backgroundPosition: "100% 100%" }}
        transition={{
          duration: 60,
          ease: "linear",
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
        }}
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("/placeholder.svg?height=100&width=100")`,
          backgroundSize: "100px 100px",
        }}
      />

      <div className="relative z-10">
        <main>
          <HeroSection ref={heroRef} />
          {/*
          <div id="creation">
            <CreationSection />
          </div>
          <div id="services">
            <ServicesSection />
          </div>
          <div id="projets">
            <ProjectsSection />
          </div>
          <div id="pourquoi-nous">
            <WhyChooseUsSection />
          </div>
          <div id="custom-element">
            <CustomElementSection />
          </div> */}

          <div id="complete-solution">
            <CompleteSolutionSection />
          </div>
          <div id="responsive">
            <ResponsiveSection />
          </div>
          <div id="reservation-process">
            <ReservationProcessSection />
          </div>
          <div id="chatbot">
            <ChatbotIntegrationSection />
          </div>
          <div id="latest-project">
            <LatestProjectSection />
          </div>
        </main>
        <div id="contact">
          <Footer />
        </div>
      </div>

      <AnimatePresence>{!isHeroInView && <FloatingCtaButton />}</AnimatePresence>
    </motion.div>
  )
}
