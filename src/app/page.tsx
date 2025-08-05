"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

// Variables comentadas - no se usan actualmente pero se mantendrán para uso futuro
// const services = [
//   {
//     name: "UGC Creation",
//     desc: "Authentic user-generated content to boost your brand&apos;s credibility and engagement.",
//     icon: "/fotos/ugc.jpg",
//   },
//   {
//     name: "Content and Programming Strategy",
//     desc: "Data-driven strategies to maximize your content&apos;s impact across all platforms.",
//     icon: "/fotos/strategy.jpg",
//   },
//   {
//     name: "Video and Photo Editing",
//     desc: "Professional editing for stunning visuals that capture your audience.",
//     icon: "/fotos/editing.jpg",
//   },
//   {
//     name: "Social Media Planning",
//     desc: "Comprehensive planning to grow your online presence and community.",
//     icon: "/fotos/social.jpg",
//   },
//   {
//     name: "Marketing Strategy",
//     desc: "Innovative marketing solutions tailored to your business goals.",
//     icon: "/fotos/marketing.jpg",
//   },
//   {
//     name: "Community Management",
//     desc: "Building and nurturing loyal communities around your brand.",
//     icon: "/fotos/community.jpg",
//   },
// ];

// const portfolio = [
//   {
//     title: "Brand Refresh for TechCo",
//     desc: "Revamped branding and digital presence for a leading tech startup.",
//     image: "/fotos/portfolio1.jpg",
//   },
//   {
//     title: "Viral UGC Campaign",
//     desc: "Generated over 1M impressions with a creative UGC campaign.",
//     image: "/fotos/portfolio2.jpg",
//   },
//   {
//     title: "Social Growth for Retailer",
//     desc: "Doubled social media followers in 6 months for a retail client.",
//     image: "/fotos/portfolio3.jpg",
//   },
// ];

const typewriterTexts = ["we create", "you grow"];

