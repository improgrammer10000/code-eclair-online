import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-12 px-4 md:px-8 lg:px-16 bg-gray-900 text-gray-400 text-center">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex flex-col items-center space-y-4">
          <Image src="/logo.svg" alt="Code éclair Logo" width={100} height={58} className="h-16 w-auto" />
          <p className="text-lg">Code éclair - Votre partenaire pour des expériences web exceptionnelles.</p>
        </div>
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium">
          <Link href="#" className="hover:text-white transition-colors">
            Accueil
          </Link>
          <Link href="#services" className="hover:text-white transition-colors">
            Services
          </Link>
          <Link href="#projets" className="hover:text-white transition-colors">
            Projets
          </Link>
          <Link href="#pourquoi-nous" className="hover:text-white transition-colors">
            Pourquoi nous choisir
          </Link>
          <Link href="#contact" className="hover:text-white transition-colors">
            Contact
          </Link>
        </nav>
        <div className="border-t border-gray-700 pt-8 mt-8">
          <p className="text-sm">&copy; {new Date().getFullYear()} Code éclair. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
