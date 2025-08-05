"use client";
import Logo from "@/components/Logo";
import { useState, useEffect } from "react";
import Link from "next/link";

// Variable comentada - no se usa actualmente pero se mantiene para uso futuro
// const services = [
//   { name: "UGC Creation", href: "#ugc-creation" },
//   { name: "Content and programming strategy", href: "#content-strategy" },
//   { name: "Video and photo editing", href: "#video-photo" },
//   { name: "Social media planning", href: "#social-media" },
//   { name: "Marketing strategy", href: "#marketing-strategy" },
//   { name: "Community management", href: "#community-management" },
// ];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detectar scroll para cambiar el estilo del navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cerrar el menú móvil cuando se hace scroll o al presionar escape
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('keydown', handleKeyDown);
      // Evitar scroll del body cuando el menú está abierto
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

    return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`liquid-glass-bar fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[90vw] max-w-5xl items-center justify-between px-6 py-0 transition-all duration-300 overflow-visible items-center hidden md:flex
        ${scrolled
          ? 'bg-white/20 backdrop-blur-2xl border border-white/60 rounded-full'
          : 'bg-transparent border-none rounded-none backdrop-blur-0'}
      `}
        style={{ boxShadow: 'none' }}
      >
        <div className="flex items-center gap-2 overflow-visible">
          <Logo />
        </div>
        <ul className="flex-1 flex justify-center gap-8 font-semibold text-gray-800 items-center">
          <li>
            <Link href="/" className="px-2 py-1 focus:outline-none transition border-b-2 border-transparent hover:border-black">Home</Link>
          </li>
          <li>
            <Link href="/aboutus" className="px-2 py-1 focus:outline-none transition border-b-2 border-transparent hover:border-black">About Us</Link>
          </li>
          <li className="relative select-none">
            <Link
              href="/services"
              className="flex items-center gap-1 px-2 py-1 focus:outline-none transition border-b-2 border-transparent hover:border-black"
            >
              Services
            </Link>
          </li>
          <li>
            <Link href="#contact" className="px-2 py-1 focus:outline-none transition border-b-2 border-transparent hover:border-black">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Navbar */}
      <nav
        className={`fixed top-3 left-1/2 transform -translate-x-1/2 z-50 w-[95vw] flex items-center justify-between px-4 py-2 transition-all duration-300 md:hidden
        ${scrolled
          ? 'bg-white/20 backdrop-blur-2xl border border-white/60 rounded-full'
          : 'bg-transparent border-none rounded-none backdrop-blur-0'}
      `}
        style={{ boxShadow: 'none' }}
      >
        <div className="flex items-center gap-2 overflow-visible">
          <Logo />
        </div>
        
        {/* Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex flex-col items-center justify-center w-8 h-8 space-y-1 focus:outline-none"
        >
          <span className={`block w-6 h-0.5 bg-gray-800 transform transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-800 transform transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)}></div>
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-[90vw] bg-white/95 backdrop-blur-xl rounded-2xl border border-white/60 shadow-xl p-6">
            <ul className="flex flex-col space-y-4 font-semibold text-gray-800">
              <li>
                <Link 
                  href="/" 
                  className="block px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/aboutus" 
                  className="block px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/services" 
                  className="block px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  href="#contact" 
                  className="block px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
} 