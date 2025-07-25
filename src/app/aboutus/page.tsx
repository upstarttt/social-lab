"use client";
import Image from "next/image";
import Navbar from "../../components/Navbar";

export default function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center overflow-x-hidden">
      <Navbar />
      {/* Elimino el bloque del hero (About Us) y su texto, dejando solo la sección 'Our Team' como inicio de la página. */}
      {/* Team section */}
      <section className="w-full max-w-6xl mx-auto mb-20 px-4 animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mt-32 mb-16 animate-fade-in" style={{ color: '#9D2235', fontFamily: 'Century Gothic, Futura, Arial, sans-serif', letterSpacing: '1px', lineHeight: '1.1', textTransform: 'uppercase' }}>
          Our Team
        </h2>
        <div className="flex flex-col md:flex-row gap-10 justify-center items-center flex-wrap">
          <div className="flex flex-col items-center bg-white rounded-3xl shadow-xl p-8 border border-gray-200 max-w-xs animate-slide-in">
            <Image src="/fotos/camara_caro.jpg" alt="Carolina - Creative Director" width={220} height={220} className="rounded-full object-cover mb-4" />
            <h3 className="text-2xl font-bold mb-2" style={{ color: '#9D2235' }}>Carolina</h3>
            <p className="text-base text-center" style={{ color: '#9D2235' }}>Creative Director. Passionate about ideas that connect brands with people.</p>
          </div>
          <div className="flex flex-col items-center bg-white rounded-3xl shadow-xl p-8 border border-gray-200 max-w-xs animate-slide-in" style={{ animationDelay: '0.1s' }}>
            <Image src="/fotos/vicente.jpg" alt="Vicente - Content Strategist" width={220} height={220} className="rounded-full object-cover mb-4" />
            <h3 className="text-2xl font-bold mb-2" style={{ color: '#9D2235' }}>Vicente</h3>
            <p className="text-base text-center" style={{ color: '#9D2235' }}>Content Strategist. Expert in building creative campaigns and digital storytelling.</p>
          </div>
          <div className="flex flex-col items-center bg-white rounded-3xl shadow-xl p-8 border border-gray-200 max-w-xs animate-slide-in" style={{ animationDelay: '0.2s' }}>
            <Image src="/fotos/mia.jpg" alt="Mia - Visual Designer" width={220} height={220} className="rounded-full object-cover mb-4" />
            <h3 className="text-2xl font-bold mb-2" style={{ color: '#9D2235' }}>Mia</h3>
            <p className="text-base text-center" style={{ color: '#9D2235' }}>Visual Designer. Specialist in photo and video editing for impactful visuals.</p>
          </div>
          <div className="flex flex-col items-center bg-white rounded-3xl shadow-xl p-8 border border-gray-200 max-w-xs animate-slide-in" style={{ animationDelay: '0.3s' }}>
            <Image src="/fotos/anacris.jpg" alt="Ana Cris - Marketing Lead" width={220} height={220} className="rounded-full object-cover mb-4" />
            <h3 className="text-2xl font-bold mb-2" style={{ color: '#9D2235' }}>Ana Cris</h3>
            <p className="text-base text-center" style={{ color: '#9D2235' }}>Marketing Lead. Focused on innovative strategies and measurable results.</p>
          </div>
          <div className="flex flex-col items-center bg-white rounded-3xl shadow-xl p-8 border border-gray-200 max-w-xs animate-slide-in" style={{ animationDelay: '0.4s' }}>
            <Image src="/fotos/sebastian.jpg" alt="Sebastian - Community Manager" width={220} height={220} className="rounded-full object-cover mb-4" />
            <h3 className="text-2xl font-bold mb-2" style={{ color: '#9D2235' }}>Sebastian</h3>
            <p className="text-base text-center" style={{ color: '#9D2235' }}>Community Manager. Builds and nurtures our digital communities every day.</p>
          </div>
        </div>
      </section>
      {/* Mission & Vision section */}
      <section className="w-full max-w-4xl mx-auto mb-20 px-4 animate-fade-in-scale flex flex-col md:flex-row gap-10 justify-center items-stretch">
        <div className="flex-1 bg-white rounded-3xl shadow-xl p-8 border border-gray-200 flex flex-col items-center mb-6 md:mb-0 animate-slide-in">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-6 animate-fade-in" style={{ color: '#9D2235', fontFamily: 'Century Gothic, Futura, Arial, sans-serif', letterSpacing: '1px', textTransform: 'uppercase' }}>
            Mission
          </h2>
          <p className="text-lg text-center" style={{ color: '#9D2235', fontFamily: 'Lato, Arial, sans-serif', lineHeight: '1.7' }}>
            At Social Lab, our mission is to empower brands with authentic, user‑generated content and data‑driven digital strategies that forge real connections and drive measurable growth.
          </p>
        </div>
        <div className="flex-1 bg-white rounded-3xl shadow-xl p-8 border border-gray-200 flex flex-col items-center animate-slide-in" style={{ animationDelay: '0.1s' }}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-6 animate-fade-in" style={{ color: '#9D2235', fontFamily: 'Century Gothic, Futura, Arial, sans-serif', letterSpacing: '1px', textTransform: 'uppercase' }}>
            Vision
          </h2>
          <p className="text-lg text-center" style={{ color: '#9D2235', fontFamily: 'Lato, Arial, sans-serif', lineHeight: '1.7' }}>
            We envision a world where every brand leverages community‑driven storytelling and strategic social media planning to build lasting relationships, lead their industry in engagement, and set new standards of trust.
          </p>
        </div>
      </section>
      {/* Values section */}
      <section className="w-full max-w-4xl mx-auto mb-20 px-4 animate-fade-in-scale">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 animate-fade-in" style={{ color: '#9D2235', fontFamily: 'Century Gothic, Futura, Arial, sans-serif', letterSpacing: '1px', textTransform: 'uppercase' }}>
          Our Values
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <li className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 text-center animate-slide-in">
            <span className="block text-2xl font-bold mb-2" style={{ color: '#9D2235' }}>Creativity</span>
            <span className="block text-base" style={{ color: '#9D2235' }}>We seek fresh ideas and original solutions for every client.</span>
          </li>
          <li className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 text-center animate-slide-in" style={{ animationDelay: '0.2s' }}>
            <span className="block text-2xl font-bold mb-2" style={{ color: '#9D2235' }}>Closeness</span>
            <span className="block text-base" style={{ color: '#9D2235' }}>We get involved and listen to create genuine relationships.</span>
          </li>
          <li className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 text-center animate-slide-in" style={{ animationDelay: '0.4s' }}>
            <span className="block text-2xl font-bold mb-2" style={{ color: '#9D2235' }}>Results</span>
            <span className="block text-base" style={{ color: '#9D2235' }}>We measure and optimize so your brand truly grows.</span>
          </li>
        </ul>
      </section>
    </div>
  );
} 