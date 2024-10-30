import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Layers, Scissors, CircleDot, CheckCircle2, Users, Clock, Calendar } from 'lucide-react';

// Counter Component (unchanged)
const Counter = ({ end, duration, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime = null;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = (currentTime - startTime) / (duration * 1000);

        if (progress < 1) {
          setCount(Math.min(Math.floor(end * progress), end));
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [end, duration, isInView]);

  return <span ref={ref}>{count}{suffix}</span>;
};

// Updated Service Card Component with new design
const ServiceCard = ({ title, description, image, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
    >
      <div className="aspect-[4/5] relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Floating content that appears on hover */}
        <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
            <p className="text-white/90 text-sm leading-relaxed mb-4">{description}</p>     
          </div>
        </div>

        {/* Static title that's always visible */}
        <div className="absolute top-6 left-6 right-6">
          <div className="bg-orange-400 backdrop-blur-md rounded-xl p-4  ">
            <h3 className="text-xl font-bold text-white">{title}</h3>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Updated Main Services Component
export default function Services() {
  const services = [
    {
      title: 'Venta de Melamina',
      description: 'Descubre nuestra exclusiva colección de melaminas con acabados premium, texturas innovadoras y colores contemporáneos. Calidad garantizada para tus proyectos más exigentes.',
      image: 'https://venezuela.masisa.com/wp-content/uploads/2014/12/TablasMelamina2.jpg', // Replace with actual melamina image
    },
    {
      title: 'Cortes Especiales',
      description: 'Tecnología de última generación para cortes precisos y acabados perfectos. Nuestro equipo experto materializa tus diseños más complejos con exactitud milimétrica.',
      image: 'https://tablerosmaqui.com/wp-content/uploads/2020/08/kitchen-1-1.jpg', // Replace with actual cortes image
    },
    {
      title: 'Enchapados Curvos',
      description: 'Arte y técnica unidos en soluciones curvas excepcionales. Creamos piezas únicas que combinan elegancia y funcionalidad para proyectos verdaderamente distintivos.',
      image: 'https://tablerosmaqui.com/wp-content/uploads/2024/02/Imagen-servicios-pagina-web-enchapado-curvo-5.jpg', // Replace with actual enchapados image
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section with parallax effect */}
      <section className="relative h-[40vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://media.admagazine.com/photos/6657c55ec67bbc15a10aa2b5/4:3/w_2664,h_1998,c_limit/AMBAR_TULUM2.jpg" 
            alt="Melamina background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 container mx-auto px-4 text-center"
        >
          <h2 className="text-yellow-400 font-medium mb-2 text-xl">Nuestros</h2>
          <h1 className="text-6xl font-bold text-white mb-4">Servicios</h1>
          <h3 className="text-3xl font-light text-white/90">Tableros Maqui</h3>
          
        </motion.div>
      </section>

      {/* Services Grid Section with improved layout */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                {...service}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}