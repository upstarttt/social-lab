"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "UGC Creation",
    desc: "We create authentic User Generated Content that builds trust and strengthens the connection between your brand and its audience.",
    icon: "/fotos/ugc-creation.png",
  },
  {
    title: "Content and Programming Strategy",
    desc: "We design content and publishing strategies that align with your business goals and maximize engagement across platforms.",
    icon: "/fotos/content-and-program-strategy.png",
  },
  {
    title: "Video and Photo Editing",
    desc: "We professionally edit videos and photos to highlight your brand with a creative and impactful visual style.",
    icon: "/fotos/video-and-photo.png",
  },
  {
    title: "Social Media Planning",
    desc: "We plan your social media presence with strategic, on-brand content that speaks directly to your target audience.",
    icon: "/fotos/social-media-planning.png",
  },
  {
    title: "Marketing Strategy",
    desc: "We develop tailored marketing strategies to drive growth, boost visibility, and increase conversions.",
    icon: "/fotos/marketing-strategy.png",
  },
  {
    title: "Community Management",
    desc: "We manage your digital communities to build strong relationships, foster engagement, and enhance brand perception.",
    icon: "/fotos/community-management.png",
  },
];

export default function Services() {
  return (
    <div
      className="min-h-screen w-full flex flex-col items-center pb-24 relative overflow-x-hidden"
      style={{
        backgroundImage: "url('/fondo-services.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat',
      }}
    >
      {/* Overlay blanco semitransparente para legibilidad */}
      <div className="absolute inset-0 bg-white/80 z-0 pointer-events-none" />

      {/* Header con imagen y transición SVG */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative w-full flex flex-col items-center justify-center pt-24 mb-0 z-10"
      >
        <div className="relative w-full max-w-5xl flex flex-col items-center">
          <Image
            src="/services-inicio.png"
            alt="How can we help you?"
            width={700}
            height={200}
            className="w-full max-w-xl h-auto rounded-3xl shadow-2xl border-4 border-white z-10 animate-fade-in"
            priority
          />
        </div>
        {/* SVG transición decorativa */}
        <div className="w-full overflow-hidden -mb-2">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-12">
            <path fill="#fff" fillOpacity="1" d="M0,0 C480,60 960,0 1440,60 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </motion.div>

      {/* Detalle gráfico sutil */}
      <div className="absolute left-0 top-0 w-32 h-32 bg-pink-100 rounded-full blur-2xl opacity-40 z-0" style={{top: '10%', left: '-4rem'}} />
      <div className="absolute right-0 bottom-0 w-40 h-40 bg-blue-100 rounded-full blur-2xl opacity-40 z-0" style={{bottom: '10%', right: '-5rem'}} />

      {/* Tarjetas de servicios con animación escalonada */}
      <motion.div
        className="relative w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 px-4 mt-10 z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.07,
            },
          },
        }}
      >
        {services.map((service) => (
          <motion.div
            key={service.title}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.02, boxShadow: '0 2px 12px 0 rgba(255,1,1,0.10)' }}
            className="bg-[#f5f5f5] rounded-2xl shadow-xl border border-gray-100 p-10 flex items-center hover:shadow-lg transition-all duration-200 group animate-fade-in relative max-w-2xl w-full mx-auto min-h-[320px] overflow-visible"
          >
            {/* Imagen sobresaliendo mucho del borde izquierdo */}
            {/* <div className="hidden md:block absolute -left-32 top-1/2 -translate-y-1/2 z-10">
              <Image
                src={service.icon}
                alt={service.title}
                width={320}
                height={320}
                className="object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div> */}
            {/* Imagen arriba en móvil */}
            {/* <div className="block md:hidden flex-shrink-0 w-full flex justify-center mb-6">
              <Image
                src={service.icon}
                alt={service.title}
                width={180}
                height={180}
                className="object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div> */}
            {/* Cuadradito para el texto */}
            <div className="flex-1 md:ml-8 flex flex-col items-center justify-center h-full w-full">
                <h2 className="text-3xl font-bold text-[#ff0101] mb-4 animate-slide-in-up text-center" style={{ fontFamily: `'Arial Rounded MT Bold', 'Century Gothic', 'Trebuchet MS', 'Arial', 'Verdana', sans-serif`, letterSpacing: '1.5px' }}>{service.title}</h2>
                <p className="text-gray-700 text-xl animate-fade-in text-center font-sans leading-relaxed">{service.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA final - elemento normal sin sticky */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative mt-20 max-w-2xl w-full bg-white rounded-3xl shadow-lg p-8 md:p-10 text-center border border-gray-200 mx-auto mb-12"
        style={{boxShadow: '0 8px 32px 0 rgba(255,1,1,0.10)'}}
      >
        <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 animate-slide-in-up font-sans">
          Let’s bring your brand to life.
        </h3>
        <p className="text-lg mb-8" style={{ color: '#ff0101', fontFamily: 'Lato, Arial, sans-serif', lineHeight: '1.7' }}>
          Whether you&apos;re starting from scratch or looking to scale, we’re here to help you create meaningful content, grow your community, and drive real results. Ready to elevate your digital presence?
        </p>
        <motion.a
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.97 }}
          href="mailto:hello@sociallab.com"
          className="inline-block bg-[#ff0101] text-white px-10 py-4 rounded-full text-lg font-bold shadow-lg hover:bg-[#b30000] hover:scale-105 transition-all duration-300 cursor-pointer select-none animate-fade-in"
        >
          Contact Us
        </motion.a>
      </motion.div>
    </div>
  );
} 