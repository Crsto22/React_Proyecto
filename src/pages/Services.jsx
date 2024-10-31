import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import AutoScroll from "embla-carousel-auto-scroll";

// Counter Component (unchanged)
const Counter = ({ end, duration, suffix = "" }) => {
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

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
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
            <p className="text-white/90 text-sm leading-relaxed mb-4">
              {description}
            </p>
          </div>
        </div>

        {/* Static title that's always visible */}
        <div className="absolute top-6 left-6 right-6">
          <div className="bg-gradient-to-r from-orange-400 to-orange-500 backdrop-blur-md rounded-xl p-4  ">
            <h3 className="text-xl font-bold text-white">{title}</h3>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const brands = [
  {
      id: 1,
      name: "Masisa",
      image:
          "https://tablerosmaqui.com/wp-content/uploads/2024/02/Logos-clientes-tableros-maqui-04.png",
  },
  {
      id: 2,
      name: "Arauco",
      image:
          "https://tablerosmaqui.com/wp-content/uploads/2024/02/Logos-clientes-tableros-maqui-02.png",
  },
  {
      id: 3,
      name: "Novopan",
      image:
          "https://tablerosmaqui.com/wp-content/uploads/2024/02/Logos-clientes-tableros-maqui-03.png",
  },
  {
      id: 4,
      name: "LP Chile",
      image:
          "https://tablerosmaqui.com/wp-content/uploads/2024/02/Logos-clientes-tableros-maqui-01.png",
  },
];

// Updated Main Services Component
export default function Services() {
  const services = [
    {
      title: "Venta de Melamina",
      description:
        "Descubre nuestra exclusiva colección de melaminas con acabados premium, texturas innovadoras y colores contemporáneos. Calidad garantizada para tus proyectos más exigentes.",
      image:
        "https://venezuela.masisa.com/wp-content/uploads/2014/12/TablasMelamina2.jpg", // Replace with actual melamina image
    },
    {
      title: "Cortes Especiales",
      description:
        "Tecnología de última generación para cortes precisos y acabados perfectos. Nuestro equipo experto materializa tus diseños más complejos con exactitud milimétrica.",
      image:
        "https://tablerosmaqui.com/wp-content/uploads/2020/08/kitchen-1-1.jpg", // Replace with actual cortes image
    },
    {
      title: "Enchapados Curvos",
      description:
        "Arte y técnica unidos en soluciones curvas excepcionales. Creamos piezas únicas que combinan elegancia y funcionalidad para proyectos verdaderamente distintivos.",
      image:
        "https://tablerosmaqui.com/wp-content/uploads/2024/02/Imagen-servicios-pagina-web-enchapado-curvo-5.jpg", // Replace with actual enchapados image
    },
  ];

  const [emblaRef1] = useEmblaCarousel(
    {
        loop: true,
        dragFree: true,
    },
    [
        AutoScroll({
            playOnInit: true,
            speed: 1.5,
            startDelay: 0,
        }),
    ]
);

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
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>
      <section className="py-8 md:py-16 bg-gray-50 -mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Marcas <span className="text-yellow-600">Destacadas</span>
            </h2>
            <p className="text-gray-600 mt-2">Distribuidores Oficiales</p>
          </div>

          <div className="overflow-hidden" ref={emblaRef1}>
            <div className="flex">
              {[...brands, ...brands].map((brand, index) => (
                <div
                  key={`${brand.id}-${index}`}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.333333%] lg:flex-[0_0_25%] min-w-0 px-2 md:px-4"
                >
                  <div className="bg-white rounded-lg shadow-md p-4 md:p-6 h-24 md:h-32 flex items-center justify-center hover:scale-105 transition-transform duration-300">
                    <img
                      src={brand.image}
                      alt={`${brand.name} logo`}
                      className="max-w-full h-auto max-h-16 md:max-h-20 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
