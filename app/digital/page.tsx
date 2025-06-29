"use client"

import Link from "next/link"
import { Camera } from "lucide-react"
import { useState } from "react"

const digitalPhotos = [
  {
    id: 1,
    category: "street",
    src: "/placeholder.svg?height=400&width=400",
    alt: "Digital Street Photography 1",
  },
  {
    id: 2,
    category: "portrait",
    src: "/placeholder.svg?height=400&width=400",
    alt: "Digital Portrait 1",
  },
  {
    id: 3,
    category: "landscape",
    src: "/placeholder.svg?height=400&width=400",
    alt: "Digital Landscape 1",
  },
  {
    id: 4,
    category: "street",
    src: "/placeholder.svg?height=400&width=400",
    alt: "Digital Street Photography 2",
  },
  {
    id: 5,
    category: "portrait",
    src: "/placeholder.svg?height=400&width=400",
    alt: "Digital Portrait 2",
  },
  {
    id: 6,
    category: "landscape",
    src: "/placeholder.svg?height=400&width=400",
    alt: "Digital Landscape 2",
  },
  {
    id: 7,
    category: "street",
    src: "/placeholder.svg?height=400&width=400",
    alt: "Digital Street Photography 3",
  },
  {
    id: 8,
    category: "portrait",
    src: "/placeholder.svg?height=400&width=400",
    alt: "Digital Portrait 3",
  },
  {
    id: 9,
    category: "landscape",
    src: "/placeholder.svg?height=400&width=400",
    alt: "Digital Landscape 3",
  },
  {
    id: 10,
    category: "street",
    src: "/placeholder.svg?height=400&width=400",
    alt: "Digital Street Photography 4",
  },
]

export default function DigitalPage() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredPhotos =
    activeFilter === "all" ? digitalPhotos : digitalPhotos.filter((photo) => photo.category === activeFilter)

  const filters = [
    { key: "all", label: "ALL" },
    { key: "street", label: "STREET" },
    { key: "portrait", label: "PORTRAITS" },
    { key: "landscape", label: "LANDSCAPE" },
  ]

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
              <Link
                href="/digital"
                className="text-black hover:text-gray-600 transition-colors font-light border-b border-black"
              >
                Digital
              </Link>
              <Link href="/contact" className="text-black hover:text-gray-600 transition-colors font-light">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Digital Gallery Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-normal text-black mb-4 typewriter-heading">Digital Photography</h1>
          <p className="text-gray-600 typewriter-body mb-8">
            Captured with modern digital precision and contemporary techniques
          </p>

          {/* Filter Buttons */}
          <div className="flex justify-center space-x-6 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`typewriter-body tracking-wide transition-colors border px-6 py-2 ${
                  activeFilter === filter.key
                    ? "text-white bg-black border-black"
                    : "text-black border-gray-300 hover:border-black hover:bg-gray-50"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              className="aspect-square bg-gray-100 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <img src={photo.src || "/placeholder.svg"} alt={photo.alt} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        {filteredPhotos.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 typewriter-body tracking-wide">
              No digital photographs found for this category.
            </p>
          </div>
        )}
      </main>
    </div>
  )
}
