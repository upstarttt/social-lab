"use client";
import Logo from "@/components/Logo";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const services = [
  { name: "UGC Creation", href: "#ugc-creation" },
  { name: "Content and programming strategy", href: "#content-strategy" },
  { name: "Video and photo editing", href: "#video-photo" },
  { name: "Social media planning", href: "#social-media" },
  { name: "Marketing strategy", href: "#marketing-strategy" },
  { name: "Community management", href: "#community-management" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Detectar scroll para cambiar el estilo del navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cerrar el submenú si se hace clic fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <nav
      className={`liquid-glass-bar fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[90vw] max-w-5xl flex items-center justify-between px-6 py-0 transition-all duration-300 overflow-visible items-center
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
  );
} 