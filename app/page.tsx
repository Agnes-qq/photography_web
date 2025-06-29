import Link from "next/link"
import { Camera } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <Link href="/" className="flex items-center space-x-2">
              <Camera className="h-8 w-8 text-black" />
              <span className="text-2xl font-bold text-black typewriter-heading tracking-wider">Lens Studio</span>
            </Link>
            <div className="flex space-x-8">
              <Link
                href="/about"
                className="text-black hover:text-gray-600 transition-colors typewriter-body font-bold tracking-wide"
              >
                About
              </Link>
              <Link
                href="/film"
                className="text-black hover:text-gray-600 transition-colors typewriter-body font-bold tracking-wide"
              >
                Film
              </Link>
              <Link
                href="/digital"
                className="text-black hover:text-gray-600 transition-colors typewriter-body font-bold tracking-wide"
              >
                Digital
              </Link>
              <Link
                href="/contact"
                className="text-black hover:text-gray-600 transition-colors typewriter-body font-bold tracking-wide"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-20 text-center">
          <h1 className="text-6xl md:text-8xl font-normal text-black mb-8 typewriter-heading leading-tight">
            Capturing
            <br />
            Moments
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto typewriter-body">
            Professional photography that tells your story through the lens of creativity and passion.
          </p>
          <Link
            href="/film"
            className="inline-block bg-black text-white px-8 py-3 hover:bg-gray-800 transition-colors typewriter-body tracking-wide professional-button"
          >
            View Portfolio
          </Link>
        </div>

        {/* Featured Image */}
        <div className="py-20">
          <div className="aspect-[16/9] bg-gray-100 rounded-lg overflow-hidden">
            <img
              src="/placeholder.svg?height=600&width=1200"
              alt="Featured Photography"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </main>
    </div>
  )
}
