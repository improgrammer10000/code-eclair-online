const express = require("express")
const cors = require("cors")
const nodemailer = require("nodemailer")

const app = express()
const PORT = 3002 // Port différent car 3000 et 3001 sont pris

// Configuration
const expediteur_mail = "contact@code-eclair.fr"
const destinataire_mail = "contact@code-eclair.fr"

app.use(express.json())
app.use(
  cors({
    origin: ["http://localhost:3000", "https://code-eclair.fr", "https://www.code-eclair.fr"],
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
)

// Configuration Hostinger SMTP
const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com", // SMTP Hostinger
  port: 587,
  secure: false, // true pour 465, false pour autres ports
  auth: {
    user: "contact@code-eclair.fr",
    pass: "9?uM0^y?L@p", // À remplacer par le vrai mot de passe
  },
})

// Fonction d'envoi d'email
async function envoyerMail(destinataire, sujet, texte, html) {
  const info = await transporter.sendMail({
    from: `"Code éclair - Nouveau contact" <${expediteur_mail}>`,
    to: destinataire,
    subject: sujet,
    text: texte,
    html: html,
  })
  return info
}

// Endpoint POST pour le formulaire de contact
app.post("/api/contact", async (req, res) => {
  const { firstName, lastName, email, phone, projectDescription } = req.body

  // Validation des champs obligatoires
  if (!firstName || !lastName || !email || !phone) {
    return res.status(400).json({
      success: false,
      error: "Tous les champs obligatoires doivent être remplis",
    })
  }

  const date_actuel = new Date()
  const date_actuel_string = date_actuel.toLocaleString("fr-FR")

  try {
    // Construction du contenu de l'email
    const sujet = `Nouveau contact depuis le site - ${firstName} ${lastName}`

    const texte = `
            Nouveau contact reçu depuis le site Code éclair :
            
            Date : ${date_actuel_string}
            Nom : ${lastName}
            Prénom : ${firstName}
            Email : ${email}
            Téléphone : ${phone}
            
            Description du projet :
            ${projectDescription || "Aucune description fournie"}
            
            ---
            Ceci est un message automatique généré par le site Code éclair.
        `

    const html = `
            <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: auto; background: linear-gradient(135deg, #1f1f1f 0%, #2a1f3a 50%, #1f1f1f 100%); padding: 0; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.3);">
                
                <!-- Header avec gradient -->
                <div style="background: linear-gradient(135deg, #7c3aed 0%, #ec4899 100%); padding: 32px 24px; text-align: center;">
                    <h1 style="color: white; font-weight: 700; margin: 0; font-size: 28px; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">
                        ⚡ Nouveau Contact
                    </h1>
                    <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0 0; font-size: 16px;">
                        Demande reçue depuis le site Code éclair
                    </p>
                </div>

                <!-- Contenu principal -->
                <div style="padding: 32px 24px; background: white;">
                    
                    <!-- Informations du contact -->
                    <div style="background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); border-radius: 12px; padding: 24px; margin-bottom: 24px; border-left: 4px solid #7c3aed;">
                        <h2 style="color: #1e293b; font-size: 20px; font-weight: 600; margin: 0 0 16px 0; display: flex; align-items: center;">
                            👤 Informations du contact
                        </h2>
                        <div style="display: grid; gap: 12px;">
                            <div style="display: flex; align-items: center; gap: 12px;">
                                <span style="background: #7c3aed; color: white; padding: 6px 8px; border-radius: 6px; font-size: 12px; font-weight: 600; min-width: 80px; text-align: center;">NOM</span>
                                <span style="color: #334155; font-weight: 600; font-size: 16px;">${lastName}</span>
                            </div>
                            <div style="display: flex; align-items: center; gap: 12px;">
                                <span style="background: #ec4899; color: white; padding: 6px 8px; border-radius: 6px; font-size: 12px; font-weight: 600; min-width: 80px; text-align: center;">PRÉNOM</span>
                                <span style="color: #334155; font-weight: 600; font-size: 16px;">${firstName}</span>
                            </div>
                            <div style="display: flex; align-items: center; gap: 12px;">
                                <span style="background: #06b6d4; color: white; padding: 6px 8px; border-radius: 6px; font-size: 12px; font-weight: 600; min-width: 80px; text-align: center;">EMAIL</span>
                                <a href="mailto:${email}" style="color: #0ea5e9; text-decoration: none; font-weight: 500; font-size: 16px;">${email}</a>
                            </div>
                            <div style="display: flex; align-items: center; gap: 12px;">
                                <span style="background: #10b981; color: white; padding: 6px 8px; border-radius: 6px; font-size: 12px; font-weight: 600; min-width: 80px; text-align: center;">TÉLÉPHONE</span>
                                <a href="tel:${phone}" style="color: #059669; text-decoration: none; font-weight: 500; font-size: 16px;">${phone}</a>
                            </div>
                        </div>
                    </div>

                    <!-- Description du projet -->
                    ${
                      projectDescription
                        ? `
                    <div style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border-radius: 12px; padding: 24px; margin-bottom: 24px; border-left: 4px solid #f59e0b;">
                        <h2 style="color: #92400e; font-size: 20px; font-weight: 600; margin: 0 0 16px 0; display: flex; align-items: center;">
                            💡 Description du projet
                        </h2>
                        <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #fbbf24;">
                            <p style="color: #374151; line-height: 1.6; margin: 0; font-size: 15px; white-space: pre-wrap;">${projectDescription}</p>
                        </div>
                    </div>
                    `
                        : `
                    <div style="background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%); border-radius: 12px; padding: 20px; margin-bottom: 24px; text-align: center;">
                        <p style="color: #6b7280; font-style: italic; margin: 0; font-size: 14px;">
                            Aucune description de projet fournie
                        </p>
                    </div>
                    `
                    }

                    <!-- Informations de suivi -->
                    <div style="background: linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%); border-radius: 12px; padding: 20px; border-left: 4px solid #8b5cf6;">
                        <h3 style="color: #5b21b6; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
                            📅 Informations de suivi
                        </h3>
                        <p style="color: #6d28d9; margin: 0; font-size: 14px;">
                            <strong>Date de réception :</strong> ${date_actuel_string}
                        </p>
                        <p style="color: #6d28d9; margin: 8px 0 0 0; font-size: 14px;">
                            <strong>Action recommandée :</strong> Répondre sous 24h pour maintenir notre engagement qualité
                        </p>
                    </div>
                </div>

                <!-- Footer -->
                <div style="background: linear-gradient(135deg, #374151 0%, #1f2937 100%); padding: 24px; text-align: center;">
                    <p style="color: #d1d5db; margin: 0 0 8px 0; font-size: 14px;">
                        Message automatique généré par <strong style="color: white;">Code éclair</strong>
                    </p>
                    <p style="color: #9ca3af; margin: 0; font-size: 12px;">
                        Développement web et mobile sur mesure
                    </p>
                </div>
            </div>
        `

    // Envoi de l'email
    await envoyerMail(destinataire_mail, sujet, texte, html)

    // Envoi d'un email de confirmation au visiteur (best-effort)
    try {
      const confirmationSujet = "Nous avons bien reçu votre demande – Code éclair"
      const confirmationTexte = `Bonjour ${firstName || ''} ${lastName || ''},\n\nMerci pour votre message. Nous revenons vers vous sous 24h (hors dimanche).\n\n— Code éclair`

      const confirmationHtml = `
      <div style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto;background:linear-gradient(135deg,#1f1f1f,#2a1f3a);padding:32px 16px">
        <div style="max-width:560px;margin:auto;background:#0f1220;border:1px solid rgba(255,255,255,.06);border-radius:16px;overflow:hidden">
          <div style="padding:28px 24px;text-align:center;background:linear-gradient(135deg,#7740FD,#AB52F1)">
            <div style="font-size:18px;color:#fff;font-weight:800;margin:0">Code éclair</div>
            <div style="font-size:13px;color:#f8f8ff;opacity:.9;margin-top:4px">Web & mobile sur mesure</div>
          </div>
          <div style="padding:24px 22px;color:#e5e7eb">
            <h1 style="margin:0 0 8px;font-size:20px;font-weight:800;color:#ffffff">Votre demande a bien été reçue</h1>
            <p style="margin:0 0 14px;line-height:1.6;color:#cbd5e1">Merci pour votre confiance${'${firstName ? `, ' + '${firstName}' + '`: ""}'} . Nous revenons vers vous sous <strong style=\"color:#fff\">24h</strong> (hors dimanche).</p>
            <p style="margin:0;color:#94a3b8;font-size:14px">Si besoin d’ajout d’informations, répondez directement à cet e-mail.</p>
          </div>
          <div style="padding:16px 22px;background:#0b0f1e;color:#94a3b8;text-align:center;font-size:12px">
            © ${new Date().getFullYear()} Code éclair — contact@code-eclair.fr
          </div>
        </div>
      </div>`

      await transporter.sendMail({
        from: `Code éclair <${expediteur_mail}>`,
        to: email,
        subject: confirmationSujet,
        text: confirmationTexte,
        html: confirmationHtml,
      })
    } catch (e) {
      console.error("Erreur envoi confirmation au visiteur:", e)
      // ne bloque pas la réponse au client
    }

    console.log(`Nouveau contact reçu à ${date_actuel_string} de ${firstName} ${lastName} (${email})`)

    res.status(200).json({
      success: true,
      message: "Message envoyé avec succès",
    })
  } catch (error) {
    console.error("Erreur lors de l'envoi:", error)
    res.status(500).json({
      success: false,
      error: "Erreur lors de l'envoi du message",
    })
  }
})

// Test GET pour vérifier que l'API fonctionne
app.get("/", (req, res) => {
  res.json({
    status: "OK",
    service: "Code éclair Contact API",
    timestamp: new Date().toISOString(),
  })
})

// Démarrage du serveur
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Serveur Code éclair Contact API lancé sur le port ${PORT}`)
  console.log(`📧 Emails envoyés vers: ${destinataire_mail}`)
  console.log(`🌐 CORS configuré pour les domaines Code éclair`)
})