export default function Home() {
  const [showHero] = useState(true);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  // Nuevo estado para el efecto typing de 'WELCOME TO'
  const [welcomeText, setWelcomeText] = useState("");
  const welcomeFullText = "WELCOME TO";
  const [welcomeTyping, setWelcomeTyping] = useState(true);

  // Efecto typing para 'WELCOME TO'
  useEffect(() => {
    if (welcomeTyping && welcomeText.length < welcomeFullText.length) {
      const timeout = setTimeout(() => {
        setWelcomeText(welcomeFullText.slice(0, welcomeText.length + 1));
      }, 160);
      return () => clearTimeout(timeout);
    } else if (welcomeText.length === welcomeFullText.length) {
      setWelcomeTyping(false);
    }
  }, [welcomeText, welcomeTyping]);

  useEffect(() => {
    if (!showHero) {
      const currentFullText = typewriterTexts[currentTextIndex];
      
      if (isTyping && currentText.length < currentFullText.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentFullText.slice(0, currentText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else if (isTyping && currentText.length === currentFullText.length) {
        const timeout = setTimeout(() => {
          setIsTyping(false);
          setIsDeleting(true);
        }, 2000);
        return () => clearTimeout(timeout);
      } else if (isDeleting && currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, currentText.length - 1));
        }, 50);
        return () => clearTimeout(timeout);
      } else if (isDeleting && currentText.length === 0) {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % typewriterTexts.length);
        setIsTyping(true);
      }
    }
  }, [showHero, currentText, currentTextIndex, isTyping, isDeleting]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center overflow-x-hidden">
      {/* Hero estilo rebranding sin efecto cristal */}
      <div
        className="relative w-full h-screen flex items-center justify-start"
        style={{
          backgroundImage: "url('/sombrillas-inicio.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* DESKTOP HERO - COMPLETAMENTE LOCKEADO */}
        <div className="hidden md:flex absolute top-8 left-1/2 -translate-x-1/2 flex-col items-center w-full z-20 animate-hero-fade-in mt-24">
          <span className="text-white tracking-[0.5em] text-4xl font-bold mb-1" style={{ letterSpacing: '0.5em' }}>
            {welcomeText}
            {welcomeTyping && <span className="animate-blink">|</span>}
          </span>
          <Image src="/mi-logo.png" alt="Logo Social Lab" width={512} height={512} className="w-[32rem] h-auto drop-shadow-xl -mt-40" priority />
        </div>
        
        {/* MOBILE HERO - OPTIMIZADO PARA MÓVIL */}
        <div className="block md:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center w-full z-20 animate-hero-fade-in px-4">
          <span className="text-white tracking-[0.2em] text-lg font-bold mb-4 text-center" style={{ letterSpacing: '0.2em' }}>
            {welcomeText}
            {welcomeTyping && <span className="animate-blink">|</span>}
          </span>
          <Image src="/mi-logo.png" alt="Logo Social Lab" width={512} height={512} className="w-60 h-auto drop-shadow-xl" priority />
        </div>
        {/* Fin texto hero animado */}
      </div>
      {/* Aquí termina el hero, no hay más secciones debajo */}

      {/* Nueva sección de servicios con bloques */}
      <section className="w-full max-w-6xl mx-auto mb-20 px-4 animate-fade-in">
        <h2 className="text-4xl md:text-7xl font-extrabold text-center mt-16 md:mt-32 mb-16 md:mb-32 animate-fade-in px-4" style={{ fontFamily: 'Century Gothic, Futura, Arial, sans-serif', letterSpacing: '1px', lineHeight: '1.1', textTransform: 'uppercase' }}>
          WE CREATE. <span style={{ color: '#9D2235' }}>YOU GROW.</span>
        </h2>
        {/* Block 1 — Core Services */}
        <div className="mb-16 flex flex-col lg:flex-row rounded-3xl overflow-hidden shadow-xl border border-gray-200 animate-slide-in" style={{ background: '#FFF7E6', minHeight: '400px', animationDelay: '0.2s' }}>
          {/* Imagen mitad izquierda */}
          <div className="relative w-full lg:w-1/2 h-72 lg:h-auto">
            <Image 
              src="/fotos/periodico_social-club.jpg" 
              alt="UGC Creation & Marketing Strategy" 
              fill 
              priority
              className="object-cover object-center w-full h-full" 
              style={{ minHeight: '100%' }}
              onError={(e) => {
                console.error('Error loading image:', e);
              }}
            />
          </div>
          {/* Contenido mitad derecha */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 md:p-14" style={{ background: '#9D2235' }}>
            <span className="uppercase tracking-widest text-sm mb-2" style={{ color: '#fff', fontFamily: 'Lato, Arial, sans-serif', letterSpacing: '0.15em' }}>Core Services</span>
            <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#fff', fontFamily: 'Montserrat, Arial, sans-serif' }}>UGC Creation + Marketing Strategy</h3>
            <p className="text-lg mb-2" style={{ color: '#fff', fontFamily: 'Lato, Arial, sans-serif', lineHeight: '1.7' }}>
              We craft content people actually want to share.
            </p>
            <p className="text-lg mb-8" style={{ color: '#fff', fontFamily: 'Lato, Arial, sans-serif', lineHeight: '1.7' }}>
              From concept to execution, we design marketing strategies that resonate with your ideal audience and turn views into conversions.
            </p>
            <button className="px-8 py-3 rounded-lg border border-[#5B3A1B] text-[#5B3A1B] bg-white font-semibold text-lg hover:bg-[#f3e7d3] transition-all duration-200 shadow-sm" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
              View all services
            </button>
          </div>
        </div>
        {/* Block 2 — Creative Editing & Community Management */}
        <div className="mb-16 flex flex-col lg:flex-row-reverse rounded-3xl overflow-hidden shadow-xl border border-gray-200 animate-slide-in" style={{ background: '#FFF7E6', minHeight: '400px', animationDelay: '0.4s' }}>
          {/* Imagen mitad derecha */}
          <div className="relative w-full lg:w-1/2 h-72 lg:h-auto">
            <Image 
              src="/fotos/camara_caro.jpg" 
              alt="Creative Editing & Community Management" 
              fill 
              priority
              className="object-cover object-center w-full h-full" 
              style={{ minHeight: '100%' }}
              onError={(e) => {
                console.error('Error loading image:', e);
              }}
            />
          </div>
          {/* Contenido mitad izquierda */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 md:p-14" style={{ background: '#fff' }}>
            <span className="uppercase tracking-widest text-sm mb-2" style={{ color: '#9D2235', fontFamily: 'Lato, Arial, sans-serif', letterSpacing: '0.15em' }}>Creative Editing & Community Management</span>
            <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#9D2235', fontFamily: 'Montserrat, Arial, sans-serif' }}>Give your brand a voice and a look that stands out</h3>
            <p className="text-lg mb-2" style={{ color: '#9D2235', fontFamily: 'Lato, Arial, sans-serif', lineHeight: '1.7' }}>
              We professionally edit videos and photos that look as good as they feel.
            </p>
            <p className="text-lg mb-8" style={{ color: '#9D2235', fontFamily: 'Lato, Arial, sans-serif', lineHeight: '1.7' }}>
              Plus, we manage your community with intention—responding, listening, and building digital relationships every day.
            </p>
            <button className="px-8 py-3 rounded-lg border border-[#9D2235] text-white bg-[#9D2235] font-semibold text-lg hover:bg-[#7a1929] transition-all duration-200 shadow-sm" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
              Book a free consultation
            </button>
          </div>
        </div>
        {/* Block 3 — Social Media Planning */}
        <div className="mb-16 flex flex-col lg:flex-row rounded-3xl overflow-hidden shadow-xl border border-gray-200 animate-slide-in" style={{ background: '#FFF7E6', minHeight: '400px', animationDelay: '0.6s' }}>
          {/* Imagen mitad izquierda */}
          <div className="relative w-full lg:w-1/2 h-72 lg:h-auto">
            <Image 
              src="/fotos/todos_juntos.jpg" 
              alt="Social Media Planning" 
              fill 
              priority
              className="object-cover object-center w-full h-full" 
              style={{ minHeight: '100%' }}
              onError={(e) => {
                console.error('Error loading image:', e);
              }}
            />
          </div>
          {/* Contenido mitad derecha */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 md:p-14" style={{ background: '#9D2235' }}>
            <span className="uppercase tracking-widest text-sm mb-2" style={{ color: '#fff', fontFamily: 'Lato, Arial, sans-serif', letterSpacing: '0.15em' }}>Social Media Planning</span>
            <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#fff', fontFamily: 'Montserrat, Arial, sans-serif' }}>A digital presence designed for growth</h3>
            <p className="text-lg mb-2" style={{ color: '#fff', fontFamily: 'Lato, Arial, sans-serif', lineHeight: '1.7' }}>
              We don’t just post—we build a content plan that speaks your audience’s language and turns followers into loyal fans.
            </p>
            <button className="px-8 py-3 rounded-lg border border-[#5B3A1B] text-[#5B3A1B] bg-white font-semibold text-lg hover:bg-[#f3e7d3] transition-all duration-200 shadow-sm" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
              Book a free consultation
            </button>
          </div>
        </div>
      </section>

      {/* Contact / Call to Action */}
      <section id="contact" className="w-full max-w-3xl mx-auto mb-20 px-4 animate-fade-in-scale">
        <div className="bg-white/90 rounded-2xl shadow-lg p-8 md:p-12 border border-gray-200 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#9D2235' }}>Let&apos;s Work Together</h2>
          <p className="text-lg mb-6" style={{ color: '#9D2235' }}>Ready to take your brand to the next level? Contact us today and let&apos;s create something amazing together.</p>
          <button 
            onClick={() => {
              window.location.href = 'mailto:hello@sociallab.com';
            }}
            className="inline-block bg-[#9D2235] text-white px-10 py-4 rounded-full text-lg font-bold shadow-lg hover:bg-[#7a1929] hover:scale-105 transition-all duration-300 cursor-pointer select-none"
          >
            Contact Us
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full text-center text-gray-500 py-8 text-sm animate-fade-in">
        &copy; 2024 Social Lab. All rights reserved.
      </footer>
    </div>
  );
}
