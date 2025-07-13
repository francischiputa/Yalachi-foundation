"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Logo } from "./logo"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-black/95 backdrop-blur-sm fixed w-full z-50 border-b border-cyan-400/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <Logo />
            <div>
              <h1 className="text-white font-bold text-xl">YALECHI</h1>
              <p className="text-cyan-400 text-xs tracking-wider">FOUNDATION</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-cyan-400 transition-colors">
              Home
            </a>
            <a href="#about" className="text-white hover:text-cyan-400 transition-colors">
              About
            </a>
            <a href="#programs" className="text-white hover:text-cyan-400 transition-colors">
              Programs
            </a>
            <a href="#impact" className="text-white hover:text-cyan-400 transition-colors">
              Impact
            </a>
            <a href="#contact" className="text-white hover:text-cyan-400 transition-colors">
              Contact
            </a>
            <Button className="bg-red-500 hover:bg-red-600 text-white">Donate Now</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-cyan-400/20">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="#home" className="text-white hover:text-cyan-400 transition-colors">
                Home
              </a>
              <a href="#about" className="text-white hover:text-cyan-400 transition-colors">
                About
              </a>
              <a href="#programs" className="text-white hover:text-cyan-400 transition-colors">
                Programs
              </a>
              <a href="#impact" className="text-white hover:text-cyan-400 transition-colors">
                Impact
              </a>
              <a href="#contact" className="text-white hover:text-cyan-400 transition-colors">
                Contact
              </a>
              <Button className="bg-red-500 hover:bg-red-600 text-white w-full">Donate Now</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
