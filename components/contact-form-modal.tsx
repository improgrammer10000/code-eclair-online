"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { X, Send, CheckCircle, ArrowLeft, Mail, Phone, User, MessageSquare, AlertCircle } from "lucide-react"

interface ContactFormModalProps {
  isOpen: boolean
  onClose: () => void
  initialMessage?: string
}

type FormStep = "form" | "sending" | "success"

// Clé pour le localStorage
const FORM_STORAGE_KEY = "code-eclair-contact-form"

// Algorithmes de validation avancés
const ValidationUtils = {
  // Validation email stricte
  isValidEmail: (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return emailRegex.test(email) && email.includes("@") && email.split("@")[1].includes(".")
  },

  // Validation téléphone français
  isValidFrenchPhone: (phone: string): boolean => {
    // Nettoyer le numéro (enlever espaces, tirets, points, parenthèses)
    const cleanPhone = phone.replace(/[\s\-.$$$$]/g, "")

    // Vérifier le format français (10 chiffres commençant par 0, ou +33 suivi de 9 chiffres)
    const frenchPhoneRegex = /^(?:(?:\+33|0)[1-9](?:[0-9]{8}))$/

    if (!frenchPhoneRegex.test(cleanPhone)) return false

    // Vérifier les patterns suspects
    const suspiciousPatterns = [
      /^0{10}$/, // 0000000000
      /^1{10}$/, // 1111111111
      /^(\d)\1{9}$/, // Même chiffre répété (0000000000, 1111111111, etc.)
      /^0?123456789[0-9]?$/, // 1234567890 ou 01234567890
      /^0?987654321[0-9]?$/, // 9876543210 ou 09876543210
      /^0101010101$/, // 0101010101
      /^0202020202$/, // 0202020202
      /^(\d{2})\1{4}$/, // Patterns répétitifs comme 0101010101
    ]

    return !suspiciousPatterns.some((pattern) => pattern.test(cleanPhone))
  },

  // Validation nom/prénom authentique
  isValidName: (name: string): boolean => {
    const trimmedName = name.trim()

    // Longueur minimum et maximum
    if (trimmedName.length < 2 || trimmedName.length > 50) return false

    // Doit contenir au moins une lettre
    if (!/[a-zA-ZÀ-ÿ]/.test(trimmedName)) return false

    // Patterns suspects à rejeter
    const suspiciousPatterns = [
      /([A-Za-zÀ-ÿ])\1{2,}/, // 3+ mêmes lettres consécutives n'importe où dans le nom
      /^[a-zA-Z]+-[a-zA-Z]+-[a-zA-Z]+/, // Trop de tirets (jhjhj-fdksj-a)
      /^[qwerty]{4,}$/i, // Séquences clavier
      /^[asdf]{4,}$/i, // Séquences clavier
      /^[zxcv]{4,}$/i, // Séquences clavier
      /^test$/i, // "test"
      /^admin$/i, // "admin"
      /^user$/i, // "user"
      /^[0-9]+$/, // Que des chiffres
      /^[^a-zA-ZÀ-ÿ\s\-'.]{2,}/, // Caractères non-alphabétiques suspects
    ]

    if (suspiciousPatterns.some((pattern) => pattern.test(trimmedName))) return false

    // Vérifier la distribution des caractères (éviter les noms trop aléatoires)
    const consonants = (trimmedName.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g) || []).length
    const vowels = (trimmedName.match(/[aeiouAEIOUÀ-ÿ]/g) || []).length
    const totalLetters = consonants + vowels

    // Un nom réaliste doit avoir un équilibre consonnes/voyelles
    if (totalLetters > 0 && (vowels === 0 || consonants === 0)) return false
    if (totalLetters > 4 && vowels / totalLetters < 0.1) return false // Trop peu de voyelles

    return true
  },

  // Messages d'erreur personnalisés
  getErrorMessage: (field: string, value: string): string => {
    switch (field) {
      case "firstName":
      case "lastName":
        if (!value.trim()) return `Le ${field === "firstName" ? "prénom" : "nom"} est requis`
        if (value.trim().length < 2)
          return `Le ${field === "firstName" ? "prénom" : "nom"} doit contenir au moins 2 caractères`
        return `Veuillez saisir un ${field === "firstName" ? "prénom" : "nom"} valide`

      case "email":
        if (!value.trim()) return "L'adresse email est requise"
        if (!value.includes("@")) return "L'adresse email doit contenir un @"
        return "Veuillez saisir une adresse email valide (ex: nom@domaine.fr)"

      case "phone":
        if (!value.trim()) return "Le numéro de téléphone est requis"
        return "Veuillez saisir un numéro de téléphone français valide (ex: 06 12 34 56 78)"

      default:
        return "Ce champ contient une erreur"
    }
  },
}

