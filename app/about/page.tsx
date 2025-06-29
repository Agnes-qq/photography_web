import Link from "next/link"
import { Camera } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <Link href="/" className="flex items-center space-x-2">
              <Camera className="h-8 w-8 text-black" />
              <span className="text-2xl font-semibold text-black">Lens Studio</span>
            </Link>
            <div className="flex space-x-8">
              <Link
                href="/about"
                className="text-black hover:text-gray-600 transition-colors font-semibold border-b border-black"
              >
                About
              </Link>
              <Link href="/film" className="text-black hover:text-gray-600 transition-colors font-semibold">
                Film
              </Link>
              <Link href="/digital" className="text-black hover:text-gray-600 transition-colors font-semibold">
                Digital
              </Link>
              <Link href="/contact" className="text-black hover:text-gray-600 transition-colors font-semibold">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* About Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-normal text-black mb-8 typewriter-heading">About</h1>
            <div className="space-y-6 text-gray-700 typewriter-body leading-relaxed">
              <p>
                I'm a passionate photographer with over a decade of experience capturing life's most precious moments.
                My work spans across street photography, intimate portraits, and breathtaking landscapes.
              </p>
              <p>
                Based in the heart of the city, I find inspiration in the everyday moments that others might overlook.
                Whether it's the golden hour light hitting a building facade or the genuine smile of a subject, I
                believe every frame tells a story.
              </p>
              <p>
                My approach is minimalist yet impactful, focusing on composition, light, and emotion to create images
                that resonate long after they're viewed.
              </p>
            </div>
            <div className="mt-12">
              <h3 className="text-xl font-medium text-black mb-4 typewriter-heading">Specialties</h3>
              <ul className="space-y-2 text-gray-700 typewriter-body">
                <li>• Street Photography</li>
                <li>• Portrait Sessions</li>
                <li>• Landscape Photography</li>
                <li>• Event Documentation</li>
              </ul>
            </div>
          </div>
          <div className="aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden">
            <img
              src="/placeholder.svg?height=800&width=640"
              alt="Photographer Portrait"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </main>
    </div>
  )
}
