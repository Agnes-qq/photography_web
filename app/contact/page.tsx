import Link from "next/link"
import { Camera, Mail, Phone, MapPin, Instagram } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <Link href="/" className="flex items-center space-x-2">
              <Camera className="h-8 w-8 text-black" />
              <span className="text-2xl font-light text-black">Lens Studio</span>
            </Link>
            <div className="flex space-x-8">
              <Link href="/about" className="text-black hover:text-gray-600 transition-colors font-light">
                About
              </Link>
              <Link href="/film" className="text-black hover:text-gray-600 transition-colors font-light">
                Film
              </Link>
              <Link href="/digital" className="text-black hover:text-gray-600 transition-colors font-light">
                Digital
              </Link>
              <Link
                href="/contact"
                className="text-black hover:text-gray-600 transition-colors font-light border-b border-black"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Contact Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h1 className="text-5xl md:text-6xl font-normal text-black mb-8 typewriter-heading">Contact</h1>
            <p className="text-gray-700 typewriter-body leading-relaxed mb-12">
              Ready to capture your story? I'd love to hear about your project and discuss how we can create something
              beautiful together.
            </p>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="h-5 w-5 text-black" />
                <span className="text-gray-700 typewriter-body font-bold">mrducty@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-5 w-5 text-black" />
                <span className="text-gray-700 typewriter-body font-bold">+1 (828) 435-0468</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-5 w-5 text-black" />
                <span className="text-gray-700 typewriter-body font-bold">Jersey City, NJ</span>
              </div>
              <a href="https://instagram.com/imlukefrench" target="_blank" rel="noopener noreferrer"className="flex items-center space-x-4">
                <Instagram className="h-5 w-5 text-black" />
                <span className="text-gray-700 typewriter-body font-bold">@imlukefrench</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm typewriter-body font-medium text-black mb-2 tracking-wide"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-black focus:outline-none bg-transparent typewriter-body font-bold"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm typewriter-body font-medium text-black mb-2 tracking-wide"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-black focus:outline-none bg-transparent typewriter-body font-bold"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="project"
                  className="block text-sm typewriter-body font-medium text-black mb-2 tracking-wide"
                >
                  Project Type
                </label>
                <select
                  id="project"
                  name="project"
                  className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-black focus:outline-none bg-transparent typewriter-body font-bold"
                >
                  <option value="">Select a project type</option>
                  <option value="portrait">Portrait Session</option>
                  <option value="event">Event Photography</option>
                  <option value="commercial">Commercial Work</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm typewriter-body font-medium text-black mb-2 tracking-wide"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-black focus:outline-none bg-transparent typewriter-body font-bold resize-none"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-black text-white px-8 py-3 hover:bg-gray-800 transition-colors typewriter-body tracking-wide professional-button"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}
