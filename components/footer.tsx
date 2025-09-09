import Image from "next/image"

export default function Footer() {
  return (
    <footer className="py-12 px-4 md:px-8 lg:px-16 bg-gray-900 text-gray-400 text-center">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex flex-col items-center space-y-4">
          <Image src="/logo.svg" alt="Code éclair Logo" width={100} height={58} className="h-16 w-auto" />
          <p className="text-lg">Code éclair - Développement de sites web et d'applications mobiles sur mesure.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="text-center md:text-left">
            <h3 className="text-white font-semibold mb-3">Contact</h3>
            <p className="text-gray-400 text-sm mb-2">📧 contact@code-eclair.fr</p>
            <p className="text-gray-400 text-sm">⏱️ Réponse sous 24h (hors dimanche)</p>
          </div>
          <div className="text-center md:text-right">
            <h3 className="text-white font-semibold mb-3">Notre engagement</h3>
            <p className="text-gray-400 text-sm mb-2">✅ Projets livrés dans les délais</p>
            <p className="text-gray-400 text-sm">🔒 Données sécurisées et confidentielles</p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 mt-8">
          <p className="text-sm">&copy; {new Date().getFullYear()} Code éclair. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