export default function ContactFormModal({ isOpen, onClose, initialMessage }: ContactFormModalProps) {
  const [step, setStep] = useState<FormStep>("form")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    projectDescription: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  // Charger les données du localStorage au montage du composant
  useEffect(() => {
    const savedData = localStorage.getItem(FORM_STORAGE_KEY)
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData)
        setFormData(parsedData)
      } catch (error) {
        console.error("Erreur lors du chargement des données sauvegardées:", error)
      }
    }

    // Si un message initial est fourni et qu'il n'y a pas de description sauvegardée
    if (initialMessage && !formData.projectDescription) {
      setFormData((prev) => ({ ...prev, projectDescription: initialMessage }))
    }
  }, [initialMessage])

  // Sauvegarder les données dans le localStorage à chaque modification
  useEffect(() => {
    localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(formData))
  }, [formData])

  // Gérer la fermeture avec Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      // Empêcher le scroll du body quand le modal est ouvert
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const validateField = (field: string, value: string): string => {
    switch (field) {
      case "firstName":
      case "lastName":
        if (!ValidationUtils.isValidName(value)) {
          return ValidationUtils.getErrorMessage(field, value)
        }
        break

      case "email":
        if (!ValidationUtils.isValidEmail(value)) {
          return ValidationUtils.getErrorMessage(field, value)
        }
        break

      case "phone":
        if (!ValidationUtils.isValidFrenchPhone(value)) {
          return ValidationUtils.getErrorMessage(field, value)
        }
        break
    }
    return ""
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    // Valider chaque champ requis
    const requiredFields = ["firstName", "lastName", "email", "phone"]

    requiredFields.forEach((field) => {
      const value = formData[field as keyof typeof formData]
      const error = validateField(field, value)
      if (error) {
        newErrors[field] = error
      }
    })

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Marquer tous les champs comme touchés
    setTouched({
      firstName: true,
      lastName: true,
      email: true,
      phone: true,
      projectDescription: true,
    })

    if (!validateForm()) {
      // Scroll vers la première erreur
      const firstErrorField = Object.keys(errors)[0]
      if (firstErrorField) {
        const element = document.getElementById(firstErrorField)
        element?.scrollIntoView({ behavior: "smooth", block: "center" })
        element?.focus()
      }
      return
    }

    setStep("sending")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setTimeout(() => {
          setStep("success")
          // Effacer les données sauvegardées après envoi réussi
          localStorage.removeItem(FORM_STORAGE_KEY)
        }, 2000) // Simule l'envoi pendant 2 secondes
      } else {
        throw new Error("Erreur lors de l'envoi")
      }
    } catch (error) {
      console.error("Erreur:", error)
      // En cas d'erreur, on revient au formulaire
      setStep("form")
      // Ici on pourrait afficher un message d'erreur
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))

    // Validation en temps réel si le champ a été touché
    if (touched[field]) {
      const error = validateField(field, value)
      setErrors((prev) => ({ ...prev, [field]: error }))
    }
  }

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }))
    const value = formData[field as keyof typeof formData]
    const error = validateField(field, value)
    setErrors((prev) => ({ ...prev, [field]: error }))
  }

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      projectDescription: initialMessage || "",
    })
    setErrors({})
    setTouched({})
    setStep("form")
    // Effacer aussi les données sauvegardées
    localStorage.removeItem(FORM_STORAGE_KEY)
  }

  const handleClose = () => {
    // Ne pas réinitialiser le formulaire, juste fermer
    setStep("form") // Revenir à l'étape du formulaire
    onClose()
  }

  // Gérer le clic sur le backdrop
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }

  // Composant pour afficher les erreurs de manière élégante
  const ErrorMessage = ({ error }: { error: string }) => (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="flex items-center gap-2 text-red-400 text-sm mt-1 bg-red-500/10 px-3 py-2 rounded-lg border border-red-500/20"
    >
      <AlertCircle className="h-4 w-4 flex-shrink-0" />
      <span>{error}</span>
    </motion.div>
  )

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-2xl border border-gray-700/50"
            onClick={(e) => e.stopPropagation()} // Empêcher la fermeture quand on clique sur le modal
          >
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-30 pointer-events-none">
              <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
              <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
            </div>

            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-20 p-2 hover:bg-gray-700/50 rounded-lg transition-colors duration-200 group"
              aria-label="Fermer"
            >
              <X className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
            </button>

            <div className="relative z-10 p-8">
              <AnimatePresence mode="wait">
                {step === "form" && (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Header */}
                    <div className="text-center mb-8">
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Parlons de votre projet</h2>
                      <p className="text-gray-300 text-lg">
                        Remplissez ce formulaire et nous vous recontacterons sous 24h (hors dimanche) pour discuter de
                        vos besoins.
                      </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Nom et Prénom */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName" className="text-white flex items-center gap-2">
                            <User className="h-4 w-4" />
                            Prénom *
                          </Label>
                          <Input
                            id="firstName"
                            type="text"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange("firstName", e.target.value)}
                            onBlur={() => handleBlur("firstName")}
                            className={`bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500/20 transition-all duration-200 ${
                              errors.firstName ? "border-red-500/50 focus:border-red-500" : ""
                            }`}
                            placeholder="Votre prénom"
                          />
                          <AnimatePresence>
                            {errors.firstName && <ErrorMessage error={errors.firstName} />}
                          </AnimatePresence>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName" className="text-white flex items-center gap-2">
                            <User className="h-4 w-4" />
                            Nom *
                          </Label>
                          <Input
                            id="lastName"
                            type="text"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange("lastName", e.target.value)}
                            onBlur={() => handleBlur("lastName")}
                            className={`bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500/20 transition-all duration-200 ${
                              errors.lastName ? "border-red-500/50 focus:border-red-500" : ""
                            }`}
                            placeholder="Votre nom"
                          />
                          <AnimatePresence>
                            {errors.lastName && <ErrorMessage error={errors.lastName} />}
                          </AnimatePresence>
                        </div>
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-white flex items-center gap-2">
                          <Mail className="h-4 w-4" />
                          Email *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          onBlur={() => handleBlur("email")}
                          className={`bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500/20 transition-all duration-200 ${
                            errors.email ? "border-red-500/50 focus:border-red-500" : ""
                          }`}
                          placeholder="votre.email@exemple.com"
                        />
                        <AnimatePresence>{errors.email && <ErrorMessage error={errors.email} />}</AnimatePresence>
                      </div>

                      {/* Téléphone */}
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-white flex items-center gap-2">
                          <Phone className="h-4 w-4" />
                          Téléphone *
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          onBlur={() => handleBlur("phone")}
                          className={`bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500/20 transition-all duration-200 ${
                            errors.phone ? "border-red-500/50 focus:border-red-500" : ""
                          }`}
                          placeholder="06 12 34 56 78"
                        />
                        <AnimatePresence>{errors.phone && <ErrorMessage error={errors.phone} />}</AnimatePresence>
                      </div>

                      {/* Description du projet */}
                      <div className="space-y-2">
                        <Label htmlFor="projectDescription" className="text-white flex items-center gap-2">
                          <MessageSquare className="h-4 w-4" />
                          Description du projet (facultatif)
                        </Label>
                        <Textarea
                          id="projectDescription"
                          value={formData.projectDescription}
                          onChange={(e) => handleInputChange("projectDescription", e.target.value)}
                          className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500/20 transition-all duration-200 min-h-[100px] resize-none"
                          placeholder="Décrivez brièvement votre projet, vos besoins, vos objectifs..."
                        />
                      </div>

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        className="w-full py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-purple-500/25 transform hover:scale-[1.02] flex items-center justify-center gap-3"
                      >
                        <Send className="h-5 w-5" />
                        Envoyer ma demande
                      </Button>
                    </form>

                    {/* Footer info */}
                    <div className="mt-6 text-center">
                      <p className="text-gray-400 text-sm">
                        * Champs obligatoires - Vos données sont protégées et ne seront jamais partagées
                      </p>
                    </div>
                  </motion.div>
                )}

                {step === "sending" && (
                  <motion.div
                    key="sending"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="text-center py-16"
                  >
                    <div className="mb-8">
                      <div className="w-16 h-16 mx-auto mb-6 relative">
                        <div className="absolute inset-0 rounded-full border-4 border-purple-200/20"></div>
                        <div className="absolute inset-0 rounded-full border-4 border-purple-500 border-t-transparent animate-spin"></div>
                        <Send className="absolute inset-0 m-auto h-6 w-6 text-purple-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">Envoi en cours...</h3>
                      <p className="text-gray-300">
                        Nous traitons votre demande, veuillez patienter quelques instants.
                      </p>
                    </div>
                  </motion.div>
                )}

                {step === "success" && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="text-center py-16"
                  >
                    <div className="mb-8">
                      <div className="w-16 h-16 mx-auto mb-6 bg-green-500/20 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-8 w-8 text-green-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">Message envoyé avec succès !</h3>
                      <p className="text-gray-300 mb-6">
                        Merci pour votre confiance. Nous avons bien reçu votre demande et nous vous recontacterons sous
                        24h (hors dimanche) pour discuter de votre projet.
                      </p>
                      <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl p-6 border border-green-500/20 mb-8">
                        <p className="text-green-300 text-sm">
                          📧 Un email de confirmation a été envoyé à <strong>{formData.email}</strong>
                        </p>
                      </div>
                    </div>

                    <Button
                      onClick={handleClose}
                      className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg flex items-center gap-3 mx-auto"
                    >
                      <ArrowLeft className="h-5 w-5" />
                      Retour à la page principale
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
