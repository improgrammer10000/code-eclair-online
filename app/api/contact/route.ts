import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, projectDescription } = body

    // Validation basique
    if (!firstName || !lastName || !email || !phone) {
      return NextResponse.json({ error: "Tous les champs obligatoires doivent être remplis" }, { status: 400 })
    }

    // Appel vers le backend Node.js
    const backendResponse = await fetch("http://localhost:3002/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        phone,
        projectDescription,
      }),
    })

    const result = await backendResponse.json()

    if (backendResponse.ok) {
      return NextResponse.json({
        success: true,
        message: "Message envoyé avec succès",
      })
    } else {
      throw new Error(result.error || "Erreur backend")
    }
  } catch (error) {
    console.error("Erreur lors de l'envoi:", error)
    return NextResponse.json({ error: "Erreur lors de l'envoi du message" }, { status: 500 })
  }
}
