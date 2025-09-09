import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, projectDescription } = body

    // Validation basique
    if (!firstName || !lastName || !email || !phone) {
      return NextResponse.json({ error: "Tous les champs obligatoires doivent être remplis" }, { status: 400 })
    }

    // Ici vous pouvez utiliser un service d'email comme:
    // - Resend (recommandé)
    // - SendGrid
    // - Nodemailer avec SMTP
    // - Etc.

    // Exemple avec un service d'email fictif:
    const emailContent = `
      Nouvelle demande de contact depuis le site Code éclair:
      
      Nom: ${firstName} ${lastName}
      Email: ${email}
      Téléphone: ${phone}
      
      Description du projet:
      ${projectDescription || "Aucune description fournie"}
      
      ---
      Envoyé depuis le formulaire de contact du site
    `

    // TODO: Remplacer par votre service d'email réel
    console.log("Email à envoyer à contact@code-eclair.fr:", emailContent)

    // Simulation d'envoi d'email
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json({
      success: true,
      message: "Message envoyé avec succès",
    })
  } catch (error) {
    console.error("Erreur lors de l'envoi:", error)
    return NextResponse.json({ error: "Erreur lors de l'envoi du message" }, { status: 500 })
  }
}
