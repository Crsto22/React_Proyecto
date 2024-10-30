import React, { useEffect, useRef, useState } from "react";
import { Facebook, ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, Users, Clock, Calendar } from "lucide-react";
import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";

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

const Nosotros = () => {

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
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background */}
      <section className="relative h-[40vh] min-h-[400px] flex items-center">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://media.admagazine.com/photos/62c70bffff99b3e5179312ee/master/pass/ARAUCO-1.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 container mx-auto px-4"
        >
          <div className="text-center">
            <h2 className="text-yellow-400 font-medium mb-2">Acerca de</h2>
            <h1 className="text-6xl font-bold text-white mb-4">Nosotros</h1>
            <h3 className="text-3xl font-light text-white/90">
              Tableros Maqui
            </h3>
          </div>
        </motion.div>
      </section>

      {/* Main Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-block">
                <h2 className="text-4xl font-bold text-gray-900 mb-2">
                  Venta y corte de Melamina
                </h2>
                <div className="h-1 w-20 bg-yellow-400"></div>
              </div>

              <div className="space-y-4 text-gray-700 text-lg">
                <p className="leading-relaxed">
                  Iniciamos operaciones en la ciudad de Arequipa a partir del
                  año 2020 con mucha tenacidad y perseverancia nos hemos
                  mantenido ante la situación que vivíamos en el país.
                </p>
                <p className="leading-relaxed">
                  Somos «Tableros Maqui» un equipo de trabajo que día a día
                  vamos mejorando para ofrecerte un servicio y productos de
                  calidad.
                </p>
              </div>

              <div className="pt-6">
                <p className="font-medium text-gray-900 mb-4 flex items-center gap-2">
                  Síguenos en nuestras redes sociales
                  <ArrowRight className="w-4 h-4 text-yellow-500" />
                </p>
                <motion.a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  <Facebook size={20} />
                  <span className="font-medium">Síguenos en Facebook</span>
                </motion.a>
              </div>
            </div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative"
            >
              <div className="relative md:h-[600px]  rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/271719029_130467932778351_6262976151442988038_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=86c6b0&_nc_eui2=AeEZsaZsxLYAfHty3r9PA0Btul9Zrnjb_Iy6X1mueNv8jBXMoauzwn-B-kp4HcslL_lj4hf12xfI3Lwsn-algjkL&_nc_ohc=__EKSKWbje8Q7kNvgEcqzHk&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=APZ_tnclsNt-n4DPw7UyVAS&oh=00_AYArwZhZoByXHuxsKo5etGSh-uQ3STpGDb46yyyZbZba9w&oe=672841F9"
                  alt="Tableros Maqui Workshop"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 border-8 border-gray-100 rounded-full -z-10"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <section className="mb-20 md:mb-12 ">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            <div className="space-y-4">
              <div className="flex justify-center">
                <CheckCircle2 className="w-12 h-12 text-orange-400" />
              </div>
              <div>
                <h3 className="text-4xl font-bold text-gray-900">
                  <Counter end={400} duration={2} />+
                </h3>
                <p className="text-gray-600 mt-2">Proyectos completos</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-center">
                <Users className="w-12 h-12 text-orange-400" />
              </div>
              <div>
                <h3 className="text-4xl font-bold text-gray-900">
                  <Counter end={30} duration={2} />+
                </h3>
                <p className="text-gray-600 mt-2">Clientes felices</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-center">
                <Clock className="w-12 h-12 text-orange-400" />
              </div>
              <div>
                <h3 className="text-4xl font-bold text-gray-900">
                  <Counter end={100} duration={2} />%
                </h3>
                <p className="text-gray-600 mt-2">Puntualidad</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-center">
                <Calendar className="w-12 h-12 text-orange-400" />
              </div>
              <div>
                <h3 className="text-4xl font-bold text-gray-900">
                  <Counter end={5} duration={2} />
                </h3>
                <p className="text-gray-600 mt-2">Años de servicio</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="py-8 md:py-16 -mt-16">
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
};

export default Nosotros;
