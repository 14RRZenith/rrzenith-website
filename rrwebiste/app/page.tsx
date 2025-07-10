"use client"

import { Linkedin, Instagram, Facebook } from "lucide-react"
import Link from "next/link"

export default function ConstructionPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0">
        <source src="https://ik.imagekit.io/wedcluhcxe/background.mp4?updatedAt=1752169688793" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>

      <div className="relative z-20 min-h-screen text-white flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 tracking-wide drop-shadow-lg">
            Website Under Construction
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl font-light text-gray-200 max-w-2xl drop-shadow-md">
            We're working hard to bring you a better experience.
          </p>
        </div>

        <div className="flex flex-col items-center px-4 pb-8">
          <p className="text-sm md:text-base text-gray-300 mb-6 text-center drop-shadow-md">
            In the meantime, follow us on LinkedIn, Instagram, and Facebook
          </p>

          <div className="flex space-x-6">
            <Link
              href="https://www.linkedin.com/in/shubham-jadhav-38b943174"
              className="text-gray-300 hover:text-white transition-colors duration-200 drop-shadow-md"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </Link>
            <Link
              href="https://www.instagram.com/rrprime2025"
              className="text-gray-300 hover:text-white transition-colors duration-200 drop-shadow-md"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-white transition-colors duration-200 drop-shadow-md"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </Link>
          </div>
        </div>

        <div className="text-center px-4 pb-6">
          <p className="text-sm md:text-base text-gray-300 drop-shadow-md">connect@rrzenith.in</p>
        </div>

        <footer className="text-center py-4 px-4">
          <p className="text-xs md:text-sm text-gray-400 drop-shadow-md">© 2025 RR Zenith. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}
