"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white text-black shadow-md z-50 fixed top-0 left-0">
      <nav className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-xl font-bold tracking-wide">
          Nathan Ferdowski
        </Link>

        {/* Right Side: Navigation Links (Desktop) */}
        <div className="hidden sm:flex space-x-6">
          <Link href="/about" className="hover:text-gray-300">About</Link>
          <Link href="/work" className="hover:text-gray-300">Work</Link>
          <Link href="/portfolio" className="hover:text-gray-300">Portfolio</Link>
          <Link href="/contact" className="hover:text-gray-300">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden p-2 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden bg-gray-800 p-4 flex flex-col items-center space-y-4">
          <Link href="/about" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/experience" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Experience</Link>
          <Link href="/projects" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link href="/contact" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
}
